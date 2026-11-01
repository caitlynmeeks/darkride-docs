// The site's config (metaverse): served at darkride.ai/docs by the website's own server, in the website's look. The
// website's logo, favicon and fonts are linked from darkride.ai rather than copied here, since they aren't under this
// repository's licences. README.md is the repository's front page on GitHub, not a page of the site.
import { defineConfig } from 'vitepress'
// written by tools/api-reference/build.mjs with the reference's pages
import apiSidebar from '../scripting/api/sidebar.json'

export default defineConfig({
  base: '/docs/',
  lang: 'en',
  title: 'Darkride docs',
  description: 'Guides for building worlds, bots and scripts in Darkride.',
  srcExclude: ['README.md', 'tools/**'],
  cleanUrls: true,
  lastUpdated: true,
  // the website is dark only
  appearance: 'force-dark',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/favicons/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#171b2d' }],
  ],
  themeConfig: {
    // a full address, so the docs' /docs/ base isn't put in front of it
    logo: { src: 'https://darkride.ai/assets/darkride-logo-wide.png', alt: 'Darkride' },
    siteTitle: 'docs',
    nav: [{ text: 'darkride.ai', link: 'https://darkride.ai' }],
    // the order of the guides, in one place: a new page gets a line here. The API reference has its own sidebar.
    sidebar: {
      '/scripting/api/': apiSidebar,
      '/': [
        {
          text: 'Bots',
          items: [{ text: 'Making bots for Darkride', link: '/bots/guide' }],
        },
        {
          text: 'Scripting',
          items: [{ text: 'API reference', link: '/scripting/api/' }],
        },
        {
          text: 'Releases',
          items: [
            { text: "What's new in 1.1.2", link: '/releases/1.1.2/' },
            { text: 'Known issues', link: '/known-issues' },
          ],
        },
      ],
    },
    // built into the pages at build time: nothing runs on the server, and nothing loads until someone searches
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/caitlynmeeks/darkride-docs/edit/main/:path',
      text: 'Suggest a fix to this page',
    },
    lastUpdated: { text: 'Updated' },
    outline: { level: [2, 3], label: 'On this page' },
    footer: {
      message: 'Text under CC BY 4.0, code under the MIT licence.',
    },
  },
})
