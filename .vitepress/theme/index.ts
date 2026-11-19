// VitePress's default theme in the website's look (custom.css), with a banner on pages marked `draft: true` and
// Darkride's app grid (the nine dots) at the right end of the top bar
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import AppGrid from './AppGrid.vue'
import DraftBanner from './DraftBanner.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-before': () => h(DraftBanner),
      'nav-bar-content-after': () => h(AppGrid),
    }),
}
