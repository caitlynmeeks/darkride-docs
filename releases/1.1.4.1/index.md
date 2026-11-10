---
title: What's new in 1.1.4.1
description: Darkride 1.1.4.1 brings back models and avatars made from FBX files.
---

# What's new in 1.1.4.1

Darkride 1.1.4.1 beta is on [GitHub](https://github.com/caitlynmeeks/darkride-interface/releases/tag/v1.1.4.1-beta).
For what changed in 1.1.4, see [What's new in 1.1.4](/releases/1.1.4/); for what doesn't work yet, see
[Known issues](/known-issues).

**1.1.4.1 brings back models and avatars made from FBX files.** In 1.1.4 they didn't appear on Mac and Windows: FBX
models in worlds, and FBX avatars, yours and other people's. Now they show again. Please update; your settings carry
over from 1.1.4.

For scripts: `Graphics.getModel(id)` now answers as soon as a model's shape has loaded, before its materials are named.
To get the whole model, wait until `Entities.isLoaded(id)` is true before you call it.

There's no new Linux world server: if you run your own on Linux, keep the 1.1.4 server. On Windows, the world server
comes in the 1.1.4.1 zip, as before.
