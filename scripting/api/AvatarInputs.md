---
title: "AvatarInputs"
description: "The AvatarInputs API provides facilities to manage user inputs."
draft: true
---

# AvatarInputs

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>AvatarInputs</code> API provides facilities to manage user inputs.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>cameraEnabled</code></td><td>boolean</td><td><p><code>true</code> if webcam face tracking is enabled, <code>false</code> if it is disabled. <em>Read-only.</em> </p>
<p class="important">Deprecated: This property is deprecated and has been removed.</p>
<p></p></td></tr>
<tr><td><code>cameraMuted</code></td><td>boolean</td><td><p><code>true</code> if webcam face tracking is muted (temporarily disabled), <code>false</code> it if isn't. <em>Read-only.</em> </p>
<p class="important">Deprecated: This property is deprecated and has been removed.</p>
<p></p></td></tr>
<tr><td><code>ignoreRadiusEnabled</code></td><td>boolean</td><td><p><code>true</code> if the privacy shield is enabled, <code>false</code> if it is disabled. <em>Read-only.</em></p></td></tr>
<tr><td><code>isHMD</code></td><td>boolean</td><td><p><code>true</code> if the display mode is HMD, <code>false</code> if it isn't. <em>Read-only.</em></p></td></tr>
<tr><td><code>showAudioTools</code></td><td>boolean</td><td><p><code>true</code> if the microphone mute button and audio level meter are shown, <code>false</code> if they are hidden.</p></td></tr>
<tr><td><code>showBubbleTools</code></td><td>boolean</td><td><p><code>true</code> if the privacy shield UI button is shown, <code>false</code> if it is hidden.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

### loudnessToAudioLevel {#loudnessToAudioLevel}

```js
AvatarInputs.loudnessToAudioLevel(loudness)
```

<div class="api-text" v-pre><p>Converts non-linear audio loudness to a linear audio level.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>loudness</code></td><td>number</td><td><p>The non-linear audio loudness.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The linear audio level.</p></div>

### resetSensors {#resetSensors}

```js
AvatarInputs.resetSensors()
```

<div class="api-text" v-pre><p>Resets sensors, audio, avatar animations, and the avatar rig.</p></div>

### setShowAudioTools {#setShowAudioTools}

```js
AvatarInputs.setShowAudioTools(showAudioTools)
```

<div class="api-text" v-pre><p>Sets whether or not the microphone mute button and audio level meter is shown.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>showAudioTools</code></td><td>boolean</td><td><p><code>true</code> to show the microphone mute button and audio level meter, <code>false</code> to hide it.</p></td></tr>
</tbody></table></div>

### setShowBubbleTools {#setShowBubbleTools}

```js
AvatarInputs.setShowBubbleTools(showBubbleTools)
```

<div class="api-text" v-pre><p>Sets whether or not the privacy shield button is shown.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>showBubbleTools</code></td><td>boolean</td><td><p><code>true</code> to show the privacy shield button, <code>false</code> to hide it.</p></td></tr>
</tbody></table></div>

### toggleCameraMute {#toggleCameraMute}

```js
AvatarInputs.toggleCameraMute()
```

<div class="api-text" v-pre><p>Toggles the muting (temporary disablement) of webcam face tracking on/off. </p>
<p class="important">Deprecated: This function is deprecated and has been removed.</p>
<p></p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### avatarEnteredIgnoreRadius {#avatarEnteredIgnoreRadius}

```js
AvatarInputs.avatarEnteredIgnoreRadius.connect(function (avatarID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when another user enters the privacy shield.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>avatarID</code></td><td>QUuid</td><td><p>The session ID of the user that entered the privacy shield.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when a user enters the privacy shield.</p></div>

```js
AvatarInputs.avatarEnteredIgnoreRadius.connect(function(avatarID) {
    print("User entered the privacy shield: " + avatarID);
};
```

### enteredIgnoreRadiusChanged {#enteredIgnoreRadiusChanged}

```js
AvatarInputs.enteredIgnoreRadiusChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when another user enters the privacy shield.</p></div>

### ignoreRadiusEnabledChanged {#ignoreRadiusEnabledChanged}

```js
AvatarInputs.ignoreRadiusEnabledChanged.connect(function (enabled) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the privacy shield is enabled or disabled.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> if the privacy shield is enabled, <code>false</code> if it is disabled.</p></td></tr>
</tbody></table></div>

### isHMDChanged {#isHMDChanged}

```js
AvatarInputs.isHMDChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the display mode changes between desktop and HMD.</p></div>

### showAudioToolsChanged {#showAudioToolsChanged}

```js
AvatarInputs.showAudioToolsChanged.connect(function (show) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the visibility of the microphone mute button and audio level meter changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>show</code></td><td>boolean</td><td><p><code>true</code> if the microphone mute button and audio level meter are shown, <code>false</code> if they are is hidden.</p></td></tr>
</tbody></table></div>

### showBubbleToolsChanged {#showBubbleToolsChanged}

```js
AvatarInputs.showBubbleToolsChanged.connect(function (show) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the visibility of the privacy shield button changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>show</code></td><td>boolean</td><td><p><code>true</code> if the privacy shield UI button is shown, <code>false</code> if it is hidden.</p></td></tr>
</tbody></table></div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### avatarLeftIgnoreRadius {#avatarLeftIgnoreRadius}

```js
AvatarInputs.avatarLeftIgnoreRadius.connect(function (avatarID) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when another user leaves the privacy shield. </p>
<p><strong>Note:</strong> Currently doesn't work.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>avatarID</code></td><td>QUuid</td><td><p>The session ID of the user that exited the privacy shield.</p></td></tr>
</tbody></table></div>

### cameraEnabledChanged {#cameraEnabledChanged}

```js
AvatarInputs.cameraEnabledChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and has been removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when webcam face tracking is enabled or disabled.</p></div>

### cameraMutedChanged {#cameraMutedChanged}

```js
AvatarInputs.cameraMutedChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and has been removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when webcam face tracking is muted (temporarily disabled) or unmuted.</p></div>
