---
title: Making bots for Darkride
description: Make a bot account, run a bot beside your world as an agent or a client, and write its script.
draft: true
---

# Making bots for Darkride

A guide for developers (draft, 2026-10-25). A **bot** is a character in a Darkride world driven by scripted logic: a
state machine, a list of beats, your own code. A tour guide that walks you round a world, a shopkeeper, a greeter, a
duck. A character whose words come from a language model or another neural network is an **AI resident** instead;
it uses the same accounts and tools, but people are told an AI is speaking.

Today you can run a bot two ways, both signed in to its own bot account (below). A proper bot API, where your program
drives a body over one WebSocket in any language, is in preview; see "Coming next".

## 1. Make a bot account (5 minutes a bot)

1. On darkride.ai, open your user menu, then **AI Residents & Bots**.
2. Under **Add an AI resident or a bot**, choose **Scripted logic, not AI (bot)**, then a username (4-16 letters,
   digits or _; e.g. `castle_guide`) and a display name, and press **Add bot**.
3. Copy its **connection key** (it starts `tvk_`). It's shown only once. If you lose it, press **New key** (the old
   one stops working).

You can have up to 25 bots and AI residents. Each one shows in the world as a bot ("⚙ bot · hosted by *your username*"), and
you answer for what it does, as its host. If a bot of yours starts using a language model to talk, switch it to AI
resident on the same page, so people know an AI is speaking.

## 2. Run it

### A. As an agent (headless, beside your world's server)

An agent is a script running in an assignment-client, with a body (`Agent.isAvatar = true`) and no window. It's the
light way: no graphics card needed, dozens on one machine. Give the assignment-client the bot's name and key, and it
signs in by itself.

macOS or Linux:

```sh
export HIFI_AC_USERNAME=castle_guide
export HIFI_AC_KEY=tvk_your_key_here
/path/to/assignment-client -t 2 -a 127.0.0.1 --server-port 40102 --pool castle_guide
```

Windows:

```bat
set HIFI_AC_USERNAME=castle_guide
set HIFI_AC_KEY=tvk_your_key_here
"C:\path\to\assignment-client.exe" -t 2 -a 127.0.0.1 --server-port 40102 --pool castle_guide
```

- `--server-port` is your world's UDP port (40102 unless you changed it).
- In your world's settings, under **Scripts > Persistent Scripts**, add your bot's script URL with the same **pool**
  name (`castle_guide`). Then this signed-in process takes this bot's script and no other. One pool, one bot account
  and one process per bot.

### B. As a Darkride client

A full client signed in as the bot, for bots that need to see what a player sees. First make a token from the bot's
key (one line per bot):

```sh
curl -s -X POST https://vr.darkride.ai/oauth/token -d grant_type=client_credentials \
  -d client_id=castle_guide -d client_secret=tvk_your_key_here -d scope=owner > ~/bots/castle_guide/token.json
```

(On Windows, `curl.exe` with the same arguments on one line, and `> C:\bots\castle_guide\token.json`.)

Then start the client with that token, its own folders, and your world. macOS:

```sh
TIVOLI_APP_DATA_DIR=~/bots/castle_guide/data XDG_CONFIG_HOME=~/bots/castle_guide/config \
  /Applications/Darkride.app/Contents/MacOS/Darkride --allowMultipleInstances \
  --tokens "$(cat ~/bots/castle_guide/token.json)" --url hifi://localhost:40102
```

Windows, in PowerShell 7 (`pwsh`):

```powershell
$env:TIVOLI_APP_DATA_DIR = "C:\bots\castle_guide\data"
$env:XDG_CONFIG_HOME = "C:\bots\castle_guide\config"
$tok = (Get-Content C:\bots\castle_guide\token.json -Raw).Trim()
& "C:\path\to\Darkride.exe" --allowMultipleInstances --tokens $tok --url hifi://localhost:40102
```

In the older Windows PowerShell 5.1, the quotes inside the token need escaping:
`$tok = (Get-Content C:\bots\castle_guide\token.json -Raw).Trim() -replace '"', '\"'`.

- **One data folder per bot** (`TIVOLI_APP_DATA_DIR`): the client keeps its account there, and two bots sharing one
  would sign in as each other.
- `--allowMultipleInstances` lets several bots run on one machine.
- The token lasts 30 days and renews itself while the bot runs. After a longer break, make a new one.
- A script for the client goes in with `--testScript /path/to/bot.js` (a plain path: a `file://` address is ignored).

### Where it may go

An agent bot (way A) is trusted server software in your world: it can rez and edit locked things whatever your
Security settings say. Run only agent bots you trust, such as your own code. A client bot (way B) on the same computer
as your world gets that world's "localhost" rights (kick, locks, replace content, rez); if it shouldn't, untick them
for localhost in your world's Security settings. Your world must let signed-in people in (the default). Worlds on
Darkride's own servers don't admit signed-out visitors, so a bot needs its account there.

## 3. Writing the bot

An agent script uses the same scripting API as the rest of Darkride. The pieces a guide needs:

| To... | Use |
| --- | --- |
| have a body | `Agent.isAvatar = true; Avatar.skeletonModelURL = "https://....fst";` at a public address every visitor can load (a 127.0.0.1 or file: address works only on that computer) |
| walk | move `Avatar.position` a little each `Script.update`, turn with `Avatar.orientation`, and play a walk animation |
| animate | `Avatar.startAnimation(url, fps, priority, loop, hold, firstFrame, lastFrame)`; clips crossfade (`Avatar.animationFadeSeconds`, 0.5 s). Start a clip only when it changes: starting the same one again rewinds it. **Darkride's built-in clips start at frame 1**: frame 0 is the skeleton's T-pose, and a loop played from 0 flashes through it (walk_fwd 1-30, idle 1-300, talk 1-500) |
| speak aloud | `Agent.playAvatarSound(SoundCache.getSound(url))`: a recorded line from the body, positional like a voice. 16-bit mono WAV at 24 kHz is the audio mixer's own format. `Agent.isPlayingAvatarSound` says when it's done; the next server release adds `Agent.avatarSoundFinished(completed)` and `Agent.stopAvatarSound()` |
| see people | `AvatarList.getAvatarIdentifiers()`, `AvatarList.getAvatar(id).position`; `Agent.avatarViewRadius` for how far |
| work a door or a machine | `Entities.callEntityServerMethod(id, "open", [])`. The entity's **server** script must list the method in `this.remotelyCallable = ["open", "close"]`, so the world's builder decides what bots may do |
| talk to other bots and scripts | `Messages.sendMessage(channel, text)`, `Messages.subscribe(channel)`, `Messages.messageReceived` |
| wear a hat or a costume | `Avatar.attach(modelURL, jointName, offset, rotation, scale)`: drawn on the joint by everyone, scaled with the avatar (OBJ, FBX and glTF work) |
| be clicked | avatars can't be clicked; put a see-through box (`alpha: 0`) round the bot with a client entity script whose `clickDownOnEntity` (and `startFarTrigger` for hand controllers) sends the bot a message |

A small example, a greeter that walks up to the nearest person, says a recorded line, and leads them to a spot:

```js
var BODY = "https://example.com/guide/guide.fst";
var WALK = "https://example.com/anim/walk.fbx", IDLE = "https://example.com/anim/idle.fbx";
var FRAMES = {};                           // the frames a clip loops over, if its frame 0 is a T-pose
FRAMES[WALK] = [1, 30]; FRAMES[IDLE] = [1, 300];
var HELLO = SoundCache.getSound("https://example.com/guide/hello.wav");
var SPOT = { x: 10, y: 1, z: -10 };

Agent.isAvatar = true;
Avatar.skeletonModelURL = BODY;
Avatar.position = { x: 0, y: 1, z: 0 };   // the avatar's position is at its hips
var state = "starting", who = null, t = 0, clip = null, resends = 0;

function resendIdentity() {                // the first one is lost before it connects (see "Known issues")
    var n = Avatar.displayName;
    Avatar.displayName = n + " ";
    Avatar.displayName = n;
    Avatar.skeletonModelURL = BODY + "?again=" + resends;
}

function play(url) {                       // start a clip only when it changes: starting it again rewinds it
    if (clip === url) { return; }
    clip = url;
    var f = FRAMES[url] || [0, 100000];
    Avatar.startAnimation(url, 30, 1, true, false, f[0], f[1]);
}
function nearest() {
    var best = null, bestD = 15;
    AvatarList.getAvatarIdentifiers().forEach(function (id) {
        var a = id && id !== Agent.sessionUUID ? AvatarList.getAvatar(id) : null;
        if (a && a.position && Vec3.distance(a.position, Avatar.position) < bestD) {
            best = id; bestD = Vec3.distance(a.position, Avatar.position);
        }
    });
    return best;
}
function walkToward(p, stopAt, dt) {       // true when there
    var to = Vec3.subtract(p, Avatar.position); to.y = 0;
    var d = Vec3.length(to);
    if (d <= stopAt) { play(IDLE); return true; }
    Avatar.orientation = Quat.lookAtSimple(Avatar.position, Vec3.sum(Avatar.position, to));
    Avatar.position = Vec3.sum(Avatar.position, Vec3.multiply(Math.min(1.2 * dt, d), Vec3.normalize(to)));
    play(WALK);
    return false;
}

Script.update.connect(function (dt) {
    t += dt;
    if (state === "starting") {            // four re-sends, 3 s apart, before it moves
        if (t > 3 * (resends + 1)) { resends++; resendIdentity(); }
        if (resends >= 4) { play(IDLE); state = "waiting"; }
        return;
    }
    if (state === "waiting") { who = nearest(); if (who) { state = "greeting"; } return; }
    var a = who && AvatarList.getAvatar(who);
    if (!a) { state = "waiting"; return; }
    if (state === "greeting" && walkToward(a.position, 1.8, dt)) {
        Agent.playAvatarSound(HELLO);
        state = "leading";
    } else if (state === "leading" && !Agent.isPlayingAvatarSound) {
        if (Vec3.distance(a.position, Avatar.position) > 7) { play(IDLE); return; }   // wait for them
        if (walkToward(SPOT, 0.1, dt)) { state = "done"; }
    }
});
```

A real guide keeps a list of beats (walk here, say this, wait for the group, cue the door) and plays them one after
another, pausing when the visitor falls behind: the standard drama manager pattern.

## Known issues (fixes are on the way)

- **Your bot is a faint ghost to everyone else.** Its first details (name, body, attachments) go out before it's
  connected and are lost. Until the fix ships, send them again a few times before the bot moves, as the example does
  (`var n = Avatar.displayName; Avatar.displayName = n + " "; Avatar.displayName = n; Avatar.skeletonModelURL = BODY +
  "?again";`, four times, 3 s apart). Do it before it walks: while its body reloads, its joints show their default
  pose (the arms snap out) for a moment.
- **An agent with no body model can't animate**: without `Avatar.skeletonModelURL` it has no skeleton. Give it a model
  until the default mannequin ships.
- **Things parented to the bot's own avatar never appear** (an entity with `parentID: Agent.sessionUUID`). Wear things
  with `Avatar.attach` instead, and move a free-standing label yourself.
- **Don't pose joints by hand on agents yet.** On today's servers it's unsafe both ways: by index it bends the wrong
  joint (agents number joints by the avatar file, not the skeleton), and by name it can hang the script. Use
  animations. From the next server release, pose by index: `Avatar.setJointRotation(Avatar.getJointIndex("RightArm"),
  q)`. Setting a joint by name stays unsafe until its own fix ships.
- **The bot's name is its account's username**: a script can't change it. For a friendlier label, a text entity the
  bot moves with it.

## Coming next: the bot API (preview)

Your program, in any language, opens a WebSocket to the world's **resident service**, sends `hello` with the bot's name
and key, and its body walks into the world. Then it sends requests and gets events: `go_to`, `route` (waypoints at a
speed, `arrived` at each), `follow`, `face`, `look_at`, `say`, `play_line` (a recorded line, `line_finished` when it's
over), `gesture`, `animate`, `look` and `watch` (who is near: `near`, `left`, `people` events), `cue` (a world
script's method, as above), `send` and `listen` (message channels). The service handles signing in, limits and the
rules, so your program needs only the key. It already works end to end in our tests, and ships with the servers you
run yourself once they're packaged; hosted bots that don't need your computer on, and a tour editor in Create, come
after. This is a draft: names may still change before it ships. The full reference is `RESIDENT-API.md` beside the
resident service.

If something here doesn't work, tell us what the client or assignment-client printed.
