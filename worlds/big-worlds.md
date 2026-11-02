---
title: Keep a big world fast
description: Help a big, busy world draw and load quickly with impostor cards, Static priority, and zones that hide or don't load what's outside them.
---

# Keep a big world fast

A big world with lots of detail can be slow to load and slow to draw. Three things help, and you can use any of them
on their own.

## Far-away things: impostor cards

1. In Build mode, select a big model, or a group of things that sit together.
2. Choose **Build > Bake Impostor**.

From far off, it's now drawn as a flat picture of itself (an **impostor**), and its full model doesn't download until
someone comes close. To undo it, select it and choose **Build > Remove Impostor**.

## Things that never move: Static

Select buildings, rocks, trees and anything else that stays put. In the Inspector, set **Priority** to **Static**.
Static is for things that never move: their changes are applied late (within a few frames in 1.1.3, a few seconds
before), never every frame, and a Static entity has no physics and no animation.

- Don't use Static on anything a script moves or changes: it would move late.
- Boxes, spheres and worn things can't be Static; Darkride treats them as Automatic.

## Rooms and areas: zones that hide what's outside

A Zone entity can hide everything outside it while you're inside. It's useful for indoor rooms, caves and areas
walled off from the rest of the world: what you can't see isn't drawn.

1. In Build mode, click **Create** on the toolbar and choose **Zone**, then size the zone to fit around the area.
2. In the Inspector, set the zone's **Zone Culling**:

| Zone Culling | While you're inside the zone |
| --- | --- |
| **Inherit** | The zone around it decides. This is the default. |
| **Cull Outside** | Everything outside the zone isn't drawn. |
| **Cull Outside, Don't Load** | Everything outside the zone isn't drawn, and isn't downloaded either. |
| **Disabled** | Nothing is hidden, even inside a zone that hides. |

Good to know:

- **Zones inside zones:** the innermost zone that isn't set to Inherit decides, as with a zone's light, sky and haze.
- **What stays drawn:** what's in the zone's box, turned as the zone is turned. An entity is kept when any part of it
  touches the zone's box, so a wall on the boundary stays.
- **Never hidden:** other people and what they wear, your own things (what you wear, your app's panels, name
  tags), and zones, materials, and grid and gizmo entities.
- **Build mode shows everything,** so you can work on the whole world. Hiding comes back when you leave Build mode.

### Cull Outside, Don't Load

Use it for a big world that people explore one room or area at a time. While someone is inside the zone, their app
doesn't ask for anything outside it, so it doesn't spend download time or memory on what they can't see.

- What had already loaded before they stepped in stays loaded, just hidden.
- When they step out, the rest comes in within a few seconds.
- Arriving into a world loads it as the world's own setting says (whole world first, or as you go); Don't Load
  narrows what comes after you've arrived.

## Limits

- A culling zone hides by its box, whatever its **Shape** (sphere, cylinder or compound), though you enter and leave
  it by its true shape.
- Other people's avatars are never hidden.
