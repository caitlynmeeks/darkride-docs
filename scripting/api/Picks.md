---
title: "Picks"
description: "The Picks API lets you create and manage objects for repeatedly calculating intersections."
draft: true
---

# Picks

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Picks</code> API lets you create and manage objects for repeatedly calculating intersections.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>PICK_DOMAIN_ENTITIES</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include domain entities when intersecting. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_AVATAR_ENTITIES</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include avatar entities when intersecting. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_LOCAL_ENTITIES</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include local entities when intersecting. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_AVATARS</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include avatars when intersecting. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_HUD</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include the HUD surface when intersecting in HMD mode. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_ENTITIES</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include domain and avatar entities when intersecting. <em>Read-only.</em> </p>
<p class="important">Deprecated: This property is deprecated and will be removed. Use <code>PICK_DOMAIN_ENTITIES | PICK_AVATAR_ENTITIES</code> instead.</p>
<p></p></td></tr>
<tr><td><code>PICK_OVERLAYS</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include local entities when intersecting. <em>Read-only.</em> </p>
<p class="important">Deprecated: This property is deprecated and will be removed. Use <code>PICK_LOCAL_ENTITIES</code> instead.</p>
<p></p></td></tr>
<tr><td><code>PICK_INCLUDE_VISIBLE</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include visible objects when intersecting. <em>Read-only.</em> </p>
<p><strong>Warning:</strong> Is currently always enabled by default but may not be in the future.</p>
<p></p></td></tr>
<tr><td><code>PICK_INCLUDE_INVISIBLE</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include invisible objects when intersecting. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_INCLUDE_COLLIDABLE</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include collidable objects when intersecting. <em>Read-only.</em> </p>
<p><strong>Warning:</strong> Is currently always enabled by default but may not be in the future.</p>
<p></p></td></tr>
<tr><td><code>PICK_INCLUDE_NONCOLLIDABLE</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Include non-collidable objects when intersecting. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_PRECISE</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Pick against exact meshes. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_COARSE</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Pick against coarse meshes. <em>Read-only.</em></p></td></tr>
<tr><td><code>PICK_ALL_INTERSECTIONS</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>If set, returns all intersections instead of just the closest. <em>Read-only.</em> </p>
<p><strong>Warning:</strong> Not yet implemented.</p>
<p></p></td></tr>
<tr><td><code>PICK_BYPASS_IGNORE</code></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><p>Allows pick to intersect entities even when their <code>ignorePickIntersection</code> property value is <code>true</code>. For debug purposes. <em>Read-only.</em></p></td></tr>
<tr><td><code>INTERSECTED_NONE</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected nothing. <em>Read-only.</em></p></td></tr>
<tr><td><code>INTERSECTED_ENTITY</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected an entity. <em>Read-only.</em></p></td></tr>
<tr><td><code>INTERSECTED_LOCAL_ENTITY</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected a local entity. <em>Read-only.</em></p></td></tr>
<tr><td><code>INTERSECTED_OVERLAY</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected a local entity. (3D overlays no longer exist.) <em>Read-only.</em> </p>
<p class="important">Deprecated: This property is deprecated and will be removed. Use <code>INTERSECTED_LOCAL_ENTITY</code> instead.</p>
<p></p></td></tr>
<tr><td><code>INTERSECTED_AVATAR</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected an avatar. <em>Read-only.</em></p></td></tr>
<tr><td><code>INTERSECTED_HUD</code></td><td><a href="globals#IntersectionType">IntersectionType</a></td><td><p>Intersected the HUD surface. <em>Read-only.</em></p></td></tr>
<tr><td><code>perFrameTimeBudget</code></td><td>number</td><td><p>The maximum time, in microseconds, to spend per frame updating pick results.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

### createPick {#createPick}

```js
Picks.createPick(type, properties)
```

<div class="api-text" v-pre><p>Creates a new pick. Different <a href="PickType"><code>PickType</code></a>s use different properties, and within one PickType the properties you choose can lead to a wide range of behaviors. For example, with <code>PickType.Ray</code>, the properties could configure a mouse ray pick, an avatar head ray pick, or a joint ray pick. </p>
<p><strong>Warning:</strong> Picks created using this method currently always intersect at least visible and collidable things but this may not always be the case.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td><a href="PickType">PickType</a></td><td><p>The type of picking to use.</p></td></tr>
<tr><td><code>properties</code></td><td><a href="#RayPickProperties">Picks.RayPickProperties</a> | <a href="#ParabolaPickProperties">Picks.ParabolaPickProperties</a> | <a href="#StylusPickProperties">Picks.StylusPickProperties</a> | <a href="#CollisionPickProperties">Picks.CollisionPickProperties</a></td><td><p>Properties of the pick, per the pick <code>type</code>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The ID of the pick created. <code>0</code> if invalid.</p></div>

### disablePick {#disablePick}

```js
Picks.disablePick(id)
```

<div class="api-text" v-pre><p>Disables a pick. Disabled picks do not update their pick results.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
</tbody></table></div>

### enablePick {#enablePick}

```js
Picks.enablePick(id)
```

<div class="api-text" v-pre><p>Enables a pick. Enabled picks update their pick results.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
</tbody></table></div>

### getPickProperties {#getPickProperties}

```js
Picks.getPickProperties(id)
```

<div class="api-text" v-pre><p>Gets the current properties of the pick.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#RayPickProperties">Picks.RayPickProperties</a> | <a href="#ParabolaPickProperties">Picks.ParabolaPickProperties</a> | <a href="#StylusPickProperties">Picks.StylusPickProperties</a> | <a href="#CollisionPickProperties">Picks.CollisionPickProperties</a> <p>Properties of the pick, per the pick <code>type</code>.</p></div>

### getPicks {#getPicks}

```js
Picks.getPicks()
```

<div class="api-text" v-pre><p>Gets all picks which currently exist, including disabled picks.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;number&gt; <p>picks - The IDs of the picks.</p></div>

### getPickScriptParameters {#getPickScriptParameters}

```js
Picks.getPickScriptParameters(id)
```

<div class="api-text" v-pre><p>Gets the parameters that were passed in to <a href="#createPick"><code>Picks.createPick</code></a> to create the pick, if the pick was created through a script. Note that these properties do not reflect the current state of the pick. See <a href="#getPickProperties"><code>Picks.getPickProperties</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#RayPickProperties">Picks.RayPickProperties</a> | <a href="#ParabolaPickProperties">Picks.ParabolaPickProperties</a> | <a href="#StylusPickProperties">Picks.StylusPickProperties</a> | <a href="#CollisionPickProperties">Picks.CollisionPickProperties</a> <p>Script-provided properties, per the pick <code>type</code>.</p></div>

### getPrevPickResult {#getPrevPickResult}

```js
Picks.getPrevPickResult(id)
```

<div class="api-text" v-pre><p>Gets the most recent result from a pick. A pick continues to be updated ready to return a result, as long as it is enabled. </p>
<p><strong>Note:</strong> Stylus picks only intersect with objects in their include list, set using <a href="#setIncludeItems">setIncludeItems</a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#RayPickResult">RayPickResult</a> | <a href="globals#ParabolaPickResult">ParabolaPickResult</a> | <a href="globals#StylusPickResult">StylusPickResult</a> | <a href="globals#CollisionPickResult">CollisionPickResult</a> <p>The most recent intersection result.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Highlight entities under your mouse in desktop mode or that you're looking at in HMD mode.</p></div>

```js
// Highlight.
var HIGHLIGHT_LIST_NAME = "highlightEntitiesExampleList";
var HIGHLIGHT_LIST_TYPE = "entity";
Selection.enableListHighlight(HIGHLIGHT_LIST_NAME, {});

// Ray pick.
var PICK_FILTER = Picks.PICK_DOMAIN_ENTITIES | Picks.PICK_AVATAR_ENTITIES
        | Picks.PICK_INCLUDE_COLLIDABLE | Picks.PICK_INCLUDE_NONCOLLIDABLE;
var rayPick = Picks.createPick(PickType.Ray, {
    enabled: true,
    filter: PICK_FILTER,
    joint: HMD.active ? "Avatar" : "Mouse"
});

// Highlight intersected entity.
var highlightedEntityID = null;
Script.update.connect(function () {
    var rayPickResult = Picks.getPrevPickResult(rayPick);
    if (rayPickResult.intersects) {
        if (rayPickResult.objectID !== highlightedEntityID) {
            if (highlightedEntityID) {
                Selection.removeFromSelectedItemsList(HIGHLIGHT_LIST_NAME, HIGHLIGHT_LIST_TYPE, highlightedEntityID);
            }
            highlightedEntityID = rayPickResult.objectID;
            Selection.addToSelectedItemsList(HIGHLIGHT_LIST_NAME, HIGHLIGHT_LIST_TYPE, highlightedEntityID);
        }
    } else {
        if (highlightedEntityID) {
            Selection.removeFromSelectedItemsList(HIGHLIGHT_LIST_NAME, HIGHLIGHT_LIST_TYPE, highlightedEntityID);
            highlightedEntityID = null;
        }
    }
});

// Clean up.
Script.scriptEnding.connect(function () {
    if (highlightedEntityID) {
        Selection.removeFromSelectedItemsList(HIGHLIGHT_LIST_NAME, HIGHLIGHT_LIST_TYPE, highlightedEntityID);
    }
});
```

### isLeftHand {#isLeftHand}

```js
Picks.isLeftHand(id)
```

<div class="api-text" v-pre><p>Checks if a pick is associated with the left hand: a ray or parabola pick with <code>joint</code> property set to <code>"_CONTROLLER_LEFTHAND"</code> or <code>"_CAMERA_RELATIVE_CONTROLLER_LEFTHAND"</code>, or a stylus pick with <code>hand</code> property set to <code>0</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pick is associated with the left hand, <code>false</code> if it isn't.</p></div>

### isMouse {#isMouse}

```js
Picks.isMouse(id)
```

<div class="api-text" v-pre><p>Checks if a pick is associated with the system mouse: a ray or parabola pick with <code>joint</code> property set to <code>"Mouse"</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pick is associated with the system mouse, <code>false</code> if it isn't.</p></div>

### isPickEnabled {#isPickEnabled}

```js
Picks.isPickEnabled(id)
```

<div class="api-text" v-pre><p>Get the enabled status of a pick. Enabled picks update their pick results.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p>enabled - Whether or not the pick is enabled.</p></div>

### isRightHand {#isRightHand}

```js
Picks.isRightHand(id)
```

<div class="api-text" v-pre><p>Checks if a pick is associated with the right hand: a ray or parabola pick with <code>joint</code> property set to <code>"_CONTROLLER_RIGHTHAND"</code> or <code>"_CAMERA_RELATIVE_CONTROLLER_RIGHTHAND"</code>, or a stylus pick with <code>hand</code> property set to <code>1</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the pick is associated with the right hand, <code>false</code> if it isn't.</p></div>

### removePick {#removePick}

```js
Picks.removePick(id)
```

<div class="api-text" v-pre><p>Removes (deletes) a pick.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
</tbody></table></div>

### setIgnoreItems {#setIgnoreItems}

```js
Picks.setIgnoreItems(id, ignoreItems)
```

<div class="api-text" v-pre><p>Sets a list of entity and avatar IDs that a pick should ignore during intersection. </p>
<p><strong>Note:</strong> Not used by stylus picks.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
<tr><td><code>ignoreItems</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>The list of IDs to ignore.</p></td></tr>
</tbody></table></div>

### setIncludeItems {#setIncludeItems}

```js
Picks.setIncludeItems(id, includeItems)
```

<div class="api-text" v-pre><p>Sets a list of entity and avatar IDs that a pick should include during intersection, instead of intersecting with everything. </p>
<p><strong>Note:</strong> Stylus picks only intersect with items in their include list.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
<tr><td><code>includeItems</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>The list of IDs to include.</p></td></tr>
</tbody></table></div>

### setPrecisionPicking {#setPrecisionPicking}

```js
Picks.setPrecisionPicking(id, precisionPicking)
```

<div class="api-text" v-pre><p>Sets whether or not a pick should use precision picking, i.e., whether it should pick against precise meshes or coarse meshes. This has the same effect as using the <code>PICK_PRECISE</code> or <code>PICK_COARSE</code> filter flags.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number</td><td><p>The ID of the pick.</p></td></tr>
<tr><td><code>precisionPicking</code></td><td>boolean</td><td><p><code>true</code> to use precision picking, <code>false</code> to use coarse picking.</p></td></tr>
</tbody></table></div>

## Types {#types}

### CollisionPickProperties {#CollisionPickProperties}

<div class="api-text" v-pre><p>The properties of a collision pick.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if this pick should start enabled, <code>false</code> if it should start disabled. Disabled picks do not update their pick results.</p></td></tr>
<tr><td><code>filter</code> <em>optional</em></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><code>0</code></td><td><p>The filter for this pick to use. Construct using <a href=""><code>Picks</code></a> FilterFlags property values (e.g., <code>Picks.PICK_DOMAIN_ENTITIES</code>) combined with <code>|</code> (bitwise OR) operators. </p>
<p><strong>Note:</strong> Collision picks do not intersect the HUD.</p>
<p></p></td></tr>
<tr><td><code>maxDistance</code> <em>optional</em></td><td>number</td><td><code>0.0</code></td><td><p>The maximum distance at which this pick will intersect. A value of <code>0.0</code> means no maximum.</p></td></tr>
<tr><td><code>parentID</code> <em>optional</em></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the parent: an avatar, an entity, or another pick.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The joint of the parent to parent to, for example, an avatar joint. A value of <code>0</code> means no joint. </p>
<p><em>Used only if <code>parentID</code> is specified.</em></p>
<p></p></td></tr>
<tr><td><code>joint</code> <em>optional</em></td><td>string</td><td></td><td><p><code>"Mouse"</code> parents the pick to the mouse; <code>"Avatar"</code> parents the pick to the user's avatar head; a joint name parents to the joint in the user's avatar; otherwise, the pick is "static", not parented to anything. </p>
<p><em>Used only if <code>parentID</code> is not specified.</em></p>
<p></p></td></tr>
<tr><td><code>scaleWithParent</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> to scale the pick's dimensions and threshold according to the scale of the parent.</p></td></tr>
<tr><td><code>shape</code></td><td><a href="globals#Shape">Shape</a></td><td></td><td><p>The collision region's shape and size. Dimensions are in world coordinates but scale with the parent if defined.</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the collision region, relative to the parent if defined.</p></td></tr>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the collision region, relative to the parent if defined.</p></td></tr>
<tr><td><code>threshold</code></td><td>number</td><td></td><td><p>The approximate minimum penetration depth for a test object to be considered in contact with the collision region. The depth is in world coordinates but scales with the parent if defined.</p></td></tr>
<tr><td><code>collisionGroup</code> <em>optional</em></td><td><a href="globals#CollisionMask">CollisionMask</a></td><td><code>8</code></td><td><p>The type of objects the collision region collides as. Objects whose collision masks overlap with the region's collision group are considered to be colliding with the region.</p></td></tr>
<tr><td><code>pickType</code></td><td><a href="PickType">PickType</a></td><td></td><td><p>The type of pick when getting these properties from <a href="#getPickProperties"><code>Picks.getPickProperties</code></a> or <a href="#getPickScriptParameters"><code>Picks.getPickScriptParameters</code></a>. A collision pick's type is <a href="PickType#properties"><code>PickType.Collision</code></a>.</p></td></tr>
<tr><td><code>baseScale</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>Returned from <a href="#getPickProperties"><code>Picks.getPickProperties</code></a> when the pick has a parent with varying scale (usually an avatar or an entity). Its value is the original scale of the parent at the moment the pick was created, and is used to rescale the pick, and/or the pointer which owns this pick, if any.</p></td></tr>
</tbody></table></div>

### ParabolaPickProperties {#ParabolaPickProperties}

<div class="api-text" v-pre><p>The properties of a parabola pick.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if this pick should start enabled, <code>false</code> if it should start disabled. Disabled picks do not update their pick results.</p></td></tr>
<tr><td><code>filter</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The filter for this pick to use. Construct using <a href=""><code>Picks</code></a> FilterFlags property values (e.g., <code>Picks.PICK_DOMAIN_ENTITIES</code>) combined with <code>|</code> (bitwise OR) operators.</p></td></tr>
<tr><td><code>maxDistance</code> <em>optional</em></td><td>number</td><td><code>0.0</code></td><td><p>The maximum distance at which this pick will intersect. A value of <code>0.0</code> means no maximum.</p></td></tr>
<tr><td><code>parentID</code> <em>optional</em></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the parent: an avatar, an entity, or another pick.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The joint of the parent to parent to, for example, an avatar joint. A value of <code>0</code> means no joint. </p>
<p><em>Used only if <code>parentID</code> is specified.</em></p>
<p></p></td></tr>
<tr><td><code>joint</code> <em>optional</em></td><td>string</td><td></td><td><p><code>"Mouse"</code> parents the pick to the mouse; <code>"Avatar"</code> parents the pick to the user's avatar head; a joint name parents to the joint in the user's avatar; otherwise, the pick is "static", not parented to anything. </p>
<p><em>Used only if <code>parentID</code> is not specified.</em></p>
<p></p></td></tr>
<tr><td><code>position</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td><code>Vec3.ZERO</code></td><td><p>The offset of the parabola origin from its parent if parented, otherwise the parabola origin in world coordinates.</p></td></tr>
<tr><td><code>posOffset</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>Synonym for <code>position</code>.</p></td></tr>
<tr><td><code>direction</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The offset of the parabola direction from its parent's y-axis if parented, otherwise the parabola direction in world coordinates. </p>
<p><strong>Default Value:</strong> <code>Vec3.UP</code> direction if <code>joint</code> is specified, otherwise <code>Vec3.FRONT</code>.</p>
<p></p></td></tr>
<tr><td><code>dirOffset</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>Synonym for <code>direction</code>.</p></td></tr>
<tr><td><code>orientation</code> <em>optional</em></td><td><a href="Quat">Quat</a></td><td></td><td><p>Alternative property for specifying <code>direction</code>. The value is applied to the default <code>direction</code> value.</p></td></tr>
<tr><td><code>speed</code> <em>optional</em></td><td>number</td><td><code>1</code></td><td><p>The initial speed of the parabola in m/s, i.e., the initial speed of a virtual projectile whose trajectory defines the parabola.</p></td></tr>
<tr><td><code>accelerationAxis</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td><code>-Vec3.UP</code></td><td><p>The acceleration of the parabola in m/s<sup>2</sup>, i.e., the acceleration of a virtual projectile whose trajectory defines the parabola, both magnitude and direction.</p></td></tr>
<tr><td><code>rotateAccelerationWithAvatar</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the acceleration axis should rotate with the avatar about the avatar's y-axis, <code>false</code> if it shouldn't.</p></td></tr>
<tr><td><code>rotateAccelerationWithParent</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the acceleration axis should rotate with the parent about the parent's y-axis, if available.</p></td></tr>
<tr><td><code>scaleWithParent</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the velocity and acceleration of the pick should scale with the avatar or other parent.</p></td></tr>
<tr><td><code>scaleWithAvatar</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p>Synonym for <code>scalewithParent</code>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>pickType</code></td><td><a href="PickType">PickType</a></td><td></td><td><p>The type of pick when getting these properties from <a href="#getPickProperties"><code>Picks.getPickProperties</code></a> or <a href="#getPickScriptParameters"><code>Picks.getPickScriptParameters</code></a>. A parabola pick's type is <a href="PickType#properties"><code>PickType.Parabola</code></a>.</p></td></tr>
<tr><td><code>baseScale</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>Returned from <a href="#getPickProperties"><code>Picks.getPickProperties</code></a> when the pick has a parent with varying scale (usually an avatar or an entity). Its value is the original scale of the parent at the moment the pick was created, and is used to rescale the pick and the pointer which owns this pick, if any.</p></td></tr>
</tbody></table></div>

### RayPickProperties {#RayPickProperties}

<div class="api-text" v-pre><p>The properties of a ray pick.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if this pick should start enabled, <code>false</code> if it should start disabled. Disabled picks do not update their pick results.</p></td></tr>
<tr><td><code>filter</code> <em>optional</em></td><td><a href="globals#FilterFlags">FilterFlags</a></td><td><code>0</code></td><td><p>The filter for this pick to use. Construct using <a href=""><code>Picks</code></a> FilterFlags property values (e.g., <code>Picks.PICK_DOMAIN_ENTITIES</code>) combined with <code>|</code> (bitwise OR) operators.</p></td></tr>
<tr><td><code>maxDistance</code> <em>optional</em></td><td>number</td><td><code>0.0</code></td><td><p>The maximum distance at which this pick will intersect. A value of <code>0.0</code> means no maximum.</p></td></tr>
<tr><td><code>parentID</code> <em>optional</em></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the parent: an avatar, an entity, or another pick.</p></td></tr>
<tr><td><code>parentJointIndex</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The joint of the parent to parent to, for example, an avatar joint. A value of <code>0</code> means no joint. </p>
<p><em>Used only if <code>parentID</code> is specified.</em></p>
<p></p></td></tr>
<tr><td><code>joint</code> <em>optional</em></td><td>string</td><td></td><td><p><code>"Mouse"</code> parents the pick to the mouse; <code>"Avatar"</code> parents the pick to the user's avatar head; a joint name parents to the joint in the user's avatar; otherwise, the pick is "static", not parented to anything. </p>
<p><em>Used only if <code>parentID</code> is not specified.</em></p>
<p></p></td></tr>
<tr><td><code>position</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td><code>Vec3.ZERO</code></td><td><p>The offset of the ray origin from its parent if parented, otherwise the ray origin in world coordinates.</p></td></tr>
<tr><td><code>posOffset</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>Synonym for <code>position</code>.</p></td></tr>
<tr><td><code>direction</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The offset of the ray direction from its parent's y-axis if parented, otherwise the ray direction in world coordinates. </p>
<p><strong>Default Value:</strong> <code>Vec3.UP</code> direction if <code>joint</code> is specified, otherwise <code>-Vec3.UP</code>.</p>
<p></p></td></tr>
<tr><td><code>dirOffset</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>Synonym for <code>direction</code>.</p></td></tr>
<tr><td><code>orientation</code> <em>optional</em></td><td><a href="Quat">Quat</a></td><td></td><td><p>Alternative property for specifying <code>direction</code>. The value is applied to the default <code>direction</code> value.</p></td></tr>
<tr><td><code>smoothing</code> <em>optional</em></td><td>object</td><td></td><td><p>Steadies a parented ray's direction (a One Euro filter: smooth while it barely moves, quick while it moves fast): <code>{ minCutoff, beta }</code>, the smoothing at rest in Hz (lower is steadier) and how quickly it lets go as the direction speeds up. None by default; the VR controllers' lasers use it.</p></td></tr>
<tr><td><code>pickType</code></td><td><a href="PickType">PickType</a></td><td></td><td><p>The type of pick when getting these properties from <a href="#getPickProperties"><code>Picks.getPickProperties</code></a> or <a href="#getPickScriptParameters"><code>Picks.getPickScriptParameters</code></a>. A ray pick's type is <a href="PickType#properties"><code>PickType.Ray</code></a>.</p></td></tr>
<tr><td><code>baseScale</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>Returned from <a href="#getPickProperties"><code>Picks.getPickProperties</code></a> when the pick has a parent with varying scale (usually an avatar or an entity). Its value is the original scale of the parent at the moment the pick was created, and is used to scale the pointer which owns this pick, if any.</p></td></tr>
</tbody></table></div>

### StylusPickProperties {#StylusPickProperties}

<div class="api-text" v-pre><p>The properties of a stylus pick.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>hand</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p><code>0</code> for the left hand, <code>1</code> for the right hand, invalid (<code>-1</code>) otherwise.</p></td></tr>
<tr><td><code>enabled</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if this pick should start enabled, <code>false</code> if it should start disabled. Disabled picks do not update their pick results.</p></td></tr>
<tr><td><code>filter</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The filter for this pick to use. Construct using <a href=""><code>Picks</code></a> FilterFlags property values (e.g., <code>Picks.PICK_DOMAIN_ENTITIES</code>) combined with <code>|</code> (bitwise OR) operators. </p>
<p><strong>Note:</strong> Stylus picks do not intersect avatars or the HUD.</p>
<p></p></td></tr>
<tr><td><code>maxDistance</code> <em>optional</em></td><td>number</td><td><code>0.0</code></td><td><p>The maximum distance at which this pick will intersect. A value of <code>0.0</code> means no maximum.</p></td></tr>
<tr><td><code>tipOffset</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td><code>0,0.095,0</code></td><td><p>The position of the stylus tip relative to the hand position at default avatar scale.</p></td></tr>
<tr><td><code>pickType</code></td><td><a href="PickType">PickType</a></td><td></td><td><p>The type of pick when getting these properties from <a href="#getPickProperties"><code>Picks.getPickProperties</code></a> or <a href="#getPickScriptParameters"><code>Picks.getPickScriptParameters</code></a>. A stylus pick's type is <a href="PickType#properties"><code>PickType.Stylus</code></a>.</p></td></tr>
</tbody></table></div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### INTERSECTED_AVATAR {#INTERSECTED_AVATAR}

```js
Picks.INTERSECTED_AVATAR()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.INTERSECTED_AVATAR</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### INTERSECTED_ENTITY {#INTERSECTED_ENTITY}

```js
Picks.INTERSECTED_ENTITY()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.INTERSECTED_ENTITY</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### INTERSECTED_HUD {#INTERSECTED_HUD}

```js
Picks.INTERSECTED_HUD()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.INTERSECTED_HUD</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### INTERSECTED_LOCAL_ENTITY {#INTERSECTED_LOCAL_ENTITY}

```js
Picks.INTERSECTED_LOCAL_ENTITY()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.INTERSECTED_LOCAL_ENTITY</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### INTERSECTED_NONE {#INTERSECTED_NONE}

```js
Picks.INTERSECTED_NONE()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.INTERSECTED_NONE</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### INTERSECTED_OVERLAY {#INTERSECTED_OVERLAY}

```js
Picks.INTERSECTED_OVERLAY()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.INTERSECTED_LOCAL_ENTITY</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_ALL_INTERSECTIONS {#PICK_ALL_INTERSECTIONS}

```js
Picks.PICK_ALL_INTERSECTIONS()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_ALL_INTERSECTIONS</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_AVATAR_ENTITIES {#PICK_AVATAR_ENTITIES}

```js
Picks.PICK_AVATAR_ENTITIES()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_AVATAR_ENTITIES</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_AVATARS {#PICK_AVATARS}

```js
Picks.PICK_AVATARS()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_AVATARS</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_COARSE {#PICK_COARSE}

```js
Picks.PICK_COARSE()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_COARSE</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_DOMAIN_ENTITIES {#PICK_DOMAIN_ENTITIES}

```js
Picks.PICK_DOMAIN_ENTITIES()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_DOMAIN_ENTITIES</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_ENTITIES {#PICK_ENTITIES}

```js
Picks.PICK_ENTITIES()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_DOMAIN_ENTITIES | Picks.PICK_AVATAR_ENTITIES</code> properties expression instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_HUD {#PICK_HUD}

```js
Picks.PICK_HUD()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_HUD</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_INCLUDE_COLLIDABLE {#PICK_INCLUDE_COLLIDABLE}

```js
Picks.PICK_INCLUDE_COLLIDABLE()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_INCLUDE_COLLIDABLE</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_INCLUDE_INVISIBLE {#PICK_INCLUDE_INVISIBLE}

```js
Picks.PICK_INCLUDE_INVISIBLE()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_INCLUDE_INVISIBLE</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_INCLUDE_NONCOLLIDABLE {#PICK_INCLUDE_NONCOLLIDABLE}

```js
Picks.PICK_INCLUDE_NONCOLLIDABLE()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_INCLUDE_NONCOLLIDABLE</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_INCLUDE_VISIBLE {#PICK_INCLUDE_VISIBLE}

```js
Picks.PICK_INCLUDE_VISIBLE()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_INCLUDE_VISIBLE</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_LOCAL_ENTITIES {#PICK_LOCAL_ENTITIES}

```js
Picks.PICK_LOCAL_ENTITIES()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_LOCAL_ENTITIES</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_OVERLAYS {#PICK_OVERLAYS}

```js
Picks.PICK_OVERLAYS()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_LOCAL_ENTITIES</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

### PICK_PRECISE {#PICK_PRECISE}

```js
Picks.PICK_PRECISE()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <code>Picks.PICK_PRECISE</code> property instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>
