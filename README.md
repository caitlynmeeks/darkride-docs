# Darkride docs

The source of [darkride.ai/docs](https://darkride.ai/docs): guides for people who build worlds, bots and scripts in
Darkride. Each page is a Markdown file in this repository; the site is built from it with
[VitePress](https://vitepress.dev).

## Suggest a fix

- **A small fix** (a typo, a wrong step, a dead link): open the page's file here on GitHub, press the pencil to edit
  it, and propose the change. That opens a pull request; we review it, and it goes live with the next docs update.
- **Not sure of the fix?** Open an issue saying which page, what you expected and what happened.
- Every pull request is built automatically. A page that doesn't build, or a link to a page that doesn't exist, fails
  the check, so you'll see it before anyone merges.

## Preview it on your computer

With [Node.js](https://nodejs.org) 22:

```sh
npm ci            # installs the exact versions in package-lock.json
npm run dev       # the site at http://localhost:5173, updating as you edit
npm run build     # the same build the check runs
```

## How the pages are laid out

- One folder per area (`bots/`, later `worlds/` and `scripting/`); a page's address is its path: `bots/guide.md` is
  `darkride.ai/docs/bots/guide`. `index.md` is `darkride.ai/docs` itself.
- Each page starts with front matter:

  ```yaml
  ---
  title: Making bots for Darkride        # required
  description: One sentence for search results and link previews.
  draft: true                           # while the page isn't final: it shows a Draft banner
  ---
  ```

- The sidebar's order is in `.vitepress/config.mts`, so moving a page is one edit in one place.
- The scripting API reference (`scripting/api/`) is built from the notes in Darkride's engine code by
  [tools/api-reference](tools/api-reference/README.md); don't edit those pages by hand. A wrong fact in one is fixed
  in the engine's note.

## Licence

The text is under [CC BY 4.0](LICENSE) and the code samples and scripts under [MIT](LICENSE-CODE); by contributing you
agree to share your changes under the same terms.
