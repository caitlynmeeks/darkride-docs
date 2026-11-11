---
title: Known issues
description: What doesn't work yet in Darkride 1.1.4.2, and what to do instead.
---

# Known issues

What doesn't work yet in Darkride 1.1.4.2, and what to do instead. Found something that isn't here? Tell us on
[Darkride's Discord](https://darkride.ai/discord).

## Installing and opening

- **Mac: macOS won't open Darkride the first time.** Darkride isn't notarized yet. Try to open it once, then go to
  **System Settings** > **Privacy & Security**, click **Open Anyway**, and confirm. On macOS 14 or earlier, you can
  instead right-click Darkride.app, choose **Open**, then **Open** again.
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
- **`location = "hifi://…"` (or `Window.location = …`) does nothing.** Use
  `location.handleLookupString("hifi://…")` instead.
- **Two scripts that `require` the same remote file at the same moment:** the second can get an empty module, with no
  error. Give each its own address (add `?a=1`, `?b=1`), or require the file in one place.
- **Keep userData, and a Material's materialData, under 1,200 bytes.** A longer value isn't saved: a new entity or
  Material with one isn't added, and a change that would make one is ignored. Darkride doesn't show a message about it
  yet. Keep long data in a file instead: put a material in a material file and link it, and have a script load long
  data from a file.
- **A Track with more than about 100 points never reaches the server or other people.** It vanishes for them, and
  Darkride shows no warning on screen. Keep tracks under about 100 points.
- **A script that moves your avatar by setting `MyAvatar.position` can be undone by the next physics step**, leaving
  the avatar where it was. Check the position a frame later and set it again. The built-in teleports (`/tp`, Hop,
  bookmarks) aren't affected.

## Frame rate

- **In Darkside on a 144 Hz display, the frame rate can switch between 144 and 72** a few times in your first minute or
  two. It settles at 72 after that. (In heavy worlds, Darkride runs at half a 144 Hz display's rate on purpose, to keep
  the picture smooth.)

## Make

- **On a few computers, Make can't use Blender.** If Make's Connect step says "Blender isn't available here" even
  though Blender 5.2 or newer is installed, Make couldn't close Blender off on that computer, so it leaves Blender out.
  Everything else in Make works.

## Avatars

- **If you turn on face tracking while you wear an avatar with many bones, such as many avatars from Unity packages,
  other people don't see your face expressions.** The same happens to a face a script sets. Your voice still moves
  your mouth. Small avatars, such as the Lightling, aren't affected: to get around it, turn face tracking on (or start
  the script) while you wear a small one, then put on your avatar
  ([#69](https://github.com/caitlynmeeks/darkride-interface/issues/69)).
- **The first time a Lightling comes into view after you start Darkride, the picture may freeze for a moment** while
  Darkride gets the Lightling's look ready. It happens once per start, and we're working on a fix.

## Web pages in worlds

- **Fixed on the desktop in 1.1.4.2: clicks on web pages in a world land where you point again.** In VR the same fix
  applies, but a web page standing in a world hasn't been checked with a controller yet. If one doesn't respond in VR,
  tell us in [#67](https://github.com/caitlynmeeks/darkride-interface/issues/67).

## VR

- **In VR, you can't open other panels from the screen yet.** The VR screen shows People and Explore. To open the
  Radio, Settings, Avatar or another panel, use **View** > **Panels** on your computer. The Radio then shows on the
  right of the screen.
- **In VR, there's no keyboard on the screen yet, and Chat isn't on it.** The VR keyboard appears only when you sign
  in. To search in Explore, click the Darkride window on your computer with the mouse, then type on your computer's
  keyboard. To chat, open **View** > **Panels** > **Chat** on your computer.
- **In VR on Windows, if the headset's link drops, Darkride goes back to your computer's screen.** To use VR again,
  quit and start Darkride again ([#68](https://github.com/caitlynmeeks/darkride-interface/issues/68)).

## Vehicles

- **Driven vehicles (cars, karts, rovers) can fall through roads and walls made from imported models.** This happens
  when the world's server moves the vehicles: in worlds on Darkride's servers that have vehicles, and on your own world
  server when **Run vehicle physics on the server** is on. A car then collides only with Terrain, Track entities,
  shapes (Box, Sphere, Cylinder and the like) and models whose **Collision Shape** is **Box** or **Sphere**. It goes
  through a model with any other Collision Shape. People on foot aren't affected, and neither is the monorail or
  anything else that rides a Track. Until it's fixed, either of these gets around it:
  - Put Boxes under the road and along its walls, and turn off their **Visible** setting. For a flat stretch of road,
    you can instead set the model's **Collision Shape** to **Box**. A Terrain under the road works too.
  - On your own world server: in its settings page, under **Vehicle physics**, turn off **Run vehicle physics on the
    server** (saving restarts the world server). Each car is then moved by one visitor's Darkride and collides with
    models again, though it looks a little less steady to everyone else.
- **In VR, your view can slide while you ride.** On the monorail or another vehicle, the view can slide around in
  small circles while the car is stopped, or drift off the car while it moves. If it does, teleport out, or step off
  at a stop. Riding on the desktop isn't affected. We're fixing it.
- **In VR, put the screen away (press Y) before you ride.** It hasn't been checked on vehicles yet.
- **Things attached to the avatar's sensor joint (`parentJointIndex` 65534) look misplaced to everyone watching while
  the avatar rides a vehicle.** They're right again once the avatar steps off. We're fixing it.
- **On the monorail, the world can slide a little for a moment as you come into or leave a station.** The car itself
  stays smooth. We're tuning it.
- **On a moving vehicle (the monorail, a car, a moving platform), its railings and things you carry can flick back
  slightly for a moment now and then.** The vehicle itself stays smooth. We're fixing it.
- **On a Mac, undocking a panel while you ride freezes the view for about a quarter of a second.** Undock panels
  before you get on; docking them back while you ride is fine.

## The radio

- **It plays through your computer's default sound output.** Darkride's volume doesn't change it: use the radio's own
  volume slider, or your computer's volume.
- **On Windows, keep the Radio in its own window (don't dock it).** Docked, its page may not draw on some graphics
  cards: it shows the wrong picture or none (the music plays on). We're fixing it.

In VR:

- **To hear it in the headset**, make the headset Windows' default sound device. Otherwise it plays through your
  computer's speakers.
- **Turn the Radio on from your computer** (**View** > **Panels** > **Radio**). It then shows on the right of the VR
  screen and plays.
- **The Radio's music can stop when you take the headset off or leave VR.** Press **Play** to start it again.
