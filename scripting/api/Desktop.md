---
title: "Desktop"
description: "The Desktop API provides the dimensions of the computer screen, sets the opacity of the HUD surface, and enables QML and HTML windows to be shown inside or outside of Darkride."
---

# Desktop

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Desktop</code> API provides the dimensions of the computer screen, sets the opacity of the HUD surface, and enables QML and HTML windows to be shown inside or outside of Darkride.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>width</code></td><td>number</td><td><p>The width of the computer screen including task bar and system menu, in pixels. <em>Read-only.</em></p></td></tr>
<tr><td><code>height</code></td><td>number</td><td><p>The height of the computer screen including task bar and system menu, in pixels. <em>Read-only.</em></p></td></tr>
<tr><td><code>ALWAYS_ON_TOP</code></td><td><a href="InteractiveWindow#Flags">InteractiveWindow.Flags</a></td><td><p>A flag value that makes an <a href="InteractiveWindow"><code>InteractiveWindow</code></a> always display on top. <em>Read-only.</em></p></td></tr>
<tr><td><code>CLOSE_BUTTON_HIDES</code></td><td><a href="InteractiveWindow#Flags">InteractiveWindow.Flags</a></td><td><p>A flag value that makes an <a href="InteractiveWindow"><code>InteractiveWindow</code></a> hide instead of closing when the user clicks the "close" button.<em> Read-only.</em></p></td></tr>
<tr><td><code>PresentationMode</code></td><td><a href="InteractiveWindow#PresentationModes">InteractiveWindow.PresentationModes</a></td><td><p>The possible display options for an <a href="InteractiveWindow"><code>InteractiveWindow</code></a>: display inside Darkride or in a separate desktop window. <em>Read-only.</em></p></td></tr>
<tr><td><code>DockArea</code></td><td><a href="InteractiveWindow#DockAreas">InteractiveWindow.DockAreas</a></td><td><p>The possible docking locations of an <a href="InteractiveWindow"><code>InteractiveWindow</code></a>: top, bottom, left, or right of the Darkride window. <em>Read-only.</em></p></td></tr>
<tr><td><code>RelativePositionAnchor</code></td><td><a href="InteractiveWindow#RelativePositionAnchors">InteractiveWindow.RelativePositionAnchors</a></td><td><p>The possible relative position anchors for an <a href="InteractiveWindow"><code>InteractiveWindow</code></a>: none, top left, top right, bottom right, or bottom left of the Darkride window. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### createWindow {#createWindow}

```js
Desktop.createWindow(url, properties?)
```

<div class="api-text" v-pre><p>Creates a new window that can be displayed either within Darkride or as a separate desktop window.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The QML file that specifies the window content. The QML file can use a <code>WebView</code> control (defined by "WebView.qml" included in the Darkride install) to embed an HTML web page (complete with <code>EventBridge</code> object).</p></td></tr>
<tr><td><code>properties</code> <em>optional</em></td><td><a href="InteractiveWindow#WindowProperties">InteractiveWindow.WindowProperties</a></td><td><p>Initial window properties.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="InteractiveWindow">InteractiveWindow</a> <p>A new window object.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Open a dialog in its own window separate from Darkride.</p></div>

```js
var nativeWindow = Desktop.createWindow(Script.resourcesPath() + 'qml/OverlayWindowTest.qml', {
    title: "Native Window",
    presentationMode: Desktop.PresentationMode.NATIVE,
    size: { x: 500, y: 400 }
});

Script.scriptEnding.connect(function () {
    nativeWindow.close();
});
```

</div>

<div class="api-entry">

### setHUDAlpha {#setHUDAlpha}

```js
Desktop.setHUDAlpha(alpha)
```

<div class="api-text" v-pre><p>Sets the opacity of the HUD surface.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>alpha</code></td><td>number</td><td><p>The opacity, <code>0.0 – 1.0</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### show {#show}

```js
Desktop.show(url, name)
```

<div class="api-text" v-pre><p>Opens a QML window within Darkride: in the Darkride window in desktop mode or on the HUD surface in HMD mode. If a window of the specified name already exists, it is shown, otherwise a new window is created from the QML.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The QML file that specifies the window content.</p></td></tr>
<tr><td><code>name</code></td><td>string</td><td><p>A unique name for the window.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Open the general settings dialog.</p></div>

```js
Desktop.show("hifi/dialogs/GeneralPreferencesDialog.qml", "GeneralPreferencesDialog");
```

</div>

::: tip Names from the engine's history
Names and addresses with `hifi` or `tivoli` in them, such as `hifi_pbr`, a `hifi://` address or an example file's address, come from the engine's history and still work. Type them as they are.
:::
