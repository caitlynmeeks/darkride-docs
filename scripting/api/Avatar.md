---
title: "Avatar"
description: "The Avatar API is used to manipulate scriptable avatars on the world."
draft: true
---

# Avatar

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: agents.</div>

<div class="api-text" v-pre><p>The <code>Avatar</code> API is used to manipulate scriptable avatars on the world. This API is a subset of the <a href="MyAvatar"><code>MyAvatar</code></a> API. To enable this API, set <a href="Agent">Agent.isAvatar</a> to <code>true</code>.</p>
 <p>For Interface, client entity, and avatar scripts, see <a href="MyAvatar"><code>MyAvatar</code></a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a scriptable avatar.</p></div>

```js
(function () {
    Agent.setIsAvatar(true);
    print("Position: " + JSON.stringify(Avatar.position));  // 0, 0, 0
}());
```

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the avatar.</p></td></tr>
<tr><td><code>scale</code></td><td>number</td><td><code>1.0</code></td><td><p>The scale of the avatar. The value can be set to anything between <code>0.005</code> and <code>1000.0</code>. When the scale value is fetched, it may temporarily be further limited by the world's settings.</p></td></tr>
<tr><td><code>density</code></td><td>number</td><td></td><td><p>The density of the avatar in kg/m<sup>3</sup>. The density is used to work out its mass in the application of physics. <em>Read-only.</em></p></td></tr>
<tr><td><code>handPosition</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>A user-defined hand position, in world coordinates. The position moves with the avatar but is otherwise not used or changed by Interface.</p></td></tr>
<tr><td><code>bodyYaw</code></td><td>number</td><td></td><td><p>The left or right rotation about an axis running from the head to the feet of the avatar. Yaw is sometimes called "heading".</p></td></tr>
<tr><td><code>bodyPitch</code></td><td>number</td><td></td><td><p>The rotation about an axis running from shoulder to shoulder of the avatar. Pitch is sometimes called "elevation".</p></td></tr>
<tr><td><code>bodyRoll</code></td><td>number</td><td></td><td><p>The rotation about an axis running from the chest to the back of the avatar. Roll is sometimes called "bank".</p></td></tr>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the avatar.</p></td></tr>
<tr><td><code>headOrientation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the avatar's head.</p></td></tr>
<tr><td><code>headPitch</code></td><td>number</td><td></td><td><p>The rotation about an axis running from ear to ear of the avatar's head. Pitch is sometimes called "elevation".</p></td></tr>
<tr><td><code>headYaw</code></td><td>number</td><td></td><td><p>The rotation left or right about an axis running from the base to the crown of the avatar's head. Yaw is sometimes called "heading".</p></td></tr>
<tr><td><code>headRoll</code></td><td>number</td><td></td><td><p>The rotation about an axis running from the nose to the back of the avatar's head. Roll is sometimes called "bank".</p></td></tr>
<tr><td><code>velocity</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The current velocity of the avatar.</p></td></tr>
<tr><td><code>angularVelocity</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The current angular velocity of the avatar.</p></td></tr>
<tr><td><code>audioLoudness</code></td><td>number</td><td></td><td><p>The instantaneous loudness of the audio input that the avatar is injecting into the world.</p></td></tr>
<tr><td><code>audioAverageLoudness</code></td><td>number</td><td></td><td><p>The rolling average loudness of the audio input that the avatar is injecting into the world.</p></td></tr>
<tr><td><code>displayName</code></td><td>string</td><td></td><td><p>The avatar's display name.</p></td></tr>
<tr><td><code>sessionDisplayName</code></td><td>string</td><td></td><td><p><code>displayName's</code> sanitized and default version defined by the avatar mixer rather than Interface clients. The result is unique among all avatars present in the world at the time.</p></td></tr>
<tr><td><code>lookAtSnappingEnabled</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the avatar's eyes snap to look at another avatar's eyes when the other avatar is in the line of sight and also has <code>lookAtSnappingEnabled == true</code>.</p></td></tr>
<tr><td><code>gazeStyle</code></td><td>string</td><td><code>&quot;calm&quot;</code></td><td><p>How the avatar's eyes behave, for everyone to see: <code>"calm"</code>, <code>"excited"</code>, <code>"shy"</code>, <code>"sleepy"</code> or <code>"intent"</code>. A style sets how often and how far the eyes dart, where they rest and how much they meet other people's eyes, what the head does with them, and how the lids blink.</p></td></tr>
<tr><td><code>skeletonModelURL</code></td><td>string</td><td></td><td><p>The avatar's FST file.</p></td></tr>
<tr><td><code>attachmentData</code></td><td>Array&lt;<a href="globals#AttachmentData">AttachmentData</a>&gt;</td><td></td><td><p>Information on the avatar's attachments. </p>
<p class="important">Deprecated: This property is deprecated and will be removed. Use avatar entities instead.</p>
<p></p></td></tr>
<tr><td><code>jointNames</code></td><td>Array&lt;string&gt;</td><td></td><td><p>The list of joints in the current avatar model. <em>Read-only.</em></p></td></tr>
<tr><td><code>sessionUUID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>Unique ID of the avatar in the world. <em>Read-only.</em></p></td></tr>
<tr><td><code>sensorToWorldMatrix</code></td><td><a href="Mat4">Mat4</a></td><td></td><td><p>The scale, rotation, and translation transform from the user's real world to the avatar's size, orientation, and position in the virtual world. <em>Read-only.</em></p></td></tr>
<tr><td><code>controllerLeftHandMatrix</code></td><td><a href="Mat4">Mat4</a></td><td></td><td><p>The rotation and translation of the left hand controller relative to the avatar. <em>Read-only.</em></p></td></tr>
<tr><td><code>controllerRightHandMatrix</code></td><td><a href="Mat4">Mat4</a></td><td></td><td><p>The rotation and translation of the right hand controller relative to the avatar. <em>Read-only.</em></p></td></tr>
<tr><td><code>sensorToWorldScale</code></td><td>number</td><td></td><td><p>The scale that transforms dimensions in the user's real world to the avatar's size in the virtual world. <em>Read-only.</em></p></td></tr>
<tr><td><code>hasPriority</code></td><td>boolean</td><td></td><td><p><code>true</code> if the avatar is in a "hero" zone, <code>false</code> if it isn't. <em>Read-only.</em></p></td></tr>
<tr><td><code>hasScriptedBlendshapes</code></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if blend shapes are controlled by scripted actions, otherwise <code>false</code>. Set this to <code>true</code> before using the <a href="MyAvatar#setBlendshape"><code>MyAvatar.setBlendshape</code></a> method, and set back to <code>false</code> after you no longer want scripted control over the blend shapes. </p>
<p><strong>Note:</strong> This property will automatically be set to true if the Controller system has valid facial blend shape actions.</p>
<p></p></td></tr>
<tr><td><code>hasProceduralBlinkFaceMovement</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if avatars blink automatically by animating facial blend shapes, <code>false</code> if automatic blinking is disabled. Set this property to <code>false</code> if you wish to fully control the blink facial blend shapes via the <a href="MyAvatar#setBlendshape"><code>MyAvatar.setBlendshape</code></a> method.</p></td></tr>
<tr><td><code>hasProceduralEyeFaceMovement</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the facial blend shapes for an avatar's eyes adjust automatically as the eyes move, <code>false</code> if this automatic movement is disabled. Set this property to <code>true</code> to prevent the iris from being obscured by the upper or lower lids. Set this property to <code>false</code> if you wish to fully control the eye blend shapes via the <a href="MyAvatar#setBlendshape"><code>MyAvatar.setBlendshape</code></a> method.</p></td></tr>
<tr><td><code>hasAudioEnabledFaceMovement</code></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the avatar's mouth blend shapes animate automatically based on detected microphone input, <code>false</code> if this automatic movement is disabled. Set this property to <code>false</code> if you wish to fully control the mouth facial blend shapes via the <a href="MyAvatar#setBlendshape"><code>MyAvatar.setBlendshape</code></a> method.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### clearJointData {#clearJointData}

```js
Avatar.clearJointData(index)
```

<div class="api-text" v-pre><p>Clears joint translations and rotations set by script for a specific joint. This restores all motion from the default animation system including inverse kinematics for that joint. </p>
<p>Note: This is slightly faster than the function variation that specifies the joint name.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### clearJointData {#clearJointData-2}

```js
Avatar.clearJointData(name)
```

<div class="api-text" v-pre><p>Clears joint translations and rotations set by script for a specific joint. This restores all motion from the default animation system including inverse kinematics for that joint. </p>
<p>Note: This is slightly slower than the function variation that specifies the joint index.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the joint.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Offset and restore the position of your avatar's head.</p></div>

```js
// Stretch your avatar's neck.
MyAvatar.setJointTranslation("Neck", Vec3.multiply(2, MyAvatar.getJointTranslation("Neck")));

// Restore your avatar's neck after 5s.
Script.setTimeout(function () {
    MyAvatar.clearJointData("Neck");
}, 5000);

// Note: If using from the Avatar API, replace all occurrences of "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### clearJointsData {#clearJointsData}

```js
Avatar.clearJointsData()
```

<div class="api-text" v-pre><p>Clears all joint translations and rotations that have been set by script. This restores all motion from the default animation system including inverse kinematics for all joints.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Set your avatar to it's default T-pose for a while.</p></div>

```js
// Set all joint translations and rotations to defaults.
var i, length, rotation, translation;
for (i = 0, length = MyAvatar.getJointNames().length; i < length; i++) {
    rotation = MyAvatar.getDefaultJointRotation(i);
    translation = MyAvatar.getDefaultJointTranslation(i);
    MyAvatar.setJointData(i, rotation, translation);
}

// Restore your avatar's motion after 5s.
Script.setTimeout(function () {
    MyAvatar.clearJointsData();
}, 5000);

// Note: If using from the Avatar API, replace all occurrences of "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### getAbsoluteJointRotationInObjectFrame {#getAbsoluteJointRotationInObjectFrame}

```js
Avatar.getAbsoluteJointRotationInObjectFrame(index)
```

<div class="api-text" v-pre><p>Gets the rotation of a joint relative to the avatar. </p>
<p><strong>Warning:</strong> Not able to be used in the <code>Avatar</code> API.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint. <em>Not used.</em></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p><code>Quat.IDENTITY</code>.</p></div>

</div>

<div class="api-entry">

### getAbsoluteJointTranslationInObjectFrame {#getAbsoluteJointTranslationInObjectFrame}

```js
Avatar.getAbsoluteJointTranslationInObjectFrame(index)
```

<div class="api-text" v-pre><p>Gets the translation of a joint relative to the avatar. </p>
<p><strong>Warning:</strong> Not able to be used in the <code>Avatar</code> API.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint. <em>Not used.</em></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p><code>Vec3.ZERO</code>.</p></div>

</div>

<div class="api-entry">

### getAnimationDetails {#getAnimationDetails}

```js
Avatar.getAnimationDetails()
```

<div class="api-text" v-pre><p>Gets the details of the current avatar animation that is being or was recently played.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#AnimationDetails">Avatar.AnimationDetails</a> <p>The current or recent avatar animation.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the current animation details.</p></div>

```js
var animationDetails = Avatar.getAnimationDetails();
print("Animation details: " + JSON.stringify(animationDetails));
```

</div>

<div class="api-entry">

### getAvatarEntityData {#getAvatarEntityData}

```js
Avatar.getAvatarEntityData()
```

<div class="api-text" v-pre><p>Gets details of all avatar entities. </p>
<p><strong>Warning:</strong> Potentially an expensive call. Do not use if possible.</p>
<p></p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#AvatarEntityMap">AvatarEntityMap</a> <p>Details of all avatar entities.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the current avatar entities.</p></div>

```js
var avatarEntityData = Avatar.getAvatarEntityData();
print("Avatar entities: " + JSON.stringify(avatarEntityData));
```

</div>

<div class="api-entry">

### getControllerLeftHandMatrix {#getControllerLeftHandMatrix}

```js
Avatar.getControllerLeftHandMatrix()
```

<div class="api-text" v-pre><p>Gets the rotation and translation of the left hand controller relative to the avatar.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Mat4">Mat4</a> <p>The rotation and translation of the left hand controller relative to the avatar.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the left hand controller matrix.</p></div>

```js
var leftHandMatrix = MyAvatar.getControllerLeftHandMatrix();
print("Controller left hand matrix: " + JSON.stringify(leftHandMatrix));
print("Rotation: " + JSON.stringify(Mat4.extractRotation(leftHandMatrix)));
print("Translation: " + JSON.stringify(Mat4.extractTranslation(leftHandMatrix)));
print("Scale: " + JSON.stringify(Mat4.extractScale(leftHandMatrix))); // Always 1,1,1.

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### getControllerRightHandMatrix {#getControllerRightHandMatrix}

```js
Avatar.getControllerRightHandMatrix()
```

<div class="api-text" v-pre><p>Gets the rotation and translation of the right hand controller relative to the avatar.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Mat4">Mat4</a> <p>The rotation and translation of the right hand controller relative to the avatar.</p></div>

</div>

<div class="api-entry">

### getDataRate {#getDataRate}

```js
Avatar.getDataRate(rateName?)
```

<div class="api-text" v-pre><p>Gets the amount of avatar mixer data being generated by the avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>rateName</code> <em>optional</em></td><td><a href="globals#AvatarDataRate">AvatarDataRate</a></td><td><code>&quot;&quot;</code></td><td><p>The type of avatar mixer data to get the data rate of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The data rate in kbps.</p></div>

</div>

<div class="api-entry">

### getDomainMaxScale {#getDomainMaxScale}

```js
Avatar.getDomainMaxScale()
```

<div class="api-text" v-pre><p>Gets the maximum scale allowed for this avatar in the current world. This value can change as the user changes avatars or when changing worlds.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The maximum scale allowed for this avatar in the current world.</p></div>

</div>

<div class="api-entry">

### getDomainMinScale {#getDomainMinScale}

```js
Avatar.getDomainMinScale()
```

<div class="api-text" v-pre><p>Gets the minimum scale allowed for this avatar in the current world. This value can change as the user changes avatars or when changing worlds.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The minimum scale allowed for this avatar in the current world.</p></div>

</div>

<div class="api-entry">

### getEyeHeight {#getEyeHeight}

```js
Avatar.getEyeHeight()
```

<div class="api-text" v-pre><p>Gets the current eye height of the avatar. This height is only an estimate and might be incorrect for avatars that are missing standard joints.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The eye height of the avatar.</p></div>

</div>

<div class="api-entry">

### getEyesLookAt {#getEyesLookAt}

```js
Avatar.getEyesLookAt()
```

<div class="api-text" v-pre><p>Gets the point the eyes were last told to look at.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The eyes' look-at target in world coordinates.</p></div>

</div>

<div class="api-entry">

### getHandState {#getHandState}

```js
Avatar.getHandState()
```

<div class="api-text" v-pre><p>Gets the pointing state of the hands to control where the laser emanates from. If the right index finger is pointing, the laser emanates from the tip of that finger, otherwise it emanates from the palm.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#HandState">HandState</a> <p>The pointing state of the hand.</p></div>

</div>

<div class="api-entry">

### getHeadLookAt {#getHeadLookAt}

```js
Avatar.getHeadLookAt()
```

<div class="api-text" v-pre><p>Gets the point the head was last told to look at.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The head's look-at target in world coordinates.</p></div>

</div>

<div class="api-entry">

### getHeight {#getHeight}

```js
Avatar.getHeight()
```

<div class="api-text" v-pre><p>Gets the current height of the avatar. This height is only an estimate and might be incorrect for avatars that are missing standard joints.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The height of the avatar.</p></div>

</div>

<div class="api-entry">

### getJointIndex {#getJointIndex}

```js
Avatar.getJointIndex(name)
```

<div class="api-text" v-pre><p>Gets the joint index for a named joint. The joint index value is the position of the joint in the array returned by <a href="MyAvatar#getJointNames"><code>MyAvatar.getJointNames</code></a>, or <a href="#getJointNames"><code>Avatar.getJointNames</code></a> if using the <code>Avatar</code> API.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The index of the joint if valid, otherwise <code>-1</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the index of your avatar's left arm joint.</p></div>

```js
print(JSON.stringify(MyAvatar.getJointIndex("LeftArm")));

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### getJointNames {#getJointNames}

```js
Avatar.getJointNames()
```

<div class="api-text" v-pre><p>Gets the names of all the joints in the current avatar.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The joint names.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the names of all the joints in your current avatar.</p></div>

```js
print(JSON.stringify(MyAvatar.getJointNames()));

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### getJointRotation {#getJointRotation}

```js
Avatar.getJointRotation(index)
```

<div class="api-text" v-pre><p>Gets the rotation of a joint relative to its parent. For information on the joint hierarchy used, see <span>Avatar Standards</span>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The rotation of the joint relative to its parent.</p></div>

</div>

<div class="api-entry">

### getJointRotation {#getJointRotation-2}

```js
Avatar.getJointRotation(name)
```

<div class="api-text" v-pre><p>Gets the rotation of a joint relative to its parent. For information on the joint hierarchy used, see <span>Avatar Standards</span>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The rotation of the joint relative to its parent.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the rotation of your avatar's hips joint.</p></div>

```js
print(JSON.stringify(MyAvatar.getJointRotation("Hips")));

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### getJointRotations {#getJointRotations}

```js
Avatar.getJointRotations()
```

<div class="api-text" v-pre><p>Gets the rotations of all joints in the current avatar. Each joint's rotation is relative to its parent joint.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Quat">Quat</a>&gt; <p>The rotations of all joints relative to each's parent. The values are in the same order as the array returned by <a href="MyAvatar#getJointNames"><code>MyAvatar.getJointNames</code></a>, or <a href="#getJointNames"><code>Avatar.getJointNames</code></a> if using the <code>Avatar</code> API.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the rotations of all your avatar's joints.</p></div>

```js
print(JSON.stringify(MyAvatar.getJointRotations()));

// Note: If using from the Avatar API, replace all "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### getJointTranslation {#getJointTranslation}

```js
Avatar.getJointTranslation(index)
```

<div class="api-text" v-pre><p>Gets the translation of a joint relative to its parent, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
 <p>For information on the joint hierarchy used, see <span>Avatar Standards</span>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The translation of the joint relative to its parent, in model coordinates.</p></div>

</div>

<div class="api-entry">

### getJointTranslation {#getJointTranslation-2}

```js
Avatar.getJointTranslation(name)
```

<div class="api-text" v-pre><p>Gets the translation of a joint relative to its parent, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
 <p>For information on the joint hierarchy used, see <span>Avatar Standards</span>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>number</td><td><p>The name of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The translation of the joint relative to its parent, in model coordinates.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the translation of your avatar's hips joint.</p></div>

```js
print(JSON.stringify(MyAvatar.getJointRotation("Hips")));

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### getJointTranslations {#getJointTranslations}

```js
Avatar.getJointTranslations()
```

<div class="api-text" v-pre><p>Gets the translations of all joints in the current avatar. Each joint's translation is relative to its parent joint, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
<p></p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="Vec3">Vec3</a>&gt; <p>The translations of all joints relative to each's parent, in model coordinates. The values are in the same order as the array returned by <a href="MyAvatar#getJointNames"><code>MyAvatar.getJointNames</code></a>, or <a href="#getJointNames"><code>Avatar.getJointNames</code></a> if using the <code>Avatar</code> API.</p></div>

</div>

<div class="api-entry">

### getSensorToLocalMatrix {#getSensorToLocalMatrix}

```js
Avatar.getSensorToLocalMatrix()
```

<div class="api-text" v-pre><p>Gets the transform from the user's real world to the avatar's size, orientation, and position relative to virtual parent. When not parented, identical to getSensorToWorldMatrix</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Mat4">Mat4</a> <p>The scale, rotation, and translation transform from the user's real world to the avatar's size, orientation, and position in their current parented local space.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the sensor to local matrix.</p></div>

```js
var sensorToLocalMatrix = MyAvatar.getSensorToLocalMatrix();
print("Sensor to local matrix: " + JSON.stringify(sensorToLocalMatrix));
print("Rotation: " + JSON.stringify(Mat4.extractRotation(sensorToLocalMatrix)));
print("Translation: " + JSON.stringify(Mat4.extractTranslation(sensorToLocalMatrix)));
print("Scale: " + JSON.stringify(Mat4.extractScale(sensorToLocalMatrix)));

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### getSensorToWorldMatrix {#getSensorToWorldMatrix}

```js
Avatar.getSensorToWorldMatrix()
```

<div class="api-text" v-pre><p>Gets the transform from the user's real world to the avatar's size, orientation, and position in the virtual world.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Mat4">Mat4</a> <p>The scale, rotation, and translation transform from the user's real world to the avatar's size, orientation, and position in the virtual world.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the sensor to world matrix.</p></div>

```js
var sensorToWorldMatrix = MyAvatar.getSensorToWorldMatrix();
print("Sensor to woprld matrix: " + JSON.stringify(sensorToWorldMatrix));
print("Rotation: " + JSON.stringify(Mat4.extractRotation(sensorToWorldMatrix)));
print("Translation: " + JSON.stringify(Mat4.extractTranslation(sensorToWorldMatrix)));
print("Scale: " + JSON.stringify(Mat4.extractScale(sensorToWorldMatrix)));

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### getSensorToWorldScale {#getSensorToWorldScale}

```js
Avatar.getSensorToWorldScale()
```

<div class="api-text" v-pre><p>Gets the scale that transforms dimensions in the user's real world to the avatar's size in the virtual world.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The scale that transforms dimensions in the user's real world to the avatar's size in the virtual world.</p></div>

</div>

<div class="api-entry">

### getTargetScale {#getTargetScale}

```js
Avatar.getTargetScale()
```

<div class="api-text" v-pre><p>Gets the target scale of the avatar without any restrictions on permissible values imposed by the world. In contrast, the <code>scale</code> property's value may be limited by the world's settings.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The target scale of the avatar.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Compare the target and current avatar scales.</p></div>

```js
print("Current avatar scale: " + MyAvatar.scale);
print("Target avatar scale:  " + MyAvatar.getTargetScale());

// Note: If using from the Avatar API, replace all occurrences of "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### getUpdateRate {#getUpdateRate}

```js
Avatar.getUpdateRate(rateName?)
```

<div class="api-text" v-pre><p>Gets the update rate of avatar mixer data being generated by the avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>rateName</code> <em>optional</em></td><td><a href="globals#AvatarUpdateRate">AvatarUpdateRate</a></td><td><code>&quot;&quot;</code></td><td><p>The type of avatar mixer data to get the update rate of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The update rate in Hz.</p></div>

</div>

<div class="api-entry">

### isJointDataValid {#isJointDataValid}

```js
Avatar.isJointDataValid(index)
```

<div class="api-text" v-pre><p>Checks that the data for a joint are valid.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the joint data are valid, <code>false</code> if not.</p></div>

</div>

<div class="api-entry">

### isJointDataValid {#isJointDataValid-2}

```js
Avatar.isJointDataValid(name)
```

<div class="api-text" v-pre><p>Checks if the data for a joint are valid.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the joint.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the joint data are valid, <code>false</code> if not.</p></div>

</div>

<div class="api-entry">

### releaseEyesLookAtControl {#releaseEyesLookAtControl}

```js
Avatar.releaseEyesLookAtControl()
```

<div class="api-text" v-pre><p>Gives the eyes back: they look where the head looks.</p></div>

</div>

<div class="api-entry">

### releaseHeadLookAtControl {#releaseHeadLookAtControl}

```js
Avatar.releaseHeadLookAtControl()
```

<div class="api-text" v-pre><p>Gives the head back: it eases back to looking ahead.</p></div>

</div>

<div class="api-entry">

### setAbsoluteJointRotationInObjectFrame {#setAbsoluteJointRotationInObjectFrame}

```js
Avatar.setAbsoluteJointRotationInObjectFrame(index, rotation)
```

<div class="api-text" v-pre><p>Sets the rotation of a joint relative to the avatar. </p>
<p><strong>Warning:</strong> Not able to be used in the <code>Avatar</code> API.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint. <em>Not used.</em></p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td><p>The rotation of the joint relative to the avatar. <em>Not used.</em></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>false</code>.</p></div>

</div>

<div class="api-entry">

### setAbsoluteJointTranslationInObjectFrame {#setAbsoluteJointTranslationInObjectFrame}

```js
Avatar.setAbsoluteJointTranslationInObjectFrame(index, translation)
```

<div class="api-text" v-pre><p>Sets the translation of a joint relative to the avatar. </p>
<p><strong>Warning:</strong> Not able to be used in the <code>Avatar</code> API.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint. <em>Not used.</em></p></td></tr>
<tr><td><code>translation</code></td><td><a href="Vec3">Vec3</a></td><td><p>The translation of the joint relative to the avatar. <em>Not used.</em></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>false</code>.</p></div>

</div>

<div class="api-entry">

### setAvatarEntityData {#setAvatarEntityData}

```js
Avatar.setAvatarEntityData(avatarEntityData)
```

<div class="api-text" v-pre><p>Sets all avatar entities from an object. </p>
<p><strong>Warning:</strong> Potentially an expensive call. Do not use if possible.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>avatarEntityData</code></td><td><a href="globals#AvatarEntityMap">AvatarEntityMap</a></td><td><p>Details of the avatar entities.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setBlendshape {#setBlendshape}

```js
Avatar.setBlendshape(name, value)
```

<div class="api-text" v-pre><p>Sets the value of a blend shape to animate your avatar's face. In order for other users to see the resulting animations on your avatar's face, set <code>hasScriptedBlendshapes</code> to <code>true</code>. When you are done using this API, set <code>hasScriptedBlendshapes</code> back to <code>false</code> when the animation is complete.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the blendshape, per the Avatar Standards.</p></td></tr>
<tr><td><code>value</code></td><td>number</td><td><p>A value between <code>0.0</code> and <code>1.0</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Open your avatar's mouth wide.</p></div>

```js
MyAvatar.hasScriptedBlendshapes = true;
MyAvatar.setBlendshape("JawOpen", 1.0);

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### setEyesLookAt {#setEyesLookAt}

```js
Avatar.setEyesLookAt(lookAtTarget)
```

<div class="api-text" v-pre><p>Makes the avatar's eyes look at a point, for everyone to see, without turning the head. Once this method is called, the script has control of the eyes for two seconds: call it again to keep it. Then the eyes look where the head looks. Other scripts read where an avatar looks in its <code>lookAtPosition</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>lookAtTarget</code></td><td><a href="Vec3">Vec3</a></td><td><p>The target point in world coordinates.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setForceFaceTrackerConnected {#setForceFaceTrackerConnected}

```js
Avatar.setForceFaceTrackerConnected(connected)
```

<div class="api-text" v-pre><p>Enables blend shapes set using <a href="#setBlendshape"><code>Avatar.setBlendshape</code></a> or <a href="MyAvatar#setBlendshape"><code>MyAvatar.setBlendshape</code></a> to be transmitted to other users so that they can see the animation of your avatar's face. </p>
<p class="important">Deprecated: This method is deprecated and will be removed. Use the <code>Avatar.hasScriptedBlendshapes</code> or <code>MyAvatar.hasScriptedBlendshapes</code> property instead.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>connected</code></td><td>boolean</td><td><p><code>true</code> to enable blend shape changes to be transmitted to other users, <code>false</code> to disable.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setHandState {#setHandState}

```js
Avatar.setHandState(state)
```

<div class="api-text" v-pre><p>Sets the pointing state of the hands to control where the laser emanates from. If the right index finger is pointing, the laser emanates from the tip of that finger, otherwise it emanates from the palm.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>state</code></td><td><a href="globals#HandState">HandState</a></td><td><p>The pointing state of the hand.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setHeadLookAt {#setHeadLookAt}

```js
Avatar.setHeadLookAt(lookAtTarget)
```

<div class="api-text" v-pre><p>Turns the avatar's head toward a point, as far as a head turns (70 degrees left or right, 40 up or down, from where the body faces), easing there; the neck takes part of the turn, the body keeps its facing, and the eyes look at the point. Once this method is called, the script has control of the head for two seconds: call it again to keep it, or every frame to follow something that moves. Then the head eases back to looking ahead. </p>
<p>With no animation playing, the turn starts from the pose the avatar has; a joint the script sets while the head turns (with <a href="#setJointRotation"><code>Avatar.setJointRotation</code></a>) is overridden until the head is back.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>lookAtTarget</code></td><td><a href="Vec3">Vec3</a></td><td><p>The target point in world coordinates.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setJointData {#setJointData}

```js
Avatar.setJointData(index, rotation, translation)
```

<div class="api-text" v-pre><p>Sets a specific joint's rotation and position relative to its parent, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
 <p>Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td><p>The rotation of the joint relative to its parent.</p></td></tr>
<tr><td><code>translation</code></td><td><a href="Vec3">Vec3</a></td><td><p>The translation of the joint relative to its parent, in model coordinates.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Set your avatar to it's default T-pose for a while.<br> <img alt="Avatar in T-pose" src="./images/t-pose.png"></p></div>

```js
// Set all joint translations and rotations to defaults.
var i, length, rotation, translation;
for (i = 0, length = MyAvatar.getJointNames().length; i < length; i++) {
    rotation = MyAvatar.getDefaultJointRotation(i);
    translation = MyAvatar.getDefaultJointTranslation(i);
    MyAvatar.setJointData(i, rotation, translation);
}

// Restore your avatar's motion after 5s.
Script.setTimeout(function () {
    MyAvatar.clearJointsData();
}, 5000);

// Note: If using from the Avatar API, replace all occurrences of "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### setJointData {#setJointData-2}

```js
Avatar.setJointData(name, rotation, translation)
```

<div class="api-text" v-pre><p>Sets a specific joint's rotation and position relative to its parent, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
 <p>Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the joint.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td><p>The rotation of the joint relative to its parent.</p></td></tr>
<tr><td><code>translation</code></td><td><a href="Vec3">Vec3</a></td><td><p>The translation of the joint relative to its parent, in model coordinates.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setJointRotation {#setJointRotation}

```js
Avatar.setJointRotation(index, rotation)
```

<div class="api-text" v-pre><p>Sets a specific joint's rotation relative to its parent. </p>
<p>Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td><p>The rotation of the joint relative to its parent.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setJointRotation {#setJointRotation-2}

```js
Avatar.setJointRotation(name, rotation)
```

<div class="api-text" v-pre><p>Sets a specific joint's rotation relative to its parent. </p>
<p>Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the joint.</p></td></tr>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td><p>The rotation of the joint relative to its parent.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Set your avatar to its default T-pose then rotate its right arm.<br> <img alt="Avatar in T-pose with arm rotated" src="./images/armpose.png"></p></div>

```js
// Set all joint translations and rotations to defaults.
var i, length, rotation, translation;
for (i = 0, length = MyAvatar.getJointNames().length; i < length; i++) {
    rotation = MyAvatar.getDefaultJointRotation(i);
    translation = MyAvatar.getDefaultJointTranslation(i);
    MyAvatar.setJointData(i, rotation, translation);
}

// Rotate the right arm.
var newArmRotation = { x: 0.47, y: 0.22, z: -0.02, w: 0.87 };
MyAvatar.setJointRotation("RightArm", newArmRotation);

// Restore your avatar's motion after 5s.
Script.setTimeout(function () {
    MyAvatar.clearJointsData();
}, 5000);

// Note: If using from the Avatar API, replace all occurrences of "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### setJointRotations {#setJointRotations}

```js
Avatar.setJointRotations(jointRotations)
```

<div class="api-text" v-pre><p>Sets the rotations of all joints in the current avatar. Each joint's rotation is relative to its parent joint. </p>
<p>Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>jointRotations</code></td><td>Array&lt;<a href="Quat">Quat</a>&gt;</td><td><p>The rotations for all joints in the avatar. The values are in the same order as the array returned by <a href="MyAvatar#getJointNames"><code>MyAvatar.getJointNames</code></a>, or <a href="#getJointNames"><code>Avatar.getJointNames</code></a> if using the <code>Avatar</code> API.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Set your avatar to its default T-pose then rotate its right arm.<br> <img alt="Avatar in T-pose" src="./images/armpose.png"></p></div>

```js
// Set all joint translations and rotations to defaults.
var i, length, rotation, translation;
for (i = 0, length = MyAvatar.getJointNames().length; i < length; i++) {
    rotation = MyAvatar.getDefaultJointRotation(i);
    translation = MyAvatar.getDefaultJointTranslation(i);
    MyAvatar.setJointData(i, rotation, translation);
}

// Get all join rotations.
var jointRotations = MyAvatar.getJointRotations(); 

// Update the rotation of the right arm in the array.
jointRotations[MyAvatar.getJointIndex("RightArm")] = { x: 0.47, y: 0.22, z: -0.02, w: 0.87 };

// Update all joint rotations.
MyAvatar.setJointRotations(jointRotations);

// Restore your avatar's motion after 5s.
Script.setTimeout(function () {
    MyAvatar.clearJointsData();
}, 5000);

// Note: If using from the Avatar API, replace all occurrences of "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### setJointTranslation {#setJointTranslation}

```js
Avatar.setJointTranslation(index, translation)
```

<div class="api-text" v-pre><p>Sets a specific joint's translation relative to its parent, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
 <p>Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index of the joint.</p></td></tr>
<tr><td><code>translation</code></td><td><a href="Vec3">Vec3</a></td><td><p>The translation of the joint relative to its parent, in model coordinates.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setJointTranslation {#setJointTranslation-2}

```js
Avatar.setJointTranslation(name, translation)
```

<div class="api-text" v-pre><p>Sets a specific joint's translation relative to its parent, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
 <p>Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the joint.</p></td></tr>
<tr><td><code>translation</code></td><td><a href="Vec3">Vec3</a></td><td><p>The translation of the joint relative to its parent, in model coordinates.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Stretch your avatar's neck. Depending on the avatar you are using, you will either see a gap between the head and body or you will see the neck stretched.<br> <img alt="Avatar with neck stretched" src="./images/stretched-neck.png"></p></div>

```js
// Stretch your avatar's neck.
MyAvatar.setJointTranslation("Neck", Vec3.multiply(2, MyAvatar.getJointTranslation("Neck")));

// Restore your avatar's neck after 5s.
Script.setTimeout(function () {
    MyAvatar.clearJointData("Neck");
}, 5000);

// Note: If using from the Avatar API, replace all occurrences of "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### setJointTranslations {#setJointTranslations}

```js
Avatar.setJointTranslations(translations)
```

<div class="api-text" v-pre><p>Sets the translations of all joints in the current avatar. Each joint's translation is relative to its parent joint, in model coordinates. </p>
<p><strong>Warning:</strong> These coordinates are not necessarily in meters.</p>
 <p>Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>translations</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><p>The translations for all joints in the avatar, in model coordinates. The values are in the same order as the array returned by <a href="MyAvatar#getJointNames"><code>MyAvatar.getJointNames</code></a>, or <a href="#getJointNames"><code>Avatar.getJointNames</code></a> if using the <code>Avatar</code> API.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setProperties {#setProperties}

```js
Avatar.setProperties(properties)
```

<div class="api-text" v-pre><p>Magic function that works like Entities.editEntity. currently supports: parentID, parentJointIndex, localPosition, localRotation, localVelocity, localAngularVelocity</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td><a href="Entities-types#EntityProperties">Entities.EntityProperties</a></td><td><p>The new property values.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setSkeletonModelURL {#setSkeletonModelURL}

```js
Avatar.setSkeletonModelURL(url)
```

<div class="api-text" v-pre><p>Sets the avatar's skeleton model.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The avatar's FST file.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### startAnimation {#startAnimation}

```js
Avatar.startAnimation(url, fps?, priority?, loop?, hold?, firstFrame?, lastFrame?, maskedJoints?)
```

<div class="api-text" v-pre><p>Starts playing an animation on the avatar.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The animation file's URL. Animation files need to be in glTF or FBX format but only need to contain the avatar skeleton and animation data. glTF models may be in JSON or binary format (".gltf" or ".glb" URLs respectively). </p>
<p><strong>Warning:</strong> glTF animations currently do not always animate correctly.</p>
<p></p></td></tr>
<tr><td><code>fps</code> <em>optional</em></td><td>number</td><td><code>30</code></td><td><p>The frames per second (FPS) rate for the animation playback. 30 FPS is normal speed.</p></td></tr>
<tr><td><code>priority</code> <em>optional</em></td><td>number</td><td><code>1</code></td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>loop</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> if the animation should loop, <code>false</code> if it shouldn't.</p></td></tr>
<tr><td><code>hold</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>firstFrame</code> <em>optional</em></td><td>number</td><td><code>0</code></td><td><p>The frame at which the animation starts.</p></td></tr>
<tr><td><code>lastFrame</code> <em>optional</em></td><td>number</td><td><code>3.403e+38</code></td><td><p>The frame at which the animation stops.</p></td></tr>
<tr><td><code>maskedJoints</code> <em>optional</em></td><td>Array&lt;string&gt;</td><td><code>[]</code></td><td><p>The names of joints that should not be animated.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### stopAnimation {#stopAnimation}

```js
Avatar.stopAnimation()
```

<div class="api-text" v-pre><p>Stops playing the current animation.</p></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### displayNameChanged {#displayNameChanged}

```js
Avatar.displayNameChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the avatar's <code>displayName</code> property value changes.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when your avatar display name changes.</p></div>

```js
MyAvatar.displayNameChanged.connect(function () {
    print("Avatar display name changed to: " + MyAvatar.displayName);
});

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### lookAtSnappingChanged {#lookAtSnappingChanged}

```js
Avatar.lookAtSnappingChanged.connect(function (enabled) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the avatar's <code>lookAtSnappingEnabled</code> property value changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> if look-at snapping is enabled, <code>false</code> if not.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when your look-at snapping setting changes.</p></div>

```js
MyAvatar.lookAtSnappingChanged.connect(function () {
    print("Avatar look-at snapping changed to: " + MyAvatar.lookAtSnappingEnabled);
});

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### sessionDisplayNameChanged {#sessionDisplayNameChanged}

```js
Avatar.sessionDisplayNameChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the avatar's <code>sessionDisplayName</code> property value changes.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when your avatar's session display name changes.</p></div>

```js
MyAvatar.sessionDisplayNameChanged.connect(function () {
    print("Avatar session display name changed to: " + MyAvatar.sessionDisplayName);
});

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### sessionUUIDChanged {#sessionUUIDChanged}

```js
Avatar.sessionUUIDChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the avatar's <code>sessionUUID</code> property value changes.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when your avatar's session UUID changes.</p></div>

```js
MyAvatar.sessionUUIDChanged.connect(function () {
    print("Avatar session UUID changed to: " + MyAvatar.sessionUUID);
});

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### skeletonModelURLChanged {#skeletonModelURLChanged}

```js
Avatar.skeletonModelURLChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the avatar's model (i.e., <code>skeletonModelURL</code> property value) is changed.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when your avatar's skeleton model changes.</p></div>

```js
MyAvatar.skeletonModelURLChanged.connect(function () {
    print("Skeleton model changed to: " + MyAvatar.skeletonModelURL);
});

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

## Types {#types}

<div class="api-entry">

### AnimationDetails {#AnimationDetails}

<div class="api-text" v-pre><p>The details of an animation that is playing.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>role</code></td><td>string</td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>url</code></td><td>string</td><td><p>The URL to the animation file. Animation files need to be in glTF or FBX format but only need to contain the avatar skeleton and animation data. glTF models may be in JSON or binary format (".gltf" or ".glb" URLs respectively). </p>
<p><strong>Warning:</strong> glTF animations currently do not always animate correctly.</p>
<p></p></td></tr>
<tr><td><code>fps</code></td><td>number</td><td><p>The frames per second(FPS) rate for the animation playback. 30 FPS is normal speed.</p></td></tr>
<tr><td><code>priority</code></td><td>number</td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>loop</code></td><td>boolean</td><td><p><code>true</code> if the animation should loop, <code>false</code> if it shouldn't.</p></td></tr>
<tr><td><code>hold</code></td><td>boolean</td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>firstFrame</code></td><td>number</td><td><p>The frame the animation should start at.</p></td></tr>
<tr><td><code>lastFrame</code></td><td>number</td><td><p>The frame the animation should stop at.</p></td></tr>
<tr><td><code>running</code></td><td>boolean</td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>currentFrame</code></td><td>number</td><td><p>The current frame being played.</p></td></tr>
<tr><td><code>startAutomatically</code></td><td>boolean</td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>allowTranslation</code></td><td>boolean</td><td><p><em>Not used.</em></p></td></tr>
</tbody></table></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### attach {#attach}

```js
Avatar.attach(modelURL, jointName?, translation?, rotation?, scale?, isSoft?, allowDuplicates?, useSaved?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use avatar entities instead.</p></div>
:::

<div class="api-text" v-pre><p>Attaches a model to your avatar. For example, you can give your avatar a hat to wear, a guitar to hold, or a surfboard to stand on.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>modelURL</code></td><td>string</td><td></td><td><p>The URL of the glTF, FBX, or OBJ model to attach. glTF models may be in JSON or binary format (".gltf" or ".glb" URLs respectively).</p></td></tr>
<tr><td><code>jointName</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The name of the avatar joint (see <a href="MyAvatar#getJointNames"><code>MyAvatar.getJointNames</code></a> or <a href="#getJointNames"><code>Avatar.getJointNames</code></a>) to attach the model to.</p></td></tr>
<tr><td><code>translation</code> <em>optional</em></td><td><a href="Vec3">Vec3</a></td><td><code>Vec3.ZERO</code></td><td><p>The offset to apply to the model relative to the joint position.</p></td></tr>
<tr><td><code>rotation</code> <em>optional</em></td><td><a href="Quat">Quat</a></td><td><code>Quat.IDENTITY</code></td><td><p>The rotation to apply to the model relative to the joint orientation.</p></td></tr>
<tr><td><code>scale</code> <em>optional</em></td><td>number</td><td><code>1.0</code></td><td><p>The scale to apply to the model.</p></td></tr>
<tr><td><code>isSoft</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>If the model has a skeleton, set this to <code>true</code> so that the bones of the attached model's skeleton are rotated to fit the avatar's current pose. <code>isSoft</code> is used, for example, to have clothing that moves with the avatar. </p>
<p>If <code>true</code>, the <code>translation</code>, <code>rotation</code>, and <code>scale</code> parameters are ignored.</p>
<p></p></td></tr>
<tr><td><code>allowDuplicates</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>If <code>true</code> then more than one copy of any particular model may be attached to the same joint; if <code>false</code> then the same model cannot be attached to the same joint.</p></td></tr>
<tr><td><code>useSaved</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><em>Not used.</em></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Attach a cowboy hat to your avatar's head.</p></div>

```js
var attachment = {
    modelURL: "https://s3.amazonaws.com/hifi-public/tony/cowboy-hat.fbx",
    jointName: "Head",
    translation: {"x": 0, "y": 0.25, "z": 0},
    rotation: {"x": 0, "y": 0, "z": 0, "w": 1},
    scale: 0.01,
    isSoft: false
};

 MyAvatar.attach(attachment.modelURL,
                 attachment.jointName,
                 attachment.translation,
                 attachment.rotation,
                 attachment.scale,
                 attachment.isSoft);

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### clearAvatarEntity {#clearAvatarEntity}

```js
Avatar.clearAvatarEntity(entityID, requiresRemovalFromTree?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The entity ID.</p></td></tr>
<tr><td><code>requiresRemovalFromTree</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p>unused</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### detachAll {#detachAll}

```js
Avatar.detachAll(modelURL, jointName?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use avatar entities instead.</p></div>
:::

<div class="api-text" v-pre><p>Detaches all instances of a particular model from either a specific joint or all joints.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>modelURL</code></td><td>string</td><td></td><td><p>The URL of the model to detach.</p></td></tr>
<tr><td><code>jointName</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The name of the joint to detach the model from. If <code>""</code>, then the model is detached from all joints.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### detachOne {#detachOne}

```js
Avatar.detachOne(modelURL, jointName?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use avatar entities instead.</p></div>
:::

<div class="api-text" v-pre><p>Detaches the most recently attached instance of a particular model from either a specific joint or any joint.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>modelURL</code></td><td>string</td><td></td><td><p>The URL of the model to detach.</p></td></tr>
<tr><td><code>jointName</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The name of the joint to detach the model from. If <code>""</code>, then the most recently attached model is removed from which ever joint it was attached to.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getAttachmentData {#getAttachmentData}

```js
Avatar.getAttachmentData()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use avatar entities instead.</p></div>
:::

<div class="api-text" v-pre><p>Gets information about the models currently attached to your avatar.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="globals#AttachmentData">AttachmentData</a>&gt; <p>Information about all models attached to your avatar.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the URLs of all current attachments.</p></div>

```js
var attachments = MyAvatar.getaAttachmentData();
for (var i = 0; i < attachments.length; i++) {
    print(attachments[i].modelURL);
}

// Note: If using from the Avatar API, replace "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### getAttachmentsVariant {#getAttachmentsVariant}

```js
Avatar.getAttachmentsVariant()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use avatar entities instead.</p></div>
:::

<div class="api-text" v-pre><p>Gets information about the models currently attached to your avatar.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="globals#AttachmentData">AttachmentData</a>&gt; <p>Information about all models attached to your avatar.</p></div>

</div>

<div class="api-entry">

### resetLastSent {#resetLastSent}

```js
Avatar.resetLastSent()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### sendAvatarDataPacket {#sendAvatarDataPacket}

```js
Avatar.sendAvatarDataPacket(sendAll?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sendAll</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>Send all.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

</div>

<div class="api-entry">

### sendIdentityPacket {#sendIdentityPacket}

```js
Avatar.sendIdentityPacket()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> number </div>

</div>

<div class="api-entry">

### setAttachmentData {#setAttachmentData}

```js
Avatar.setAttachmentData(attachmentData)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use avatar entities instead.</p></div>
:::

<div class="api-text" v-pre><p>Sets all models currently attached to your avatar. For example, if you retrieve attachment data using <a href="MyAvatar#getAttachmentData"><code>MyAvatar.getAttachmentData</code></a> or <a href="#getAttachmentData"><code>Avatar.getAttachmentData</code></a>, make changes to it, and then want to update your avatar's attachments per the changed data. You can also remove all attachments by using setting <code>attachmentData</code> to <code>null</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>attachmentData</code></td><td>Array&lt;<a href="globals#AttachmentData">AttachmentData</a>&gt;</td><td><p>The attachment data defining the models to have attached to your avatar. Use <code>null</code> to remove all attachments.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Remove a hat attachment if your avatar is wearing it.</p></div>

```js
var hatURL = "https://s3.amazonaws.com/hifi-public/tony/cowboy-hat.fbx";
var attachments = MyAvatar.getAttachmentData();

for (var i = 0; i < attachments.length; i++) {
    if (attachments[i].modelURL === hatURL) {
        attachments.splice(i, 1);
        MyAvatar.setAttachmentData(attachments);
        break;
    }
 }

// Note: If using from the Avatar API, replace all occurrences of "MyAvatar" with "Avatar".
```

</div>

<div class="api-entry">

### setAttachmentsVariant {#setAttachmentsVariant}

```js
Avatar.setAttachmentsVariant(variant)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use avatar entities instead.</p></div>
:::

<div class="api-text" v-pre><p>Sets all models currently attached to your avatar. For example, if you retrieve attachment data using <a href="MyAvatar#getAttachmentsVariant"><code>MyAvatar.getAttachmentsVariant</code></a> or <a href="#getAttachmentsVariant"><code>Avatar.getAttachmentsVariant</code></a>, make changes to it, and then want to update your avatar's attachments per the changed data.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>variant</code></td><td>Array&lt;<a href="globals#AttachmentData">AttachmentData</a>&gt;</td><td><p>The attachment data defining the models to have attached to your avatar.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setJointMappingsFromNetworkReply {#setJointMappingsFromNetworkReply}

```js
Avatar.setJointMappingsFromNetworkReply()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### setRawJointData {#setRawJointData}

```js
Avatar.setRawJointData(data)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Sets joint translations and rotations from raw joint data.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code></td><td>Array&lt;JointData&gt;</td><td><p>The raw joint data.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setSessionUUID {#setSessionUUID}

```js
Avatar.setSessionUUID(sessionUUID)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sessionUUID</code></td><td><a href="Uuid">Uuid</a></td><td><p>Session UUID.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### update {#update}

```js
Avatar.update(deltaTime)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deltaTime</code></td><td>number</td><td><p>Delta time.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### updateAvatarEntity {#updateAvatarEntity}

```js
Avatar.updateAvatarEntity(entityID, entityData)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The entity ID.</p></td></tr>
<tr><td><code>entityData</code></td><td>ArrayBuffer</td><td><p>Entity data.</p></td></tr>
</tbody></table></div>

</div>
