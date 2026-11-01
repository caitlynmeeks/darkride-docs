---
title: "ScriptAvatar"
description: "Information about an avatar."
draft: true
---

# ScriptAvatar

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts, assignment client scripts, server entity scripts.</div>

<div class="api-text" v-pre><p>Information about an avatar.</p>
 <p>Created using <a href="MyAvatar#getTargetAvatar"><code>MyAvatar.getTargetAvatar</code></a> or <a href="AvatarList#getAvatar"><code>AvatarList.getAvatar</code></a>.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The avatar's position.</p></td></tr>
<tr><td><code>scale</code></td><td>number</td><td><p>The target scale of the avatar without any restrictions on permissible values imposed by the domain.</p></td></tr>
<tr><td><code>handPosition</code></td><td><a href="Vec3">Vec3</a></td><td><p>A user-defined hand position, in world coordinates. The position moves with the avatar but is otherwise not used or changed by Interface.</p></td></tr>
<tr><td><code>bodyPitch</code></td><td>number</td><td><p>The pitch of the avatar's body, in degrees.</p></td></tr>
<tr><td><code>bodyYaw</code></td><td>number</td><td><p>The yaw of the avatar's body, in degrees.</p></td></tr>
<tr><td><code>bodyRoll</code></td><td>number</td><td><p>The roll of the avatar's body, in degrees.</p></td></tr>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td><p>The orientation of the avatar's body.</p></td></tr>
<tr><td><code>headOrientation</code></td><td><a href="Quat">Quat</a></td><td><p>The orientation of the avatar's head.</p></td></tr>
<tr><td><code>headPitch</code></td><td>number</td><td><p>The pitch of the avatar's head relative to the body, in degrees.</p></td></tr>
<tr><td><code>headYaw</code></td><td>number</td><td><p>The yaw of the avatar's head relative to the body, in degrees.</p></td></tr>
<tr><td><code>headRoll</code></td><td>number</td><td><p>The roll of the avatar's head relative to the body, in degrees.</p></td></tr>
<tr><td><code>velocity</code></td><td><a href="Vec3">Vec3</a></td><td><p>The linear velocity of the avatar.</p></td></tr>
<tr><td><code>angularVelocity</code></td><td><a href="Vec3">Vec3</a></td><td><p>The angular velocity of the avatar.</p></td></tr>
<tr><td><code>sessionUUID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The avatar's session ID.</p></td></tr>
<tr><td><code>displayName</code></td><td>string</td><td><p>The avatar's display name.</p></td></tr>
<tr><td><code>sessionDisplayName</code></td><td>string</td><td><p>The avatar's display name, sanitized and versioned, as defined by the avatar mixer. It is unique among all avatars present in the domain at the time.</p></td></tr>
<tr><td><code>isReplicated</code></td><td>boolean</td><td><p><span class="important">Deprecated: This property is deprecated and will be removed.</span></p></td></tr>
<tr><td><code>lookAtSnappingEnabled</code></td><td>boolean</td><td><p><code>true</code> if the avatar's eyes snap to look at another avatar's eyes when the other avatar is in the line of sight and also has <code>lookAtSnappingEnabled == true</code>.</p></td></tr>
<tr><td><code>gazeStyle</code></td><td>string</td><td><p>How the avatar's eyes behave, as its owner chose: <code>"calm"</code>, <code>"excited"</code>, <code>"shy"</code>, <code>"sleepy"</code> or <code>"intent"</code>. See <a href="MyAvatar#getGazeStyles"><code>MyAvatar.getGazeStyles</code></a>.</p></td></tr>
<tr><td><code>skeletonModelURL</code></td><td>string</td><td><p>The avatar's FST file.</p></td></tr>
<tr><td><code>attachmentData</code></td><td>Array&lt;<a href="globals#AttachmentData">AttachmentData</a>&gt;</td><td><p>Information on the avatar's attachments. </p>
<p class="important">Deprecated: This property is deprecated and will be removed. Use avatar entities instead.</p>
<p></p></td></tr>
<tr><td><code>jointNames</code></td><td>Array&lt;string&gt;</td><td><p>The list of joints in the avatar model.</p></td></tr>
<tr><td><code>audioLoudness</code></td><td>number</td><td><p>The instantaneous loudness of the audio input that the avatar is injecting into the domain.</p></td></tr>
<tr><td><code>audioAverageLoudness</code></td><td>number</td><td><p>The rolling average loudness of the audio input that the avatar is injecting into the domain.</p></td></tr>
<tr><td><code>sensorToWorldMatrix</code></td><td><a href="Mat4">Mat4</a></td><td><p>The scale, rotation, and translation transform from the user's real world to the avatar's size, orientation, and position in the virtual world.</p></td></tr>
<tr><td><code>controllerLeftHandMatrix</code></td><td><a href="Mat4">Mat4</a></td><td><p>The rotation and translation of the left hand controller relative to the avatar.</p></td></tr>
<tr><td><code>controllerRightHandMatrix</code></td><td><a href="Mat4">Mat4</a></td><td><p>The rotation and translation of the right hand controller relative to the avatar.</p></td></tr>
<tr><td><code>skeletonOffset</code></td><td><a href="Vec3">Vec3</a></td><td><p>The rendering offset of the avatar.</p></td></tr>
</tbody></table></div>

## Methods {#functions}

### getAbsoluteJointRotationInObjectFrame {#getAbsoluteJointRotationInObjectFrame}

```js
ScriptAvatar.getAbsoluteJointRotationInObjectFrame(index)
```

<div class="api-text" v-pre><p>Gets the rotation of a joint relative to the avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The rotation of the joint relative to the avatar, or <a href="Quat">Quat.IDENTITY</a> if the avatar data aren't available.</p></div>

### getAbsoluteJointTranslationInObjectFrame {#getAbsoluteJointTranslationInObjectFrame}

```js
ScriptAvatar.getAbsoluteJointTranslationInObjectFrame(index)
```

<div class="api-text" v-pre><p>Gets the translation of a joint relative to the avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The translation of the joint relative to the avatar, or <a href="Vec3">Vec3.ZERO</a> if the avatar data aren't available.</p></div>

### getAcceleration {#getAcceleration}

```js
ScriptAvatar.getAcceleration()
```

<div class="api-text" v-pre><p>Gets the current acceleration of the avatar.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The current acceleration of the avatar, or <a href="Vec3">Vec3.ZERO</a> if avatar data aren't available..</p></div>

### getAvatarParameter {#getAvatarParameter}

```js
ScriptAvatar.getAvatarParameter(name)
```

<div class="api-text" v-pre><p>Gets one of the avatar's menu parameters as this client has it: what the avatar's owner picked in its menu, for an avatar imported with one. See <a href="MyAvatar#getAvatarParameter"><code>MyAvatar.getAvatarParameter</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The parameter's name.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Its value, or <code>0</code> if the avatar has no such parameter or avatar data aren't available.</p></div>

### getDefaultJointRotation {#getDefaultJointRotation}

```js
ScriptAvatar.getDefaultJointRotation(index)
```

<div class="api-text" v-pre><p>Gets the default rotation of a joint in the avatar relative to its parent. </p>
<p>For information on the joint hierarchy used, see <span>Avatar Standards</span>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The joint index.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The default rotation of the joint if avatar data are available and the joint index is valid, otherwise <a href="Quat">Quat.IDENTITY</a>.</p></div>

### getDefaultJointTranslation {#getDefaultJointTranslation}

```js
ScriptAvatar.getDefaultJointTranslation(index)
```

<div class="api-text" v-pre><p>Gets the default translation of a joint in the avatar relative to its parent, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
 <p>For information on the joint hierarchy used, see <span>Avatar Standards</span>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The joint index.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The default translation of the joint (in model coordinates) if avatar data are available and the joint index is valid, otherwise <a href="Vec3">Vec3.ZERO</a>.</p></div>

### getHandState {#getHandState}

```js
ScriptAvatar.getHandState()
```

<div class="api-text" v-pre><p>Gets the pointing state of the hands to control where the laser emanates from. If the right index finger is pointing, the laser emanates from the tip of that finger, otherwise it emanates from the palm.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#HandState">HandState</a> | number <p>The pointing state of the hand, or <code>-1</code> if the avatar data aren't available.</p></div>

### getJointIndex {#getJointIndex}

```js
ScriptAvatar.getJointIndex(name)
```

<div class="api-text" v-pre><p>Gets the joint index for a named joint. The joint index value is the position of the joint in the array returned by {@linkScriptAvatar.getJointNames}.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The index of the joint if valid and avatar data are available, otherwise <code>-1</code>.</p></div>

### getJointNames {#getJointNames}

```js
ScriptAvatar.getJointNames()
```

<div class="api-text" v-pre><p>Gets the names of all the joints in the avatar.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The joint names, or <code>[]</code> if the avatar data aren't available.</p></div>

### getJointPosition {#getJointPosition}

```js
ScriptAvatar.getJointPosition(index)
```

<div class="api-text" v-pre><p>Gets the position of a joint in the avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The position of the joint in world coordinates, or <a href="Vec3">Vec3.ZERO</a> if avatar data aren't available.</p></div>

### getJointPosition {#getJointPosition-2}

```js
ScriptAvatar.getJointPosition(name)
```

<div class="api-text" v-pre><p>Gets the position of a joint in the current avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The position of the joint in world coordinates, or <a href="Vec3">Vec3.ZERO</a> if avatar data aren't available.</p></div>

### getJointRotation {#getJointRotation}

```js
ScriptAvatar.getJointRotation(index)
```

<div class="api-text" v-pre><p>Gets the rotation of a joint relative to its parent. For information on the joint hierarchy used, see <span>Avatar Standards</span>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The rotation of the joint relative to its parent, or <a href="Quat">Quat.IDENTITY</a> if the avatar data aren't available.</p></div>

### getJointRotation {#getJointRotation-2}

```js
ScriptAvatar.getJointRotation(name)
```

<div class="api-text" v-pre><p>Gets the rotation of a joint relative to its parent. For information on the joint hierarchy used, see <span>Avatar Standards</span>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The rotation of the joint relative to its parent, or <a href="Quat">Quat.IDENTITY</a> if the avatar data aren't available.</p></div>

### getJointRotations {#getJointRotations}

```js
ScriptAvatar.getJointRotations()
```

<div class="api-text" v-pre><p>Gets the rotations of all joints in the avatar. Each joint's rotation is relative to its parent joint.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Quat">Quat</a>&gt; <p>The rotations of all joints relative to each's parent, or <code>[]</code> if the avatar data aren't available. The values are in the same order as the array returned by <a href="#getJointNames"><code>ScriptAvatar.getJointNames</code></a>.</p></div>

### getJointTranslation {#getJointTranslation}

```js
ScriptAvatar.getJointTranslation(index)
```

<div class="api-text" v-pre><p>Gets the translation of a joint relative to its parent, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
 <p>For information on the joint hierarchy used, see <span>Avatar Standards</span>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The translation of the joint relative to its parent, in model coordinates, or <a href="Vec3">Vec3.ZERO</a> if the avatar data aren't available.</p></div>

### getJointTranslation {#getJointTranslation-2}

```js
ScriptAvatar.getJointTranslation(name)
```

<div class="api-text" v-pre><p>Gets the translation of a joint relative to its parent, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
 <p>For information on the joint hierarchy used, see <span>Avatar Standards</span>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>number</td><td><p>The name of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The translation of the joint relative to its parent, in model coordinates, or <a href="Vec3">Vec3.ZERO</a> if the avatar data aren't available.</p></div>

### getJointTranslations {#getJointTranslations}

```js
ScriptAvatar.getJointTranslations()
```

<div class="api-text" v-pre><p>Gets the translations of all joints in the avatar. Each joint's translation is relative to its parent joint, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
<p></p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Vec3">Vec3</a>&gt; <p>The translations of all joints relative to each's parent, in model coordinates, or <code>[]</code> if the avatar data aren't available. The values are in the same order as the array returned by <a href="#getJointNames"><code>ScriptAvatar.getJointNames</code></a>.</p></div>

### getLeftPalmPosition {#getLeftPalmPosition}

```js
ScriptAvatar.getLeftPalmPosition()
```

<div class="api-text" v-pre><p>Gets the position of the left palm in world coordinates.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The position of the left palm in world coordinates, or <a href="Vec3">Vec3.ZERO</a> if avatar data aren't available.</p></div>

### getLeftPalmPosition {#getLeftPalmPosition-2}

```js
ScriptAvatar.getLeftPalmPosition()
```

<div class="api-text" v-pre><p>Gets the position of the right palm in world coordinates.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The position of the right palm in world coordinates, or <a href="Vec3">Vec3.ZERO</a> if avatar data aren't available.</p></div>

### getLeftPalmRotation {#getLeftPalmRotation}

```js
ScriptAvatar.getLeftPalmRotation()
```

<div class="api-text" v-pre><p>Gets the rotation of the left palm in world coordinates.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The rotation of the left palm in world coordinates, or <a href="Quat">Quat.IDENTITY</a> if the avatar data aren't available.</p></div>

### getLeftPalmRotation {#getLeftPalmRotation-2}

```js
ScriptAvatar.getLeftPalmRotation()
```

<div class="api-text" v-pre><p>Gets the rotation of the right palm in world coordinates.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The rotation of the right palm in world coordinates, or <a href="Quat">Quat.IDENTITY</a> if the avatar data aren't available.</p></div>

### getNeckPosition {#getNeckPosition}

```js
ScriptAvatar.getNeckPosition()
```

<div class="api-text" v-pre><p>Gets the position of the current avatar's neck in world coordinates.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The position of the neck in world coordinates, or <a href="Vec3">Vec3.ZERO</a> if avatar data aren't available.</p></div>

### getParentID {#getParentID}

```js
ScriptAvatar.getParentID()
```

<div class="api-text" v-pre><p>Gets the ID of the entity of avatar that the avatar is parented to.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the entity or avatar that the avatar is parented to. <a href="Uuid">Uuid.NULL</a> if not parented or avatar data aren't available.</p></div>

### getParentJointIndex {#getParentJointIndex}

```js
ScriptAvatar.getParentJointIndex()
```

<div class="api-text" v-pre><p>Gets the joint of the entity or avatar that the avatar is parented to.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The joint of the entity or avatar that the avatar is parented to. <code>65535</code> or <code>-1</code> if parented to the entity or avatar's position and orientation rather than a joint, or avatar data aren't available.</p></div>

### getSkeleton {#getSkeleton}

```js
ScriptAvatar.getSkeleton()
```

<div class="api-text" v-pre><p>Gets information on all the joints in the avatar's skeleton.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="globals#SkeletonJoint">SkeletonJoint</a>&gt; <p>Information about each joint in the avatar's skeleton.</p></div>

### getSkeletonOffset {#getSkeletonOffset}

```js
ScriptAvatar.getSkeletonOffset()
```

<div class="api-text" v-pre><p>Gets the offset applied to the avatar for rendering.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The skeleton offset if avatar data are available, otherwise <a href="Vec3">Vec3.ZERO</a>.</p></div>

### isJointDataValid {#isJointDataValid}

```js
ScriptAvatar.isJointDataValid(index)
```

<div class="api-text" v-pre><p>Checks that the data for a joint are valid.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the joint data are valid, <code>false</code> if not or the avatar data aren't available.</p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### displayNameChanged {#displayNameChanged}

```js
ScriptAvatar.displayNameChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the avatar's <code>displayName</code> property value changes.</p></div>

### lookAtSnappingChanged {#lookAtSnappingChanged}

```js
ScriptAvatar.lookAtSnappingChanged.connect(function (enabled) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the avatar's <code>lookAtSnappingEnabled</code> property value changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> if look-at snapping is enabled, <code>false</code> if not.</p></td></tr>
</tbody></table></div>

### sessionDisplayNameChanged {#sessionDisplayNameChanged}

```js
ScriptAvatar.sessionDisplayNameChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the avatar's <code>sessionDisplayName</code> property value changes.</p></div>

### skeletonModelURLChanged {#skeletonModelURLChanged}

```js
ScriptAvatar.skeletonModelURLChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the avatar's model (i.e., <code>skeletonModelURL</code> property value) is changed.</p></div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### getAttachmentData {#getAttachmentData}

```js
ScriptAvatar.getAttachmentData()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use avatar entities instead.</p></div>
:::

<div class="api-text" v-pre><p>Gets information about the models currently attached to the avatar.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="globals#AttachmentData">AttachmentData</a>&gt; <p>Information about all models attached to the avatar, or <code>[]</code> if the avatar data aren't available.</p></div>

### getSimulationRate {#getSimulationRate}

```js
ScriptAvatar.getSimulationRate(rateName?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>rateName</code> <em>optional</em></td><td><a href="globals#AvatarSimulationRate">AvatarSimulationRate</a></td><td><code>&quot;&quot;</code></td><td><p>Rate name.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Simulation rate in Hz, or <code>0.0</code> if avatar data aren't available.</p></div>
