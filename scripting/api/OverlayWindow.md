---
title: "OverlayWindow"
description: "A OverlayWindow displays a QML window inside Interface."
---

# OverlayWindow

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>A <code>OverlayWindow</code> displays a QML window inside Interface.</p>
 <p>The QML can optionally include a <code>WebView</code> control that embeds an HTML-based windows. (The <code>WebView</code> control is defined by a "WebView.qml" file included in the Interface install.) Alternatively, an <a href="OverlayWebWindow"><code>OverlayWebWindow</code></a> can be used for HTML-based windows.</p>
 <p>Create using <code>new OverlayWindow(...)</code>.</p></div>

```js
new OverlayWindow(titleOrProperties?, source?, width?, height?)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>titleOrProperties</code> <em>optional</em></td><td>string | <a href="#Properties">OverlayWindow.Properties</a></td><td><code>&quot;WebWindow&quot;</code></td><td><p>The window's title or initial property values.</p></td></tr>
<tr><td><code>source</code> <em>optional</em></td><td>string</td><td></td><td><p>The source of the QML to display. Not used unless the first parameter is the window title.</p></td></tr>
<tr><td><code>width</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The width of the window interior, in pixels. Not used unless the first parameter is the window title.</p></td></tr>
<tr><td><code>height</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The height of the window interior, in pixels. Not used unless the first parameter is the window title.</p></td></tr>
</tbody></table></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The position of the window, in pixels.</p></td></tr>
<tr><td><code>size</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The size of the window interior, in pixels.</p></td></tr>
<tr><td><code>visible</code></td><td>boolean</td><td><p><code>true</code> if the window is visible, <code>false</code> if it isn't.</p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### clearDebugWindow {#clearDebugWindow}

```js
OverlayWindow.clearDebugWindow()
```

<div class="api-text" v-pre><p>Calls a <code>clearWindow()</code> function if present in the QML.</p></div>

</div>

<div class="api-entry">

### close {#close}

```js
OverlayWindow.close()
```

<div class="api-text" v-pre><p>Closes the window. </p>
<p>Note: The window also closes when the script ends.</p>
<p></p></div>

</div>

<div class="api-entry">

### emitScriptEvent {#emitScriptEvent}

```js
OverlayWindow.emitScriptEvent(message)
```

<div class="api-text" v-pre><p>Sends a message to an embedded HTML web page. To receive the message, the HTML page's script must connect to the <code>EventBridge</code> that is automatically provided for the script: </p>
<pre class="prettyprint"><code>EventBridge.scriptEventReceived.connect(function(message) {&#10;    ...&#10;});</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message to send to the embedded HTML page.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getPosition {#getPosition}

```js
OverlayWindow.getPosition()
```

<div class="api-text" v-pre><p>Gets the position of the window.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The position of the window, in pixels.</p></div>

</div>

<div class="api-entry">

### getSize {#getSize}

```js
OverlayWindow.getSize()
```

<div class="api-text" v-pre><p>Gets the size of the window interior.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The size of the window interior, in pixels.</p></div>

</div>

<div class="api-entry">

### isEnabled {#isEnabled}

```js
OverlayWindow.isEnabled()
```

<div class="api-text" v-pre><p>Gets whether the window is enabled or not</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true if the window allows all input, <code>false</code> if not.</code></p></div>

</div>

<div class="api-entry">

### isFrameless {#isFrameless}

```js
OverlayWindow.isFrameless()
```

<div class="api-text" v-pre><p>Gets whether the window is frameless or not.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the window has no frame, <code>false</code> if it does.</p></div>

</div>

<div class="api-entry">

### isVisible {#isVisible}

```js
OverlayWindow.isVisible()
```

<div class="api-text" v-pre><p>Gets whether the window is shown or hidden.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the window is shown, <code>false</code> if it is hidden.</p></div>

</div>

<div class="api-entry">

### raise {#raise}

```js
OverlayWindow.raise()
```

<div class="api-text" v-pre><p>Raises the window to the top.</p></div>

</div>

<div class="api-entry">

### sendToQml {#sendToQml}

```js
OverlayWindow.sendToQml(message)
```

<div class="api-text" v-pre><p>Sends a message to the QML. To receive the message, the QML must implement a function: </p>
<pre class="prettyprint"><code>function fromScript(message) {&#10;  ...&#10;}</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message to send to the QML.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Send and receive messages with a QML window.</p></div>

```js
// JavaScript file.

var overlayWindow = new OverlayWindow({
    title: "Overlay Window",
    source: Script.resolvePath("OverlayWindow.qml"),
    width: 400,
    height: 300
});

overlayWindow.fromQml.connect(function (message) {
    print("Message received: " + message);
});

Script.setTimeout(function () {
    overlayWindow.sendToQml("Hello world!");
}, 2000);
```

<div class="api-example" v-pre><strong>Example</strong> </div>

```js
// QML file, "OverlayWindow.qml".

import QtQuick 2.5
import QtQuick.Controls 1.4

Rectangle {
    width: parent.width
    height: parent.height

    function fromScript(message) {
        text.text = message;
        sendToScript("Hello back!");
    }

    Label{
        id: text
        anchors.centerIn : parent
        text : "..."
    }
}
```

</div>

<div class="api-entry">

### setEnabled {#setEnabled}

```js
OverlayWindow.setEnabled(enabled)
```

<div class="api-text" v-pre><p>Enables or disables the window</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> to allow all input, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setFocus {#setFocus}

```js
OverlayWindow.setFocus(focus)
```

<div class="api-text" v-pre><p>Sets the window focus.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>focus</code></td><td>boolean</td><td><p>The window focus.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setFrameless {#setFrameless}

```js
OverlayWindow.setFrameless(frameless)
```

<div class="api-text" v-pre><p>Shows or hides the frame of the window.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>frameless</code></td><td>boolean</td><td><p><code>true</code> to remove the frame, <code>false</code> to show it.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setPosition {#setPosition}

```js
OverlayWindow.setPosition(position)
```

<div class="api-text" v-pre><p>Sets the position of the window, from a <a href="globals#Vec2"><code>Vec2</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The position of the window, in pixels.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setPosition {#setPosition-2}

```js
OverlayWindow.setPosition(x, y)
```

<div class="api-text" v-pre><p>Sets the position of the window, from a pair of numbers.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>The x position of the window, in pixels.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>The y position of the window, in pixels.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setSize {#setSize}

```js
OverlayWindow.setSize(size)
```

<div class="api-text" v-pre><p>Sets the size of the window interior, from a <a href="globals#Vec2"><code>Vec2</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>size</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The size of the window interior, in pixels.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setSize {#setSize-2}

```js
OverlayWindow.setSize(width, height)
```

<div class="api-text" v-pre><p>Sets the size of the window interior, from a pair of numbers.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>width</code></td><td>number</td><td><p>The width of the window interior, in pixels.</p></td></tr>
<tr><td><code>height</code></td><td>number</td><td><p>The height of the window interior, in pixels.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setTitle {#setTitle}

```js
OverlayWindow.setTitle(title)
```

<div class="api-text" v-pre><p>Sets the window title.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code></td><td>string</td><td><p>The window title.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setVisible {#setVisible}

```js
OverlayWindow.setVisible(visible)
```

<div class="api-text" v-pre><p>Shows or hides the window.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>visible</code></td><td>boolean</td><td><p><code>true</code> to show the window, <code>false</code> to hide it.</p></td></tr>
</tbody></table></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### closed {#closed}

```js
OverlayWindow.closed.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window is closed.</p></div>

</div>

<div class="api-entry">

### fromQml {#fromQml}

```js
OverlayWindow.fromQml.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a message from the QML page is received. The QML page can send a message (string or object) by calling: </p>
<pre class="prettyprint"><code>sendToScript(message);</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object</td><td><p>The message received.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### moved {#moved}

```js
OverlayWindow.moved.connect(function (position) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window changes position.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The position of the window, in pixels.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### positionChanged {#positionChanged}

```js
OverlayWindow.positionChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window changes position.</p></div>

</div>

<div class="api-entry">

### resized {#resized}

```js
OverlayWindow.resized.connect(function (size) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window changes size.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>size</code></td><td><a href="globals#Size">Size</a></td><td><p>The size of the window interior, in pixels.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sizeChanged {#sizeChanged}

```js
OverlayWindow.sizeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window changes size.</p></div>

</div>

<div class="api-entry">

### visibleChanged {#visibleChanged}

```js
OverlayWindow.visibleChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window is hidden or shown.</p></div>

</div>

<div class="api-entry">

### webEventReceived {#webEventReceived}

```js
OverlayWindow.webEventReceived.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a message from an embedded HTML page is received. The HTML page can send a message by calling: </p>
<pre class="prettyprint"><code>EventBridge.emitWebEvent(message);</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message received.</p></td></tr>
</tbody></table></div>

</div>

## Types {#types}

<div class="api-entry">

### Properties {#Properties}

<div class="api-text" v-pre><p>Properties used to initialize an <a href=""><code>OverlayWindow</code></a> or <a href="OverlayWebWindow"><code>OverlayWebWindow</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code> <em>optional</em></td><td>string</td><td><code>&quot;WebWindow</code></td><td><p>The window title.</p></td></tr>
<tr><td><code>source</code> <em>optional</em></td><td>string</td><td></td><td><p>The source of the QML or HTML to display.</p></td></tr>
<tr><td><code>width</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The width of the window interior, in pixels.</p></td></tr>
<tr><td><code>height</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The height of the window interior, in pixels.</p></td></tr>
<tr><td><code>visible</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the window should be visible, <code>false</code> if it shouldn't.</p></td></tr>
<tr><td><code>frameless</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the window should be frame, <code>false</code> if it shouldn't.</p></td></tr>
<tr><td><code>enabled</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> to allow all input, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### emitWebEvent {#emitWebEvent}

```js
OverlayWindow.emitWebEvent(message)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object | string</td><td><p>The message.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getEventBridge {#getEventBridge}

```js
OverlayWindow.getEventBridge()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> object <p>Object.</p></div>

</div>

<div class="api-entry">

### hasClosed {#hasClosed}

```js
OverlayWindow.hasClosed()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### hasMoved {#hasMoved}

```js
OverlayWindow.hasMoved(position)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>Position.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### initQml {#initQml}

```js
OverlayWindow.initQml(properties)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td><a href="#Properties">OverlayWindow.Properties</a></td><td><p>Properties.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### qmlToScript {#qmlToScript}

```js
OverlayWindow.qmlToScript(message)
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
OverlayWindow.scriptEventReceived.connect(function (message) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object</td><td><p>The message.</p></td></tr>
</tbody></table></div>

</div>
