// A placeholder until metaverse's site config (the website's look, the sidebar, base /docs/): enough for the check to
// build the pages. README.md is the repository's front page on GitHub, not a page of the site.
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Darkride docs',
  srcExclude: ['README.md'],
  cleanUrls: true,
})
