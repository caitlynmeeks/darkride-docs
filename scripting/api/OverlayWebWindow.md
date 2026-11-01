---
title: "OverlayWebWindow"
description: "A OverlayWebWindow displays an HTML window inside Interface."
draft: true
---

# OverlayWebWindow

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>A <code>OverlayWebWindow</code> displays an HTML window inside Interface.</p>
 <p>Create using <code>new OverlayWebWindow(...)</code>.</p></div>

```js
new OverlayWebWindow(titleOrProperties?, source?, width?, height?)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>titleOrProperties</code> <em>optional</em></td><td>string | <a href="OverlayWindow#Properties">OverlayWindow.Properties</a></td><td><code>&quot;WebWindow&quot;</code></td><td><p>The window's title or initial property values.</p></td></tr>
<tr><td><code>source</code> <em>optional</em></td><td>string</td><td><code>&quot;about:blank&quot;</code></td><td><p>The URL of the HTML to display. Not used unless the first parameter is the window title.</p></td></tr>
<tr><td><code>width</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The width of the window interior, in pixels. Not used unless the first parameter is the window title.</p></td></tr>
<tr><td><code>height</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The height of the window interior, in pixels. Not used unless the first parameter is the window title.</p></td></tr>
</tbody></table></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL of the HTML displayed in the window. <em>Read-only.</em></p></td></tr>
<tr><td><code>position</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The position of the window, in pixels.</p></td></tr>
<tr><td><code>size</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The size of the window interior, in pixels.</p></td></tr>
<tr><td><code>visible</code></td><td>boolean</td><td><p><code>true</code> if the window is visible, <code>false</code> if it isn't.</p></td></tr>
</tbody></table></div>

## Methods {#functions}

<div class="api-entry">

### close {#close}

```js
OverlayWebWindow.close()
```

<div class="api-text" v-pre><p>Closes the window. </p>
<p>Note: The window also closes when the script ends.</p>
<p></p></div>

</div>

<div class="api-entry">

### emitScriptEvent {#emitScriptEvent}

```js
OverlayWebWindow.emitScriptEvent(message)
```

<div class="api-text" v-pre><p>Sends a message to the HTML page. To receive the message, the HTML page's script must connect to the <code>EventBridge</code> that is automatically provided for the script: </p>
<pre class="prettyprint"><code>EventBridge.scriptEventReceived.connect(function(message) {&#10;    ...&#10;});</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message to send to the embedded HTML page.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Send and receive messages with an HTML window.</p></div>

```js
// JavaScript file.

var overlayWebWindow = new OverlayWebWindow({
    title: "Overlay Web Window",
    source: Script.resolvePath("OverlayWebWindow.html"),
    width: 400,
    height: 300
});

overlayWebWindow.webEventReceived.connect(function (message) {
    print("Message received: " + message);
});

Script.setTimeout(function () {
    overlayWebWindow.emitScriptEvent("Hello world!");
}, 2000);
```

<div class="api-example" v-pre><strong>Example</strong> </div>

```js
// HTML file, "OverlayWebWindow.html".

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
</head>
<body>
    <p id="hello">...</p>
</body>
<script>
    EventBridge.scriptEventReceived.connect(function (message) {
        document.getElementById("hello").innerHTML = message;
        EventBridge.emitWebEvent("Hello back!");
    });
</script>
</html>
```

</div>

<div class="api-entry">

### getPosition {#getPosition}

```js
OverlayWebWindow.getPosition()
```

<div class="api-text" v-pre><p>Gets the position of the window.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The position of the window, in pixels.</p></div>

</div>

<div class="api-entry">

### getSize {#getSize}

```js
OverlayWebWindow.getSize()
```

<div class="api-text" v-pre><p>Gets the size of the window interior.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The size of the window interior, in pixels.</p></div>

</div>

<div class="api-entry">

### getURL {#getURL}

```js
OverlayWebWindow.getURL()
```

<div class="api-text" v-pre><p>Gets the URL of the HTML displayed.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>- The URL of the HTML page displayed.</p></div>

</div>

<div class="api-entry">

### isEnabled {#isEnabled}

```js
OverlayWebWindow.isEnabled()
```

<div class="api-text" v-pre><p>Gets whether the window is enabled or not</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true if the window allows all input, <code>false</code> if not.</code></p></div>

</div>

<div class="api-entry">

### isFrameless {#isFrameless}

```js
OverlayWebWindow.isFrameless()
```

<div class="api-text" v-pre><p>Gets whether the window is frameless or not.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the window has no frame, <code>false</code> if it does.</p></div>

</div>

<div class="api-entry">

### isVisible {#isVisible}

```js
OverlayWebWindow.isVisible()
```

<div class="api-text" v-pre><p>Gets whether the window is shown or hidden.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the window is shown, <code>false</code> if it is hidden.</p></div>

</div>

<div class="api-entry">

### raise {#raise}

```js
OverlayWebWindow.raise()
```

<div class="api-text" v-pre><p>Raises the window to the top.</p></div>

</div>

<div class="api-entry">

### setEnabled {#setEnabled}

```js
OverlayWebWindow.setEnabled(enabled)
```

<div class="api-text" v-pre><p>Enables or disables the window</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> to allow all input, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setFocus {#setFocus}

```js
OverlayWebWindow.setFocus(focus)
```

<div class="api-text" v-pre><p>Sets the window focus.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>focus</code></td><td>boolean</td><td><p>The window focus.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setFrameless {#setFrameless}

```js
OverlayWebWindow.setFrameless(frameless)
```

<div class="api-text" v-pre><p>Shows or hides the frame of the window.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>frameless</code></td><td>boolean</td><td><p><code>true</code> to remove the frame, <code>false</code> to show it.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setPosition {#setPosition}

```js
OverlayWebWindow.setPosition(position)
```

<div class="api-text" v-pre><p>Sets the position of the window, from a <a href="globals#Vec2"><code>Vec2</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The position of the window, in pixels.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setPosition {#setPosition-2}

```js
OverlayWebWindow.setPosition(x, y)
```

<div class="api-text" v-pre><p>Sets the position of the window, from a pair of numbers.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>The x position of the window, in pixels.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>The y position of the window, in pixels.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setScriptURL {#setScriptURL}

```js
OverlayWebWindow.setScriptURL(url)
```

<div class="api-text" v-pre><p>Injects a script into the HTML page, replacing any currently injected script.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL of the script to inject.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setSize {#setSize}

```js
OverlayWebWindow.setSize(size)
```

<div class="api-text" v-pre><p>Sets the size of the window interior, from a <a href="globals#Vec2"><code>Vec2</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>size</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The size of the window interior, in pixels.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setSize {#setSize-2}

```js
OverlayWebWindow.setSize(width, height)
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
OverlayWebWindow.setTitle(title)
```

<div class="api-text" v-pre><p>Sets the window title.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>title</code></td><td>string</td><td><p>The window title.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setURL {#setURL}

```js
OverlayWebWindow.setURL(url)
```

<div class="api-text" v-pre><p>Loads HTML into the window, replacing current window content.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL of the HTML to display.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setVisible {#setVisible}

```js
OverlayWebWindow.setVisible(visible)
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
OverlayWebWindow.closed.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window is closed.</p></div>

</div>

<div class="api-entry">

### moved {#moved}

```js
OverlayWebWindow.moved.connect(function (position) {
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
OverlayWebWindow.positionChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window changes position.</p></div>

</div>

<div class="api-entry">

### resized {#resized}

```js
OverlayWebWindow.resized.connect(function (size) {
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
OverlayWebWindow.sizeChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window changes size.</p></div>

</div>

<div class="api-entry">

### urlChanged {#urlChanged}

```js
OverlayWebWindow.urlChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window's URL changes.</p></div>

</div>

<div class="api-entry">

### visibleChanged {#visibleChanged}

```js
OverlayWebWindow.visibleChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the window is hidden or shown.</p></div>

</div>

<div class="api-entry">

### webEventReceived {#webEventReceived}

```js
OverlayWebWindow.webEventReceived.connect(function (message) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a message from the HTML page is received. The HTML page can send a message by calling: </p>
<pre class="prettyprint"><code>EventBridge.emitWebEvent(message);</code></pre>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>The message received.</p></td></tr>
</tbody></table></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### clearDebugWindow {#clearDebugWindow}

```js
OverlayWebWindow.clearDebugWindow()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### emitWebEvent {#emitWebEvent}

```js
OverlayWebWindow.emitWebEvent(message)
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
OverlayWebWindow.getEventBridge()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> object <p>Object.</p></div>

</div>

<div class="api-entry">

### hasClosed {#hasClosed}

```js
OverlayWebWindow.hasClosed()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### hasMoved {#hasMoved}

```js
OverlayWebWindow.hasMoved(position)
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
OverlayWebWindow.initQml(properties)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td><a href="OverlayWindow#Properties">OverlayWindow.Properties</a></td><td><p>Properties.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### qmlToScript {#qmlToScript}

```js
OverlayWebWindow.qmlToScript(message)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>object</td><td><p>Message.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sendToQML {#sendToQML}

```js
OverlayWebWindow.sendToQML(message)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string | object</td><td><p>Message.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### fromQML {#fromQML}

```js
OverlayWebWindow.fromQML.connect(function (message) {
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

<div class="api-entry">

### scriptEventReceived {#scriptEventReceived}

```js
OverlayWebWindow.scriptEventReceived.connect(function (message) {
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
