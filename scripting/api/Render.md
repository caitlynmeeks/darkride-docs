---
title: "Render"
description: "The Render API enables you to configure the graphics engine."
draft: true
---

# Render

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Render</code> API enables you to configure the graphics engine.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>renderMethod</code></td><td><a href="#RenderMethod">Render.RenderMethod</a></td><td><p>The render method being used.</p></td></tr>
<tr><td><code>shadowsEnabled</code></td><td>boolean</td><td><p><code>true</code> if shadows are enabled, <code>false</code> if they're disabled.</p></td></tr>
<tr><td><code>ambientOcclusionEnabled</code></td><td>boolean</td><td><p><code>true</code> if ambient occlusion is enabled, <code>false</code> if it's disabled.</p></td></tr>
<tr><td><code>antialiasingMethod</code></td><td><a href="#AntialiasingMethod">Render.AntialiasingMethod</a></td><td><p>The anti-aliasing method being used.</p></td></tr>
<tr><td><code>msaaSamples</code></td><td>number</td><td><p>The forward render method's multisampling: 1 (none), 2, 4 or 8 samples a pixel.</p></td></tr>
<tr><td><code>viewportResolutionScale</code></td><td>number</td><td><p>The view port resolution scale, <code>&gt; 0.0</code>.</p></td></tr>
<tr><td><code>nametagsEnabled</code></td><td>boolean</td><td><p><code>true</code> if nametags are enabled, <code>false</code> if they're disabled.</p></td></tr>
<tr><td><code>nametagsShowSelf</code></td><td>boolean</td><td><p><code>true</code> if your nametag should appear above you, <code>false</code> if not.</p></td></tr>
<tr><td><code>maximumTextureMemory</code></td><td>number</td><td><p>The maximum texture memory in MB.</p></td></tr>
<tr><td><code>farClip</code></td><td>number</td><td><p>The far clip distance.</p></td></tr>
<tr><td><code>nearClip</code></td><td>number</td><td><p>The desktop camera's near clip distance, metres (0.08 by default; the HMD keeps 0.08 for the hands). A longer one gives the depth buffer precision in proportion: at 0.3 m, Unity's default, surfaces a fraction of a millimetre apart stop fighting almost four times farther away; anything nearer than it is cut.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### getAmbientOcclusionEnabled {#getAmbientOcclusionEnabled}

```js
Render.getAmbientOcclusionEnabled()
```

<div class="api-text" v-pre><p>Gets whether or not ambient occlusion is enabled.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if ambient occlusion is enabled, <code>false</code> if it's disabled.</p></div>

</div>

<div class="api-entry">

### getAntialiasingMethod {#getAntialiasingMethod}

```js
Render.getAntialiasingMethod()
```

<div class="api-text" v-pre><p>Gets the anti-aliasing method being used.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#AntialiasingMethod">Render.AntialiasingMethod</a> <p>The anti-aliasing method being used.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the current anti-aliasing method.</p></div>

```js
var antialiasingMethod = Render.getAntialiasingMethod();
print("Current render method: " + Render.getAntialiasingMethodNames()[antialiasingMethod]);
```

</div>

<div class="api-entry">

### getAntialiasingMethodNames {#getAntialiasingMethodNames}

```js
Render.getAntialiasingMethodNames()
```

<div class="api-text" v-pre><p>Gets the names of the possible anti-aliasing methods, per <a href="#AntialiasingMethod"><code>Render.AntialiasingMethod</code></a>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The names of the possible anti-aliasing methods.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the names of the possible anti-aliasing methods.</p></div>

```js
var antialiasingMethods = Render.getAntialiasingMethodNames();
print("Anti-aliasing methods:");
for (var i = 0; i < antialiasingMethods.length; i++) {
    print("- " + antialiasingMethods[i]);
}
```

</div>

<div class="api-entry">

### getConfig {#getConfig}

```js
Render.getConfig(name)
```

<div class="api-text" v-pre><p>Gets the configuration for a rendering job by name. </p>
<p><strong>Warning:</strong> For internal, debugging purposes. Subject to change.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the rendering job.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>The configuration for the rendering job.</p></div>

</div>

<div class="api-entry">

### getFarClip {#getFarClip}

```js
Render.getFarClip()
```

<div class="api-text" v-pre><p>Gets the far clip distance.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

</div>

<div class="api-entry">

### getFieldOfView {#getFieldOfView}

```js
Render.getFieldOfView()
```

<div class="api-text" v-pre><p>Gets the field of view in degrees.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

</div>

<div class="api-entry">

### getMaximumTextureMemory {#getMaximumTextureMemory}

```js
Render.getMaximumTextureMemory()
```

<div class="api-text" v-pre><p>Gets the maxmium texture memory in MB.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

</div>

<div class="api-entry">

### getMsaaSamples {#getMsaaSamples}

```js
Render.getMsaaSamples()
```

<div class="api-text" v-pre><p>Gets the forward render method's multisampling: how many samples a pixel its frame is drawn with.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>1 (no multisampling), 2, 4 or 8.</p></div>

</div>

<div class="api-entry">

### getNametagsEnabled {#getNametagsEnabled}

```js
Render.getNametagsEnabled()
```

<div class="api-text" v-pre><p>Gets whether nametags are enabled.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if nametags are enabled, <code>false</code> if they're disabled.</p></div>

</div>

<div class="api-entry">

### getNametagsShowSelf {#getNametagsShowSelf}

```js
Render.getNametagsShowSelf()
```

<div class="api-text" v-pre><p>Gets whether your nametag should appear above you.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if your nametag should appear above you, <code>false</code> if not.</p></div>

</div>

<div class="api-entry">

### getNearClip {#getNearClip}

```js
Render.getNearClip()
```

<div class="api-text" v-pre><p>Gets the desktop camera's near clip distance.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>metres</p></div>

</div>

<div class="api-entry">

### getRenderMethod {#getRenderMethod}

```js
Render.getRenderMethod()
```

<div class="api-text" v-pre><p>Gets the render method being used.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#RenderMethod">Render.RenderMethod</a> <p>The render method being used.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the current render method.</p></div>

```js
var renderMethod = Render.getRenderMethod();
print("Current render method: " + Render.getRenderMethodNames()[renderMethod]);
```

</div>

<div class="api-entry">

### getRenderMethodNames {#getRenderMethodNames}

```js
Render.getRenderMethodNames()
```

<div class="api-text" v-pre><p>Gets the names of the possible render methods, per <a href="#RenderMethod"><code>Render.RenderMethod</code></a>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The names of the possible render methods.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the names of the possible render methods.</p></div>

```js
var renderMethods = Render.getRenderMethodNames();
print("Render methods:");
for (var i = 0; i < renderMethods.length; i++) {
    print("- " + renderMethods[i]);
}
```

</div>

<div class="api-entry">

### getShadowsEnabled {#getShadowsEnabled}

```js
Render.getShadowsEnabled()
```

<div class="api-text" v-pre><p>Gets whether or not shadows are enabled.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if shadows are enabled, <code>false</code> if they're disabled.</p></div>

</div>

<div class="api-entry">

### getViewportResolutionScale {#getViewportResolutionScale}

```js
Render.getViewportResolutionScale()
```

<div class="api-text" v-pre><p>Gets the view port resolution scale.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The view port resolution scale, <code>&gt; 0.0</code>.</p></div>

</div>

<div class="api-entry">

### getVsyncEnabled {#getVsyncEnabled}

```js
Render.getVsyncEnabled()
```

<div class="api-text" v-pre><p>Gets whether vsync is on: the swap waits for the display's refresh. Off, the default, the frames are paced at the display's rate and the compositor shows the newest at each refresh, which is even; on macOS the GL swap's wait is two refreshes with the odd frame queued without a wait, so vsync there is uneven.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if vsync is on, <code>false</code> if off.</p></div>

</div>

<div class="api-entry">

### setAmbientOcclusionEnabled {#setAmbientOcclusionEnabled}

```js
Render.setAmbientOcclusionEnabled(enabled)
```

<div class="api-text" v-pre><p>Sets whether or not ambient occlusion is enabled.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> to enable ambient occlusion, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setAntialiasingMethod {#setAntialiasingMethod}

```js
Render.setAntialiasingMethod(antialiasingMethod)
```

<div class="api-text" v-pre><p>Sets the anti-aliasing method to use.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>antialiasingMethod</code></td><td><a href="#AntialiasingMethod">Render.AntialiasingMethod</a></td><td><p>The anti-aliasing method to use.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setFarClip {#setFarClip}

```js
Render.setFarClip(farClip)
```

<div class="api-text" v-pre><p>Sets the far clip distance.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>farClip</code></td><td>number</td><td></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setFieldOfView {#setFieldOfView}

```js
Render.setFieldOfView(fieldOfView)
```

<div class="api-text" v-pre><p>Sets the field of view in degrees.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>fieldOfView</code></td><td>number</td><td></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setMaximumTextureMemory {#setMaximumTextureMemory}

```js
Render.setMaximumTextureMemory(maximumTextureMemory)
```

<div class="api-text" v-pre><p>Sets the maxmium texture memory in MB.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>maximumTextureMemory</code></td><td>number</td><td></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setMsaaSamples {#setMsaaSamples}

```js
Render.setMsaaSamples(samples)
```

<div class="api-text" v-pre><p>Sets the forward render method's multisampling. The graphics presets set it too: Potato 1, Low 2, Medium and High 4. Deferred rendering is unaffected.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>samples</code></td><td>number</td><td><p>1 (no multisampling), 2, 4 or 8; anything else rounds down to one of them.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setNametagsEnabled {#setNametagsEnabled}

```js
Render.setNametagsEnabled(enabled)
```

<div class="api-text" v-pre><p>Sets whether nametags are enabled.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> if nametags are enabled, <code>false</code> if they're disabled.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setNametagsShowSelf {#setNametagsShowSelf}

```js
Render.setNametagsShowSelf(enabled)
```

<div class="api-text" v-pre><p>Sets whether your nametag should appear above you.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> if your nametag should appear above you, <code>false</code> if not.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setNearClip {#setNearClip}

```js
Render.setNearClip(nearClip)
```

<div class="api-text" v-pre><p>Sets the desktop camera's near clip distance, 0.01 to 5 m. The depth buffer's precision grows in proportion.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>nearClip</code></td><td>number</td><td><p>metres</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setRenderMethod {#setRenderMethod}

```js
Render.setRenderMethod(renderMethod)
```

<div class="api-text" v-pre><p>Sets the render method to use.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>renderMethod</code></td><td><a href="#RenderMethod">Render.RenderMethod</a></td><td><p>The render method to use.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setShadowsEnabled {#setShadowsEnabled}

```js
Render.setShadowsEnabled(enabled)
```

<div class="api-text" v-pre><p>Sets whether or not shadows are enabled.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> to enable shadows, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setViewportResolutionScale {#setViewportResolutionScale}

```js
Render.setViewportResolutionScale(resolutionScale)
```

<div class="api-text" v-pre><p>Sets the view port resolution scale.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>resolutionScale</code></td><td>number</td><td><p>The view port resolution scale to set, <code>&gt; 0.0</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setVsyncEnabled {#setVsyncEnabled}

```js
Render.setVsyncEnabled(enabled)
```

<div class="api-text" v-pre><p>Sets whether vsync is on. Default off. <code>TIVOLI_VSYNC</code> in the environment overrides it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> for vsync, <code>false</code> for paced presents without a wait.</p></td></tr>
</tbody></table></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### settingsChanged {#settingsChanged}

```js
Render.settingsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when one of the <code>Render</code> API's properties changes.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when a render setting changes.</p></div>

```js
Render.settingsChanged.connect(function () {
    print("Render setting changed");
});
// Toggle Developer > Render > Shadows or similar to trigger.
```

</div>

## Types {#types}

<div class="api-entry">

### AntialiasingMethod {#AntialiasingMethod}

<div class="api-text" v-pre><p>The anti-aliasing method is specified by the following values:</p>
 <table> <thead> <tr> <th>Value</th> <th>Name</th> <th>Description</th> </tr>
</thead>
 <tbody> <tr> <td><code>0</code></td> <td>NONE</td> <td></td> </tr>
 <tr> <td><code>1</code></td> <td>TAA</td> <td></td> </tr>
 <tr> <td><code>2</code></td> <td>FXAA</td> <td></td> </tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### RenderMethod {#RenderMethod}

<div class="api-text" v-pre><p>The rendering method is specified by the following values:</p>
 <table> <thead> <tr> <th>Value</th> <th>Name</th> <th>Description</th> </tr>
</thead>
 <tbody> <tr> <td><code>0</code></td> <td>DEFERRED</td> <td>More complex rendering pipeline where lighting is applied to the scene as a whole after all objects have been rendered.</td> </tr>
 <tr> <td><code>1</code></td> <td>FORWARD</td> <td>Simpler rendering pipeline where each object in the scene, in turn, is rendered and has lighting applied.</td> </tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>
