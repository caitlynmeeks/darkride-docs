---
title: "Pointers"
description: "The Pointers API lets you create, manage, and visually represent objects for repeatedly calculating intersections with avatars, entities, and overlays."
---

# Pointers

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Pointers</code> API lets you create, manage, and visually represent objects for repeatedly calculating intersections with avatars, entities, and overlays. Pointers can also be configured to generate events on entities and overlays intersected.</p></div>

## Functions {#functions}

<div class="api-entry">

### createPointer {#createPointer}

```js
Pointers.createPointer(type, properties)
```

<div class="api-text" v-pre><p>Creates a new ray, parabola, or stylus pointer. The pointer can have a wide range of behaviors depending on the properties specified. For example, a ray pointer may be a static ray pointer, a mouse ray pointer, or joint ray pointer. </p>
<p><strong>Warning:</strong> Pointers created using this method currently always intersect at least visible and collidable things but this may not always be the case.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td><a href="PickType">PickType</a></td><td><p>The type of pointer to create. Cannot be <a href="PickType">PickType.Collision</a>.</p></td></tr>
<tr><td><code>properties</code></td><td><a href="#RayPointerProperties">Pointers.RayPointerProperties</a> | <a href="#ParabolaPointerProperties">Pointers.ParabolaPointerProperties</a> | <a href="#StylusPointerProperties">Pointers.StylusPointerProperties</a></td><td><p>The properties of the pointer, per the pointer <code>type</code>, including the properties of the underlying pick that the pointer uses to do its picking.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The ID of the pointer if successfully created, otherwise <code>0</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a ray pointer on the left hand that changes color when it's intersecting and that triggers events.<br> Note: Stop controllerScripts.js from running to disable similar behavior from it.</p></div>

```js
var intersectEnd = {
    type: "sphere",
    dimensions: { x: 0.2, y: 0.2, z: 0.2 },
    solid: true,
    color: { red: 0, green: 255, blue: 0 },
    ignorePickIntersection: true
};
var intersectedPath = {
    type: "line3d",
    color: { red: 0, green: 255, blue: 0 },
};
var searchEnd = {
    type: "sphere",
    dimensions: { x: 0.2, y: 0.2, z: 0.2 },
    solid: true,
    color: { red: 255, green: 0, blue: 0 },
    ignorePickIntersection: true
};
var searchPath = {
    type: "line3d",
    color: { red: 255, green: 0, blue: 0 },
};

var renderStates = [{ name: "example", path: intersectedPath, end: intersectEnd }];
var defaultRenderStates = [{ name: "example", distance: 20.0, path: searchPath, end: searchEnd }];

// Create the pointer.
var rayPointer = Pointers.createPointer(PickType.Ray, {
    joint: "_CAMERA_RELATIVE_CONTROLLER_LEFTHAND",
    filter: Picks.PICK_LOCAL_ENTITIES | Picks.PICK_DOMAIN_ENTITIES | Picks.PICK_INCLUDE_NONCOLLIDABLE,
    renderStates: renderStates,
    defaultRenderStates: defaultRenderStates,
    hover: true,  // Generate hover events.
    triggers: [
        { action: Controller.Standard.LTClick, button: "Primary" },  // Generate mouse events.
        { action: Controller.Standard.LTClick, button: "Focus" }  // Focus on web entities.
    ],
    enabled: true
});
Pointers.setRenderState(rayPointer, "example");

// Hover events.
Entities.hoverEnterEntity.connect(function (entityID, event) {
    print("hoverEnterEntity() : " + entityID);
});
Entities.hoverLeaveEntity.connect(function (entityID, event) {
    print("hoverLeaveEntity() : " + entityID);
});

// Mouse events.
Entities.mousePressOnEntity.connect(function (entityID, event) {
    print("mousePressOnEntity() : " + entityID + " , " + event.button);
});
Entities.mouseReleaseOnEntity.connect(function (entityID, event) {
    print("mouseReleaseOnEntity() : " + entityID + " , " + event.button);
});

// Tidy up.
Script.scriptEnding.connect(function () {
    Pointers.removePointer(rayPointer);
});
```

</div>

<div class="api-entry">

### disablePointer {#disablePointer}

```js
Pointers.disablePointer(id)
```

<div class="api-text" v-pre><p>Disables and hides a pointer. Disabled pointers do not update their pick results or generate events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### editRenderState {#editRenderState}

```js
Pointers.editRenderState(id, renderState, properties)
```

<div class="api-text" v-pre><p>Edits a render state of a <a href="#RayPointerProperties">ray</a> or <a href="#ParabolaPointerProperties">parabola</a> pointer, to change its visual appearance for the state when the pointer is intersecting something. </p>
<p><strong>Note:</strong> You can only edit the properties of the existing parts of the pointer; you cannot change the type of any part.</p>
 <p><strong>Note:</strong> You cannot use this method to change the appearance of a default render state.</p>
 <p><strong>Note:</strong> Not able to be used with stylus pointers.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>renderState</code></td><td>string</td><td><p>The name of the render state to edit.</p></td></tr>
<tr><td><code>properties</code></td><td><a href="#RayPointerRenderState">Pointers.RayPointerRenderState</a> | <a href="#ParabolaPointerRenderState">Pointers.ParabolaPointerRenderState</a></td><td><p>The new properties for the render state. Only the overlay properties to change need be specified.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Change the dimensions of a ray pointer's intersecting end overlay.</p></div>

```js
var intersectEnd = {
    type: "sphere",
    dimensions: { x: 0.2, y: 0.2, z: 0.2 },
    solid: true,
    color: { red: 0, green: 255, blue: 0 },
    ignorePickIntersection: true
};
var intersectedPath = {
    type: "line3d",
    color: { red: 0, green: 255, blue: 0 },
};
var searchEnd = {
    type: "sphere",
    dimensions: { x: 0.2, y: 0.2, z: 0.2 },
    solid: true,
    color: { red: 255, green: 0, blue: 0 },
    ignorePickIntersection: true
};
var searchPath = {
    type: "line3d",
    color: { red: 255, green: 0, blue: 0 },
};

var renderStates = [ { name: "example", path: intersectedPath, end: intersectEnd } ];
var defaultRenderStates = [ { name: "example", distance: 20.0, path: searchPath, end: searchEnd } ];

// Create the pointer.
var rayPointer = Pointers.createPointer(PickType.Ray, {
    joint: "_CAMERA_RELATIVE_CONTROLLER_LEFTHAND",
    filter: Picks.PICK_LOCAL_ENTITIES | Picks.PICK_DOMAIN_ENTITIES | Picks.PICK_INCLUDE_NONCOLLIDABLE,
    renderStates: renderStates,
    defaultRenderStates: defaultRenderStates,
    enabled: true
});
Pointers.setRenderState(rayPointer, "example");

// Edit the intersecting render state.
Script.setTimeout(function () {
    print("Edit render state");
    Pointers.editRenderState(rayPointer, "example", {
        end: { dimensions: { x: 0.5, y: 0.5, z: 0.5 } }
    });
}, 10000);

Script.setTimeout(function () {
    print("Edit render state");
    Pointers.editRenderState(rayPointer, "example", {
        end: { dimensions: { x: 0.2, y: 0.2, z: 0.2 } }
    });
}, 15000);

// Tidy up.
Script.scriptEnding.connect(function () {
    Pointers.removePointer(rayPointer);
});
```

</div>

<div class="api-entry">

### enablePointer {#enablePointer}

```js
Pointers.enablePointer(id)
```

<div class="api-text" v-pre><p>Enables and shows a pointer. Enabled pointers update their pick results and generate events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getPointerProperties {#getPointerProperties}

```js
Pointers.getPointerProperties(id)
```

<div class="api-text" v-pre><p>Gets information about a pointer.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#RayPointerProperties">Pointers.RayPointerProperties</a> | <a href="#ParabolaPointerProperties">Pointers.ParabolaPointerProperties</a> | object <p>The <code>renderStates</code> and <code>defaultRenderStates</code> for ray and parabola pointers, <code>{}</code> for stylus pointers.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the properties of a parabola pointer.</p></div>

```js
var intersectEnd = {
    type: "sphere",
    dimensions: { x: 0.2, y: 0.2, z: 0.2 },
    solid: true,
    color: { red: 0, green: 255, blue: 0 },
    ignorePickIntersection: true
};
var intersectedPath = {
    color: { red: 0, green: 255, blue: 0 },
};
var searchEnd = {
    type: "sphere",
    dimensions: { x: 0.2, y: 0.2, z: 0.2 },
    solid: true,
    color: { red: 255, green: 0, blue: 0 },
    ignorePickIntersection: true
};
var searchPath = {
    color: { red: 255, green: 0, blue: 0 },
};

var renderStates = [{ name: "example", path: intersectedPath, end: intersectEnd }];
var defaultRenderStates = [{ name: "example", distance: 20.0, path: searchPath, end: searchEnd }];

// Create the pointer.
var parabolaPointer = Pointers.createPointer(PickType.Parabola, {
    joint: "_CAMERA_RELATIVE_CONTROLLER_LEFTHAND",
    filter: Picks.PICK_LOCAL_ENTITIES | Picks.PICK_DOMAIN_ENTITIES | Picks.PICK_INCLUDE_NONCOLLIDABLE,
    renderStates: renderStates,
    defaultRenderStates: defaultRenderStates,
    enabled: true
});
Pointers.setRenderState(parabolaPointer, "example");

// Report the pointer properties.
Script.setTimeout(function () {
    var properties = Pointers.getPointerProperties(parabolaPointer);
    print("Pointer properties:" + JSON.stringify(properties));
}, 500);

// Tidy up.
Script.scriptEnding.connect(function () {
    Pointers.removePointer(parabolaPointer);
});
```

</div>

<div class="api-entry">

### getPointers {#getPointers}

```js
Pointers.getPointers()
```

<div class="api-text" v-pre><p>Gets all pointers which currently exist, including disabled pointers.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;number&gt; <p>pointers - The IDs of the pointers.</p></div>

</div>

<div class="api-entry">

### getPointerScriptParameters {#getPointerScriptParameters}

```js
Pointers.getPointerScriptParameters(id)
```

<div class="api-text" v-pre><p>Gets the parameters that were passed in to <a href="#createPointer"><code>Pointers.createPointer</code></a> to create the pointer when the pointer was created through a script. </p>
<p><strong>Note:</strong> These properties do not reflect the current state of the pointer. To get the current state of the pointer, see <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#RayPointerProperties">Pointers.RayPointerProperties</a> | <a href="#ParabolaPointerProperties">Pointers.ParabolaPointerProperties</a> | <a href="#StylusPointerProperties">Pointers.StylusPointerProperties</a> <p>Script-provided properties, per the pointer <code>type</code>.</p></div>

</div>

<div class="api-entry">

### getPrevPickResult {#getPrevPickResult}

```js
Pointers.getPrevPickResult(id)
```

<div class="api-text" v-pre><p>Gets the most recent intersection of a pointer. A pointer continues to be updated ready to return a result, as long as it is enabled, regardless of the render state.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#RayPickResult">RayPickResult</a> | <a href="globals#ParabolaPickResult">ParabolaPickResult</a> | <a href="globals#StylusPickResult">StylusPickResult</a> <p>The most recent intersection of the pointer.</p></div>

</div>

<div class="api-entry">

### isLeftHand {#isLeftHand}

```js
Pointers.isLeftHand(id)
```

<div class="api-text" v-pre><p>Checks if a pointer is associated with the left hand: a ray or parabola pointer with <code>joint</code> property set to <code>"_CONTROLLER_LEFTHAND"</code> or <code>"_CAMERA_RELATIVE_CONTROLLER_LEFTHAND"</code>, or a stylus pointer with <code>hand</code> property set to <code>0</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pointer is associated with the left hand, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### isMouse {#isMouse}

```js
Pointers.isMouse(id)
```

<div class="api-text" v-pre><p>Checks if a pointer is associated with the system mouse: a ray or parabola pointer with <code>joint</code> property set to <code>"Mouse"</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pointer is associated with the system mouse, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### isPointerEnabled {#isPointerEnabled}

```js
Pointers.isPointerEnabled(id)
```

<div class="api-text" v-pre><p>Gets the enabled status of a pointer. Enabled pointers update their pick results and generate events.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>enabled - Whether or not the pointer is enabled.</p></div>

</div>

<div class="api-entry">

### isRightHand {#isRightHand}

```js
Pointers.isRightHand(id)
```

<div class="api-text" v-pre><p>Checks if a pointer is associated with the right hand: a ray or parabola pointer with <code>joint</code> property set to <code>"_CONTROLLER_RIGHTHAND"</code> or <code>"_CAMERA_RELATIVE_CONTROLLER_RIGHTHAND"</code>, or a stylus pointer with <code>hand</code> property set to <code>1</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pointer is associated with the right hand, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### removePointer {#removePointer}

```js
Pointers.removePointer(id)
```

<div class="api-text" v-pre><p>Removes (deletes) a pointer.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setIgnoreItems {#setIgnoreItems}

```js
Pointers.setIgnoreItems(id, ignoreItems)
```

<div class="api-text" v-pre><p>Sets a list of entity and avatar IDs that a pointer should ignore during intersection. </p>
<p><strong>Note:</strong> Not used by stylus pointers.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>ignoreItems</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>A list of IDs to ignore.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setIncludeItems {#setIncludeItems}

```js
Pointers.setIncludeItems(id, includeItems)
```

<div class="api-text" v-pre><p>Sets a list of entity and avatar IDs that a pointer should include during intersection, instead of intersecting with everything. </p>
<p><strong>Note:</strong> Stylus pointers only intersect with items in their include list.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>includeItems</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>A list of IDs to include.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setLength {#setLength}

```js
Pointers.setLength(id, length)
```

<div class="api-text" v-pre><p>Sets the length of a pointer. </p>
<p><strong>Note:</strong> Not used by stylus pointers.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>length</code></td><td>number</td><td><p>The desired length of the pointer.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setLockEndUUID {#setLockEndUUID}

```js
Pointers.setLockEndUUID(id, targetID, isAvatar, offset?)
```

<div class="api-text" v-pre><p>Locks a pointer onto a specific entity or avatar. </p>
<p><strong>Note:</strong> Not used by stylus pointers.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>targetID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity or avatar to lock the pointer on to.</p></td></tr>
<tr><td><code>isAvatar</code></td><td>boolean</td><td><p><code>true</code> if the target is an avatar, <code>false</code> if it is an entity.</p></td></tr>
<tr><td><code>offset</code> <em>optional</em></td><td><a href="Mat4">Mat4</a></td><td><p>The offset of the target point from the center of the target item. If not specified, the pointer locks on to the center of the target item.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setPrecisionPicking {#setPrecisionPicking}

```js
Pointers.setPrecisionPicking(id, precisionPicking)
```

<div class="api-text" v-pre><p>Sets whether or not a pointer should use precision picking, i.e., whether it should pick against precise meshes or coarse meshes. This has the same effect as using the <code>PICK_PRECISE</code> or <code>PICK_COARSE</code> filter flags.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>precisionPicking</code></td><td>boolean</td><td><p><code>true</code> to use precision picking, <code>false</code> to use coarse picking.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setRenderState {#setRenderState}

```js
Pointers.setRenderState(id, renderState)
```

<div class="api-text" v-pre><p>Sets the render state of a pointer, to change its visual appearance and possibly disable or enable it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pointer.</p></td></tr>
<tr><td><code>renderState</code></td><td>string</td><td><p>The name of the render state to set the pointer to.</p>
 <p>For <a href="#RayPointerProperties">ray</a> and <a href="#ParabolaPointerProperties">parabola</a> pointers, this may be:</p>
 <ul> <li>The name of one of the render states set in the pointer's properties.</li>
 <li><code>""</code>, to hide the pointer and disable emitting of events.</li>
 </ul>
 <p>For <a href="#StylusPointerProperties">stylus</a> pointers, the values may be:</p>
 <ul> <li><code>"events on"</code>, to render and emit events (the default).</li>
 <li><code>"events off"</code>, to render but don't emit events.</li>
 <li><code>"disabled"</code>, to not render and not emit events.</li>
 </ul></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Switch a ray pointer between having a path and not having a path.</p></div>

```js
var intersectEnd = {
    type: "sphere",
    dimensions: { x: 0.2, y: 0.2, z: 0.2 },
    solid: true,
    color: { red: 0, green: 255, blue: 0 },
    ignorePickIntersection: true
};
var intersectedPath = {
    type: "line3d",
    color: { red: 0, green: 255, blue: 0 },
};
var searchEnd = {
    type: "sphere",
    dimensions: { x: 0.2, y: 0.2, z: 0.2 },
    solid: true,
    color: { red: 255, green: 0, blue: 0 },
    ignorePickIntersection: true
};
var searchPath = {
    type: "line3d",
    color: { red: 255, green: 0, blue: 0 },
};

var renderStates = [
    { name: "examplePath", path: intersectedPath, end: intersectEnd },
    { name: "exampleNoPath", end: intersectEnd }
];
var defaultRenderStates = [
    { name: "examplePath", distance: 20.0, path: searchPath, end: searchEnd },
    { name: "exampleNoPath", distance: 20.0, end: searchEnd }
];

// Create the pointer.
var rayPointer = Pointers.createPointer(PickType.Ray, {
    joint: "_CAMERA_RELATIVE_CONTROLLER_LEFTHAND",
    filter: Picks.PICK_LOCAL_ENTITIES | Picks.PICK_DOMAIN_ENTITIES | Picks.PICK_INCLUDE_NONCOLLIDABLE,
    renderStates: renderStates,
    defaultRenderStates: defaultRenderStates,
    enabled: true
});
Pointers.setRenderState(rayPointer, "examplePath");

// Change states.
Script.setTimeout(function () {
    print("Without path");
    Pointers.setRenderState(rayPointer, "exampleNoPath");
}, 10000);

Script.setTimeout(function () {
    print("With path");
    Pointers.setRenderState(rayPointer, "examplePath");
}, 15000);

// Tidy up.
Script.scriptEnding.connect(function () {
    Pointers.removePointer(rayPointer);
});
```

</div>

## Types {#types}

<div class="api-entry">

### DefaultParabolaPointerRenderState {#DefaultParabolaPointerRenderState}

<div class="api-text" v-pre><p>Properties that define the visual appearance of a parabola pointer when the pointer is not intersecting something. These are properties of <a href="#ParabolaPointerRenderState"><code>Pointers.ParabolaPointerRenderState</code></a> but with an additional property.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>distance</code></td><td>number</td><td><p>The distance along the parabola at which to render the end of the parabola pointer.</p></td></tr>
</tbody></table></div>
<div class="api-see" v-pre><strong>See also:</strong> <a href="#ParabolaPointerRenderState"><code>Pointers.ParabolaPointerRenderState</code></a> for the remainder of the properties.</div>

</div>

<div class="api-entry">

### DefaultRayPointerRenderState {#DefaultRayPointerRenderState}

<div class="api-text" v-pre><p>Properties that define the visual appearance of a ray pointer when the pointer is not intersecting something. These are the properties of <a href="#RayPointerRenderState"><code>Pointers.RayPointerRenderState</code></a> but with an additional property.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>distance</code></td><td>number</td><td><p>The distance at which to render the end of the ray pointer.</p></td></tr>
</tbody></table></div>
<div class="api-see" v-pre><strong>See also:</strong> <a href="#RayPointerRenderState"><code>Pointers.RayPointerRenderState</code></a> for the remainder of the properties.</div>

</div>

<div class="api-entry">

### ParabolaPointerPath {#ParabolaPointerPath}

<div class="api-text" v-pre><p>The visual appearance of the parabolic path.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>color</code> <em>optional</em></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the parabola.</p></td></tr>
<tr><td><code>alpha</code> <em>optional</em></td><td>number</td><td><code>1.0</code></td><td><p>The opacity of the parabola, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>width</code> <em>optional</em></td><td>number</td><td><code>0.01</code></td><td><p>The width of the parabola, in meters.</p></td></tr>
<tr><td><code>isVisibleInSecondaryCamera</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the parabola is rendered in the secondary camera, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>drawInFront</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the parabola is rendered in front of objects in the world, but behind the HUD, <code>false</code> if it is occluded by objects in front of it.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ParabolaPointerProperties {#ParabolaPointerProperties}

<div class="api-text" v-pre><p>The properties of a parabola pointer. These include the properties from the underlying parabola pick that the pointer uses.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>faceAvatar</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay rendered at the end of the ray rotates about the world y-axis to always face the avatar; <code>false</code> if it maintains its world orientation.</p></td></tr>
<tr><td><code>centerEndY</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the overlay rendered at the end of the ray is centered on the ray end; <code>false</code> if the overlay is positioned against the surface if <code>followNormal</code> is <code>true</code>, or above the ray end if <code>followNormal</code> is <code>false</code>.</p></td></tr>
<tr><td><code>lockEnd</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the end of the ray is locked to the center of the object at which the ray is pointing; <code>false</code> if the end of the ray is at the intersected surface.</p></td></tr>
<tr><td><code>distanceScaleEnd</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the dimensions of the overlay at the end of the ray scale linearly with distance; <code>false</code> if they aren't.</p></td></tr>
<tr><td><code>scaleWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the width of the ray's path and the size of the start and end overlays scale linearly with the pointer parent's scale; <code>false</code> if they don't scale.</p></td></tr>
<tr><td><code>scaleWithAvatar</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>A synonym for <code>scalewithParent</code>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>followNormal</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay rendered at the end of the ray rotates to follow the normal of the surface if one is intersected; <code>false</code> if it doesn't.</p></td></tr>
<tr><td><code>followNormalStrength</code> <em>optional</em></td><td>number</td><td><code>0.0</code></td><td><p>How quickly the overlay rendered at the end of the ray rotates to follow the normal of an intersected surface. If <code>0</code> or <code>1</code>, the overlay rotation follows instantaneously; for other values, the larger the value the more quickly the rotation follows.</p></td></tr>
<tr><td><code>renderStates</code> <em>optional</em></td><td>Array&lt;<a href="#ParabolaPointerRenderState">Pointers.ParabolaPointerRenderState</a>&gt; | Object&lt;string, <a href="#ParabolaPointerRenderState">Pointers.ParabolaPointerRenderState</a>&gt;</td><td></td><td><p>A set of visual states that can be switched among using <a href="#setRenderState"><code>Pointers.setRenderState</code></a>. These define the visual appearance of the pointer when it is intersecting something.</p>
 <p>When setting using <a href="#createPointer"><code>Pointers.createPointer</code></a>, an array of <a href="#ParabolaPointerRenderState">ParabolaPointerRenderState</a> values.</p>
 <p>When getting using <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>, an object mapping render state names to <a href="#ParabolaPointerRenderState">ParabolaPointerRenderState</a> values.</p></td></tr>
<tr><td><code>defaultRenderStates</code> <em>optional</em></td><td>Array&lt;<a href="#DefaultParabolaPointerRenderState">Pointers.DefaultParabolaPointerRenderState</a>&gt; | Object&lt;string, <a href="#DefaultParabolaPointerRenderState">Pointers.DefaultParabolaPointerRenderState</a>&gt;</td><td></td><td><p>A set of visual states that can be switched among using <a href="#setRenderState"><code>Pointers.setRenderState</code></a>. These define the visual appearance of the pointer when it is not intersecting something.</p>
 <p>When setting using <a href="#createPointer"><code>Pointers.createPointer</code></a>, an array of <a href="#DefaultParabolaPointerRenderState">DefaultParabolaPointerRenderState</a> values.</p>
 <p>When getting using <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>, an object mapping render state names to <a href="#DefaultParabolaPointerRenderState">DefaultParabolaPointerRenderState</a> values.</p></td></tr>
<tr><td><code>hover</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the pointer generates <a href="Entities"><code>Entities</code></a> hover events, <code>false</code> if it doesn't.</p></td></tr>
<tr><td><code>triggers</code> <em>optional</em></td><td>Array&lt;<a href="#Trigger">Pointers.Trigger</a>&gt;</td><td><code>[]</code></td><td><p>A list of ways that a <a href="Controller"><code>Controller</code></a> action or function should trigger events on the entity or overlay currently intersected.</p></td></tr>
<tr><td><code>pointerType</code></td><td><a href="PickType">PickType</a></td><td></td><td><p>The type of pointer returned from <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a> or <a href="#getPointerScriptParameters"><code>Pointers.getPointerScriptParameters</code></a>. A parabola pointer's type is <a href="PickType">PickType.Parabola</a>.</p></td></tr>
<tr><td><code>pickID</code> <em>optional</em></td><td>number</td><td></td><td><p>The ID of the pick created alongside this pointer, returned from <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>.</p></td></tr>
</tbody></table></div>
<div class="api-see" v-pre><strong>See also:</strong> <a href="Picks#ParabolaPickProperties"><code>Picks.ParabolaPickProperties</code></a> for additional properties from the underlying parabola pick.</div>

</div>

<div class="api-entry">

### ParabolaPointerRenderState {#ParabolaPointerRenderState}

<div class="api-text" v-pre><p>Properties that define the visual appearance of a parabola pointer when the pointer is intersecting something.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>When creating using <a href="#createPointer"><code>Pointers.createPointer</code></a>, the name of the render state.</p></td></tr>
<tr><td><code>start</code> <em>optional</em></td><td><a href="Overlays#OverlayProperties">Overlays.OverlayProperties</a> | <a href="Uuid">Uuid</a></td><td><p>When creating or editing using <a href="#createPointer"><code>Pointers.createPointer</code></a> or <a href="#editRenderState"><code>Pointers.editRenderState</code></a>, the properties of an overlay to render at the start of the parabola pointer. The <code>type</code> property must be specified.</p>
 <p>When getting using <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>, the ID of the overlay rendered at the start of the parabola; <code>null</code> if there is no overlay.</p></td></tr>
<tr><td><code>path</code> <em>optional</em></td><td><a href="#ParabolaPointerPath">Pointers.ParabolaPointerPath</a> | <a href="Uuid">Uuid</a></td><td><p>When creating or editing using <a href="#createPointer"><code>Pointers.createPointer</code></a> or <a href="#editRenderState"><code>Pointers.editRenderState</code></a>, the properties of the rendered path of the parabola pointer.</p>
 <p>This property is not provided when getting using <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>.</p></td></tr>
<tr><td><code>end</code> <em>optional</em></td><td><a href="Overlays#OverlayProperties">Overlays.OverlayProperties</a> | <a href="Uuid">Uuid</a></td><td><p>When creating or editing using <a href="#createPointer"><code>Pointers.createPointer</code></a> or <a href="#editRenderState"><code>Pointers.editRenderState</code></a>, the properties of an overlay to render at the end of the ray pointer. The <code>type</code> property must be specified.</p>
 <p>When getting using <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>, the ID of the overlay rendered at the end of the parabola; <code>null</code> if there is no overlay.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### RayPointerProperties {#RayPointerProperties}

<div class="api-text" v-pre><p>The properties of a ray pointer. These include the properties from the underlying ray pick that the pointer uses.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>faceAvatar</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay rendered at the end of the ray rotates about the world y-axis to always face the avatar; <code>false</code> if it maintains its world orientation.</p></td></tr>
<tr><td><code>centerEndY</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the overlay rendered at the end of the ray is centered on the ray end; <code>false</code> if the overlay is positioned against the surface if <code>followNormal</code> is <code>true</code>, or above the ray end if <code>followNormal</code> is <code>false</code>.</p></td></tr>
<tr><td><code>lockEnd</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the end of the ray is locked to the center of the object at which the ray is pointing; <code>false</code> if the end of the ray is at the intersected surface.</p></td></tr>
<tr><td><code>distanceScaleEnd</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the dimensions of the overlay at the end of the ray scale linearly with distance; <code>false</code> if they aren't.</p></td></tr>
<tr><td><code>scaleWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the width of the ray's path and the size of the start and end overlays scale linearly with the pointer parent's scale; <code>false</code> if they don't scale.</p></td></tr>
<tr><td><code>scaleWithAvatar</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>A synonym for <code>scalewithParent</code>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>followNormal</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the overlay rendered at the end of the ray rotates to follow the normal of the surface if one is intersected; <code>false</code> if it doesn't.</p></td></tr>
<tr><td><code>followNormalStrength</code> <em>optional</em></td><td>number</td><td><code>0.0</code></td><td><p>How quickly the overlay rendered at the end of the ray rotates to follow the normal of an intersected surface. If <code>0</code> or <code>1</code>, the overlay rotation follows instantaneously; for other values, the larger the value the more quickly the rotation follows.</p></td></tr>
<tr><td><code>renderStates</code> <em>optional</em></td><td>Array&lt;<a href="#RayPointerRenderState">Pointers.RayPointerRenderState</a>&gt; | Object&lt;string, <a href="#RayPointerRenderState">Pointers.RayPointerRenderState</a>&gt;</td><td></td><td><p>A set of visual states that can be switched among using <a href="#setRenderState"><code>Pointers.setRenderState</code></a>. These define the visual appearance of the pointer when it is intersecting something.</p>
 <p>When setting using <a href="#createPointer"><code>Pointers.createPointer</code></a>, an array of <a href="#RayPointerRenderState">RayPointerRenderState</a> values.</p>
 <p>When getting using <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>, an object mapping render state names to <a href="#RayPointerRenderState">RayPointerRenderState</a> values.</p></td></tr>
<tr><td><code>defaultRenderStates</code> <em>optional</em></td><td>Array&lt;<a href="#DefaultRayPointerRenderState">Pointers.DefaultRayPointerRenderState</a>&gt; | Object&lt;string, <a href="#DefaultRayPointerRenderState">Pointers.DefaultRayPointerRenderState</a>&gt;</td><td></td><td><p>A set of visual states that can be switched among using <a href="#setRenderState"><code>Pointers.setRenderState</code></a>. These define the visual appearance of the pointer when it is not intersecting something.</p>
 <p>When setting using <a href="#createPointer"><code>Pointers.createPointer</code></a>, an array of <a href="#DefaultRayPointerRenderState">DefaultRayPointerRenderState</a> values.</p>
 <p>When getting using <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>, an object mapping render state names to <a href="#DefaultRayPointerRenderState">DefaultRayPointerRenderState</a> values.</p></td></tr>
<tr><td><code>hover</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the pointer generates <a href="Entities"><code>Entities</code></a> hover events, <code>false</code> if it doesn't.</p></td></tr>
<tr><td><code>triggers</code> <em>optional</em></td><td>Array&lt;<a href="#Trigger">Pointers.Trigger</a>&gt;</td><td><code>[]</code></td><td><p>A list of ways that a <a href="Controller"><code>Controller</code></a> action or function should trigger events on the entity or overlay currently intersected.</p></td></tr>
<tr><td><code>pointerType</code></td><td><a href="PickType">PickType</a></td><td></td><td><p>The type of pointer returned from <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a> or <a href="#getPointerScriptParameters"><code>Pointers.getPointerScriptParameters</code></a>. A laser pointer's type is <a href="PickType">PickType.Ray</a>.</p></td></tr>
<tr><td><code>pickID</code> <em>optional</em></td><td>number</td><td></td><td><p>The ID of the pick created alongside this pointer, returned from <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>.</p></td></tr>
</tbody></table></div>
<div class="api-see" v-pre><strong>See also:</strong> <a href="Picks#RayPickProperties"><code>Picks.RayPickProperties</code></a> for additional properties from the underlying ray pick.</div>

</div>

<div class="api-entry">

### RayPointerRenderState {#RayPointerRenderState}

<div class="api-text" v-pre><p>Properties that define the visual appearance of a ray pointer when the pointer is intersecting something.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>When creating using <a href="#createPointer"><code>Pointers.createPointer</code></a>, the name of the render state.</p></td></tr>
<tr><td><code>start</code> <em>optional</em></td><td><a href="Overlays#OverlayProperties">Overlays.OverlayProperties</a> | <a href="Uuid">Uuid</a></td><td><p>When creating or editing using <a href="#createPointer"><code>Pointers.createPointer</code></a> or <a href="#editRenderState"><code>Pointers.editRenderState</code></a>, the properties of an overlay to render at the start of the ray pointer. The <code>type</code> property must be specified.</p>
 <p>When getting using <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>, the ID of the overlay rendered at the start of the ray; <code>null</code> if there is no overlay.</p></td></tr>
<tr><td><code>path</code> <em>optional</em></td><td><a href="Overlays#OverlayProperties">Overlays.OverlayProperties</a> | <a href="Uuid">Uuid</a></td><td><p>When creating or editing using <a href="#createPointer"><code>Pointers.createPointer</code></a> or <a href="#editRenderState"><code>Pointers.editRenderState</code></a>, the properties of the overlay rendered for the path of the ray pointer. The <code>type</code> property must be specified and be <code>"line3d"</code>.</p>
 <p>When getting using <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>, the ID of the overlay rendered for the path of the ray; <code>null</code> if there is no overlay.</p></td></tr>
<tr><td><code>end</code> <em>optional</em></td><td><a href="Overlays#OverlayProperties">Overlays.OverlayProperties</a> | <a href="Uuid">Uuid</a></td><td><p>When creating or editing using <a href="#createPointer"><code>Pointers.createPointer</code></a> or <a href="#editRenderState"><code>Pointers.editRenderState</code></a>, the properties of an overlay to render at the end of the ray pointer. The <code>type</code> property must be specified.</p>
 <p>When getting using <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>, the ID of the overlay rendered at the end of the ray; <code>null</code> if there is no overlay.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### StylusPointerModel {#StylusPointerModel}

<div class="api-text" v-pre><p>The properties of a stylus pointer model.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code> <em>optional</em></td><td>string</td><td><p>The url of a model to use for the stylus, to override the default stylus mode.</p></td></tr>
<tr><td><code>dimensions</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td><p>The dimensions of the stylus, to override the default stylus dimensions.</p></td></tr>
<tr><td><code>positionOffset</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td><p>The position offset of the model from the stylus tip, to override the default position offset.</p></td></tr>
<tr><td><code>rotationOffset</code> <em>optional</em></td><td><a href="Quat">Quat</a></td><td><p>The rotation offset of the model from the hand, to override the default rotation offset.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### StylusPointerProperties {#StylusPointerProperties}

<div class="api-text" v-pre><p>The properties of a stylus pointer. These include the properties from the underlying stylus pick that the pointer uses.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>model</code> <em>optional</em></td><td><a href="#StylusPointerModel">Pointers.StylusPointerModel</a></td><td></td><td><p>Override some or all of the default stylus model properties.</p></td></tr>
<tr><td><code>hover</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the pointer generates <a href="Entities"><code>Entities</code></a> hover events, <code>false</code> if it doesn't.</p></td></tr>
<tr><td><code>pointerType</code></td><td><a href="PickType">PickType</a></td><td></td><td><p>The type of the stylus pointer returned from <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a> or <a href="#getPointerScriptParameters"><code>Pointers.getPointerScriptParameters</code></a>. A stylus pointer's type is <a href="PickType">PickType.Stylus</a>.</p></td></tr>
<tr><td><code>pickID</code> <em>optional</em></td><td>number</td><td></td><td><p>The ID of the pick created alongside this pointer, returned from <a href="#getPointerProperties"><code>Pointers.getPointerProperties</code></a>.</p></td></tr>
</tbody></table></div>
<div class="api-see" v-pre><strong>See also:</strong> <a href="Picks#StylusPickProperties"><code>Picks.StylusPickProperties</code></a> for additional properties from the underlying stylus pick.</div>

</div>

<div class="api-entry">

### Trigger {#Trigger}

<div class="api-text" v-pre><p>Specifies that a <a href="Controller"><code>Controller</code></a> action or function should trigger events on the entity or overlay currently intersected by a <a href="#RayPointerProperties">Ray</a> or <a href="#ParabolaPointerProperties">Parabola</a> pointer.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>action</code></td><td><a href="Controller#Standard">Controller.Standard</a> | <a href="Controller#Actions">Controller.Actions</a> | function</td><td><p>The controller output or function that triggers the events on the entity or overlay. If a function, it must return a number <code>&gt;= 1.0</code> to start the action and <code>&lt; 1.0</code> to terminate the action.</p></td></tr>
<tr><td><code>button</code></td><td>string</td><td><p>Which button to trigger: </p>
<ul> <li><code>"Primary"</code>, <code>"Secondary"</code>, and <code>"Tertiary"</code> cause <a href="Entities"><code>Entities</code></a> and <a href="Overlays"><code>Overlays</code></a> mouse pointer events. Other button names also cause mouse events but the <code>button</code> property in the event will be <code>"None"</code>.</li>
 <li><code>"Focus"</code> will try to give focus to the entity or overlay which the pointer is intersecting.</li>
 </ul>
<p></p></td></tr>
</tbody></table></div>

</div>
