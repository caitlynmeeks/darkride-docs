---
title: "HMD"
description: "The HMD API provides access to the HMD used in VR display mode."
draft: true
---

# HMD

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>HMD</code> API provides access to the HMD used in VR display mode.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td></td><td><p>The position of the HMD if currently in VR display mode, otherwise <a href="Vec3">Vec3.ZERO</a>. <em>Read-only.</em></p></td></tr>
<tr><td><code>orientation</code></td><td><a href="Quat">Quat</a></td><td></td><td><p>The orientation of the HMD if currently in VR display mode, otherwise <a href="Quat">Quat.IDENTITY</a>. <em>Read-only.</em></p></td></tr>
<tr><td><code>active</code></td><td>boolean</td><td></td><td><p><code>true</code> if the display mode is HMD, otherwise <code>false</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>mounted</code></td><td>boolean</td><td></td><td><p><code>true</code> if currently in VR display mode and the HMD is being worn, otherwise <code>false</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>playerHeight</code></td><td>number</td><td></td><td><p>The real-world height of the user. <em>Read-only.</em> <em>Currently always returns a value of <code>1.755</code>.</em></p></td></tr>
<tr><td><code>eyeHeight</code></td><td>number</td><td></td><td><p>The real-world height of the user's eyes. <em>Read-only.</em> <em>Currently always returns a value of <code>1.655</code>.</em></p></td></tr>
<tr><td><code>ipd</code></td><td>number</td><td></td><td><p>The inter-pupillary distance (distance between eyes) of the user, used for rendering. Defaults to the human average of <code>0.064</code> unless set by the HMD. <em>Read-only.</em></p></td></tr>
<tr><td><code>ipdScale</code></td><td>number</td><td><code>1.0</code></td><td><p>A scale factor applied to the <code>ipd</code> property value.</p></td></tr>
<tr><td><code>showTablet</code></td><td>boolean</td><td></td><td><p><code>true</code> if the tablet is being displayed, <code>false</code> otherwise. <em>Read-only.</em></p></td></tr>
<tr><td><code>tabletContextualMode</code></td><td>boolean</td><td></td><td><p><code>true</code> if the tablet has been opened in contextual mode, otherwise <code>false</code>. In contextual mode, the tablet has been opened at a specific world position and orientation rather than at a position and orientation relative to the user. <em>Read-only.</em></p></td></tr>
<tr><td><code>tabletID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The UUID of the tablet body model entity.</p></td></tr>
<tr><td><code>tabletScreenID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The UUID of the tablet's screen entity.</p></td></tr>
<tr><td><code>homeButtonID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The UUID of the tablet's "home" button entity.</p></td></tr>
<tr><td><code>homeButtonHighlightID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The UUID of the tablet's "home" button highlight entity.</p></td></tr>
<tr><td><code>playArea</code></td><td><a href="globals#Rect">Rect</a></td><td><code>0,0,0,0</code></td><td><p>The size and position of the HMD play area in sensor coordinates. <em>Read-only.</em></p></td></tr>
<tr><td><code>sensorPositions</code></td><td>Array&lt;<a href="Vec3">Vec3</a>&gt;</td><td><code>[]</code></td><td><p>The positions of the VR system sensors in sensor coordinates. <em>Read-only.</em></p></td></tr>
<tr><td><code>visionSqueezeRatioX</code></td><td>number</td><td><code>0.0</code></td><td><p>The amount of vision squeeze for the x-axis when moving, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>visionSqueezeRatioY</code></td><td>number</td><td><code>0.0</code></td><td><p>The amount of vision squeeze for the y-axis when moving, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>visionSqueezeTurningXFactor</code></td><td>number</td><td><code>0.51</code></td><td><p>The additional amount of vision squeeze for the x-axis when turning, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>visionSqueezeTurningYFactor</code></td><td>number</td><td><code>0.36</code></td><td><p><em>Currently unused.</em></p></td></tr>
<tr><td><code>visionSqueezeUnSqueezeDelay</code></td><td>number</td><td><code>0.2</code></td><td><p>The delay in undoing the vision squeeze effect after motion stops, in seconds.</p></td></tr>
<tr><td><code>visionSqueezeUnSqueezeSpeed</code></td><td>number</td><td><code>3.0</code></td><td><p>How quickly the vision squeeze effect fades, once <code>visionSqueezeUnSqueezeDelay</code> has passed.</p></td></tr>
<tr><td><code>visionSqueezeTransition</code></td><td>number</td><td><code>0.25</code></td><td><p>How tightly vision is squeezed, range <code>0.01</code> – <code>0.7</code>.</p></td></tr>
<tr><td><code>visionSqueezePerEye</code></td><td>number</td><td><code>1</code></td><td><p><code>1</code> if each eye gets a tube to see through, <code>0</code> if the face gets a tube.</p></td></tr>
<tr><td><code>visionSqueezeGroundPlaneY</code></td><td>number</td><td><code>0.0</code></td><td><p>Adjusts how far below the camera the vision squeeze grid is displayed at.</p></td></tr>
<tr><td><code>visionSqueezeSpotlightSize</code></td><td>number</td><td><code>6.0</code></td><td><p>The diameter of the circle of vision squeeze grid that is illuminated around the camera.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

### activateHMDHandMouse {#activateHMDHandMouse}

```js
HMD.activateHMDHandMouse()
```

<div class="api-text" v-pre><p>Causes the borders in HUD windows to be enlarged when the laser intersects them in HMD mode. By default, borders are not enlarged.</p></div>

### calculateRayUICollisionPoint {#calculateRayUICollisionPoint}

```js
HMD.calculateRayUICollisionPoint(position, direction)
```

<div class="api-text" v-pre><p>Calculates the intersection of a ray with the HUD overlay.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The origin of the ray.</p></td></tr>
<tr><td><code>direction</code></td><td><a href="Vec3">Vec3</a></td><td><p>The direction of the ray.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The point of intersection with the HUD overlay if it intersects, otherwise <a href="Vec3">Vec3.ZERO</a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Draw a square on the HUD overlay in the direction you're looking.</p></div>

```js
var hudIntersection = HMD.calculateRayUICollisionPoint(MyAvatar.getHeadPosition(),
    Quat.getForward(MyAvatar.headOrientation));
var hudPoint = HMD.overlayFromWorldPoint(hudIntersection);

var DIMENSIONS = { x: 50, y: 50 };
var square = Overlays.addOverlay("rectangle", {
    x: hudPoint.x - DIMENSIONS.x / 2,
    y: hudPoint.y - DIMENSIONS.y / 2,
    width: DIMENSIONS.x,
    height: DIMENSIONS.y,
    color: { red: 255, green: 0, blue: 0 }
});

Script.scriptEnding.connect(function () {
    Overlays.deleteOverlay(square);
});
```

### centerUI {#centerUI}

```js
HMD.centerUI()
```

<div class="api-text" v-pre><p>Recenters the HMD HUD to the current HMD position and orientation.</p></div>

### closeTablet {#closeTablet}

```js
HMD.closeTablet()
```

<div class="api-text" v-pre><p>Closes the tablet if it is open.</p></div>

### deactivateHMDHandMouse {#deactivateHMDHandMouse}

```js
HMD.deactivateHMDHandMouse()
```

<div class="api-text" v-pre><p>Causes the border in HUD windows to no longer be enlarged when the laser intersects them in HMD mode. By default, borders are not enlarged.</p></div>

### getHUDLookAtPosition2D {#getHUDLookAtPosition2D}

```js
HMD.getHUDLookAtPosition2D()
```

<div class="api-text" v-pre><p>Gets the position on the HUD overlay that your HMD is looking at, in HUD coordinates.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The position on the HUD overlay that your HMD is looking at, in pixels.</p></div>

### getHUDLookAtPosition3D {#getHUDLookAtPosition3D}

```js
HMD.getHUDLookAtPosition3D()
```

<div class="api-text" v-pre><p>Gets the position on the HUD overlay that your HMD is looking at, in world coordinates.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The position on the HUD overlay the your HMD is looking at, in world coordinates.</p></div>

### isHandControllerAvailable {#isHandControllerAvailable}

```js
HMD.isHandControllerAvailable(name?)
```

<div class="api-text" v-pre><p>Checks whether there are HMD hand controllers available.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The name of the HMD hand controller to check for, e.g., <code>"Oculus"</code>. If no name is specified, then any HMD hand controller matches.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if an HMD hand controller of the specified <code>name</code> is available, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report HMD hand controller availability.</p></div>

```js
print("Are any HMD hand controllers available: " + HMD.isHandControllerAvailable());
print("Are Oculus hand controllers available: " + HMD.isHandControllerAvailable("Oculus"));
print("Are Vive hand controllers available: " + HMD.isHandControllerAvailable("OpenVR"));
```

### isHeadControllerAvailable {#isHeadControllerAvailable}

```js
HMD.isHeadControllerAvailable(name?)
```

<div class="api-text" v-pre><p>Checks whether there is an HMD head controller available.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The name of the HMD head controller to check for, e.g., <code>"Oculus"</code>. If no name is specified, then any HMD head controller matches.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if an HMD head controller of the specified <code>name</code> is available, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report HMD head controller availability.</p></div>

```js
print("Is any HMD head controller available: " + HMD.isHeadControllerAvailable());
print("Is an Oculus head controller available: " + HMD.isHeadControllerAvailable("Oculus"));
print("Is a Vive head controller available: " + HMD.isHeadControllerAvailable("OpenVR"));
```

### isHMDAvailable {#isHMDAvailable}

```js
HMD.isHMDAvailable(name?)
```

<div class="api-text" v-pre><p>Checks whether there is an HMD available.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The name of the HMD to check for, e.g., <code>"Oculus Rift"</code>. The name is the same as may be displayed in Interface's "Display" menu. If no name is specified, then any HMD matches.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if an HMD of the specified <code>name</code> is available, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report on HMD availability.</p></div>

```js
print("Is any HMD available: " + HMD.isHMDAvailable());
print("Is an Oculus Rift HMD available: " + HMD.isHMDAvailable("Oculus Rift"));
print("Is a Vive HMD available: " + HMD.isHMDAvailable("OpenVR (Vive)"));
```

### isKeyboardVisible {#isKeyboardVisible}

```js
HMD.isKeyboardVisible()
```

<div class="api-text" v-pre><p>Checks whether the HMD-provided keyboard, if any, is visible.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the current HMD provides a keyboard and it is visible, otherwise <code>false</code>.</p></div>

### isSubdeviceContainingNameAvailable {#isSubdeviceContainingNameAvailable}

```js
HMD.isSubdeviceContainingNameAvailable(name)
```

<div class="api-text" v-pre><p>Checks whether there are specific HMD controllers available.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the HMD controller to check for, e.g., <code>"OculusTouch"</code>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if an HMD controller with a name containing the specified <code>name</code> is available, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report if particular Oculus controllers are available.</p></div>

```js
print("Is an Oculus Touch controller available: " + HMD.isSubdeviceContainingNameAvailable("Touch"));
print("Is an Oculus Remote controller available: " + HMD.isSubdeviceContainingNameAvailable("Remote"));
```

### openTablet {#openTablet}

```js
HMD.openTablet(contextualMode?)
```

<div class="api-text" v-pre><p>Opens the tablet if the tablet is used in the current display mode and it isn't already showing, and sets the tablet to contextual mode if requested. In contextual mode, the page displayed on the tablet is wholly controlled by script (i.e., the user cannot navigate to another).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>contextualMode</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>If <code>true</code> then the tablet is opened at a specific position and orientation already set by the script, otherwise it opens at a position and orientation relative to the user. For contextual mode, set the world or local position and orientation of the <code>HMD.tabletID</code> overlay.</p></td></tr>
</tbody></table></div>

### overlayFromWorldPoint {#overlayFromWorldPoint}

```js
HMD.overlayFromWorldPoint(position)
```

<div class="api-text" v-pre><p>Gets the 2D HUD overlay coordinates of a 3D point on the HUD overlay. 2D HUD overlay coordinates are pixels with the origin at the top left of the overlay.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>position</code></td><td><a href="Vec3">Vec3</a></td><td><p>The point on the HUD overlay in world coordinates.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The point on the HUD overlay in HUD coordinates.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Draw a square on the HUD overlay in the direction you're looking.</p></div>

```js
var hudIntersection = HMD.calculateRayUICollisionPoint(MyAvatar.getHeadPosition(),
    Quat.getForward(MyAvatar.headOrientation));
var hudPoint = HMD.overlayFromWorldPoint(hudIntersection);

var DIMENSIONS = { x: 50, y: 50 };
var square = Overlays.addOverlay("rectangle", {
    x: hudPoint.x - DIMENSIONS.x / 2,
    y: hudPoint.y - DIMENSIONS.y / 2,
    width: DIMENSIONS.x,
    height: DIMENSIONS.y,
    color: { red: 255, green: 0, blue: 0 }
});

Script.scriptEnding.connect(function () {
    Overlays.deleteOverlay(square);
});
```

### overlayToSpherical {#overlayToSpherical}

```js
HMD.overlayToSpherical(overlayPos)
```

<div class="api-text" v-pre><p>Gets the spherical coordinates of a 2D point on the HUD overlay. 2D HUD overlay coordinates are pixels with the origin at the top left of the overlay. Spherical coordinates are polar coordinates in radians with <code>{ x: 0, y: 0 }</code> being the center of the HUD overlay.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>overlayPos</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The point on the HUD overlay in HUD coordinates.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The point on the HUD overlay in spherical coordinates.</p></div>

### preferredAudioInput {#preferredAudioInput}

```js
HMD.preferredAudioInput()
```

<div class="api-text" v-pre><p>Gets the name of the HMD audio input device.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The name of the HMD audio input device if in HMD mode, otherwise an empty string.</p></div>

### preferredAudioOutput {#preferredAudioOutput}

```js
HMD.preferredAudioOutput()
```

<div class="api-text" v-pre><p>Gets the name of the HMD audio output device.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The name of the HMD audio output device if in HMD mode, otherwise an empty string.</p></div>

### requestHideHandControllers {#requestHideHandControllers}

```js
HMD.requestHideHandControllers()
```

<div class="api-text" v-pre><p>Signals that it is no longer necessary to display models of the HMD hand controllers being used. If no other scripts want the models displayed then they are no longer displayed.</p></div>

### requestShowHandControllers {#requestShowHandControllers}

```js
HMD.requestShowHandControllers()
```

<div class="api-text" v-pre><p>Signals that models of the HMD hand controllers being used should be displayed. The models are displayed at their actual, real-world locations.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Show your hand controllers for 10 seconds.</p></div>

```js
HMD.requestShowHandControllers();
Script.setTimeout(function () {
    HMD.requestHideHandControllers();
}, 10000);
```

### shouldShowHandControllers {#shouldShowHandControllers}

```js
HMD.shouldShowHandControllers()
```

<div class="api-text" v-pre><p>Checks whether any script wants models of the HMD hand controllers displayed. Requests are made and canceled using <a href="#requestShowHandControllers">requestShowHandControllers</a> and <a href="#requestHideHandControllers">requestHideHandControllers</a>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if any script is requesting that HMD hand controller models be displayed.</p></div>

### sphericalToOverlay {#sphericalToOverlay}

```js
HMD.sphericalToOverlay(sphericalPos)
```

<div class="api-text" v-pre><p>Gets the 2D point on the HUD overlay represented by given spherical coordinates. 2D HUD overlay coordinates are pixels with the origin at the top left of the overlay. Spherical coordinates are polar coordinates in radians with <code>{ x: 0, y: 0 }</code> being the center of the HUD overlay.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sphericalPos</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The point on the HUD overlay in spherical coordinates.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The point on the HUD overlay in HUD coordinates.</p></div>

### suppressKeyboard {#suppressKeyboard}

```js
HMD.suppressKeyboard()
```

<div class="api-text" v-pre><p>Suppresses the activation of the HMD-provided keyboard, if any. Successful calls should be balanced with a call to <a href="#unsuppressKeyboard">unsuppressKeyboard</a> within a reasonable amount of time.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the current HMD provides a keyboard and it was successfully suppressed (e.g., it isn't being displayed), otherwise <code>false</code>.</p></div>

### unsuppressKeyboard {#unsuppressKeyboard}

```js
HMD.unsuppressKeyboard()
```

<div class="api-text" v-pre><p>Unsuppresses the activation of the HMD-provided keyboard, if any.</p></div>

### worldPointFromOverlay {#worldPointFromOverlay}

```js
HMD.worldPointFromOverlay(coordinates)
```

<div class="api-text" v-pre><p>Gets the 3D world coordinates of a 2D point on the HUD overlay. 2D HUD overlay coordinates are pixels with the origin at the top left of the overlay.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>coordinates</code></td><td><a href="globals#Vec2">Vec2</a></td><td><p>The point on the HUD overlay in HUD coordinates.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The point on the HUD overlay in world coordinates.</p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### awayStateWhenFocusLostInVRChanged {#awayStateWhenFocusLostInVRChanged}

```js
HMD.awayStateWhenFocusLostInVRChanged.connect(function (enabled) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the altering the mode for going into an away state when the interface focus is lost in VR.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p><code>true</code> if the setting to go into an away state in VR when the interface focus is lost is enabled, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>

### displayModeChanged {#displayModeChanged}

```js
HMD.displayModeChanged.connect(function (isHMDMode) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when Interface's display mode changes and when the user puts on or takes off their HMD.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isHMDMode</code></td><td>boolean</td><td><p><code>true</code> if the display mode is HMD, otherwise <code>false</code>. This is the same value as provided by <code>HMD.active</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when the display mode changes.</p></div>

```js
HMD.displayModeChanged.connect(function (isHMDMode) {
    print("Display mode changed");
    print("isHMD = " + isHMDMode);
    print("HMD.active = " + HMD.active);
    print("HMD.mounted = " + HMD.mounted);
});
```

### IPDScaleChanged {#IPDScaleChanged}

```js
HMD.IPDScaleChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the <code>HMD.ipdScale</code> property value changes.</p></div>

### mountedChanged {#mountedChanged}

```js
HMD.mountedChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the <code>HMD.mounted</code> property value changes.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when there's a change in the HMD being worn.</p></div>

```js
HMD.mountedChanged.connect(function () {
    print("Mounted changed. HMD is mounted: " + HMD.mounted);
});
```

### shouldShowHandControllersChanged {#shouldShowHandControllersChanged}

```js
HMD.shouldShowHandControllersChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a request to show or hide models of the HMD hand controllers is made using <a href="#requestShowHandControllers">requestShowHandControllers</a> or <a href="#requestHideHandControllers">requestHideHandControllers</a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when showing of hand controllers changes.</p></div>

```js
function onShouldShowHandControllersChanged() {
    print("Should show hand controllers: " + HMD.shouldShowHandControllers());
}
HMD.shouldShowHandControllersChanged.connect(onShouldShowHandControllersChanged);

HMD.requestShowHandControllers();
Script.setTimeout(function () {
    HMD.requestHideHandControllers();
}, 10000);
```

### showTabletChanged {#showTabletChanged}

```js
HMD.showTabletChanged.connect(function (showTablet) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the tablet is shown or hidden.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>showTablet</code></td><td>boolean</td><td><p><code>true</code> if the tablet is showing, otherwise <code>false</code>.</p></td></tr>
</tbody></table></div>
