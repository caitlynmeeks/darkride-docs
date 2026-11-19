<script setup lang="ts">
// The app grid (Caity's "grid yes", 11-19; mary's team/mary/brand/app-switcher/APP-GRID-BUILD.md): the nine dots at
// the right end of the top bar open a small panel of Darkride's apps, the same panel as on darkride.ai and Chat. Docs
// is ringed, since you're in it.
//
// The list: darkride.ai keeps the one list (served at /assets/apps.json, the same site as the docs). apps.json here is
// a copy of it without the Admin row, so the panel opens at once and the Admin address isn't in the docs for
// everyone. The first time the panel opens, the docs fetch the live list and use it from then on; if it doesn't load
// or isn't a list this code knows (version 1), the copy stays.
//
// Signed in or not: each time the panel opens, the docs ask darkride.ai's GET /api/user/signed-in, which answers only
// {"signedIn": true|false, "admin": true|false}. The browser sends its own sign-in cookie with it; this code never
// reads the cookie or any token. Anything but a 200 with that answer, or no answer in 5 seconds, shows the
// signed-out set. Your apps (My Worlds, My Files, AI Residents & Bots) are added in the browser after the answer;
// nothing signed-in is written into a page. Admin shows only from the live list, and only when the answer says admin
// (it grants nothing: darkride.ai checks again).
import { computed, h, nextTick, onBeforeUnmount, onMounted, ref, watch, type FunctionalComponent } from 'vue'
import { useRoute } from 'vitepress'
import builtIn from './apps.json'
import { DOT, DOTS, ICONS, type Shape } from './app-icons'

type Who = 'everyone' | 'signedIn' | 'admin'
interface App {
  id: string
  name: string
  icon: string
  url: string
  row: number
  who: Who
}

const LIST_URL = '/assets/apps.json'
const SIGNED_IN_URL = '/api/user/signed-in'
const SIGNED_IN_WAIT_MS = 5000
const HERE = 'docs' // the app ringed in the panel
const WHO: Who[] = ['everyone', 'signedIn', 'admin']

// one entry of a fetched list, or null if it can't be shown: an address must be https (never a script address) and on
// darkride.ai or one of its own sites (chat.darkride.ai), as Chat's grid has it
function onDarkride(address: URL): boolean {
  return address.protocol == 'https:' && (address.hostname == 'darkride.ai' || address.hostname.endsWith('.darkride.ai'))
}

function readApp(raw: unknown): App | null {
  if (raw == null || typeof raw != 'object') return null
  const { id, name, icon, url, row, who } = raw as Record<string, unknown>
  if (typeof id != 'string' || typeof name != 'string' || typeof icon != 'string' || typeof url != 'string') return null
  if (typeof row != 'number' || !WHO.includes(who as Who)) return null
  let address: URL
  try {
    address = new URL(url)
  } catch {
    return null
  }
  if (!onDarkride(address)) return null
  return { id, name, icon, url: address.href, row, who: who as Who }
}

function readList(raw: unknown): App[] | null {
  if (raw == null || typeof raw != 'object') return null
  const { version, apps } = raw as Record<string, unknown>
  if (version !== 1 || !Array.isArray(apps)) return null
  const read = apps.map(readApp).filter((app): app is App => app != null)
  return read.length > 0 ? read : null
}

const route = useRoute()
const root = ref<HTMLElement | null>(null)
const button = ref<HTMLButtonElement | null>(null)
const panel = ref<HTMLElement | null>(null)

const open = ref(false)
const apps = ref<App[]>(readList(builtIn) ?? [])
const signedIn = ref(false)
const admin = ref(false)
let list: 'copy' | 'fetching' | 'live' = 'copy'
let asking = 0 // only the newest sign-in answer counts
const focused = ref(0) // the tile arrow keys move from; only it is in the Tab order, so Tab leaves the panel

// who sees which: everyone the first and last rows, signed in the middle one, Admin admins only; by row, in list order
const tiles = computed(() =>
  apps.value
    .filter(
      (app) =>
        app.who == 'everyone' ||
        (app.who == 'signedIn' && signedIn.value) ||
        (app.who == 'admin' && signedIn.value && admin.value),
    )
    .sort((a, b) => a.row - b.row)
    .map((app) => ({
      ...app,
      // only the icons app-icons.ts draws (never an object's built-in, e.g. an icon named "constructor")
      shapes: Object.hasOwn(ICONS, app.icon) ? ICONS[app.icon] : DOT,
      // going to Chat opens a new tab, so the chat is never replaced
      newTab: new URL(app.url).hostname == 'chat.darkride.ai',
    })),
)

async function fetchList() {
  if (list != 'copy') return
  list = 'fetching'
  try {
    const res = await fetch(LIST_URL, { credentials: 'omit', redirect: 'error' })
    const live = res.ok ? readList(await res.json()) : null
    if (live) {
      apps.value = live
      list = 'live'
      return
    }
  } catch {
    // the copy stays
  }
  list = 'copy' // try again on the next open
}

async function askSignedIn() {
  const mine = ++asking
  const stop = new AbortController()
  const timer = setTimeout(() => stop.abort(), SIGNED_IN_WAIT_MS)
  let answer = { signedIn: false, admin: false }
  try {
    const res = await fetch(SIGNED_IN_URL, {
      credentials: 'same-origin',
      cache: 'no-store',
      redirect: 'error',
      headers: { Accept: 'application/json' },
      signal: stop.signal,
    })
    if (res.status == 200) {
      const body: unknown = await res.json()
      if (body != null && typeof body == 'object') {
        const said = body as Record<string, unknown>
        if (typeof said.signedIn == 'boolean' && typeof said.admin == 'boolean')
          answer = { signedIn: said.signedIn, admin: said.signedIn && said.admin }
      }
    }
  } catch {
    // signed out, silently
  } finally {
    clearTimeout(timer)
  }
  if (mine != asking) return
  signedIn.value = answer.signedIn
  admin.value = answer.admin
}

function tileLinks(): HTMLAnchorElement[] {
  return panel.value ? Array.from(panel.value.querySelectorAll<HTMLAnchorElement>('a.tile')) : []
}

function focusTile(index: number) {
  const links = tileLinks()
  if (links.length == 0) return
  focused.value = Math.max(0, Math.min(index, links.length - 1))
  links[focused.value].focus()
}

async function show() {
  open.value = true
  fetchList()
  askSignedIn()
  focused.value = 0
  await nextTick()
  focusTile(0)
}

function close(focusButton: boolean) {
  if (!open.value) return
  open.value = false
  if (focusButton) button.value?.focus()
}

function toggle() {
  if (open.value) close(true)
  else show()
}

// arrow keys move between tiles, three to a row; Escape closes and goes back to the dots; Tab leaves the panel
function onPanelKey(e: KeyboardEvent) {
  const count = tileLinks().length
  const at = tileLinks().indexOf(document.activeElement as HTMLAnchorElement)
  const from = at >= 0 ? at : focused.value
  let to: number | null = null
  if (e.key == 'ArrowRight') to = from + 1
  else if (e.key == 'ArrowLeft') to = from - 1
  else if (e.key == 'ArrowDown') to = from + 3 < count ? from + 3 : from
  else if (e.key == 'ArrowUp') to = from - 3 >= 0 ? from - 3 : from
  else if (e.key == 'Home') to = 0
  else if (e.key == 'End') to = count - 1
  else if (e.key == 'Escape') {
    e.preventDefault()
    close(true)
    return
  }
  if (to == null) return
  e.preventDefault()
  focusTile(to)
}

// Escape from the dots themselves closes it too
function onButtonKey(e: KeyboardEvent) {
  if (e.key == 'Escape' && open.value) {
    e.preventDefault()
    close(true)
  }
}

// a click or tap outside closes it; focus goes back to the dots unless the click was on something that takes focus
function onPointerDown(e: PointerEvent) {
  if (!open.value || !(e.target instanceof Node) || root.value?.contains(e.target)) return
  const takesFocus =
    e.target instanceof Element && e.target.closest('a[href], button, input, select, textarea, [tabindex]') != null
  close(!takesFocus)
}

// focus moving out (Tab past the last tile, or anywhere else) closes it
function onFocusIn(e: FocusEvent) {
  if (open.value && e.target instanceof Node && !root.value?.contains(e.target)) close(false)
}

onMounted(() => {
  document.addEventListener('pointerdown', onPointerDown, true)
  document.addEventListener('focusin', onFocusIn)
})
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onPointerDown, true)
  document.removeEventListener('focusin', onFocusIn)
})
watch(
  () => route.path,
  () => close(false),
)

// a 24 px line icon from app-icons.ts
const Icon: FunctionalComponent<{ shapes: Shape[]; dots?: boolean }> = (props) =>
  h(
    'svg',
    { class: props.dots ? 'glyph dots' : 'glyph', viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false' },
    props.shapes.map(([tag, attrs]) => h(tag, attrs)),
  )
Icon.props = { shapes: Array, dots: Boolean } // dots: the nine solid dots, not a line icon
</script>

<template>
  <div ref="root" class="AppGrid">
    <button
      ref="button"
      type="button"
      class="dots-button"
      :class="{ open }"
      aria-label="Darkride apps"
      title="Darkride apps"
      :aria-expanded="open ? 'true' : 'false'"
      :aria-controls="open ? 'dr-app-grid-panel' : undefined"
      @click="toggle"
      @keydown="onButtonKey"
    >
      <Icon :shapes="DOTS" dots />
    </button>

    <!-- vp-raw: the docs' router leaves these links alone, so the website's pages open as the website -->
    <Transition name="dr-fade">
      <nav
        v-if="open"
        id="dr-app-grid-panel"
        ref="panel"
        class="panel vp-raw"
        aria-label="Darkride apps"
        @keydown="onPanelKey"
      >
        <ul class="tiles">
          <li v-for="(app, i) in tiles" :key="app.id + ':' + i">
            <a
              class="tile"
              :class="{ here: app.id == HERE }"
              :href="app.url"
              :target="app.newTab ? '_blank' : undefined"
              :rel="app.newTab ? 'noopener' : undefined"
              :aria-current="app.id == HERE ? 'page' : undefined"
              :tabindex="i == focused ? 0 : -1"
              @focus="focused = i"
              @click="close(false)"
            >
              <span class="ico"><Icon :shapes="app.shapes" /></span>
              <span class="name">{{ app.name }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </div>
</template>

<style scoped>
/* sizes from APP-GRID-BUILD.md; colours from mary's Night tokens (custom.css, as darkride.ai has them) */
.AppGrid {
  position: relative;
  display: flex;
  align-items: center;
}
/* on phones the bar already puts 8 px between its items */
@media (min-width: 768px) {
  .AppGrid {
    margin-left: 8px;
  }
}

.dots-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  color: var(--dr-text);
  cursor: pointer;
}
.dots-button:hover,
.dots-button.open {
  background: var(--dr-hover);
}
.dots-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--dr-tint);
}

.glyph {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.glyph.dots {
  fill: currentColor;
  stroke: none;
}

/* its right edge under the dots' right edge, 7 px below the bar (the dots sit in the middle of the bar) */
.panel {
  position: absolute;
  top: calc((var(--vp-nav-height) + 40px) / 2 + 7px);
  right: 0;
  width: min(312px, calc(100vw - 24px));
  padding: 10px 12px 12px;
  border-radius: 14px;
  background: var(--dr-card);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.07),
    0 12px 32px rgba(0, 0, 0, 0.45);
  font-family: var(--vp-font-family-base);
  /* the top bar keeps its text on one line; the names here wrap ("AI Residents / & Bots") */
  white-space: normal;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 88px;
  padding: 10px 4px 8px;
  border-radius: 10px;
  color: var(--dr-text);
  text-decoration: none;
}
.tile:hover {
  background: var(--dr-hover);
}
.tile:focus-visible {
  outline: none;
  background: var(--dr-hover);
  box-shadow: 0 0 0 2px var(--dr-tint);
}

.ico {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--dr-fill);
  color: var(--dr-text);
}
/* the app you're in: a 2 px gap in the card's colour, then a 2 px ring */
.tile.here .ico {
  box-shadow:
    0 0 0 2px var(--dr-card),
    0 0 0 4px var(--dr-tint);
}

.name {
  max-width: 100%;
  margin-top: 7px;
  font-size: 12.5px;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
}

/* showing and going: opacity only */
.dr-fade-enter-active,
.dr-fade-leave-active {
  transition: opacity var(--dr-fade-quick) ease;
}
.dr-fade-enter-from,
.dr-fade-leave-to {
  opacity: 0;
}
</style>
