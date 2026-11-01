---
title: "Audio"
description: "The Audio API provides facilities to interact with audio inputs and outputs and to play sounds."
draft: true
---

# Audio

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts, server entity scripts, assignment client scripts.</div>

<div class="api-text" v-pre><p>The <code>Audio</code> API provides facilities to interact with audio inputs and outputs and to play sounds.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>muted</code></td><td>boolean</td><td><p><code>true</code> if the audio input is muted for the current user context (desktop or HMD), otherwise <code>false</code>.</p></td></tr>
<tr><td><code>mutedDesktop</code></td><td>boolean</td><td><p><code>true</code> if desktop audio input is muted, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>mutedHMD</code></td><td>boolean</td><td><p><code>true</code> if the HMD input is muted, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>warnWhenMuted</code></td><td>boolean</td><td><p><code>true</code> if the "muted" warning is enabled, otherwise <code>false</code>. When enabled, if you speak while your microphone is muted, "muted" is displayed on the screen as a warning.</p></td></tr>
<tr><td><code>noiseReduction</code></td><td>boolean</td><td><p><code>true</code> if noise reduction is enabled, otherwise <code>false</code>. When enabled, the input audio signal is blocked (fully attenuated) when it falls below an adaptive threshold set just above the noise floor.</p></td></tr>
<tr><td><code>inputVolume</code></td><td>number</td><td><p>Adjusts the volume of the input audio, range <code>0.0</code> – <code>1.0</code>. If set to a value, the resulting value depends on the input device: for example, the volume can't be changed on some devices, and others might only support values of <code>0.0</code> and <code>1.0</code>.</p></td></tr>
<tr><td><code>inputLevel</code></td><td>number</td><td><p>The loudness of the audio input, range <code>0.0</code> (no sound) – <code>1.0</code> (the onset of clipping). <em>Read-only.</em></p></td></tr>
<tr><td><code>clipping</code></td><td>boolean</td><td><p><code>true</code> if the audio input is clipping, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>context</code></td><td>string</td><td><p>The current context of the audio: either <code>"Desktop"</code> or <code>"HMD"</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>devices</code></td><td>object</td><td><p><em>Read-only.</em> </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
<tr><td><code>pushToTalk</code></td><td>boolean</td><td><p><code>true</code> if push-to-talk is enabled for the current user context (desktop or HMD), otherwise <code>false</code>.</p></td></tr>
<tr><td><code>pushToTalkDesktop</code></td><td>boolean</td><td><p><code>true</code> if desktop push-to-talk is enabled, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>pushToTalkHMD</code></td><td>boolean</td><td><p><code>true</code> if HMD push-to-talk is enabled, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>pushingToTalk</code></td><td>boolean</td><td><p><code>true</code> if the user is currently pushing-to-talk, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>avatarGain</code></td><td>number</td><td><p>The gain (relative volume in dB) that avatars' voices are played at. This gain is used at the server.</p></td></tr>
<tr><td><code>localInjectorGain</code></td><td>number</td><td><p>The gain (relative volume in dB) that local injectors (local environment sounds) are played at.</p></td></tr>
<tr><td><code>serverInjectorGain</code></td><td>number</td><td><p>The gain (relative volume in dB) that server injectors (server environment sounds) are played at. This gain is used at the server.</p></td></tr>
<tr><td><code>systemInjectorGain</code></td><td>number</td><td><p>The gain (relative volume in dB) that system sounds are played at.</p></td></tr>
<tr><td><code>pushingToTalkOutputGainDesktop</code></td><td>number</td><td><p>The gain (relative volume in dB) that all sounds are played at when the user is holding the push-to-talk key in desktop mode.</p></td></tr>
<tr><td><code>acousticEchoCancellation</code></td><td>boolean</td><td><p><code>true</code> if acoustic echo cancellation is enabled, otherwise <code>false</code>. When enabled, sound from the audio output is suppressed when it echos back to the input audio signal.</p></td></tr>
<tr><td><code>isStereoInput</code></td><td>boolean</td><td><p><code>true</code> if the input audio is being used in stereo, otherwise <code>false</code>. Some devices do not support stereo, in which case the value is always <code>false</code>.</p></td></tr>
<tr><td><code>isSoloing</code></td><td>boolean</td><td><p><code>true</code> if currently audio soloing, i.e., playing audio from only specific avatars. <em>Read-only.</em></p></td></tr>
<tr><td><code>soloList</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>The list of currently soloed avatar IDs. Empty list if not currently audio soloing. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

### addToSoloList {#addToSoloList}

```js
Audio.addToSoloList(ids)
```

<div class="api-text" v-pre><p>Adds avatars to the audio solo list. If the audio solo list is not empty, only audio from the avatars in the list is played.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>ids</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>Avatar IDs to add to the solo list.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Listen to a single nearby avatar for a short while.</p></div>

```js
// Find nearby avatars.
var RANGE = 100; // m
var nearbyAvatars = AvatarList.getAvatarsInRange(MyAvatar.position, RANGE);

// Remove own avatar from list.
var myAvatarIndex = nearbyAvatars.indexOf(MyAvatar.sessionUUID);
if (myAvatarIndex !== -1) {
    nearbyAvatars.splice(myAvatarIndex, 1);
}

if (nearbyAvatars.length > 0) {
    // Listen to only one of the nearby avatars.
    var avatarName = AvatarList.getAvatar(nearbyAvatars[0]).displayName;
    print("Listening only to " + avatarName);
    Audio.addToSoloList([nearbyAvatars[0]]);

    // Stop listening to only the one avatar after a short while.
    Script.setTimeout(function () {
        print("Finished listening only to " + avatarName);
        Audio.resetSoloList();
    }, 10000); // 10s

} else {
    print("No nearby avatars");
}
```

### getAvatarGain {#getAvatarGain}

```js
Audio.getAvatarGain()
```

<div class="api-text" v-pre><p>Gets the gain (relative volume) that avatars' voices are played at. This gain is used at the server.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The avatar gain (dB) at the server.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report current audio gain settings.</p></div>

```js
// 0 value = normal volume; -ve value = quieter; +ve value = louder.
print("Avatar gain: " + Audio.getAvatarGain());
print("Environment server gain: " + Audio.getInjectorGain());
print("Environment local gain: " + Audio.getLocalInjectorGain());
print("System gain: " + Audio.getSystemInjectorGain());
```

### getInjectorGain {#getInjectorGain}

```js
Audio.getInjectorGain()
```

<div class="api-text" v-pre><p>Gets the gain (relative volume) that environment sounds from the server are played at.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The injector gain (dB) at the server.</p></div>

### getLocalEcho {#getLocalEcho}

```js
Audio.getLocalEcho()
```

<div class="api-text" v-pre><p>Gets whether your microphone audio is echoed back to you by the client. When enabled, microphone audio is echoed even if you're muted or not using push-to-talk.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if echoing microphone audio back to you from the client is enabled, <code>false</code> if it isn't.</p></div>

### getLocalInjectorGain {#getLocalInjectorGain}

```js
Audio.getLocalInjectorGain()
```

<div class="api-text" v-pre><p>Gets the gain (relative volume) that environment sounds from the client are played at.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The injector gain (dB) in the client.</p></div>

### getPushingToTalkOutputGainDesktop {#getPushingToTalkOutputGainDesktop}

```js
Audio.getPushingToTalkOutputGainDesktop()
```

<div class="api-text" v-pre><p>Gets the output volume gain that is used when the user is holding the push-to-talk key. Should be negative.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>gain - The output volume gain (dB) while using push-to-talk.</p></div>

### getRecording {#getRecording}

```js
Audio.getRecording()
```

<div class="api-text" v-pre><p>Checks whether an audio recording is currently being made.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if an audio recording is currently being made, otherwise <code>false</code>.</p></div>

### getServerEcho {#getServerEcho}

```js
Audio.getServerEcho()
```

<div class="api-text" v-pre><p>Gets whether your microphone audio is echoed back to you from the server. When enabled, microphone audio is echoed only if you're unmuted or are using push-to-talk.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if echoing microphone audio back to you from the server is enabled, <code>false</code> if it isn't.</p></div>

### getSystemInjectorGain {#getSystemInjectorGain}

```js
Audio.getSystemInjectorGain()
```

<div class="api-text" v-pre><p>Gets the gain (relative volume) that system sounds are played at.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The injector gain (dB) in the client.</p></div>

### isStereoInput {#isStereoInput}

```js
Audio.isStereoInput()
```

<div class="api-text" v-pre><p>Gets whether the audio input is used in stereo.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the audio input is used in stereo, otherwise <code>false</code>.</p></div>

### playSound {#playSound}

```js
Audio.playSound(sound, injectorOptions?)
```

<div class="api-text" v-pre><p>Starts playing or "injecting" the content of an audio file. The sound is played globally (sent to the audio mixer) so that everyone hears it, unless the <code>injectorOptions</code> has <code>localOnly</code> set to <code>true</code> in which case only the client hears the sound played. No sound is played if sent to the audio mixer but the client is not connected to an audio mixer. The <a href="AudioInjector"><code>AudioInjector</code></a> object returned by the function can be used to control the playback and get information about its current state.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sound</code></td><td><a href="SoundObject">SoundObject</a></td><td></td><td><p>The content of an audio file, loaded using <a href="SoundCache#getSound"><code>SoundCache.getSound</code></a>. See <a href="SoundObject"><code>SoundObject</code></a> for supported formats.</p></td></tr>
<tr><td><code>injectorOptions</code> <em>optional</em></td><td><a href="AudioInjector#AudioInjectorOptions">AudioInjector.AudioInjectorOptions</a></td><td><code>{}</code></td><td><p>Configures where and how the audio injector plays the audio file.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="AudioInjector">AudioInjector</a> <p>The audio injector that plays the audio file.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Play a sound.</p></div>

```js
var sound = SoundCache.getSound("http://hifi-content.s3.amazonaws.com/ken/samples/forest_ambiX.wav");

function playSound() {
    var injectorOptions = {
        position: MyAvatar.position
    };
    var injector = Audio.playSound(sound, injectorOptions);
}

function onSoundReady() {
    sound.ready.disconnect(onSoundReady);
    playSound();
}

if (sound.downloaded) {
    playSound();
} else {
    sound.ready.connect(onSoundReady);
}
```

### playSystemSound {#playSystemSound}

```js
Audio.playSystemSound(sound)
```

<div class="api-text" v-pre><p>Starts playing the content of an audio file locally (isn't sent to the audio mixer). This is the same as calling <a href="#playSound"><code>Audio.playSound</code></a> with <a href="AudioInjector#AudioInjectorOptions"><code>AudioInjector.AudioInjectorOptions</code></a> <code>localOnly</code> set <code>true</code> and the specified <code>position</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sound</code></td><td><a href="SoundObject">SoundObject</a></td><td><p>The content of an audio file, which is loaded using <a href="SoundCache#getSound"><code>SoundCache.getSound</code></a>. See <a href="SoundObject"><code>SoundObject</code></a> for supported formats.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="AudioInjector">AudioInjector</a> <p>The audio injector that plays the audio file.</p></div>

### removeFromSoloList {#removeFromSoloList}

```js
Audio.removeFromSoloList(ids)
```

<div class="api-text" v-pre><p>Removes avatars from the audio solo list. If the audio solo list is not empty, only audio from the avatars in the list is played.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>ids</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>Avatar IDs to remove from the solo list.</p></td></tr>
</tbody></table></div>

### resetSoloList {#resetSoloList}

```js
Audio.resetSoloList()
```

<div class="api-text" v-pre><p>Clears the audio solo list.</p></div>

### setAvatarGain {#setAvatarGain}

```js
Audio.setAvatarGain(gain)
```

<div class="api-text" v-pre><p>Sets the gain (relative volume) that avatars' voices are played at. This gain is used at the server.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>gain</code></td><td>number</td><td><p>The avatar gain (dB) at the server.</p></td></tr>
</tbody></table></div>

### setInjectorGain {#setInjectorGain}

```js
Audio.setInjectorGain(gain)
```

<div class="api-text" v-pre><p>Sets the gain (relative volume) that environment sounds from the server are played at.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>gain</code></td><td>number</td><td><p>The injector gain (dB) at the server.</p></td></tr>
</tbody></table></div>

### setLocalEcho {#setLocalEcho}

```js
Audio.setLocalEcho()
```

<div class="api-text" v-pre><p>Sets whether your microphone audio is echoed back to you by the client. When enabled, microphone audio is echoed even if you're muted or not using push-to-talk.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Echo local audio for a few seconds.</p></div>

```js
Audio.setLocalEcho(true);
Script.setTimeout(function () {
    Audio.setLocalEcho(false);
}, 3000); // 3s
```

### setLocalInjectorGain {#setLocalInjectorGain}

```js
Audio.setLocalInjectorGain(gain)
```

<div class="api-text" v-pre><p>Sets the gain (relative volume) that environment sounds from the client are played at.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>gain</code></td><td>number</td><td><p>The injector gain (dB) in the client.</p></td></tr>
</tbody></table></div>

### setPushingToTalkOutputGainDesktop {#setPushingToTalkOutputGainDesktop}

```js
Audio.setPushingToTalkOutputGainDesktop(gain)
```

<div class="api-text" v-pre><p>Sets the output volume gain that will be used when the user is holding the push-to-talk key. Should be negative.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>gain</code></td><td>number</td><td><p>The output volume gain (dB) while using push-to-talk.</p></td></tr>
</tbody></table></div>

### setReverb {#setReverb}

```js
Audio.setReverb(enable)
```

<div class="api-text" v-pre><p>Enables or disables reverberation. Reverberation is done by the client on the post-mix audio. The reverberation options come from either the domain's audio zone configured on the server or settings scripted by <a href="#setReverbOptions">setReverbOptions</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p><code>true</code> to enable reverberation, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Enable reverberation for a short while.</p></div>

```js
var sound = SoundCache.getSound(Script.resourcesPath() + "sounds/sample.wav");
var injector;
var injectorOptions = {
    position: MyAvatar.position
};

Script.setTimeout(function () {
    print("Reverb OFF");
    Audio.setReverb(false);
    injector = Audio.playSound(sound, injectorOptions);
}, 1000);

Script.setTimeout(function () {
    var reverbOptions = new AudioEffectOptions();
    reverbOptions.roomSize = 100;
    Audio.setReverbOptions(reverbOptions);
    print("Reverb ON");
    Audio.setReverb(true);
}, 4000);

Script.setTimeout(function () {
    print("Reverb OFF");
    Audio.setReverb(false);
}, 8000);
```

### setReverbOptions {#setReverbOptions}

```js
Audio.setReverbOptions(options)
```

<div class="api-text" v-pre><p>Configures reverberation options. Use <a href="#setReverb">setReverb</a> to enable or disable reverberation.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>options</code></td><td><a href="AudioEffectOptions">AudioEffectOptions</a></td><td><p>The reverberation options.</p></td></tr>
</tbody></table></div>

### setServerEcho {#setServerEcho}

```js
Audio.setServerEcho(serverEcho)
```

<div class="api-text" v-pre><p>Sets whether your microphone audio is echoed back to you from the server. When enabled, microphone audio is echoed only if you're unmuted or are using push-to-talk.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>serverEcho</code></td><td>boolean</td><td><p><code>true</code> to enable echoing microphone back to you from the server, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

### setStereoInput {#setStereoInput}

```js
Audio.setStereoInput(stereo)
```

<div class="api-text" v-pre><p>Sets whether the audio input should be used in stereo. If the audio input doesn't support stereo then setting a value of <code>true</code> has no effect.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>stereo</code></td><td>boolean</td><td><p><code>true</code> if the audio input should be used in stereo, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

### setSystemInjectorGain {#setSystemInjectorGain}

```js
Audio.setSystemInjectorGain(gain)
```

<div class="api-text" v-pre><p>Sets the gain (relative volume) that system sounds are played at.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>gain</code></td><td>number</td><td><p>The injector gain (dB) in the client.</p></td></tr>
</tbody></table></div>

### startRecording {#startRecording}

```js
Audio.startRecording(filename)
```

<div class="api-text" v-pre><p>Starts making an audio recording of the audio being played in-world (i.e., not local-only audio) to a file in WAV format.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>The path and name of the file to make the recording in. Should have a <code>.wav</code> extension. The file is overwritten if it already exists.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the specified file could be opened and audio recording has started, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Make a 10 second audio recording.</p></div>

```js
var filename = File.getTempDir() + "/audio.wav";
if (Audio.startRecording(filename)) {
    Script.setTimeout(function () {
        Audio.stopRecording();
        print("Audio recording made in: " + filename);
    }, 10000);

} else {
    print("Could not make an audio recording in: " + filename);
}
```

### stopRecording {#stopRecording}

```js
Audio.stopRecording()
```

<div class="api-text" v-pre><p>Finishes making an audio recording started with <a href="#startRecording">startRecording</a>.</p></div>

### toggleLocalEcho {#toggleLocalEcho}

```js
Audio.toggleLocalEcho()
```

<div class="api-text" v-pre><p>Toggles the echoing of microphone audio back to you by the client. When enabled, microphone audio is echoed even if you're muted or not using push-to-talk.</p></div>

### toggleServerEcho {#toggleServerEcho}

```js
Audio.toggleServerEcho()
```

<div class="api-text" v-pre><p>Toggles the echoing of microphone audio back to you from the server. When enabled, microphone audio is echoed only if you're unmuted or are using push-to-talk.</p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### acousticEchoCancellationChanged {#acousticEchoCancellationChanged}

```js
Audio.acousticEchoCancellationChanged.connect(function (isEnabled) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when acoustic echo cancellation is enabled or disabled.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isEnabled</code></td><td>boolean</td><td><p><code>true</code> if acoustic echo cancellation is enabled, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

### avatarGainChanged {#avatarGainChanged}

```js
Audio.avatarGainChanged.connect(function (gain) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the avatar gain changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>gain</code></td><td>number</td><td><p>The new avatar gain value (dB).</p></td></tr>
</tbody></table></div>

### clippingChanged {#clippingChanged}

```js
Audio.clippingChanged.connect(function (isClipping) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the clipping state of the input audio changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isClipping</code></td><td>boolean</td><td><p><code>true</code> if the audio input is clipping, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

### contextChanged {#contextChanged}

```js
Audio.contextChanged.connect(function (context) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the current context of the audio changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>context</code></td><td>string</td><td><p>The current context of the audio: either <code>"Desktop"</code> or <code>"HMD"</code>.</p></td></tr>
</tbody></table></div>

### disconnected {#disconnected}

```js
Audio.disconnected.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the client is disconnected from the audio mixer.</p></div>

### environmentMuted {#environmentMuted}

```js
Audio.environmentMuted.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the client is muted by the mixer because they're within a certain radius (50m) of someone who requested the mute through Developer &gt; Audio &gt; Mute Environment.</p></div>

### inputLevelChanged {#inputLevelChanged}

```js
Audio.inputLevelChanged.connect(function (level) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the input audio level changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>level</code></td><td>number</td><td><p>The loudness of the input audio, range <code>0.0</code> (no sound) – <code>1.0</code> (the onset of clipping).</p></td></tr>
</tbody></table></div>

### inputReceived {#inputReceived}

```js
Audio.inputReceived.connect(function (inputSamples) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a frame of audio input is processed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>inputSamples</code></td><td>Int16Array</td><td><p>The audio input processed.</p></td></tr>
</tbody></table></div>

### inputVolumeChanged {#inputVolumeChanged}

```js
Audio.inputVolumeChanged.connect(function (volume) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the input audio volume changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>volume</code></td><td>number</td><td><p>The requested volume to be applied to the audio input, range <code>0.0</code> – <code>1.0</code>. The resulting value of <code>Audio.inputVolume</code> depends on the capabilities of the device. For example, the volume can't be changed on some devices, while others might only support values of <code>0.0</code> and <code>1.0</code>.</p></td></tr>
</tbody></table></div>

### isStereoInputChanged {#isStereoInputChanged}

```js
Audio.isStereoInputChanged.connect(function (isStereo) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the input audio use changes between mono and stereo.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isStereo</code></td><td>boolean</td><td><p><code>true</code> if the input audio is stereo, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

### localInjectorGainChanged {#localInjectorGainChanged}

```js
Audio.localInjectorGainChanged.connect(function (gain) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the local injector gain changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>gain</code></td><td>number</td><td><p>The new local injector gain value (dB).</p></td></tr>
</tbody></table></div>

### mutedByMixer {#mutedByMixer}

```js
Audio.mutedByMixer.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the client is muted by the mixer because their loudness value for the noise background has reached the threshold set for the domain (in the server settings).</p></div>

### mutedChanged {#mutedChanged}

```js
Audio.mutedChanged.connect(function (isMuted) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the audio input is muted or unmuted for the current context (desktop or HMD).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isMuted</code></td><td>boolean</td><td><p><code>true</code> if the audio input is muted for the current context (desktop or HMD), otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when audio input is muted or unmuted</p></div>

```js
Audio.mutedChanged.connect(function (isMuted) {
    print("Audio muted: " + isMuted);
});
```

### mutedDesektopChanged {#mutedDesektopChanged}

```js
Audio.mutedDesektopChanged.connect(function (isMuted) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when desktop audio input is muted or unmuted.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isMuted</code></td><td>boolean</td><td><p><code>true</code> if desktop audio input is muted, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when desktop muting changes.</p></div>

```js
Audio.mutedDesktopChanged.connect(function (isMuted) {
    print("Desktop muted: " + isMuted);
});
```

### mutedHMDChanged {#mutedHMDChanged}

```js
Audio.mutedHMDChanged.connect(function (isMuted) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when HMD audio input is muted or unmuted.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isMuted</code></td><td>boolean</td><td><p><code>true</code> if HMD audio input is muted, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

### noiseGateClosed {#noiseGateClosed}

```js
Audio.noiseGateClosed.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the noise gate is closed. The input audio signal is blocked (fully attenuated) because it has fallen below an adaptive threshold set just above the noise floor. Only occurs if <code>Audio.noiseReduction</code> is <code>true</code>.</p></div>

### noiseGateOpened {#noiseGateOpened}

```js
Audio.noiseGateOpened.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the noise gate is opened. The input audio signal is no longer blocked (fully attenuated) because it has risen above an adaptive threshold set just above the noise floor. Only occurs if <code>Audio.noiseReduction</code> is <code>true</code>.</p></div>

### noiseReductionChanged {#noiseReductionChanged}

```js
Audio.noiseReductionChanged.connect(function (isEnabled) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when audio input noise reduction is enabled or disabled.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isEnabled</code></td><td>boolean</td><td><p><code>true</code> if audio input noise reduction is enabled, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

### pushingToTalkChanged {#pushingToTalkChanged}

```js
Audio.pushingToTalkChanged.connect(function (talking) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the user starts or stops push-to-talk.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>talking</code></td><td>boolean</td><td><p><code>true</code> if started push-to-talk, <code>false</code> if stopped push-to-talk.</p></td></tr>
</tbody></table></div>

### pushingToTalkOutputGainDesktopChanged {#pushingToTalkOutputGainDesktopChanged}

```js
Audio.pushingToTalkOutputGainDesktopChanged.connect(function (gain) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the push to talk gain changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>gain</code></td><td>number</td><td><p>The new output gain value (dB).</p></td></tr>
</tbody></table></div>

### pushToTalkChanged {#pushToTalkChanged}

```js
Audio.pushToTalkChanged.connect(function (enabled) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when push-to-talk is enabled or disabled for the current context (desktop or HMD).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> if push-to-talk is enabled, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when push-to-talk changes.</p></div>

```js
Audio.pushToTalkChanged.connect(function (enabled) {
    print("Push to talk: " + (enabled ? "on" : "off"));
});
```

### pushToTalkDesktopChanged {#pushToTalkDesktopChanged}

```js
Audio.pushToTalkDesktopChanged.connect(function (enabled) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when push-to-talk is enabled or disabled for desktop mode.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> if push-to-talk is enabled for desktop mode, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

### pushToTalkHMDChanged {#pushToTalkHMDChanged}

```js
Audio.pushToTalkHMDChanged.connect(function (enabled) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when push-to-talk is enabled or disabled for HMD mode.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> if push-to-talk is enabled for HMD mode, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

### receivedFirstPacket {#receivedFirstPacket}

```js
Audio.receivedFirstPacket.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the client receives its first packet from the audio mixer.</p></div>

### serverInjectorGainChanged {#serverInjectorGainChanged}

```js
Audio.serverInjectorGainChanged.connect(function (gain) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the server injector gain changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>gain</code></td><td>number</td><td><p>The new server injector gain value (dB).</p></td></tr>
</tbody></table></div>

### systemInjectorGainChanged {#systemInjectorGainChanged}

```js
Audio.systemInjectorGainChanged.connect(function (gain) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the system injector gain changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>gain</code></td><td>number</td><td><p>The new system injector gain value (dB).</p></td></tr>
</tbody></table></div>

### warnWhenMutedChanged {#warnWhenMutedChanged}

```js
Audio.warnWhenMutedChanged.connect(function (isEnabled) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when "warn when muted" is enabled or disabled.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isEnabled</code></td><td>boolean</td><td><p><code>true</code> if "warn when muted" is enabled, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### onContextChanged {#onContextChanged}

```js
Audio.onContextChanged()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::


### setInputDevice {#setInputDevice}

```js
Audio.setInputDevice(device, isHMD)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>device</code></td><td>object</td><td><p>Device.</p></td></tr>
<tr><td><code>isHMD</code></td><td>boolean</td><td><p>Is HMD.</p></td></tr>
</tbody></table></div>

### setOutputDevice {#setOutputDevice}

```js
Audio.setOutputDevice(device, isHMD)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>device</code></td><td>object</td><td><p>Device.</p></td></tr>
<tr><td><code>isHMD</code></td><td>boolean</td><td><p>Is HMD.</p></td></tr>
</tbody></table></div>

### nop {#nop}

```js
Audio.nop.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

