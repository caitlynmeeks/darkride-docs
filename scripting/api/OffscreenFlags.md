---
title: "OffscreenFlags"
description: "The OffscreenFlags API enables gamepad joystick navigation of UI."
draft: true
---

# OffscreenFlags

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>OffscreenFlags</code> API enables gamepad joystick navigation of UI.</p>
 <p><em>This API currently has no effect and is not used.</em></p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>navigationFocused</code></td><td>boolean</td><td><p><code>true</code> if UI has joystick navigation focus, <code>false</code> if it doesn't.</p></td></tr>
<tr><td><code>navigationFocusDisabled</code></td><td>boolean</td><td><p><code>true</code> if UI joystick navigation focus is disabled, <code>false</code> if it isn't.</p></td></tr>
</tbody></table></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### navigationFocusDisabledChanged {#navigationFocusDisabledChanged}

```js
OffscreenFlags.navigationFocusDisabledChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>navigationFocusDisabled</code> property changes.</p></div>

### navigationFocusedChanged {#navigationFocusedChanged}

```js
OffscreenFlags.navigationFocusedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the value of the <code>navigationFocused</code> property changes.</p></div>
