---
title: "LODManager"
description: "The LODManager API manages the Level of Detail displayed in Darkride."
---

# LODManager

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>LODManager</code> API manages the Level of Detail displayed in Darkride. If the LOD is being automatically adjusted, the LOD is decreased if the measured frame rate is lower than the target FPS, and increased if the measured frame rate is greater than the target FPS.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>worldDetailQuality</code></td><td><a href="#WorldDetailQuality">LODManager.WorldDetailQuality</a></td><td><p>The quality of the rendered world detail. </p>
<p>Setting this value updates the current desktop or HMD target LOD FPS.</p>
<p></p></td></tr>
<tr><td><code>lodQualityLevel</code></td><td>number</td><td><p><em>Not used.</em> </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>automaticLODAdjust</code></td><td>boolean</td><td><p><code>true</code> to automatically adjust the LOD, <code>false</code> to manually adjust it.</p></td></tr>
<tr><td><code>engineRunTime</code></td><td>number</td><td><p>The time spent in the "render" thread to produce the most recent frame, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>batchTime</code></td><td>number</td><td><p>The time spent in the "present" thread processing the batches of the most recent frame, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>presentTime</code></td><td>number</td><td><p>The time spent in the "present" thread between the last buffer swap, i.e., the total time to submit the most recent frame, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>gpuTime</code></td><td>number</td><td><p>The time spent in the GPU executing the most recent frame, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>nowRenderTime</code></td><td>number</td><td><p>The current, instantaneous time spend to produce frames, in ms. This is the worst of <code>engineRunTime</code>, <code>batchTime</code>, <code>presentTime</code>, and <code>gpuTime</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>nowRenderFPS</code></td><td>number</td><td><p>The current, instantaneous frame rate, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>smoothScale</code></td><td>number</td><td><p>The amount of smoothing applied to calculate <code>smoothRenderTime</code> and <code>smoothRenderFPS</code>.</p></td></tr>
<tr><td><code>smoothRenderTime</code></td><td>number</td><td><p>The average time spend to produce frames, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>smoothRenderFPS</code></td><td>number</td><td><p>The average frame rate, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>lodTargetFPS</code></td><td>number</td><td><p>The target LOD FPS per the current desktop or HMD display mode, capped by the target refresh rate set by the <a href="Performance"><code>Performance</code></a> API. <em>Read-only.</em></p></td></tr>
<tr><td><code>lodAngleDeg</code></td><td>number</td><td><p>The minimum angular dimension (relative to the camera position) of an entity in order for it to be rendered, in degrees. The angular dimension is calculated as a sphere of radius half the diagonal of the entity's AA box.</p></td></tr>
<tr><td><code>impostorAngleDeg</code></td><td>number</td><td><p>The angular size (degrees) below which an entity with an impostor card draws the card instead of its model, down to <code>lodAngleDeg</code>. <code>0</code> (the default) means four times <code>lodAngleDeg</code> and reads back as <code>0</code>, so that a script can save and restore it.</p></td></tr>
<tr><td><code>impostorAngleInEffectDeg</code></td><td>number</td><td><p>The impostor angle in use (degrees): <code>impostorAngleDeg</code>, or four times <code>lodAngleDeg</code> while that is <code>0</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>impostorDebug</code></td><td>number</td><td><p>The impostor card's debug view: <code>0</code> draws the cards as they are, <code>10</code> tints them blue (the Inspector's Tint Cards), <code>1</code> to <code>9</code> paint what the card's shader reads. Not saved.</p></td></tr>
<tr><td><code>impostorMarch</code></td><td>number</td><td><p>How the impostor card's shader finds the subject along each pixel's ray: <code>1</code> stops reading a point's views once one puts it outside and refines the hit once, which finds the same surface as <code>0</code>, the march as first built; <code>2</code> (the default) also takes steps no shorter than <code>impostorMarchFootprints</code> of the card's pixel footprint. Not saved.</p></td></tr>
<tr><td><code>impostorMarchFootprints</code></td><td>number</td><td><p>The shortest step of march <code>2</code>, in the card's pixel footprints (default <code>0.25</code>; at <code>1</code> thin parts such as a chair's tubes break into dots). Not saved.</p></td></tr>
<tr><td><code>impostorsEnabled</code></td><td>boolean</td><td><p><code>true</code> (the default) draws impostor cards; <code>false</code> draws every entity's model instead (Developer &gt; Render &gt; Impostor Cards). Not saved.</p></td></tr>
<tr><td><code>meshLodsEnabled</code></td><td>boolean</td><td><p><code>true</code> (the default) draws the automatic LODs, the simplified versions of each mesh, where they look the same (Developer &gt; Render &gt; Automatic LODs); <code>false</code> draws every mesh in full. Not saved.</p></td></tr>
<tr><td><code>meshLodErrorPixels</code></td><td>number</td><td><p>How far, in pixels on screen, a simplified mesh may stray from the full one where it is drawn (AUTOMATIC-LODS.md): <code>1</code> by default; <code>0</code> draws every mesh in full.</p></td></tr>
<tr><td><code>meshLodForceLevel</code></td><td>number</td><td><p>The LOD level every mesh draws, a test hook: <code>-1</code> (the default) lets the error decide; <code>0</code> is full detail; a mesh with fewer levels draws its coarsest. Not saved.</p></td></tr>
<tr><td><code>showImpostorsAndLods</code></td><td>boolean</td><td><p><code>true</code> while Developer &gt; Render &gt; Show Impostors and LODs is checked (its readout script reads it). Not saved.</p></td></tr>
<tr><td><code>pidKp</code></td><td>number</td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>pidKi</code></td><td>number</td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>pidKd</code></td><td>number</td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>pidKv</code></td><td>number</td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>pidOp</code></td><td>number</td><td><p><em>Not used.</em> <em>Read-only.</em></p></td></tr>
<tr><td><code>pidOi</code></td><td>number</td><td><p><em>Not used.</em> <em>Read-only.</em></p></td></tr>
<tr><td><code>pidOd</code></td><td>number</td><td><p><em>Not used.</em> <em>Read-only.</em></p></td></tr>
<tr><td><code>pidO</code></td><td>number</td><td><p><em>Not used.</em> <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### describeEntity {#describeEntity}

```js
LODManager.describeEntity(entityID)
```

<div class="api-text" v-pre><p>Says what the main view draws of an entity now: its impostor card or its model, and for a model entity its automatic LODs (Developer &gt; Render &gt; Show Impostors and LODs reads it for what is at the centre of the view).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p><code>name</code>; <code>visuallyReady</code> (what it draws now has loaded, which the loading screen waits for); <code>card</code>, when the entity or an ancestor has an impostor card: <code>ownerID</code>, <code>ownerName</code>, <code>showing</code> ("card", "model", "dissolving" or "loading"), <code>standIn</code> (the card stands in for models not here yet), <code>angleDeg</code> (how wide its sphere looks), <code>switchAngleDeg</code> and <code>enabled</code>; <code>mesh</code>, for a model entity: "waiting" (behind its card, not fetched), "loading" or "loaded"; <code>textures</code>, for a loaded model: "loading" or "loaded"; <code>lods</code>, for a loaded model: <code>parts</code>, one per mesh part, each with <code>full</code> (its triangles), <code>levels</code> (each level's triangles) and <code>shown</code> (the level the main view draws, 0 for full detail), and <code>enabled</code>.</p></div>

</div>

<div class="api-entry">

### getAutomaticLODAdjust {#getAutomaticLODAdjust}

```js
LODManager.getAutomaticLODAdjust()
```

<div class="api-text" v-pre><p>Gets whether the LOD is being automatically adjusted.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the LOD is being automatically adjusted, <code>false</code> if it is being manually adjusted.</p></div>

</div>

<div class="api-entry">

### getDesktopLODTargetFPS {#getDesktopLODTargetFPS}

```js
LODManager.getDesktopLODTargetFPS()
```

<div class="api-text" v-pre><p>Gets the target desktop LOD FPS.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The target desktop LOD FPS, in Hz.</p></div>

</div>

<div class="api-entry">

### getHMDLODTargetFPS {#getHMDLODTargetFPS}

```js
LODManager.getHMDLODTargetFPS()
```

<div class="api-text" v-pre><p>Gets the target HMD LOD FPS. The target FPS in HMD mode. The LOD is adjusted to ...</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The target HMD LOD FPS, in Hz.</p></div>

</div>

<div class="api-entry">

### getLODFeedbackText {#getLODFeedbackText}

```js
LODManager.getLODFeedbackText()
```

<div class="api-text" v-pre><p>Gets a text description of the current level of detail rendered.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>A text description of the current level of detail rendered.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the current level of detail rendered.</p></div>

```js
print("You can currently see: " + LODManager.getLODFeedbackText());
```

</div>

<div class="api-entry">

### getLODTargetFPS {#getLODTargetFPS}

```js
LODManager.getLODTargetFPS()
```

<div class="api-text" v-pre><p>The target LOD FPS per the current desktop or HMD display mode, capped by the target refresh rate.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The target LOD FPS, in Hz.</p></div>

</div>

<div class="api-entry">

### setAutomaticLODAdjust {#setAutomaticLODAdjust}

```js
LODManager.setAutomaticLODAdjust(value)
```

<div class="api-text" v-pre><p>Sets whether the LOD should be automatically adjusted.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>value</code></td><td>boolean</td><td><p><code>true</code> to automatically adjust the LOD, <code>false</code> to manually adjust it.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setDesktopLODTargetFPS {#setDesktopLODTargetFPS}

```js
LODManager.setDesktopLODTargetFPS(value)
```

<div class="api-text" v-pre><p>Sets the target desktop LOD FPS.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>value</code></td><td>number</td><td><p>The target desktop LOD FPS, in Hz.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setHMDLODTargetFPS {#setHMDLODTargetFPS}

```js
LODManager.setHMDLODTargetFPS(value)
```

<div class="api-text" v-pre><p>Sets the target HMD LOD FPS.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>value</code></td><td>number</td><td><p>The target HMD LOD FPS, in Hz.</p></td></tr>
</tbody></table></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### autoLODChanged {#autoLODChanged}

```js
LODManager.autoLODChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when whether or not the LOD is being automatically adjusted changes.</p></div>

</div>

<div class="api-entry">

### worldDetailQualityChanged {#worldDetailQualityChanged}

```js
LODManager.worldDetailQualityChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the world detail quality changes.</p></div>

</div>

## Types {#types}

<div class="api-entry">

### WorldDetailQuality {#WorldDetailQuality}

<div class="api-text" v-pre><p>The world detail quality rendered.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>Low world detail quality.</td></tr>
 <tr><td><code>1</code></td><td>Medium world detail quality.</td></tr>
 <tr><td><code>2</code></td><td>High world detail quality.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### getBoundaryLevelAdjust {#getBoundaryLevelAdjust}

```js
LODManager.getBoundaryLevelAdjust()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The boundary level adjust factor.</p></div>

</div>

<div class="api-entry">

### getOctreeSizeScale {#getOctreeSizeScale}

```js
LODManager.getOctreeSizeScale()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>lodAngleDeg</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The octree size scale.</p></div>

</div>

<div class="api-entry">

### setBoundaryLevelAdjust {#setBoundaryLevelAdjust}

```js
LODManager.setBoundaryLevelAdjust(boundaryLevelAdjust)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>boundaryLevelAdjust</code></td><td>number</td><td><p>The boundary level adjust factor.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setOctreeSizeScale {#setOctreeSizeScale}

```js
LODManager.setOctreeSizeScale(sizeScale)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>lodAngleDeg</code> property instead.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sizeScale</code></td><td>number</td><td><p>The octree size scale.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### LODDecreased {#LODDecreased}

```js
LODManager.LODDecreased.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p><em>Not triggered.</em></p></div>

</div>

<div class="api-entry">

### LODIncreased {#LODIncreased}

```js
LODManager.LODIncreased.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p><em>Not triggered.</em></p></div>

</div>

<div class="api-entry">

### lodQualityLevelChanged {#lodQualityLevelChanged}

```js
LODManager.lodQualityLevelChanged.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Triggered when the <code>lodQualityLevel</code> property value changes.</p></div>

</div>
