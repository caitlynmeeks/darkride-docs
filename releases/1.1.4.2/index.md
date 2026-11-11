---
title: What's new in 1.1.4.2
description: An early version of the VR screen, the Lightling in place of the grey mannequin, and fixes.
---

# What's new in 1.1.4.2

Darkride 1.1.4.2 beta is on [GitHub](https://github.com/caitlynmeeks/darkride-interface/releases/tag/v1.1.4.2-beta).
For what changed in 1.1.4.1, see [What's new in 1.1.4.1](/releases/1.1.4.1/); for what doesn't work yet, see
[Known issues](/known-issues).

**1.1.4.2 brings an early version of the VR screen, and the Lightling replaces the grey mannequin everywhere.** Please
update; your settings carry over from 1.1.4.1.

## The VR screen

In a headset, a screen in front of you takes the tablet's place: People on the left, Explore in the middle, and the
Radio on the right while it's on. Use it with either controller's laser. Press **Y** on the left controller to put it
away, and again to bring it back where you left it. To move it, point at it, squeeze and hold a grip, and move your
hand, or drag the bar under it.

It's an early version. Other panels, a keyboard and Chat aren't on it yet: see [Known issues](/known-issues#vr) for
what to do instead.

## The Lightling

An avatar worn from someone's own computer, a bot with no avatar of its own, and an avatar that can't be loaded now
appear as the Lightling. People still on an older version see the grey mannequin until they update. Someone wearing an
avatar from their own computer appears to others as a Lightling standing still, as the mannequin did, because that
avatar stays on their computer.

## Fixed

- On the desktop, clicks on web pages in a world land where you point again. In VR, the screen's buttons answer both
  controllers.
- KTX textures hosted on GitHub (raw.githubusercontent.com) now load. Before, they failed to load, and models that use
  them looked white.

## Your own world server

If you run your own world server, update it to 1.1.4.2: a bot or AI resident with no avatar of its own then appears as
the Lightling for everyone on 1.1.4.2. On an older server, people on 1.1.4.2 see such a bot or AI resident as a
Lightling standing still. On Linux, use the new tarball; on Windows, the world server comes in the 1.1.4.2 zip. See
[Update to a new version](/worlds/your-own-server#update-to-a-new-version).

From 1.1.4.2, a bot or AI resident on your server that has no avatar of its own, or wears the Lightling, loads the
Lightling from cdn.darkride.ai the first time and keeps a copy after that. If your server can't reach the web, let it
reach cdn.darkride.ai, or these bodies won't move for visitors.

Everything else in 1.1.4.2 is in the release notes on
[GitHub](https://github.com/caitlynmeeks/darkride-interface/releases/tag/v1.1.4.2-beta).
