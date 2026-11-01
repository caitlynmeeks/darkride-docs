---
title: "Controller"
description: "The Controller API provides facilities to interact with computer and controller hardware."
---

# Controller

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Controller</code> API provides facilities to interact with computer and controller hardware.</p>
 <h3>Facilities</h3>
 <h4>Properties</h4>
 <p>Get <code>Controller</code> property trees.</p>
 <ul> <li><a href="#getActions">getActions</a></li>
 <li><a href="#getHardware">getHardware</a></li>
 <li><a href="#getStandard">getStandard</a></li>
 </ul>
 <h4>Mappings</h4>
 <p>Create and enable or disable <code>Controller</code> mappings.</p>
 <ul> <li><a href="#disableMapping">disableMapping</a></li>
 <li><a href="#enableMapping">enableMapping</a></li>
 <li><a href="#loadMapping">loadMapping</a></li>
 <li><a href="#newMapping">newMapping</a></li>
 <li><a href="#parseMapping">parseMapping</a></li>
 </ul>
 <h4>Input, Hardware, and Action Reflection</h4>
 <p>Information on the devices and actions available.</p>
 <ul> <li><a href="#findAction">findAction</a></li>
 <li><a href="#findDevice">findDevice</a></li>
 <li><a href="#getActionNames">getActionNames</a></li>
 <li><a href="#getAllActions">getAllActions</a></li>
 <li><a href="#getAvailableInputs">getAvailableInputs</a></li>
 <li><a href="#getDeviceName">getDeviceName</a></li>
 <li><a href="#getDeviceNames">getDeviceNames</a></li>
 <li><a href="#getRunningInputDevices">getRunningInputDevices</a></li>
 </ul>
 <h4>Input, Hardware, and Action Signals</h4>
 <p>Notifications of device and action events.</p>
 <ul> <li><a href="#actionEvent">actionEvent</a></li>
 <li><a href="#hardwareChanged">hardwareChanged</a></li>
 <li><a href="#inputDeviceRunningChanged">inputDeviceRunningChanged</a></li>
 <li><a href="#inputEvent">inputEvent</a></li>
 </ul>
 <h4>Mouse, Keyboard, and Touch Signals</h4>
 <p>Notifications of mouse, keyboard, and touch events.</p>
 <ul> <li><a href="#keyPressEvent">keyPressEvent</a></li>
 <li><a href="#keyReleaseEvent">keyReleaseEvent</a></li>
 <li><a href="#mouseDoublePressEvent">mouseDoublePressEvent</a></li>
 <li><a href="#mouseMoveEvent">mouseMoveEvent</a></li>
 <li><a href="#mousePressEvent">mousePressEvent</a></li>
 <li><a href="#mouseReleaseEvent">mouseReleaseEvent</a></li>
 <li><a href="#touchBeginEvent">touchBeginEvent</a></li>
 <li><a href="#touchEndEvent">touchEndEvent</a></li>
 <li><a href="#touchUpdateEvent">touchUpdateEvent</a></li>
 <li><a href="#wheelEvent">wheelEvent</a></li>
 </ul>
 <h4>Control Capturing</h4>
 <p>Disable and enable the processing of mouse and touch events.</p>
 <ul> <li><a href="#captureMouseEvents">captureMouseEvents</a></li>
 <li><a href="#captureWheelEvents">captureWheelEvents</a></li>
 <li><a href="#captureTouchEvents">captureTouchEvents</a></li>
 <li><a href="#releaseMouseEvents">releaseMouseEvents</a></li>
 <li><a href="#releaseWheelEvents">releaseWheelEvents</a></li>
 <li><a href="#releaseTouchEvents">releaseTouchEvents</a></li>
 </ul>
 <h4>Action Capturing</h4>
 <p>Disable and enable controller actions.</p>
 <ul> <li><a href="#captureActionEvents">captureActionEvents</a></li>
 <li><a href="#captureKeyEvents">captureKeyEvents</a></li>
 <li><a href="#captureJoystick">captureJoystick</a></li>
 <li><a href="#captureEntityClickEvents">captureEntityClickEvents</a></li>
 <li><a href="#releaseActionEvents">releaseActionEvents</a></li>
 <li><a href="#releaseKeyEvents">releaseKeyEvents</a></li>
 <li><a href="#releaseJoystick">releaseJoystick</a></li>
 <li><a href="#releaseEntityClickEvents">releaseEntityClickEvents</a></li>
 </ul>
 <h4>Controller and Action Values</h4>
 <p>Get the current value of controller outputs and actions.</p>
 <ul> <li><a href="#getValue">getValue</a></li>
 <li><a href="#getAxisValue">getAxisValue</a></li>
 <li><a href="#getPoseValue">getPoseValue</a></li>
 <li><a href="#getActionValue">getActionValue</a></li>
 </ul>
 <h4>Haptics</h4>
 <p>Trigger haptic pulses.</p>
 <ul> <li><a href="#triggerHapticPulse">triggerHapticPulse</a></li>
 <li><a href="#triggerHapticPulseOnDevice">triggerHapticPulseOnDevice</a></li>
 <li><a href="#triggerShortHapticPulse">triggerShortHapticPulse</a></li>
 <li><a href="#triggerShortHapticPulseOnDevice">triggerShortHapticPulseOnDevice</a></li>
 </ul>
 <h4>Display Information</h4>
 <p>Get information on the display.</p>
 <ul> <li><a href="#getViewportDimensions">getViewportDimensions</a></li>
 <li><a href="#getRecommendedHUDRect">getRecommendedHUDRect</a></li>
 </ul>
 <h4>Virtual Game Pad</h4>
 <p>Use the virtual game pad which is available on some devices.</p>
 <ul> <li><a href="#setVPadEnabled">setVPadEnabled</a></li>
 <li><a href="#setVPadHidden">setVPadHidden</a></li>
 <li><a href="#setVPadExtraBottomMargin">setVPadExtraBottomMargin</a></li>
 </ul>
 <h4>Input Recordings</h4>
 <p>Create and play input recordings.</p>
 <ul> <li><a href="#startInputRecording">startInputRecording</a></li>
 <li><a href="#stopInputRecording">stopInputRecording</a></li>
 <li><a href="#saveInputRecording">saveInputRecording</a></li>
 <li><a href="#getInputRecorderSaveDirectory">getInputRecorderSaveDirectory</a></li>
 <li><a href="#loadInputRecording">loadInputRecording</a></li>
 <li><a href="#startInputPlayback">startInputPlayback</a></li>
 <li><a href="#stopInputPlayback">stopInputPlayback</a></li>
 </ul>
 <h3>Entity Methods</h3>
 <p>The default scripts implement hand controller actions that use <a href="Entities#callEntityMethod"><code>Entities.callEntityMethod</code></a> to call entity script methods, if present, in the entity being interacted with.</p>
 <table> <thead> <tr><th>Method Name</th><th>Description</th><th>Example</th></tr>
 </thead>
 <tbody> <tr> <td><code>startFarTrigger</code><br><code>continueFarTrigger</code><br><code>stopFarTrigger</code></td> <td>These methods are called when a user is more than 0.3m away from the entity, the entity is triggerable, and the user starts, continues, or stops squeezing the trigger.</td> <td>A light switch that can be toggled on and off from a distance.</td> </tr>
 <tr> <td><code>startNearTrigger</code><br><code>continueNearTrigger</code><br><code>stopNearTrigger</code></td> <td>These methods are called when a user is less than 0.3m away from the entity, the entity is triggerable, and the user starts, continues, or stops squeezing the trigger.</td> <td>A doorbell that can be rung when a user is near.</td> </tr>
 <tr> <td><code>startDistanceGrab</code><br><code>continueDistanceGrab</code><br></td> <td>These methods are called when a user is more than 0.3m away from the entity, the entity is either cloneable, or grabbable and not locked, and the user starts or continues to squeeze the trigger.</td> <td>A comet that emits icy particle trails when a user is dragging it through the sky.</td> </tr>
 <tr> <td><code>startNearGrab</code><br><code>continueNearGrab</code><br></td> <td>These methods are called when a user is less than 0.3m away from the entity, the entity is either cloneable, or grabbable and not locked, and the user starts or continues to squeeze the trigger.</td> <td>A ball that glows when it's being held close.</td> </tr>
 <tr> <td><code>releaseGrab</code></td> <td>This method is called when a user releases the trigger when having been either distance or near grabbing an entity.</td> <td>Turn off the ball glow or comet trail with the user finishes grabbing it.</td> </tr>
 <tr> <td><code>startEquip</code><br><code>continueEquip</code><br><code>releaseEquip</code></td> <td>These methods are called when a user starts, continues, or stops equipping an entity.</td> <td>A glass that stays in the user's hand after the trigger is clicked.</td> </tr>
 </tbody>
 </table>
 <p>All the entity methods are called with the following two arguments:</p>
 <ul> <li>The entity ID.</li>
 <li>A string, <code>"hand,userID"</code> — where "hand" is <code>"left"</code> or <code>"right"</code>, and "userID" is the user's <a href="MyAvatar">MyAvatar.sessionUUID</a>.</li>
 </ul></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>Actions</code></td><td><a href="#Actions">Controller.Actions</a></td><td><p>Predefined actions on Interface and the user's avatar. These can be used as end points in a <a href="RouteObject"><code>RouteObject</code></a> mapping. A synonym for <code>Controller.Hardware.Actions</code>. <em>Read-only.</em> </p>
<p>Default mappings are provided from the <code>Controller.Hardware.Keyboard</code> and <code>Controller.Standard</code> to actions in <a href="https://github.com/highfidelity/hifi/blob/master/interface/resources/controllers/keyboardMouse.json" target="_blank" rel="noopener"> keyboardMouse.json</a> and <a href="https://github.com/highfidelity/hifi/blob/master/interface/resources/controllers/standard.json" target="_blank" rel="noopener"> standard.json</a>, respectively.</p>
<p></p></td></tr>
<tr><td><code>Hardware</code></td><td><a href="#Hardware">Controller.Hardware</a></td><td><p>Standard and hardware-specific controller and computer outputs, plus predefined actions on Interface and the user's avatar. The outputs can be mapped to <code>Actions</code> or functions in a <a href="RouteObject"><code>RouteObject</code></a> mapping. Additionally, hardware-specific controller outputs can be mapped to <code>Controller.Standard</code> controller outputs. <em>Read-only.</em></p></td></tr>
<tr><td><code>Standard</code></td><td><a href="#Standard">Controller.Standard</a></td><td><p>Standard controller outputs that can be mapped to <code>Actions</code> or functions in a <a href="RouteObject"><code>RouteObject</code></a> mapping. <em>Read-only.</em> </p>
<p>Each hardware device has a mapping from its outputs to <code>Controller.Standard</code> items, specified in a JSON file. For example, <a href="https://github.com/highfidelity/hifi/blob/master/interface/resources/controllers/leapmotion.json" target="_blank" rel="noopener"> leapmotion.json</a> and <a href="https://github.com/highfidelity/hifi/blob/master/interface/resources/controllers/vive.json" target="_blank" rel="noopener">vive.json</a>.</p>
<p></p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### captureActionEvents {#captureActionEvents}

```js
Controller.captureActionEvents()
```

<div class="api-text" v-pre><p>Disables translating and rotating the user's avatar in response to keyboard and controller controls.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Disable avatar translation and rotation for a short period.</p></div>

```js
Script.setTimeout(function () {
    Controller.captureActionEvents();
}, 5000);

Script.setTimeout(function () {
    Controller.releaseActionEvents();
}, 10000);
```

</div>

<div class="api-entry">

### captureEntityClickEvents {#captureEntityClickEvents}

```js
Controller.captureEntityClickEvents()
```

<div class="api-text" v-pre><p>Disables <a href="Entities#mousePressOnEntity"><code>Entities.mousePressOnEntity</code></a> and <a href="Entities#mouseDoublePressOnEntity"><code>Entities.mouseDoublePressOnEntity</code></a> events on entities.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Disable entity click events for a short period.</p></div>

```js
Entities.mousePressOnEntity.connect(function (entityID, event) {
    print("Clicked on entity: " + entityID);
});

Script.setTimeout(function () {
    Controller.captureEntityClickEvents();
}, 5000);

Script.setTimeout(function () {
    Controller.releaseEntityClickEvents();
}, 10000);
```

</div>

<div class="api-entry">

### captureKeyEvents {#captureKeyEvents}

```js
Controller.captureKeyEvents(event)
```

<div class="api-text" v-pre><p>Disables default Interface actions for a particular key event.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#KeyEvent">KeyEvent</a></td><td><p>Details of the key event to be captured. The <code>key</code> property must be specified. The <code>text</code> property is ignored. The other properties default to <code>false</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Disable left and right strafing.</p></div>

```js
var STRAFE_LEFT = { "key": 16777234, isShifted: true };
var STRAFE_RIGHT = { "key": 16777236, isShifted: true };

Controller.captureKeyEvents(STRAFE_LEFT);
Controller.captureKeyEvents(STRAFE_RIGHT);

Script.scriptEnding.connect(function () {
    Controller.releaseKeyEvents(STRAFE_LEFT);
    Controller.releaseKeyEvents(STRAFE_RIGHT);
});
```

</div>

<div class="api-entry">

### captureMouseEvents {#captureMouseEvents}

```js
Controller.captureMouseEvents()
```

<div class="api-text" v-pre><p>Disables processing of mouse "move", "press", "double-press", and "release" events into <a href="#Hardware">Controller.Hardware.Keyboard</a> outputs.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Disable Controller.Hardware.Keyboard mouse events for a short period.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);
mapping.from(Controller.Hardware.Keyboard.MouseX).to(function (x) {
    print("Mouse x = " + x);
});
mapping.from(Controller.Hardware.Keyboard.MouseY).to(function (y) {
    print("Mouse y = " + y);
});
Controller.enableMapping(MAPPING_NAME);
Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});

Script.setTimeout(function () {
    Controller.captureMouseEvents();
}, 5000);

Script.setTimeout(function () {
    Controller.releaseMouseEvents();
}, 10000);
```

</div>

<div class="api-entry">

### captureTouchEvents {#captureTouchEvents}

```js
Controller.captureTouchEvents()
```

<div class="api-text" v-pre><p>Disables processing of touch "begin", "update", and "end" events into <a href="#Hardware">Controller.Hardware.Keyboard</a>, <a href="#Hardware">Controller.Hardware.Touchscreen</a>, and <a href="#Hardware">Controller.Hardware.TouchscreenVirtualPad</a> outputs.</p></div>

</div>

<div class="api-entry">

### captureWheelEvents {#captureWheelEvents}

```js
Controller.captureWheelEvents()
```

<div class="api-text" v-pre><p>Disables processing of mouse wheel rotation events into <a href="#Hardware">Controller.Hardware.Keyboard</a> outputs.</p></div>

</div>

<div class="api-entry">

### disableMapping {#disableMapping}

```js
Controller.disableMapping(mappingName)
```

<div class="api-text" v-pre><p>Disables a controller mapping. When disabled, the routes in the mapping have no effect.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>mappingName</code></td><td>string</td><td><p>The name of the mapping.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### enableMapping {#enableMapping}

```js
Controller.enableMapping(mappingName, enable?)
```

<div class="api-text" v-pre><p>Enables or disables a controller mapping. When enabled, the routes in the mapping have effect.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>mappingName</code></td><td>string</td><td></td><td><p>The name of the mapping.</p></td></tr>
<tr><td><code>enable</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p>If <code>true</code> then the mapping is enabled, otherwise it is disabled.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### findAction {#findAction}

```js
Controller.findAction(actionName)
```

<div class="api-text" v-pre><p>Finds the ID of an action from its name.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>actionName</code></td><td>string</td><td><p>The name of the action: one of the <a href="#Actions"><code>Controller.Actions</code></a> property names.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The integer ID of the action if found, otherwise <code>4095</code>. Note that this value is not the same as the value of the relevant <a href="#Actions"><code>Controller.Actions</code></a> property.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Get the ID of the "TranslateY" action. Compare with the property value.</p></div>

```js
var actionID = Controller.findAction("TranslateY");
print("Action ID = " + actionID);  // 1
print("Property value = " + Controller.Actions.TranslateY);  // 537001728 or similar value.
```

</div>

<div class="api-entry">

### findDevice {#findDevice}

```js
Controller.findDevice(deviceName)
```

<div class="api-text" v-pre><p>Finds the ID of a specific controller from its device name.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deviceName</code></td><td>string</td><td><p>The name of the device to find.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The integer ID of the device if available, otherwise <code>65535</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Get the ID of the Oculus Touch.</p></div>

```js
var deviceID = Controller.findDevice("OculusTouch");
print("Device ID = " + deviceID);
```

</div>

<div class="api-entry">

### getActionNames {#getActionNames}

```js
Controller.getActionNames()
```

<div class="api-text" v-pre><p>Gets the names of all actions available as properties of <a href="#Actions"><code>Controller.Actions</code></a>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>An array of action names.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Get the names of all actions.</p></div>

```js
var actionNames = Controller.getActionNames();
print("Action names: " + JSON.stringify(actionNames));
// ["TranslateX","TranslateY","TranslateZ","Roll", ...
```

</div>

<div class="api-entry">

### getActions {#getActions}

```js
Controller.getActions()
```

<div class="api-text" v-pre><p>Gets the <a href="#Actions"><code>Controller.Actions</code></a> property tree. Calling this function is the same as using the <a href=""><code>Controller</code></a> property, <code>Controller.Actions</code>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#Actions">Controller.Actions</a> <p>The <a href="#Actions"><code>Controller.Actions</code></a> property tree.</p></div>

</div>

<div class="api-entry">

### getActionValue {#getActionValue}

```js
Controller.getActionValue(actionID)
```

<div class="api-text" v-pre><p>Gets the current value of an action.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>actionID</code></td><td>number</td><td><p>The integer ID of the action.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The current value of the action.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Periodically report the value of the "TranslateX" action.</p></div>

```js
var actionID = Controller.findAction("TranslateX");

function reportValue() {
    print(Controller.getActionValue(actionID));
}
reportTimer = Script.setInterval(reportValue, 1000);
```

</div>

<div class="api-entry">

### getAxisValue {#getAxisValue}

```js
Controller.getAxisValue(source)
```

<div class="api-text" v-pre><p>Gets the value of a controller axis output. Note: Also gets the value of a controller button output.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source</code></td><td>number</td><td><p>The <a href="#Standard"><code>Controller.Standard</code></a> or <a href="#Hardware"><code>Controller.Hardware</code></a> item.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The current value of the controller item output if <code>source</code> is valid, otherwise <code>0</code>.</p></div>

</div>

<div class="api-entry">

### getDeviceName {#getDeviceName}

```js
Controller.getDeviceName(deviceID)
```

<div class="api-text" v-pre><p>Finds the name of a particular controller from its device ID.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deviceID</code></td><td>number</td><td><p>The integer ID of the device.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The name of the device if found, otherwise <code>"unknown"</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Get the name of the Oculus Touch controller from its ID.</p></div>

```js
var deviceID = Controller.findDevice("OculusTouch");
print("Device ID = " + deviceID);

var deviceName = Controller.getDeviceName(deviceID);
print("Device name = " + deviceName);
```

</div>

<div class="api-entry">

### getDeviceNames {#getDeviceNames}

```js
Controller.getDeviceNames()
```

<div class="api-text" v-pre><p>Gets the names of all currently available controller devices plus "Actions", "Application", and "Standard".</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>An array of device names.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Get the names of all currently available controller devices.</p></div>

```js
var deviceNames = Controller.getDeviceNames();
print(JSON.stringify(deviceNames));
// ["Standard","Keyboard","LeapMotion","OculusTouch","Application","Actions"] or similar.
```

</div>

<div class="api-entry">

### getHardware {#getHardware}

```js
Controller.getHardware()
```

<div class="api-text" v-pre><p>Gets the <a href="#Hardware"><code>Controller.Hardware</code></a> property tree. Calling this function is the same as using the <a href=""><code>Controller</code></a> property, <code>Controller.Hardware</code>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#Hardware">Controller.Hardware</a> <p>The <a href="#Hardware"><code>Controller.Hardware</code></a> property tree.</p></div>

</div>

<div class="api-entry">

### getInputRecorderSaveDirectory {#getInputRecorderSaveDirectory}

```js
Controller.getInputRecorderSaveDirectory()
```

<div class="api-text" v-pre><p>Gets the directory in which input recordings are saved.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The directory in which input recordings are saved.</p></div>

</div>

<div class="api-entry">

### getPoseValue {#getPoseValue}

```js
Controller.getPoseValue(source)
```

<div class="api-text" v-pre><p>Gets the value of a controller pose output.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source</code></td><td>number</td><td><p>The <a href="#Standard"><code>Controller.Standard</code></a> or <a href="#Hardware"><code>Controller.Hardware</code></a> pose output.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Pose">Pose</a> <p>The current value of the controller pose output if <code>source</code> is a pose output, otherwise an invalid pose with <code>Pose.valid == false</code>.</p></div>

</div>

<div class="api-entry">

### getRecommendedHUDRect {#getRecommendedHUDRect}

```js
Controller.getRecommendedHUDRect()
```

<div class="api-text" v-pre><p>Gets the recommended area to position UI on the HUD surface if in HMD mode or Interface's window interior if in desktop mode.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Rect">Rect</a> <p>The recommended area in which to position UI.</p></div>

</div>

<div class="api-entry">

### getRunningInputDevices {#getRunningInputDevices}

```js
Controller.getRunningInputDevices()
```

<div class="api-text" v-pre><p>Gets the names of all the active and running (enabled) input devices.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The list of current active and running input devices.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>List all active and running input devices.</p></div>

```js
print("Running devices: " + JSON.stringify(Controller.getRunningInputDeviceNames()));
```

</div>

<div class="api-entry">

### getStandard {#getStandard}

```js
Controller.getStandard()
```

<div class="api-text" v-pre><p>Gets the <a href="#Standard"><code>Controller.Standard</code></a> property tree. Calling this function is the same as using the <a href=""><code>Controller</code></a> property, <code>Controller.Standard</code>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#Standard">Controller.Standard</a> <p>The <a href="#Standard"><code>Controller.Standard</code></a> property tree.</p></div>

</div>

<div class="api-entry">

### getValue {#getValue}

```js
Controller.getValue(source)
```

<div class="api-text" v-pre><p>Gets the value of a controller button or axis output. Note: Also gets the value of a controller axis output.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source</code></td><td>number</td><td><p>The <a href="#Standard"><code>Controller.Standard</code></a> or <a href="#Hardware"><code>Controller.Hardware</code></a> item.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The current value of the controller item output if <code>source</code> is valid, otherwise <code>0</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the Standard and Vive right trigger values.</p></div>

```js
var triggerValue = Controller.getValue(Controller.Standard.RT);
print("Trigger value: " + triggerValue);

if (Controller.Hardware.Vive) {
    triggerValue = Controller.getValue(Controller.Hardware.Vive.RT);
    print("Vive trigger value: " + triggerValue);
} else {
    print("No Vive present");
}
```

</div>

<div class="api-entry">

### getViewportDimensions {#getViewportDimensions}

```js
Controller.getViewportDimensions()
```

<div class="api-text" v-pre><p>Gets the dimensions of the Interface window's interior if in desktop mode or the HUD surface if in HMD mode.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#Vec2">Vec2</a> <p>The dimensions of the Interface window interior if in desktop mode or HUD surface if in HMD mode.</p></div>

</div>

<div class="api-entry">

### loadInputRecording {#loadInputRecording}

```js
Controller.loadInputRecording(file)
```

<div class="api-text" v-pre><p>Loads an input recording, ready for play back.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>file</code></td><td>string</td><td><p>The path to the recording file, prefixed by <code>"file:///"</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### loadMapping {#loadMapping}

```js
Controller.loadMapping(jsonURL)
```

<div class="api-text" v-pre><p>Creates a new controller mapping from a <a href="#MappingJSON">MappingJSON</a> JSON file at a URL. Use <a href="#enableMapping">enableMapping</a> to enable the mapping for it to take effect. </p>
<p><strong>Warning:</strong> This function is not yet implemented; it doesn't load a mapping and just returns <code>null</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>jsonURL</code></td><td>string</td><td><p>The URL the <a href="#MappingJSON">MappingJSON</a> JSON file.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="MappingObject">MappingObject</a> <p>A controller mapping object.</p></div>

</div>

<div class="api-entry">

### newMapping {#newMapping}

```js
Controller.newMapping(mappingName?)
```

<div class="api-text" v-pre><p>Creates a new controller mapping. Routes can then be added to the mapping using <a href="MappingObject"><code>MappingObject</code></a> methods and routed to <code>Standard</code> controls, <code>Actions</code>, or script functions using <a href="RouteObject"><code>RouteObject</code></a> methods. The mapping can then be enabled using <a href="#enableMapping">enableMapping</a> for it to take effect.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>mappingName</code> <em>optional</em></td><td>string</td><td><code>Uuid.generate()</code></td><td><p>A unique name for the mapping. If not specified a new UUID generated by <a href="Uuid#generate">Uuid.generate</a> is used.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="MappingObject">MappingObject</a> <p>A controller mapping object.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a simple mapping that makes the right trigger move your avatar up.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);

mapping.from(Controller.Standard.RT).to(Controller.Actions.TranslateY);
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### parseMapping {#parseMapping}

```js
Controller.parseMapping(jsonString)
```

<div class="api-text" v-pre><p>Creates a new controller mapping from a <a href="#MappingJSON">MappingJSON</a> string. Use <a href="#enableMapping">enableMapping</a> to enable the mapping for it to take effect.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>jsonString</code></td><td>string</td><td><p>A JSON string of the <a href="#MappingJSON">MappingJSON</a>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="MappingObject">MappingObject</a> <p>A controller mapping object.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a simple mapping that makes the right trigger move your avatar up.</p></div>

```js
var mappingJSON = {
    "name": "com.highfidelity.controllers.example.jsonMapping",
    "channels": [
        { "from": "Standard.RT", "to": "Actions.TranslateY" }
    ]
};

var mapping = Controller.parseMapping(JSON.stringify(mappingJSON));
mapping.enable();

Script.scriptEnding.connect(function () {
    mapping.disable();
});
```

</div>

<div class="api-entry">

### releaseActionEvents {#releaseActionEvents}

```js
Controller.releaseActionEvents()
```

<div class="api-text" v-pre><p>Enables translating and rotating the user's avatar in response to keyboard and controller controls that were disabled using <a href="#captureActionEvents">captureActionEvents</a>.</p></div>

</div>

<div class="api-entry">

### releaseEntityClickEvents {#releaseEntityClickEvents}

```js
Controller.releaseEntityClickEvents()
```

<div class="api-text" v-pre><p>Re-enables <a href="Entities#mousePressOnEntity"><code>Entities.mousePressOnEntity</code></a> and <a href="Entities#mouseDoublePressOnEntity"><code>Entities.mouseDoublePressOnEntity</code></a> events on entities that were disabled using <a href="#captureEntityClickEvents">captureEntityClickEvents</a>.</p></div>

</div>

<div class="api-entry">

### releaseKeyEvents {#releaseKeyEvents}

```js
Controller.releaseKeyEvents(event)
```

<div class="api-text" v-pre><p>Re-enables default Interface actions for a particular key event that has been disabled using <a href="#captureKeyEvents">captureKeyEvents</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#KeyEvent">KeyEvent</a></td><td><p>Details of the key event to release from capture. The <code>key</code> property must be specified. The <code>text</code> property is ignored. The other properties default to <code>false</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### releaseMouseEvents {#releaseMouseEvents}

```js
Controller.releaseMouseEvents()
```

<div class="api-text" v-pre><p>Enables processing of mouse "move", "press", "double-press", and "release" events into <a href="#Hardware-Keyboard">Controller.Hardware.Keyboard</a> outputs that were disabled using <a href="#captureMouseEvents">captureMouseEvents</a>.</p></div>

</div>

<div class="api-entry">

### releaseTouchEvents {#releaseTouchEvents}

```js
Controller.releaseTouchEvents()
```

<div class="api-text" v-pre><p>Enables processing of touch "begin", "update", and "end" events into <a href="#Hardware">Controller.Hardware.Keyboard</a>, <a href="#Hardware">Controller.Hardware.Touchscreen</a>, and <a href="#Hardware">Controller.Hardware.TouchscreenVirtualPad</a> outputs that were disabled using <a href="#captureTouchEvents">captureTouchEvents</a>.</p></div>

</div>

<div class="api-entry">

### releaseWheelEvents {#releaseWheelEvents}

```js
Controller.releaseWheelEvents()
```

<div class="api-text" v-pre><p>Enables processing of mouse wheel rotation events into <a href="#Hardware">Controller.Hardware.Keyboard</a> outputs that wer disabled using <a href="#captureWheelEvents">captureWheelEvents</a>.</p></div>

</div>

<div class="api-entry">

### saveInputRecording {#saveInputRecording}

```js
Controller.saveInputRecording()
```

<div class="api-text" v-pre><p>Saves the current recording to a file. The current recording may have been recorded by <a href="#startInputRecording">startInputRecording</a> and <a href="#stopInputRecording">stopInputRecording</a>, or loaded by <a href="#loadInputRecording">loadInputRecording</a>. It is saved in the directory returned by <a href="#getInputRecorderSaveDirectory">getInputRecorderSaveDirectory</a>.</p></div>

</div>

<div class="api-entry">

### setVPadEnabled {#setVPadEnabled}

```js
Controller.setVPadEnabled(enable)
```

<div class="api-text" v-pre><p>Enables or disables the virtual game pad that is displayed on certain devices (e.g., Android).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><p>If <code>true</code> then the virtual game pad doesn't work, otherwise it does work provided that it is not hidden by <a href="#setVPadHidden">setVPadHidden</a>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setVPadExtraBottomMargin {#setVPadExtraBottomMargin}

```js
Controller.setVPadExtraBottomMargin(margin)
```

<div class="api-text" v-pre><p>Sets the amount of extra margin between the virtual game pad that is displayed on certain devices (e.g., Android) and the bottom of the display.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>margin</code></td><td>number</td><td><p>Integer number of pixels in the extra margin.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setVPadHidden {#setVPadHidden}

```js
Controller.setVPadHidden(hidden)
```

<div class="api-text" v-pre><p>Shows or hides the virtual game pad that is displayed on certain devices (e.g., Android).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>hidden</code></td><td>boolean</td><td><p>If <code>true</code> then the virtual game pad is hidden, otherwise it is shown.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### startInputPlayback {#startInputPlayback}

```js
Controller.startInputPlayback()
```

<div class="api-text" v-pre><p>Plays back the current recording from the beginning. The current recording may have been recorded by <a href="#startInputRecording">startInputRecording</a> and <a href="#stopInputRecording">stopInputRecording</a>, or loaded by <a href="#loadInputRecording">loadInputRecording</a>. Playback repeats in a loop until <a href="#stopInputPlayback">stopInputPlayback</a> is called.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Play back a controller recording.</p></div>

```js
var file = Window.browse("Select Recording", Controller.getInputRecorderSaveDirectory());
if (file !== null) {
    print("Play recording: " + file);
    Controller.loadInputRecording("file:///" + file);
    Controller.startInputPlayback();

    // Stop playback after 20s.
    Script.setTimeout(function () {
        print("Stop playing recording");
        Controller.stopInputPlayback();
    }, 20000);
}
```

</div>

<div class="api-entry">

### startInputRecording {#startInputRecording}

```js
Controller.startInputRecording()
```

<div class="api-text" v-pre><p>Starts making a recording of currently active controllers.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Make a controller recording.</p></div>

```js
// Delay start of recording for 2s.
Script.setTimeout(function () {
    print("Start input recording");
    Controller.startInputRecording();
}, 2000);

// Make a 10s recording.
Script.setTimeout(function () {
    print("Stop input recording");
    Controller.stopInputRecording();
    Controller.saveInputRecording();
    print("Input recording saved in: " + Controller.getInputRecorderSaveDirectory());
}, 12000);
```

</div>

<div class="api-entry">

### stopInputPlayback {#stopInputPlayback}

```js
Controller.stopInputPlayback()
```

<div class="api-text" v-pre><p>Stops play back of a recording started by <a href="#startInputPlayback">startInputPlayback</a>.</p></div>

</div>

<div class="api-entry">

### stopInputRecording {#stopInputRecording}

```js
Controller.stopInputRecording()
```

<div class="api-text" v-pre><p>Stops making a recording started by <a href="#startInputRecording">startInputRecording</a>.</p></div>

</div>

<div class="api-entry">

### triggerHapticPulse {#triggerHapticPulse}

```js
Controller.triggerHapticPulse(strength, duration, hand?)
```

<div class="api-text" v-pre><p>Triggers a haptic pulse on connected and enabled devices that have the capability.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>strength</code></td><td>number</td><td></td><td><p>The strength of the haptic pulse, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>duration</code></td><td>number</td><td></td><td><p>The duration of the haptic pulse, in milliseconds.</p></td></tr>
<tr><td><code>hand</code> <em>optional</em></td><td><a href="#Hand">Controller.Hand</a></td><td><code>2</code></td><td><p>The hand or hands to trigger the haptic pulse on.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Trigger a haptic pulse on the right hand.</p></div>

```js
var HAPTIC_STRENGTH = 0.5;
var HAPTIC_DURATION = 10;
var RIGHT_HAND = 1;
Controller.triggerHapticPulse(HAPTIC_STRENGTH, HAPTIC_DURATION, RIGHT_HAND);
```

</div>

<div class="api-entry">

### triggerHapticPulseOnDevice {#triggerHapticPulseOnDevice}

```js
Controller.triggerHapticPulseOnDevice(deviceID, strength, duration, hand?)
```

<div class="api-text" v-pre><p>Triggers a haptic pulse on a particular device if connected and enabled and it has the capability.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deviceID</code></td><td>number</td><td></td><td><p>The ID of the device to trigger the haptic pulse on.</p></td></tr>
<tr><td><code>strength</code></td><td>number</td><td></td><td><p>The strength of the haptic pulse, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>duration</code></td><td>number</td><td></td><td><p>The duration of the haptic pulse, in milliseconds.</p></td></tr>
<tr><td><code>hand</code> <em>optional</em></td><td><a href="#Hand">Controller.Hand</a></td><td><code>2</code></td><td><p>The hand or hands to trigger the haptic pulse on.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Trigger a haptic pulse on an Oculus Touch controller.</p></div>

```js
var HAPTIC_STRENGTH = 0.5;
var deviceID = Controller.findDevice("OculusTouch");
var HAPTIC_DURATION = 10;
var RIGHT_HAND = 1;
Controller.triggerHapticPulseOnDevice(deviceID, HAPTIC_STRENGTH, HAPTIC_DURATION, RIGHT_HAND);
```

</div>

<div class="api-entry">

### triggerShortHapticPulse {#triggerShortHapticPulse}

```js
Controller.triggerShortHapticPulse(strength, hand?)
```

<div class="api-text" v-pre><p>Triggers a 250ms haptic pulse on connected and enabled devices that have the capability.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>strength</code></td><td>number</td><td></td><td><p>The strength of the haptic pulse, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>hand</code> <em>optional</em></td><td><a href="#Hand">Controller.Hand</a></td><td><code>2</code></td><td><p>The hand or hands to trigger the haptic pulse on.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### triggerShortHapticPulseOnDevice {#triggerShortHapticPulseOnDevice}

```js
Controller.triggerShortHapticPulseOnDevice(deviceID, strength, hand?)
```

<div class="api-text" v-pre><p>Triggers a 250ms haptic pulse on a particular device if connected and enabled and it has the capability.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deviceID</code></td><td>number</td><td></td><td><p>The ID of the device to trigger the haptic pulse on.</p></td></tr>
<tr><td><code>strength</code></td><td>number</td><td></td><td><p>The strength of the haptic pulse, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
<tr><td><code>hand</code> <em>optional</em></td><td><a href="#Hand">Controller.Hand</a></td><td><code>2</code></td><td><p>The hand or hands to trigger the haptic pulse on.</p></td></tr>
</tbody></table></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### actionEvent {#actionEvent}

```js
Controller.actionEvent.connect(function (actionID, value) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an action occurs.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>actionID</code></td><td>number</td><td><p>The ID of the action, per <a href="#findAction">findAction</a>.</p></td></tr>
<tr><td><code>value</code></td><td>number</td><td><p>The value associated with the action.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report action events as they occur.</p></div>

```js
var actionNamesForID = {};
var actionNames = Controller.getActionNames();
for (var i = 0, length = actionNames.length; i < length; i++) {
    actionNamesForID[Controller.findAction(actionNames[i])] = actionNames[i];
}

function onActionEvent(action, value) {
    print("onActionEvent() : " + action + " ( " + actionNamesForID[action] + " ) ; " + value);
}

Controller.actionEvent.connect(onActionEvent);

Script.scriptEnding.connect(function () {
    Controller.actionEvent.disconnect(onActionEvent);
});
```

</div>

<div class="api-entry">

### hardwareChanged {#hardwareChanged}

```js
Controller.hardwareChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a device is registered or unregistered by a plugin. Not all plugins generate <code>hardwareChanged</code> events: for example, connecting or disconnecting a mouse will not generate an event but connecting or disconnecting an Xbox controller will.</p></div>

</div>

<div class="api-entry">

### inputDeviceRunningChanged {#inputDeviceRunningChanged}

```js
Controller.inputDeviceRunningChanged.connect(function (deviceName, isRunning) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an input device starts or stops being active and running (enabled). For example, enabling or disabling the LeapMotion in Settings &gt; Controls &gt; Calibration will trigger this signal.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deviceName</code></td><td>string</td><td><p>The name of the device.</p></td></tr>
<tr><td><code>isRunning</code></td><td>boolean</td><td><p><code>true</code> if the device is active and running, <code>false</code> if it isn't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### inputEvent {#inputEvent}

```js
Controller.inputEvent.connect(function (action, value) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when there is a new controller input event.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>action</code></td><td>number</td><td><p>The input action, per <a href="#Standard"><code>Controller.Standard</code></a>.</p></td></tr>
<tr><td><code>value</code></td><td>number</td><td><p>The value associated with the input action.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report input events as they occur.</p></div>

```js
var inputNamesForID = {};
for (var property in Controller.Standard) {
    inputNamesForID[Controller.Standard[property]] = "Controller.Standard." + property;
}

function onInputEvent(input, value) {
    print("onInputEvent() : " + input + " ( " + inputNamesForID[input] + " ) ; " + value);
}

Controller.inputEvent.connect(onInputEvent);

Script.scriptEnding.connect(function () {
    Controller.inputEvent.disconnect(onInputEvent);
});
```

</div>

<div class="api-entry">

### keyPressEvent {#keyPressEvent}

```js
Controller.keyPressEvent.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a keyboard key is pressed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#KeyEvent">KeyEvent</a></td><td><p>Details of the key press.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the KeyEvent details for each key press.</p></div>

```js
Controller.keyPressEvent.connect(function (event) {
    print(JSON.stringify(event));
});
```

</div>

<div class="api-entry">

### keyReleaseEvent {#keyReleaseEvent}

```js
Controller.keyReleaseEvent.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a keyboard key is released from being pressed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#KeyEvent">KeyEvent</a></td><td><p>Details of the key release.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### mouseDoublePressEvent {#mouseDoublePressEvent}

```js
Controller.mouseDoublePressEvent.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse button is double-pressed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#MouseEvent">MouseEvent</a></td><td><p>Details of the button double-press.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### mouseMoveEvent {#mouseMoveEvent}

```js
Controller.mouseMoveEvent.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the mouse moves.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#MouseEvent">MouseEvent</a></td><td><p>Details of the mouse movement.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the MouseEvent details for each mouse move.</p></div>

```js
Controller.mouseMoveEvent.connect(function (event) {
    print(JSON.stringify(event));
});
```

</div>

<div class="api-entry">

### mousePressEvent {#mousePressEvent}

```js
Controller.mousePressEvent.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse button is pressed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#MouseEvent">MouseEvent</a></td><td><p>Details of the button press.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### mouseReleaseEvent {#mouseReleaseEvent}

```js
Controller.mouseReleaseEvent.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a mouse button is released from being pressed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#MouseEvent">MouseEvent</a></td><td><p>Details of the button release.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### touchBeginEvent {#touchBeginEvent}

```js
Controller.touchBeginEvent.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a touch event starts in the Interface window on a touch-enabled display or device.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#TouchEvent">TouchEvent</a></td><td><p>Details of the touch begin.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the TouchEvent details when a touch event starts.</p></div>

```js
Controller.touchBeginEvent.connect(function (event) {
    print(JSON.stringify(event));
});
```

</div>

<div class="api-entry">

### touchEndEvent {#touchEndEvent}

```js
Controller.touchEndEvent.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a touch event ends in the Interface window on a touch-enabled display or device.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#TouchEvent">TouchEvent</a></td><td><p>Details of the touch end.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### touchUpdateEvent {#touchUpdateEvent}

```js
Controller.touchUpdateEvent.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a touch event update occurs in the Interface window on a touch-enabled display or device.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#TouchEvent">TouchEvent</a></td><td><p>Details of the touch update.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### wheelEvent {#wheelEvent}

```js
Controller.wheelEvent.connect(function (event) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the mouse wheel is rotated.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>event</code></td><td><a href="globals#WheelEvent">WheelEvent</a></td><td><p>Details of the wheel movement.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the WheelEvent details for each wheel rotation.</p></div>

```js
Controller.wheelEvent.connect(function (event) {
    print(JSON.stringify(event));
});
```

</div>

## Types {#types}

<div class="api-entry">

### Actions {#Actions}

<div class="api-text" v-pre><p>The <code>Controller.Actions</code> object has properties representing predefined actions on the user's avatar and Interface. The property values are integer IDs, uniquely identifying each action. <em>Read-only.</em></p>
 <p>These actions can be used as end points in the routes of a <a href="MappingObject"><code>MappingObject</code></a>. The data item routed to each action is either a number or a <a href="globals#Pose"><code>Pose</code></a>.</p>
 <p> </p>
<p></p>
<p> </p>
<p></p>
<p> </p>
<p></p>
<p> </p>
<p></p>
<p> </p>
<table> <thead> <tr><th>Property</th><th>Type</th><th>Data</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td colspan="4"><strong>Avatar Movement</strong></td></tr>
 <tr><td><code>TranslateX</code></td><td>number</td><td>number</td><td>Move the user's avatar in the direction of its x-axis, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code>TranslateY</code></td><td>number</td><td>number</td><td>Move the user's avatar in the direction of its y-axis, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code>TranslateZ</code></td><td>number</td><td>number</td><td>Move the user's avatar in the direction of its z-axis, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code>Pitch</code></td><td>number</td><td>number</td><td>Rotate the user's avatar head and attached camera about its negative x-axis (i.e., positive values pitch down) at a rate proportional to the control value, if the camera isn't in HMD, independent, or mirror modes.</td></tr>
 <tr><td><code>Yaw</code></td><td>number</td><td>number</td><td>Rotate the user's avatar about its y-axis at a rate proportional to the control value, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code>Roll</code></td><td>number</td><td>number</td><td>No action.</td></tr>
 <tr><td><code>DeltaPitch</code></td><td>number</td><td>number</td><td>Rotate the user's avatar head and attached camera about its negative x-axis (i.e., positive values pitch down) by an amount proportional to the control value, if the camera isn't in HMD, independent, or mirror modes.</td></tr>
 <tr><td><code>DeltaYaw</code></td><td>number</td><td>number</td><td>Rotate the user's avatar about its y-axis by an amount proportional to the control value, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code>DeltaRoll</code></td><td>number</td><td>number</td><td>No action.</td></tr>
 <tr><td><code>StepTranslateX</code></td><td>number</td><td>number</td><td>No action.</td></tr>
 <tr><td><code>StepTranslateY</code></td><td>number</td><td>number</td><td>No action.</td></tr>
 <tr><td><code>StepTranslateZ</code></td><td>number</td><td>number</td><td>No action.</td></tr>
 <tr><td><code>StepPitch</code></td><td>number</td><td>number</td><td>No action.</td></tr>
 <tr><td><code>StepYaw</code></td><td>number</td><td>number</td><td>Rotate the user's avatar about its y-axis in a step increment, if the camera isn't in independent or mirror modes.</td></tr>
 <tr><td><code>StepRoll</code></td><td>number</td><td>number</td><td>No action.</td></tr>
 <tr><td colspan="4"><strong>Avatar Skeleton</strong></td></tr>
 <tr><td><code>Hips</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the hips pose of the user's avatar. </td></tr>
 <tr><td><code>Spine2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the spine2 pose of the user's avatar. </td></tr>
 <tr><td><code>Head</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the head pose of the user's avatar. </td></tr>
 <tr><td><code>LeftArm</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left arm pose of the user's avatar. </td></tr>
 <tr><td><code>RightArm</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right arm pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHand</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left hand pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandThumb1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left thumb 1 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandThumb2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left thumb 2 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandThumb3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left thumb 3 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandThumb4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left thumb 4 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandIndex1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left index 1 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandIndex2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left index 2 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandIndex3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left index 3 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandIndex4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left index 4 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandMiddle1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left middle 1 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandMiddle2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left middle 2 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandMiddle3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left middle 3 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandMiddle4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left middle 4 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandRing1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left ring 1 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandRing2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left ring 2 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandRing3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left ring 3 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandRing4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left ring 4 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandPinky1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left pinky 1 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandPinky2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left pinky 2 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandPinky3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left pinky 3 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftHandPinky4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left pinky 4 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHand</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right hand of the user's avatar. </td></tr>
 <tr><td><code>RightHandThumb1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right thumb 1 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandThumb2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right thumb 2 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandThumb3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right thumb 3 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandThumb4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right thumb 4 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandIndex1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right index 1 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandIndex2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right index 2 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandIndex3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right index 3 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandIndex4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right index 4 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandMiddle1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right middle 1 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandMiddle2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right middle 2 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandMiddle3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right middle 3 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandMiddle4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right middle 4 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandRing1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right ring 1 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandRing2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right ring 2 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandRing3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right ring 3 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandRing4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right ring 4 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandPinky1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right pinky 1 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandPinky2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right pinky 2 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandPinky3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right pinky 3 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>RightHandPinky4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right pinky 4 finger joint pose of the user's avatar.</td></tr>
 <tr><td><code>LeftFoot</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the left foot pose of the user's avatar.</td></tr>
 <tr><td><code>RightFoot</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Set the right foot pose of the user's avatar.</td></tr>
 <tr><td colspan="4"><strong>Application</strong></td></tr>
 <tr><td><code>BoomIn</code></td><td>number</td><td>number</td><td>Zoom camera in from third person toward first person view.</td></tr>
 <tr><td><code>BoomOut</code></td><td>number</td><td>number</td><td>Zoom camera out from first person to third person view.</td></tr>
 <tr><td><code>CycleCamera</code></td><td>number</td><td>number</td><td>Cycle the camera view from first person look at, to (third person) look at, to selfie if in desktop mode, then back to first person and repeat.</td></tr>
 <tr><td><code>ContextMenu</code></td><td>number</td><td>number</td><td>Show/hide the tablet.</td></tr>
 <tr><td><code>ToggleMute</code></td><td>number</td><td>number</td><td>Toggle the microphone mute.</td></tr>
 <tr><td><code>TogglePushToTalk</code></td><td>number</td><td>number</td><td>Toggle push to talk.</td></tr>
 <tr><td><code>ToggleOverlay</code></td><td>number</td><td>number</td><td>Toggle the display of overlays.</td></tr>
 <tr><td><code>Sprint</code></td><td>number</td><td>number</td><td>Set avatar sprint mode.</td></tr>
 <tr><td><code>ReticleClick</code></td><td>number</td><td>number</td><td>Set mouse-pressed.</td></tr>
 <tr><td><code>ReticleX</code></td><td>number</td><td>number</td><td>Move the cursor left/right in the x direction. </td></tr>
 <tr><td><code>ReticleY</code></td><td>number</td><td>number</td><td>move the cursor up/down in the y direction. </td></tr>
 <tr><td><code>ReticleLeft</code></td><td>number</td><td>number</td><td>Move the cursor left.</td></tr>
 <tr><td><code>ReticleRight</code></td><td>number</td><td>number</td><td>Move the cursor right.</td></tr>
 <tr><td><code>ReticleUp</code></td><td>number</td><td>number</td><td>Move the cursor up.</td></tr>
 <tr><td><code>ReticleDown</code></td><td>number</td><td>number</td><td>Move the cursor down.</td></tr>
 <tr><td><code>UiNavLateral</code></td><td>number</td><td>number</td><td>Generate a keyboard left or right arrow key event.</td></tr>
 <tr><td><code>UiNavVertical</code></td><td>number</td><td>number</td><td>Generate a keyboard up or down arrow key event.</td></tr>
 <tr><td><code>UiNavGroup</code></td><td>number</td><td>number</td><td>Generate a keyboard tab or back-tab key event. </td></tr>
 <tr><td><code>UiNavSelect</code></td><td>number</td><td>number</td><td>Generate a keyboard Enter key event. </td></tr>
 <tr><td><code>UiNavBack</code></td><td>number</td><td>number</td><td>Generate a keyboard Esc key event.</td></tr>
 <tr><td><code>LeftHandClick</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>RightHandClick</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>Shift</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>PrimaryAction</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>SecondaryAction</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td colspan="4"><strong>Aliases</strong></td></tr>
 <tr><td><code>Backward</code></td><td>number</td><td>number</td><td>Alias for <code>TranslateZ</code> in the positive direction.</td></tr>
 <tr><td><code>Forward</code></td><td>number</td><td>number</td><td>Alias for <code>TranslateZ</code> in the negative direction.</td></tr>
 <tr><td><code>StrafeRight</code></td><td>number</td><td>number</td><td>Alias for <code>TranslateX</code> in the positive direction.</td></tr>
 <tr><td><code>StrafeLeft</code></td><td>number</td><td>number</td><td>Alias for <code>TranslateX</code> in the negative direction.</td></tr>
 <tr><td><code>Up</code></td><td>number</td><td>number</td><td>Alias for <code>TranslateY</code> in the positive direction.</td></tr>
 <tr><td><code>Down</code></td><td>number</td><td>number</td><td>Alias for <code>TranslateY</code> in the negative direction.</td></tr>
 <tr><td><code>PitchDown</code></td><td>number</td><td>number</td><td>Alias for <code>Pitch</code> in the positive direction.</td></tr>
 <tr><td><code>PitchUp</code></td><td>number</td><td>number</td><td>Alias for <code>Pitch</code> in the negative direction.</td></tr>
 <tr><td><code>YawLeft</code></td><td>number</td><td>number</td><td>Alias for <code>Yaw</code> in the positive direction.</td></tr>
 <tr><td><code>YawRight</code></td><td>number</td><td>number</td><td>Alias for <code>Yaw</code> in the negative direction.</td></tr>
 <tr><td colspan="4"><strong>Deprecated Aliases</strong></td></tr>
 <tr><td><code>LEFT_HAND</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>LeftHand</code> instead.</span></td></tr>
 <tr><td><code>RIGHT_HAND</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>RightHand</code> instead.</span></td></tr>
 <tr><td><code>BOOM_IN</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>BoomIn</code> instead.</span></td></tr>
 <tr><td><code>BOOM_OUT</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>BoomOut</code> instead.</span></td></tr>
 <tr><td><code>CONTEXT_MENU</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>ContextMenu</code> instead.</span></td></tr>
 <tr><td><code>TOGGLE_MUTE</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>ToggleMute</code> instead.</span></td></tr>
 <tr><td><code>TOGGLE_PUSHTOTALK</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>TogglePushToTalk</code> instead.</span></td></tr>
 <tr><td><code>SPRINT</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>Sprint</code> instead.</span></td></tr>
 <tr><td><code>LONGITUDINAL_BACKWARD</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>Backward</code> instead.</span></td></tr>
 <tr><td><code>LONGITUDINAL_FORWARD</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>Forward</code> instead.</span></td></tr>
 <tr><td><code>LATERAL_LEFT</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>StrafeLeft</code> instead.</span></td></tr>
 <tr><td><code>LATERAL_RIGHT</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>StrafeRight</code> instead.</span></td></tr>
 <tr><td><code>VERTICAL_UP</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>Up</code> instead.</span></td></tr>
 <tr><td><code>VERTICAL_DOWN</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>Down</code> instead.</span></td></tr>
 <tr><td><code>PITCH_DOWN</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>PitchDown</code> instead.</span></td></tr>
 <tr><td><code>PITCH_UP</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>PitchUp</code> instead.</span></td></tr>
 <tr><td><code>YAW_LEFT</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>YawLeft</code> instead.</span></td></tr>
 <tr><td><code>YAW_RIGHT</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>YawRight</code> instead.</span></td></tr>
 <tr><td><code>LEFT_HAND_CLICK</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>LeftHandClick</code> instead.</span></td></tr>
 <tr><td><code>RIGHT_HAND_CLICK</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>RightHandClick</code> instead.</span></td></tr>
 <tr><td><code>SHIFT</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>Shift</code> instead.</span></td></tr>
 <tr><td><code>ACTION1</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>PrimaryAction</code> instead.</span></td></tr>
 <tr><td><code>ACTION2</code></td><td>number</td><td>number</td><td><span class="important">Deprecated: This action is deprecated and will be removed. Use <code>SecondaryAction</code> instead.</span></td></tr>
 <tr><td colspan="4"><strong>Deprecated Trackers</strong></td></tr>
<tr> </tr>
<tr><td><code>TrackedObject00</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject01</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject02</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject03</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject04</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject05</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject06</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject07</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject08</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject09</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject10</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject11</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject12</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject13</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject14</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 <tr><td><code>TrackedObject15</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td><span class="important">Deprecated: This action is deprecated and will be removed. It takes no action.</span></td></tr>
 </tbody>
 </table>
<p></p></div>

</div>

<div class="api-entry">

### Hand {#Hand}

<div class="api-text" v-pre><p>Some controller actions may be associated with one or both hands:</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>Left hand.</td></tr>
 <tr><td><code>1</code></td><td>Right hand.</td></tr>
 <tr><td><code>2</code></td><td>Both hands.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### Hardware {#Hardware}

<div class="api-text" v-pre><p>The <code>Controller.Hardware</code> object has properties representing standard and hardware-specific controller and computer outputs, plus predefined actions on Interface and the user's avatar. <em>Read-only.</em></p>
 <p>The outputs can be mapped to actions or functions in a <a href="RouteObject"><code>RouteObject</code></a> mapping. Additionally, hardware-specific controller outputs can be mapped to standard controller outputs. </p>
<p>Controllers typically implement a subset of the <a href="#Standard"><code>Controller.Standard</code></a> controls, plus they may implement some extras. Some common controllers are included in the table. You can see the outputs provided by these and others by viewing their <a href="#MappingJSON">MappingJSON</a> files at <a href="https://github.com/highfidelity/hifi/tree/master/interface/resources/controllers" target="_blank" rel="noopener"> https://github.com/highfidelity/hifi/tree/master/interface/resources/controllers</a>.</p>
 <table> <thead> <tr><th>Property</th><th>Type</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>Controller.Hardware.Actions</code></td><td>object</td><td>Synonym for <a href="#Actions"><code>Controller.Actions</code></a>.</td></tr>
 <tr><td><code>Controller.Hardware.Application</code></td><td>object</td><td>Interface state outputs. See <a href="#Hardware-Application"><code>Controller.Hardware-Application</code></a>.</td></tr>
 <tr><td><code>Controller.Hardware.Keyboard</code></td><td>object</td><td>Keyboard, mouse, and touch pad outputs. See <a href="#Hardware-Keyboard"><code>Controller.Hardware-Keyboard</code></a>.</td></tr>
 <tr><td><code>Controller.Hardware.OculusTouch</code></td><td>object</td><td>Oculus Rift HMD outputs. See <a href="#Hardware-OculusTouch"><code>Controller.Hardware-OculusTouch</code></a>.</td></tr>
 <tr><td><code>Controller.Hardware.Vive</code></td><td>object</td><td>Vive HMD outputs. See <a href="#Hardware-Vive"><code>Controller.Hardware-Vive</code></a>.</td></tr>
 </tbody>
 </table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>List all the currently available <code>Controller.Hardware</code> properties.</p></div>

```js
function printProperties(string, item) {
    print(string);
    for (var key in item) {
        if (item.hasOwnProperty(key)) {
            printProperties(string + "." + key, item[key]);
        }
    }
}

printProperties("Controller.Hardware", Controller.Hardware);
```

</div>

<div class="api-entry">

### Hardware-Application {#Hardware-Application}

<div class="api-text" v-pre><p>The <code>Controller.Hardware.Application</code> object has properties representing Interface's state. The property values are integer IDs, uniquely identifying each output. <em>Read-only.</em></p>
 <p>These states can be mapped to actions or functions or <code>Controller.Standard</code> items in a <a href="RouteObject"><code>RouteObject</code></a> mapping (e.g., using the <a href="RouteObject#when"><code>RouteObject#when</code></a> method). Each data value is either <code>1.0</code> for "true" or <code>0.0</code> for "false".</p>
 <table> <thead> <tr><th>Property</th><th>Type</th><th>Data</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>CameraFirstPerson</code></td><td>number</td><td>number</td><td>The camera is in first-person mode. <em>Legacy first person camera mode.</em></td></tr>
 <tr><td><code>CameraFirstPersonLookAt</code></td><td>number</td><td>number</td><td>The camera is in first-person mode. <em>Default first person camera mode.</em></td></tr>
 <tr><td><code>CameraThirdPerson</code></td><td>number</td><td>number</td><td>The camera is in third-person mode. <em>Legacy third person camera mode.</em></td></tr>
 <tr><td><code>CameraLookAt</code></td><td>number</td><td>number</td><td>The camera is in third-person mode. <em>Default third person camera mode.</em></td></tr>
 <tr><td><code>CameraFSM</code></td><td>number</td><td>number</td><td>The camera is in full screen mirror mode. <em>Legacy "look at myself" behavior.</em></td></tr>
 <tr><td><code>CameraSelfie</code></td><td>number</td><td>number</td><td>The camera is in selfie mode. <em>Default "look at myself" camera mode.</em></td></tr>
 <tr><td><code>CameraIndependent</code></td><td>number</td><td>number</td><td>The camera is in independent mode.</td></tr>
 <tr><td><code>CameraEntity</code></td><td>number</td><td>number</td><td>The camera is in entity mode.</td></tr>
 <tr><td><code>InHMD</code></td><td>number</td><td>number</td><td>The user is in HMD mode.</td></tr>
 <tr><td><code>AdvancedMovement</code></td><td>number</td><td>number</td><td>Advanced movement (walking) controls are enabled.</td></tr>
 <tr><td><code>StrafeEnabled</code></td><td>number</td><td>number</td><td>Strafing is enabled</td></tr>
 <tr><td><code>LeftHandDominant</code></td><td>number</td><td>number</td><td>Dominant hand set to left.</td></tr>
 <tr><td><code>RightHandDominant</code></td><td>number</td><td>number</td><td>Dominant hand set to right.</td></tr>
 <tr><td><code>SnapTurn</code></td><td>number</td><td>number</td><td>Snap turn is enabled.</td></tr>
 <tr><td><code>Grounded</code></td><td>number</td><td>number</td><td>The user's avatar is on the ground.</td></tr>
 <tr><td><code>NavigationFocused</code></td><td>number</td><td>number</td><td><em>Not used.</em></td></tr>
 <tr><td><code>PlatformWindows</code></td><td>number</td><td>number</td><td>The operating system is Windows.</td></tr>
 <tr><td><code>PlatformMac</code></td><td>number</td><td>number</td><td>The operating system is Mac.</td></tr>
 <tr><td><code>PlatformAndroid</code></td><td>number</td><td>number</td><td>The operating system is Android.</td></tr>
 </tbody>
 </table></div>

</div>

<div class="api-entry">

### Hardware-Keyboard {#Hardware-Keyboard}

<div class="api-text" v-pre><p>The <code>Controller.Hardware.Keyboard</code> object has properties representing keyboard, mouse, and display touch events. The property values are integer IDs, uniquely identifying each output. <em>Read-only.</em></p>
 <p>These events can be mapped to actions or functions or <code>Controller.Standard</code> items in a <a href="RouteObject"><code>RouteObject</code></a> mapping. For presses, each data value is either <code>1.0</code> for "true" or <code>0.0</code> for "false".</p>
 <table> <thead> <tr><th>Property</th><th>Type</th><th>Data</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code> – <code>9</code></td><td>number</td><td>number</td><td>A "0" – "1" key on the keyboard or keypad is pressed.</td></tr>
 <tr><td><code>A</code> – <code>Z</code></td><td>number</td><td>number</td><td>A "A" – "Z" key on the keyboard is pressed.</td></tr>
 <tr><td><code>Space</code></td><td>number</td><td>number</td><td>The space bar on the keyboard is pressed.</td></tr>
 <tr><td><code>Tab</code></td><td>number</td><td>number</td><td>The tab key on the keyboard is pressed.</td></tr>
 <tr><td><code>Shift</code></td><td>number</td><td>number</td><td>The shift key on the keyboard is pressed.</td></tr>
 <tr><td><code>Control</code></td><td>number</td><td>number</td><td>The control key on the keyboard is pressed. (The "Command" key on OSX.)</td></tr>
 <tr><td><code>Left</code></td><td>number</td><td>number</td><td>The left arrow key on the keyboard or keypad is pressed. </td></tr>
 <tr><td><code>Right</code></td><td>number</td><td>number</td><td>The right arrow key on the keyboard or keypad is pressed.</td></tr>
 <tr><td><code>Up</code></td><td>number</td><td>number</td><td>The up arrow key on the keyboard or keypad is pressed. </td></tr>
 <tr><td><code>Down</code></td><td>number</td><td>number</td><td>The down arrow key on the keyboard or keypad is pressed. </td></tr>
 <tr><td><code>PgUp</code></td><td>number</td><td>number</td><td>The page up key on the keyboard or keypad is pressed. </td></tr>
 <tr><td><code>PgDown</code></td><td>number</td><td>number</td><td>The page down key on the keyboard or keypad is pressed. </td></tr>
 <tr><td><code>LeftMouseButton</code></td><td>number</td><td>number</td><td>The left mouse button is pressed.</td></tr>
 <tr><td><code>MiddleMouseButton</code></td><td>number</td><td>number</td><td>The middle mouse button is pressed. </td></tr>
 <tr><td><code>RightMouseButton</code></td><td>number</td><td>number</td><td>The right mouse button is pressed.</td></tr>
 <tr><td><code>LeftMouseClicked</code></td><td>number</td><td>number</td><td>The left mouse button was clicked.</td></tr>
 <tr><td><code>MiddleMouseClicked</code></td><td>number</td><td>number</td><td>The middle mouse button was clicked. </td></tr>
 <tr><td><code>RightMouseClicked</code></td><td>number</td><td>number</td><td>The right mouse button was clicked. </td></tr>
 <tr><td><code>MouseMoveRight</code></td><td>number</td><td>number</td><td>The mouse moved right. The data value is how far it moved.</td></tr>
 <tr><td><code>MouseMoveLeft</code></td><td>number</td><td>number</td><td>The mouse moved left. The data value is how far it moved.</td></tr>
 <tr><td><code>MouseMoveUp</code></td><td>number</td><td>number</td><td>The mouse moved up. The data value is how far it moved.</td></tr>
 <tr><td><code>MouseMoveDown</code></td><td>number</td><td>number</td><td>The mouse moved down. The data value is how far it moved.</td></tr>
 <tr><td><code>MouseX</code></td><td>number</td><td>number</td><td>The mouse x-coordinate changed. The data value is its new x-coordinate value.</td></tr>
 <tr><td><code>MouseY</code></td><td>number</td><td>number</td><td>The mouse y-coordinate changed. The data value is its new y-coordinate value.</td></tr>
 <tr><td><code>MouseWheelRight</code></td><td>number</td><td>number</td><td>The mouse wheel rotated right or two-finger swipe moved right. The data value is the number of units moved (typically <code>1.0</code>).</td></tr>
 <tr><td><code>MouseWheelLeft</code></td><td>number</td><td>number</td><td>The mouse wheel rotated left or two-finger swipe moved left. The data value is the number of units moved (typically <code>1.0</code>).</td></tr>
 <tr><td><code>MouseWheelUp</code></td><td>number</td><td>number</td><td>The mouse wheel rotated up or two-finger swipe moved up. The data value is the number of units move3d (typically <code>1.0</code>). <p><strong>Warning:</strong> The mouse wheel in an ordinary mouse generates left/right wheel events instead of up/down.</p>
 </td></tr>
 <tr><td><code>MouseWheelDown</code></td><td>number</td><td>number</td><td>The mouse wheel rotated down or two-finger swipe moved down. The data value is the number of units moved (typically <code>1.0</code>). <p><strong>Warning:</strong> The mouse wheel in an ordinary mouse generates left/right wheel events instead of up/down.</p>
 </td></tr>
 <tr><td><code>TouchpadRight</code></td><td>number</td><td>number</td><td>The average touch on a touch-enabled device moved right. The data value is how far the average position of all touch points moved.</td></tr>
 <tr><td><code>TouchpadLeft</code></td><td>number</td><td>number</td><td>The average touch on a touch-enabled device moved left. The data value is how far the average position of all touch points moved.</td></tr>
 <tr><td><code>TouchpadUp</code></td><td>number</td><td>number</td><td>The average touch on a touch-enabled device moved up. The data value is how far the average position of all touch points moved.</td></tr>
 <tr><td><code>TouchpadDown</code></td><td>number</td><td>number</td><td>The average touch on a touch-enabled device moved down. The data value is how far the average position of all touch points moved.</td></tr>
 <tr><td><code>GesturePinchOut</code></td><td>number</td><td>number</td><td>The average of two touches on a touch-enabled device moved out. The data value is how far the average positions of the touch points moved out.</td></tr>
 <tr><td><code>GesturePinchOut</code></td><td>number</td><td>number</td><td>The average of two touches on a touch-enabled device moved in. The data value is how far the average positions of the touch points moved in.</td></tr>
 </tbody>
 </table></div>

</div>

<div class="api-entry">

### Hardware-OculusTouch {#Hardware-OculusTouch}

<div class="api-text" v-pre><p>The <code>Controller.Hardware.OculusTouch</code> object has properties representing the Oculus Rift. The property values are integer IDs, uniquely identifying each output. <em>Read-only.</em></p>
 <p>These outputs can be mapped to actions or functions or <code>Controller.Standard</code> items in a <a href="RouteObject"><code>RouteObject</code></a> mapping.</p>
 <table> <thead> <tr><th>Property</th><th>Type</th><th>Data</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td colspan="4"><strong>Buttons</strong></td></tr>
 <tr><td><code>A</code></td><td>number</td><td>number</td><td>"A" button pressed.</td></tr>
 <tr><td><code>B</code></td><td>number</td><td>number</td><td>"B" button pressed.</td></tr>
 <tr><td><code>X</code></td><td>number</td><td>number</td><td>"X" button pressed.</td></tr>
 <tr><td><code>Y</code></td><td>number</td><td>number</td><td>"Y" button pressed.</td></tr>
 <tr><td><code>LeftApplicationMenu</code></td><td>number</td><td>number</td><td>Left application menu button pressed. </td></tr>
 <tr><td><code>RightApplicationMenu</code></td><td>number</td><td>number</td><td>Right application menu button pressed. </td></tr>
 <tr><td colspan="4"><strong>Sticks</strong></td></tr>
 <tr><td><code>LX</code></td><td>number</td><td>number</td><td>Left stick x-axis scale.</td></tr>
 <tr><td><code>LY</code></td><td>number</td><td>number</td><td>Left stick y-axis scale.</td></tr>
 <tr><td><code>RX</code></td><td>number</td><td>number</td><td>Right stick x-axis scale.</td></tr>
 <tr><td><code>RY</code></td><td>number</td><td>number</td><td>Right stick y-axis scale.</td></tr>
 <tr><td><code>LS</code></td><td>number</td><td>number</td><td>Left stick button pressed.</td></tr>
 <tr><td><code>RS</code></td><td>number</td><td>number</td><td>Right stick button pressed.</td></tr>
 <tr><td><code>LSTouch</code></td><td>number</td><td>number</td><td>Left stick is touched.</td></tr>
 <tr><td><code>RSTouch</code></td><td>number</td><td>number</td><td>Right stick is touched.</td></tr>
 <tr><td colspan="4"><strong>Triggers</strong></td></tr>
 <tr><td><code>LT</code></td><td>number</td><td>number</td><td>Left trigger scale.</td></tr>
 <tr><td><code>RT</code></td><td>number</td><td>number</td><td>Right trigger scale.</td></tr>
 <tr><td><code>LeftGrip</code></td><td>number</td><td>number</td><td>Left grip scale.</td></tr>
 <tr><td><code>RightGrip</code></td><td>number</td><td>number</td><td>Right grip scale.</td></tr>
 <tr><td colspan="4"><strong>Finger Abstractions</strong></td></tr>
 <tr><td><code>LeftPrimaryThumbTouch</code></td><td>number</td><td>number</td><td>Left thumb touching primary thumb button.</td></tr>
 <tr><td><code>LeftSecondaryThumbTouch</code></td><td>number</td><td>number</td><td>Left thumb touching secondary thumb button.</td></tr>
 <tr><td><code>LeftThumbUp</code></td><td>number</td><td>number</td><td>Left thumb not touching primary or secondary thumb buttons.</td></tr>
 <tr><td><code>RightPrimaryThumbTouch</code></td><td>number</td><td>number</td><td>Right thumb touching primary thumb button.</td></tr>
 <tr><td><code>RightSecondaryThumbTouch</code></td><td>number</td><td>number</td><td>Right thumb touching secondary thumb button.</td></tr>
 <tr><td><code>RightThumbUp</code></td><td>number</td><td>number</td><td>Right thumb not touching primary or secondary thumb buttons.</td></tr>
 <tr><td><code>LeftPrimaryIndexTouch</code></td><td>number</td><td>number</td><td>Left index finger is touching primary index finger control.</td></tr>
 <tr><td><code>LeftIndexPoint</code></td><td>number</td><td>number</td><td>Left index finger is pointing, not touching primary or secondary index finger controls.</td></tr>
 <tr><td><code>RightPrimaryIndexTouch</code></td><td>number</td><td>number</td><td>Right index finger is touching primary index finger control.</td></tr>
 <tr><td><code>RightIndexPoint</code></td><td>number</td><td>number</td><td>Right index finger is pointing, not touching primary or secondary index finger controls.</td></tr>
 <tr><td colspan="4"><strong>Avatar Skeleton</strong></td></tr>
 <tr><td><code>Head</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Head pose.</td></tr>
 <tr><td><code>LeftHand</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left hand pose.</td></tr>
 <tr><td><code>RightHand</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>right hand pose.</td></tr>
 </tbody>
 </table></div>

</div>

<div class="api-entry">

### Hardware-Vive {#Hardware-Vive}

<div class="api-text" v-pre><p>The <code>Controller.Hardware.Vive</code> object has properties representing the Vive. The property values are integer IDs, uniquely identifying each output. <em>Read-only.</em></p>
 <p>These outputs can be mapped to actions or functions or <code>Controller.Standard</code> items in a <a href="RouteObject"><code>RouteObject</code></a> mapping.</p>
 <table> <thead> <tr><th>Property</th><th>Type</th><th>Data</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td colspan="4"><strong>Buttons</strong></td></tr>
 <tr><td><code>LeftApplicationMenu</code></td><td>number</td><td>number</td><td>Left application menu button pressed. </td></tr>
 <tr><td><code>RightApplicationMenu</code></td><td>number</td><td>number</td><td>Right application menu button pressed. </td></tr>
 <tr><td colspan="4"><strong>Touch Pad (Sticks)</strong></td></tr>
 <tr><td><code>LX</code></td><td>number</td><td>number</td><td>Left touch pad x-axis scale.</td></tr>
 <tr><td><code>LY</code></td><td>number</td><td>number</td><td>Left touch pad y-axis scale.</td></tr>
 <tr><td><code>RX</code></td><td>number</td><td>number</td><td>Right stick x-axis scale.</td></tr>
 <tr><td><code>RY</code></td><td>number</td><td>number</td><td>Right stick y-axis scale.</td></tr>
 <tr><td><code>LS</code></td><td>number</td><td>number</td><td>Left touch pad pressed.</td></tr>
 <tr><td><code>LSCenter</code></td><td>number</td><td>number</td><td>Left touch pad center pressed.</td></tr>
 <tr><td><code>LSX</code></td><td>number</td><td>number</td><td>Left touch pad pressed x-coordinate.</td></tr>
 <tr><td><code>LSY</code></td><td>number</td><td>number</td><td>Left touch pad pressed y-coordinate.</td></tr>
 <tr><td><code>RS</code></td><td>number</td><td>number</td><td>Right touch pad pressed.</td></tr>
 <tr><td><code>RSCenter</code></td><td>number</td><td>number</td><td>Right touch pad center pressed.</td></tr>
 <tr><td><code>RSX</code></td><td>number</td><td>number</td><td>Right touch pad pressed x-coordinate.</td></tr>
 <tr><td><code>RSY</code></td><td>number</td><td>number</td><td>Right touch pad pressed y-coordinate.</td></tr>
 <tr><td><code>LSTouch</code></td><td>number</td><td>number</td><td>Left touch pad is touched.</td></tr>
 <tr><td><code>RSTouch</code></td><td>number</td><td>number</td><td>Right touch pad is touched.</td></tr>
 <tr><td colspan="4"><strong>Triggers</strong></td></tr>
 <tr><td><code>LT</code></td><td>number</td><td>number</td><td>Left trigger scale.</td></tr>
 <tr><td><code>RT</code></td><td>number</td><td>number</td><td>Right trigger scale.</td></tr>
 <tr><td><code>LTClick</code></td><td>number</td><td>number</td><td>Left trigger click.</td></tr>
 <tr><td><code>RTClick</code></td><td>number</td><td>number</td><td>Right trigger click.</td></tr>
 <tr><td><code>LeftGrip</code></td><td>number</td><td>number</td><td>Left grip scale.</td></tr>
 <tr><td><code>RightGrip</code></td><td>number</td><td>number</td><td>Right grip scale.</td></tr>
 <tr><td colspan="4"><strong>Avatar Skeleton</strong></td></tr>
 <tr><td><code>Hips</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Hips pose.</td></tr>
 <tr><td><code>Spine2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Spine2 pose.</td></tr>
 <tr><td><code>Head</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Head pose.</td></tr>
 <tr><td><code>LeftEye</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left eye pose.</td></tr>
 <tr><td><code>RightEye</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right eye pose.</td></tr>
 <tr><td><code>EyeBlink_L</code></td><td>number</td><td>number</td><td>Left eyelid blink.</td></tr>
 <tr><td><code>EyeBlink_R</code></td><td>number</td><td>number</td><td>Right eyelid blink.</td></tr>
 <tr><td><code>LeftArm</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left arm pose.</td></tr>
 <tr><td><code>RightArm</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right arm pose</td></tr>
 <tr><td><code>LeftHand</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left hand pose.</td></tr>
 <tr><td><code>LeftHandThumb1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left thumb 1 finger joint pose.</td></tr>
 <tr><td><code>LeftHandThumb2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left thumb 2 finger joint pose.</td></tr>
 <tr><td><code>LeftHandThumb3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left thumb 3 finger joint pose.</td></tr>
 <tr><td><code>LeftHandThumb4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left thumb 4 finger joint pose.</td></tr>
 <tr><td><code>LeftHandIndex1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left index 1 finger joint pose.</td></tr>
 <tr><td><code>LeftHandIndex2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left index 2 finger joint pose.</td></tr>
 <tr><td><code>LeftHandIndex3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left index 3 finger joint pose.</td></tr>
 <tr><td><code>LeftHandIndex4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left index 4 finger joint pose.</td></tr>
 <tr><td><code>LeftHandMiddle1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left middle 1 finger joint pose. </td></tr>
 <tr><td><code>LeftHandMiddle2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left middle 2 finger joint pose. </td></tr>
 <tr><td><code>LeftHandMiddle3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left middle 3 finger joint pose. </td></tr>
 <tr><td><code>LeftHandMiddle4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left middle 4 finger joint pose. </td></tr>
 <tr><td><code>LeftHandRing1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left ring 1 finger joint pose.</td></tr>
 <tr><td><code>LeftHandRing2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left ring 2 finger joint pose.</td></tr>
 <tr><td><code>LeftHandRing3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left ring 3 finger joint pose.</td></tr>
 <tr><td><code>LeftHandRing4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left ring 4 finger joint pose.</td></tr>
 <tr><td><code>LeftHandPinky1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left pinky 1 finger joint pose.</td></tr>
 <tr><td><code>LeftHandPinky2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left pinky 2 finger joint pose.</td></tr>
 <tr><td><code>LeftHandPinky3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left pinky 3 finger joint pose.</td></tr>
 <tr><td><code>LeftHandPinky4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left pinky 4 finger joint pose.</td></tr>
 <tr><td><code>RightHand</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right hand pose.</td></tr>
 <tr><td><code>RightHandThumb1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right thumb 1 finger joint pose. </td></tr>
 <tr><td><code>RightHandThumb2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right thumb 2 finger joint pose. </td></tr>
 <tr><td><code>RightHandThumb3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right thumb 3 finger joint pose. </td></tr>
 <tr><td><code>RightHandThumb4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right thumb 4 finger joint pose. </td></tr>
 <tr><td><code>RightHandIndex1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right index 1 finger joint pose. </td></tr>
 <tr><td><code>RightHandIndex2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right index 2 finger joint pose. </td></tr>
 <tr><td><code>RightHandIndex3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right index 3 finger joint pose. </td></tr>
 <tr><td><code>RightHandIndex4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right index 4 finger joint pose. </td></tr>
 <tr><td><code>RightHandMiddle1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right middle 1 finger joint pose. </td></tr>
 <tr><td><code>RightHandMiddle2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right middle 2 finger joint pose. </td></tr>
 <tr><td><code>RightHandMiddle3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right middle 3 finger joint pose. </td></tr>
 <tr><td><code>RightHandMiddle4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right middle 4 finger joint pose. </td></tr>
 <tr><td><code>RightHandRing1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right ring 1 finger joint pose.</td></tr>
 <tr><td><code>RightHandRing2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right ring 2 finger joint pose.</td></tr>
 <tr><td><code>RightHandRing3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right ring 3 finger joint pose.</td></tr>
 <tr><td><code>RightHandRing4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right ring 4 finger joint pose.</td></tr>
 <tr><td><code>RightHandPinky1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right pinky 1 finger joint pose. </td></tr>
 <tr><td><code>RightHandPinky2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right pinky 2 finger joint pose. </td></tr>
 <tr><td><code>RightHandPinky3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right pinky 3 finger joint pose. </td></tr>
 <tr><td><code>RightHandPinky4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right pinky 4 finger joint pose. </td></tr>
 <tr><td colspan="4"><strong>Trackers</strong></td></tr>
 <tr><td><code>TrackedObject00</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 0 pose.</td></tr>
 <tr><td><code>TrackedObject01</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 1 pose.</td></tr>
 <tr><td><code>TrackedObject02</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 2 pose.</td></tr>
 <tr><td><code>TrackedObject03</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 3 pose.</td></tr>
 <tr><td><code>TrackedObject04</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 4 pose.</td></tr>
 <tr><td><code>TrackedObject05</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 5 pose.</td></tr>
 <tr><td><code>TrackedObject06</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 6 pose.</td></tr>
 <tr><td><code>TrackedObject07</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 7 pose.</td></tr>
 <tr><td><code>TrackedObject08</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 8 pose.</td></tr>
 <tr><td><code>TrackedObject09</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 9 pose.</td></tr>
 <tr><td><code>TrackedObject10</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 10 pose.</td></tr>
 <tr><td><code>TrackedObject11</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 11 pose.</td></tr>
 <tr><td><code>TrackedObject12</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 12 pose.</td></tr>
 <tr><td><code>TrackedObject13</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 13 pose.</td></tr>
 <tr><td><code>TrackedObject14</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 14 pose.</td></tr>
 <tr><td><code>TrackedObject15</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 15 pose.</td></tr>
 </tbody>
 </table></div>

</div>

<div class="api-entry">

### MappingJSON {#MappingJSON}

<div class="api-text" v-pre><p>A <a href="MappingObject"><code>MappingObject</code></a> can be specified in JSON format. A simple example is provided below. Full examples — the default mappings provided in Interface — can be found at <a href="https://github.com/highfidelity/hifi/tree/master/interface/resources/controllers" target="_blank" rel="noopener"> https://github.com/highfidelity/hifi/tree/master/interface/resources/controllers</a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the mapping.</p></td></tr>
<tr><td><code>channels</code></td><td>Array&lt;<a href="#MappingJSONRoute">Controller.MappingJSONRoute</a>&gt;</td><td><p>An array of routes.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>A simple mapping JSON that makes the right trigger move your avatar up after a dead zone.</p></div>

```js
{
    "name": "com.highfidelity.controllers.example.jsonMapping",
    "channels": [
        { 
            "from": "Standard.RT", 
            "filters": { "type": "deadZone", "min": 0.05 },
            "to": "Actions.TranslateY"
        }
    ]
}
```

</div>

<div class="api-entry">

### MappingJSONAxis {#MappingJSONAxis}

<div class="api-text" v-pre><p>An axis pair in a <a href="#MappingJSONRoute"><code>Controller.MappingJSONRoute</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>makeAxis</code></td><td>Array&lt;Array&lt;string&gt;&gt;</td><td><p>A two-member array of single-member arrays of <a href="#Hardware"><code>Controller.Hardware</code></a> property names. The leading <code>"Controller.Hardware."</code> can be omitted from the property names.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>An axis using the keyboard's left and right keys.</p></div>

```js
{ "makeAxis" : [
        ["Keyboard.Left"],
        ["Keyboard.Right"]
    ]
}
```

</div>

<div class="api-entry">

### MappingJSONFilter {#MappingJSONFilter}

<div class="api-text" v-pre><p>A filter in a <a href="#MappingJSONRoute"><code>Controller.MappingJSONRoute</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>string</td><td><p>The name of the filter, being the name of the one of the <a href="RouteObject"><code>RouteObject</code></a>'s filter methods.</p></td></tr>
<tr><td><code>?</code> <em>optional</em></td><td>string</td><td><p>If the filter method has a first parameter, the property name is the name of that parameter and the property value is the value to use.</p></td></tr>
<tr><td><code>?</code> <em>optional</em></td><td>string</td><td><p>If the filter method has a second parameter, the property name is the name of that parameter and the property value is the value to use.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>A hysteresis filter.</p></div>

```js
{ 
    "type": "hysteresis", 
    "min": 0.85, 
    "max": 0.9
}
```

</div>

<div class="api-entry">

### MappingJSONRoute {#MappingJSONRoute}

<div class="api-text" v-pre><p>A route in a <a href="#MappingJSON"><code>Controller.MappingJSON</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>from</code></td><td>string | <a href="#MappingJSONAxis">Controller.MappingJSONAxis</a></td><td></td><td><p>The name of a <a href="#Hardware"><code>Controller.Hardware</code></a> property or an axis made from them. If a property name, the leading <code>"Controller.Hardware."</code> can be omitted.</p></td></tr>
<tr><td><code>peek</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>If <code>true</code>, then peeking is enabled per <a href="RouteObject#peek"><code>RouteObject#peek</code></a>.</p></td></tr>
<tr><td><code>debug</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>If <code>true</code>, then debug is enabled per <a href="RouteObject#debug"><code>RouteObject#debug</code></a>.</p></td></tr>
<tr><td><code>when</code> <em>optional</em></td><td>string | Array&lt;string&gt;</td><td><code>[]</code></td><td><p>One or more numeric <a href="#Hardware"><code>Controller.Hardware</code></a> property names which are evaluated as booleans and ANDed together. Prepend a property name with a <code>!</code> to do a logical NOT. The leading <code>"Controller.Hardware."</code> can be omitted from the property names.</p></td></tr>
<tr><td><code>filters</code> <em>optional</em></td><td><a href="#MappingJSONFilter">Controller.MappingJSONFilter</a> | Array&lt;<a href="#MappingJSONFilter">Controller.MappingJSONFilter</a>&gt;</td><td><code>[]</code></td><td><p>One or more filters in the route.</p></td></tr>
<tr><td><code>to</code></td><td>string</td><td></td><td><p>The name of a <a href="#Actions"><code>Controller.Actions</code></a> or <a href="#Standard"><code>Controller.Standard</code></a> property. The leading <code>"Controller."</code> can be omitted.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### Standard {#Standard}

<div class="api-text" v-pre><p>The <code>Controller.Standard</code> object has properties representing standard controller outputs. Those for physical controllers are based on the XBox controller, with aliases for PlayStation. The property values are integer IDs, uniquely identifying each output. <em>Read-only.</em></p>
 <p>These outputs can be mapped to actions or functions in a <a href="RouteObject"><code>RouteObject</code></a> mapping. The data value provided by each control is either a number or a <a href="globals#Pose"><code>Pose</code></a>. Numbers are typically normalized to <code>0.0</code> or <code>1.0</code> for button states, the range <code>0.0</code> – <code>1.0</code> for unidirectional scales, and the range <code>-1.0</code> – <code>1.0</code> for bidirectional scales.</p>
 <p>Each hardware device has a mapping from its outputs to a subset of <code>Controller.Standard</code> items, specified in a JSON file. For example, <a href="https://github.com/highfidelity/hifi/blob/master/interface/resources/controllers/vive.json" target="_blank" rel="noopener">vive.json</a> and <a href="https://github.com/highfidelity/hifi/blob/master/interface/resources/controllers/leapmotion.json" target="_blank" rel="noopener"> leapmotion.json</a>.</p>
 <p> </p>
<p></p>
<p> </p>
<p></p>
<p> </p>
<p></p>
<p> </p>
<p></p>
<p> </p>
<p></p>
<p> </p>
<p></p>
<p> </p>
<p></p>
<p> </p>
<table> <thead> <tr><th>Property</th><th>Type</th><th>Data</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td colspan="4"><strong>Buttons</strong></td></tr>
 <tr><td><code>A</code></td><td>number</td><td>number</td><td>"A" button pressed.</td></tr>
 <tr><td><code>B</code></td><td>number</td><td>number</td><td>"B" button pressed.</td></tr>
 <tr><td><code>X</code></td><td>number</td><td>number</td><td>"X" button pressed.</td></tr>
 <tr><td><code>Y</code></td><td>number</td><td>number</td><td>"Y" button pressed.</td></tr>
 <tr><td><code>DL</code></td><td>number</td><td>number</td><td>D-pad left pressed.</td></tr>
 <tr><td><code>DR</code></td><td>number</td><td>number</td><td>D-pad right pressed.</td></tr>
 <tr><td><code>DU</code></td><td>number</td><td>number</td><td>D-pad up pressed.</td></tr>
 <tr><td><code>DD</code></td><td>number</td><td>number</td><td>D-pad down pressed.</td></tr>
 <tr><td><code>Start</code></td><td>number</td><td>number</td><td>"Start" center button pressed.</td></tr>
 <tr><td><code>Back</code></td><td>number</td><td>number</td><td>"Back" center button pressed.</td></tr>
 <tr><td><code>LB</code></td><td>number</td><td>number</td><td>Left bumper button pressed.</td></tr>
 <tr><td><code>RB</code></td><td>number</td><td>number</td><td>Right bumper button pressed.</td></tr>
 <tr><td colspan="4"><strong>Sticks</strong></td></tr>
 <tr><td><code>LX</code></td><td>number</td><td>number</td><td>Left stick x-axis scale.</td></tr>
 <tr><td><code>LY</code></td><td>number</td><td>number</td><td>Left stick y-axis scale.</td></tr>
 <tr><td><code>RX</code></td><td>number</td><td>number</td><td>Right stick x-axis scale.</td></tr>
 <tr><td><code>RY</code></td><td>number</td><td>number</td><td>Right stick y-axis scale.</td></tr>
 <tr><td><code>LS</code></td><td>number</td><td>number</td><td>Left stick button pressed.</td></tr>
 <tr><td><code>RS</code></td><td>number</td><td>number</td><td>Right stick button pressed.</td></tr>
 <tr><td><code>LSTouch</code></td><td>number</td><td>number</td><td>Left stick is touched.</td></tr>
 <tr><td><code>RSTouch</code></td><td>number</td><td>number</td><td>Right stick is touched.</td></tr>
 <tr><td colspan="4"><strong>Triggers</strong></td></tr>
 <tr><td><code>LT</code></td><td>number</td><td>number</td><td>Left trigger scale.</td></tr>
 <tr><td><code>RT</code></td><td>number</td><td>number</td><td>Right trigger scale.</td></tr>
 <tr><td><code>LTClick</code></td><td>number</td><td>number</td><td>Left trigger click.</td></tr>
 <tr><td><code>RTClick</code></td><td>number</td><td>number</td><td>Right trigger click.</td></tr>
 <tr><td><code>LeftGrip</code></td><td>number</td><td>number</td><td>Left grip scale.</td></tr>
 <tr><td><code>RightGrip</code></td><td>number</td><td>number</td><td>Right grip scale.</td></tr>
 <tr><td><code>LeftGripTouch</code></td><td>number</td><td>number</td><td>Left grip is touched.</td></tr>
 <tr><td><code>RightGripTouch</code></td><td>number</td><td>number</td><td>Right grip is touched.</td></tr>
 <tr><td colspan="4"><strong>Aliases, PlayStation Style Names</strong></td></tr>
 <tr><td><code>Cross</code></td><td>number</td><td>number</td><td>Alias for <code>A</code>.</td></tr>
 <tr><td><code>Circle</code></td><td>number</td><td>number</td><td>Alias for <code>B</code>.</td></tr>
 <tr><td><code>Square</code></td><td>number</td><td>number</td><td>Alias for <code>X</code>.</td></tr>
 <tr><td><code>Triangle</code></td><td>number</td><td>number</td><td>Alias for <code>Y</code>.</td></tr>
 <tr><td><code>Left</code></td><td>number</td><td>number</td><td>Alias for <code>DL</code>.</td></tr>
 <tr><td><code>Right</code></td><td>number</td><td>number</td><td>Alias for <code>DR</code>.</td></tr>
 <tr><td><code>Up</code></td><td>number</td><td>number</td><td>Alias for <code>DU</code>.</td></tr>
 <tr><td><code>Down</code></td><td>number</td><td>number</td><td>Alias for <code>DD</code>.</td></tr>
 <tr><td><code>Select</code></td><td>number</td><td>number</td><td>Alias for <code>Back</code>.</td></tr>
 <tr><td><code>L1</code></td><td>number</td><td>number</td><td>Alias for <code>LB</code>.</td></tr>
 <tr><td><code>R1</code></td><td>number</td><td>number</td><td>Alias for <code>RB</code>.</td></tr>
 <tr><td><code>L3</code></td><td>number</td><td>number</td><td>Alias for <code>LS</code>.</td></tr>
 <tr><td><code>R3</code></td><td>number</td><td>number</td><td>Alias for <code>RS</code>.</td></tr>
 <tr><td><code>L2</code></td><td>number</td><td>number</td><td>Alias for <code>LT</code>.</td></tr>
 <tr><td><code>R2</code></td><td>number</td><td>number</td><td>Alias for <code>RT</code>.</td></tr>
 <tr><td colspan="4"><strong>Finger Abstractions</strong></td></tr>
 <tr><td><code>LeftPrimaryThumb</code></td><td>number</td><td>number</td><td>Left primary thumb button pressed.</td></tr>
 <tr><td><code>LeftSecondaryThumb</code></td><td>number</td><td>number</td><td>Left secondary thumb button pressed. </td></tr>
 <tr><td><code>RightPrimaryThumb</code></td><td>number</td><td>number</td><td>Right primary thumb button pressed. </td></tr>
 <tr><td><code>RightSecondaryThumb</code></td><td>number</td><td>number</td><td>Right secondary thumb button pressed. </td></tr>
 <tr><td><code>LeftPrimaryThumbTouch</code></td><td>number</td><td>number</td><td>Left thumb touching primary thumb button.</td></tr>
 <tr><td><code>LeftSecondaryThumbTouch</code></td><td>number</td><td>number</td><td>Left thumb touching secondary thumb button.</td></tr>
 <tr><td><code>LeftThumbUp</code></td><td>number</td><td>number</td><td>Left thumb not touching primary or secondary thumb buttons.</td></tr>
 <tr><td><code>RightPrimaryThumbTouch</code></td><td>number</td><td>number</td><td>Right thumb touching primary thumb button.</td></tr>
 <tr><td><code>RightSecondaryThumbTouch</code></td><td>number</td><td>number</td><td>Right thumb touching secondary thumb button.</td></tr>
 <tr><td><code>RightThumbUp</code></td><td>number</td><td>number</td><td>Right thumb not touching primary or secondary thumb buttons.</td></tr>
 <tr><td><code>LeftPrimaryIndex</code></td><td>number</td><td>number</td><td>Left primary index control pressed.</td></tr>
 <tr><td><code>LeftSecondaryIndex</code></td><td>number</td><td>number</td><td>Left secondary index control pressed. </td></tr>
 <tr><td><code>RightPrimaryIndex</code></td><td>number</td><td>number</td><td>Right primary index control pressed. </td></tr>
 <tr><td><code>RightSecondaryIndex</code></td><td>number</td><td>number</td><td>Right secondary index control pressed. </td></tr>
 <tr><td><code>LeftPrimaryIndexTouch</code></td><td>number</td><td>number</td><td>Left index finger is touching primary index finger control.</td></tr>
 <tr><td><code>LeftSecondaryIndexTouch</code></td><td>number</td><td>number</td><td>Left index finger is touching secondary index finger control.</td></tr>
 <tr><td><code>LeftIndexPoint</code></td><td>number</td><td>number</td><td>Left index finger is pointing, not touching primary or secondary index finger controls.</td></tr>
 <tr><td><code>RightPrimaryIndexTouch</code></td><td>number</td><td>number</td><td>Right index finger is touching primary index finger control.</td></tr>
 <tr><td><code>RightSecondaryIndexTouch</code></td><td>number</td><td>number</td><td>Right index finger is touching secondary index finger control.</td></tr>
 <tr><td><code>RightIndexPoint</code></td><td>number</td><td>number</td><td>Right index finger is pointing, not touching primary or secondary index finger controls.</td></tr>
 <tr><td colspan="4"><strong>Avatar Skeleton</strong></td></tr>
 <tr><td><code>Hips</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Hips pose.</td></tr>
 <tr><td><code>Spine2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Spine2 pose.</td></tr>
 <tr><td><code>Head</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Head pose.</td></tr>
 <tr><td><code>LeftArm</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left arm pose.</td></tr>
 <tr><td><code>RightArm</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right arm pose</td></tr>
 <tr><td><code>LeftHand</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left hand pose.</td></tr>
 <tr><td><code>LeftHandThumb1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left thumb 1 finger joint pose.</td></tr>
 <tr><td><code>LeftHandThumb2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left thumb 2 finger joint pose.</td></tr>
 <tr><td><code>LeftHandThumb3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left thumb 3 finger joint pose.</td></tr>
 <tr><td><code>LeftHandThumb4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left thumb 4 finger joint pose.</td></tr>
 <tr><td><code>LeftHandIndex1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left index 1 finger joint pose.</td></tr>
 <tr><td><code>LeftHandIndex2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left index 2 finger joint pose.</td></tr>
 <tr><td><code>LeftHandIndex3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left index 3 finger joint pose.</td></tr>
 <tr><td><code>LeftHandIndex4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left index 4 finger joint pose.</td></tr>
 <tr><td><code>LeftHandMiddle1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left middle 1 finger joint pose. </td></tr>
 <tr><td><code>LeftHandMiddle2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left middle 2 finger joint pose. </td></tr>
 <tr><td><code>LeftHandMiddle3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left middle 3 finger joint pose. </td></tr>
 <tr><td><code>LeftHandMiddle4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left middle 4 finger joint pose. </td></tr>
 <tr><td><code>LeftHandRing1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left ring 1 finger joint pose.</td></tr>
 <tr><td><code>LeftHandRing2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left ring 2 finger joint pose.</td></tr>
 <tr><td><code>LeftHandRing3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left ring 3 finger joint pose.</td></tr>
 <tr><td><code>LeftHandRing4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left ring 4 finger joint pose.</td></tr>
 <tr><td><code>LeftHandPinky1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left pinky 1 finger joint pose.</td></tr>
 <tr><td><code>LeftHandPinky2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left pinky 2 finger joint pose.</td></tr>
 <tr><td><code>LeftHandPinky3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left pinky 3 finger joint pose.</td></tr>
 <tr><td><code>LeftHandPinky4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left pinky 4 finger joint pose.</td></tr>
 <tr><td><code>RightHand</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right hand pose.</td></tr>
 <tr><td><code>RightHandThumb1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right thumb 1 finger joint pose. </td></tr>
 <tr><td><code>RightHandThumb2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right thumb 2 finger joint pose. </td></tr>
 <tr><td><code>RightHandThumb3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right thumb 3 finger joint pose. </td></tr>
 <tr><td><code>RightHandThumb4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right thumb 4 finger joint pose. </td></tr>
 <tr><td><code>RightHandIndex1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right index 1 finger joint pose. </td></tr>
 <tr><td><code>RightHandIndex2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right index 2 finger joint pose. </td></tr>
 <tr><td><code>RightHandIndex3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right index 3 finger joint pose. </td></tr>
 <tr><td><code>RightHandIndex4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right index 4 finger joint pose. </td></tr>
 <tr><td><code>RightHandMiddle1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right middle 1 finger joint pose. </td></tr>
 <tr><td><code>RightHandMiddle2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right middle 2 finger joint pose. </td></tr>
 <tr><td><code>RightHandMiddle3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right middle 3 finger joint pose. </td></tr>
 <tr><td><code>RightHandMiddle4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right middle 4 finger joint pose. </td></tr>
 <tr><td><code>RightHandRing1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right ring 1 finger joint pose.</td></tr>
 <tr><td><code>RightHandRing2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right ring 2 finger joint pose.</td></tr>
 <tr><td><code>RightHandRing3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right ring 3 finger joint pose.</td></tr>
 <tr><td><code>RightHandRing4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right ring 4 finger joint pose.</td></tr>
 <tr><td><code>RightHandPinky1</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right pinky 1 finger joint pose. </td></tr>
 <tr><td><code>RightHandPinky2</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right pinky 2 finger joint pose. </td></tr>
 <tr><td><code>RightHandPinky3</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right pinky 3 finger joint pose. </td></tr>
 <tr><td><code>RightHandPinky4</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right pinky 4 finger joint pose. </td></tr>
 <tr><td><code>LeftFoot</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Left foot pose.</td></tr>
 <tr><td><code>RightFoot</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Right foot pose.</td></tr>
 <tr><td colspan="4"><strong>Trackers</strong></td></tr>
 <tr><td><code>TrackedObject00</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 0 pose.</td></tr>
 <tr><td><code>TrackedObject01</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 1 pose.</td></tr>
 <tr><td><code>TrackedObject02</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 2 pose.</td></tr>
 <tr><td><code>TrackedObject03</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 3 pose.</td></tr>
 <tr><td><code>TrackedObject04</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 4 pose.</td></tr>
 <tr><td><code>TrackedObject05</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 5 pose.</td></tr>
 <tr><td><code>TrackedObject06</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 6 pose.</td></tr>
 <tr><td><code>TrackedObject07</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 7 pose.</td></tr>
 <tr><td><code>TrackedObject08</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 8 pose.</td></tr>
 <tr><td><code>TrackedObject09</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 9 pose.</td></tr>
 <tr><td><code>TrackedObject10</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 10 pose.</td></tr>
 <tr><td><code>TrackedObject11</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 11 pose.</td></tr>
 <tr><td><code>TrackedObject12</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 12 pose.</td></tr>
 <tr><td><code>TrackedObject13</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 13 pose.</td></tr>
 <tr><td><code>TrackedObject14</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 14 pose.</td></tr>
 <tr><td><code>TrackedObject15</code></td><td>number</td><td><a href="globals#Pose"><code>Pose</code></a></td><td>Tracker 15 pose.</td></tr>
 </tbody>
 </table>
<p></p></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### captureJoystick {#captureJoystick}

```js
Controller.captureJoystick(joystickID)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. It no longer has any effect.</p></div>
:::

<div class="api-text" v-pre><p>Disables default Interface actions for a joystick.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>joystickID</code></td><td>number</td><td><p>The integer ID of the joystick.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getAllActions {#getAllActions}

```js
Controller.getAllActions()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. It no longer works.</p></div>
:::

<div class="api-text" v-pre><p>Gets a list of all available actions.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;Action&gt; <p>All available actions.</p></div>

</div>

<div class="api-entry">

### getAvailableInputs {#getAvailableInputs}

```js
Controller.getAvailableInputs(deviceID)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. It no longer works.</p></div>
:::

<div class="api-text" v-pre><p>Gets a list of all available inputs for a hardware device.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deviceID</code></td><td>number</td><td><p>Integer ID of the hardware device.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;NamedPair&gt; <p>All available inputs for the device.</p></div>

</div>

<div class="api-entry">

### releaseJoystick {#releaseJoystick}

```js
Controller.releaseJoystick(joystickID)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. It no longer has any effect.</p></div>
:::

<div class="api-text" v-pre><p>Re-enables default Interface actions for a joystick that has been disabled using <a href="#captureJoystick">captureJoystick</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>joystickID</code></td><td>number</td><td><p>The integer ID of the joystick.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### updateRunningInputDevices {#updateRunningInputDevices}

```js
Controller.updateRunningInputDevices(deviceName, isRunning, runningDevices)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deviceName</code></td><td>string</td><td><p>Device name.</p></td></tr>
<tr><td><code>isRunning</code></td><td>boolean</td><td><p>Is running.</p></td></tr>
<tr><td><code>runningDevices</code></td><td>Array&lt;string&gt;</td><td><p>Running devices.</p></td></tr>
</tbody></table></div>

</div>
