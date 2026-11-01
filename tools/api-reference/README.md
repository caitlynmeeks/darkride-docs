# The API reference builder

Writes the scripting API reference (`scripting/api/`) from the reference notes in Darkride's engine code: the
`/**jsdoc` comments in its C++ files. JSDoc reads the notes into data, and `build.mjs` turns that into one page per
namespace or class, a page of global types and functions, an overview, and the reference's sidebar
(`scripting/api/sidebar.json`, read by `.vitepress/config.mts`).

The pages are built once per release and committed; the site's own build doesn't need the engine. Don't edit
`scripting/api/` by hand: the next run replaces it. A wrong fact gets fixed in the engine's note, then the pages are
built again.

## Build it for a release

With Node.js 22, from this folder:

```sh
npm ci
# the engine's source at the release's tag, read-only, in a folder of its own
mkdir -p /tmp/engine && git -C <engine checkout> archive v1.1.2-beta assignment-client interface libraries plugins \
  | tar -x -C /tmp/engine
node build.mjs --engine /tmp/engine --version 1.1.2 --commit "$(git -C <engine checkout> rev-parse v1.1.2-beta)" --draft
```

`--draft` puts the Draft banner on every page, until scripting has checked the facts. Then build the site from the
top of the repository (`npm run build`) to check it.

## What it changes on the way

- **Old names**: a short list in `build.mjs` (`fixes`) turns the notes' High Fidelity and Tivoli names into
  Darkride's, and old example addresses into current ones.
- **Dead links**: a link to an address that no longer answers keeps its words and loses the link.
- **Links between pages**: `{@link Entities.addEntity}` and the type names become links to the right page and item.

Each run writes `REPORT.md` here: the old names it changed, the dead links, the names that lead nowhere, and the
notes it left out. Those are fixes for the engine's notes, so the lists should shrink release by release.

The three pose pictures in `images/` come from High Fidelity's engine (Apache 2.0), where the notes link to them.
