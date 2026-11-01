---
title: "Agent"
description: "The Agent API enables an assignment client to emulate an avatar."
draft: true
---

# Agent

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: assignment client scripts.</div>

<div class="api-text" v-pre><p>The <code>Agent</code> API enables an assignment client to emulate an avatar. Setting <code>isAvatar = true</code> connects the assignment client to the avatar and audio mixers, and enables the <a href="Avatar"><code>Avatar</code></a> API to be used.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isAvatar</code></td><td>boolean</td><td><p><code>true</code> if the assignment client script is emulating an avatar, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isPlayingAvatarSound</code></td><td>boolean</td><td><p><code>true</code> if the script has a sound to play, otherwise <code>false</code>. Sounds are played when <code>isAvatar</code> is <code>true</code>, from the position and with the orientation of the scripted avatar's head. <em>Read-only.</em></p></td></tr>
<tr><td><code>isListeningToAudioStream</code></td><td>boolean</td><td><p><code>true</code> if the agent is "listening" to the audio stream from the domain, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isNoiseGateEnabled</code></td><td>boolean</td><td><p><code>true</code> if the noise gate is enabled, otherwise <code>false</code>. When enabled, the input audio stream is blocked (fully attenuated) if it falls below an adaptive threshold.</p></td></tr>
<tr><td><code>lastReceivedAudioLoudness</code></td><td>number</td><td><p>The current loudness of the audio input. Nominal range [<code>0.0</code> (no sound) – <code>1.0</code> (the onset of clipping)]. <em>Read-only.</em></p></td></tr>
<tr><td><code>sessionUUID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The unique ID associated with the agent's current session in the domain. <em>Read-only.</em></p></td></tr>
<tr><td><code>avatarViewRadius</code></td><td>number</td><td><p>Every avatar within this many metres of the agent's avatar arrives in full detail (its joints and gaze), whichever way the agent faces; beyond it, only avatars in front of its head do. Default <code>3</code>. An AI resident reading body language sets it to the distance it reads at.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

### isAvatar {#isAvatar}

```js
Agent.isAvatar()
```

<div class="api-text" v-pre><p>Checks whether the script is emulating an avatar.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the script is emulating an avatar, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Check whether the agent is emulating an avatar.</p></div>

```js
(function () {
    print("Agent is avatar: " + Agent.isAvatar());
    print("Agent is avatar: " + Agent.isAvatar); // Same result.
}());
```

### playAvatarSound {#playAvatarSound}

```js
Agent.playAvatarSound(avatarSound, volume?)
```

<div class="api-text" v-pre><p>Plays a sound from the position and with the orientation of the emulated avatar's head. No sound is played unless <code>isAvatar == true</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>avatarSound</code></td><td><a href="SoundObject">SoundObject</a></td><td></td><td><p>The sound played.</p></td></tr>
<tr><td><code>volume</code> <em>optional</em></td><td>number</td><td><code>1</code></td><td><p>The volume it plays at, <code>0</code> to <code>1</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Play a sound from an emulated avatar.</p></div>

```js
(function () {
    Agent.isAvatar = true;
    var sound = SoundCache.getSound(Script.resourcesPath() + "sounds/sample.wav");
    Script.setTimeout(function () { // Give the sound time to load.
        Agent.playAvatarSound(sound);
    }, 1000);
}());
```

### setIsAvatar {#setIsAvatar}

```js
Agent.setIsAvatar(isAvatar)
```

<div class="api-text" v-pre><p>Sets whether the script should emulate an avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isAvatar</code></td><td>boolean</td><td><p><code>true</code> if the script emulates an avatar, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Make an assignment client script emulate an avatar.</p></div>

```js
(function () {
    Agent.setIsAvatar(true);
    Avatar.displayName = "AC avatar";
    print("Position: " + JSON.stringify(Avatar.position));  // 0, 0, 0
}());
```

### takeHeardAudio {#takeHeardAudio}

```js
Agent.takeHeardAudio()
```

<div class="api-text" v-pre><p>Takes what the agent has heard since the last call: the mixed audio the audio mixer sends this agent, as 16-bit signed mono PCM at 24,000 Hz. Empty unless <code>isListeningToAudioStream == true</code>. At most the last 30 s are kept between calls (an AI resident's hearing).</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> ArrayBuffer <p>The audio heard since the last call.</p></div>
