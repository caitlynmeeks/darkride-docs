---
title: "Reticle"
description: "The Reticle API provides access to the mouse cursor."
---

# Reticle

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Reticle</code> API provides access to the mouse cursor. The cursor may be an arrow or a reticle circle, depending on Darkride settings. The mouse cursor is visible in HMD mode if controllers aren't being used.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the reticle circle is enabled, <code>false</code> if it's disabled.</p></td></tr>
<tr><td><code>allowMouseCapture</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the mouse cursor will be captured when in HMD mode and the Darkride window content (excluding menus) has focus, <code>false</code> if the mouse cursor will not be captured.</p></td></tr>
<tr><td><code>depth</code></td><td>number</td><td></td><td><p>The depth (distance) that the reticle is displayed at relative to the HMD view, in HMD mode.</p></td></tr>
<tr><td><code>maximumPosition</code></td><td><a href="globals#Vec2">Vec2</a></td><td></td><td><p>The maximum reticle coordinates on the display device in desktop mode or the HUD surface in HMD mode. (The minimum reticle coordinates on the desktop display device or HUD surface are <code>0</code>, <code>0</code>.) <em>Read-only.</em></p></td></tr>
<tr><td><code>mouseCaptured</code></td><td>boolean</td><td></td><td><p><code>true</code> if the mouse cursor is captured, displaying only in Darkride and not on the rest of the desktop. The mouse cursor may be captured when in HMD mode and the Darkride window content (excluding menu items) has focus, if capturing is enabled (<code>allowMouseCapture</code> is <code>true</code>). <em>Read-only.</em></p></td></tr>
<tr><td><code>pointingAtSystemOverlay</code></td><td>boolean</td><td></td><td><p><code>true</code> if the mouse cursor is pointing at UI in the Darkride window in desktop mode or on the HUD surface in HMD mode, <code>false</code> if it isn't. <em>Read-only.</em></p></td></tr>
<tr><td><code>position</code></td><td><a href="globals#Vec2">Vec2</a></td><td></td><td><p>The position of the cursor. This is the position relative to the Darkride window in desktop mode, and the HUD surface in HMD mode. </p>
<p><strong>Note:</strong> The position values may be negative.</p>
<p></p></td></tr>
<tr><td><code>scale</code></td><td>number</td><td><code>1</code></td><td><p>The scale of the reticle circle in desktop mode, and the arrow and reticle circle in HMD mode. (Does not affect the size of the arrow in desktop mode.)</p></td></tr>
<tr><td><code>visible</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the reticle circle is visible in desktop mode, and the arrow or reticle circle are visible in HMD mode; <code>false</code> otherwise. (Does not affect the visibility of the mouse pointer in desktop mode.)</p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### getAllowMouseCapture {#getAllowMouseCapture}

```js
Reticle.getAllowMouseCapture()
```

<div class="api-text" v-pre><p>Gets whether the mouse cursor will be captured when in HMD mode and the Darkride window content (excluding menu items) has focus. When captured, the mouse cursor displays only in Darkride, not on the rest of the desktop.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the mouse cursor will be captured when in HMD mode and the Darkride window content has focus, <code>false</code> if the mouse cursor will not be captured.</p></div>

</div>

<div class="api-entry">

### getDepth {#getDepth}

```js
Reticle.getDepth()
```

<div class="api-text" v-pre><p>Gets the depth (distance) that the reticle is displayed at relative to the HMD view, in HMD mode.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The depth (distance) that the reticle is displayed at relative to the HMD view, in HMD mode.</p></div>

</div>

<div class="api-entry">

### getEnabled {#getEnabled}

```js
Reticle.getEnabled()
```

<div class="api-text" v-pre><p>Gets whether the reticle circle is enabled.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>enabled</p></div>

</div>

<div class="api-entry">

### getMaximumPosition {#getMaximumPosition}

```js
Reticle.getMaximumPosition()
```

<div class="api-text" v-pre><p>Gets the maximum reticle coordinates on the display device in desktop mode or the HUD surface in HMD mode. (The minimum reticle coordinates on the desktop display device or HUD surface are <code>0</code>, <code>0</code>.)</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The maximum reticle coordinates on the display device in desktop mode or the HUD surface in HMD mode.</p></div>

</div>

<div class="api-entry">

### getPosition {#getPosition}

```js
Reticle.getPosition()
```

<div class="api-text" v-pre><p>Gets the position of the cursor. This is the position relative to the Darkride window in desktop mode, and the HUD surface in HMD mode. </p>
<p><strong>Note:</strong> The position values may be negative.</p>
<p></p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The position of the cursor.</p></div>

</div>

<div class="api-entry">

### getScale {#getScale}

```js
Reticle.getScale()
```

<div class="api-text" v-pre><p>Gets the scale of the reticle circle in desktop mode, and the arrow and reticle circle in HMD mode. (Does not affect the size of the arrow in desktop mode.) The default scale is <code>1.0</code>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The scale of the reticle.</p></div>

</div>

<div class="api-entry">

### getVisible {#getVisible}

```js
Reticle.getVisible()
```

<div class="api-text" v-pre><p>Gets whether the reticle circle is visible in desktop mode, or the arrow or reticle circle are visible in HMD mode.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the reticle circle is visible in desktop mode, and the arrow or reticle circle are visible in HMD mode; <code>false</code> otherwise. (The mouse pointer is always visible in desktop mode.)</p></div>

</div>

<div class="api-entry">

### isMouseCaptured {#isMouseCaptured}

```js
Reticle.isMouseCaptured()
```

<div class="api-text" v-pre><p>Checks whether the mouse cursor is captured, displaying only in Darkride and not on the rest of the desktop. The mouse cursor is captured when in HMD mode and the Darkride window content (excluding menu items) has focus, if capturing is enabled (<code>allowMouseCapture</code> property value is <code>true</code>).</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the mouse cursor is captured, displaying only in Darkride and not on the desktop.</p></div>

</div>

<div class="api-entry">

### isPointingAtSystemOverlay {#isPointingAtSystemOverlay}

```js
Reticle.isPointingAtSystemOverlay()
```

<div class="api-text" v-pre><p>Gets whether the mouse cursor is pointing at UI in the Darkride window in desktop mode or on the HUD surface in HMD mode.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the mouse cursor is pointing at UI in the Darkride window in desktop mode or on the HUD surface in HMD mode, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### setAllowMouseCapture {#setAllowMouseCapture}

```js
Reticle.setAllowMouseCapture(allowMouseCaptured)
```

<div class="api-text" v-pre><p>Sets whether the mouse cursor will be captured when in HMD mode and the Darkride window content (excluding menu items) has focus. When captured, the mouse cursor displays only in Darkride, not on the rest of desktop.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>allowMouseCaptured</code></td><td>boolean</td><td><p><code>true</code> if the mouse cursor will be captured when in HMD mode and the Darkride window content has focus, <code>false</code> if the mouse cursor will not be captured.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setDepth {#setDepth}

```js
Reticle.setDepth(depth)
```

<div class="api-text" v-pre><p>Sets the depth (distance) that the reticle is displayed at relative to the HMD view, in HMD mode.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>depth</code></td><td>number</td><td><p>The depth (distance) that the reticle is displayed at relative to the HMD view, in HMD mode.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setEnabled {#setEnabled}

```js
Reticle.setEnabled(enabled)
```

<div class="api-text" v-pre><p>Sets whether the reticle circle is enabled.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setPosition {#setPosition}

```js
Reticle.setPosition(position)
```

<div class="api-text" v-pre><p>Sets the position of the cursor. This is the position relative to the Darkride window in desktop mode, and the HUD surface in HMD mode. </p>
<p><strong>Note:</strong> The position values may be negative.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The position of the cursor.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setScale {#setScale}

```js
Reticle.setScale(scale)
```

<div class="api-text" v-pre><p>Sets the scale of the reticle circle in desktop mode, and the arrow and reticle circle in HMD mode. (Does not affect the size of the arrow in desktop mode.) The default scale is <code>1.0</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>scale</code></td><td>number</td><td><p>The scale of the reticle.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setVisible {#setVisible}

```js
Reticle.setVisible(visible)
```

<div class="api-text" v-pre><p>Sets whether the reticle circle is visible in desktop mode, or the arrow or reticle circle are visible in HMD mode.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>visible</code></td><td>boolean</td><td><p><code>true</code> if the reticle circle is visible in desktop mode, and the arrow or reticle circle are visible in HMD mode; <code>false</code> otherwise. (Does not affect the visibility of the mouse pointer in desktop mode.)</p></td></tr>
</tbody></table></div>

</div>
