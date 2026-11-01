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

// the kinds of script, as the engine's tags name them
const scriptTypes = {
  interface: 'Interface scripts',
  clientEntity: 'client entity scripts',
  avatar: 'avatar scripts',
  serverEntity: 'server entity scripts',
  assignmentClient: 'assignment client scripts',
}

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

const report = { fixes: new Map(), unresolved: new Map(), deadLinks: new Map(), orphans: new Map(), duplicates: 0 }
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

const pages = new Map()
const newPage = (key, title, doclet) => {
  const page = { key, title, file: fileName(key), doclet, type: null, properties: [], functions: [], signals: [],
    types: [], anchors: new Set() }
  pages.set(key, page)
  return page
}
for (const d of doclets) if (d.kind === 'namespace' || d.kind === 'class') newPage(d.longname, plain(d.longname), d)
const globals = newPage('globals', 'Global types and functions', null)
globals.file = 'globals'

// the same note read twice (a header and its source both carry it) is kept once
const seen = new Set()
for (const d of doclets) {
  if (d.kind === 'namespace' || d.kind === 'class') continue
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
}

// one anchor per item, unique on its page
const anchorOf = new Map()
const giveAnchor = (page, d) => {
  let id = d.name.replace(/[^\w-]/g, '-')
  for (let n = 2; page.anchors.has(id); n++) id = d.name.replace(/[^\w-]/g, '-') + '-' + n
  page.anchors.add(id)
  if (!anchorOf.has(d.longname)) anchorOf.set(d.longname, { page, id })
  return id
}
const byName = (a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }) || 0
for (const page of pages.values()) {
  for (const list of [page.functions, page.signals, page.types]) {
    list.sort(byName)
    for (const d of list) d.anchor = giveAnchor(page, d)
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
  // a global type that went on a namespace's page, or onto the globals page
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

// --- a note's text, as HTML on one line -------------------------------------------------------------------------

const applyFixes = (s) => {
  for (const [pattern, to] of fixes) {
    s = s.replace(pattern, (...m) => {
      bump(report.fixes, String(pattern))
      return to.replace(/\$1/g, m[1] || '')
    })
  }
  return s
}

const blockStart = /^\s*<(p|ul|ol|table|pre|div|h\d|blockquote|dl)[\s>]/i

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
  const visit = (node, inPre) => {
    if (node.nodeName === '#text' && !inPre) node.value = node.value.replace(/\s+/g, ' ')
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
    for (const child of node.childNodes || []) visit(child, inPre || node.nodeName === 'pre')
  }
  visit(tree, false)
  return serialize(tree).replace(/\n/g, '&#10;').trim().replace(blockEnd, '$&\n')
}

const blockEnd = /<\/(p|li|tr|thead|tbody|table|ul|ol|pre|div|h\d|blockquote|dl|dt|dd)>(?!$)/g

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
  return (m ? m[1] : words).slice(0, 200)
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

function item(d, page, ownerName) {
  let out = `\n### ${d.name} {#${d.anchor}}\n\n`
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
  return out + examples(d, page)
}

function section(title, id, list, page, ownerName) {
  const live = list.filter((d) => !d.deprecated)
  if (!live.length) return ''
  return `\n## ${title} {#${id}}\n` + live.map((d) => item(d, page, ownerName)).join('')
}

function front(title, description) {
  return '---\n' + `title: ${JSON.stringify(title)}\n` +
    (description ? `description: ${JSON.stringify(description)}\n` : '') +
    (args.draft ? 'draft: true\n' : '') + '---\n'
}

function writePage(page) {
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
    page.anchors.add('type')
    out += `\n## The ${page.title} type {#type}\n\n` + block('api-text', textHtml(page.type.description, page)) +
      block('api-table', propertiesTable(page.type.properties, page)) + examples(page.type, page)
  }
  const props = [...(d?.properties || []), ...page.properties.map((m) => ({ ...m, name: m.name }))]
  if (props.length) {
    out += '\n## Properties {#properties}\n\n' + block('api-table', propertiesTable(props, page))
  }
  out += section(page === globals ? 'Functions' : d?.kind === 'class' ? 'Methods' : 'Functions', 'functions',
    page.functions, page, ownerName)
  out += section('Signals', 'signals', page.signals, page, ownerName)
  if (page.signals.some((s) => !s.deprecated)) {
    out = out.replace('\n## Signals {#signals}\n', '\n## Signals {#signals}\n\n' +
      `Connect a function to a signal to run it each time the signal fires; disconnect it the same way with \`disconnect\`.\n`)
  }
  out += section('Types', 'types', page.types, page, ownerName)
  const old = [...page.functions, ...page.signals, ...page.types].filter((x) => x.deprecated)
  if (old.length) {
    out += '\n## Deprecated {#deprecated}\n\nStill there for older scripts; new scripts should not use these.\n' +
      old.map((x) => item(x, page, ownerName)).join('')
  }
  fs.writeFileSync(path.join(outDir, page.file + '.md'), out)
}

// --- the overview and the sidebar -------------------------------------------------------------------------------

const mostUsed = ['Entities', 'MyAvatar', 'AvatarList', 'Script', 'Vec3', 'Quat', 'Messages', 'Audio', 'SoundCache',
  'Camera', 'Controller', 'Window', 'Overlays', 'Uuid']

function writeOverview(list) {
  const row = (p) => `| [${p.title}](./${p.file}) | ${summary(p.doclet?.description).replace(/\|/g, '\\|')} |`
  const shortCommit = args.commit.slice(0, 10)
  let out = front('Scripting API reference', `Every namespace, class and function a Darkride script can use, as of ${args.version}.`)
  out += `
# Scripting API reference

Every namespace, class, function and signal a Darkride script can use, as of Darkride ${args.version}. It's built from
the reference notes in Darkride's code (commit \`${shortCommit}\`), so it says what that version does.

Scripts are JavaScript. Darkride runs them on its WebAssembly script engine (QuickJS), which understands modern
JavaScript (ES2023).

## The kinds of script

Each page says which kinds of script can use it.

| Kind | Where it runs |
| --- | --- |
| **Interface scripts** | In your copy of the Darkride app, for you alone: the scripts you run from **Edit** > **Running Scripts**. |
| **Client entity scripts** | In each visitor's app, attached to an entity in a world. |
| **Avatar scripts** | In each visitor's app, attached to an avatar. |
| **Server entity scripts** | On the world's server, attached to an entity; everyone sees what they do. |
| **Assignment client scripts** | On the world's server, on their own, such as a bot (an agent). |

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
  fs.writeFileSync(path.join(outDir, 'index.md'), out)
}

const pageList = [...pages.values()].filter((p) => p !== globals)
  .sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }))

fs.rmSync(outDir, { recursive: true, force: true })
fs.mkdirSync(outDir, { recursive: true })
fs.cpSync(path.join(here, 'images'), path.join(outDir, 'images'), { recursive: true })
for (const page of pages.values()) writePage(page)
writeOverview(pageList)
const link = (p) => ({ text: p.title, link: `/scripting/api/${p.file}` })
fs.writeFileSync(path.join(outDir, 'sidebar.json'), JSON.stringify([
  { text: 'Scripting API', items: [{ text: 'Overview', link: '/scripting/api/' }, link(globals)] },
  { text: 'Most used', items: mostUsed.map((n) => pages.get(n) || pages.get(n + '(0)')).filter(Boolean).map(link) },
  { text: 'A to Z', collapsed: false, items: pageList.map(link) },
], null, 2) + '\n')

// --- the report, for scripting's check ---------------------------------------------------------------------------

const count = (kind) => doclets.filter((d) => d.kind === kind).length
const lines = [
  `# API reference build: Darkride ${args.version} (${args.commit})`,
  '',
  `${notes.length} notes; ${pages.size} pages; ${count('namespace')} namespaces, ${count('class')} classes, ` +
    `${doclets.filter((d) => d.kind === 'function' && !isSignal(d)).length} functions, ` +
    `${doclets.filter(isSignal).length} signals, ${count('typedef')} types; ${report.duplicates} repeated notes kept once.`,
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
console.log(lines.slice(0, 3).join('\n'))
console.log(`fixes ${[...report.fixes.values()].reduce((a, b) => a + b, 0)}, dead links ${report.deadLinks.size}, ` +
  `unresolved ${report.unresolved.size}, orphans ${report.orphans.size}; see tools/api-reference/REPORT.md`)
