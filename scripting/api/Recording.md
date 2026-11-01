---
title: "Recording"
description: "The Recording API makes and plays back recordings of voice and avatar movements."
draft: true
---

# Recording

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts, assignment client scripts.</div>

<div class="api-text" v-pre><p>The <code>Recording</code> API makes and plays back recordings of voice and avatar movements. Playback may be done on a user's avatar or an assignment client agent (see the <a href="Agent"><code>Agent</code></a> API).</p></div>

## Functions {#functions}

### getDefaultRecordingSaveDirectory {#getDefaultRecordingSaveDirectory}

```js
Recording.getDefaultRecordingSaveDirectory()
```

<div class="api-text" v-pre><p>Gets the default directory that recordings are saved in.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The default recording save directory.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the default save directory.</p></div>

```js
print("Default save directory: " + Recording.getDefaultRecordingSaveDirectory());
```

### getPlayerUseDisplayName {#getPlayerUseDisplayName}

```js
Recording.getPlayerUseDisplayName()
```

<div class="api-text" v-pre><p>Gets whether recording playback will use the display name that the recording was made with.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if recording playback will use the display name that the recording was made with, <code>false</code> if playback will keep the current display name.</p></div>

### getPlayerUseSkeletonModel {#getPlayerUseSkeletonModel}

```js
Recording.getPlayerUseSkeletonModel()
```

<div class="api-text" v-pre><p>Gets whether recording playback will use the avatar model that the recording was made with.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if recording playback will use the avatar model that the recording was made with, <code>false</code> if playback will use the current avatar model.</p></div>

### getPlayFromCurrentLocation {#getPlayFromCurrentLocation}

```js
Recording.getPlayFromCurrentLocation()
```

<div class="api-text" v-pre><p>Gets whether recordings are played at the current avatar location or the recorded location.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if recordings are played at the current avatar location, <code>false</code> if played at the recorded location.</p></div>

### isPaused {#isPaused}

```js
Recording.isPaused()
```

<div class="api-text" v-pre><p>Gets whether recording playback is currently paused.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if recording playback is currently paused, <code>false</code> if it isn't.</p></div>

### isPlaying {#isPlaying}

```js
Recording.isPlaying()
```

<div class="api-text" v-pre><p>Gets whether a recording is currently playing.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if a recording is being played, <code>false</code> if one isn't.</p></div>

### isRecording {#isRecording}

```js
Recording.isRecording()
```

<div class="api-text" v-pre><p>Gets whether a recording is currently being made.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if a recording is currently being made, <code>false</code> if one isn't.</p></div>

### loadLastRecording {#loadLastRecording}

```js
Recording.loadLastRecording()
```

<div class="api-text" v-pre><p>Loads the most recently made recording and plays it back on your avatar.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Make a 5 second recording and immediately play it back on your avatar.</p></div>

```js
Recording.startRecording();

Script.setTimeout(function () {
    Recording.stopRecording();
    Recording.loadLastRecording();
}, 5000);
```

### loadRecording {#loadRecording}

```js
Recording.loadRecording(url, callback?)
```

<div class="api-text" v-pre><p>Loads a recording so that it is ready for playing.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The ATP, HTTP, or file system URL of the recording to load.</p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td><a href="#loadRecordingCallback">Recording~loadRecordingCallback</a></td><td><code>null</code></td><td><p>The function to call upon completion.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Load and play back a recording from the asset server.</p></div>

```js
var assetPath = Window.browseAssets();
print("Asset path: " + assetPath);

if (assetPath.slice(-4) === ".hfr") {
    Recording.loadRecording("atp:" + assetPath, function (success, url) {
        if (!success) {
            print("Error loading recording.");
            return;
        }
        Recording.startPlaying();
    });
}
```

### pausePlayer {#pausePlayer}

```js
Recording.pausePlayer()
```

<div class="api-text" v-pre><p>Pauses playback of the recording currently playing. Use <a href="#startPlaying">startPlaying</a> to resume playback or <a href="#stopPlaying">stopPlaying</a> to stop playback.</p></div>

### playerElapsed {#playerElapsed}

```js
Recording.playerElapsed()
```

<div class="api-text" v-pre><p>Gets the current playback time in the loaded recording, in seconds.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The current playback time in the loaded recording, in seconds.</p></div>

### playerLength {#playerLength}

```js
Recording.playerLength()
```

<div class="api-text" v-pre><p>Gets the length of the loaded recording, in seconds.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The length of the recording currently loaded, in seconds</p></div>

### recorderElapsed {#recorderElapsed}

```js
Recording.recorderElapsed()
```

<div class="api-text" v-pre><p>Gets the duration of the recording currently being made or recently made, in seconds.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The duration of the recording currently being made or recently made, in seconds.</p></div>

### saveRecording {#saveRecording}

```js
Recording.saveRecording(filename)
```

<div class="api-text" v-pre><p>Saves the most recently made recording to a file.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>The path and name of the file to save the recording to.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Save a 5 second recording to a file.</p></div>

```js
Recording.startRecording();

Script.setTimeout(function () {
    Recording.stopRecording();
    var filename = (new Date()).toISOString();  // yyyy-mm-ddThh:mm:ss.sssZ
    filename = filename.slice(0, -5).replace(/:/g, "").replace("T", "-") 
        + ".hfr";  // yyyymmmdd-hhmmss.hfr
    filename = Recording.getDefaultRecordingSaveDirectory() + filename;
    Recording.saveRecording(filename);
    print("Saved recording: " + filename);
}, 5000);
```

### saveRecordingToAsset {#saveRecordingToAsset}

```js
Recording.saveRecordingToAsset(callback)
```

<div class="api-text" v-pre><p>Saves the most recently made recording to the domain's asset server.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>callback</code></td><td><a href="#saveRecordingToAssetCallback">Recording~saveRecordingToAssetCallback</a></td><td><p>The function to call upon completion.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the recording is successfully being saved, <code>false</code> if not.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Save a 5 second recording to the asset server.</p></div>

```js
function onSavedRecordingToAsset(url) {
    if (url === "") {
        print("Couldn't save recording.");
        return;
    }

    print("Saved recording: " + url);  // atp:SHA256

    var filename = (new Date()).toISOString();  // yyyy-mm-ddThh:mm:ss.sssZ
    filename = filename.slice(0, -5).replace(/:/g, "").replace("T", "-")
        + ".hfr";  // yyyymmmdd-hhmmss.hfr
    var hash = url.slice(4);  // Remove leading "atp:" from url.
    mappingPath = "/recordings/" + filename;
    Assets.setMapping(mappingPath, hash, function (error) {
        if (error) {
            print("Mapping error: " + error);
        }
    });
    print("Mapped recording: " + mappingPath);  // /recordings/filename
}

Recording.startRecording();

Script.setTimeout(function () {
    Recording.stopRecording();
    var success = Recording.saveRecordingToAsset(onSavedRecordingToAsset);
    if (!success) {
        print("Couldn't save recording.");
    }
}, 5000);
```

### setPlayerAudioOffset {#setPlayerAudioOffset}

```js
Recording.setPlayerAudioOffset(audioOffset)
```

<div class="api-text" v-pre><p class="important">Not implemented: This method is not implemented yet.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>audioOffset</code></td><td>number</td><td><p>Audio offset.</p></td></tr>
</tbody></table></div>

### setPlayerLoop {#setPlayerLoop}

```js
Recording.setPlayerLoop(loop)
```

<div class="api-text" v-pre><p>Sets whether playback should repeat in a loop.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>loop</code></td><td>boolean</td><td><p><code>true</code> if playback should repeat, <code>false</code> if it shouldn't.</p></td></tr>
</tbody></table></div>

### setPlayerTime {#setPlayerTime}

```js
Recording.setPlayerTime(time)
```

<div class="api-text" v-pre><p>Sets the current playback time in the loaded recording.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>time</code></td><td>number</td><td><p>The current playback time, in seconds.</p></td></tr>
</tbody></table></div>

### setPlayerUseDisplayName {#setPlayerUseDisplayName}

```js
Recording.setPlayerUseDisplayName(useDisplayName)
```

<div class="api-text" v-pre><p>Sets whether recording playback will use the display name that the recording was made with.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>useDisplayName</code></td><td>boolean</td><td><p><code>true</code> to have recording playback use the display name that the recording was made with, <code>false</code> to have recording playback keep the current display name.</p></td></tr>
</tbody></table></div>

### setPlayerUseSkeletonModel {#setPlayerUseSkeletonModel}

```js
Recording.setPlayerUseSkeletonModel(useSkeletonModel)
```

<div class="api-text" v-pre><p>Sets whether recording playback will use the avatar model that the recording was made with.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>useSkeletonModel</code></td><td>boolean</td><td><p><code>true</code> to have recording playback use the avatar model that the recording was made with, <code>false</code> to have playback use the current avatar model.</p></td></tr>
</tbody></table></div>

### setPlayerVolume {#setPlayerVolume}

```js
Recording.setPlayerVolume(volume)
```

<div class="api-text" v-pre><p>Sets the playback audio volume.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>volume</code></td><td>number</td><td><p>The playback audio volume, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
</tbody></table></div>

### setPlayFromCurrentLocation {#setPlayFromCurrentLocation}

```js
Recording.setPlayFromCurrentLocation(playFromCurrentLocation)
```

<div class="api-text" v-pre><p>Sets whether recordings are played at the current avatar location or the recorded location.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>playFromCurrentLocation</code></td><td>boolean</td><td><p><code>true</code> to play recordings at the current avatar location, <code>false</code> to play recordings at the recorded location.</p></td></tr>
</tbody></table></div>

### startPlaying {#startPlaying}

```js
Recording.startPlaying()
```

<div class="api-text" v-pre><p>Starts playing the recording currently loaded or paused.</p></div>

### startRecording {#startRecording}

```js
Recording.startRecording()
```

<div class="api-text" v-pre><p>Starts making a recording.</p></div>

### stopPlaying {#stopPlaying}

```js
Recording.stopPlaying()
```

<div class="api-text" v-pre><p>Stops playing the recording currently playing or paused.</p></div>

### stopRecording {#stopRecording}

```js
Recording.stopRecording()
```

<div class="api-text" v-pre><p>Stops making a recording. The recording may be saved using <a href="#saveRecording">saveRecording</a> or <a href="#saveRecordingToAsset">saveRecordingToAsset</a>, or immediately played back with <a href="#loadLastRecording">loadLastRecording</a>.</p></div>

## Types {#types}

### loadRecordingCallback {#loadRecordingCallback}

<div class="api-text" v-pre><p>Called when a <a href="#loadRecording"><code>Recording.loadRecording</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>success</code></td><td>boolean</td><td><p><code>true</code> if the recording has successfully been loaded, <code>false</code> if it hasn't.</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td><p>The URL of the recording that was requested to be loaded.</p></td></tr>
</tbody></table></div>

### saveRecordingToAssetCallback {#saveRecordingToAssetCallback}

<div class="api-text" v-pre><p>Called when a <a href="#saveRecordingToAsset"><code>Recording.saveRecordingToAsset</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL of the recording stored in the asset server if successful, <code>""</code> if unsuccessful. The URL has <code>atp:</code> as the scheme and the SHA256 hash as the filename (with no extension).</p></td></tr>
</tbody></table></div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### getPlayerUseAttachments {#getPlayerUseAttachments}

```js
Recording.getPlayerUseAttachments()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p><em>Not used.</em></p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Use attachments.</p></div>

### getPlayerUseHeadModel {#getPlayerUseHeadModel}

```js
Recording.getPlayerUseHeadModel()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p><em>Not used.</em></p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>Use head model.</p></div>

### setPlayerUseAttachments {#setPlayerUseAttachments}

```js
Recording.setPlayerUseAttachments(useAttachments)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p><em>Not used.</em></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>useAttachments</code></td><td>boolean</td><td><p>Use attachments.</p></td></tr>
</tbody></table></div>

### setPlayerUseHeadModel {#setPlayerUseHeadModel}

```js
Recording.setPlayerUseHeadModel(useHeadModel)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p><em>Not used.</em></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>useHeadModel</code></td><td>boolean</td><td><p>Use head model.</p></td></tr>
</tbody></table></div>
