---
title: "SoundObject"
description: "An audio resource, created by SoundCache.getSound, to be played back using Audio.playSound."
draft: true
---

# SoundObject

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>An audio resource, created by <a href="SoundCache#getSound"><code>SoundCache.getSound</code></a>, to be played back using <a href="Audio#playSound"><code>Audio.playSound</code></a>. </p>
<p>Supported file formats:</p>
 <ul> <li><b><code>*.wav</code></b>, <b><code>*.mp3</code></b>, <b><code>*.ogg</code></b>, <b><code>*.flac</code></b>, <b><code>*.aiff</code></b> and <a target="_blank" href="https://github.com/libsndfile/libsndfile/blob/v1.0.30/src/command.c#L122">any available from here</a></li>
 <li><b><code>*.raw</code></b> as 48 kHz 16-bit mono</li>
 <li><b><code>*.stereo.raw</code></b> as 48 kHz 16-bit stereo</li>
 </ul>
<p></p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>downloaded</code></td><td>boolean</td><td><p><code>true</code> if the sound has been downloaded and is ready to be played, otherwise <code>false</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>duration</code></td><td>number</td><td><p>The duration of the sound, in seconds. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### ready {#ready}

```js
SoundObject.ready.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the sound has been downloaded and is ready to be played.</p></div>

</div>
