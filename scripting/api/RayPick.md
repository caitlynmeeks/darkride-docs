---
title: "RayPick"
description: "The RayPick API is a subset of the Picks API, as used for ray picks."
draft: true
---

# RayPick

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>RayPick</code> API is a subset of the <a href="Picks"><code>Picks</code></a> API, as used for ray picks.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>PICK_ENTITIES</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include domain and avatar entities when intersecting. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_OVERLAYS</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include local entities when intersecting. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_AVATARS</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include avatars when intersecting. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_HUD</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include the HUD surface when intersecting in HMD mode. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_PRECISE</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Pick against exact meshes. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_INCLUDE_INVISIBLE</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include invisible objects when intersecting. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_INCLUDE_NONCOLLIDABLE</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include non-collidable objects when intersecting. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_ALL_INTERSECTIONS</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Return all intersections instead of just the closest. <em>Read-only.</em></p></td></tr>
<tr><td><code>INTERSECTED_NONE</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected nothing with the given filter flags. <em>Read-only.</em></p></td></tr>
<tr><td><code>INTERSECTED_ENTITY</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected an entity. <em>Read-only.</em></p></td></tr>
<tr><td><code>INTERSECTED_LOCAL_ENTITY</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected a local entity. <em>Read-only.</em></p></td></tr>
<tr><td><code>INTERSECTED_OVERLAY</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected an entity (3D Overlays no longer exist). <em>Read-only.</em></p></td></tr>
<tr><td><code>INTERSECTED_AVATAR</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected an avatar. <em>Read-only.</em></p></td></tr>
<tr><td><code>INTERSECTED_HUD</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected the HUD surface. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

### createRayPick {#createRayPick}

```js
RayPick.createRayPick(properties)
```

<div class="api-text" v-pre><p>Creates a new ray pick. </p>
<p><strong>Warning:</strong> Picks created using this method currently always intersect at least visible and collidable things but this may not always be the case.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td><a href="Picks#RayPickProperties">Picks.RayPickProperties</a></td><td><p>Properties of the pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The ID of the pick created. <code>0</code> if invalid.</p></div>

### disableRayPick {#disableRayPick}

```js
RayPick.disableRayPick(id)
```

<div class="api-text" v-pre><p>Disables a ray pick.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the ray pick.</p></td></tr>
</tbody></table></div>

### enableRayPick {#enableRayPick}

```js
RayPick.enableRayPick(id)
```

<div class="api-text" v-pre><p>Enables a ray pick.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the ray pick.</p></td></tr>
</tbody></table></div>

### getPrevRayPickResult {#getPrevRayPickResult}

```js
RayPick.getPrevRayPickResult(id)
```

<div class="api-text" v-pre><p>Gets the most recent pick result from a ray pick. A ray pick continues to be updated ready to return a result, as long as it is enabled.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the ray pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#RayPickResult">RayPickResult</a> </div>

### isLeftHand {#isLeftHand}

```js
RayPick.isLeftHand(id)
```

<div class="api-text" v-pre><p>Checks if a pick is associated with the left hand: a ray or parabola pick with <code>joint</code> property set to <code>"_CONTROLLER_LEFTHAND"</code> or <code>"_CAMERA_RELATIVE_CONTROLLER_LEFTHAND"</code>, or a stylus pick with <code>hand</code> property set to <code>0</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the ray pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pick is associated with the left hand, <code>false</code> if it isn't.</p></div>

### isMouse {#isMouse}

```js
RayPick.isMouse(id)
```

<div class="api-text" v-pre><p>Checks if a pick is associated with the system mouse: a ray or parabola pick with <code>joint</code> property set to <code>"Mouse"</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the ray pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pick is associated with the system mouse, <code>false</code> if it isn't.</p></div>

### isRightHand {#isRightHand}

```js
RayPick.isRightHand(id)
```

<div class="api-text" v-pre><p>Checks if a pick is associated with the right hand: a ray or parabola pick with <code>joint</code> property set to <code>"_CONTROLLER_RIGHTHAND"</code> or <code>"_CAMERA_RELATIVE_CONTROLLER_RIGHTHAND"</code>, or a stylus pick with <code>hand</code> property set to <code>1</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the ray pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pick is associated with the right hand, <code>false</code> if it isn't.</p></div>

### removeRayPick {#removeRayPick}

```js
RayPick.removeRayPick(id)
```

<div class="api-text" v-pre><p>Removes (deletes) a ray pick.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the ray pick.</p></td></tr>
</tbody></table></div>

### setIgnoreItems {#setIgnoreItems}

```js
RayPick.setIgnoreItems(id, ignoreItems)
```

<div class="api-text" v-pre><p>Sets a list of entity and avatar IDs that a ray pick should ignore during intersection.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the ray pick.</p></td></tr>
<tr><td><code>ignoreItems</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>The list of IDs to ignore.</p></td></tr>
</tbody></table></div>

### setIncludeItems {#setIncludeItems}

```js
RayPick.setIncludeItems(id, includeItems)
```

<div class="api-text" v-pre><p>Sets a list of entity and avatar IDs that a ray pick should include during intersection, instead of intersecting with everything.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the ray pick.</p></td></tr>
<tr><td><code>includeItems</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>The list of IDs to include.</p></td></tr>
</tbody></table></div>

### setPrecisionPicking {#setPrecisionPicking}

```js
RayPick.setPrecisionPicking(id, precisionPicking)
```

<div class="api-text" v-pre><p>Sets whether or not a ray pick should use precision picking, i.e., whether it should pick against precise meshes or coarse meshes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the ray pick.</p></td></tr>
<tr><td><code>precisionPicking</code></td><td>boolean</td><td><p><code>true</code> to use precision picking, <code>false</code> to use coarse picking.</p></td></tr>
</tbody></table></div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### INTERSECTED_AVATAR {#INTERSECTED_AVATAR}

```js
RayPick.INTERSECTED_AVATAR()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.INTERSECTED_AVATAR</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### INTERSECTED_ENTITY {#INTERSECTED_ENTITY}

```js
RayPick.INTERSECTED_ENTITY()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.INTERSECTED_ENTITY</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### INTERSECTED_HUD {#INTERSECTED_HUD}

```js
RayPick.INTERSECTED_HUD()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.INTERSECTED_HUD</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### INTERSECTED_NONE {#INTERSECTED_NONE}

```js
RayPick.INTERSECTED_NONE()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.INTERSECTED_NONE</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### INTERSECTED_OVERLAY {#INTERSECTED_OVERLAY}

```js
RayPick.INTERSECTED_OVERLAY()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.INTERSECTED_LOCAL_ENTITY</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_ALL_INTERSECTIONS {#PICK_ALL_INTERSECTIONS}

```js
RayPick.PICK_ALL_INTERSECTIONS()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.PICK_ALL_INTERSECTIONS</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_AVATARS {#PICK_AVATARS}

```js
RayPick.PICK_AVATARS()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.PICK_AVATARS</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_COARSE {#PICK_COARSE}

```js
RayPick.PICK_COARSE()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.PICK_COARSE</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_ENTITIES {#PICK_ENTITIES}

```js
RayPick.PICK_ENTITIES()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Raypick.PICK_ENTITIES</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_HUD {#PICK_HUD}

```js
RayPick.PICK_HUD()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.PICK_HUD</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_INCLUDE_INVISIBLE {#PICK_INCLUDE_INVISIBLE}

```js
RayPick.PICK_INCLUDE_INVISIBLE()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.PICK_INCLUDE_INVISIBLE</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_INCLUDE_NONCOLLIDABLE {#PICK_INCLUDE_NONCOLLIDABLE}

```js
RayPick.PICK_INCLUDE_NONCOLLIDABLE()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.PICK_INCLUDE_NONCOLLIDABLE</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_OVERLAYS {#PICK_OVERLAYS}

```js
RayPick.PICK_OVERLAYS()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>RayPick.PICK_OVERLAYS</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>
