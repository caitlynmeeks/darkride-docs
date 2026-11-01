---
title: What's new in 1.1.2
description: What changes in Darkride 1.1.2 for people who build worlds and run their own world server.
---

# What's new in 1.1.2

Darkride 1.1.2 beta is on [GitHub](https://github.com/caitlynmeeks/darkride-interface/releases/latest). This page
covers what changes for builders and for people who run their own world server. For what doesn't work yet, see
[Known issues](/known-issues).

## Safety

1.1.2 brings important security fixes, in the app and in the server.

In the app (they protect you in every world, whatever version its server runs): world scripts can reach less of your
computer, your network and the app itself; models, pictures, sounds and other people's avatars load more safely; what
you type into the sign-in box goes only to it.

In the server: stricter checks on the network data and world data a server receives.

1.1.2 apps work with 1.1.1 servers and the other way round. If you run your own world server, update it to 1.1.2 for
its safety fixes.

## Scripts

A world's scripts now load only from web addresses (http or https), the world's own assets (`atp:`) or Darkride's
file hosting (`tea:`), or are written into the object itself; if you serve scripts from your own computer or home
network while building, move them to the world's assets.

To put a script in the world's assets, use **Edit** > **Asset Browser** in Darkride.

## Sounds

A sound file in a format or size Darkride doesn't support no longer loads, and the log says why.

## Clicking

Models made very small and shown at full size, and parts drawn on both sides, now respond to clicks and selection.

## If you run your own world server

1. Before you update, move any scripts on your own computer or home network (see [Scripts](#scripts)), and give each
   object its script's new address. A 1.1.2 server loads your world without them, and the first save after any change
   forgets their old addresses.
2. Stop the server, copy its whole data folder as a backup, swap in the 1.1.2 server, and start it again as the same
   user. Check each download against the SHA-256 on the GitHub release.

Everything else in 1.1.2, for everyone, is in the release notes on
[GitHub](https://github.com/caitlynmeeks/darkride-interface/releases/latest).
