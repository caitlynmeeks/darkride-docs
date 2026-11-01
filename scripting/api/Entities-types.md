---
title: "Entities types"
description: "The types used by Entities."
---

# Entities types

The types used by [Entities](./Entities).

## Types {#types}

<div class="api-entry">

### ActionArguments {#ActionArguments}

<div class="api-text" v-pre><p>Different entity action types have different arguments: some common to all actions (listed in the table) and some specific to each <a href="#ActionType">ActionType</a> (linked to below).</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td><a href="#ActionType">Entities.ActionType</a></td><td></td><td><p>The type of action.</p></td></tr>
<tr><td><code>tag</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>A string that a script can use for its own purposes.</p></td></tr>
<tr><td><code>ttl</code></td><td>number</td><td><code>0</code></td><td><p>How long the action should exist, in seconds, before it is automatically deleted. A value of <code>0</code> means that the action should not be deleted.</p></td></tr>
<tr><td><code>isMine</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the action was created during the current client session, <code>false</code> if it wasn't. <em>Read-only.</em></p></td></tr>
<tr><td><code>::no-motion-state</code></td><td>boolean</td><td></td><td><p>Is present with a value of <code>true</code> when the entity hasn't been registered with the physics engine yet (e.g., if the action hasn't been properly configured), otherwise the property is <code>undefined</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>::active</code></td><td>boolean</td><td></td><td><p><code>true</code> when the action is modifying the entity's motion, <code>false</code> otherwise. Is present once the entity has been registered with the physics engine, otherwise the property is <code>undefined</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>::motion-type</code></td><td><a href="#PhysicsMotionType">Entities.PhysicsMotionType</a></td><td></td><td><p>How the entity moves with the action. Is present once the entity has been registered with the physics engine, otherwise the property is <code>undefined</code>. <em>Read-only.</em></p></td></tr>
</tbody></table></div>
<div class="api-see" v-pre><strong>See also:</strong> <a href="#ActionArguments-FarGrab">ActionArguments-FarGrab</a>, <a href="#ActionArguments-Hold">ActionArguments-Hold</a>, <a href="#ActionArguments-Offset">ActionArguments-Offset</a>, <a href="#ActionArguments-Tractor">ActionArguments-Tractor</a>, <a href="#ActionArguments-TravelOriented">ActionArguments-TravelOriented</a>, <a href="#ActionArguments-Hinge">ActionArguments-Hinge</a>, <a href="#ActionArguments-Slider">ActionArguments-Slider</a>, <a href="#ActionArguments-ConeTwist">ActionArguments-ConeTwist</a>, <a href="#ActionArguments-BallSocket">ActionArguments-BallSocket</a></div>

</div>

<div class="api-entry">

### ActionArguments-BallSocket {#ActionArguments-BallSocket}

<div class="api-text" v-pre><p>The <code>"ball-socket"</code> <a href="#ActionType">ActionType</a> connects two entities with a ball and socket joint. It has arguments in addition to the common <a href="#ActionArguments">ActionArguments</a>:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>otherEntityID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The ID of the other entity that is connected to the joint. If none is specified then the entity's <code>pivot</code> is held where it is when the action is created.</p></td></tr>
<tr><td><code>pivot</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The local offset of the joint relative to the entity's position.</p></td></tr>
<tr><td><code>otherPivot</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The local offset of the joint relative to the other entity's position. Not used when there is no other entity.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ActionArguments-ConeTwist {#ActionArguments-ConeTwist}

<div class="api-text" v-pre><p>The <code>"cone-twist"</code> <a href="#ActionType">ActionType</a> connects two entities with a joint that can move through a cone and can twist. It has arguments in addition to the common <a href="#ActionArguments">ActionArguments</a>:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>otherEntityID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The ID of the other entity that is connected to the joint.</p></td></tr>
<tr><td><code>pivot</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The local offset of the joint relative to the entity's position.</p></td></tr>
<tr><td><code>axis</code></td><td><a href="Vec3">Vec3</a></td><td><code>1,0,0</code></td><td><p>The axis of the entity that moves through the cone. Must be a non-zero vector.</p></td></tr>
<tr><td><code>otherPivot</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The local offset of the joint relative to the other entity's position.</p></td></tr>
<tr><td><code>otherAxis</code></td><td><a href="Vec3">Vec3</a></td><td><code>1,0,0</code></td><td><p>The axis of the other entity that moves through the cone. Must be a non-zero vector.</p></td></tr>
<tr><td><code>swingSpan1</code></td><td>number</td><td><code>2*Math.PI</code></td><td><p>The angle through which the joint can move in one axis of the cone, in radians. Spans of <code>Math.PI</code> or more leave that movement free.</p></td></tr>
<tr><td><code>swingSpan2</code></td><td>number</td><td><code>2*Math.PI</code></td><td><p>The angle through which the joint can move in the other axis of the cone, in radians.</p></td></tr>
<tr><td><code>twistSpan</code></td><td>number</td><td><code>2*Math.PI</code></td><td><p>The angle through with the joint can twist, in radians.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ActionArguments-FarGrab {#ActionArguments-FarGrab}

<div class="api-text" v-pre><p>The <code>"far-grab"</code> <a href="#ActionType">ActionType</a> moves and rotates an entity to a target position and orientation, optionally relative to another entity. Collisions between the entity and the user's avatar are disabled during the far-grab. It has arguments in addition to the common <a href="#ActionArguments">ActionArguments</a>:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>otherID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>If an entity ID, the <code>targetPosition</code> and <code>targetRotation</code> are relative to the entity's position and rotation.</p></td></tr>
<tr><td><code>otherJointIndex</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>If a joint index in the <code>otherID</code> entity, the <code>targetPosition</code> and <code>targetRotation</code> are relative to the entity joint's position and rotation.</p></td></tr>
<tr><td><code>targetPosition</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The target position.</p></td></tr>
<tr><td><code>targetRotation</code></td><td><a href="Quat">Quat</a></td><td><code>0,0,0,1</code></td><td><p>The target rotation.</p></td></tr>
<tr><td><code>linearTimeScale</code></td><td>number</td><td><code>3.4e+38</code></td><td><p>Controls how long it takes for the entity's position to catch up with the target position. The value is the time for the action to catch up to 1/e = 0.368 of the target value, where the action is applied using an exponential decay.</p></td></tr>
<tr><td><code>angularTimeScale</code></td><td>number</td><td><code>3.4e+38</code></td><td><p>Controls how long it takes for the entity's orientation to catch up with the target orientation. The value is the time for the action to catch up to 1/e = 0.368 of the target value, where the action is applied using an exponential decay.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ActionArguments-Hinge {#ActionArguments-Hinge}

<div class="api-text" v-pre><p>The <code>"hinge"</code> <a href="#ActionType">ActionType</a> lets an entity pivot about an axis or connects two entities with a hinge joint. It has arguments in addition to the common <a href="#ActionArguments">ActionArguments</a>:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>otherEntityID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The ID of the other entity that is connected to the joint, if any. If none is specified then the first entity simply pivots about its specified <code>axis</code>.</p></td></tr>
<tr><td><code>pivot</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The local offset of the joint relative to the entity's position.</p></td></tr>
<tr><td><code>axis</code></td><td><a href="Vec3">Vec3</a></td><td><code>1,0,0</code></td><td><p>The axis of the entity that it pivots about. Must be a non-zero vector.</p></td></tr>
<tr><td><code>otherPivot</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The local offset of the joint relative to the other entity's position.</p></td></tr>
<tr><td><code>otherAxis</code></td><td><a href="Vec3">Vec3</a></td><td><code>1,0,0</code></td><td><p>The axis of the other entity that it pivots about. Must be a non-zero vector.</p></td></tr>
<tr><td><code>low</code></td><td>number</td><td><code>-2*Math.PI</code></td><td><p>The most negative angle that the hinge can take, in radians. Limits are enforced between <code>-Math.PI</code> and <code>Math.PI</code> and always include the rest angle <code>0</code>; a range of a full turn or more, or <code>low</code> above <code>high</code>, leaves the hinge free.</p></td></tr>
<tr><td><code>high</code></td><td>number</td><td><code>2*Math.PI</code></td><td><p>The most positive angle that the hinge can take, in radians.</p></td></tr>
<tr><td><code>angle</code></td><td>number</td><td><code>0</code></td><td><p>The current angle of the hinge, in radians, range <code>-Math.PI</code> – <code>Math.PI</code>. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ActionArguments-Hold {#ActionArguments-Hold}

<div class="api-text" v-pre><p>The <code>"hold"</code> <a href="#ActionType">ActionType</a> positions and rotates an entity relative to an avatar's hand. Collisions between the entity and the user's avatar are disabled during the hold. It has arguments in addition to the common <a href="#ActionArguments">ActionArguments</a>:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>holderID</code></td><td><a href="Uuid">Uuid</a></td><td><code>MyAvatar.sessionUUID</code></td><td><p>The ID of the avatar holding the entity.</p></td></tr>
<tr><td><code>hand</code></td><td>string</td><td><code>right</code></td><td><p>The hand holding the entity: <code>"left"</code> or <code>"right"</code>.</p></td></tr>
<tr><td><code>relativePosition</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The target position relative to the avatar's hand.</p></td></tr>
<tr><td><code>relativeRotation</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0,1</code></td><td><p>The target rotation relative to the avatar's hand.</p></td></tr>
<tr><td><code>timeScale</code></td><td>number</td><td><code>3.4e+38</code></td><td><p>Controls how long it takes for the entity's position and rotation to catch up with the target. The value is the time for the action to catch up to 1/e = 0.368 of the target value, where the action is applied using an exponential decay.</p></td></tr>
<tr><td><code>kinematic</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the entity is made kinematic during the action; the entity won't lag behind the hand but constraint actions such as <code>"hinge"</code> won't act properly. <code>false</code> if the entity is not made kinematic during the action</p></td></tr>
<tr><td><code>kinematicSetVelocity</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if, when <code>kinematic</code> is <code>true</code>, the entity's velocity will be set during the action, e.g., so that other scripts may use the value. <code>false</code> if the entity's velocity will not be set during the action.</p></td></tr>
<tr><td><code>ignoreIK</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the entity follows the HMD controller, <code>false</code> if it follows the avatar's hand.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ActionArguments-Offset {#ActionArguments-Offset}

<div class="api-text" v-pre><p>The <code>"offset"</code> <a href="#ActionType">ActionType</a> moves an entity so that it is a defined distance away from a target point. It has arguments in addition to the common <a href="#ActionArguments">ActionArguments</a>:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pointToOffsetFrom</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The target point to offset the entity from.</p></td></tr>
<tr><td><code>linearDistance</code></td><td>number</td><td><code>0</code></td><td><p>The distance away from the target point to position the entity.</p></td></tr>
<tr><td><code>linearTimeScale</code></td><td>number</td><td><code>34e+38</code></td><td><p>Controls how long it takes for the entity's position to catch up with the target offset. The value is the time for the action to catch up to 1/e = 0.368 of the target value, where the action is applied using an exponential decay.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ActionArguments-Slider {#ActionArguments-Slider}

<div class="api-text" v-pre><p>The <code>"slider"</code> <a href="#ActionType">ActionType</a> lets an entity slide along an axis, or connects two entities that slide along a shared axis. It has arguments in addition to the common <a href="#ActionArguments">ActionArguments</a>:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>otherEntityID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The ID of the other entity that is connected to the joint, if any. If none is specified then the first entity simply slides along its specified <code>axis</code>.</p></td></tr>
<tr><td><code>point</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The local position of a point in the entity that slides along the axis.</p></td></tr>
<tr><td><code>axis</code></td><td><a href="Vec3">Vec3</a></td><td><code>1,0,0</code></td><td><p>The axis of the entity that slides along the joint. Must be a non-zero vector.</p></td></tr>
<tr><td><code>otherPoint</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The local position of a point in the other entity that slides along the axis.</p></td></tr>
<tr><td><code>otherAxis</code></td><td><a href="Vec3">Vec3</a></td><td><code>1,0,0</code></td><td><p>The axis of the other entity that slides along the joint. Must be a non-zero vector.</p></td></tr>
<tr><td><code>linearLow</code></td><td>number</td><td><code>1.17e-38</code></td><td><p>The most negative linear offset from the entity's initial point that the entity can have along the slider. Limits always include the initial point <code>0</code>; <code>linearLow</code> above <code>linearHigh</code> leaves the slider free.</p></td></tr>
<tr><td><code>linearHigh</code></td><td>number</td><td><code>3.40e+38</code></td><td><p>The most positive linear offset from the entity's initial point that the entity can have along the slider.</p></td></tr>
<tr><td><code>angularLow</code></td><td>number</td><td><code>-2*Math.PI</code></td><td><p>The most negative angle that the entity can rotate about the axis if the action involves only one entity, otherwise the most negative angle the rotation can be between the two entities. In radians. <em>Not enforced: the joint does not rotate about its axis. The value is stored and reported only.</em></p></td></tr>
<tr><td><code>angularHigh</code></td><td>number</td><td><code>Math.PI</code></td><td><p>The most positive angle that the entity can rotate about the axis if the action involves only one entity, otherwise the most positive angle the rotation can be between the two entities. In radians. <em>Not enforced: the joint does not rotate about its axis. The value is stored and reported only.</em></p></td></tr>
<tr><td><code>linearPosition</code></td><td>number</td><td><code>0</code></td><td><p>The current linear offset the entity is from its initial point if the action involves only one entity, otherwise the linear offset between the two entities' action points. <em>Read-only.</em></p></td></tr>
<tr><td><code>angularPosition</code></td><td>number</td><td><code>0</code></td><td><p>The current angular offset of the entity from its initial rotation if the action involves only one entity, otherwise the angular offset between the two entities. In radians. Always <code>0</code>, as the joint does not rotate about its axis. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ActionArguments-Tractor {#ActionArguments-Tractor}

<div class="api-text" v-pre><p>The <code>"tractor"</code> <a href="#ActionType">ActionType</a> moves and rotates an entity to a target position and orientation, optionally relative to another entity. It has arguments in addition to the common <a href="#ActionArguments">ActionArguments</a>:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>otherID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>If an entity ID, the <code>targetPosition</code> and <code>targetRotation</code> are relative to the entity's position and rotation.</p></td></tr>
<tr><td><code>otherJointIndex</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>If a joint index in the <code>otherID</code> entity, the <code>targetPosition</code> and <code>targetRotation</code> are relative to the entity joint's position and rotation.</p></td></tr>
<tr><td><code>targetPosition</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The target position.</p></td></tr>
<tr><td><code>targetRotation</code></td><td><a href="Quat">Quat</a></td><td><code>0,0,0,1</code></td><td><p>The target rotation.</p></td></tr>
<tr><td><code>linearTimeScale</code></td><td>number</td><td><code>3.4e+38</code></td><td><p>Controls how long it takes for the entity's position to catch up with the target position. The value is the time for the action to catch up to 1/e = 0.368 of the target value, where the action is applied using an exponential decay.</p></td></tr>
<tr><td><code>angularTimeScale</code></td><td>number</td><td><code>3.4e+38</code></td><td><p>Controls how long it takes for the entity's orientation to catch up with the target orientation. The value is the time for the action to catch up to 1/e = 0.368 of the target value, where the action is applied using an exponential decay.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ActionArguments-TravelOriented {#ActionArguments-TravelOriented}

<div class="api-text" v-pre><p>The <code>"travel-oriented"</code> <a href="#ActionType">ActionType</a> orients an entity to align with its direction of travel. It has arguments in addition to the common <a href="#ActionArguments">ActionArguments</a>:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>forward</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The axis of the entity to align with the entity's direction of travel.</p></td></tr>
<tr><td><code>angularTimeScale</code></td><td>number</td><td><code>0.1</code></td><td><p>Controls how long it takes for the entity's orientation to catch up with the direction of travel. The value is the time for the action to catch up to 1/e = 0.368 of the target value, where the action is applied using an exponential decay.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ActionType {#ActionType}

<div class="api-text" v-pre><p>An entity action may be one of the following types:</p>
 <table> <thead> <tr><th>Value</th><th>Type</th><th>Description</th><th>Arguments</th></tr>
 </thead>
 <tbody> <tr><td><code>"far-grab"</code></td><td>Avatar action</td> <td>Moves and rotates an entity to a target position and orientation, optionally relative to another entity. Collisions between the entity and the user's avatar are disabled during the far-grab.</td> <td><a href="#ActionArguments-FarGrab"><code>Entities.ActionArguments-FarGrab</code></a></td></tr>
 <tr><td><code>"hold"</code></td><td>Avatar action</td> <td>Positions and rotates an entity relative to an avatar's hand. Collisions between the entity and the user's avatar are disabled during the hold.</td> <td><a href="#ActionArguments-Hold"><code>Entities.ActionArguments-Hold</code></a></td></tr>
 <tr><td><code>"offset"</code></td><td>Object action</td> <td>Moves an entity so that it is a defined distance away from a target point.</td> <td><a href="#ActionArguments-Offset"><code>Entities.ActionArguments-Offset</code></a></td></tr>
 <tr><td><code>"tractor"</code></td><td>Object action</td> <td>Moves and rotates an entity to a target position and orientation, optionally relative to another entity.</td> <td><a href="#ActionArguments-Tractor"><code>Entities.ActionArguments-Tractor</code></a></td></tr>
 <tr><td><code>"travel-oriented"</code></td><td>Object action</td> <td>Orients an entity to align with its direction of travel.</td> <td><a href="#ActionArguments-TravelOriented"><code>Entities.ActionArguments-TravelOriented</code></a></td></tr>
 <tr><td><code>"hinge"</code></td><td>Object constraint</td> <td>Lets an entity pivot about an axis or connects two entities with a hinge joint.</td> <td><a href="#ActionArguments-Hinge"><code>Entities.ActionArguments-Hinge</code></a></td></tr>
 <tr><td><code>"slider"</code></td><td>Object constraint</td> <td>Lets an entity slide and rotate along an axis, or connects two entities that slide and rotate along a shared axis.</td> <td><a href="#ActionArguments-Slider">ActionArguments-Slider</a></td></tr>
 <tr><td><code>"cone-twist"</code></td><td>Object constraint</td> <td>Connects two entities with a joint that can move through a cone and can twist.</td> <td><a href="#ActionArguments-ConeTwist"><code>Entities.ActionArguments-ConeTwist</code></a></td></tr>
 <tr><td><code>"ball-socket"</code></td><td>Object constraint</td> <td>Connects two entities with a ball and socket joint.</td> <td><a href="#ActionArguments-BallSocket"><code>Entities.ActionArguments-BallSocket</code></a></td></tr>
 <tr><td><code>"spring"</code></td><td> </td><td>Synonym for <code>"tractor"</code>. <p class="important">Deprecated.</p>
</td><td> </td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### AmbientLight {#AmbientLight}

<div class="api-text" v-pre><p>Ambient light is defined by the following properties:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>ambientIntensity</code></td><td>number</td><td><code>0.5</code></td><td><p>The intensity of the light.</p></td></tr>
<tr><td><code>ambientURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>A cube map image that defines the color of the light coming from each direction. If <code>""</code> then the entity's <a href="#Skybox">Skybox</a> <code>url</code> property value is used, unless that also is <code>""</code> in which case the entity's <code>ambientLightMode</code> property is set to <code>"inherit"</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### AnimationProperties {#AnimationProperties}

<div class="api-text" v-pre><p>An animation is configured by the following properties:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of the glTF or FBX file that has the animation. glTF files may be in JSON or binary format (".gltf" or ".glb" URLs respectively). </p>
<p><strong>Warning:</strong> glTF animations currently do not always animate correctly.</p>
<p></p></td></tr>
<tr><td><code>allowTranslation</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> to enable translations contained in the animation to be played, <code>false</code> to disable translations.</p></td></tr>
<tr><td><code>fps</code></td><td>number</td><td><code>30</code></td><td><p>The speed in frames/s that the animation is played at.</p></td></tr>
<tr><td><code>firstFrame</code></td><td>number</td><td><code>0</code></td><td><p>The first frame to play in the animation.</p></td></tr>
<tr><td><code>lastFrame</code></td><td>number</td><td><code>100000</code></td><td><p>The last frame to play in the animation.</p></td></tr>
<tr><td><code>currentFrame</code></td><td>number</td><td><code>0</code></td><td><p>The current frame being played in the animation.</p></td></tr>
<tr><td><code>running</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the animation should play, <code>false</code> if it shouldn't.</p></td></tr>
<tr><td><code>loop</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the animation is continuously repeated in a loop, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>hold</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the rotations and translations of the last frame played are maintained when the animation stops playing, <code>false</code> if they aren't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### AvatarPriorityMode {#AvatarPriorityMode}

<div class="api-text" v-pre><p>The priority of updates from avatars in a zone to other clients.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"inherit"</code></td><td>The update priority from any enclosing zone continues into this zone.</td></tr>
 <tr><td><code>"crowd"</code></td><td>The update priority in this zone is the normal priority.</td></tr>
 <tr><td><code>"hero"</code></td><td>Avatars in this zone have an increased update priority.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### Bloom {#Bloom}

<div class="api-text" v-pre><p>Bloom is defined by the following properties:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bloomIntensity</code></td><td>number</td><td><code>0.25</code></td><td><p>The intensity of the bloom effect.</p></td></tr>
<tr><td><code>bloomThreshold</code></td><td>number</td><td><code>0.7</code></td><td><p>The threshold for the bloom effect.</p></td></tr>
<tr><td><code>bloomSize</code></td><td>number</td><td><code>0.9</code></td><td><p>The size of the bloom effect.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### BoundingBox {#BoundingBox}

<div class="api-text" v-pre><p>The axis-aligned bounding box of an entity.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>brn</code></td><td><a href="Vec3">Vec3</a></td><td><p>The bottom right near (minimum axes values) corner of the AA box.</p></td></tr>
<tr><td><code>tfl</code></td><td><a href="Vec3">Vec3</a></td><td><p>The top far left (maximum axes values) corner of the AA box.</p></td></tr>
<tr><td><code>center</code></td><td><a href="Vec3">Vec3</a></td><td><p>The center of the AA box.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><p>The dimensions of the AA box.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ComponentMode {#ComponentMode}

<div class="api-text" v-pre><p>How an effect is applied in a <a href="#EntityProperties-Zone">Zone</a> entity.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"inherit"</code></td><td>The effect from any enclosing zone continues into this zone.</td></tr>
 <tr><td><code>"disabled"</code></td><td>The effect — from any enclosing zone and this zone — is disabled in this zone.</td></tr>
 <tr><td><code>"enabled"</code></td><td>The effect from this zone is enabled, overriding the effect from any enclosing zone.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### EntityHostType {#EntityHostType}

<div class="api-text" v-pre><p>How an entity is hosted and sent to others for display.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"domain"</code></td><td>Domain entities are stored on the world, are visible to everyone, and are sent to everyone by the entity server.</td></tr>
 <tr><td><code>"avatar"</code></td><td>Avatar entities are stored on an Interface client, are visible to everyone, and are sent to everyone by the avatar mixer. They follow the client to each world visited, displaying at the same world coordinates unless parented to the client's avatar.</td></tr>
 <tr><td><code>"local"</code></td><td>Local entities are ephemeral — they aren't stored anywhere — and are visible only to the client. They follow the client to each world visited, displaying at the same world coordinates unless parented to the client's avatar. Additionally, local entities are always collisionless.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### EntityPriority {#EntityPriority}

<div class="api-text" v-pre><p>Sets the priority with which the entity receives updates from the CPU. <code>"static"</code> receives fewer updates for fast processing. <code>"automatic"</code> calculates optimal update rate for CPU performance, but may cause animations to stutter. <code>"prioritized"</code> provides smoothest updating but can tax the CPU, so use judiciously.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"automatic"</code></td><td>The entity receives periodic updates as needed.</td></tr>
 <tr><td><code>"static"</code></td><td>The entity does not need to receive updates, like scenery. Saves on CPU.</td></tr>
 <tr><td><code>"prioritized"</code></td><td>The entity receives frequent updates. Expensive on CPU.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### EntityProperties {#EntityProperties}

<div class="api-text" v-pre><p>Different entity types have different properties: some common to all entities (listed in the table) and some specific to each <a href="#EntityType">EntityType</a> (linked to below).</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the entity. <em>Read-only.</em></p></td></tr>
<tr><td><code>name</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>A name for the entity. Need not be unique.</p></td></tr>
<tr><td><code>type</code></td><td><a href="#EntityType">Entities.EntityType</a></td><td></td><td><p>The entity's type. You cannot change the type of an entity after it's created. However, its value may switch among <code>"Box"</code>, <code>"Shape"</code>, and <code>"Sphere"</code> depending on changes to the <code>shape</code> property set for entities of these types. <em>Read-only.</em></p></td></tr>
<tr><td><code>entityHostType</code></td><td><a href="#EntityHostType">Entities.EntityHostType</a></td><td><code>&quot;domain&quot;</code></td><td><p>How the entity is hosted and sent to others for display. The value can only be set at entity creation by one of the <a href="Entities#addEntity"><code>Entities.addEntity</code></a> methods. <em>Read-only.</em></p></td></tr>
<tr><td><code>avatarEntity</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the entity is an <a href="#EntityHostType">avatar entity</a>, <code>false</code> if it isn't. The value is per the <code>entityHostType</code> property value, set at entity creation by one of the <a href="Entities#addEntity"><code>Entities.addEntity</code></a> methods. <em>Read-only.</em></p></td></tr>
<tr><td><code>clientOnly</code></td><td>boolean</td><td><code>false</code></td><td><p>A synonym for <code>avatarEntity</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>localEntity</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the entity is a <a href="#EntityHostType">local entity</a>, <code>false</code> if it isn't. The value is per the <code>entityHostType</code> property value, set at entity creation by one of the <a href="Entities#addEntity"><code>Entities.addEntity</code></a> methods. <em>Read-only.</em></p></td></tr>
<tr><td><code>owningAvatarID</code></td><td><a href="Uuid">Uuid</a></td><td><code>Uuid.NULL</code></td><td><p>The session ID of the owning avatar if <code>avatarEntity</code> is <code>true</code>, otherwise <a href="Uuid">Uuid.NULL</a>. <em>Read-only.</em></p></td></tr>
<tr><td><code>created</code></td><td>string</td><td></td><td><p>The UTC date and time that the entity was created, in ISO 8601 format as <code>yyyy-MM-ddTHH:mm:ssZ</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>age</code></td><td>number</td><td></td><td><p>The age of the entity in seconds since it was created. <em>Read-only.</em></p></td></tr>
<tr><td><code>ageAsText</code></td><td>string</td><td></td><td><p>The age of the entity since it was created, formatted as <code>h hours m minutes s seconds</code>.</p></td></tr>
<tr><td><code>lifetime</code></td><td>number</td><td><code>-1</code></td><td><p>How long an entity lives for, in seconds, before being automatically deleted. A value of <code>-1</code> means that the entity lives for ever.</p></td></tr>
<tr><td><code>lastEdited</code></td><td>number</td><td></td><td><p>When the entity was last edited, expressed as the number of microseconds since 1970-01-01T00:00:00 UTC. <em>Read-only.</em></p></td></tr>
<tr><td><code>lastEditedBy</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The session ID of the avatar or agent that most recently created or edited the entity. <em>Read-only.</em></p></td></tr>
<tr><td><code>locked</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if properties other than <code>locked</code> cannot be changed and the entity cannot be deleted, <code>false</code> if all properties can be changed and the entity can be deleted.</p></td></tr>
<tr><td><code>visible</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the entity is rendered, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>locallyVisible</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the entity is locally rendered, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>entityPriority</code></td><td><a href="#EntityPriority">Entities.EntityPriority</a></td><td><code>&quot;automatic&quot;</code></td><td><p>The priority with which the entity receives updates from the CPU.</p></td></tr>
<tr><td><code>canCastShadow</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the entity can cast a shadow, <code>false</code> if it can't. Currently applicable only to <a href="#EntityProperties-Model">Model</a> and <a href="#EntityProperties-Shape">Shape</a> entities. Shadows are cast if inside a <a href="#EntityProperties-Zone">Zone</a> entity with <code>castShadows</code> enabled in its <code>keyLight</code> property.</p></td></tr>
<tr><td><code>isVisibleInSecondaryCamera</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the entity is rendered in the secondary camera, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>renderLayer</code></td><td><a href="#RenderLayer">Entities.RenderLayer</a></td><td><code>&quot;world&quot;</code></td><td><p>The layer that the entity renders in.</p></td></tr>
<tr><td><code>primitiveMode</code></td><td><a href="#PrimitiveMode">Entities.PrimitiveMode</a></td><td><code>&quot;solid&quot;</code></td><td><p>How the entity's geometry is rendered.</p></td></tr>
<tr><td><code>ignorePickIntersection</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if <a href="Picks"><code>Picks</code></a> and <a href="RayPick"><code>RayPick</code></a> ignore the entity, <code>false</code> if they don't.</p></td></tr>
<tr><td><code>frame</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the entity is a moving reference frame: what stands in it is simulated in its own physics world and rides with it (PHYSICS.md).</p></td></tr>
<tr><td><code>trackID</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p>The Track entity this entity rides along, if any; the physics moves it.</p></td></tr>
<tr><td><code>trackOffset</code></td><td>number</td><td><code>0</code></td><td><p>Where along the train this entity sits, in meters along the track.</p></td></tr>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The position of the entity in world coordinates.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td><code>0,0,0,1</code></td><td><p>The orientation of the entity in world coordinates.</p></td></tr>
<tr><td><code>registrationPoint</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.5,0.5,0.5</code></td><td><p>The point in the entity that is set to the entity's position and is rotated about, range <a href="Vec3">Vec3.ZERO</a> – <a href="Vec3">Vec3.ONE</a>. A value of <a href="Vec3">Vec3.ZERO</a> is the entity's minimum x, y, z corner; a value of <a href="Vec3">Vec3.ONE</a> is the entity's maximum x, y, z corner.</p></td></tr>
<tr><td><code>naturalPosition</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The center of the entity's unscaled mesh model if it has one, otherwise <a href="Vec3">Vec3.ZERO</a>. <em>Read-only.</em></p></td></tr>
<tr><td><code>naturalDimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the entity's unscaled mesh model if it has one, otherwise <a href="Vec3">Vec3.ONE</a>. <em>Read-only.</em></p></td></tr>
<tr><td><code>velocity</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The linear velocity of the entity in m/s with respect to world coordinates.</p></td></tr>
<tr><td><code>damping</code></td><td>number</td><td><code>0.39347</code></td><td><p>How much the linear velocity of an entity slows down over time, range <code>0.0</code> – <code>1.0</code>. A higher damping value slows down the entity more quickly. The default value is for an exponential decay timescale of 2.0s, where it takes 2.0s for the movement to slow to <code>1/e = 0.368</code> of its initial value.</p></td></tr>
<tr><td><code>angularVelocity</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The angular velocity of the entity in rad/s with respect to its axes, about its registration point.</p></td></tr>
<tr><td><code>angularDamping</code></td><td>number</td><td><code>0.39347</code></td><td><p>How much the angular velocity of an entity slows down over time, range <code>0.0</code> – <code>1.0</code>. A higher damping value slows down the entity more quickly. The default value is for an exponential decay timescale of 2.0s, where it takes 2.0s for the movement to slow to <code>1/e = 0.368</code> of its initial value.</p></td></tr>
<tr><td><code>gravity</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The acceleration due to gravity in m/s<sup>2</sup> that the entity should move with, in world coordinates. Use a value of <code>{ x: 0, y: -9.8, z: 0 }</code> to simulate Earth's gravity. Gravity is applied to an entity's motion only if its <code>dynamic</code> property is <code>true</code>. </p>
<p>If changing an entity's <code>gravity</code> from <a href="Vec3">Vec3.ZERO</a>, you need to give it a small <code>velocity</code> in order to kick off physics simulation.</p>
<p></p></td></tr>
<tr><td><code>acceleration</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The current, measured acceleration of the entity, in m/s<sup>2</sup>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>restitution</code></td><td>number</td><td><code>0.5</code></td><td><p>The "bounciness" of an entity when it collides, range <code>0.0</code> – <code>0.99</code>. The higher the value, the more bouncy.</p></td></tr>
<tr><td><code>friction</code></td><td>number</td><td><code>0.5</code></td><td><p>How much an entity slows down when it's moving against another, range <code>0.0</code> – <code>10.0</code>. The higher the value, the more quickly it slows down. Examples: <code>0.1</code> for ice, <code>0.9</code> for sandpaper.</p></td></tr>
<tr><td><code>density</code></td><td>number</td><td><code>1000</code></td><td><p>The density of the entity in kg/m<sup>3</sup>, range <code>100</code> – <code>10000</code>. Examples: <code>100</code> for balsa wood, <code>10000</code> for silver. The density is used in conjunction with the entity's bounding box volume to work out its mass in the application of physics.</p></td></tr>
<tr><td><code>collisionless</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the entity shouldn't collide, <code>false</code> if it collides with items per its <code>collisionMask</code> property.</p></td></tr>
<tr><td><code>ignoreForCollisions</code></td><td>boolean</td><td></td><td><p>Synonym for <code>collisionless</code>.</p></td></tr>
<tr><td><code>collisionMask</code></td><td><a href="globals#CollisionMask">CollisionMask</a></td><td><code>31</code></td><td><p>What types of items the entity should collide with.</p></td></tr>
<tr><td><code>collidesWith</code></td><td>string</td><td><code>&quot;static,dynamic,kinematic,myAvatar,otherAvatar,&quot;</code></td><td><p>Synonym for <code>collisionMask</code>, in text format.</p></td></tr>
<tr><td><code>collisionSoundURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The sound that's played when the entity experiences a collision. Valid file formats are per <a href="SoundObject"><code>SoundObject</code></a>.</p></td></tr>
<tr><td><code>dynamic</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the entity's movement is affected by collisions, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>collisionsWillMove</code></td><td>boolean</td><td></td><td><p>A synonym for <code>dynamic</code>.</p></td></tr>
<tr><td><code>href</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>A "hifi://" metaverse address that a user is teleported to when they click on the entity.</p></td></tr>
<tr><td><code>description</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>A description of the <code>href</code> property value.</p></td></tr>
<tr><td><code>userData</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>Used to store extra data about the entity in JSON format. </p>
<p><strong>Warning:</strong> Other apps may also use this property, so make sure you handle data stored by other apps: edit only your bit and leave the rest of the data intact. You can use <code>JSON.parse()</code> to parse the string into a JavaScript object which you can manipulate the properties of, and use <code>JSON.stringify()</code> to convert the object into a string to put back in the property.</p>
<p></p></td></tr>
<tr><td><code>privateUserData</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>Like <code>userData</code>, but only accessible by server entity scripts, assignment client scripts, and users who have "Can Get and Set Private User Data" permissions in the world.</p></td></tr>
<tr><td><code>script</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of the client entity script, if any, that is attached to the entity.</p></td></tr>
<tr><td><code>scriptTimestamp</code></td><td>number</td><td><code>0</code></td><td><p>Used to indicate when the client entity script was loaded. Should be an integer number of milliseconds since midnight GMT on January 1, 1970 (e.g., as supplied by <code>Date.now()</code>. If you update the property's value, the <code>script</code> is re-downloaded and reloaded. This is how the "reload" button beside the "script URL" field in properties tab of the Create app works.</p></td></tr>
<tr><td><code>serverScripts</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of the server entity script, if any, that is attached to the entity.</p></td></tr>
<tr><td><code>scriptsEnabled</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the entity's client and server entity scripts run, <code>false</code> if they don't. Setting it to <code>false</code> unloads them everywhere (their <code>unload</code> methods are called) and keeps them unloaded, for everyone, until it is set back to <code>true</code>; then they load again as if their URLs had just been set. <code>script</code> and <code>serverScripts</code> keep their URLs.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><code>Uuid.NULL</code></td><td><p>The ID of the entity or avatar that the entity is parented to. A value of <a href="Uuid">Uuid.NULL</a> is used if the entity is not parented.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>number</td><td><code>65535</code></td><td><p>The joint of the entity or avatar that the entity is parented to. Use <code>65535</code> or <code>-1</code> to parent to the entity or avatar's position and orientation rather than a joint.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The position of the entity relative to its parent if the entity is parented, otherwise the same value as <code>position</code>. If the entity is parented to an avatar and is an avatar entity so that it scales with the avatar, this value remains the original local position value while the avatar scale changes.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td><code>0,0,0,1</code></td><td><p>The rotation of the entity relative to its parent if the entity is parented, otherwise the same value as <code>rotation</code>.</p></td></tr>
<tr><td><code>localVelocity</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The velocity of the entity relative to its parent if the entity is parented, otherwise the same value as <code>velocity</code>.</p></td></tr>
<tr><td><code>localAngularVelocity</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The angular velocity of the entity relative to its parent if the entity is parented, otherwise the same value as <code>angularVelocity</code>.</p></td></tr>
<tr><td><code>localDimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the entity. If the entity is parented to an avatar and is an avatar entity so that it scales with the avatar, this value remains the original dimensions value while the avatar scale changes.</p></td></tr>
<tr><td><code>boundingBox</code></td><td><a href="#BoundingBox">Entities.BoundingBox</a></td><td></td><td><p>The axis-aligned bounding box that tightly encloses the entity. <em>Read-only.</em></p></td></tr>
<tr><td><code>queryAACube</code></td><td><a href="globals#AACube">AACube</a></td><td></td><td><p>The axis-aligned cube that determines where the entity lives in the entity server's octree. The cube may be considerably larger than the entity in some situations, e.g., when the entity is grabbed by an avatar: the position of the entity is determined through avatar mixer updates and so the AA cube is expanded in order to reduce unnecessary entity server updates. Scripts should not change this property's value.</p></td></tr>
<tr><td><code>actionData</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>Base-64 encoded compressed dump of the actions associated with the entity. This property is typically not used in scripts directly; rather, functions that manipulate an entity's actions update it, e.g., <a href="Entities#addAction"><code>Entities.addAction</code></a>. The size of this property increases with the number of actions. Because this property value has to fit within a network packet, there is a limit to the number of actions that an entity can have; edits which would result in overflow are rejected. <em>Read-only.</em></p></td></tr>
<tr><td><code>renderInfo</code></td><td><a href="#RenderInfo">Entities.RenderInfo</a></td><td></td><td><p>Information on the cost of rendering the entity. Currently information is only provided for <code>Model</code> entities. <em>Read-only.</em></p></td></tr>
<tr><td><code>cloneable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the domain or avatar entity can be cloned via <a href="Entities#cloneEntity"><code>Entities.cloneEntity</code></a>, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>cloneLifetime</code></td><td>number</td><td><code>300</code></td><td><p>The entity lifetime for clones created from this entity.</p></td></tr>
<tr><td><code>cloneLimit</code></td><td>number</td><td><code>0</code></td><td><p>The total number of clones of this entity that can exist in the world at any given time.</p></td></tr>
<tr><td><code>cloneDynamic</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if clones created from this entity will have their <code>dynamic</code> property set to <code>true</code>, <code>false</code> if they won't.</p></td></tr>
<tr><td><code>cloneAvatarEntity</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if clones created from this entity will be created as avatar entities, <code>false</code> if they won't be.</p></td></tr>
<tr><td><code>cloneGrabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if clones created from this entity will have their <code>grabbable</code> property set to <code>true</code>, <code>false</code> if they won't.</p></td></tr>
<tr><td><code>cloneOriginID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the entity that this entity was cloned from.</p></td></tr>
<tr><td><code>grab</code></td><td><a href="#Grab">Entities.Grab</a></td><td></td><td><p>The entity's grab-related properties.</p></td></tr>
<tr><td><code>vehicle</code></td><td><a href="#Vehicle">Entities.Vehicle</a></td><td></td><td><p>The entity's vehicle properties (PHYSICS.md round 6): what makes it a chassis with wheels and seats, or a wheel of one, and the simulation's state.</p></td></tr>
<tr><td><code>itemName</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p><em>From the old marketplace; does nothing in Darkride.</em> Certifiable name of the Marketplace item.</p></td></tr>
<tr><td><code>itemDescription</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p><em>From the old marketplace; does nothing in Darkride.</em> Certifiable description of the Marketplace item.</p></td></tr>
<tr><td><code>itemCategories</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p><em>From the old marketplace; does nothing in Darkride.</em> Certifiable category of the Marketplace item.</p></td></tr>
<tr><td><code>itemArtist</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p><em>From the old marketplace; does nothing in Darkride.</em> Certifiable artist that created the Marketplace item.</p></td></tr>
<tr><td><code>itemLicense</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p><em>From the old marketplace; does nothing in Darkride.</em> Certifiable license URL for the Marketplace item.</p></td></tr>
<tr><td><code>limitedRun</code></td><td>number</td><td><code>4294967295</code></td><td><p><em>From the old marketplace; does nothing in Darkride.</em> Certifiable maximum integer number of editions (copies) of the Marketplace item allowed to be sold.</p></td></tr>
<tr><td><code>editionNumber</code></td><td>number</td><td><code>0</code></td><td><p><em>From the old marketplace; does nothing in Darkride.</em> Certifiable integer edition (copy) number or the Marketplace item. Each copy sold in the Marketplace is numbered sequentially, starting at 1.</p></td></tr>
<tr><td><code>entityInstanceNumber</code></td><td>number</td><td><code>0</code></td><td><p><em>From the old marketplace; does nothing in Darkride.</em> Certifiable integer instance number for identical entities in a Marketplace item. A Marketplace item may have multiple, identical parts. If so, then each is numbered sequentially with an instance number.</p></td></tr>
<tr><td><code>marketplaceID</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p><em>From the old marketplace; does nothing in Darkride.</em> Certifiable UUID for the Marketplace item, as used in the URL of the item's download and its Marketplace Web page.</p></td></tr>
<tr><td><code>certificateID</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p><em>From the old marketplace; does nothing in Darkride.</em> Hash of the entity's static certificate JSON, signed by the artist's private key.</p></td></tr>
<tr><td><code>staticCertificateVersion</code></td><td>number</td><td><code>0</code></td><td><p><em>From the old marketplace; does nothing in Darkride.</em> The version of the method used to generate the <code>certificateID</code>.</p></td></tr>
</tbody></table></div>
<div class="api-see" v-pre><strong>See also:</strong> <a href="#EntityProperties-Box">EntityProperties-Box</a>, <a href="#EntityProperties-Gizmo">EntityProperties-Gizmo</a>, <a href="#EntityProperties-Grid">EntityProperties-Grid</a>, <a href="#EntityProperties-Image">EntityProperties-Image</a>, <a href="#EntityProperties-Light">EntityProperties-Light</a>, <a href="#EntityProperties-Line">EntityProperties-Line</a>, <a href="#EntityProperties-Material">EntityProperties-Material</a>, <a href="#EntityProperties-Model">EntityProperties-Model</a>, <a href="#EntityProperties-ParticleEffect">EntityProperties-ParticleEffect</a>, <a href="#EntityProperties-PolyLine">EntityProperties-PolyLine</a>, <a href="#EntityProperties-Track">EntityProperties-Track</a>, <a href="#EntityProperties-Shape">EntityProperties-Shape</a>, <a href="#EntityProperties-Sphere">EntityProperties-Sphere</a>, <a href="#EntityProperties-Terrain">EntityProperties-Terrain</a>, <a href="#EntityProperties-Text">EntityProperties-Text</a>, <a href="#EntityProperties-Web">EntityProperties-Web</a>, <a href="#EntityProperties-Zone">EntityProperties-Zone</a></div>

</div>

<div class="api-entry">

### EntityProperties-Box {#EntityProperties-Box}

<div class="api-text" v-pre><p>The <code>"Box"</code> <a href="#EntityType">EntityType</a> is the same as the <code>"Shape"</code> <a href="#EntityType">EntityType</a> except that its <code>shape</code> value is always set to <code>"Cube"</code> when the entity is created. If its <code>shape</code> property value is subsequently changed then the entity's <code>type</code> will be reported as <code>"Sphere"</code> if the <code>shape</code> is set to <code>"Sphere"</code>, otherwise it will be reported as <code>"Shape"</code>.</p></div>
<div class="api-see" v-pre><strong>See also:</strong> <a href="#EntityProperties-Shape">EntityProperties-Shape</a></div>

</div>

<div class="api-entry">

### EntityProperties-Gizmo {#EntityProperties-Gizmo}

<div class="api-text" v-pre><p>The <code>"Gizmo"</code> <a href="#EntityType">EntityType</a> displays an entity that could be used as UI. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.1,0.001,0.1</code></td><td><p>The dimensions of the entity.</p></td></tr>
<tr><td><code>gizmoType</code></td><td><a href="#GizmoType">Entities.GizmoType</a></td><td><code>&quot;ring&quot;</code></td><td><p>The gizmo type of the entity.</p></td></tr>
<tr><td><code>ring</code></td><td><a href="#RingGizmo">Entities.RingGizmo</a></td><td></td><td><p>The ring gizmo properties.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### EntityProperties-Grid {#EntityProperties-Grid}

<div class="api-text" v-pre><p>The <code>"Grid"</code> <a href="#EntityType">EntityType</a> displays a grid on a 2D plane. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>0.1,0.1,0.01 - The dimensions of the entity.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the grid.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>1</code></td><td><p>The opacity of the grid.</p></td></tr>
<tr><td><code>pulse</code></td><td><a href="#Pulse">Entities.Pulse</a></td><td></td><td><p>Color and alpha pulse. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>followCamera</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the grid is always visible even as the camera moves to another position, <code>false</code> if it doesn't follow the camrmea.</p></td></tr>
<tr><td><code>majorGridEvery</code></td><td>number</td><td><code>5</code></td><td><p>Integer number of <code>minorGridEvery</code> intervals at which to draw a thick grid line. Minimum value = <code>1</code>.</p></td></tr>
<tr><td><code>minorGridEvery</code></td><td>number</td><td><code>1</code></td><td><p>Real number of meters at which to draw thin grid lines. Minimum value = <code>0.001</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a grid entity.</p></div>

```js
var grid = Entities.addEntity({
    type: "Grid",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 100.0, y: 100.0, z: 0.01 },
    followCamera: false,
    majorGridEvery: 4,
    minorGridEvery: 0.5,
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### EntityProperties-Image {#EntityProperties-Image}

<div class="api-text" v-pre><p>The <code>"Image"</code> <a href="#EntityType">EntityType</a> displays an image on a 2D rectangle in the world. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.1,0.1,0.01</code></td><td><p>The dimensions of the entity.</p></td></tr>
<tr><td><code>imageURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of the image to use.</p></td></tr>
<tr><td><code>emissive</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the image should be emissive (unlit), <code>false</code> if it shouldn't.</p></td></tr>
<tr><td><code>keepAspectRatio</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the image should maintain its aspect ratio, <code>false</code> if it shouldn't.</p></td></tr>
<tr><td><code>subImage</code></td><td><a href="globals#Rect">Rect</a></td><td><code>0,0,0,0</code></td><td><p>The portion of the image to display. If width or height are <code>0</code>, it defaults to the full image in that dimension.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the image.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>1</code></td><td><p>The opacity of the image.</p></td></tr>
<tr><td><code>pulse</code></td><td><a href="#Pulse">Entities.Pulse</a></td><td></td><td><p>Color and alpha pulse. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>billboardMode</code></td><td><a href="globals#BillboardMode">BillboardMode</a></td><td><code>&quot;none&quot;</code></td><td><p>Whether the entity is billboarded to face the camera.</p></td></tr>
<tr><td><code>faceCamera</code></td><td>boolean</td><td></td><td><p><code>true</code> if <code>billboardMode</code> is <code>"yaw"</code>, <code>false</code> if it isn't. Setting this property to <code>false</code> sets the <code>billboardMode</code> to <code>"none"</code>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>isFacingAvatar</code></td><td>boolean</td><td></td><td><p><code>true</code> if <code>billboardMode</code> is <code>"full"</code>, <code>false</code> if it isn't. Setting this property to <code>false</code> sets the <code>billboardMode</code> to <code>"none"</code>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create an image entity.</p></div>

```js
var image = Entities.addEntity({
    type: "Image",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.6, y: 0.3, z: 0.01 },
    imageURL: "https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg",
    billboardMode: "yaw",
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### EntityProperties-Light {#EntityProperties-Light}

<div class="api-text" v-pre><p>The <code>"Light"</code> <a href="#EntityType">EntityType</a> adds local lighting effects. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.1,0.1,0.1</code></td><td><p>The dimensions of the entity. Surfaces outside these dimensions are not lit by the light.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the light emitted.</p></td></tr>
<tr><td><code>intensity</code></td><td>number</td><td><code>1</code></td><td><p>The brightness of the light.</p></td></tr>
<tr><td><code>falloffRadius</code></td><td>number</td><td><code>0.1</code></td><td><p>The distance from the light's center at which intensity is reduced by 25%.</p></td></tr>
<tr><td><code>isSpotlight</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the light is directional, emitting along the entity's local negative z-axis; <code>false</code> if the light is a point light which emanates in all directions.</p></td></tr>
<tr><td><code>exponent</code></td><td>number</td><td><code>0</code></td><td><p>Affects the softness of the spotlight beam: the higher the value the softer the beam.</p></td></tr>
<tr><td><code>cutoff</code></td><td>number</td><td><code>1.57</code></td><td><p>Affects the size of the spotlight beam: the higher the value the larger the beam.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a spotlight pointing at the ground.</p></div>

```js
Entities.addEntity({
    type: "Light",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.5, z: -4 })),
    rotation: Quat.fromPitchYawRollDegrees(-75, 0, 0),
    dimensions: { x: 5, y: 5, z: 5 },
    intensity: 100,
    falloffRadius: 0.3,
    isSpotlight: true,
    exponent: 20,
    cutoff: 30,
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### EntityProperties-Line {#EntityProperties-Line}

<div class="api-text" v-pre><p>The <code>"Line"</code> <a href="#EntityType">EntityType</a> draws thin, straight lines between a sequence of two or more points. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>. </p>
<p class="important">Deprecated: Use <a href="#EntityProperties-PolyLine">PolyLine</a> entities instead.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.1,0.1,0.1</code></td><td><p>The dimensions of the entity. Must be sufficient to contain all the <code>linePoints</code>.</p></td></tr>
<tr><td><code>linePoints</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><code>[]</code></td><td><p>The sequence of points to draw lines between. The values are relative to the entity's position. A maximum of 70 points can be specified. The property's value is set only if all the <code>linePoints</code> lie within the entity's <code>dimensions</code>.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the line.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Draw lines in a "V".</p></div>

```js
var entity = Entities.addEntity({
    type: "Line",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -5 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 2, y: 2, z: 1 },
    linePoints: [
        { x: -1, y: 1, z: 0 },
        { x: 0, y: -1, z: 0 },
        { x: 1, y: 1, z: 0 },
    ],
    color: { red: 255, green: 0, blue: 0 },
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### EntityProperties-Material {#EntityProperties-Material}

<div class="api-text" v-pre><p>The <code>"Material"</code> <a href="#EntityType">EntityType</a> modifies existing materials on entities and avatars. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>. </p>
<p>To apply a material to an entity, set the material entity's <code>parentID</code> property to the entity ID. To apply a material to an avatar, set the material entity's <code>parentID</code> property to the avatar's session UUID. To apply a material to your avatar such that it persists across worlds and log-ins, create the material as an avatar entity by setting the <code>entityHostType</code> parameter in <a href="Entities#addEntity"><code>Entities.addEntity</code></a> to <code>"avatar"</code> and set the entity's <code>parentID</code> property to <code>MyAvatar.SELF_ID</code>. Material entities render as non-scalable spheres if they don't have their parent set.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.1,0.1,0.1</code></td><td><p>Used when <code>materialMappingMode == "projected"</code>.</p></td></tr>
<tr><td><code>materialURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>URL to a <a href="#MaterialResource">MaterialResource</a>. If you append <code>"#name"</code> to the URL, the material with that name in the <a href="#MaterialResource">MaterialResource</a> will be applied to the entity. Alternatively, set the property value to <code>"materialData"</code> to use the <code>materialData</code> property for the <a href="#MaterialResource">MaterialResource</a> values.</p></td></tr>
<tr><td><code>materialData</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>Used to store <a href="#MaterialResource">MaterialResource</a> data as a JSON string. You can use <code>JSON.parse()</code> to parse the string into a JavaScript object which you can manipulate the properties of, and use <code>JSON.stringify()</code> to convert the object into a string to put in the property.</p></td></tr>
<tr><td><code>priority</code></td><td>number</td><td><code>0</code></td><td><p>The priority for applying the material to its parent. Only the highest priority material is applied, with materials of the same priority randomly assigned. Materials that come with the model have a priority of <code>0</code>.</p></td></tr>
<tr><td><code>parentMaterialName</code></td><td>string</td><td><code>&quot;0&quot;</code></td><td><p>Selects the mesh part or parts within the parent to which to apply the material. If in the format <code>"mat::string"</code>, all mesh parts with material name <code>"string"</code> are replaced. If <code>"all"</code>, then all mesh parts are replaced. Otherwise the property value is parsed as an unsigned integer, specifying the mesh part index to modify. </p>
<p>If the string represents an array (starts with <code>"["</code> and ends with <code>"]"</code>), the string is split at each <code>","</code> and each element parsed as either a number or a string if it starts with <code>"mat::"</code>. For example, <code>"[0,1,mat::string,mat::string2]"</code> will replace mesh parts 0 and 1, and any mesh parts with material <code>"string"</code> or <code>"string2"</code>. Do not put spaces around the commas. Invalid values are parsed to <code>0</code>.</p>
<p></p></td></tr>
<tr><td><code>materialMappingMode</code></td><td>string</td><td><code>&quot;uv&quot;</code></td><td><p>How the material is mapped to the entity. Either <code>"uv"</code> or <code>"projected"</code>. In <code>"uv"</code> mode, the material is evaluated within the UV space of the mesh it is applied to. In <code>"projected"</code> mode, the 3D transform (position, rotation, and dimensions) of the Material entity is used to evaluate the texture coordinates for the material.</p></td></tr>
<tr><td><code>materialMappingPos</code></td><td><a href="globals#Vec2">Vec2</a></td><td><code>0,0</code></td><td><p>Offset position in UV-space of the top left of the material, range <code>{ x: 0, y: 0 }</code> – <code>{ x: 1, y: 1 }</code>.</p></td></tr>
<tr><td><code>materialMappingScale</code></td><td><a href="globals#Vec2">Vec2</a></td><td><code>1,1</code></td><td><p>How much to scale the material within the parent's UV-space.</p></td></tr>
<tr><td><code>materialMappingRot</code></td><td>number</td><td><code>0</code></td><td><p>How much to rotate the material within the parent's UV-space, in degrees.</p></td></tr>
<tr><td><code>materialRepeat</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the material repeats, <code>false</code> if it doesn't. If <code>false</code>, fragments outside of texCoord 0 – 1 will be discarded. Works in both <code>"uv"</code> and <code>"projected"</code> modes.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Color a sphere using a Material entity.</p></div>

```js
var entityID = Entities.addEntity({
    type: "Sphere",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 1, y: 1, z: 1 },
    color: { red: 128, green: 128, blue: 128 },
    lifetime: 300  // Delete after 5 minutes.
});

var materialID = Entities.addEntity({
    type: "Material",
    parentID: entityID,
    materialURL: "materialData",
    priority: 1,
    materialData: JSON.stringify({
        materialVersion: 1,
        materials: {
            // Value overrides entity's "color" property.
            albedo: [1.0, 1.0, 0]  // Yellow
        }
    })
});
```

</div>

<div class="api-entry">

### EntityProperties-Model {#EntityProperties-Model}

<div class="api-text" v-pre><p>The <code>"Model"</code> <a href="#EntityType">EntityType</a> displays a glTF, FBX, or OBJ model. When adding an entity, if no <code>dimensions</code> value is specified then the model is automatically sized to its <code><a href="#EntityProperties">naturalDimensions</a></code>. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.1,0.1,0.1</code></td><td><p>The dimensions of the entity. When adding an entity, if no <code>dimensions</code> value is specified then the model is automatically sized to its <code><a href="#EntityProperties">naturalDimensions</a></code>.</p></td></tr>
<tr><td><code>modelURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of the glTF, FBX, or OBJ model. glTF models may be in JSON or binary format (".gltf" or ".glb" URLs respectively). Baked models' URLs have ".baked" before the file type. Model files may also be compressed in GZ format, in which case the URL ends in ".gz".</p></td></tr>
<tr><td><code>modelScale</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The scale factor applied to the model's dimensions. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>blendshapeCoefficients</code></td><td>string</td><td></td><td><p>A JSON string of a map of blendshape names to values. Only stores set values. When editing this property, only coefficients that you are editing will change; it will not explicitly reset other coefficients.</p></td></tr>
<tr><td><code>textures</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>A JSON string of texture name, URL pairs used when rendering the model in place of the model's original textures. Use a texture name from the <code>originalTextures</code> property to override that texture. Only the texture names and URLs to be overridden need be specified; original textures are used where there are no overrides. You can use <code>JSON.stringify()</code> to convert a JavaScript object of name, URL pairs into a JSON string.</p></td></tr>
<tr><td><code>originalTextures</code></td><td>string</td><td><code>&quot;{}&quot;</code></td><td><p>A JSON string of texture name, URL pairs used in the model. The property value is filled in after the entity has finished rezzing (i.e., textures have loaded). You can use <code>JSON.parse()</code> to parse the JSON string into a JavaScript object of name, URL pairs. <em>Read-only.</em></p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p><em>Currently not used.</em></p></td></tr>
<tr><td><code>shapeType</code></td><td><a href="globals#ShapeType">ShapeType</a></td><td><code>&quot;none&quot;</code></td><td><p>The shape of the collision hull used if collisions are enabled.</p></td></tr>
<tr><td><code>compoundShapeURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The model file to use for the compound shape if <code>shapeType</code> is <code>"compound"</code>.</p></td></tr>
<tr><td><code>animation</code></td><td><a href="#AnimationProperties">Entities.AnimationProperties</a></td><td></td><td><p>An animation to play on the model.</p></td></tr>
<tr><td><code>jointRotations</code></td><td>Array&lt;<a href="Quat">Quat</a>&gt;</td><td><code>[]</code></td><td><p>Joint rotations applied to the model; <code>[]</code> if none are applied or the model hasn't loaded. The array indexes are per <a href="Entities#getJointIndex">getJointIndex</a>. Rotations are relative to each joint's parent. </p>
<p>Joint rotations can be set by <a href="Entities#setLocalJointRotation">setLocalJointRotation</a> and similar functions, or by setting the value of this property. If you set a joint rotation using this property, you also need to set the corresponding <code>jointRotationsSet</code> value to <code>true</code>.</p>
<p></p></td></tr>
<tr><td><code>jointRotationsSet</code></td><td>Array&lt;boolean&gt;</td><td><code>[]</code></td><td><p><code>true</code> values for joints that have had rotations applied, <code>false</code> otherwise; <code>[]</code> if none are applied or the model hasn't loaded. The array indexes are per <a href="Entities#getJointIndex">getJointIndex</a>.</p></td></tr>
<tr><td><code>jointTranslations</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><code>[]</code></td><td><p>Joint translations applied to the model; <code>[]</code> if none are applied or the model hasn't loaded. The array indexes are per <a href="Entities#getJointIndex">getJointIndex</a>. Translations are relative to each joint's parent. </p>
<p>Joint translations can be set by <a href="Entities#setLocalJointTranslation">setLocalJointTranslation</a> and similar functions, or by setting the value of this property. If you set a joint translation using this property you also need to set the corresponding <code>jointTranslationsSet</code> value to <code>true</code>.</p>
<p></p></td></tr>
<tr><td><code>jointTranslationsSet</code></td><td>Array&lt;boolean&gt;</td><td><code>[]</code></td><td><p><code>true</code> values for joints that have had translations applied, <code>false</code> otherwise; <code>[]</code> if none are applied or the model hasn't loaded. The array indexes are per <a href="Entities#getJointIndex">getJointIndex</a>.</p></td></tr>
<tr><td><code>relayParentJoints</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if when the entity is parented to an avatar, the avatar's joint rotations are applied to the entity's joints; <code>false</code> if a parent avatar's joint rotations are not applied to the entity's joints.</p></td></tr>
<tr><td><code>groupCulled</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the mesh parts of the model are LOD culled as a group, <code>false</code> if separate mesh parts are LOD culled individually.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Rez a Vive tracker puck.</p></div>

```js
var entity = Entities.addEntity({
    type: "Model",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -2 })),
    rotation: MyAvatar.orientation,
    modelURL: "http://content.highfidelity.com/seefo/production/puck-attach/vive_tracker_puck.obj",
    dimensions: { x: 0.0945, y: 0.0921, z: 0.0423 },
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### EntityProperties-ParticleEffect {#EntityProperties-ParticleEffect}

<div class="api-text" v-pre><p>The <code>"ParticleEffect"</code> <a href="#EntityType">EntityType</a> displays a particle system that can be used to simulate things such as fire, smoke, snow, magic spells, etc. The particles emanate from an ellipsoid or part thereof. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isEmitting</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if particles are being emitted, <code>false</code> if they aren't.</p></td></tr>
<tr><td><code>maxParticles</code></td><td>number</td><td><code>1000</code></td><td><p>The maximum number of particles to render at one time. Older particles are deleted if necessary when new ones are created.</p></td></tr>
<tr><td><code>lifespan</code></td><td>number</td><td><code>3s</code></td><td><p>How long, in seconds, each particle lives.</p></td></tr>
<tr><td><code>emitRate</code></td><td>number</td><td><code>15</code></td><td><p>The number of particles per second to emit.</p></td></tr>
<tr><td><code>emitSpeed</code></td><td>number</td><td><code>5</code></td><td><p>The speed, in m/s, that each particle is emitted at.</p></td></tr>
<tr><td><code>speedSpread</code></td><td>number</td><td><code>1</code></td><td><p>The spread in speeds at which particles are emitted at. For example, if <code>emitSpeed == 5</code> and <code>speedSpread == 1</code>, particles will be emitted with speeds in the range <code>4</code> – <code>6</code>m/s.</p></td></tr>
<tr><td><code>emitAcceleration</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,-9.8,0</code></td><td><p>The acceleration that is applied to each particle during its lifetime. The default is Earth's gravity value.</p></td></tr>
<tr><td><code>accelerationSpread</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The spread in accelerations that each particle is given. For example, if <code>emitAccelerations == {x: 0, y: -9.8, z: 0}</code> and <code>accelerationSpread == {x: 0, y: 1, z: 0}</code>, each particle will have an acceleration in the range <code>{x: 0, y: -10.8, z: 0}</code> – <code>{x: 0, y: -8.8, z: 0}</code>.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The dimensions of the particle effect, i.e., a bounding box containing all the particles during their lifetimes, assuming that <code>emitterShouldTrail == false</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>emitterShouldTrail</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if particles are "left behind" as the emitter moves, <code>false</code> if they stay within the entity's dimensions.</p></td></tr>
<tr><td><code>emitOrientation</code></td><td><a href="Quat">Quat</a></td><td><code>-0.707,0,0,0.707</code></td><td><p>The orientation of particle emission relative to the entity's axes. By default, particles emit along the entity's local z-axis, and <code>azimuthStart</code> and <code>azimuthFinish</code> are relative to the entity's local x-axis. The default value is a rotation of -90 degrees about the local x-axis, i.e., the particles emit vertically.</p></td></tr>
<tr><td><code>shapeType</code></td><td><a href="globals#ShapeType">ShapeType</a></td><td><code>&quot;ellipsoid&quot;</code></td><td><p>The shape from which particles are emitted.</p></td></tr>
<tr><td><code>compoundShapeURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The model file to use for the compound shape if <code>shapeType == "compound"</code>.</p></td></tr>
<tr><td><code>emitDimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The dimensions of the shape from which particles are emitted.</p></td></tr>
<tr><td><code>emitRadiusStart</code></td><td>number</td><td><code>1</code></td><td><p>The starting radius within the shape at which particles start being emitted; range <code>0.0</code> – <code>1.0</code> for the center to the surface, respectively. Particles are emitted from the portion of the shape that lies between <code>emitRadiusStart</code> and the shape's surface.</p></td></tr>
<tr><td><code>polarStart</code></td><td>number</td><td><code>0</code></td><td><p>The angle in radians from the entity's local z-axis at which particles start being emitted within the shape; range <code>0</code> – <code>Math.PI</code>. Particles are emitted from the portion of the shape that lies between <code>polarStart</code> and <code>polarFinish</code>. Only used if <code>shapeType</code> is <code>"ellipsoid"</code> or <code>"sphere"</code>.</p></td></tr>
<tr><td><code>polarFinish</code></td><td>number</td><td><code>0</code></td><td><p>The angle in radians from the entity's local z-axis at which particles stop being emitted within the shape; range <code>0</code> – <code>Math.PI</code>. Particles are emitted from the portion of the shape that lies between <code>polarStart</code> and <code>polarFinish</code>. Only used if <code>shapeType</code> is <code>"ellipsoid"</code> or <code>"sphere"</code>.</p></td></tr>
<tr><td><code>azimuthStart</code></td><td>number</td><td><code>-Math.PI</code></td><td><p>The angle in radians from the entity's local x-axis about the entity's local z-axis at which particles start being emitted; range <code>-Math.PI</code> – <code>Math.PI</code>. Particles are emitted from the portion of the shape that lies between <code>azimuthStart</code> and <code>azimuthFinish</code>. Only used if <code>shapeType</code> is <code>"ellipsoid"</code>, <code>"sphere"</code>, or <code>"circle"</code>.</p></td></tr>
<tr><td><code>azimuthFinish</code></td><td>number</td><td><code>Math.PI</code></td><td><p>The angle in radians from the entity's local x-axis about the entity's local z-axis at which particles stop being emitted; range <code>-Math.PI</code> – <code>Math.PI</code>. Particles are emitted from the portion of the shape that lies between <code>azimuthStart</code> and <code>azimuthFinish</code>. Only used if <code>shapeType</code> is <code>"ellipsoid"</code>, <code>"sphere"</code>, or <code>"circle"</code>.</p></td></tr>
<tr><td><code>textures</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of a JPG or PNG image file to display for each particle. If you want transparency, use PNG format.</p></td></tr>
<tr><td><code>particleRadius</code></td><td>number</td><td><code>0.025</code></td><td><p>The radius of each particle at the middle of its life.</p></td></tr>
<tr><td><code>radiusStart</code></td><td>number</td><td><code>null</code></td><td><p>The radius of each particle at the start of its life. If <code>null</code>, the <code>particleRadius</code> value is used.</p></td></tr>
<tr><td><code>radiusFinish</code></td><td>number</td><td><code>null</code></td><td><p>The radius of each particle at the end of its life. If <code>null</code>, the <code>particleRadius</code> value is used.</p></td></tr>
<tr><td><code>radiusSpread</code></td><td>number</td><td><code>0</code></td><td><p>The spread in radius that each particle is given. For example, if <code>particleRadius == 0.5</code> and <code>radiusSpread == 0.25</code>, each particle will have a radius in the range <code>0.25</code> – <code>0.75</code>.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of each particle at the middle of its life.</p></td></tr>
<tr><td><code>colorStart</code></td><td><a href="globals#ColorFloat">ColorFloat</a></td><td><code>null,null,null</code></td><td><p>The color of each particle at the start of its life. If any of the component values are undefined, the <code>color</code> value is used.</p></td></tr>
<tr><td><code>colorFinish</code></td><td><a href="globals#ColorFloat">ColorFloat</a></td><td><code>null,null,null</code></td><td><p>The color of each particle at the end of its life. If any of the component values are undefined, the <code>color</code> value is used.</p></td></tr>
<tr><td><code>colorSpread</code></td><td><a href="globals#Color">Color</a></td><td><code>0,0,0</code></td><td><p>The spread in color that each particle is given. For example, if <code>color == {red: 100, green: 100, blue: 100}</code> and <code>colorSpread == {red: 10, green: 25, blue: 50}</code>, each particle will have a color in the range <code>{red: 90, green: 75, blue: 50}</code> – <code>{red: 110, green: 125, blue: 150}</code>.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>1</code></td><td><p>The opacity of each particle at the middle of its life.</p></td></tr>
<tr><td><code>alphaStart</code></td><td>number</td><td><code>null</code></td><td><p>The opacity of each particle at the start of its life. If <code>null</code>, the <code>alpha</code> value is used.</p></td></tr>
<tr><td><code>alphaFinish</code></td><td>number</td><td><code>null</code></td><td><p>The opacity of each particle at the end of its life. If <code>null</code>, the <code>alpha</code> value is used.</p></td></tr>
<tr><td><code>alphaSpread</code></td><td>number</td><td><code>0</code></td><td><p>The spread in alpha that each particle is given. For example, if <code>alpha == 0.5</code> and <code>alphaSpread == 0.25</code>, each particle will have an alpha in the range <code>0.25</code> – <code>0.75</code>.</p></td></tr>
<tr><td><code>pulse</code></td><td><a href="#Pulse">Entities.Pulse</a></td><td></td><td><p>Color and alpha pulse. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>particleSpin</code></td><td>number</td><td><code>0</code></td><td><p>The rotation of each particle at the middle of its life, range <code>-2 * Math.PI</code> – <code>2 * Math.PI</code> radians.</p></td></tr>
<tr><td><code>spinStart</code></td><td>number</td><td><code>null</code></td><td><p>The rotation of each particle at the start of its life, range <code>-2 * Math.PI</code> – <code>2 * Math.PI</code> radians. If <code>null</code>, the <code>particleSpin</code> value is used.</p></td></tr>
<tr><td><code>spinFinish</code></td><td>number</td><td><code>null</code></td><td><p>The rotation of each particle at the end of its life, range <code>-2 * Math.PI</code> – <code>2 * Math.PI</code> radians. If <code>null</code>, the <code>particleSpin</code> value is used.</p></td></tr>
<tr><td><code>spinSpread</code></td><td>number</td><td><code>0</code></td><td><p>The spread in spin that each particle is given, range <code>0</code> – <code>2 * Math.PI</code> radians. For example, if <code>particleSpin == Math.PI</code> and <code>spinSpread == Math.PI / 2</code>, each particle will have a rotation in the range <code>Math.PI / 2</code> – <code>3 * Math.PI / 2</code>.</p></td></tr>
<tr><td><code>rotateWithEntity</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the particles' rotations are relative to the entity's instantaneous rotation, <code>false</code> if they're relative to world coordinates. If <code>true</code> with <code>particleSpin == 0</code>, the particles keep oriented per the entity's orientation.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a ball of green smoke.</p></div>

```js
particles = Entities.addEntity({
    type: "ParticleEffect",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.5, z: -4 })),
    lifespan: 5,
    emitRate: 10,
    emitSpeed: 0.02,
    speedSpread: 0.01,
    emitAcceleration: { x: 0, y: 0.02, z: 0 },
    polarFinish: Math.PI,
    textures: "qrc:///images/wispy-smoke.png",
    particleRadius: 0.1,
    color: { red: 0, green: 255, blue: 0 },
    alphaFinish: 0,
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### EntityProperties-PolyLine {#EntityProperties-PolyLine}

<div class="api-text" v-pre><p>The <code>"PolyLine"</code> <a href="#EntityType">EntityType</a> draws textured, straight lines between a sequence of points. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.1,0.1,0.1</code></td><td><p>The dimensions of the entity, i.e., the size of the bounding box that contains the lines drawn. <em>Read-only.</em></p></td></tr>
<tr><td><code>linePoints</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><code>[]</code></td><td><p>The sequence of points to draw lines between. The values are relative to the entity's position. A maximum of 70 points can be specified.</p></td></tr>
<tr><td><code>normals</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><code>[]</code></td><td><p>The normal vectors for the line's surface at the <code>linePoints</code>. The values are relative to the entity's orientation. Must be specified in order for the entity to render.</p></td></tr>
<tr><td><code>strokeWidths</code></td><td>Array&lt;number&gt;</td><td><code>[]</code></td><td><p>The widths, in m, of the line at the <code>linePoints</code>. Must be specified in order for the entity to render.</p></td></tr>
<tr><td><code>strokeColors</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><code>[]</code></td><td><p>The base colors of each point, with values in the range <code>0.0,0.0,0.0</code> – <code>1.0,1.0,1.0</code>. These colors are multiplied with the color of the texture. If there are more line points than stroke colors, the <code>color</code> property value is used for the remaining points. </p>
<p><strong>Warning:</strong> The ordinate values are in the range <code>0.0</code> – <code>1.0</code>.</p>
<p></p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>Used as the color for each point if <code>strokeColors</code> doesn't have a value for the point.</p></td></tr>
<tr><td><code>textures</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of a JPG or PNG texture to use for the lines. If you want transparency, use PNG format.</p></td></tr>
<tr><td><code>isUVModeStretch</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the texture is stretched to fill the whole line, <code>false</code> if the texture repeats along the line.</p></td></tr>
<tr><td><code>glow</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the opacity of the strokes drops off away from the line center, <code>false</code> if it doesn't.</p></td></tr>
<tr><td><code>faceCamera</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if each line segment rotates to face the camera, <code>false</code> if they don't.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Draw a textured "V".</p></div>

```js
var entity = Entities.addEntity({
    type: "PolyLine",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -5 })),
    rotation: MyAvatar.orientation,
    linePoints: [
        { x: -1, y: 0.5, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 0.5, z: 0 }
    ],
    normals: [
        { x: 0, y: 0, z: 1 },
        { x: 0, y: 0, z: 1 },
        { x: 0, y: 0, z: 1 }
    ],
    strokeWidths: [ 0.1, 0.1, 0.1 ],
    color: { red: 255, green: 0, blue: 0 },  // Use just the red channel from the image.
    textures: "http://hifi-production.s3.amazonaws.com/DomainContent/Toybox/flowArts/trails.png",
    isUVModeStretch: true,
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### EntityProperties-Shape {#EntityProperties-Shape}

<div class="api-text" v-pre><p>The <code>"Shape"</code> <a href="#EntityType">EntityType</a> displays an entity of a specified <code>shape</code>. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>shape</code></td><td><a href="#Shape">Entities.Shape</a></td><td><code>&quot;Sphere&quot;</code></td><td><p>The shape of the entity.</p></td></tr>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.1,0.1,0.1</code></td><td><p>The dimensions of the entity.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the entity.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>1</code></td><td><p>The opacity of the entity, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>pulse</code></td><td><a href="#Pulse">Entities.Pulse</a></td><td></td><td><p>Color and alpha pulse. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a cylinder.</p></div>

```js
var shape = Entities.addEntity({
    type: "Shape",
    shape: "Cylinder",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.4, y: 0.6, z: 0.4 },
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### EntityProperties-Sphere {#EntityProperties-Sphere}

<div class="api-text" v-pre><p>The <code>"Sphere"</code> <a href="#EntityType">EntityType</a> is the same as the <code>"Shape"</code> <a href="#EntityType">EntityType</a> except that its <code>shape</code> value is always set to <code>"Sphere"</code> when the entity is created. If its <code>shape</code> property value is subsequently changed then the entity's <code>type</code> will be reported as <code>"Box"</code> if the <code>shape</code> is set to <code>"Cube"</code>, otherwise it will be reported as <code>"Shape"</code>.</p></div>
<div class="api-see" v-pre><strong>See also:</strong> <a href="#EntityProperties-Shape">EntityProperties-Shape</a></div>

</div>

<div class="api-entry">

### EntityProperties-Terrain {#EntityProperties-Terrain}

<div class="api-text" v-pre><p>The <code>"Terrain"</code> <a href="#EntityType">EntityType</a> is voxel ground that can be shaped and dug. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The box the voxels fill: the voxel count along each side times the voxel size.</p></td></tr>
<tr><td><code>voxelSize</code></td><td>number</td><td><code>0.5</code></td><td><p>The size of one voxel, in meters.</p></td></tr>
<tr><td><code>terrainURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of the terrain file that holds the voxels.</p></td></tr>
<tr><td><code>terrainVersion</code></td><td>number</td><td><code>0</code></td><td><p>Counts up each time the terrain file is saved, so other clients know to fetch it again.</p></td></tr>
<tr><td><code>terrainLayers</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The terrain's material layers as a JSON array, one entry per voxel material index, up to eight: <code>[{"albedo": "https://.../grass.jpg", "tiling": 4}, ...]</code>, the tiling in meters per repeat. A layer without a texture, and a terrain without layers, draws in a plain colour.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### EntityProperties-Text {#EntityProperties-Text}

<div class="api-text" v-pre><p>The <code>"Text"</code> <a href="#EntityType">EntityType</a> displays a 2D rectangle of text in the world. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.1,0.1,0.01</code></td><td><p>The dimensions of the entity.</p></td></tr>
<tr><td><code>text</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The text to display on the face of the entity. Text wraps if necessary to fit. New lines can be created using <code>\n</code>. Overflowing lines are not displayed.</p></td></tr>
<tr><td><code>lineHeight</code></td><td>number</td><td><code>0.1</code></td><td><p>The height of each line of text (thus determining the font size).</p></td></tr>
<tr><td><code>textColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the text.</p></td></tr>
<tr><td><code>textAlpha</code></td><td>number</td><td><code>1.0</code></td><td><p>The opacity of the text.</p></td></tr>
<tr><td><code>backgroundColor</code></td><td><a href="globals#Color">Color</a></td><td><code>0,0,0</code></td><td><p>The color of the background rectangle.</p></td></tr>
<tr><td><code>backgroundAlpha</code></td><td>number</td><td><code>1.0</code></td><td><p>The opacity of the background.</p></td></tr>
<tr><td><code>pulse</code></td><td><a href="#Pulse">Entities.Pulse</a></td><td></td><td><p>Color and alpha pulse. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>leftMargin</code></td><td>number</td><td><code>0.0</code></td><td><p>The left margin, in meters.</p></td></tr>
<tr><td><code>rightMargin</code></td><td>number</td><td><code>0.0</code></td><td><p>The right margin, in meters.</p></td></tr>
<tr><td><code>topMargin</code></td><td>number</td><td><code>0.0</code></td><td><p>The top margin, in meters.</p></td></tr>
<tr><td><code>bottomMargin</code></td><td>number</td><td><code>0.0</code></td><td><p>The bottom margin, in meters.</p></td></tr>
<tr><td><code>unlit</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the entity is unaffected by lighting, <code>false</code> if it is lit by the key light and local lights.</p></td></tr>
<tr><td><code>font</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The font to render the text with. It can be one of the following: <code>"Courier"</code>, <code>"Inconsolata"</code>, <code>"Roboto"</code>, <code>"Timeless"</code>, or a path to a .sdff file.</p></td></tr>
<tr><td><code>textEffect</code></td><td><a href="#TextEffect">Entities.TextEffect</a></td><td><code>&quot;none&quot;</code></td><td><p>The effect that is applied to the text.</p></td></tr>
<tr><td><code>textEffectColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the effect.</p></td></tr>
<tr><td><code>textEffectThickness</code></td><td>number</td><td><code>0.2</code></td><td><p>The magnitude of the text effect, range <code>0.0</code> – <code>0.5</code>.</p></td></tr>
<tr><td><code>billboardMode</code></td><td><a href="globals#BillboardMode">BillboardMode</a></td><td><code>&quot;none&quot;</code></td><td><p>Whether the entity is billboarded to face the camera.</p></td></tr>
<tr><td><code>faceCamera</code></td><td>boolean</td><td></td><td><p><code>true</code> if <code>billboardMode</code> is <code>"yaw"</code>, <code>false</code> if it isn't. Setting this property to <code>false</code> sets the <code>billboardMode</code> to <code>"none"</code>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>isFacingAvatar</code></td><td>boolean</td><td></td><td><p><code>true</code> if <code>billboardMode</code> is <code>"full"</code>, <code>false</code> if it isn't. Setting this property to <code>false</code> sets the <code>billboardMode</code> to <code>"none"</code>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a text entity.</p></div>

```js
var text = Entities.addEntity({
    type: "Text",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.6, y: 0.3, z: 0.01 },
    lineHeight: 0.12,
    text: "Hello\nthere!",
    billboardMode: "yaw",
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### EntityProperties-Track {#EntityProperties-Track}

<div class="api-text" v-pre><p>The <code>"Track"</code> <a href="#EntityType">EntityType</a> is a curve through control points, in the entity's own space, that a train of entities rides along: an entity with <code>trackID</code> set to the track is moved along it by the physics, on a schedule of stations. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>trackPoints</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><code>[]</code></td><td><p>The control points, in the entity's local coordinates: a centripetal Catmull-Rom curve passes through each of them. Two at least, 256 at most.</p></td></tr>
<tr><td><code>trackBank</code></td><td>Array&lt;number&gt;</td><td><code>[]</code></td><td><p>The bank at each control point, in degrees: a roll about the track's direction. A short list is padded with zero.</p></td></tr>
<tr><td><code>trackDwell</code></td><td>Array&lt;number&gt;</td><td><code>[]</code></td><td><p>The stop at each control point, in seconds: more than zero makes the point a station the train stops at for that long.</p></td></tr>
<tr><td><code>trackClosed</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the track is a loop; otherwise a train shuttles back and forth between its ends.</p></td></tr>
<tr><td><code>trackSpeed</code></td><td>number</td><td><code>5</code></td><td><p>The train's cruising speed, in m/s.</p></td></tr>
<tr><td><code>trackAcceleration</code></td><td>number</td><td><code>1</code></td><td><p>The train's acceleration and braking, in m/s^2.</p></td></tr>
<tr><td><code>trainDistance</code></td><td>number</td><td><code>0</code></td><td><p><em>Read-only.</em> Where the train's reference point is along the track, in meters of arc length, at <code>trainTime</code>. The physics server writes the train's state; every client runs the same schedule on from it.</p></td></tr>
<tr><td><code>trainSpeed</code></td><td>number</td><td><code>0</code></td><td><p><em>Read-only.</em> The train's speed at <code>trainTime</code>, in m/s.</p></td></tr>
<tr><td><code>trainReversed</code></td><td>boolean</td><td><code>false</code></td><td><p><em>Read-only.</em> <code>true</code> if the train runs against the arc length (a shuttle on its way back).</p></td></tr>
<tr><td><code>trainDwell</code></td><td>number</td><td><code>0</code></td><td><p><em>Read-only.</em> How long the train still stands at its station, in seconds; <code>0</code> when it is moving.</p></td></tr>
<tr><td><code>trainStation</code></td><td>number</td><td><code>65535</code></td><td><p><em>Read-only.</em> The control point the train stands at or heads for; <code>65535</code> for none.</p></td></tr>
<tr><td><code>trainTime</code></td><td>number</td><td><code>0</code></td><td><p><em>Read-only.</em> The world time the state is for, in microseconds; <code>0</code> when no physics server has driven this track.</p></td></tr>
<tr><td><code>trackProfile</code></td><td>string</td><td><code>&quot;beam&quot;</code></td><td><p>What the track draws, and what collides, along its curve: <code>"beam"</code> is a monorail's box beam hung under the ride line, with pylons; <code>"none"</code> draws nothing (dress the track with models of your own).</p></td></tr>
<tr><td><code>trackWidth</code></td><td>number</td><td><code>0.8</code></td><td><p>The beam's width across the track, in meters.</p></td></tr>
<tr><td><code>trackHeight</code></td><td>number</td><td><code>1</code></td><td><p>The beam's height, in meters.</p></td></tr>
<tr><td><code>trackClearance</code></td><td>number</td><td><code>0.3</code></td><td><p>From the ride line (the curve a car's origin follows) down to the beam's top, in meters.</p></td></tr>
<tr><td><code>trackPylonSpacing</code></td><td>number</td><td><code>10</code></td><td><p>The distance between pylons along the track, in meters; <code>0</code> for no pylons.</p></td></tr>
<tr><td><code>trackPylonFloor</code></td><td>number</td><td><code>-8</code></td><td><p>The height of the pylons' feet in the entity's local coordinates, in meters: every pylon reaches from the beam's bottom down to this level, so pylons grow where the track climbs; none where the beam is already down at it.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The guideway's color; a Material entity can skin it.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### EntityProperties-Web {#EntityProperties-Web}

<div class="api-text" v-pre><p>The <code>"Web"</code> <a href="#EntityType">EntityType</a> displays a browsable web page. Each user views their own copy of the web page: if one user navigates to another page on the entity, other users do not see the change; if a video is being played, users don't see it in sync. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.1,0.1,0.01</code></td><td><p>The dimensions of the entity.</p></td></tr>
<tr><td><code>sourceUrl</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of the web page to display. This value does not change as you or others navigate on the Web entity.</p></td></tr>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the web surface. This color tints the web page displayed: the pixel colors on the web page are multiplied by the property color. For example, a value of <code>{ red: 255, green: 0, blue: 0 }</code> lets only the red channel of pixels' colors through.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><code>1</code></td><td><p>The opacity of the web surface.</p></td></tr>
<tr><td><code>pulse</code></td><td><a href="#Pulse">Entities.Pulse</a></td><td></td><td><p>Color and alpha pulse. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>billboardMode</code></td><td><a href="globals#BillboardMode">BillboardMode</a></td><td><code>&quot;none&quot;</code></td><td><p>Whether the entity is billboarded to face the camera.</p></td></tr>
<tr><td><code>faceCamera</code></td><td>boolean</td><td></td><td><p><code>true</code> if <code>billboardMode</code> is <code>"yaw"</code>, <code>false</code> if it isn't. Setting this property to <code>false</code> sets the <code>billboardMode</code> to <code>"none"</code>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>isFacingAvatar</code></td><td>boolean</td><td></td><td><p><code>true</code> if <code>billboardMode</code> is <code>"full"</code>, <code>false</code> if it isn't. Setting this property to <code>false</code> sets the <code>billboardMode</code> to <code>"none"</code>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed.</p>
<p></p></td></tr>
<tr><td><code>dpi</code></td><td>number</td><td><code>30</code></td><td><p>The resolution to display the page at, in dots per inch. If you convert this to dots per meter (multiply by 1 / 0.0254 = 39.3701) then multiply <code>dimensions.x</code> and <code>dimensions.y</code> by that value you get the resolution in pixels.</p></td></tr>
<tr><td><code>scriptURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of a JavaScript file to inject into the web page.</p></td></tr>
<tr><td><code>maxFPS</code></td><td>number</td><td><code>120</code></td><td><p>The maximum update rate for the web content, in frames/second.</p></td></tr>
<tr><td><code>inputMode</code></td><td><a href="globals#WebInputMode">WebInputMode</a></td><td><code>&quot;touch&quot;</code></td><td><p>The user input mode to use.</p></td></tr>
<tr><td><code>showKeyboardFocusHighlight</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the entity is highlighted when it has keyboard focus, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>transparentBackground</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the web entity uses a transparent background, <code>false</code> if it doesnt.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a Web entity displaying at 1920 x 1080 resolution.</p></div>

```js
var METERS_TO_INCHES = 39.3701;
var entity = Entities.addEntity({
    type: "Web",
    sourceUrl: "https://darkride.ai/",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -4 })),
    rotation: MyAvatar.orientation,
    dimensions: {
        x: 3,
        y: 3 * 1080 / 1920,
        z: 0.01
    },
    dpi: 1920 / (3 * METERS_TO_INCHES),
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### EntityProperties-Zone {#EntityProperties-Zone}

<div class="api-text" v-pre><p>The <code>"Zone"</code> <a href="#EntityType">EntityType</a> is a volume of lighting effects and avatar permissions. Avatar interaction events such as <a href="Entities#enterEntity"><code>Entities.enterEntity</code></a> are also often used with a Zone entity. It has properties in addition to the common <a href="#EntityProperties">EntityProperties</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dimensions</code></td><td><a href="Vec3">Vec3</a></td><td><code>0.1,0.1,0.1</code></td><td><p>The dimensions of the volume in which the zone's lighting effects and avatar permissions have effect.</p></td></tr>
<tr><td><code>shapeType</code></td><td><a href="globals#ShapeType">ShapeType</a></td><td><code>&quot;box&quot;</code></td><td><p>The shape of the volume in which the zone's lighting effects and avatar permissions have effect. Reverts to the default value if set to <code>"none"</code>, or set to <code>"compound"</code> and <code>compoundShapeURL</code> is <code>""</code>.</p></td></tr>
<tr><td><code>compoundShapeURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The model file to use for the compound shape if <code>shapeType</code> is <code>"compound"</code>.</p></td></tr>
<tr><td><code>keyLightMode</code></td><td><a href="#ComponentMode">Entities.ComponentMode</a></td><td><code>&quot;inherit&quot;</code></td><td><p>Configures the key light in the zone.</p></td></tr>
<tr><td><code>keyLight</code></td><td><a href="#KeyLight">Entities.KeyLight</a></td><td></td><td><p>The key light properties of the zone.</p></td></tr>
<tr><td><code>ambientLightMode</code></td><td><a href="#ComponentMode">Entities.ComponentMode</a></td><td><code>&quot;inherit&quot;</code></td><td><p>Configures the ambient light in the zone.</p></td></tr>
<tr><td><code>ambientLight</code></td><td><a href="#AmbientLight">Entities.AmbientLight</a></td><td></td><td><p>The ambient light properties of the zone.</p></td></tr>
<tr><td><code>skyboxMode</code></td><td><a href="#ComponentMode">Entities.ComponentMode</a></td><td><code>&quot;inherit&quot;</code></td><td><p>Configures the skybox displayed in the zone.</p></td></tr>
<tr><td><code>skybox</code></td><td><a href="#Skybox">Entities.Skybox</a></td><td></td><td><p>The skybox properties of the zone.</p></td></tr>
<tr><td><code>hazeMode</code></td><td><a href="#ComponentMode">Entities.ComponentMode</a></td><td><code>&quot;inherit&quot;</code></td><td><p>Configures the haze in the zone.</p></td></tr>
<tr><td><code>haze</code></td><td><a href="#Haze">Entities.Haze</a></td><td></td><td><p>The haze properties of the zone.</p></td></tr>
<tr><td><code>bloomMode</code></td><td><a href="#ComponentMode">Entities.ComponentMode</a></td><td><code>&quot;inherit&quot;</code></td><td><p>Configures the bloom in the zone.</p></td></tr>
<tr><td><code>bloom</code></td><td><a href="#Bloom">Entities.Bloom</a></td><td></td><td><p>The bloom properties of the zone.</p></td></tr>
<tr><td><code>flyingAllowed</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if visitors can fly in the zone; <code>false</code> if they cannot. Only works for domain entities.</p></td></tr>
<tr><td><code>ghostingAllowed</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if visitors with avatar collisions turned off will not collide with content in the zone; <code>false</code> if visitors will always collide with content in the zone. Only works for domain entities.</p></td></tr>
<tr><td><code>filterURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The URL of a JavaScript file that filters changes to properties of entities within the zone. It is periodically executed for each entity in the zone. It can, for example, be used to not allow changes to certain properties: </p>
<pre>function filter(properties) {&#10;    // Check and edit properties object values,&#10;    // e.g., properties.modelURL, as required.&#10;    return properties;&#10;}&#10;</pre>
<p></p></td></tr>
<tr><td><code>avatarPriority</code></td><td><a href="#AvatarPriorityMode">Entities.AvatarPriorityMode</a></td><td><code>&quot;inherit&quot;</code></td><td><p>Configures the priority of updates from avatars in the zone to other clients.</p></td></tr>
<tr><td><code>zoneCulling</code></td><td><a href="#ZoneCullingMode">Entities.ZoneCullingMode</a></td><td><code>&quot;inherit&quot;</code></td><td><p>Configures the culling mode of entities inside the zone.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a zone that casts a red key light along the x-axis.</p></div>

```js
var zone = Entities.addEntity({
    type: "Zone",
    position: MyAvatar.position,
    dimensions: { x: 100, y: 100, z: 100 },
    keyLightMode: "enabled",
    keyLight: {
        "color": { "red": 255, "green": 0, "blue": 0 },
        "direction": { "x": 1, "y": 0, "z": 0 }
    },
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### EntityPropertyInfo {#EntityPropertyInfo}

<div class="api-text" v-pre><p>Information about an entity property.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>propertyEnum</code></td><td>number</td><td><p>The internal number of the property.</p></td></tr>
<tr><td><code>minimum</code></td><td>string</td><td><p>The minimum numerical value the property may have, if available, otherwise <code>""</code>.</p></td></tr>
<tr><td><code>maximum</code></td><td>string</td><td><p>The maximum numerical value the property may have, if available, otherwise <code>""</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### EntityType {#EntityType}

<div class="api-text" v-pre><p>An entity may be one of the following types:</p>
 <table> <thead> <tr><th>Value</th><th>Description</th><th>Properties</th></tr>
 </thead>
 <tbody> <tr><td><code>"Shape"</code></td><td>A basic entity such as a cube. See also, the <code>"Box"</code> and <code>"Sphere"</code> entity types.</td> <td><a href="#EntityProperties-Shape">EntityProperties-Shape</a></td></tr>
 <tr><td><code>"Box"</code></td><td>A rectangular prism. This is a synonym of <code>"Shape"</code> for the case where the entity's <code>shape</code> property value is <code>"Cube"</code>. <p>If an entity is created with its <code>type</code> set to <code>"Box"</code> it will always be created with a <code>shape</code> property value of <code>"Cube"</code>. If an entity of type <code>Shape</code> or <code>Sphere</code> has its <code>shape</code> set to <code>"Cube"</code> then its <code>type</code> will be reported as <code>"Box"</code>.</p>
</td> <td><a href="#EntityProperties-Box">EntityProperties-Box</a></td></tr>
 <tr><td><code>"Sphere"</code></td><td>A sphere. This is a synonym of <code>"Shape"</code> for the case where the entity's <code>shape</code> property value is <code>"Sphere"</code>. <p>If an entity is created with its <code>type</code> set to <code>"Sphere"</code> it will always be created with a <code>shape</code> property value of <code>"Sphere"</code>. If an entity of type <code>Box</code> or <code>Shape</code> has its <code>shape</code> set to <code>"Sphere"</code> then its <code>type</code> will be reported as <code>"Sphere"</code>.</p>
</td> <td><a href="#EntityProperties-Sphere">EntityProperties-Sphere</a></td></tr>
 <tr><td><code>"Model"</code></td><td>A mesh model from a glTF, FBX, or OBJ file.</td> <td><a href="#EntityProperties-Model">EntityProperties-Model</a></td></tr>
 <tr><td><code>"Text"</code></td><td>A pane of text oriented in space.</td> <td><a href="#EntityProperties-Text">EntityProperties-Text</a></td></tr>
 <tr><td><code>"Image"</code></td><td>An image oriented in space.</td> <td><a href="#EntityProperties-Image">EntityProperties-Image</a></td></tr>
 <tr><td><code>"Web"</code></td><td>A browsable web page.</td> <td><a href="#EntityProperties-Web">EntityProperties-Web</a></td></tr>
 <tr><td><code>"ParticleEffect"</code></td><td>A particle system that can be used to simulate things such as fire, smoke, snow, magic spells, etc.</td> <td><a href="#EntityProperties-ParticleEffect">EntityProperties-ParticleEffect</a></td></tr>
 <tr><td><code>"Line"</code></td><td>A sequence of one or more simple straight lines.</td> <td><a href="#EntityProperties-Line">EntityProperties-Line</a></td></tr>
 <tr><td><code>"PolyLine"</code></td><td>A sequence of one or more textured straight lines.</td> <td><a href="#EntityProperties-PolyLine">EntityProperties-PolyLine</a></td></tr>
 <tr><td><code>"Grid"</code></td><td>A grid of lines in a plane.</td> <td><a href="#EntityProperties-Grid">EntityProperties-Grid</a></td></tr>
 <tr><td><code>"Gizmo"</code></td><td>A gizmo intended for UI.</td> <td><a href="#EntityProperties-Gizmo">EntityProperties-Gizmo</a></td></tr>
 <tr><td><code>"Light"</code></td><td>A local lighting effect.</td> <td><a href="#EntityProperties-Light">EntityProperties-Light</a></td></tr>
 <tr><td><code>"Zone"</code></td><td>A volume of lighting effects and avatar permissions.</td> <td><a href="#EntityProperties-Zone">EntityProperties-Zone</a></td></tr>
 <tr><td><code>"Material"</code></td><td>Modifies the existing materials on entities and avatars.</td> <td><a href="#EntityProperties-Material">EntityProperties-Material</a></td></tr>
 <tr><td><code>"Terrain"</code></td><td>Voxel ground that can be shaped and dug.</td> <td><a href="#EntityProperties-Terrain">EntityProperties-Terrain</a></td></tr>
 <tr><td><code>"Track"</code></td><td>A curve through control points that a train of entities rides along.</td> <td><a href="#EntityProperties-Track">EntityProperties-Track</a></td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### getServerScriptStatusCallback {#getServerScriptStatusCallback}

<div class="api-text" v-pre><p>Called when a <a href="Entities#getServerScriptStatus"><code>Entities.getServerScriptStatus</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>success</code></td><td>boolean</td><td><p><code>true</code> if the server entity script status could be obtained, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>isRunning</code></td><td>boolean</td><td><p><code>true</code> if there is a server entity script running, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>status</code></td><td>string</td><td><p><code>"running"</code> if there is a server entity script running, otherwise an error string.</p></td></tr>
<tr><td><code>errorInfo</code></td><td>string</td><td><p><code>""</code> if there is a server entity script running, otherwise it may contain extra information on the error.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### GizmoType {#GizmoType}

<div class="api-text" v-pre><p>A <a href="#EntityProperties-Gizmo">Gizmo</a> entity may be one of the following types:</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"ring"</code></td><td>A ring gizmo.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### Grab {#Grab}

<div class="api-text" v-pre><p>Grabbing behavior is defined by the following properties:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>grabbable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the entity can be grabbed, <code>false</code> if it can't be.</p></td></tr>
<tr><td><code>grabKinematic</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the entity will be updated in a kinematic manner when grabbed; <code>false</code> if it will be grabbed using a tractor action. A kinematic grab will make the item appear more tightly held but will cause it to behave poorly when interacting with dynamic entities.</p></td></tr>
<tr><td><code>grabFollowsController</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the entity will follow the motions of the hand controller even if the avatar's hand can't get to the implied position, <code>false</code> if it will follow the motions of the avatar's hand. This should be set <code>true</code> for tools, pens, etc. and <code>false</code> for things meant to decorate the hand.</p></td></tr>
<tr><td><code>triggerable</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the entity will receive calls to trigger <a href="Controller">Controller entity methods</a>, <code>false</code> if it won't.</p></td></tr>
<tr><td><code>grabDelegateToParent</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if when the entity is grabbed, the grab will be transferred to its parent entity if there is one; <code>false</code> if the grab won't be transferred, so a child entity can be grabbed and moved relative to its parent.</p></td></tr>
<tr><td><code>equippable</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the entity can be equipped, <code>false</code> if it cannot.</p></td></tr>
<tr><td><code>equippableLeftPosition</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>Positional offset from the left hand, when equipped.</p></td></tr>
<tr><td><code>equippableLeftRotation</code></td><td><a href="Quat">Quat</a></td><td><code>0,0,0,1</code></td><td><p>Rotational offset from the left hand, when equipped.</p></td></tr>
<tr><td><code>equippableRightPosition</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>Positional offset from the right hand, when equipped.</p></td></tr>
<tr><td><code>equippableRightRotation</code></td><td><a href="Quat">Quat</a></td><td><code>0,0,0,1</code></td><td><p>Rotational offset from the right hand, when equipped.</p></td></tr>
<tr><td><code>equippableIndicatorURL</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>If non-empty, this model will be used to indicate that an entity is equippable, rather than the default.</p></td></tr>
<tr><td><code>equippableIndicatorScale</code></td><td><a href="Vec3">Vec3</a></td><td><code>1,1,1</code></td><td><p>If <code>equippableIndicatorURL</code> is non-empty, this controls the scale of the displayed indicator.</p></td></tr>
<tr><td><code>equippableIndicatorOffset</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>If <code>equippableIndicatorURL</code> is non-empty, this controls the relative offset of the displayed object from the equippable entity.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### Haze {#Haze}

<div class="api-text" v-pre><p>Haze is defined by the following properties:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>hazeRange</code></td><td>number</td><td><code>1000</code></td><td><p>The horizontal distance at which visibility is reduced to 95%; i.e., 95% of each pixel's color is haze.</p></td></tr>
<tr><td><code>hazeColor</code></td><td><a href="globals#Color">Color</a></td><td><code>128,154,179</code></td><td><p>The color of the haze when looking away from the key light.</p></td></tr>
<tr><td><code>hazeEnableGlare</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the haze is colored with glare from the key light, <code>false</code> if it isn't. If <code>true</code>, then <code>hazeGlareColor</code> and <code>hazeGlareAngle</code> are used.</p></td></tr>
<tr><td><code>hazeGlareColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,299,179</code></td><td><p>The color of the haze when looking towards the key light.</p></td></tr>
<tr><td><code>hazeGlareAngle</code></td><td>number</td><td><code>20</code></td><td><p>The angle in degrees across the circle around the key light that the glare color and haze color are blended 50/50.</p></td></tr>
<tr><td><code>hazeAltitudeEffect</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if haze decreases with altitude as defined by the entity's local coordinate system, <code>false</code> if it doesn't. If <code>true</code>, then <code>hazeBaseRef</code> and <code>hazeCeiling</code> are used.</p></td></tr>
<tr><td><code>hazeBaseRef</code></td><td>number</td><td><code>0</code></td><td><p>The y-axis value in the entity's local coordinate system at which the haze density starts reducing with altitude.</p></td></tr>
<tr><td><code>hazeCeiling</code></td><td>number</td><td><code>200</code></td><td><p>The y-axis value in the entity's local coordinate system at which the haze density has reduced to 5%.</p></td></tr>
<tr><td><code>hazeBackgroundBlend</code></td><td>number</td><td><code>0</code></td><td><p>The proportion of the skybox image to show through the haze: <code>0.0</code> displays no skybox image; <code>1.0</code> displays no haze.</p></td></tr>
<tr><td><code>hazeAttenuateKeyLight</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the haze attenuates the key light, <code>false</code> if it doesn't. If <code>true</code>, then <code>hazeKeyLightRange</code> and <code>hazeKeyLightAltitude</code> are used.</p></td></tr>
<tr><td><code>hazeKeyLightRange</code></td><td>number</td><td><code>1000</code></td><td><p>The distance at which the haze attenuates the key light by 95%.</p></td></tr>
<tr><td><code>hazeKeyLightAltitude</code></td><td>number</td><td><code>200</code></td><td><p>The altitude at which the haze starts attenuating the key light (i.e., the altitude at which the distance starts being calculated).</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### KeyLight {#KeyLight}

<div class="api-text" v-pre><p>A key light is defined by the following properties:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the light.</p></td></tr>
<tr><td><code>intensity</code></td><td>number</td><td><code>1</code></td><td><p>The intensity of the light.</p></td></tr>
<tr><td><code>direction</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The direction the light is shining.</p></td></tr>
<tr><td><code>castShadows</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if shadows are cast, <code>false</code> if they aren't. Shadows are cast by avatars, plus <a href="#EntityProperties-Model">Model</a> and <a href="#EntityProperties-Shape">Shape</a> entities that have their <code><a href="#EntityProperties">canCastShadow</a></code> property set to <code>true</code>.</p></td></tr>
<tr><td><code>shadowBias</code></td><td>number</td><td><code>0.5</code></td><td><p>The bias of the shadows cast by the light, range <code>0.0</code> – <code>1.0</code>. This fine-tunes shadows cast by the light, to prevent shadow acne and peter panning.</p></td></tr>
<tr><td><code>shadowMaxDistance</code></td><td>number</td><td><code>40.0</code></td><td><p>The maximum distance from the camera position at which shadows will be computed, range <code>1.0</code> – <code>250.0</code>. Higher values cover more of the scene but with less precision.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### Material {#Material}

<div class="api-text" v-pre><p>A material used in a <a href="#MaterialResource">MaterialResource</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>A name for the material. Supported by all material models.</p></td></tr>
<tr><td><code>model</code></td><td>string</td><td><code>&quot;hifi_pbr&quot;</code></td><td><p>Different material models support different properties and rendering modes. Supported models are: <code>"hifi_pbr"</code>, <code>"hifi_shader_simple"</code>.</p></td></tr>
<tr><td><code>emissive</code></td><td><a href="globals#ColorFloat">ColorFloat</a> | <a href="globals#RGBS">RGBS</a> | string</td><td></td><td><p>The emissive color, i.e., the color that the material emits. A <a href="globals#ColorFloat"><code>ColorFloat</code></a> value is treated as sRGB and must have component values in the range <code>0.0</code> – <code>1.0</code>. A <a href="globals#RGBS"><code>RGBS</code></a> value can be either RGB or sRGB. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>opacity</code></td><td>number | string</td><td><code>1.0</code></td><td><p>The opacity, range <code>0.0</code> – <code>1.0</code>. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> and <code>"hifi_shader_simple"</code> models only.</p></td></tr>
<tr><td><code>unlit</code></td><td>boolean | string</td><td><code>false</code></td><td><p><code>true</code> if the material is unaffected by lighting, <code>false</code> if it is lit by the key light and local lights. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>albedo</code></td><td><a href="globals#ColorFloat">ColorFloat</a> | <a href="globals#RGBS">RGBS</a> | string</td><td></td><td><p>The albedo color. A <a href="globals#ColorFloat"><code>ColorFloat</code></a> value is treated as sRGB and must have component values in the range <code>0.0</code> – <code>1.0</code>. A <a href="globals#RGBS"><code>RGBS</code></a> value can be either RGB or sRGB. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> and <code>"hifi_shader_simple"</code> models only.</p></td></tr>
<tr><td><code>roughness</code></td><td>number | string</td><td></td><td><p>The roughness, range <code>0.0</code> – <code>1.0</code>. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>metallic</code></td><td>number | string</td><td></td><td><p>The metallicness, range <code>0.0</code> – <code>1.0</code>. With a <code>"unity"</code> packing and a <code>metallicMap</code>, or an <code>"orm"</code> packing and an <code>ormMap</code>, it goes unused. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>packing</code></td><td>string</td><td><code>&quot;custom&quot;</code></td><td><p>How occlusion, roughness and metallic are packed into pictures: </p>
<ul> <li><code>"unity"</code>: as Unity's URP/Lit packs them. <code>metallicMap</code> holds metallic in red and smoothness in alpha, <code>smoothness</code> scales the smoothness, and <code>occlusionMap</code> is read from green.</li>
 <li><code>"orm"</code>: as glTF and Unreal pack them. <code>ormMap</code> holds occlusion, roughness and metallic in red, green and blue.</li>
 <li><code>"custom"</code> (the default): each map is a picture of its own, read from red unless its <code>&lt;map&gt;Channel</code> says otherwise.</li>
 </ul>
 Each packing ignores the others' keys, so a material can keep the maps of several and switch between them. <code>"hifi_pbr"</code> model only.<p></p></td></tr>
<tr><td><code>smoothness</code></td><td>number | string</td><td><code>0.5</code></td><td><p>With a <code>"unity"</code> packing, the smoothness, range <code>0.0</code> – <code>1.0</code>, used instead of <code>roughness</code>; with a <code>metallicMap</code>, it scales the map's smoothness, as URP/Lit's Smoothness does. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>smoothnessSource</code></td><td>string</td><td><code>&quot;metallicAlpha&quot;</code></td><td><p>With a <code>"unity"</code> packing, where smoothness comes from: <code>"metallicAlpha"</code>, the <code>metallicMap</code>'s alpha, or <code>"albedoAlpha"</code>, the <code>albedoMap</code>'s alpha (which then isn't opacity). <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>ormMap</code></td><td>string</td><td></td><td><p>With an <code>"orm"</code> packing, the URL of the picture holding occlusion, roughness and metallic in red, green and blue. Its values are used as they are: <code>roughness</code> and <code>metallic</code> apply only without it. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>occlusionStrength</code></td><td>number</td><td><code>1.0</code></td><td><p>How much the occlusion map darkens, range <code>0.0</code> (not at all) – <code>1.0</code> (fully). <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>roughnessMapChannel</code></td><td>string</td><td></td><td><p>With a <code>"custom"</code> packing, the channel of <code>roughnessMap</code>'s picture to read: <code>"r"</code>, <code>"g"</code>, <code>"b"</code> or <code>"a"</code>. So are <code>glossMapChannel</code>, <code>metallicMapChannel</code>, <code>specularMapChannel</code> and <code>occlusionMapChannel</code> for their maps. Without one, a map is read from red. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>scattering</code></td><td>number | string</td><td></td><td><p>The scattering, range <code>0.0</code> – <code>1.0</code>. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>emissiveMap</code></td><td>string</td><td></td><td><p>The URL of the emissive texture image. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>albedoMap</code></td><td>string</td><td></td><td><p>The URL of the albedo texture image. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>opacityMap</code></td><td>string</td><td></td><td><p>The URL of the opacity texture image. Set the value the same as the <code>albedoMap</code> value to let the picture decide the transparency when <code>opacityMapMode</code> is not set: a picture whose alpha is all but 0 or 1 masks, any other blends. With an <code>opacityMapMode</code>, the <code>albedoMap</code>'s alpha is read as the mode says and <code>opacityMap</code> is not needed. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>opacityMapMode</code></td><td>string</td><td></td><td><p>The mode defining the interpretation of the opacity map. Values can be: </p>
<ul> <li><code>"OPACITY_MAP_OPAQUE"</code> for ignoring the opacity map information.</li>
 <li><code>"OPACITY_MAP_MASK"</code> for using the <code>opacityMap</code> as a mask, where only the texel greater than <code>opacityCutoff</code> are visible and rendered opaque.</li>
 <li><code>"OPACITY_MAP_BLEND"</code> for using the <code>opacityMap</code> for alpha blending the material surface with the background.</li>
 <li><code>"OPACITY_MAP_MASK_BLEND"</code> for both: the texels below <code>opacityCutoff</code> are cut out and the rest alpha blended, as Unity's Transparent surface with Alpha Clipping does.</li>
 </ul>
 Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.<p></p></td></tr>
<tr><td><code>opacityCutoff</code></td><td>number | string</td><td><code>0.5</code></td><td><p>The opacity cutoff threshold used to determine the opaque texels of the <code>opacityMap</code> when <code>opacityMapMode</code> is <code>"OPACITY_MAP_MASK"</code> or <code>"OPACITY_MAP_MASK_BLEND"</code>. Range <code>0.0</code> – <code>1.0</code>. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>cullFaceMode</code></td><td>string</td><td><code>&quot;CULL_BACK&quot;</code></td><td><p>The mode defining which side of the geometry should be rendered. Values can be: </p>
<ul> <li><code>"CULL_NONE"</code> to render both sides of the geometry.</li>
 <li><code>"CULL_FRONT"</code> to cull the front faces of the geometry.</li>
 <li><code>"CULL_BACK"</code> (the default) to cull the back faces of the geometry.</li>
 </ul>
 Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.<p></p></td></tr>
<tr><td><code>roughnessMap</code></td><td>string</td><td></td><td><p>The URL of the roughness texture image. You can use this or <code>glossMap</code>, but not both. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>glossMap</code></td><td>string</td><td></td><td><p>The URL of the gloss texture image. You can use this or <code>roughnessMap</code>, but not both. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>metallicMap</code></td><td>string</td><td></td><td><p>The URL of the metallic texture image. You can use this or <code>specularMap</code>, but not both. With a <code>"unity"</code> packing, it holds metallic in red and smoothness in alpha. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>specularMap</code></td><td>string</td><td></td><td><p>The URL of the specular texture image. You can use this or <code>metallicMap</code>, but not both. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>normalMap</code></td><td>string</td><td></td><td><p>The URL of the normal texture image. You can use this or <code>bumpMap</code>, but not both. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>bumpMap</code></td><td>string</td><td></td><td><p>The URL of the bump texture image. You can use this or <code>normalMap</code>, but not both. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>occlusionMap</code></td><td>string</td><td></td><td><p>The URL of the occlusion texture image. With a <code>"unity"</code> packing, it is read from green, with the other maps' texture coordinates rather than the lightmap's. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>scatteringMap</code></td><td>string</td><td></td><td><p>The URL of the scattering texture image. Only used if <code>normalMap</code> or <code>bumpMap</code> is specified. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>lightMap</code></td><td>string</td><td></td><td><p>The URL of the light map texture image. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>texCoordTransform0</code></td><td><a href="Mat4">Mat4</a> | string</td><td></td><td><p>The transform to use for all of the maps apart from <code>occlusionMap</code> and <code>lightMap</code>. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>texCoordTransform1</code></td><td><a href="Mat4">Mat4</a> | string</td><td></td><td><p>The transform to use for <code>occlusionMap</code> and <code>lightMap</code>. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only.</p></td></tr>
<tr><td><code>lightmapParams</code></td><td>Array&lt;number&gt; | string</td><td></td><td><p>The light map's <code>[offset, scale]</code>: light = offset + scale * the map's value. <code>"fallthrough"</code> takes the material below's.</p></td></tr>
<tr><td><code>lightMapDirection</code></td><td>string</td><td></td><td><p>The URL of the light map's direction map: Unity's directional lightmap, the dominant light direction and its share, which lets normal maps shape the baked light.</p></td></tr>
<tr><td><code>lightmapMode</code></td><td>string</td><td></td><td><p>What the light map holds: <code>"indirect"</code> (the default: Unity's Baked Indirect, the baked light replacing the ambient light while the sun and the local lights run as usual) or <code>"full"</code> (the whole diffuse lighting, as High Fidelity's bakes). See LIGHTMAPS.md. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only. </p>
<p><em>Currently not used.</em></p>
<p></p></td></tr>
<tr><td><code>materialParams</code></td><td>string</td><td></td><td><p>Parameters for controlling the material projection and repetition. Set to <code>"fallthrough"</code> to fall through to the material below. <code>"hifi_pbr"</code> model only. </p>
<p><em>Currently not used.</em></p>
<p></p></td></tr>
<tr><td><code>defaultFallthrough</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if all properties fall through to the material below unless they are set, <code>false</code> if properties respect their individual fall-through settings. <code>"hifi_pbr"</code> and <code>"hifi_shader_simple"</code> models only.</p></td></tr>
<tr><td><code>procedural</code></td><td><a href="globals#ProceduralData">ProceduralData</a></td><td></td><td><p>The definition of a procedural shader material. <code>"hifi_shader_simple"</code> model only.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### MaterialResource {#MaterialResource}

<div class="api-text" v-pre><p>A material or set of materials used by a <a href="#EntityType">Material entity</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>materialVersion</code></td><td>number</td><td><code>1</code></td><td><p>The version of the material. <em>Currently not used.</em></p></td></tr>
<tr><td><code>materials</code></td><td><a href="#Material">Entities.Material</a> | Array&lt;<a href="#Material">Entities.Material</a>&gt;</td><td></td><td><p>The details of the material or materials.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ModelExtras {#ModelExtras}

<div class="api-text" v-pre><p>The custom properties in a model file.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>objects</code></td><td>Object&lt;string, object&gt;</td><td><p>The custom properties of each object (glTF node) that has some, by object name. Object names are the model's joint names, per <a href="Entities#getJointNames">getJointNames</a>.</p></td></tr>
<tr><td><code>materials</code></td><td>Object&lt;string, object&gt;</td><td><p>The custom properties of each material that has some, by material name.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### NestableType {#NestableType}

<div class="api-text" v-pre><p>An in-world item may be one of the following types:</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"entity"</code></td><td>The item is an entity.</td></tr>
 <tr><td><code>"avatar"</code></td><td>The item is an avatar.</td></tr>
 <tr><td><code>"unknown"</code></td><td>The item cannot be found.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### PhysicsMotionType {#PhysicsMotionType}

<div class="api-text" v-pre><p>An entity's physics motion type may be one of the following:</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"static"</code></td><td>There is no motion because the entity is locked — its <code>locked</code> property is set to <code>true</code>.</td></tr>
 <tr><td><code>"kinematic"</code></td><td>Motion is applied without physical laws (e.g., damping) because the entity is not locked and has its <code>dynamic</code> property set to <code>false</code>.</td></tr>
 <tr><td><code>"dynamic"</code></td><td>Motion is applied according to physical laws (e.g., damping) because the entity is not locked and has its <code>dynamic</code> property set to <code>true</code>.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### PrimitiveMode {#PrimitiveMode}

<div class="api-text" v-pre><p>How the geometry of an entity is rendered.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"solid"</code></td><td>The entity is drawn as a solid shape.</td></tr>
 <tr><td><code>"lines"</code></td><td>The entity is drawn as wireframe.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### Pulse {#Pulse}

<div class="api-text" v-pre><p>A color and alpha pulse that an entity may have.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>min</code></td><td>number</td><td><code>0</code></td><td><p>The minimum value of the pulse multiplier.</p></td></tr>
<tr><td><code>max</code></td><td>number</td><td><code>1</code></td><td><p>The maximum value of the pulse multiplier.</p></td></tr>
<tr><td><code>period</code></td><td>number</td><td><code>1</code></td><td><p>The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from <code>min</code> to <code>max</code>, then <code>max</code> to <code>min</code> in one period.</p></td></tr>
<tr><td><code>colorMode</code></td><td><a href="#PulseMode">Entities.PulseMode</a></td><td><code>&quot;none&quot;</code></td><td><p>If "in", the color is pulsed in phase with the pulse period; if "out" the color is pulsed out of phase with the pulse period.</p></td></tr>
<tr><td><code>alphaMode</code></td><td><a href="#PulseMode">Entities.PulseMode</a></td><td><code>&quot;none&quot;</code></td><td><p>If "in", the alpha is pulsed in phase with the pulse period; if "out" the alpha is pulsed out of phase with the pulse period.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### PulseMode {#PulseMode}

<div class="api-text" v-pre><p>Pulse modes for color and alpha pulsing.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"none"</code></td><td>No pulsing.</td></tr>
 <tr><td><code>"in"</code></td><td>Pulse in phase with the pulse period.</td></tr>
 <tr><td><code>"out"</code></td><td>Pulse out of phase with the pulse period.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### queryPropertyMetadataCallback {#queryPropertyMetadataCallback}

<div class="api-text" v-pre><p>Called when a <a href="Entities#queryPropertyMetadata"><code>Entities.queryPropertyMetadata</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>undefined</code> if there was no error, otherwise an error message.</p></td></tr>
<tr><td><code>result</code></td><td>object</td><td><p>The metadata for the requested entity property if there was no error, otherwise <code>undefined</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### RayToEntityIntersectionResult {#RayToEntityIntersectionResult}

<div class="api-text" v-pre><p>The result of a <a href="Entities#findRayIntersection">findRayIntersection</a> search using a <a href="globals#PickRay"><code>PickRay</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>intersects</code></td><td>boolean</td><td><p><code>true</code> if the <a href="globals#PickRay"><code>PickRay</code></a> intersected an entity, <code>false</code> if it didn't.</p></td></tr>
<tr><td><code>accurate</code></td><td>boolean</td><td><p>Is always <code>true</code>.</p></td></tr>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID if the entity intersected, if any, otherwise <code>null</code>.</p></td></tr>
<tr><td><code>distance</code></td><td>number</td><td><p>The distance from the <a href="globals#PickRay"><code>PickRay</code></a> origin to the intersection point.</p></td></tr>
<tr><td><code>intersection</code></td><td><a href="Vec3">Vec3</a></td><td><p>The intersection point.</p></td></tr>
<tr><td><code>surfaceNormal</code></td><td><a href="Vec3">Vec3</a></td><td><p>The surface normal of the entity at the intersection point.</p></td></tr>
<tr><td><code>face</code></td><td><a href="globals#BoxFace">BoxFace</a></td><td><p>The face of the entity's axis-aligned box that the ray intersects.</p></td></tr>
<tr><td><code>extraInfo</code></td><td>object</td><td><p>Extra information depending on the entity intersected. Currently, only <code>Model</code> entities provide extra information, and the information provided depends on the <code>precisionPicking</code> parameter value that the search function was called with.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### RenderInfo {#RenderInfo}

<div class="api-text" v-pre><p>Information on how an entity is rendered. Properties are only filled in for <code>Model</code> entities; other entity types have an empty object, <code>{}</code>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>verticesCount</code></td><td>number</td><td><p>The number of vertices in the entity.</p></td></tr>
<tr><td><code>texturesCount</code></td><td>number</td><td><p>The number of textures in the entity.</p></td></tr>
<tr><td><code>texturesSize</code></td><td>number</td><td><p>The total size of the textures in the entity, in bytes.</p></td></tr>
<tr><td><code>hasTransparent</code></td><td>boolean</td><td><p><code>true</code> if any of the textures has transparency, <code>false</code> if none of them do.</p></td></tr>
<tr><td><code>drawCalls</code></td><td>number</td><td><p>The number of draw calls required to render the entity.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### RenderLayer {#RenderLayer}

<div class="api-text" v-pre><p>A layer in which an entity may be rendered.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"world"</code></td><td>The entity is drawn in the world with everything else.</td></tr>
 <tr><td><code>"front"</code></td><td>The entity is drawn on top of the world layer but behind the HUD surface.</td></tr>
 <tr><td><code>"hud"</code></td><td>The entity is drawn on top of other layers and the HUD surface.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### RingGizmo {#RingGizmo}

<div class="api-text" v-pre><p>A <a href="#EntityProperties-Gizmo">ring Gizmo</a> entity is defined by the following properties:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>startAngle</code></td><td>number</td><td><code>0</code></td><td><p>The angle at which the ring starts, in degrees.</p></td></tr>
<tr><td><code>endAngle</code></td><td>number</td><td><code>360</code></td><td><p>The angle at which the ring ends, in degrees.</p></td></tr>
<tr><td><code>innerRadius</code></td><td>number</td><td><code>0</code></td><td><p>The inner radius of the ring as a fraction of the total radius, range <code>0.0</code> — <code>1.0</code>.</p></td></tr>
<tr><td><code>innerStartColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color at the inner start point of the ring.</p></td></tr>
<tr><td><code>innerEndColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color at the inner end point of the ring.</p></td></tr>
<tr><td><code>outerStartColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color at the outer start point of the ring.</p></td></tr>
<tr><td><code>outerEndColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color at the outer end point of the ring.</p></td></tr>
<tr><td><code>innerStartAlpha</code></td><td>number</td><td><code>1</code></td><td><p>The opacity at the inner start point of the ring.</p></td></tr>
<tr><td><code>innerEndAlpha</code></td><td>number</td><td><code>1</code></td><td><p>The opacity at the inner end point of the ring.</p></td></tr>
<tr><td><code>outerStartAlpha</code></td><td>number</td><td><code>1</code></td><td><p>The opacity at the outer start point of the ring.</p></td></tr>
<tr><td><code>outerEndAlpha</code></td><td>number</td><td><code>1</code></td><td><p>The opacity at the outer end point of the ring.</p></td></tr>
<tr><td><code>hasTickMarks</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to render tick marks, otherwise <code>false</code>.</p></td></tr>
<tr><td><code>majorTickMarksAngle</code></td><td>number</td><td><code>0</code></td><td><p>The angle between major tick marks, in degrees.</p></td></tr>
<tr><td><code>minorTickMarksAngle</code></td><td>number</td><td><code>0</code></td><td><p>The angle between minor tick marks, in degrees.</p></td></tr>
<tr><td><code>majorTickMarksLength</code></td><td>number</td><td><code>0</code></td><td><p>The length of the major tick marks as a fraction of the radius. A positive value draws tick marks outwards from the inner radius; a negative value draws tick marks inwards from the outer radius.</p></td></tr>
<tr><td><code>minorTickMarksLength</code></td><td>number</td><td><code>0</code></td><td><p>The length of the minor tick marks, as a fraction of the radius. A positive value draws tick marks outwards from the inner radius; a negative value draws tick marks inwards from the outer radius.</p></td></tr>
<tr><td><code>majorTickMarksColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the major tick marks.</p></td></tr>
<tr><td><code>minorTickMarksColor</code></td><td><a href="globals#Color">Color</a></td><td><code>255,255,255</code></td><td><p>The color of the minor tick marks.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### Shape {#Shape}

<div class="api-text" v-pre><p>A <code>"Shape"</code>, <code>"Box"</code>, or <code>"Sphere"</code> <a href="#EntityType">EntityType</a> may display as one of the following geometrical shapes:</p>
 <table> <thead> <tr><th>Value</th><th>Dimensions</th><th>Notes</th></tr>
 </thead>
 <tbody> <tr><td><code>"Circle"</code></td><td>2D</td><td>A circle oriented in 3D.</td></tr>
 <tr><td><code>"Cone"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Cube"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Cylinder"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Dodecahedron"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Hexagon"</code></td><td>3D</td><td>A hexagonal prism.</td></tr>
 <tr><td><code>"Icosahedron"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Octagon"</code></td><td>3D</td><td>An octagonal prism.</td></tr>
 <tr><td><code>"Octahedron"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Quad"</code></td><td>2D</td><td>A square oriented in 3D.</td></tr>
 <tr><td><code>"Sphere"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Tetrahedron"</code></td><td>3D</td><td></td></tr>
 <tr><td><code>"Torus"</code></td><td>3D</td><td><em>Not implemented.</em></td></tr>
 <tr><td><code>"Triangle"</code></td><td>3D</td><td>A triangular prism.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### Skybox {#Skybox}

<div class="api-text" v-pre><p>A skybox is defined by the following properties:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>color</code></td><td><a href="globals#Color">Color</a></td><td><code>0,0,0</code></td><td><p>Sets the color of the sky if <code>url</code> is <code>""</code>, otherwise modifies the color of the cube map image.</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>A cube map image that is used to render the sky.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### TextEffect {#TextEffect}

<div class="api-text" v-pre><p>A <a href="#EntityProperties-Text">Text</a> entity may use one of the following effects:</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"none"</code></td><td>No effect.</td></tr>
 <tr><td><code>"outline"</code></td><td>An outline effect.</td></tr>
 <tr><td><code>"outlineFill"</code></td><td>An outline effect, with fill.</td></tr>
 <tr><td><code>"shadow"</code></td><td>A shadow effect.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### ToneMapping {#ToneMapping}

<div class="api-text" v-pre><p>Tone Mapping is defined by the following properties:</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>exposure</code></td><td>number</td><td><code>0.0</code></td><td><p>The amount of exposure used in tone mappinpg.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ToneMappingMode {#ToneMappingMode}

<div class="api-text" v-pre><p>How tone mapping is applied in a <a href="#EntityProperties-Zone">Zone</a> entity.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"inherit"</code></td><td>Inherits whatever tone mapping curve paroperties are outside this zone.</td></tr>
 <tr><td><code>"rgb"</code></td><td>Apply RGB tone mapping in the zone.</td></tr>
 <tr><td><code>"srgb"</code></td><td>Apply SRGB tone mapping in the zone.</td></tr>
 <tr><td><code>"reinhard"</code></td><td>Apply Reinhard tone mapping in the zone.</td></tr>
 <tr><td><code>"filmic"</code></td><td>Apply filmic tone mapping in the zone.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### Vehicle {#Vehicle}

<div class="api-text" v-pre><p>A vehicle is any entity with a <code>vehicle</code> group whose <code>type</code> is not <code>"none"</code> (PHYSICS.md 4.8, rounds 6 and 7). The entity is the chassis or the hull: its own collision shape (a box is best; the physics server always uses a box of the entity's dimensions), its <code>mass</code> and <code>centerOfMass</code>, the wheels hung from it and the seats in it. The names are Unity's where Unity has them (<code>Rigidbody</code>, <code>WheelCollider</code>) so a Unity vehicle carries across, and Jolt's for the engine and transmission, which Unity leaves to scripts. The vehicle is simulated by the physics server when the world has one, else by the client that owns it; the driver's client predicts its own inputs and is corrected by the server; everyone else runs the model from the last known inputs and blends corrections. The state properties are read-only: the simulator writes them. An airship (<code>type</code> <code>"airship"</code>) is a hull with buoyancy, propellers, fins and ballast; make the entity a moving reference frame too (<code>frame</code> <code>true</code>) and its top is a deck the crew walks on while it flies.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>string</td><td><code>&quot;none&quot;</code></td><td><p><code>"none"</code>, <code>"wheeled"</code> (a chassis with wheels), <code>"wheel"</code> (a child entity that shows one of its parent's wheels: see <code>wheel</code>), or <code>"airship"</code> (a lighter-than-air hull: see <code>envelopeVolume</code> and the rest).</p></td></tr>
<tr><td><code>mass</code></td><td>number</td><td><code>0</code></td><td><p>The chassis mass in kg (Unity's <code>Rigidbody.mass</code>); <code>0</code> uses the entity's density and volume as for any entity.</p></td></tr>
<tr><td><code>centerOfMass</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The centre of mass, in the entity's local metres (<code>Rigidbody.centerOfMass</code>). Low and central keeps a car on its wheels.</p></td></tr>
<tr><td><code>wheels</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The wheels as a JSON list, each with Unity's <code>WheelCollider</code> names: <code>name</code>; <code>center</code> [x, y, z] in local metres, the suspension's top (fully compressed) attachment point; <code>radius</code> and <code>width</code> m; <code>mass</code> kg (default 20); <code>suspensionDistance</code> m, the travel from <code>center</code> downwards (default 0.2); <code>spring</code> N/m and <code>damper</code> N s/m (when absent, <code>suspensionFrequency</code> and <code>suspensionDamping</code> below set the spring); <code>steer</code>, a fraction of <code>maxSteerAngle</code> this wheel turns, negative to counter-steer (default 0); <code>drive</code>, <code>true</code> when the engine turns it (default from <code>driveType</code>); <code>brake</code> and <code>handBrake</code>, fractions of the brake torques this wheel takes (defaults 1 and 0).</p></td></tr>
<tr><td><code>seats</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The seats as a JSON list: <code>name</code>, <code>position</code> [x, y, z] in local metres (where the avatar's hips go), <code>yaw</code> in degrees about the entity's up (default 0, facing forward, the entity's +z... the vehicle's forward is its local -z as for every entity), and <code>driver</code>, <code>true</code> for the one seat whose occupant drives.</p></td></tr>
<tr><td><code>maxSteerAngle</code></td><td>number</td><td><code>30</code></td><td><p>The steering lock, in degrees, for a wheel with <code>steer</code> 1.</p></td></tr>
<tr><td><code>maxTorque</code></td><td>number</td><td><code>500</code></td><td><p>The engine's peak torque, N m (Jolt's <code>VehicleEngineSettings</code>).</p></td></tr>
<tr><td><code>minRPM</code></td><td>number</td><td><code>1000</code></td><td><p>The engine's idle, rpm.</p></td></tr>
<tr><td><code>maxRPM</code></td><td>number</td><td><code>6000</code></td><td><p>The engine's red line, rpm.</p></td></tr>
<tr><td><code>gearRatios</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The forward gear ratios as a JSON list, first gear first; empty for Jolt's five-speed default. The automatic gearbox shifts for the driver.</p></td></tr>
<tr><td><code>reverseGearRatio</code></td><td>number</td><td><code>2.9</code></td><td><p>The reverse gear's ratio.</p></td></tr>
<tr><td><code>finalDriveRatio</code></td><td>number</td><td><code>3.42</code></td><td><p>The differential's ratio (the axle, times the transfer box if any).</p></td></tr>
<tr><td><code>maxBrakeTorque</code></td><td>number</td><td><code>1500</code></td><td><p>The foot brake's torque per wheel, N m.</p></td></tr>
<tr><td><code>maxHandBrakeTorque</code></td><td>number</td><td><code>4000</code></td><td><p>The hand brake's torque per wheel with <code>handBrake</code> 1, N m.</p></td></tr>
<tr><td><code>driveType</code></td><td>string</td><td><code>&quot;rear&quot;</code></td><td><p>Which wheels the engine turns when a wheel does not say: <code>"rear"</code>, <code>"front"</code> or <code>"all"</code>. Wheels are paired into axles by their <code>center</code> z.</p></td></tr>
<tr><td><code>suspensionFrequency</code></td><td>number</td><td><code>1.5</code></td><td><p>The suspension's natural frequency in Hz, for wheels without a <code>spring</code>; 1 to 2 Hz is a road car, lower is softer.</p></td></tr>
<tr><td><code>suspensionDamping</code></td><td>number</td><td><code>0.5</code></td><td><p>The suspension's damping ratio for those wheels (1 is critical).</p></td></tr>
<tr><td><code>wheel</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>On a child entity with <code>type</code> <code>"wheel"</code>: the <code>name</code> of the parent's wheel it shows. Every client places it from its own simulation: it steers, spins and rides the suspension, and it costs no packets.</p></td></tr>
<tr><td><code>axle</code></td><td>string</td><td><code>&quot;x&quot;</code></td><td><p>On a wheel entity: which of its own axes is the axle, <code>"x"</code> (a model made for Unity), <code>"y"</code> (a Cylinder shape entity) or <code>"z"</code>.</p></td></tr>
<tr><td><code>driver</code></td><td><a href="Uuid">Uuid</a></td><td><code>null</code></td><td><p><em>State.</em> The session of the avatar in the driver's seat, who steers it; set by that client when it sits, cleared when it stands.</p></td></tr>
<tr><td><code>inputSequence</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The sequence number of the driver's last input the simulator applied; the driver's client reconciles its prediction from there.</p></td></tr>
<tr><td><code>throttle</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The last applied forward input, -1 (reverse) to 1.</p></td></tr>
<tr><td><code>steering</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The last applied steering input, -1 (left) to 1 (right).</p></td></tr>
<tr><td><code>brake</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The last applied brake, 0 to 1.</p></td></tr>
<tr><td><code>handBrake</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The last applied hand brake, 0 to 1.</p></td></tr>
<tr><td><code>engineRPM</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The engine's speed.</p></td></tr>
<tr><td><code>gear</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The gear: 1 and up forward, 0 neutral, -1 reverse.</p></td></tr>
<tr><td><code>stateTime</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The world time, in microseconds, that this state and the entity's position, rotation and velocities in the same update are for.</p></td></tr>
<tr><td><code>envelopeVolume</code></td><td>number</td><td><code>0</code></td><td><p>An airship's envelope, m<sup>3</sup>. Its lift is the volume times <code>fill</code> times the difference between the air's density at its altitude (the standard atmosphere, sea level at y = 0) and <code>gasDensity</code>, times gravity, straight up at <code>centerOfBuoyancy</code>; a 1,500 m<sup>3</sup> helium envelope lifts about 1,570 kg at sea level. <code>mass</code> is the hull's without ballast.</p></td></tr>
<tr><td><code>centerOfBuoyancy</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The envelope's centre in local metres. Above <code>centerOfMass</code> it keeps the ship upright, as a pendulum.</p></td></tr>
<tr><td><code>gasDensity</code></td><td>number</td><td><code>0.1786</code></td><td><p>The lifting gas, kg/m<sup>3</sup>: helium 0.1786, hydrogen 0.0899.</p></td></tr>
<tr><td><code>maxThrust</code></td><td>number</td><td><code>0</code></td><td><p>The propellers' thrust at full throttle, N, along the ship's forward.</p></td></tr>
<tr><td><code>maxVerticalThrust</code></td><td>number</td><td><code>0</code></td><td><p>The vertical thruster's at full <code>lift</code>, N, along the ship's up.</p></td></tr>
<tr><td><code>thrustPoint</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>Where both act, local metres (low on the gondola, it pitches the nose a little).</p></td></tr>
<tr><td><code>dragArea</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The drag coefficient times area per local axis, m<sup>2</sup>, for the drag at <code>centerOfBuoyancy</code> (half the air's density times speed squared times this); 0,0,0 derives one from the entity's dimensions.</p></td></tr>
<tr><td><code>angularDragArea</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The same for the spin about each local axis, m<sup>5</sup>; 0,0,0 derives.</p></td></tr>
<tr><td><code>rudderArea</code></td><td>number</td><td><code>0</code></td><td><p>The vertical fin's area, m<sup>2</sup>. The fins are flat plates at <code>finPoint</code>, lifting with the angle between them and the relative wind: the ship's own sideslip and incidence (which is what makes the nose follow the velocity) plus the pilot's deflection.</p></td></tr>
<tr><td><code>elevatorArea</code></td><td>number</td><td><code>0</code></td><td><p>The horizontal fin's area, m<sup>2</sup>.</p></td></tr>
<tr><td><code>finPoint</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>Where the fins act, local metres: aft of the envelope's centre (+z).</p></td></tr>
<tr><td><code>maxFinAngle</code></td><td>number</td><td><code>25</code></td><td><p>The fins' deflection at full <code>steering</code> or <code>pitch</code>, degrees.</p></td></tr>
<tr><td><code>ballastRate</code></td><td>number</td><td><code>0</code></td><td><p>Ballast dropped per second at full positive <code>trim</code>, kg/s.</p></td></tr>
<tr><td><code>ventRate</code></td><td>number</td><td><code>0</code></td><td><p>The fraction of the envelope vented per second at full negative <code>trim</code>.</p></td></tr>
<tr><td><code>pitch</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The last applied elevator input, -1 (nose down) to 1 (nose up).</p></td></tr>
<tr><td><code>lift</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The last applied vertical thruster input, -1 (down) to 1 (up).</p></td></tr>
<tr><td><code>trim</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The last applied trim, 1 dropping ballast, -1 venting gas.</p></td></tr>
<tr><td><code>ballast</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The ballast carried now, kg: set it when the ship is made, the simulator lowers it as the pilot drops ballast.</p></td></tr>
<tr><td><code>fill</code></td><td>number</td><td><code>1</code></td><td><p><em>State.</em> The fraction of the envelope that is gas: the simulator lowers it as the pilot vents.</p></td></tr>
<tr><td><code>wingArea</code></td><td>number</td><td><code>0</code></td><td><p>An aircraft's wing, m<sup>2</sup>, both halves (<code>type</code> <code>"aircraft"</code>, PHYSICS.md round 8: a tilt-thrust craft). The wing lifts with its angle of attack up to the stall at 15 degrees; <code>maxThrust</code> is its engines' at full throttle, along forward with the nacelles level and along up with them vertical (<code>tilt</code>), <code>elevatorArea</code>, <code>rudderArea</code> and <code>finPoint</code> its tail, <code>maxFinAngle</code> its control deflection (the ailerons move 0.4 of it, the rudder 0.5).</p></td></tr>
<tr><td><code>wingSpan</code></td><td>number</td><td><code>0</code></td><td><p>The wing's span, m, tip to tip: with the area it gives the aspect ratio, and the ailerons act at a quarter of it either side.</p></td></tr>
<tr><td><code>wingPoint</code></td><td><a href="Vec3">Vec3</a></td><td><code>0,0,0</code></td><td><p>The wing's aerodynamic centre, local metres (a quarter chord behind the leading edge; a little aft of <code>centerOfMass</code> for stability).</p></td></tr>
<tr><td><code>tilt</code></td><td>number</td><td><code>0</code></td><td><p><em>State.</em> The nacelles' tilt, 0 level (forward flight) to 1 vertical (hover): the pilot's <code>lift</code> input moves it, up while positive and down while negative, at 0.35 a second; set it to 1 when the craft is made to start in hover.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ZoneCullingMode {#ZoneCullingMode}

<div class="api-text" v-pre><p>How zone culling is applied in a <a href="#EntityProperties-Zone">Zone</a> entity.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"inherit"</code></td><td>Inherits whatever zone culling paroperties are outside this zone.</td></tr>
 <tr><td><code>"outside"</code></td><td>Culls everything outside of this + any outer zones.</td></tr>
 <tr><td><code>"disabled"</code></td><td>Culls nothing, including overriding outer zone culling..</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### getMeshesCallback {#getMeshesCallback}

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. It no longer works for Model entities. Use the <a href="Graphics"><code>Graphics</code></a> API instead.</p></div>
:::

<div class="api-text" v-pre><p>Called when a <a href="Entities#getMeshes"><code>Entities.getMeshes</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>meshes</code></td><td>Array&lt;<a href="MeshProxy">MeshProxy</a>&gt;</td><td><p>If <code>success</code> is <code>true</code>, a <a href="MeshProxy"><code>MeshProxy</code></a> per mesh in the <code>Model</code> entity; otherwise <code>undefined</code>.</p></td></tr>
<tr><td><code>success</code></td><td>boolean</td><td><p><code>true</code> if the <a href="Entities#getMeshes"><code>Entities.getMeshes</code></a> call was successful, <code>false</code> otherwise. The call may be unsuccessful if the requested entity could not be found.</p></td></tr>
</tbody></table></div>

</div>
