---
title: What's new in 1.1.4.4
description: Darkride 1.1.4.4 brings security fixes, a clearer sign-in, private read receipts, a faster Avatar panel and fixes for scripts.
---

# What's new in 1.1.4.4

Darkride 1.1.4.4 beta is on [GitHub](https://github.com/caitlynmeeks/darkride-interface/releases/tag/v1.1.4.4-beta).
For what changed in 1.1.4.3, see [What's new in 1.1.4.3](/releases/1.1.4.3/); for what doesn't work yet, see
[Known issues](/known-issues).

**Darkride 1.1.4.4 includes security fixes and stability improvements.** We recommend everyone update. Your settings
carry over from 1.1.4.3.

## Signing in

If your sign-in ends somewhere else (for example, you choose **Sign out everywhere else** on the website, or change your
password), Darkride shows the sign-in screen with your account's name and "You've been signed out. Please sign in
again." **Continue as** checks your saved sign-in before it goes in. Docked panels (Chat, People, Explore) step aside
while the sign-in screen is up and come back after.

## The Avatar panel

**My Avatars** opens at once with the list from last time while it checks for changes. The first time on a computer,
it says "Loading My Files…" instead of showing an empty list.

## Chat

Chat keeps what you've read to yourself: Darkride never tells anyone you've read a message.

## For scripts

- `Entities.keyboardFocusEntity` works again: your own script can read and set which Web entity has the keyboard. The
  keyboard follows what the visitor does: a world's script can't give an entity the keyboard, and a world's pointer
  never moves the keyboard.
- `console.clear()` works again in your own scripts: it empties the **Script Log**. A world's script can't clear it.
- A world's script doesn't hear the location object's lookup failures (`location.lookupResultIsOffline`,
  `lookupResultIsNotFound`, `lookupResultIsRefused`); your own scripts do, and the app tells the visitor itself. A
  world's script still hears `lookupResultsFinished`.
- The [scripting API reference](/scripting/api/) is up to date for 1.1.4.4.

## Fixed

- Looking around with **Alt** + click (Option on a Mac) starts only when you click and drag. Pressing Alt on its own,
  or Alt-Tab while you ride, no longer leaves the view behind. As before, the view stays where you put it until you
  walk, press Esc or right-click.
- After you type in a web page in the world, Alt + click takes the keyboard back, so W walks again.

## Your own world server

If you host your own world, update your world server: it's on the
[1.1.4.5 server release](https://github.com/caitlynmeeks/darkride-interface/releases/tag/v1.1.4.5-server-beta). See [Update to a new
version](/worlds/your-own-server#update-to-a-new-version).
