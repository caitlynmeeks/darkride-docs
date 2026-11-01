---
title: "LaserPointers"
description: "The LaserPointers API is a subset of the Pointers API."
draft: true
---

# LaserPointers

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>LaserPointers</code> API is a subset of the <a href="Pointers"><code>Pointers</code></a> API. It lets you create, manage, and visually represent objects for repeatedly calculating ray intersections with avatars, entities, and overlays. Ray pointers can also be configured to generate events on entities and overlays intersected.</p></div>

## Functions {#functions}

### createLaserPointer {#createLaserPointer}

```js
LaserPointers.createLaserPointer(properties)
```

<div class="api-text" v-pre><p>Creates a new ray pointer. The pointer can have a wide range of behaviors depending on the properties specified. For example, it may be a static ray pointer, a mouse ray pointer, or joint ray pointer. </p>
<p><strong>Warning:</strong> Pointers created using this method currently always intersect at least visible and collidable things but this may not always be the case.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td><a href="Pointers#RayPointerProperties">Pointers.RayPointerProperties</a></td><td><p>The properties of the pointer, including the properties of the underlying pick that the pointer uses to do its picking.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The ID of the pointer if successfully created, otherwise <code>0</code>.</p></div>

### disableLaserPointer {#disableLaserPointer}

```js
LaserPointers.disableLaserPointer(id)
```

<div class="api-text" v-pre><p>Disables and hides a pointer. Disabled pointers do not update their pick results or generate events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>

### editRenderState {#editRenderState}

```js
LaserPointers.editRenderState(id, renderState, properties)
```

<div class="api-text" v-pre><p>Edits a render state of a pointer, to change its visual appearance for the state when the pointer is intersecting something. </p>
<p><strong>Note:</strong> You can only edit the properties of the existing parts of the pointer; you cannot change the type of any part.</p>
 <p><strong>Note:</strong> You cannot use this method to change the appearance of a default render state.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>renderState</code></td><td>string</td><td><p>The name of the render state to edit.</p></td></tr>
<tr><td><code>properties</code></td><td><a href="Pointers#RayPointerRenderState">Pointers.RayPointerRenderState</a></td><td><p>The new properties for the render state. Only the overlay properties to change need be specified.</p></td></tr>
</tbody></table></div>

### enableLaserPointer {#enableLaserPointer}

```js
LaserPointers.enableLaserPointer(id)
```

<div class="api-text" v-pre><p>Enables and shows a pointer. Enabled pointers update their pick results and generate events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>

### getPrevRayPickResult {#getPrevRayPickResult}

```js
LaserPointers.getPrevRayPickResult(id)
```

<div class="api-text" v-pre><p>Gets the most recent intersection of a pointer. A pointer continues to be updated ready to return a result, as long as it is enabled, regardless of the render state.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#RayPickResult">RayPickResult</a> <p>The most recent intersection of the pointer.</p></div>

### isLeftHand {#isLeftHand}

```js
LaserPointers.isLeftHand(id)
```

<div class="api-text" v-pre><p>Checks if a pointer is associated with the left hand: a pointer with <code>joint</code> property set to <code>"_CONTROLLER_LEFTHAND"</code> or <code>"_CAMERA_RELATIVE_CONTROLLER_LEFTHAND"</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pointer is associated with the left hand, <code>false</code> if it isn't.</p></div>

### isMouse {#isMouse}

```js
LaserPointers.isMouse(id)
```

<div class="api-text" v-pre><p>Checks if a pointer is associated with the system mouse: a pointer with <code>joint</code> property set to <code>"Mouse"</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pointer is associated with the system mouse, <code>false</code> if it isn't.</p></div>

### isRightHand {#isRightHand}

```js
LaserPointers.isRightHand(id)
```

<div class="api-text" v-pre><p>Checks if a pointer is associated with the right hand: a pointer with <code>joint</code> property set to <code>"_CONTROLLER_RIGHTHAND"</code> or <code>"_CAMERA_RELATIVE_CONTROLLER_RIGHTHAND"</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pointer is associated with the right hand, <code>false</code> if it isn't.</p></div>

### removeLaserPointer {#removeLaserPointer}

```js
LaserPointers.removeLaserPointer(id)
```

<div class="api-text" v-pre><p>Removes (deletes) a pointer.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>

### setIgnoreItems {#setIgnoreItems}

```js
LaserPointers.setIgnoreItems(id, ignoreItems)
```

<div class="api-text" v-pre><p>Sets a list of entity and avatar IDs that a pointer should ignore during intersection.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>ignoreItems</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>A list of IDs to ignore.</p></td></tr>
</tbody></table></div>

### setIncludeItems {#setIncludeItems}

```js
LaserPointers.setIncludeItems(id, includeItems)
```

<div class="api-text" v-pre><p>Sets a list of entity and avatar IDs that a pointer should include during intersection, instead of intersecting with everything.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>includeItems</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>A list of IDs to include.</p></td></tr>
</tbody></table></div>

### setLaserLength {#setLaserLength}

```js
LaserPointers.setLaserLength(id, laserLength)
```

<div class="api-text" v-pre><p>Sets the length of a pointer.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>laserLength</code></td><td>number</td><td><p>The desired length of the pointer.</p></td></tr>
</tbody></table></div>

### setLockEndUUID {#setLockEndUUID}

```js
LaserPointers.setLockEndUUID(id, targetID, isAvatar, offset?)
```

<div class="api-text" v-pre><p>Locks a pointer onto a specific entity or avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>targetID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity or avatar to lock the pointer on to.</p></td></tr>
<tr><td><code>isAvatar</code></td><td>boolean</td><td><p><code>true</code> if the target is an avatar, <code>false</code> if it is an entity.</p></td></tr>
<tr><td><code>offset</code> <em>optional</em></td><td><a href="Mat4">Mat4</a></td><td><p>The offset of the target point from the center of the target item. If not specified, the pointer locks on to the center of the target item.</p></td></tr>
</tbody></table></div>

### setPrecisionPicking {#setPrecisionPicking}

```js
LaserPointers.setPrecisionPicking(id, precisionPicking)
```

<div class="api-text" v-pre><p>Sets whether or not a pointer should use precision picking, i.e., whether it should pick against precise meshes or coarse meshes. This has the same effect as using the <code>PICK_PRECISE</code> or <code>PICK_COARSE</code> filter flags.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>precisionPicking</code></td><td>boolean</td><td><p><code>true</code> to use precision picking, <code>false</code> to use coarse picking.</p></td></tr>
</tbody></table></div>

### setRenderState {#setRenderState}

```js
LaserPointers.setRenderState(renderState, id)
```

<div class="api-text" v-pre><p>Sets the render state of a pointer, to change its visual appearance and possibly disable or enable it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>renderState</code></td><td>string</td><td><p>The name of the render state to set the pointer to. This may be:</p>
 <ul> <li>The name of one of the render states set in the pointer's properties.</li>
 <li><code>""</code>, to hide the pointer and disable emitting of events.</li>
 </ul></td></tr>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
