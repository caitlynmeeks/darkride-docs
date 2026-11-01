---
title: "Quat"
description: "The Quat API provides facilities for generating and manipulating quaternions."
---

# Quat

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>The <code>Quat</code> API provides facilities for generating and manipulating quaternions. Quaternions should be used in preference to Euler angles wherever possible because quaternions don't suffer from the problem of gimbal lock.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Print the <code>IDENTITY</code> value.</p></div>

```js
print(JSON.stringify(Quat.IDENTITY)); // { x: 0, y: 0, z: 0, w: 1 }
print(JSON.stringify(Quat.safeEulerAngles(Quat.IDENTITY))); // { x: 0, y: 0, z: 0 }
```

## The Quat type {#type}

<div class="api-text" v-pre><p>A quaternion value. See also the <a href="">Quat</a> API.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>Imaginary component i.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Imaginary component j.</p></td></tr>
<tr><td><code>z</code></td><td>number</td><td><p>Imaginary component k.</p></td></tr>
<tr><td><code>w</code></td><td>number</td><td><p>Real component.</p></td></tr>
</tbody></table></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>IDENTITY</code></td><td><a href="">Quat</a></td><td><p><code>{ x: 0, y: 0, z: 0, w: 1 }</code> : The identity rotation, i.e., no rotation. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### angle {#angle}

```js
Quat.angle(q)
```

<div class="api-text" v-pre><p>Gets the rotation angle for a quaternion.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q</code></td><td><a href="">Quat</a></td><td><p>The quaternion.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The rotation angle for <code>q</code>, in radians. <strong>WARNING:</strong> This value is in radians whereas the value used by <a href="#angleAxis">Quat.angleAxis</a> is in degrees.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Get the rotation angle of a quaternion.</p></div>

```js
var forward = Quat.getForward(Camera.orientation);
var rotation = Quat.angleAxis(90, forward);
var angle = Quat.angle(rotation);
print("Angle: " + angle * 180 / Math.PI);  // 90 degrees.
```

</div>

<div class="api-entry">

### angleAxis {#angleAxis}

```js
Quat.angleAxis(angle, axis)
```

<div class="api-text" v-pre><p>Generates a quaternion given an angle to rotate through and an axis to rotate about.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>angle</code></td><td>number</td><td><p>The angle to rotate through, in degrees.</p></td></tr>
<tr><td><code>axis</code></td><td><a href="Vec3">Vec3</a></td><td><p>The unit axis to rotate about.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>A quaternion that is a rotation through <code>angle</code> degrees about the <code>axis</code>. <strong>WARNING:</strong> This value is in degrees whereas the value returned by <a href="#angle">Quat.angle</a> is in radians.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Calculate a rotation of 90 degrees about the direction your camera is looking.</p></div>

```js
var rotation = Quat.angleAxis(90, Quat.getForward(Camera.orientation));
```

</div>

<div class="api-entry">

### axis {#axis}

```js
Quat.axis(q)
```

<div class="api-text" v-pre><p>Gets the rotation axis for a quaternion.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q</code></td><td><a href="">Quat</a></td><td><p>The quaternion.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The normalized rotation axis for <code>q</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Get the rotation axis of a quaternion.</p></div>

```js
var forward = Quat.getForward(Camera.orientation);
var rotation = Quat.angleAxis(90, forward);
var axis = Quat.axis(rotation);
print("Forward: " + JSON.stringify(forward));
print("Axis: " + JSON.stringify(axis)); // Same value as forward.
```

</div>

<div class="api-entry">

### cancelOutRoll {#cancelOutRoll}

```js
Quat.cancelOutRoll(orientation)
```

<div class="api-text" v-pre><p>Cancels out the roll component of a quaternion so that its horizontal axis is level.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>orientation</code></td><td><a href="">Quat</a></td><td><p>A quaternion representing an orientation.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p><code>orientation</code> with its roll canceled out.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Two ways of calculating a camera orientation that points in the direction of a given quaternion but keeps the camera's horizontal axis level.</p></div>

```js
var quaternion = Quat.fromPitchYawRollDegrees(10, 20, 30);

var noRoll = Quat.cancelOutRoll(quaternion);
Quat.print("", noRoll, true); // dvec3(-1.033004, 22.245996, -0.000000)

var front = Quat.getFront(quaternion);
var lookAt = Quat.lookAtSimple(Vec3.ZERO, front);
Quat.print("", lookAt, true); // dvec3(-1.033004, 22.245996, -0.000000)
```

</div>

<div class="api-entry">

### cancelOutRollAndPitch {#cancelOutRollAndPitch}

```js
Quat.cancelOutRollAndPitch(orientation)
```

<div class="api-text" v-pre><p>Cancels out the roll and pitch component of a quaternion so that its completely horizontal with a yaw pointing in the given quaternion's direction.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>orientation</code></td><td><a href="">Quat</a></td><td><p>A quaternion representing an orientation.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p><code>orientation</code> with its roll and pitch canceled out.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Two ways of calculating a camera orientation in the x-z plane with a yaw pointing in the direction of a given quaternion.</p></div>

```js
var quaternion = Quat.fromPitchYawRollDegrees(10, 20, 30);

var noRollOrPitch = Quat.cancelOutRollAndPitch(quaternion);
Quat.print("", noRollOrPitch, true); // dvec3(0.000000, 22.245995, 0.000000)

var front = Quat.getFront(quaternion);
var lookAt = Quat.lookAtSimple(Vec3.ZERO, { x: front.x, y: 0, z: front.z });
Quat.print("", lookAt, true); // dvec3(0.000000, 22.245996, 0.000000)
```

</div>

<div class="api-entry">

### conjugate {#conjugate}

```js
Quat.conjugate(q)
```

<div class="api-text" v-pre><p>Calculates the conjugate of a quaternion. For a unit quaternion, its conjugate is the same as its <a href="#inverse">Quat.inverse</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q</code></td><td><a href="">Quat</a></td><td><p>The quaternion to conjugate.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>The conjugate of <code>q</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>A unit quaternion multiplied by its conjugate is a zero rotation.</p></div>

```js
var quaternion = Quat.fromPitchYawRollDegrees(10, 20, 30);
Quat.print("quaternion", quaternion, true); // dvec3(10.000000, 20.000004, 30.000004)
var conjugate = Quat.conjugate(quaternion);
Quat.print("conjugate", conjugate, true); // dvec3(1.116056, -22.242186, -28.451778)
var identity = Quat.multiply(conjugate, quaternion);
Quat.print("identity", identity, true); // dvec3(0.000000, 0.000000, 0.000000)
```

</div>

<div class="api-entry">

### dot {#dot}

```js
Quat.dot(q1, q2)
```

<div class="api-text" v-pre><p>Calculates the dot product of two quaternions. The closer the quaternions are to each other the more non-zero the value is (either positive or negative). Identical unit rotations have a dot product of +/-1.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q1</code></td><td><a href="">Quat</a></td><td><p>The first quaternion.</p></td></tr>
<tr><td><code>q2</code></td><td><a href="">Quat</a></td><td><p>The second quaternion.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The dot product of <code>q1</code> and <code>q2</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Testing unit quaternions for equality.</p></div>

```js
var q1 = Quat.fromPitchYawRollDegrees(0, 0, 0);
var q2 = Quat.fromPitchYawRollDegrees(0, 0, 0);
print(Quat.equal(q1, q2)); // true
var q3 = Quat.fromPitchYawRollDegrees(0, 0, 359.95);
print(Quat.equal(q1, q3)); // false

var dot = Quat.dot(q1, q3);
print(dot); // -0.9999999403953552
var equal = Math.abs(1 - Math.abs(dot)) < 0.000001;
print(equal); // true
```

</div>

<div class="api-entry">

### equal {#equal}

```js
Quat.equal(q1, q2)
```

<div class="api-text" v-pre><p>Tests whether two quaternions are equal. </p>
<p><strong>Note:</strong> The quaternions must be exactly equal in order for <code>true</code> to be returned; it is often better to use <a href="#dot">Quat.dot</a> and test for closeness to +/-1.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q1</code></td><td><a href="">Quat</a></td><td><p>The first quaternion.</p></td></tr>
<tr><td><code>q2</code></td><td><a href="">Quat</a></td><td><p>The second quaternion.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the quaternions are equal, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Testing unit quaternions for equality.</p></div>

```js
var q1 = Quat.fromPitchYawRollDegrees(0, 0, 0);
var q2 = Quat.fromPitchYawRollDegrees(0, 0, 0);
print(Quat.equal(q1, q2)); // true
var q3 = Quat.fromPitchYawRollDegrees(0, 0, 359.95);
print(Quat.equal(q1, q3)); // false

var dot = Quat.dot(q1, q3);
print(dot); // -0.9999999403953552
var equal = Math.abs(1 - Math.abs(dot)) < 0.000001;
print(equal); // true
```

</div>

<div class="api-entry">

### fromPitchYawRollDegrees {#fromPitchYawRollDegrees}

```js
Quat.fromPitchYawRollDegrees(pitch, yaw, roll)
```

<div class="api-text" v-pre><p>Generates a quaternion from pitch, yaw, and roll values in degrees.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pitch</code></td><td>number</td><td><p>The pitch angle in degrees.</p></td></tr>
<tr><td><code>yaw</code></td><td>number</td><td><p>The yaw angle in degrees.</p></td></tr>
<tr><td><code>roll</code></td><td>number</td><td><p>The roll angle in degrees.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>A quaternion created using the <code>pitch</code>, <code>yaw</code>, and <code>roll</code> Euler angles.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a rotation of 180 degrees about the y axis.</p></div>

```js
var rotation = Quat.fromPitchYawRollDegrees(0, 180, 0 );
```

</div>

<div class="api-entry">

### fromPitchYawRollRadians {#fromPitchYawRollRadians}

```js
Quat.fromPitchYawRollRadians(pitch, yaw, roll)
```

<div class="api-text" v-pre><p>Generates a quaternion from pitch, yaw, and roll values in radians.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pitch</code></td><td>number</td><td><p>The pitch angle in radians.</p></td></tr>
<tr><td><code>yaw</code></td><td>number</td><td><p>The yaw angle in radians.</p></td></tr>
<tr><td><code>roll</code></td><td>number</td><td><p>The roll angle in radians.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>A quaternion created from the <code>pitch</code>, <code>yaw</code>, and <code>roll</code> Euler angles.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a rotation of 180 degrees about the y axis.</p></div>

```js
var rotation = Quat.fromPitchYawRollRadians(0, Math.PI, 0);
```

</div>

<div class="api-entry">

### fromVec3Degrees {#fromVec3Degrees}

```js
Quat.fromVec3Degrees(vector)
```

<div class="api-text" v-pre><p>Generates a quaternion from a <a href="Vec3"><code>Vec3</code></a> of Euler angles in degrees.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>vector</code></td><td><a href="Vec3">Vec3</a></td><td><p>A vector of three Euler angles in degrees, the angles being the rotations about the x, y, and z axes.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>A quaternion created from the Euler angles in <code>vector</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Zero out pitch and roll from an orientation.</p></div>

```js
var eulerAngles = Quat.safeEulerAngles(orientation);
eulerAngles.x = 0;
eulerAngles.z = 0;
var newOrientation = Quat.fromVec3Degrees(eulerAngles);
```

</div>

<div class="api-entry">

### fromVec3Radians {#fromVec3Radians}

```js
Quat.fromVec3Radians(vector)
```

<div class="api-text" v-pre><p>Generates a quaternion from a <a href="Vec3"><code>Vec3</code></a> of Euler angles in radians.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>vector</code></td><td><a href="Vec3">Vec3</a></td><td><p>A vector of three Euler angles in radians, the angles being the rotations about the x, y, and z axes.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>A quaternion created using the Euler angles in <code>vector</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a rotation of 180 degrees about the y axis.</p></div>

```js
var rotation = Quat.fromVec3Radians({ x: 0, y: Math.PI, z: 0 });
```

</div>

<div class="api-entry">

### getForward {#getForward}

```js
Quat.getForward(orientation)
```

<div class="api-text" v-pre><p>Gets the "forward" direction that the camera would face if its orientation was set to the quaternion value. This is a synonym for <a href="#getFront">Quat.getFront</a>. Darkride's camera has axes <code>x</code> = right, <code>y</code> = up, <code>-z</code> = forward.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>orientation</code></td><td><a href="">Quat</a></td><td><p>A quaternion representing an orientation.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The negative z-axis rotated by <code>orientation</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Demonstrate that the "forward" vector is for the negative z-axis.</p></div>

```js
var forward = Quat.getForward(Quat.IDENTITY);
print(JSON.stringify(forward)); // {"x":0,"y":0,"z":-1}
```

</div>

<div class="api-entry">

### getFront {#getFront}

```js
Quat.getFront(orientation)
```

<div class="api-text" v-pre><p>Gets the "front" direction that the camera would face if its orientation was set to the quaternion value. This is a synonym for <a href="#getForward">Quat.getForward</a>. Darkride's camera has axes <code>x</code> = right, <code>y</code> = up, <code>-z</code> = forward.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>orientation</code></td><td><a href="">Quat</a></td><td><p>A quaternion representing an orientation.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The negative z-axis rotated by <code>orientation</code>.</p></div>

</div>

<div class="api-entry">

### getRight {#getRight}

```js
Quat.getRight(orientation)
```

<div class="api-text" v-pre><p>Gets the "right" direction that the camera would have if its orientation was set to the quaternion value. Darkride's camera has axes <code>x</code> = right, <code>y</code> = up, <code>-z</code> = forward.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>orientation</code></td><td><a href="">Quat</a></td><td><p>A quaternion representing an orientation.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The x-axis rotated by <code>orientation</code>.</p></div>

</div>

<div class="api-entry">

### getUp {#getUp}

```js
Quat.getUp(orientation)
```

<div class="api-text" v-pre><p>Gets the "up" direction that the camera would have if its orientation was set to the quaternion value. Darkride's camera has axes <code>x</code> = right, <code>y</code> = up, <code>-z</code> = forward.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>orientation</code></td><td><a href="">Quat</a></td><td><p>A quaternion representing an orientation.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The y-axis rotated by <code>orientation</code>.</p></div>

</div>

<div class="api-entry">

### inverse {#inverse}

```js
Quat.inverse(q)
```

<div class="api-text" v-pre><p>Calculates the inverse of a quaternion. For a unit quaternion, its inverse is the same as its <a href="#conjugate">Quat.conjugate</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q</code></td><td><a href="">Quat</a></td><td><p>The quaternion.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>The inverse of <code>q</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>A quaternion multiplied by its inverse is a zero rotation.</p></div>

```js
var quaternion = Quat.fromPitchYawRollDegrees(10, 20, 30);
Quat.print("quaternion", quaternion, true); // dvec3(10.000000, 20.000004, 30.000004)
var inverse = Quat.invserse(quaternion);
Quat.print("inverse", inverse, true); // dvec3(1.116056, -22.242186, -28.451778)
var identity = Quat.multiply(inverse, quaternion);
Quat.print("identity", identity, true); // dvec3(0.000000, 0.000000, 0.000000)
```

</div>

<div class="api-entry">

### lookAt {#lookAt}

```js
Quat.lookAt(eye, target, up)
```

<div class="api-text" v-pre><p>Calculates a camera orientation given an eye position, point of interest, and "up" direction. The camera's negative z-axis is the forward direction. The result has zero roll about its forward direction with respect to the given "up" direction.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>eye</code></td><td><a href="Vec3">Vec3</a></td><td><p>The eye position.</p></td></tr>
<tr><td><code>target</code></td><td><a href="Vec3">Vec3</a></td><td><p>The point to look at.</p></td></tr>
<tr><td><code>up</code></td><td><a href="Vec3">Vec3</a></td><td><p>The "up" direction.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>A quaternion that orients the negative z-axis to point along the eye-to-target vector and the x-axis to be the cross product of the eye-to-target and up vectors.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Rotate your view in independent mode to look at the world origin upside down.</p></div>

```js
Camera.mode = "independent";
Camera.orientation = Quat.lookAt(Camera.position, Vec3.ZERO, Vec3.UNIT_NEG_Y);
```

</div>

<div class="api-entry">

### lookAtSimple {#lookAtSimple}

```js
Quat.lookAtSimple(eye, target)
```

<div class="api-text" v-pre><p>Calculates a camera orientation given an eye position and point of interest. The camera's negative z-axis is the forward direction. The result has zero roll about its forward direction.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>eye</code></td><td><a href="Vec3">Vec3</a></td><td><p>The eye position.</p></td></tr>
<tr><td><code>target</code></td><td><a href="Vec3">Vec3</a></td><td><p>The point to look at.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>A quaternion that orients the negative z-axis to point along the eye-to-target vector and the x-axis to be the cross product of the eye-to-target and an "up" vector. The "up" vector is the y-axis unless the eye-to-target vector is nearly aligned with it (i.e., looking near vertically up or down), in which case the x-axis is used as the "up" vector.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Rotate your view in independent mode to look at the world origin.</p></div>

```js
Camera.mode = "independent";
Camera.orientation = Quat.lookAtSimple(Camera.position, Vec3.ZERO);
```

</div>

<div class="api-entry">

### mix {#mix}

```js
Quat.mix(q1, q2, alpha)
```

<div class="api-text" v-pre><p>Computes a spherical linear interpolation between two rotations, safely handling two rotations that are very similar. See also, <a href="#slerp">Quat.slerp</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q1</code></td><td><a href="">Quat</a></td><td><p>The beginning rotation.</p></td></tr>
<tr><td><code>q2</code></td><td><a href="">Quat</a></td><td><p>The ending rotation.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><p>The mixture coefficient between <code>0.0</code> and <code>1.0</code>. Specifies the proportion of <code>q2</code>'s value to return in favor of <code>q1</code>'s value. A value of <code>0.0</code> returns <code>q1</code>'s value; <code>1.0</code> returns <code>q2s</code>'s value.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>A spherical linear interpolation between rotations <code>q1</code> and <code>q2</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Animate between one rotation and another.</p></div>

```js
var dt = amountOfTimeThatHasPassed;
var mixFactor = amountOfTimeThatHasPassed / TIME_TO_COMPLETE;
if (mixFactor > 1) {
    mixFactor = 1;
}
var newRotation = Quat.mix(startRotation, endRotation, mixFactor);
```

</div>

<div class="api-entry">

### multiply {#multiply}

```js
Quat.multiply(q1, q2)
```

<div class="api-text" v-pre><p>Multiplies two quaternions.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q1</code></td><td><a href="">Quat</a></td><td><p>The first quaternion.</p></td></tr>
<tr><td><code>q2</code></td><td><a href="">Quat</a></td><td><p>The second quaternion.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p><code>q1</code> multiplied with <code>q2</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Calculate the orientation of your avatar's right hand in world coordinates.</p></div>

```js
var handController = Controller.Standard.RightHand;
var handPose = Controller.getPoseValue(handController);
if (handPose.valid) {
    var handOrientation = Quat.multiply(MyAvatar.orientation, handPose.rotation);
}
```

</div>

<div class="api-entry">

### normalize {#normalize}

```js
Quat.normalize(q)
```

<div class="api-text" v-pre><p>Normalizes a quaternion.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q</code></td><td><a href="">Quat</a></td><td><p>The quaternion to normalize.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p><code>q</code> normalized to have unit length.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Normalize a repeated delta rotation so that maths rounding errors don't accumulate.</p></div>

```js
var deltaRotation = Quat.fromPitchYawRollDegrees(0, 0.1, 0);
var currentRotation = Quat.ZERO;
while (Quat.safeEulerAngles(currentRotation).y < 180) {
    currentRotation = Quat.multiply(deltaRotation, currentRotation);
    currentRotation = Quat.normalize(currentRotation);
    // Use currentRotatation for something.
}
```

</div>

<div class="api-entry">

### print {#print}

```js
Quat.print(label, q, asDegrees?)
```

<div class="api-text" v-pre><p>Prints to the program log a text label followed by a quaternion's pitch, yaw, and roll Euler angles.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>label</code></td><td>string</td><td></td><td><p>The label to print.</p></td></tr>
<tr><td><code>q</code></td><td><a href="">Quat</a></td><td></td><td><p>The quaternion to print.</p></td></tr>
<tr><td><code>asDegrees</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>If <code>true</code> the angle values are printed in degrees, otherwise they are printed in radians.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Two ways of printing a label plus a quaternion's Euler angles.</p></div>

```js
var quaternion = Quat.fromPitchYawRollDegrees(0, 45, 0);

// Quaternion: dvec3(0.000000, 45.000004, 0.000000)
Quat.print("Quaternion:", quaternion,  true);

// Quaternion: {"x":0,"y":45.000003814697266,"z":0}
print("Quaternion: " + JSON.stringify(Quat.safeEulerAngles(quaternion)));
```

</div>

<div class="api-entry">

### rotationBetween {#rotationBetween}

```js
Quat.rotationBetween(v1, v2)
```

<div class="api-text" v-pre><p>Calculates the shortest rotation from a first vector onto a second.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v1</code></td><td><a href="Vec3">Vec3</a></td><td><p>The first vector.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="Vec3">Vec3</a></td><td><p>The second vector.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>The rotation from <code>v1</code> onto <code>v2</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Apply a change in velocity to an entity and rotate it to face the direction it's travelling.</p></div>

```js
var newVelocity = Vec3.sum(entityVelocity, deltaVelocity);
var properties = { velocity: newVelocity };
if (Vec3.length(newVelocity) > 0.001) {
    properties.rotation = Quat.rotationBetween(entityVelocity, newVelocity);
}
Entities.editEntity(entityID, properties);
entityVelocity = newVelocity;
```

</div>

<div class="api-entry">

### safeEulerAngles {#safeEulerAngles}

```js
Quat.safeEulerAngles(orientation)
```

<div class="api-text" v-pre><p>Calculates the Euler angles for the quaternion, in degrees. (The "safe" in the name signifies that the angle results will not be garbage even when the rotation is particularly difficult to decompose with pitches around +/-90 degrees.)</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>orientation</code></td><td><a href="">Quat</a></td><td><p>A quaternion representing an orientation.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>A <a href="Vec3"><code>Vec3</code></a> of Euler angles for the <code>orientation</code>, in degrees, the angles being the rotations about the x, y, and z axes.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the camera yaw.</p></div>

```js
var eulerAngles = Quat.safeEulerAngles(Camera.orientation);
print("Camera yaw: " + eulerAngles.y);
```

</div>

<div class="api-entry">

### slerp {#slerp}

```js
Quat.slerp(q1, q2, alpha)
```

<div class="api-text" v-pre><p>Computes a spherical linear interpolation between two rotations, for rotations that are not very similar. See also, <a href="#mix">Quat.mix</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q1</code></td><td><a href="">Quat</a></td><td><p>The beginning rotation.</p></td></tr>
<tr><td><code>q2</code></td><td><a href="">Quat</a></td><td><p>The ending rotation.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><p>The mixture coefficient between <code>0.0</code> and <code>1.0</code>. Specifies the proportion of <code>q2</code>'s value to return in favor of <code>q1</code>'s value. A value of <code>0.0</code> returns <code>q1</code>'s value; <code>1.0</code> returns <code>q2s</code>'s value.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>A spherical linear interpolation between rotations <code>q1</code> and <code>q2</code>.</p></div>

</div>

<div class="api-entry">

### squad {#squad}

```js
Quat.squad(q1, q2, s1, s2, alpha)
```

<div class="api-text" v-pre><p>Computes a spherical quadrangle interpolation between two rotations along a path oriented toward two other rotations. Equivalent to: <code>Quat.slerp(Quat.slerp(q1, q2, alpha), Quat.slerp(s1, s2, alpha), 2 * alpha * (1.0 - alpha))</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q1</code></td><td><a href="">Quat</a></td><td><p>Initial rotation.</p></td></tr>
<tr><td><code>q2</code></td><td><a href="">Quat</a></td><td><p>Final rotation.</p></td></tr>
<tr><td><code>s1</code></td><td><a href="">Quat</a></td><td><p>First control point.</p></td></tr>
<tr><td><code>s2</code></td><td><a href="">Quat</a></td><td><p>Second control point.</p></td></tr>
<tr><td><code>alpha</code></td><td>number</td><td><p>The mixture coefficient between <code>0.0</code> and <code>1.0</code>. A value of <code>0.0</code> returns <code>q1</code>'s value; <code>1.0</code> returns <code>q2s</code>'s value.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Quat</a> <p>A spherical quadrangle interpolation between rotations <code>q1</code> and <code>q2</code> using control points <code>s1</code> and <code>s2</code>.</p></div>

</div>
