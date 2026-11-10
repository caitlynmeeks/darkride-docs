---
title: What's new in 1.1.4
description: Make, a code editor, Local Chat and a new Avatar menu, and what changes for builders and world servers.
---

# What's new in 1.1.4

Darkride 1.1.4 beta is on [GitHub](https://github.com/caitlynmeeks/darkride-interface/releases/tag/v1.1.4-beta). This
page covers what changes for builders and for people who run their own world server. For what doesn't work yet, see
[Known issues](/known-issues).

**Darkride 1.1.4 brings Make, a code editor, Local Chat and a new Avatar menu.** It's the same Darkride, rebuilt on
Qt 6, the newer version of the toolkit it's made with. On a Mac, it needs macOS 13 (Ventura) or newer; on macOS 12,
keep using [1.1.3.1](https://github.com/caitlynmeeks/darkride-interface/releases/tag/v1.1.3.1-beta).

## Make

**Make** builds things in your world from what you type, with your own Claude account. Ask for "a wooden market stall
with a striped awning" and it appears in front of you; ask to "make the door open when I knock" and the door gets a
script that does it. Open it from **Make** in Build mode's toolbar. The models and scripts it makes go in your
**My Files**, in a folder for each world, so they work in any world you take them to. How to set it up:
[Make things with Claude](/make/).

## A code editor

The new **Code** panel (**View** > **Panels** > **Code**, or **Edit** beside a script in the Inspector) shows a thing's
script for you to read and change, and lists the code near you. Its header says where a script lives: inside a thing,
in My Files or on the web.

- **New Script:** select a thing in Build mode and click **New** beside its empty **Script** field. Nothing is saved
  until you click **Save**; then the script goes in the **scripts** folder of your My Files, and the thing uses it.
  Anyone with its link can read it.
- **Open a script from My Files:** double-click a script or QML file in **My Files** (or right-click it and choose
  **Open in Code**) to open it in the Code panel, a private one too. **Save** puts your changes back in that file, so
  every world that uses it gets them when it next loads it.
- **Darkride asks before you lose unsaved work.** If you quit while the Code panel has changes you haven't saved,
  Darkride asks first: **Cancel** keeps it open, **Discard Changes** quits without them. Terrain you've sculpted is
  saved before Darkride quits.

## Local Chat

The world's text chat is now called **Local Chat**, and **Chat** opens on it. What you type reaches everyone in the
world you're in, and the header shows the world's name and how many are there, such as "Port Amarelle · 6 here". New
lines you haven't seen add to the red count on the **Chat** button, with a sound: every person's lines, and an AI
resident's or a bot's only when it says your name. The **Interface** volume in **Settings** > **Sound** sets how loud
it is, with Darkride's other sounds.

## A new Avatar menu

What you're wearing is at the top, your last five avatars are in **Recent**, and **My Avatars** is one searchable list
of every avatar in your My Files, Favorites first. Darkride now takes a picture of each avatar you wear by itself, kept
only on this computer, so your lists show faces instead of letters. To try an avatar from the web, use **Paste an
Avatar Link…** (it was **Wear from Link…**), then **Keep in My Avatars** if you like it.

## Arriving and frame rate

- The loading screen now gets the world's look ready and waits for its textures before it lifts, so your first look
  around doesn't stutter. The first world after you start Darkride waits for what's around you before you appear, as a
  hop between worlds already did.
- On a small texture budget (the Potato preset), a heavy world's loading screen ends in seconds instead of running to
  its limit, and textures no longer flicker between sharp and blurry.
- On a 144 Hz display, heavy worlds run at 72 frames a second. Darkride drops to half the display's rate shortly after
  you arrive in a heavy world such as Port Amarelle, which keeps the picture smooth. Lighter worlds keep 144.

## Scripts

- **Scripts load only public files.** Every entity script, and every file a script loads (include, require, web
  requests), must be public: in any world, scripts never load a file marked **Private** in your My Files. Keep Private
  for your own drafts. The one exception is a script you run yourself from **Running Scripts**: its own file can be
  Private, but what it loads must be public.
- **`Script.load()` is for your own scripts.** In scripts that come with an avatar, and in client entity scripts,
  `Script.load()` throws `TypeError: not a function`. To bring in more code, use `Script.include()`, which runs the
  other file inside the same script.
- **One script engine.** The old script engine (QtScript) is gone from the app and the servers, with its switch in
  **Developer** > **Scripting**; every script runs on the WebAssembly engine, the default since 1.1.0. Removed, with no
  replacement: `GraphicsMesh.forEachVertex`, `GraphicsMesh.updateVertexAttributes` and `Test.profileRange`.
  `Graphics.getModel()` with an unknown id now returns `null`.
- **userData, and a Material's materialData, now have a size limit:** keep each under 1,200 bytes. A longer value isn't
  saved; before 1.1.4, a value over 64 KB was saved cut short. Keep long data in a file instead: put a material in a
  material file and link it, and have a script load long data from a file.
- Scripts that set `tablet.toolbarMode` now work. An `Assets.putAsset` callback made right after joining a world now
  runs, and an upload that never gets an answer fails instead of waiting forever. Stopping a script works even while
  it's starting.

## Shadows

Shadows no longer have saw-tooth edges, and when the sun is low they reach all the way to the thing casting them. If
you changed a zone's **shadowBias** in a world, check its shadows again: the default (0.5) is tuned anew, and a value
tuned before 1.1.4 doesn't carry over. Start again from 0.5, then raise it a little if you see speckled stripes on lit
surfaces, or lower it if a shadow doesn't quite meet the thing casting it.

## Your own world server

If you run your own world server, update it to 1.1.4: it has important fixes. Before 1.1.4, one very long value on an
object could stop other visitors receiving part of a world, and voices could click after someone joined. See
[Update to a new version](/worlds/your-own-server#update-to-a-new-version).

Everything else in 1.1.4, for everyone, is in the release notes on
[GitHub](https://github.com/caitlynmeeks/darkride-interface/releases/tag/v1.1.4-beta).
