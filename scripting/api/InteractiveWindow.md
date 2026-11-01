---
title: "InteractiveWindow"
description: "An InteractiveWindow can display either inside Darkride or in its own window separate from the Darkride window."
---

# InteractiveWindow

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>An <code>InteractiveWindow</code> can display either inside Darkride or in its own window separate from the Darkride window. The window content is defined by a QML file, which can optionally include a <code>WebView</code> control that embeds an HTML web page. (The <code>WebView</code> control is defined by a "WebView.qml" file included in the Darkride install.)</p>
 <p>Create using <a href="Desktop#createWindow"><code>Desktop.createWindow</code></a>.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code></td><td>string</td><td><p>The title of the window.</p></td></tr>
<tr><td><code>position</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The absolute position of the window, in pixels.</p></td></tr>
<tr><td><code>relativePositionAnchor</code></td><td><a href="#RelativePositionAnchor">InteractiveWindow.RelativePositionAnchor</a></td><td><p>The anchor for the <code>relativePosition</code>, if used.</p></td></tr>
<tr><td><code>relativePosition</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The position of the window, relative to the <code>relativePositionAnchor</code>, in pixels. Excludes the window frame.</p></td></tr>
<tr><td><code>size</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The size of the window, in pixels.</p></td></tr>
<tr><td><code>visible</code></td><td>boolean</td><td><p><code>true</code> if the window is visible, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>presentationMode</code></td><td><a href="#PresentationMode">InteractiveWindow.PresentationMode</a></td><td><p>The presentation mode of the window: <code>Desktop.PresentationMode.VIRTUAL</code> to display the window inside Darkride, <code>.NATIVE</code> to display it as its own separate window.</p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### close {#close}

```js
InteractiveWindow.close()
```

<div class="api-text" v-pre><p>Closes the window. It can then no longer be used.</p></div>

</div>

<div class="api-entry">

### emitScriptEvent {#emitScriptEvent}

```js
InteractiveWindow.emitScriptEvent(message)
```

<div class="api-text" v-pre><p>Sends a message to an embedded HTML web page. To receive the message, the HTML page's script must connect to the <code>EventBridge</code> that is automatically provided for the script: </p>
<pre class="prettyprint"><code>EventBridge.scriptEventReceived.connect(function(message) {&#10;    ...&#10;});</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message to send to the embedded HTML web page.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### raise {#raise}

```js
InteractiveWindow.raise()
```

<div class="api-text" v-pre><p>Raises the window to the top.</p></div>

</div>

<div class="api-entry">

### sendToQml {#sendToQml}

```js
InteractiveWindow.sendToQml(message)
```

<div class="api-text" v-pre><p>Sends a message to the QML page. To receive the message, the QML page must implement a function: </p>
<pre class="prettyprint"><code>function fromScript(message) {&#10;  ...&#10;}</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message to send to the QML page.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Send and receive messages with a QML window.</p></div>

```js
// JavaScript file.

var interactiveWindow = Desktop.createWindow(Script.resolvePath("InteractiveWindow.qml"), {
    title: "Interactive Window",
    size: { x: 400, y: 300 }
});

interactiveWindow.fromQml.connect(function (message) {
    print("Message received: " + message);
});

Script.setTimeout(function () {
    interactiveWindow.sendToQml("Hello world!");
}, 2000);

Script.scriptEnding.connect(function () {
    interactiveWindow.close();
});
```

<div class="api-example" v-pre><strong>Example</strong> </div>

```js
// QML file, "InteractiveWindow.qml".

import QtQuick 2.5
import QtQuick.Controls 1.4

Rectangle {

    function fromScript(message) {
        text.text = message;
        sendToScript("Hello back!");
    }

    Label {
        id: text
        anchors.centerIn: parent
        text: "..."
    }
}
```

</div>

<div class="api-entry">

### show {#show}

```js
InteractiveWindow.show()
```

<div class="api-text" v-pre><p>Makes the window visible and raises it to the top.</p></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### closed {#closed}

```js
InteractiveWindow.closed.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window is closed.</p></div>

</div>

<div class="api-entry">

### fromQml {#fromQml}

```js
InteractiveWindow.fromQml.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a message from the QML page is received. The QML page can send a message (string or object) by calling: </p>
<pre class="prettyprint"><code>sendToScript(message);</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message received.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### positionChanged {#positionChanged}

```js
InteractiveWindow.positionChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window's position changes.</p></div>

</div>

<div class="api-entry">

### presentationModeChanged {#presentationModeChanged}

```js
InteractiveWindow.presentationModeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window's presentation mode changes.</p></div>

</div>

<div class="api-entry">

### sizeChanged {#sizeChanged}

```js
InteractiveWindow.sizeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window's size changes.</p></div>

</div>

<div class="api-entry">

### titleChanged {#titleChanged}

```js
InteractiveWindow.titleChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when window's title changes.</p></div>

</div>

<div class="api-entry">

### visibleChanged {#visibleChanged}

```js
InteractiveWindow.visibleChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window is made visible or invisible, or is closed.</p></div>

</div>

<div class="api-entry">

### webEventReceived {#webEventReceived}

```js
InteractiveWindow.webEventReceived.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a message from an embedded HTML web page is received. The HTML web page can send a message by calling: </p>
<pre class="prettyprint"><code>EventBridge.emitWebEvent(message);</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message received.</p></td></tr>
</tbody></table></div>

</div>

## Types {#types}

<div class="api-entry">

### DockArea {#DockArea}

<div class="api-text" v-pre><p>A docking location of an <code>InteractiveWindow</code>.</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>TOP</td><td>Dock to the top edge of the Darkride window.</td></tr>
 <tr><td><code>1</code></td><td>BOTTOM</td><td>Dock to the bottom edge of the Darkride window.</td></tr>
 <tr><td><code>2</code></td><td>LEFT</td><td>Dock to the left edge of the Darkride window.</td></tr>
 <tr><td><code>3</code></td><td>RIGHT</td><td>Dock to the right edge of the Darkride window.</td></tr>
 </tbody>
<tbody> </tbody>
</table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### DockAreas {#DockAreas}

<div class="api-text" v-pre><p>The possible docking locations of an <code>InteractiveWindow</code>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>TOP</code></td><td><a href="#DockArea">InteractiveWindow.DockArea</a></td><td><p>Dock to the top edge of the Darkride window.</p></td></tr>
<tr><td><code>BOTTOM</code></td><td><a href="#DockArea">InteractiveWindow.DockArea</a></td><td><p>Dock to the bottom edge of the Darkride window.</p></td></tr>
<tr><td><code>LEFT</code></td><td><a href="#DockArea">InteractiveWindow.DockArea</a></td><td><p>Dock to the left edge of the Darkride window.</p></td></tr>
<tr><td><code>RIGHT</code></td><td><a href="#DockArea">InteractiveWindow.DockArea</a></td><td><p>Dock to the right edge of the Darkride window.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### Flags {#Flags}

<div class="api-text" v-pre><p>A set of flags controlling <code>InteractiveWindow</code> behavior. The value is constructed by using the <code>|</code> (bitwise OR) operator on the individual flag values.</p>
 <table> <thead> <tr><th>Flag Name</th><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td>ALWAYS_ON_TOP</td><td><code>1</code></td><td>The window always displays on top.</td></tr>
 <tr><td>CLOSE_BUTTON_HIDES</td><td><code>2</code></td><td>The window hides instead of closing when the user clicks the "close" button.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### OverrideFlags {#OverrideFlags}

<div class="api-text" v-pre><p>A set of flags customizing <code>InteractiveWindow</code> controls. The value is constructed by using the <code>|</code> (bitwise OR) operator on the individual flag values..</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0x00000001</code></td><td>Window</td><td>Displays the window as a window rather than a dialog.</td></tr>
 <tr><td><code>0x00001000</code></td><td>WindowTitleHint</td><td>Adds a title bar.</td><td> </td></tr>
<tr><td><code>0x00002000</code></td><td>WindowSystemMenuHint</td><td>Adds a window system menu.</td><td> </td></tr>
<tr><td><code>0x00004000</code></td><td>WindowMinimizeButtonHint</td><td>Adds a minimize button.</td><td> </td></tr>
<tr><td><code>0x00008000</code></td><td>WindowMaximizeButtonHint</td><td>Adds a maximize button.</td><td> </td></tr>
<tr><td><code>0x00040000</code></td><td>WindowStaysOnTopHint</td><td>The window stays on top of other windows. <em>Not used on Windows.</em> </td></tr>
<tr><td><code>0x08000000</code></td><td>WindowCloseButtonHint</td><td>Adds a close button.</td><td> </td></tr>
</tbody>
<tbody> </tbody>
</table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### PresentationMode {#PresentationMode}

<div class="api-text" v-pre><p>A display mode for an <code>InteractiveWindow</code>.</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>VIRTUAL</td><td>The window is displayed inside Darkride: in the desktop window in desktop mode or on the HUD surface in HMD mode.</td></tr>
 <tr><td><code>1</code></td><td>NATIVE</td><td>The window is displayed separately from the Darkride window, as its own separate window.</td></tr>
 </tbody>
<tbody> </tbody>
</table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### PresentationModes {#PresentationModes}

<div class="api-text" v-pre><p>The possible display modes for an <code>InteractiveWindow</code>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>VIRTUAL</code></td><td><a href="#PresentationMode">InteractiveWindow.PresentationMode</a></td><td><p>The window is displayed inside Darkride: in the desktop window in desktop mode or on the HUD surface in HMD mode.</p></td></tr>
<tr><td><code>NATIVE</code></td><td><a href="#PresentationMode">InteractiveWindow.PresentationMode</a></td><td><p>The window is displayed separately from the Darkride window, as its own separate window.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### PresentationWindowInfo {#PresentationWindowInfo}

<div class="api-text" v-pre><p>Configures how a <code>NATIVE</code> window is displayed.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dockArea</code></td><td><a href="#DockArea">InteractiveWindow.DockArea</a></td><td><p>The edge of the Darkride window to dock to.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### RelativePositionAnchor {#RelativePositionAnchor}

<div class="api-text" v-pre><p>The anchor for a relative position of an <code>InteractiveWindow</code>.</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>NO_ANCHOR</td><td>Position is not relative to any part of the Darkride window.</td></tr>
 <tr><td><code>1</code></td><td>TOP_LEFT</td><td>Position is offset from the top left of the Darkride window.</td></tr>
 <tr><td><code>2</code></td><td>TOP_RIGHT</td><td>Position is offset from the top right of the Darkride window.</td></tr>
 <tr><td><code>3</code></td><td>BOTTOM_RIGHT</td><td>Position offset from the bottom right of the Darkride window.</td></tr>
 <tr><td><code>4</code></td><td>BOTTOM_LEFT</td><td>Position is offset from the bottom left of the Darkride window.</td></tr>
 </tbody>
<tbody> </tbody>
</table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### RelativePositionAnchors {#RelativePositionAnchors}

<div class="api-text" v-pre><p>The possible relative position anchors of an <code>InteractiveWindow</code> relative to the Darkride window.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>NO_ANCHOR</code></td><td><a href="#RelativePositionAnchor">InteractiveWindow.RelativePositionAnchor</a></td><td><p>Position is not relative to any part of the Darkride window.</p></td></tr>
<tr><td><code>TOP_LEFT</code></td><td><a href="#RelativePositionAnchor">InteractiveWindow.RelativePositionAnchor</a></td><td><p>Position is offset from the top left of the Darkride window.</p></td></tr>
<tr><td><code>TOP_RIGHT</code></td><td><a href="#RelativePositionAnchor">InteractiveWindow.RelativePositionAnchor</a></td><td><p>Position is offset from the top right of the Darkride window.</p></td></tr>
<tr><td><code>BOTTOM_RIGHT</code></td><td><a href="#RelativePositionAnchor">InteractiveWindow.RelativePositionAnchor</a></td><td><p>Position offset from the bottom right of the Darkride window.</p></td></tr>
<tr><td><code>BOTTOM_LEFT</code></td><td><a href="#RelativePositionAnchor">InteractiveWindow.RelativePositionAnchor</a></td><td><p>Position is offset from the bottom left of the Darkride window.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### WindowProperties {#WindowProperties}

<div class="api-text" v-pre><p>Property values used when creating an <code>InteractiveWindow</code>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code> <em>optional</em></td><td>string</td><td><code>&quot;InteractiveWindow</code></td><td><p>The title of the window.</p></td></tr>
<tr><td><code>position</code> <em>optional</em></td><td><a href="globals#Vec2">Vec2</a></td><td></td><td><p>The initial position of the window, in pixels.</p></td></tr>
<tr><td><code>size</code> <em>optional</em></td><td><a href="globals#Vec2">Vec2</a></td><td></td><td><p>The initial size of the window, in pixels</p></td></tr>
<tr><td><code>visible</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> to make the window visible when created, <code>false</code> to make it invisible.</p></td></tr>
<tr><td><code>presentationMode</code> <em>optional</em></td><td><a href="#PresentationMode">InteractiveWindow.PresentationMode</a></td><td><code>Desktop.PresentationMode.VIRTUAL</code></td><td><p><code>Desktop.PresentationMode.VIRTUAL</code> to display the window inside Darkride, <code>.NATIVE</code> to display it as its own separate window.</p></td></tr>
<tr><td><code>presentationWindowInfo</code> <em>optional</em></td><td><a href="#PresentationWindowInfo">InteractiveWindow.PresentationWindowInfo</a></td><td></td><td><p>Controls how a <code>NATIVE</code> window is displayed. If used, the window is docked to the specified edge of the Darkride window, otherwise the window is displayed as its own separate window.</p></td></tr>
<tr><td><code>additionalFlags</code> <em>optional</em></td><td><a href="#Flags">InteractiveWindow.Flags</a></td><td><code>0</code></td><td><p>Customizes window behavior.</p></td></tr>
<tr><td><code>overrideFlags</code> <em>optional</em></td><td><a href="#OverrideFlags">InteractiveWindow.OverrideFlags</a></td><td><code>0</code></td><td><p>Customizes window controls.</p></td></tr>
<tr><td><code>relativePositionAnchor</code> <em>optional</em></td><td><a href="#RelativePositionAnchor">InteractiveWindow.RelativePositionAnchor</a></td><td></td><td><p>he anchor for the <code>relativePosition</code>, if used.</p></td></tr>
<tr><td><code>relativePosition</code> <em>optional</em></td><td><a href="globals#Vec2">Vec2</a></td><td></td><td><p>The position of the window, relative to the <code>relativePositionAnchor</code>, in pixels. Excludes the window frame.</p></td></tr>
<tr><td><code>isFullScreenWindow</code> <em>optional</em></td><td>boolean</td><td></td><td><p><code>true</code> to make the window full screen.</p></td></tr>
</tbody></table></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### emitWebEvent {#emitWebEvent}

```js
InteractiveWindow.emitWebEvent(message)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object | string</td><td><p>Message.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### qmlToScript {#qmlToScript}

```js
InteractiveWindow.qmlToScript(message)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object</td><td><p>Message.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### scriptEventReceived {#scriptEventReceived}

```js
InteractiveWindow.scriptEventReceived.connect(function (message) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object</td><td><p>Message.</p></td></tr>
</tbody></table></div>

</div>
