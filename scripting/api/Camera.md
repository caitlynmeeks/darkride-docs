---
title: "Camera"
description: "The Camera API provides access to the \"camera\" that defines your view in desktop and HMD display modes."
draft: true
---

# Camera

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Camera</code> API provides access to the "camera" that defines your view in desktop and HMD display modes. Darkride's camera has axes <code>x</code> = right, <code>y</code> = up, <code>-z</code> = forward.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position of the camera. You can set this value only when the camera is in independent mode.</p></td></tr>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td><p>The orientation of the camera. You can set this value only when the camera is in independent mode.</p></td></tr>
<tr><td><code>mode</code></td><td><a href="#Mode">Camera.Mode</a></td><td><p>The camera mode.</p></td></tr>
<tr><td><code>frustum</code></td><td><a href="globals#ViewFrustum">ViewFrustum</a></td><td><p>The camera frustum.</p></td></tr>
<tr><td><code>disableLookAt</code></td><td>boolean</td><td><p>If "look at" is disabled, the camera will rotate with the avatar's orientation.</p></td></tr>
<tr><td><code>parentID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity or avatar that is used for the camera position and orientation when the camera is in entity mode.</p></td></tr>
<tr><td><code>parentJointIndex</code></td><td>Number</td><td><p>The joint index to use when in entity mode.</p></td></tr>
<tr><td><code>localPosition</code></td><td><a href="Vec3">Vec3</a></td><td><p>Relative translation offset applied when in entity mode.</p></td></tr>
<tr><td><code>localRotation</code></td><td><a href="Quat">Quat</a></td><td><p>Relative rotation applied when in entity mode.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

### clearChaseTarget {#clearChaseTarget}

```js
Camera.clearChaseTarget()
```

<div class="api-text" v-pre><p>Ends the chase camera that <a href="#setChaseTarget">setChaseTarget</a> started; the camera stays where it is.</p></div>

### collideBoom {#collideBoom}

```js
Camera.collideBoom(pivot, wanted, ignore)
```

<div class="api-text" v-pre><p>Gets how far from a pivot toward where it wants to be a camera can stand without going into a wall: the test the third-person camera makes for camera collision (View &gt; Camera Collision), for a script that places the camera itself, such as a vehicle's chase camera. What would stop your avatar stops the camera, except glass (a shape entity you can see through), things under a metre that move, and the entities you name, with their children. Move the camera in to this length at once and back out eased, as the third-person camera does (a time constant of 0.12 s).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pivot</code></td><td><a href="Vec3">Vec3</a></td><td><p>Where the boom starts: a point the camera looks at, say just above the vehicle.</p></td></tr>
<tr><td><code>wanted</code></td><td><a href="Vec3">Vec3</a></td><td><p>Where the camera wants to be.</p></td></tr>
<tr><td><code>ignore</code></td><td>Array&lt;<a href="Uuid">Uuid</a>&gt;</td><td><p>The entities the camera sees through, with their children: the vehicle you drive.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The boom's length allowed, from <code>pivot</code> toward <code>wanted</code>: its whole length when nothing is in the way or View &gt; Camera Collision is off.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>A chase camera kept out of walls.</p></div>

```js
var length = Vec3.distance(pivot, wanted);
var allowed = Camera.collideBoom(pivot, wanted, [vehicleID]);
Camera.position = Vec3.sum(pivot, Vec3.multiply(allowed / length, Vec3.subtract(wanted, pivot)));
```

### computePickRay {#computePickRay}

```js
Camera.computePickRay(x, y)
```

<div class="api-text" v-pre><p>Computes a <a href="globals#PickRay"><code>PickRay</code></a> based on the current camera configuration and the specified <code>x, y</code> position on the screen. The <a href="globals#PickRay"><code>PickRay</code></a> can be used in functions such as <a href="Entities#findRayIntersection"><code>Entities.findRayIntersection</code></a> and <a href="Overlays#findRayIntersection"><code>Overlays.findRayIntersection</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>X-coordinate on screen.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Y-coordinate on screen.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#PickRay">PickRay</a> <p>The computed <a href="globals#PickRay"><code>PickRay</code></a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Use a PickRay to detect mouse clicks on entities.</p></div>

```js
function onMousePressEvent(event) {
    var pickRay = Camera.computePickRay(event.x, event.y);
    var intersection = Entities.findRayIntersection(pickRay);
    if (intersection.intersects) {
        print("You clicked on entity " + intersection.entityID);
    }
}

Controller.mousePressEvent.connect(onMousePressEvent);
```

### getDisableLookAt {#getDisableLookAt}

```js
Camera.getDisableLookAt()
```

<div class="api-text" v-pre><p>Gets whether "look at" is disabled which will make the camera rotate with the avatar's orientation.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean </div>

### getModeString {#getModeString}

```js
Camera.getModeString()
```

<div class="api-text" v-pre><p>Gets the current camera mode. You can also get the mode using the <a href="">Camera.mode</a> property.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#Mode">Camera.Mode</a> <p>The current camera mode.</p></div>

### getOrientation {#getOrientation}

```js
Camera.getOrientation()
```

<div class="api-text" v-pre><p>Gets the current camera orientation. You can also get the orientation using the <a href="">Camera.orientation</a> property.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The current camera orientation.</p></div>

### getPosition {#getPosition}

```js
Camera.getPosition()
```

<div class="api-text" v-pre><p>Gets the current camera position. You can also get the position using the <a href="">Camera.position</a> property.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The current camera position.</p></div>

### keepLookingAt {#keepLookingAt}

```js
Camera.keepLookingAt(position)
```

<div class="api-text" v-pre><p>Sets the camera to continue looking at the specified <code>position</code> even while the camera moves. Only works if the camera is in independent mode.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position to keep looking at.</p></td></tr>
</tbody></table></div>

### lookAt {#lookAt}

```js
Camera.lookAt(position)
```

<div class="api-text" v-pre><p>Rotates the camera to look at the specified <code>position</code>. Only works if the camera is in independent mode.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position to look at.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Rotate your camera to look at entities as you click on them with your mouse.</p></div>

```js
function onMousePressEvent(event) {
    var pickRay = Camera.computePickRay(event.x, event.y);
    var intersection = Entities.findRayIntersection(pickRay);
    if (intersection.intersects) {
        // Switch to independent mode.
        Camera.mode = "independent";
        // Look at the entity that was clicked.
        var properties = Entities.getEntityProperties(intersection.entityID, "position");
        Camera.lookAt(properties.position);
    }
}

Controller.mousePressEvent.connect(onMousePressEvent);
```

### setChaseTarget {#setChaseTarget}

```js
Camera.setChaseTarget(entityID, options?)
```

<div class="api-text" v-pre><p>Makes the camera a chase camera behind an entity, such as the vehicle you drive, worked out every frame from the entity as it is drawn. (A script that sets <code>Camera.position</code> itself moves the camera only as often as the script runs, 60 times a second, so on a faster display the view judders against a fast vehicle.) While the camera is in independent mode it stands behind the entity along its heading (level, or along its pitch too with <code>followPitch</code>; never its bank, so a turn does not roll the view) and above it, settles there at a rate, is kept out of walls as the third-person camera is (the entity and its children are seen through), and looks at a point on the entity. Call it again to change the settings (a different entity starts the chase afresh); <a href="#clearChaseTarget">clearChaseTarget</a> ends it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The entity to follow.</p></td></tr>
<tr><td><code>options</code> <em>optional</em></td><td>object</td><td><p><code>back</code> (m behind, 7), <code>up</code> (m above, 2.5), <code>rate</code> (per second: how quickly the camera settles where it wants to be, 6), <code>pivotHeight</code> (m above the entity where the camera's boom starts, for walls, 1), <code>lookAhead</code> (m ahead of the entity along its heading that the camera looks at, 0), <code>lookHeight</code> (m above the entity that it looks at, 1) and <code>followPitch</code> (behind along the entity's forward with its pitch, so up a slope the camera stays above the ground behind, as a car's does; false: level behind, as an aircraft's does).</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Follow the vehicle you sit in.</p></div>

```js
Camera.mode = "independent";
Camera.setChaseTarget(vehicleID, { back: 3.2, up: 1.5, rate: 9 });
```

### setDisableLookAt {#setDisableLookAt}

```js
Camera.setDisableLookAt(disabled)
```

<div class="api-text" v-pre><p>Sets whether "look at" is disabled which will make the camera rotate with the avatar's orientation.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>disabled</code></td><td>boolean</td><td><p>-</p></td></tr>
</tbody></table></div>

### setModeString {#setModeString}

```js
Camera.setModeString(mode)
```

<div class="api-text" v-pre><p>Sets the camera mode. You can also set the mode using the <a href="">Camera.mode</a> property.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>mode</code></td><td><a href="#Mode">Camera.Mode</a></td><td><p>The mode to set the camera to.</p></td></tr>
</tbody></table></div>

### setOrientation {#setOrientation}

```js
Camera.setOrientation(orientation)
```

<div class="api-text" v-pre><p>Sets the camera orientation. You can also set the orientation using the <a href="">Camera.orientation</a> property. Only works if the camera is in independent mode.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td><p>The orientation to set the camera to.</p></td></tr>
</tbody></table></div>

### setPosition {#setPosition}

```js
Camera.setPosition(position)
```

<div class="api-text" v-pre><p>Sets the camera position. You can also set the position using the <a href="">Camera.position</a> property. Only works if the camera is in independent mode.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The position to set the camera at.</p></td></tr>
</tbody></table></div>

### stopLookingAt {#stopLookingAt}

```js
Camera.stopLookingAt()
```

<div class="api-text" v-pre><p>Stops the camera from continually looking at the position that was set with <a href="#keepLookingAt"><code>Camera.keepLookingAt</code></a>.</p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### modeUpdated {#modeUpdated}

```js
Camera.modeUpdated.connect(function (newMode) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the camera mode changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>newMode</code></td><td><a href="#Mode">Camera.Mode</a></td><td><p>The new camera mode.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report camera mode changes.</p></div>

```js
function onCameraModeUpdated(newMode) {
    print("The camera mode has changed to " + newMode);
}

Camera.modeUpdated.connect(onCameraModeUpdated);
```

## Types {#types}

### Mode {#Mode}

<div class="api-text" v-pre><p>Camera modes affect the position of the camera and the controls for camera movement. The camera can be in one of the following modes:</p>
 <table> <thead> <tr> <th>Mode</th> <th>String</th> <th>Description</th> </tr>
 </thead>
 <tbody> <tr> <td><strong>First Person</strong></td> <td><code>"first person"</code></td> <td><p>The camera is positioned such that you have the same view as your avatar. The camera moves and rotates with your avatar.</p>
 <p><em>Legacy first person camera mode.</em></p>
</td> </tr>
 <tr> <td><strong>First Person Look At</strong></td> <td><code>"first person look at"</code></td> <td><p>The camera is positioned such that you have the same view as your avatar. The camera moves and rotates with your avatar's head.</p>
 <p><em>Default first person camera mode.</em></p>
</td> </tr>
 <tr> <td><strong>Third Person</strong></td> <td><code>"third person"</code></td> <td><p>The camera is positioned such that you have a view from just behind your avatar. The camera moves and rotates with your avatar.</p>
 <p><em>Legacy third person camera camera mode.</em></p>
 <pre class="prettyprint"><code>Camera.mode = "third person";</code></pre>
</td> </tr>
 <tr> <td><strong>Look At</strong></td> <td><code>"look at"</code></td> <td><p>The camera is positioned behind your avatar. The camera moves and rotates independently from your avatar. The avatar's head always faces the camera look at point.</p>
 <p><em>Default third person camera mode.</em></p>
</td> </tr>
 <tr> <td><strong>Selfie</strong></td> <td><code>"selfie"</code></td> <td><p>The camera is positioned in front of your avatar. The camera moves and rotates independently from your avatar. Your avatar's head is always facing the camera.</p>
 <p><em>Default "look at myself" camera mode.</em></p>
</td> </tr>
 <tr> <td><strong>Mirror</strong></td> <td><code>"mirror"</code></td> <td><p>The camera is positioned such that you are looking directly at your avatar. The camera is fixed and does not move with your avatar.</p>
 <p><em>Legacy "look at myself" behavior.</em></p>
 <pre class="prettyprint"><code>Camera.mode = "mirror";</code></pre>
</td> </tr>
 <tr> <td><strong>Independent</strong></td> <td><code>"independent"</code></td> <td>The camera's position and orientation don't change with your avatar movement. Instead, they can be set via scripting.</td> </tr>
 <tr> <td><strong>Entity</strong></td> <td><code>"entity"</code></td> <td>The camera's position and orientation are set to be the same as a specified entity's, and move with the entity as it moves. </td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### getCameraEntity {#getCameraEntity}

```js
Camera.getCameraEntity()
```

::: warning Deprecated
<div class="api-text" v-pre>This may be removed in a later version.</div>
:::

<div class="api-text" v-pre><p>Gets the ID of the entity that the camera is set to follow (i.e., use the position and orientation from) when it's in entity mode. You can also get the entity ID using the <a href="">Camera.cameraEntity</a> property.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>The ID of the entity that the camera is set to follow when in entity mode; <code>null</code> if no camera entity has been set.</p></div>

### setCameraEntity {#setCameraEntity}

```js
Camera.setCameraEntity(entityID)
```

::: warning Deprecated
<div class="api-text" v-pre>This may be removed in a later version.</div>
:::

<div class="api-text" v-pre><p>Sets the entity that the camera should follow (i.e., use the position and orientation from) when it's in entity mode. You can also set the entity using the <a href="">Camera.cameraEntity</a> property.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The entity that the camera should follow when it's in entity mode.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Move your camera to the position and orientation of the closest entity.</p></div>

```js
Camera.setModeString("entity");
var entity = Entities.findClosestEntity(MyAvatar.position, 100.0);
Camera.setCameraEntity(entity);
```
