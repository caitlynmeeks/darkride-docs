---
title: "tabletInterface"
description: "The tabletInterface API provides the facilities to work with the system or other tablet."
draft: true
---

# tabletInterface

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>tabletInterface</code> API provides the facilities to work with the system or other tablet.</p></div>

## Functions {#functions}

### getTablet {#getTablet}

```js
tabletInterface.getTablet(name)
```

<div class="api-text" v-pre><p>Gets an instance of a tablet. A new tablet is created if one with the specified name doesn't already exist.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>A unique name that identifies the tablet.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="TabletProxy">TabletProxy</a> <p>The tablet instance.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Display Darkride's home page on the system tablet.</p></div>

```js
var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
tablet.gotoWebScreen("https://darkride.ai/");
```

### playSound {#playSound}

```js
tabletInterface.playSound(sound)
```

<div class="api-text" v-pre><p>Plays a standard tablet sound. The sound is played locally (only the user running the script hears it) without a position.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sound</code></td><td><a href="Tablet#AudioEvents">Tablet.AudioEvents</a></td><td><p>The tablet sound to play.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Play a tablet sound.</p></div>

```js
var TABLET_BUTTON_CLICK = 0;
Tablet.playSound(TABLET_BUTTON_CLICK);
```

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### tabletNotification {#tabletNotification}

```js
tabletInterface.tabletNotification.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a tablet message or dialog is displayed on the tablet that needs the user's attention. </p>
<p><strong>Note:</strong> Only triggered if the script is running in the same script engine as the script that created the tablet. By default, this means in scripts included as part of the default scripts.</p>
<p></p></div>
