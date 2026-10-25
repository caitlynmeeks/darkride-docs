// VitePress's default theme in the website's look (custom.css), with a banner on pages marked `draft: true`
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import DraftBanner from './DraftBanner.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-before': () => h(DraftBanner) }),
}
