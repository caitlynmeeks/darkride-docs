---
title: "Tablet"
description: "The Tablet API provides the facilities to work with the system or other tablet."
draft: true
---

# Tablet

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Tablet</code> API provides the facilities to work with the system or other tablet. In toolbar mode (see Developer &gt; UI options), the tablet's menu buttons are displayed in a toolbar and other tablet content is displayed in a dialog.</p>
 <p>See also the <a href="Toolbars"><code>Toolbars</code></a> API for working with toolbars.</p></div>

## Functions {#functions}

<div class="api-entry">

### getTablet {#getTablet}

```js
Tablet.getTablet(name)
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

</div>

<div class="api-entry">

### playSound {#playSound}

```js
Tablet.playSound(sound)
```

<div class="api-text" v-pre><p>Plays a standard tablet sound. The sound is played locally (only the user running the script hears it) without a position.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sound</code></td><td><a href="#AudioEvents">Tablet.AudioEvents</a></td><td><p>The tablet sound to play.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Play a tablet sound.</p></div>

```js
var TABLET_BUTTON_CLICK = 0;
Tablet.playSound(TABLET_BUTTON_CLICK);
```

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### tabletNotification {#tabletNotification}

```js
Tablet.tabletNotification.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a tablet message or dialog is displayed on the tablet that needs the user's attention. </p>
<p><strong>Note:</strong> Only triggered if the script is running in the same script engine as the script that created the tablet. By default, this means in scripts included as part of the default scripts.</p>
<p></p></div>

</div>

## Types {#types}

<div class="api-entry">

### AudioEvents {#AudioEvents}

<div class="api-text" v-pre><p>Standard tablet sounds.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>Button click.</td></tr>
 <tr><td><code>1</code></td><td>Button hover.</td></tr>
 <tr><td><code>2</code></td><td>Tablet open.</td></tr>
 <tr><td><code>3</code></td><td>Tablet hands in.</td></tr>
 <tr><td><code>4</code></td><td>Tablet hands out.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>
