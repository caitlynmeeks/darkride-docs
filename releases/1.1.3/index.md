---
title: What's new in 1.1.3
description: What changes in Darkride 1.1.3 for people who build worlds and run their own world server.
---

# What's new in 1.1.3

Darkride 1.1.3 beta is on [GitHub](https://github.com/caitlynmeeks/darkride-interface/releases/tag/v1.1.3-beta). This page
covers what changes for builders and for people who run their own world server. For what doesn't work yet, see
[Known issues](/known-issues).

1.1.3 and 1.1.2.1 work together: either app can visit worlds served by either version, and people on the two versions
see and chat with each other. Some fixes in 1.1.3 work fully once everyone in a world has updated.

## Arriving in a world

Arriving in a world with many models while your computer is busy no longer stalls at the end of loading. Before, it
could pause for a couple of minutes, or never finish. The usual arrival time is unchanged.

## Zones that hide what's outside them

A zone's **Zone Culling** now works:

- **Cull Outside** hides the world's entities outside the zone while you're inside it, boxes and spheres included. An
  entity that touches the zone's edge stays. People, your own things (what you wear, the app's panels, name tags),
  zones, materials, and grid and gizmo entities are never hidden.
- New: **Cull Outside, Don't Load** also stops downloading new content outside the zone while you're inside it (the
  world's first load when you arrive is as before). What had already loaded stays loaded, just hidden, and the rest
  comes in within a few seconds of stepping out.
- With zones inside zones, the innermost zone that isn't set to **Inherit** decides, as with a zone's other settings.
- Build mode still shows everything.

The hiding costs nothing per frame; it's decided once when the zones around you change. How to set it up:
[Keep a big world fast](/worlds/big-worlds#rooms-and-areas-zones-that-hide-what-s-outside).

## VRM avatars

VRM avatars now load by their own `.vrm` name. **Wear from Link** takes a link to a `.vrm` file as it takes a `.glb`.
**My Files** lists `.vrm` files as models, and in Build mode you can drag a `.vrm` into the world, from My Files or
from your computer, to place it as a model. Before, only a copy renamed `.glb` loaded.

Visitors on 1.1.2 or older can't read a file named `.vrm`; they see the default avatar instead. **Wear & Keep** and
**Put Avatar in My Files** store your VRM avatar under a `.glb` name, which every version reads. If you point an avatar
file (`.fst`) or a script at a `.vrm` file yourself, point it at a copy renamed `.glb` (the same file, new name) until
your visitors have 1.1.3.

## Files on your computer

A world's models, images, sounds and other files no longer load from a file address on a computer; upload them and
use their links. While you test on your own computer or home network, local files still work. See
[Add your own models, images and sounds](/worlds/put-up-a-world#_4-add-your-own-models-images-and-sounds).

## Scripts when someone leaves your world

When someone leaves your world, what your world's scripts made for them goes with it automatically: local entities,
things you gave them to wear (they aren't saved with their avatar), controller mappings, overlays and pointers. Your
scripts don't need to clean these up.

- **Your scripts can't act after the visitor leaves.** An `unload` or `Script.scriptEnding` that runs at that moment
  can stop your own sounds and write to the log, but it can't create, change, send or fetch anything. After that,
  your scripts get no more messages, entity events, timers or web replies, and open WebSockets close.
- **Save, send goodbyes and tidy up while the visitor is still in your world**, for example when they leave a zone.
  If your script stops its sounds when the visitor leaves, do that in `unload`: WebAssembly entity scripts don't get
  `scriptEnding` when their world is left.
- **An entity deleted, or given a new script, while the visitor stays** works as before, with every call in its
  `unload`.
- **A world's scripts work with its own entities.** They can't read or change a visitor's own local entities, and
  other people's avatar entities are read-only to them.
- **Scripted things a visitor wears or carries** (their own local or avatar entities with a script) unload when they
  leave a world and load again in the next, so `preload` runs once in each world.

## Set many rows at once in the Entities list

In the **Entities** list, press a row's eye, arrow, padlock or braces icon and drag up or down the column: every row
you pass changes the same way as the first (start on an unlocked row and the drag locks; on a locked one, it unlocks).
It changes what's under each row too; hold **Alt** (**Option** on a Mac) to change only the rows themselves. The whole
drag is one Undo, and the list scrolls when you drag past its top or bottom.

## Ambient occlusion works again

Ambient occlusion works again on Macs and Intel graphics
([#53](https://github.com/caitlynmeeks/darkride-interface/issues/53)). In **Settings** > **Displays**, under
**Rendering**, set **Renderer** to **Deferred** and turn on **Ambient occlusion** (with Forward+ it shows "Deferred
only"). It darkens corners and contact shadows in ambient light, so in bright sunlight the effect is subtle by design.
At its default settings it costs about a third more GPU time at 1080p, so turn it on when your computer has room.

## Safety

Safety fixes in how models load.

## Your own world server

If you run your own world server, update it to 1.1.3: it has important safety fixes. See
[Update to a new version](/worlds/your-own-server#update-to-a-new-version).

Everything else in 1.1.3, for everyone, is in the release notes on
[GitHub](https://github.com/caitlynmeeks/darkride-interface/releases/tag/v1.1.3-beta).
