// Builds the scripting API reference (scripting/api/) from the reference notes in Darkride's engine code. The notes
// are the engine's /**jsdoc comments; JSDoc reads them into data, and this script writes one page per namespace or
// class, a page of global types and functions, an overview and the reference's sidebar.
//
//   node build.mjs --engine <a folder holding the engine's source> --version 1.1.2 --commit 02429ffa29 [--draft]
//
// Nothing here runs when the site builds: the pages are written once per release and committed.
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseFragment, serialize } from 'parse5'

const here = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.resolve(here, '../../scripting/api')

const args = {}
for (let i = 2; i < process.argv.length; i++) {
  const a = process.argv[i]
  if (a === '--draft') args.draft = true
  else if (a.startsWith('--')) args[a.slice(2)] = process.argv[++i]
}
if (!args.engine || !args.version || !args.commit) {
  console.error('usage: node build.mjs --engine <folder> --version <1.1.2> --commit <hash> [--draft]')
  process.exit(1)
}

// the same folders the engine's own JSDoc build read; interface/src/audio repeats notes found elsewhere
const sourceDirs = ['assignment-client', 'interface', 'libraries', 'plugins']
const skipDirs = [path.join('interface', 'src', 'audio')]

// the kinds of script, by the engine's tags, in the names builders use (scripting, 11-01)
const scriptTypes = {
  interface: 'client scripts',
  clientEntity: 'entity scripts',
  avatar: 'avatar scripts',
  serverEntity: 'server entity scripts',
  assignmentClient: 'agents',
}

// documented, but not there in this version: left out (scripting, 11-01: Midi isn't registered in 1.1.2)
const notAvailable = ['Midi']

// what the old marketplace left: still in the API, does nothing in Darkride (scripting, 11-01)
const commerceLine = 'From the old marketplace; does nothing in Darkride.'
const commerceFunctions = /Certif/
const commerceProperties = ['itemName', 'itemDescription', 'itemCategories', 'itemArtist', 'itemLicense', 'limitedRun',
  'editionNumber', 'entityInstanceNumber', 'marketplaceID', 'certificateID', 'staticCertificateVersion']

// addresses that no longer answer: a link to one keeps its words and loses the link
const deadHosts = [
  'legacydocs.tivolicloud.com', 'files.tivolicloud.com', 'tivolicloud.com', 'highfidelity.com',
  'www.highfidelity.com', 'metaverse.highfidelity.com', 'content.highfidelity.com',
]

// old names in the notes, changed on the pages; each counted in the report. The notes themselves are scripting's to
// change in the engine, so this list should shrink release by release.
const fixes = [
  [/The High Fidelity camera/g, "Darkride's camera"],
  [/High Fidelity uses a/g, 'Darkride uses a'],
  [/Tivoli Interface/g, 'Darkride'],
  [/a High Fidelity datagram packet/g, 'a network packet'],
  [/"https:\/\/metaverse\.highfidelity\.com"|"https:\/\/tivolicloud\.com"/g, '"https://vr.darkride.ai"'],
  [/Display the High Fidelity home page/g, "Display Darkride's home page"],
  [/"https:\/\/(www\.)?highfidelity\.com\/"/g, '"https://darkride.ai/"'],
  [/"Tivoli (build date|version): "/g, '"Darkride $1: "'],
]

// "domain" is "world" in Darkride's words: changed in the notes' prose, never in names, quoted values, code, or where
// it means the "domain" kind of entity (scripting, 11-01)
const domainWord = /(?<![\w"'“.\/-])([Dd])omain(s|'s)?(?![\w"'”\/-])(?!\s+entit)(?!,\s*avatar)(?!\s+or\s+avatar)/g

// a page whose Markdown is bigger than this (about 400 KB of HTML) gets its types on a page of their own, so the
// browser has fewer elements to lay out (performance, 11-01), when the types are a big part of it (Entities' are; on
// MyAvatar it's the functions, which stay together so the browser's find covers them)
const splitAt = 170 * 1024
const splitTypesAt = 60 * 1024

const newReport = () => ({ fixes: new Map(), unresolved: new Map(), deadLinks: new Map(), orphans: new Map(),
  worlds: 0, duplicates: 0 })
let report = newReport()
const bump = (map, key) => map.set(key, (map.get(key) || 0) + 1)

// --- read the notes ---------------------------------------------------------------------------------------------

function readNotes(root) {
  const notes = []
  const walk = (dir) => {
    for (const name of fs.readdirSync(dir).sort()) {
      const p = path.join(dir, name)
      if (skipDirs.some((s) => p.endsWith(s))) continue
      const stat = fs.lstatSync(p)
      if (stat.isDirectory()) walk(p)
      else if (/\.(h|hpp|c|cpp)$/.test(name)) {
        const found = fs.readFileSync(p, 'utf8').match(/\/\*\*jsdoc[^]*?\*\//g)
        if (found) notes.push(...found.map((n) => n.replace('/**jsdoc', '/**')))
      }
    }
  }
  for (const d of sourceDirs) walk(path.join(root, d))
  return notes
}

const notes = readNotes(path.resolve(args.engine))
const work = fs.mkdtempSync(path.join(os.tmpdir(), 'darkride-api-'))
const notesFile = path.join(work, 'notes.js')
fs.writeFileSync(notesFile, notes.join('\n'))
const jsdoc = path.join(here, 'node_modules', '.bin', 'jsdoc')
const raw = execFileSync(jsdoc, ['-X', '-c', path.join(here, 'jsdoc.json'), notesFile], {
  cwd: here,
  maxBuffer: 512 * 1024 * 1024,
})
fs.rmSync(work, { recursive: true })
const doclets = JSON.parse(raw).filter((d) => !d.undocumented && d.kind !== 'package')

// --- sort the notes into pages ----------------------------------------------------------------------------------

const plain = (longname) => longname.replace(/\(0\)/g, '')
// a dot in the last part of an address reads as a file ending on the website's server, so nested names use a dash
const fileName = (longname) => plain(longname).replace(/\./g, '-')
const isSignal = (d) => d.kind === 'function' && d.returns?.[0]?.type?.names?.[0] === 'Signal'
const leftOut = (longname) => notAvailable.includes(plain(longname).split(/[.#~]/)[0])

const pages = new Map()
const newPage = (key, title, doclet) => {
  const page = { key, title, file: fileName(key), doclet, type: null, properties: [], functions: [], signals: [],
    types: [], anchors: new Set(), split: false }
  page.typesPage = { title: `${title} types`, file: page.file + '-types', anchors: new Set(), owner: page }
  pages.set(key, page)
  return page
}
for (const d of doclets) {
  if ((d.kind === 'namespace' || d.kind === 'class') && !leftOut(d.longname)) newPage(d.longname, plain(d.longname), d)
}
const globals = newPage('globals', 'Global types and functions', null)
globals.file = 'globals'

// the same note read twice (a header and its source both carry it) is kept once
const seen = new Set()
for (const d of doclets) {
  if (d.kind === 'namespace' || d.kind === 'class' || leftOut(d.memberof || d.longname)) continue
  const fingerprint = d.longname + '\u0000' + (d.description || '') + JSON.stringify(d.params || [])
  if (seen.has(fingerprint)) { report.duplicates++; continue }
  seen.add(fingerprint)

  let page
  if (!d.memberof) {
    // a global type that shares its name with a namespace (Vec3, Quat, Uuid, Mat4, PickType) goes on its page
    page = d.kind === 'typedef' && pages.get(d.longname + '(0)')
    if (page && !page.type) { page.type = d; continue }
    page = globals
  } else {
    page = pages.get(d.memberof)
    if (!page) { bump(report.orphans, d.memberof); continue }
  }
  if (d.kind === 'typedef') page.types.push(d)
  else if (d.kind === 'member') page.properties.push(d)
  else if (isSignal(d)) page.signals.push(d)
  else if (d.kind === 'function') page.functions.push(d)

  if (d.memberof === 'Entities' && d.kind === 'function' && commerceFunctions.test(d.name) && !d.deprecated) {
    d.deprecated = commerceLine
  }
  for (const p of d.longname === 'Entities.EntityProperties' ? d.properties || [] : []) {
    if (commerceProperties.includes(p.name)) p.description = `<em>${commerceLine}</em> ` + (p.description || '')
  }
}
const { duplicates, orphans } = report

const byName = (a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }) || 0
for (const page of pages.values()) for (const list of [page.functions, page.signals, page.types]) list.sort(byName)

// one anchor per item, unique on its page; the sections' own anchors are taken first
const sectionIds = ['type', 'properties', 'functions', 'signals', 'types', 'deprecated']
let anchorOf
function giveAnchors() {
  anchorOf = new Map()
  for (const page of pages.values()) {
    page.anchors = new Set(sectionIds)
    page.typesPage.anchors = new Set(sectionIds)
    for (const [list, onPage] of [[page.functions, page], [page.signals, page],
      [page.types, page.split ? page.typesPage : page]]) {
      for (const d of list) {
        const base = d.name.replace(/[^\w-]/g, '-')
        let id = base
        for (let n = 2; onPage.anchors.has(id); n++) id = base + '-' + n
        onPage.anchors.add(id)
        d.anchor = id
        if (!anchorOf.has(d.longname)) anchorOf.set(d.longname, { page: onPage, id })
      }
    }
  }
}

// --- links ------------------------------------------------------------------------------------------------------

// where a name in a note leads: a page, or an item's anchor on a page
function target(name) {
  const tries = [name, name.replace(/\(0\)/g, ''), name.replace(/^([^.#~]+)([.#~])/, '$1(0)$2')]
  for (const t of tries) {
    if (pages.has(t)) return { page: pages.get(t), id: '' }
    if (pages.has(t + '(0)')) return { page: pages.get(t + '(0)'), id: '' }
    if (anchorOf.has(t)) return anchorOf.get(t)
  }
  // a global type that went on a namespace's page
  const g = doclets.find((d) => d.longname === name && d.kind === 'typedef' && !d.memberof)
  if (g) return pages.get(name + '(0)') ? { page: pages.get(name + '(0)'), id: 'type' } : null
  // a property of a namespace: its page's Properties
  const m = name.match(/^(.+)\.([^.]+)$/)
  if (m) {
    const owner = pages.get(m[1]) || pages.get(m[1] + '(0)')
    if (owner?.doclet?.properties?.some((p) => p.name === m[2])) return { page: owner, id: 'properties' }
  }
  return null
}

// pages are all in one folder, so a link is the page's file name: it needs no base and no file ending
const hrefFor = (t, from) => (t.page === from ? '' : t.page.file) + (t.id ? '#' + t.id : '')

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const isDead = (url) => {
  try { return deadHosts.includes(new URL(url).hostname) } catch { return false }
}

function linkHtml(name, text, from) {
  if (/^https?:\/\//.test(name)) {
    if (isDead(name)) { bump(report.deadLinks, name); return esc(text || name) }
    return `<a href="${esc(name)}" target="_blank" rel="noopener">${esc(text || name)}</a>`
  }
  const t = target(name)
  if (!t) {
    bump(report.unresolved, name)
    return text ? esc(text) : `<code>${esc(plain(name))}</code>`
  }
  return text ? `<a href="${esc(hrefFor(t, from))}">${esc(text)}</a>`
    : `<a href="${esc(hrefFor(t, from))}"><code>${esc(plain(name))}</code></a>`
}

// a JSDoc type, such as Array.<Uuid> or Object.<string, Vec3>, with each known name linked
function typeHtml(type, from) {
  if (!type?.names?.length) return ''
  return type.names.map((n) => n.replace(/\.</g, '<').split(/([A-Za-z_][\w.()~#-]*)/).map((part, i) => {
    if (i % 2 === 0) return esc(part)
    const t = target(part)
    return t ? `<a href="${esc(hrefFor(t, from))}">${esc(plain(part))}</a>` : esc(plain(part))
  }).join('')).join(' | ')
}

// --- a note's text, as HTML ------------------------------------------------------------------------------------

const applyFixes = (s) => {
  for (const [pattern, to] of fixes) {
    s = s.replace(pattern, (...m) => {
      bump(report.fixes, String(pattern))
      return to.replace(/\$1/g, m[1] || '')
    })
  }
  return s
}

const prose = (s) => s.replace(domainWord, (_, d, end = '') => {
  report.worlds++
  return (d === 'D' ? 'W' : 'w') + 'orld' + end
})

const blockStart = /^\s*<(p|ul|ol|table|pre|div|h\d|blockquote|dl)[\s>]/i
const blockEnd = /<\/(p|li|tr|thead|tbody|table|ul|ol|pre|div|h\d|blockquote|dl|dt|dd)>(?!$)/g

// the notes are HTML with JSDoc's {@link} tags: links resolved, paragraphs made, then parsed and written out again so
// that the page always gets well-formed HTML with no blank line in it (Markdown leaves such an HTML block alone). Lines
// stay short, one per paragraph or table row: the site's search indexer takes minutes over very long lines.
function textHtml(text, from) {
  if (!text) return ''
  let s = applyFixes(text)
  s = s.replace(/\{@link(?:code|plain)?\s+([^\s|}]+)(?:\s*\|\s*([^}]*)|\s+([^}]*))?\}/g,
    (_, name, a, b) => linkHtml(name, (a || b || '').trim(), from))
  s = s.split(/\n\s*\n/).map((chunk) => (chunk.trim() && !blockStart.test(chunk) ? `<p>${chunk}</p>` : chunk)).join('\n')

  const tree = parseFragment(s)
  const visit = (node, inPre, inCode) => {
    if (node.nodeName === '#text' && !inPre) {
      node.value = node.value.replace(/\s+/g, ' ')
      if (!inCode) node.value = prose(node.value)
    }
    if (node.attrs) for (const a of node.attrs) a.value = a.value.replace(/\s+/g, ' ')
    // the notes' pictures are copied beside the pages (images/)
    if (node.nodeName === 'img') {
      for (const a of node.attrs) if (a.name === 'src') a.value = a.value.replace(/^\/images\//, './images/')
    }
    if (node.nodeName === 'a') {
      const href = node.attrs.find((a) => a.name === 'href')?.value || ''
      if (isDead(href) || href.startsWith('chrome:')) {
        bump(report.deadLinks, href)
        node.nodeName = node.tagName = 'span'
        node.attrs = []
      } else if (/^https?:/.test(href) && !node.attrs.some((a) => a.name === 'target')) {
        node.attrs.push({ name: 'target', value: '_blank' }, { name: 'rel', value: 'noopener' })
      }
    }
    for (const child of node.childNodes || []) {
      visit(child, inPre || node.nodeName === 'pre', inCode || node.nodeName === 'code')
    }
  }
  visit(tree, false, false)
  return serialize(tree).replace(/\n/g, '&#10;').trim().replace(blockEnd, '$&\n')
}

// a block of HTML in a page: v-pre keeps Vue from reading {{ }} in a note as its own
const block = (cls, html) => (html ? `<div class="${cls}" v-pre>${html}</div>\n` : '')

// the first sentence, as plain words, for the overview and search results
function summary(text) {
  if (!text) return ''
  const words = applyFixes(text)
    .replace(/\{@link(?:code|plain)?\s+([^\s|}]+)(?:\s*\|\s*([^}]*)|\s+([^}]*))?\}/g, (_, n, a, b) => (a || b || plain(n)).trim())
    .replace(/<[^>]+>/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&')
    .replace(/&mdash;/g, '—').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim()
  const m = words.match(/^(.+?[.!?])(\s|$)/)
  return prose(m ? m[1] : words).slice(0, 200)
}

// --- the parts of a page ----------------------------------------------------------------------------------------

function table(head, rows) {
  if (!rows.length) return ''
  return '<table><thead><tr>' + head.map((h) => `<th>${h}</th>`).join('') + '</tr></thead><tbody>\n' +
    rows.map((r) => '<tr>' + r.map((c) => `<td>${c}</td>`).join('') + '</tr>\n').join('') + '</tbody></table>'
}

function propertiesTable(props, from) {
  if (!props?.length) return ''
  const withDefault = props.some((p) => p.defaultvalue !== undefined)
  const head = ['Name', 'Type', ...(withDefault ? ['Default'] : []), 'Description']
  return table(head, props.map((p) => [
    `<code>${esc(p.name)}</code>` + (p.optional ? ' <em>optional</em>' : ''),
    typeHtml(p.type, from),
    ...(withDefault ? [p.defaultvalue !== undefined ? `<code>${esc(p.defaultvalue)}</code>` : ''] : []),
    textHtml(p.description, from),
  ]))
}

const paramsTable = propertiesTable

function signature(d, owner) {
  const params = (d.params || []).filter((p) => p.name && !p.name.includes('.'))
    .map((p) => (p.variable ? '...' : '') + p.name + (p.optional ? '?' : ''))
    .join(', ')
  if (isSignal(d)) return `${owner}.${d.name}.connect(function (${params}) {\n    ...\n});`
  if (d.scope === 'instance') return `${d.name}(${params})`
  return `${d.memberof ? owner + '.' : ''}${d.name}(${params})`
}

function fence(code, lang) {
  const tick = code.includes('```') ? '~~~~' : '```'
  return `${tick}${lang}\n${code.replace(/\s+$/, '')}\n${tick}\n`
}

function examples(d, from) {
  let out = ''
  for (const ex of d.examples || []) {
    const m = ex.match(/^\s*<caption>([^]*?)<\/caption>\s*/)
    const caption = m ? m[1] : ''
    out += '\n' + block('api-example', `<strong>Example${caption ? ':' : ''}</strong> ${textHtml(caption, from)}`)
    out += '\n' + fence(applyFixes(m ? ex.slice(m[0].length) : ex), 'js')
  }
  return out
}

// one entry, in an element of its own: the browser lays out only the entries near the screen (content-visibility,
// custom.css; performance, 11-01)
function item(d, page, ownerName) {
  let out = `\n<div class="api-entry">\n\n### ${d.name} {#${d.anchor}}\n\n`
  if (d.kind === 'function') out += fence(signature(d, ownerName), 'js') + '\n'
  if (d.deprecated) {
    out += '::: warning Deprecated\n' + block('api-text', textHtml(d.deprecated === true ? '' : d.deprecated, page) ||
      'This may be removed in a later version.') + ':::\n\n'
  }
  out += block('api-text', textHtml(d.description, page))
  if (d.kind === 'typedef') {
    const t = d.type?.names?.join(' | ')
    if (t && !/^object$/i.test(t)) out += block('api-type', `<strong>Type:</strong> ${typeHtml(d.type, page)}`)
    out += block('api-table', propertiesTable(d.properties, page))
  }
  if (d.params?.length) out += block('api-table', '<strong>Parameters</strong>' + paramsTable(d.params, page))
  for (const r of isSignal(d) ? [] : d.returns || []) {
    out += block('api-returns', `<strong>Returns:</strong> ${typeHtml(r.type, page)} ${textHtml(r.description, page)}`)
  }
  for (const e of d.exceptions || []) {
    out += block('api-returns', `<strong>Throws:</strong> ${typeHtml(e.type, page)} ${textHtml(e.description, page)}`)
  }
  if (d.see?.length) {
    out += block('api-see', '<strong>See also:</strong> ' + d.see.map((s) =>
      /^\{@link/.test(s) || /\s/.test(s.trim()) ? textHtml(s, page).replace(/^<p>|<\/p>$/g, '') : linkHtml(s.trim(), '', page)).join(', '))
  }
  return out + examples(d, page) + '\n</div>\n'
}

function section(title, id, list, page, ownerName, intro = '') {
  const live = list.filter((d) => !d.deprecated)
  if (!live.length) return ''
  return `\n## ${title} {#${id}}\n` + (intro ? `\n${intro}\n` : '') + live.map((d) => item(d, page, ownerName)).join('')
}

function deprecatedSection(list, page, ownerName) {
  const old = list.filter((x) => x.deprecated)
  if (!old.length) return ''
  return '\n## Deprecated {#deprecated}\n\nStill there for older scripts; new scripts should not use these.\n' +
    old.map((x) => item(x, page, ownerName)).join('')
}

function front(title, description) {
  return '---\n' + `title: ${JSON.stringify(title)}\n` +
    (description ? `description: ${JSON.stringify(description)}\n` : '') +
    (args.draft ? 'draft: true\n' : '') + '---\n'
}

const signalsIntro = 'Connect a function to a signal to run it each time the signal fires; disconnect it the same way ' +
  'with `disconnect`.'

function renderPage(page) {
  const d = page.doclet
  const ownerName = page.title
  let out = front(page.title, summary(d?.description) || (page === globals ? 'Types and functions every script can use.' : ''))
  out += `\n# ${page.title}\n\n`
  if (page === globals) {
    out += 'Types used across the API, and the few functions that belong to no namespace.\n\n'
  } else {
    const kind = d.kind === 'class' ? 'Class' : 'Namespace'
    const where = (d.scriptTypes || []).map((t) => scriptTypes[t])
    out += block('api-kind', `<strong>${kind}.</strong>` +
      (where.length ? ` Can be used in: ${where.join(', ')}.` : ''))
    out += '\n' + block('api-text', textHtml(d.description, page))
    if (d.kind === 'class' && !d.hideconstructor) {
      const params = (d.params || []).filter((p) => !p.name?.includes('.'))
        .map((p) => (p.variable ? '...' : '') + p.name + (p.optional ? '?' : '')).join(', ')
      out += '\n' + fence(`new ${page.title}(${params})`, 'js')
      if (d.params?.length) out += '\n' + block('api-table', '<strong>Parameters</strong>' + paramsTable(d.params, page))
    }
    out += examples(d, page)
  }
  if (page.type) {
    out += `\n## The ${page.title} type {#type}\n\n` + block('api-text', textHtml(page.type.description, page)) +
      block('api-table', propertiesTable(page.type.properties, page)) + examples(page.type, page)
  }
  const props = [...(d?.properties || []), ...page.properties]
  if (props.length) {
    out += '\n## Properties {#properties}\n\n' + block('api-table', propertiesTable(props, page))
  }
  out += section(page === globals ? 'Functions' : d?.kind === 'class' ? 'Methods' : 'Functions', 'functions',
    page.functions, page, ownerName)
  out += section('Signals', 'signals', page.signals, page, ownerName, signalsIntro)
  if (page.split) {
    out += `\n## Types {#types}\n\n${page.title}'s types (${page.types.slice(0, 3).map((t) => t.name).join(', ')} and ` +
      `the rest) are on a page of their own: [${page.typesPage.title}](./${page.typesPage.file}).\n`
    out += deprecatedSection([...page.functions, ...page.signals], page, ownerName)
  } else {
    out += section('Types', 'types', page.types, page, ownerName)
    out += deprecatedSection([...page.functions, ...page.signals, ...page.types], page, ownerName)
  }
  return out
}

function renderTypesPage(page) {
  const tp = page.typesPage
  let out = front(tp.title, `The types used by ${page.title}.`)
  out += `\n# ${tp.title}\n\nThe types used by [${page.title}](./${page.file}).\n`
  out += section('Types', 'types', page.types, tp, page.title)
  return out + deprecatedSection(page.types, tp, page.title)
}

// --- the overview and the sidebar -------------------------------------------------------------------------------

const mostUsed = ['Entities', 'MyAvatar', 'AvatarList', 'Script', 'Vec3', 'Quat', 'Messages', 'Audio', 'SoundCache',
  'Camera', 'Controller', 'Window', 'Overlays', 'Uuid']

function renderOverview(list) {
  const row = (p) => `| [${p.title}](./${p.file}) | ${summary(p.doclet?.description).replace(/\|/g, '\\|')} |`
  const shortCommit = args.commit.slice(0, 10)
  let out = front('Scripting API reference', `Every namespace, class and function a Darkride script can use, as of ${args.version}.`)
  out += `
# Scripting API reference

Every namespace, class, function and signal a Darkride script can use, as of Darkride ${args.version}. It's built from
the reference notes in Darkride's code (commit \`${shortCommit}\`), so it says what that version does.

## The engine

Scripts are JavaScript. Darkride ${args.version} runs every kind of script on its WebAssembly script engine (QuickJS) by
default, and it understands modern JavaScript (ES2023). A visitor can switch their own app back to the older QtScript
engine (**Developer** > **Scripting**), and a server's operator can switch the server; QtScript understands only older
JavaScript (ES5), so a script meant to run on both should stick to ES5. A world can't choose.

- IDs (UUIDs) are strings.
- There's no debugger: use \`print\` and \`console\`.
- Each call into a script (an update, a timer, a signal) is stopped after 5 seconds of its own running time.
- What doesn't work yet: [Known issues](/known-issues).

## The kinds of script

Each page says which kinds of script can use it.

| Kind | Where it runs |
| --- | --- |
| **Client scripts** | In your own copy of the Darkride app, for you alone: the app's own scripts and the ones you run from **Edit** > **Running Scripts**. |
| **Entity scripts** | Attached to an entity in a world; they run in each visitor's app. |
| **Avatar scripts** | Attached to an avatar, in the app of the person wearing it. |
| **Server entity scripts** | Attached to an entity, on the world's server; everyone sees what they do. |
| **Agents** | On the world's server, on their own, taking part like a visitor: a bot, for example. |

The engine's own notes call client scripts "Interface scripts", entity scripts "client entity scripts" and agents
"assignment client scripts".

Since 1.1.2, a world's entity scripts (its scripts on visitors' computers) can use only the parts of the API a world
needs; your own client scripts can use everything. The pages don't show this yet.

## Most used

| Namespace | What it's for |
| --- | --- |
${mostUsed.map((n) => pages.get(n) || pages.get(n + '(0)')).filter(Boolean).map(row).join('\n')}

## Everything, A to Z

| Namespace or class | What it's for |
| --- | --- |
${list.map(row).join('\n')}

[Global types and functions](./globals): \`Vec2\`, \`Color\`, the event types, \`print\`, \`request\` and the rest.
`
  return out
}

const pageList = [...pages.values()].filter((p) => p !== globals)
  .sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }))

// two passes: the first measures each page and decides which get their types split off, the second writes them with
// every link pointing to where its item ended up
giveAnchors()
for (const page of pages.values()) {
  page.split = renderPage(page).length > splitAt &&
    section('Types', 'types', page.types, page, page.title).length > splitTypesAt
}
giveAnchors()
report = { ...newReport(), duplicates, orphans }

fs.rmSync(outDir, { recursive: true, force: true })
fs.mkdirSync(outDir, { recursive: true })
fs.cpSync(path.join(here, 'images'), path.join(outDir, 'images'), { recursive: true })
for (const page of pages.values()) {
  fs.writeFileSync(path.join(outDir, page.file + '.md'), renderPage(page))
  if (page.split) fs.writeFileSync(path.join(outDir, page.typesPage.file + '.md'), renderTypesPage(page))
}
fs.writeFileSync(path.join(outDir, 'index.md'), renderOverview(pageList))

// the sidebar: the overview, the most used, then A to Z, closed until opened (or until one of its pages is shown), so
// fewer links are in view for VitePress to fetch ahead (performance, 11-01)
const link = (p) => ({ text: p.title, link: `/scripting/api/${p.file}` })
fs.writeFileSync(path.join(outDir, 'sidebar.json'), JSON.stringify([
  { text: 'Scripting API', items: [{ text: 'Overview', link: '/scripting/api/' }, link(globals)] },
  { text: 'Most used', items: mostUsed.map((n) => pages.get(n) || pages.get(n + '(0)')).filter(Boolean).map(link) },
  { text: 'A to Z', collapsed: true, items: pageList.flatMap((p) => (p.split ? [link(p), link(p.typesPage)] : [link(p)])) },
], null, 2) + '\n')

// --- the report, for scripting's check ---------------------------------------------------------------------------

const count = (kind) => doclets.filter((d) => d.kind === kind).length
const written = fs.readdirSync(outDir).filter((f) => f.endsWith('.md')).length
const lines = [
  `# API reference build: Darkride ${args.version} (${args.commit})`,
  '',
  `${notes.length} notes; ${written} pages; ${count('namespace')} namespaces, ${count('class')} classes, ` +
    `${doclets.filter((d) => d.kind === 'function' && !isSignal(d)).length} functions, ` +
    `${doclets.filter(isSignal).length} signals, ${count('typedef')} types; ${report.duplicates} repeated notes kept once.`,
  `Left out as not in this version: ${notAvailable.join(', ')}. Types on a page of their own: ` +
    `${pageList.filter((p) => p.split).map((p) => p.title).join(', ') || 'none'}. "domain" read as "world" in prose: ` +
    `${report.worlds} times.`,
  '',
  '## Old names changed on the pages (to fix in the engine notes)', '',
  ...[...report.fixes].map(([k, v]) => `- ${v} x \`${k}\``),
  '', '## Links to addresses that no longer answer (kept as words)', '',
  ...[...report.deadLinks].sort().map(([k, v]) => `- ${v} x ${k}`),
  '', '## Names that lead nowhere (shown as code, not links)', '',
  ...[...report.unresolved].sort().map(([k, v]) => `- ${v} x \`${k}\``),
  '', '## Notes whose namespace has no note of its own (left out)', '',
  ...[...report.orphans].sort().map(([k, v]) => `- ${v} x \`${k}\``),
  '',
]
fs.writeFileSync(path.join(here, 'REPORT.md'), lines.join('\n'))
console.log(lines.slice(0, 4).join('\n'))
console.log(`fixes ${[...report.fixes.values()].reduce((a, b) => a + b, 0)}, dead links ${report.deadLinks.size}, ` +
  `unresolved ${report.unresolved.size}, orphans ${report.orphans.size}; see tools/api-reference/REPORT.md`)
