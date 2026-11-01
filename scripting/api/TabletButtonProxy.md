---
title: "TabletButtonProxy"
description: "A tablet button."
draft: true
---

# TabletButtonProxy

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>A tablet button. In toolbar mode (Developer &gt; UI &gt; Tablet Becomes Toolbar), the tablet button is displayed on the toolbar.</p>
 <p>Create a new button using <a href="TabletProxy#addButton"><code>TabletProxy#addButton</code></a>.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>uuid</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the button. <em>Read-only.</em></p></td></tr>
<tr><td><code>properties</code></td><td><a href="#ButtonProperties">TabletButtonProxy.ButtonProperties</a></td><td><p>The current values of the button's properties. Only properties that have been set during button creation or subsequently edited are returned. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### editProperties {#editProperties}

```js
editProperties(properties)
```

<div class="api-text" v-pre><p>Changes the values of the button's properties.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td><a href="#ButtonProperties">TabletButtonProxy.ButtonProperties</a></td><td><p>The properties to change.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Set a button's hover text after a delay.</p></div>

```js
var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
var button = tablet.addButton({ text: "TEST" });

button.propertiesChanged.connect(function () {
    print("TEST button properties changed");
});

Script.setTimeout(function () {
    button.editProperties({ text: "CHANGED" });
}, 2000);

Script.scriptEnding.connect(function () {
    tablet.removeButton(button);
});
```

</div>

<div class="api-entry">

### getProperties {#getProperties}

```js
getProperties()
```

<div class="api-text" v-pre><p>Gets the current values of the button's properties. Only properties that have been set during button creation or subsequently edited are returned.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#ButtonProperties">TabletButtonProxy.ButtonProperties</a> <p>The button properties.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report a test button's properties.</p></div>

```js
var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
var button = tablet.addButton({ text: "TEST" });

var properties = button.getProperties();
print("TEST button properties: " + JSON.stringify(properties));

Script.scriptEnding.connect(function () {
    tablet.removeButton(button);
});
```

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### clicked {#clicked}

```js
TabletButtonProxy.clicked.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the button is clicked.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report a menu button click.</p></div>

```js
var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
var button = tablet.addButton({ text: "TEST" });

button.clicked.connect(function () {
    print("TEST button clicked");
});

Script.scriptEnding.connect(function () {
    tablet.removeButton(button);
});
```

</div>

<div class="api-entry">

### propertiesChanged {#propertiesChanged}

```js
TabletButtonProxy.propertiesChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a button's properties are changed.</p></div>

</div>

## Types {#types}

<div class="api-entry">

### ButtonProperties {#ButtonProperties}

<div class="api-text" v-pre><p>Properties of a tablet button.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>uuid</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The button ID. <em>Read-only.</em></p></td></tr>
<tr><td><code>objectName</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>Synonym for <code>uuid</code>.</p></td></tr>
<tr><td><code>stableOrder</code></td><td>number</td><td></td><td><p>The order in which the button was created: each button created gets a value incremented by one.</p></td></tr>
<tr><td><code>icon</code></td><td>string</td><td></td><td><p>The url of the default button icon displayed. (50 x 50 pixels. SVG, PNG, or other image format.)</p></td></tr>
<tr><td><code>hoverIcon</code></td><td>string</td><td></td><td><p>The url of the button icon displayed when the button is hovered and not active.</p></td></tr>
<tr><td><code>activeIcon</code></td><td>string</td><td></td><td><p>The url of the button icon displayed when the button is active.</p></td></tr>
<tr><td><code>activeHoverIcon</code></td><td>string</td><td></td><td><p>The url of the button icon displayed when the button is hovered and active.</p></td></tr>
<tr><td><code>iconPadding</code></td><td>number</td><td><code>8</code></td><td><p>The padding of the icon inside the button.</p></td></tr>
<tr><td><code>text</code></td><td>string</td><td></td><td><p>The button caption.</p></td></tr>
<tr><td><code>hoverText</code></td><td>string</td><td></td><td><p>The button caption when the button is hovered and not active.</p></td></tr>
<tr><td><code>activeText</code></td><td>string</td><td></td><td><p>The button caption when the button is active.</p></td></tr>
<tr><td><code>activeHoverText</code></td><td>string</td><td></td><td><p>The button caption when the button is hovered and active.</p></td></tr>
<tr><td><code>captionColor</code></td><td>string</td><td><code>&quot;#ffffff&quot;</code></td><td><p>The color of the button caption.</p></td></tr>
<tr><td><code>backgroundColor</code></td><td>string</td><td><code>&quot;#1d1f21&quot;</code></td><td><p>The background color of the button.</p></td></tr>
<tr><td><code>isActive</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the button is active, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>isEntered</code></td><td>boolean</td><td></td><td><p><code>true</code> if the button is being hovered, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>buttonEnabled</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the button is enabled, <code>false</code> if it is disabled.</p></td></tr>
<tr><td><code>sortOrder</code></td><td>number</td><td><code>100</code></td><td><p>Determines the order of the buttons: buttons with lower numbers appear before buttons with larger numbers.</p></td></tr>
<tr><td><code>badge</code></td><td>number</td><td><code>0</code></td><td><p>A count shown in a red badge at the icon's top right, such as unread messages; none at <code>0</code>.</p></td></tr>
<tr><td><code>muted</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> for a microphone that is muted: the bar draws its icon red.</p></td></tr>
<tr><td><code>inDebugMode</code></td><td>boolean</td><td></td><td><p>If <code>true</code> and the tablet is being used, the button's <code>isActive</code> state toggles each time the button is clicked. <em>Tablet only.</em></p></td></tr>
<tr><td><code>flickable</code></td><td>object</td><td></td><td><p>Internal tablet-only property.</p></td></tr>
<tr><td><code>gridView</code></td><td>object</td><td></td><td><p>Internal tablet-only property.</p></td></tr>
<tr><td><code>buttonIndex</code></td><td>number</td><td></td><td><p>Internal tablet-only property.</p></td></tr>
</tbody></table></div>

</div>
