---
title: What's new in 1.1.2.1
description: Darkride 1.1.2.1, an important security update for the app.
---

# What's new in 1.1.2.1

Darkride 1.1.2.1 beta is on [GitHub](https://github.com/caitlynmeeks/darkride-interface/releases/latest). For what
changed in 1.1.2, see [What's new in 1.1.2](/releases/1.1.2/); for what doesn't work yet, see
[Known issues](/known-issues).

**Darkride 1.1.2.1 beta: an important security update for the app. Please update.**

- Fixes several security problems in what a world's scripts, web pages and network messages can reach on your
  computer, including some app settings that only you should change.
- The first time you start 1.1.2.1, if any script other than Darkride's own or your own files is set to start with
  Darkride, Darkride shows you the list once so you can keep or remove each one. If you didn't add a script yourself,
  remove it. Most people won't see this at all.
- Small changes you may notice: the desktop browser asks before it downloads a file; nametags show only for visitors
  who are signed in.
- **If you run your own world server**, update it to 1.1.2.1 too: it includes server-side security fixes. Each world
  now sees a different computer ID for the same person, so bans you made by hardware ID before 1.1.2.1 won't match;
  ban by account instead.
- 1.1.2.1 works with every 1.1 world and server, and your settings carry over.

To update your own world server, follow
[Update to a new version](/worlds/your-own-server#update-to-a-new-version) in the self-hosting guide.

## Questions

**"Darkride showed me a list of scripts when I updated."** That's a one-time check in 1.1.2.1. Keep the scripts you
added yourself and remove anything you don't recognise. It won't ask again.
