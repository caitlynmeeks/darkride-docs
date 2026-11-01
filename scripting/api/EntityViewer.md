---
title: "EntityViewer"
description: "The EntityViewer API provides a headless viewer for assignment client scripts, so that they can \"see\" entities in order for them to be available in the Entities API."
---

# EntityViewer

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: agents.</div>

<div class="api-text" v-pre><p>The <code>EntityViewer</code> API provides a headless viewer for assignment client scripts, so that they can "see" entities in order for them to be available in the <a href="Entities"><code>Entities</code></a> API.</p></div>

## Functions {#functions}

<div class="api-entry">

### getMaxPacketsPerSecond {#getMaxPacketsPerSecond}

```js
EntityViewer.getMaxPacketsPerSecond()
```

<div class="api-text" v-pre><p>Gets the maximum number of entity packets to receive from the world server per second.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The maximum number of entity packets to receive per second.</p></div>

</div>

<div class="api-entry">

### getOctreeElementsCount {#getOctreeElementsCount}

```js
EntityViewer.getOctreeElementsCount()
```

<div class="api-text" v-pre><p>Gets the number of nodes in the octree.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The number of nodes in the octree.</p></div>

</div>

<div class="api-entry">

### getOrientation {#getOrientation}

```js
EntityViewer.getOrientation()
```

<div class="api-text" v-pre><p>Gets the orientation of the view frustum.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The orientation of the view frustum.</p></div>

</div>

<div class="api-entry">

### getPosition {#getPosition}

```js
EntityViewer.getPosition()
```

<div class="api-text" v-pre><p>Gets the position of the view frustum.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The position of the view frustum.</p></div>

</div>

<div class="api-entry">

### queryOctree {#queryOctree}

```js
EntityViewer.queryOctree()
```

<div class="api-text" v-pre><p>Updates the entities currently in view.</p></div>

</div>

<div class="api-entry">

### setCenterRadius {#setCenterRadius}

```js
EntityViewer.setCenterRadius(radius)
```

<div class="api-text" v-pre><p>Sets the radius of the center "keyhole" in the view frustum.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>radius</code></td><td>number</td><td><p>The radius of the center "keyhole" in the view frustum.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setMaxPacketsPerSecond {#setMaxPacketsPerSecond}

```js
EntityViewer.setMaxPacketsPerSecond(maxPacketsPerSecond)
```

<div class="api-text" v-pre><p>Sets the maximum number of entity packets to receive from the world server per second.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>maxPacketsPerSecond</code></td><td>number</td><td><p>The maximum number of entity packets to receive per second.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setOrientation {#setOrientation}

```js
EntityViewer.setOrientation(orientation)
```

<div class="api-text" v-pre><p>Sets the orientation of the view frustum.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td><p>The orientation of the view frustum.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setPosition {#setPosition}

```js
EntityViewer.setPosition(position)
```

<div class="api-text" v-pre><p>Sets the position of the view frustum.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position of the view frustum.</p></td></tr>
</tbody></table></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### getBoundaryLevelAdjust {#getBoundaryLevelAdjust}

```js
EntityViewer.getBoundaryLevelAdjust()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The boundary level adjust factor.</p></div>

</div>

<div class="api-entry">

### getVoxelSizeScale {#getVoxelSizeScale}

```js
EntityViewer.getVoxelSizeScale()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The voxel size scale.</p></div>

</div>

<div class="api-entry">

### setBoundaryLevelAdjust {#setBoundaryLevelAdjust}

```js
EntityViewer.setBoundaryLevelAdjust(boundaryLevelAdjust)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>boundaryLevelAdjust</code></td><td>number</td><td><p>The boundary level adjust factor.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setKeyholeRadius {#setKeyholeRadius}

```js
EntityViewer.setKeyholeRadius(radius)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use <a href="#setCenterRadius">setCenterRadius</a> instead.</p></div>
:::

<div class="api-text" v-pre><p>Sets the radius of the center "keyhole" in the view frustum.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>radius</code></td><td>number</td><td><p>The radius of the center "keyhole" in the view frustum.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setVoxelSizeScale {#setVoxelSizeScale}

```js
EntityViewer.setVoxelSizeScale(sizeScale)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sizeScale</code></td><td>number</td><td><p>The voxel size scale.</p></td></tr>
</tbody></table></div>

</div>
