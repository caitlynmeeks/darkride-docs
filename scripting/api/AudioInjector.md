---
title: "AudioInjector"
description: "Plays or \"injects\" the content of an audio file."
---

# AudioInjector

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>Plays or "injects" the content of an audio file.</p>
 <p>Create using <a href="Audio"><code>Audio</code></a> API methods.</p></div>

```js
new AudioInjector()
```

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>playing</code></td><td>boolean</td><td><p><code>true</code> if the audio is currently playing, otherwise <code>false</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>loudness</code></td><td>number</td><td><p>The loudness in the last frame of audio, range <code>0.0</code> – <code>1.0</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>options</code></td><td><a href="#AudioInjectorOptions">AudioInjector.AudioInjectorOptions</a></td><td><p>Configures how the injector plays the audio.</p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### getLoudness {#getLoudness}

```js
AudioInjector.getLoudness()
```

<div class="api-text" v-pre><p>Gets the loudness of the most recent frame of audio played.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The loudness of the most recent frame of audio played, range <code>0.0</code> – <code>1.0</code>.</p></div>

</div>

<div class="api-entry">

### getOptions {#getOptions}

```js
AudioInjector.getOptions()
```

<div class="api-text" v-pre><p>Gets the current configuration of the audio injector.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#AudioInjectorOptions">AudioInjector.AudioInjectorOptions</a> <p>Configuration of how the injector plays the audio.</p></div>

</div>

<div class="api-entry">

### isPlaying {#isPlaying}

```js
AudioInjector.isPlaying()
```

<div class="api-text" v-pre><p>Gets whether or not the audio is currently playing.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the audio is currently playing, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>See if a sound is playing.</p></div>

```js
var sound = SoundCache.getSound(Script.resourcesPath() + "sounds/sample.wav");
var injector;
var injectorOptions = {
    position: MyAvatar.position
};

Script.setTimeout(function () { // Give the sound time to load.
    injector = Audio.playSound(sound, injectorOptions);
}, 1000);

Script.setTimeout(function () {
    print("Sound is playing: " + injector.isPlaying());
}, 2000);
```

</div>

<div class="api-entry">

### restart {#restart}

```js
AudioInjector.restart()
```

<div class="api-text" v-pre><p>Stops current playback, if any, and starts playing from the beginning.</p></div>

</div>

<div class="api-entry">

### setOptions {#setOptions}

```js
AudioInjector.setOptions(options)
```

<div class="api-text" v-pre><p>Configures how the injector plays the audio.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>options</code></td><td><a href="#AudioInjectorOptions">AudioInjector.AudioInjectorOptions</a></td><td><p>Configuration of how the injector plays the audio.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### stop {#stop}

```js
AudioInjector.stop()
```

<div class="api-text" v-pre><p>Stops audio playback.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Stop playing a sound before it finishes.</p></div>

```js
var sound = SoundCache.getSound(Script.resourcesPath() + "sounds/sample.wav");
var injector;
var injectorOptions = {
    position: MyAvatar.position
};

Script.setTimeout(function () { // Give the sound time to load.
    injector = Audio.playSound(sound, injectorOptions);
}, 1000);

Script.setTimeout(function () {
    injector.stop();
}, 2000);
```

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### finished {#finished}

```js
AudioInjector.finished.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the audio has finished playing.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when a sound has finished playing.</p></div>

```js
var sound = SoundCache.getSound(Script.resourcesPath() + "sounds/sample.wav");
var injector;
var injectorOptions = {
    position: MyAvatar.position
};

Script.setTimeout(function () { // Give the sound time to load.
    injector = Audio.playSound(sound, injectorOptions);
    injector.finished.connect(function () {
        print("Finished playing sound");
    });
}, 1000);
```

</div>

## Types {#types}

<div class="api-entry">

### AudioInjectorOptions {#AudioInjectorOptions}

<div class="api-text" v-pre><p>Configures where and how an audio injector plays its audio.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><code>Vec3.ZERO</code></td><td><p>The position in the world to play the sound.</p></td></tr>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td><code>Quat.IDENTITY</code></td><td><p>The orientation in the world to play the sound in.</p></td></tr>
<tr><td><code>volume</code></td><td>number</td><td><code>1.0</code></td><td><p>Playback volume, between <code>0.0</code> and <code>1.0</code>.</p></td></tr>
<tr><td><code>pitch</code></td><td>number</td><td><code>1.0</code></td><td><p>Alter the pitch of the sound, within +/- 2 octaves. The value is the relative sample rate to resample the sound at, range <code>0.0625</code> – <code>16.0</code>.<br> A value of <code>0.0625</code> lowers the pitch by 2 octaves.<br> A value of <code>1.0</code> means there is no change in pitch.<br> A value of <code>16.0</code> raises the pitch by 2 octaves.</p></td></tr>
<tr><td><code>loop</code></td><td>boolean</td><td><code>false</code></td><td><p>If <code>true</code>, the sound is played repeatedly until playback is stopped.</p></td></tr>
<tr><td><code>secondOffset</code></td><td>number</td><td><code>0</code></td><td><p>Starts playback from a specified time (seconds) within the sound file, ≥ <code>0</code>.</p></td></tr>
<tr><td><code>localOnly</code></td><td>boolean</td><td><code>false</code></td><td><p>If <code>true</code>, the sound is played back locally on the client rather than to others via the audio mixer.</p></td></tr>
<tr><td><code>ignorePenumbra</code></td><td>boolean</td><td><code>false</code></td><td><p class="important">Deprecated: This property is deprecated and will be removed.</p></td></tr>
</tbody></table></div>

</div>
