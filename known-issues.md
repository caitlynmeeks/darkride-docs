---
title: Known issues
description: What doesn't work yet in Darkride 1.1.3, and what to do instead.
---

# Known issues

What doesn't work yet in Darkride 1.1.3, and what to do instead. Found something that isn't here? Tell us on
[Darkride's Discord](https://darkride.ai/discord).

## Installing and opening

- **Mac: macOS won't open Darkride the first time.** Darkride isn't notarized yet. Try to open it once, then go to
  **System Settings** > **Privacy & Security**, click **Open Anyway**, and confirm. On macOS 14 or earlier, you can
  instead right-click Darkride.app, choose **Open**, then **Open** again.
- **Mac: Finder's Get Info shows no version number.** To see which version you have, open Darkride and choose
  **Help** > **About Darkride**.
- **Windows: "Darkride requires OpenGL 4.1 or higher".** This can show even on a recent graphics card. If your
  graphics are recent and Darkride starts anyway, you can ignore the message and tell us. If it doesn't start, install
  your graphics maker's latest driver. Darkride needs a graphics card whose driver offers OpenGL 4.1: roughly any
  NVIDIA or AMD card from 2010 on, or Intel HD 4400 (2013) or newer.

## Arriving in a world

- **Hop can say "You already have an instance open. Join it, or wait until it closes." with no Join button.** This
  can last about 12 minutes after you leave or cancel an earlier instance. Wait for it to clear, and don't cancel one
  Hop and then Hop into another world.
- **On busy nights, Hop can land on a full instance and be turned away.** Click **More ⌄** on the world's card and
  open a **New instance** instead.
- **In VR, a heavy world can stutter while it loads.** Look at the loading screen and wait for it to finish.

## Scripts and building

- **Scripts on your own computer or home network don't load** in 1.1.2 and newer apps, or on any 1.1.2 or newer
  world server, Darkride's included. See
  [What's new in 1.1.2](/releases/1.1.2/#scripts) for where scripts can live.
- **`location = "hifi://…"` (or `Window.location = …`) does nothing** in the default script engine. Use
  `location.handleLookupString("hifi://…")`, which works in both engines.
- **Two scripts that `require` the same remote file at the same moment:** the second can get an empty module, with no
  error. Give each its own address (add `?a=1`, `?b=1`), or require the file in one place.
- **A Track with more than about 100 points never reaches the server or other people.** It vanishes for them, with no
  warning. Keep tracks under 100 points.
- **A script that moves your avatar by setting `MyAvatar.position` can be undone by the next physics step**, leaving
  the avatar where it was. Check the position a frame later and set it again. The built-in teleports (`/tp`, Hop,
  bookmarks) aren't affected.

## Vehicles

- **In VR, your view can slide while you ride.** On the monorail or another vehicle, the view can slide around in
  small circles while the car is stopped, or drift off the car while it moves. If it does, teleport out, or step off
  at a stop. Riding on the desktop isn't affected. We're fixing it.
- **In VR, keep the tablet closed while you ride.** On a vehicle it can vanish or float away. We're fixing it.
- **Things attached to the avatar's sensor joint (`parentJointIndex` 65534) are misplaced while the avatar rides a
  vehicle,** for the rider and for everyone watching. They're right again once the avatar steps off. We're fixing it.
- **On the monorail, the world can slide a little for a moment as you come into or leave a station,** as the car
  catches up with the server; the car itself stays smooth. We're tuning it.
- **On a moving vehicle (the monorail, a car, a moving platform), its railings and things you carry can flick back
  slightly for a moment now and then.** The vehicle itself stays smooth. We're fixing it.
- **On a Mac, undocking a panel while you ride freezes the view for about a quarter of a second.** Undock panels
  before you get on; docking them back while you ride is fine.
- **Step off the monorail before you go to another world.** If you Hop, teleport or use a bookmark while standing in
  the monorail car, you may arrive unable to walk (your avatar walks in place). Restart Darkride to fix it. We're
  fixing it.

## The radio

- **It plays through your computer's default sound output.** Darkride's volume doesn't change it: use the radio's own
  volume slider, or your computer's volume.
- **On Windows, keep the Radio in its own window (don't dock it).** Docked, its page may not draw on some graphics
  cards: it shows the wrong picture or none (the music plays on). We're fixing it.

In VR:

- **Play the radio in one place**, the tablet or the desktop, not both. Otherwise two radios play at once.
- **To hear it in the headset**, make the headset Windows' default sound device. Otherwise it plays through your
  computer's speakers.
- **The radio lives in the tablet.** Putting the tablet away keeps it playing, but switching the tablet to another app
  stops it. Stay in the Radio app while you listen.
- **Radio started in the tablet stops when you switch back to the desktop.** Press **Play** there to start it again.
- **It can go blank, and its music stop, after the headset is taken off or pushed up.** Take the headset fully off and
  put it back on, then start the radio again.
