---
title: "RouteObject"
description: "A route in a MappingObject used by the Controller API."
---

# RouteObject

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>A route in a <a href="MappingObject"><code>MappingObject</code></a> used by the <a href="Controller"><code>Controller</code></a> API.</p>
 <p>Create a route using <a href="MappingObject"><code>MappingObject</code></a> methods and apply this object's methods to process it, terminating with <a href="#to"><code>RouteObject#to</code></a> to apply it to a <code>Standard</code> control, action, or script function. Note: Loops are not permitted.</p>
 <p>Some methods apply to routes with number data, some apply routes with <a href="globals#Pose"><code>Pose</code></a> data, and some apply to both route types.</p>
<p></p></div>

## Methods {#functions}

<div class="api-entry">

### clamp {#clamp}

```js
clamp(min, max)
```

<div class="api-text" v-pre><p>Filters numeric route values to lie between two values; values outside this range are not passed on through the route.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>min</code></td><td>number</td><td><p>The minimum value to pass through.</p></td></tr>
<tr><td><code>max</code></td><td>number</td><td><p>The maximum value to pass through.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The route object with the clamp filter added.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Clamp right trigger values to between 0.3 and 0.7.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);
mapping.from(Controller.Standard.RT).clamp(0.3, 0.7).to(function (value) {
    print("Value: " + value);
});
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### constrainToInteger {#constrainToInteger}

```js
constrainToInteger()
```

<div class="api-text" v-pre><p>Filters numeric route values such that they are rounded to <code>-1</code>, <code>0</code>, or <code>1</code>. For example, this enables you to use an analog input as if it were a toggle or, in the case of a bidirectional axis, a tri-state switch.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the filter applied.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Round the right joystick forward/back values to <code>-1</code>, <code>0</code>, or <code>1</code>.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);
mapping.from(Controller.Standard.RY).constrainToInteger().to(function (value) {
    print("Value: " + value);  // -1, 0, or 1
});
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### constrainToPositiveInteger {#constrainToPositiveInteger}

```js
constrainToPositiveInteger()
```

<div class="api-text" v-pre><p>Filters numeric route values such that they are rounded to <code>0</code> or <code>1</code>. For example, this enables you to use an analog input as if it were a toggle.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the filter applied.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Round the right joystick forward/back values to <code>0</code> or <code>1</code>.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);
mapping.from(Controller.Standard.RY).constrainToPositiveInteger().to(function (value) {
    print("Value: " + value);  // 0, or 1
});
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### deadZone {#deadZone}

```js
deadZone(min)
```

<div class="api-text" v-pre><p>Filters numeric route values such that they're sent only when the input value is outside a dead-zone. When the input passes the dead-zone value, output is sent starting at <code>0.0</code> and catching up with the input value. As the input returns toward the dead-zone value, output values reduce to <code>0.0</code> at the dead-zone value.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>min</code></td><td>number</td><td><p>The minimum input value at which to start sending output. For negative input values, the negative of this value is used.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the filter applied.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Apply a dead-zone to the right joystick forward/back values.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);
mapping.from(Controller.Standard.RY).deadZone(0.2).to(function (value) {
    print("Value: " + value);  // 0.0 - 1.0 values once outside the dead-zone.
});
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### debug {#debug}

```js
debug(enable?)
```

<div class="api-text" v-pre><p>Enables or disables writing debug information for a route to the program log.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p>If <code>true</code> then writing debug information is enabled for the route, otherwise it is disabled.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with debug output enabled or disabled.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Write debug information to the program log for a right trigger mapping.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);

mapping.from(Controller.Standard.RT).debug().to(function (value) {
    print("Value: " + value);
});

// Information similar to the following is written each frame:
[DEBUG] [hifi.controllers] Beginning mapping frame
[DEBUG] [hifi.controllers] Processing device routes
[DEBUG] [hifi.controllers] Processing standard routes
[DEBUG] [hifi.controllers] Applying route  ""
[DEBUG] [hifi.controllers] Value was  5.96046e-07
[DEBUG] [hifi.controllers] Filtered value was  5.96046e-07

Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### exponentialSmoothing {#exponentialSmoothing}

```js
exponentialSmoothing(rotationConstant, translationConstant)
```

<div class="api-text" v-pre><p>Filters <a href="globals#Pose"><code>Pose</code></a> route values to be smoothed by an exponential decay filter. The filter's rotation and translation values are calculated as: <code>filterConstant * currentValue + (1 - filterConstant) * previousValue</code>. Values near 1 are less smooth with lower latency; values near 0 are more smooth with higher latency.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>rotationConstant</code></td><td>number</td><td><p>Rotation filter constant, <code>0.0–1.0</code>.</p></td></tr>
<tr><td><code>translationConstant</code></td><td>number</td><td><p>Translation filter constant, <code>0.0–1.0</code>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> smoothed by an exponential filter.</p></div>

</div>

<div class="api-entry">

### hysteresis {#hysteresis}

```js
hysteresis(min, max)
```

<div class="api-text" v-pre><p>Filters numeric route values such that they are rounded to <code>0</code> or <code>1</code> without output values flickering when the input value hovers around <code>0.5</code>. For example, this enables you to use an analog input as if it were a toggle.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>min</code></td><td>number</td><td><p>When the input value drops below this value the output value changes to <code>0</code>.</p></td></tr>
<tr><td><code>max</code></td><td>number</td><td><p>When the input value rises above this value the output value changes to <code>1</code>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the filter applied.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Round the right joystick forward/back values to 0 or 1 with hysteresis.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);
mapping.from(Controller.Standard.RY).peek().to(function (value) {
    print("Raw value: " + value);  // 0.0 - 1.0.
});
mapping.from(Controller.Standard.RY).hysteresis(0.3, 0.7).to(function (value) {
    print("Hysteresis value: " + value);  // 0 or 1.
});
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### invert {#invert}

```js
invert()
```

<div class="api-text" v-pre><p>Filters numeric and <a href="globals#Pose"><code>Pose</code></a> route values to have the opposite sign, e.g., <code>0.5</code> is changed to <code>-0.5</code>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the filter applied.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Invert the value of the right joystick forward/back values.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);
mapping.from(Controller.Standard.LY).to(function (value) {
    print("L value: " + value);  // -1.0 to 1.0 values, forward to back.
});
mapping.from(Controller.Standard.RY).invert().to(function (value) {
    print("R value: " + value);  // 1.0 to -1.0 values, forward to back.
});
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### logicalNot {#logicalNot}

```js
logicalNot()
```

<div class="api-text" v-pre><p>Filters numeric route values such that a value of <code>0.0</code> is changed to <code>1.0</code>, and other values are changed to <code>0.0</code>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the filter applied.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Logical NOT of LSTouch value.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);

mapping.from(Controller.Standard.RSTouch).peek().to(function (value) {
    print("RSTouch: " + value);
});
mapping.from(Controller.Standard.RSTouch).logicalNot().to(function (value) {
    print("localNot of RSTouch: " + value);
});
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### lowVelocity {#lowVelocity}

```js
lowVelocity(rotationConstant, translationConstant)
```

<div class="api-text" v-pre><p>Filters <a href="globals#Pose"><code>Pose</code></a> route values to be smoothed by a low velocity filter. The filter's rotation and translation values are calculated as: <code>(1 - f) * currentValue + f * previousValue</code> where <code>f = currentVelocity / filterConstant</code>. At low velocities, the filter value is largely the previous value; at high velocities the value is wholly the current controller value.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>rotationConstant</code></td><td>number</td><td><p>The rotational velocity, in rad/s, at which the filter value is wholly the latest controller value.</p></td></tr>
<tr><td><code>translationConstant</code></td><td>number</td><td><p>The linear velocity, in m/s, at which the filter value is wholly the latest controller value.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> smoothed by low velocity filtering.</p></div>

</div>

<div class="api-entry">

### peek {#peek}

```js
peek(enable?)
```

<div class="api-text" v-pre><p>Processes the route without marking the controller output as having been read, so that other routes from the same controller output can also process.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p>If <code>true</code> then the route is processed without marking the route's controller source as having been read.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the peek feature enabled.</p></div>

</div>

<div class="api-entry">

### postTransform {#postTransform}

```js
postTransform(transform)
```

<div class="api-text" v-pre><p>Filters <a href="globals#Pose"><code>Pose</code></a> route values to have a post-transform applied.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>transform</code></td><td><a href="Mat4">Mat4</a></td><td><p>The post-transform to apply.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the post-transform applied.</p></div>

</div>

<div class="api-entry">

### pulse {#pulse}

```js
pulse(interval)
```

<div class="api-text" v-pre><p>Filters numeric route values to send at a specified interval.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>interval</code></td><td>number</td><td><p>The interval between sending values, in seconds.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the filter applied.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Send right trigger values every half second.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);
mapping.from(Controller.Standard.RT).pulse(0.5).to(function (value) {
    print("Value: " + value);
});
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### rotate {#rotate}

```js
rotate(rotation)
```

<div class="api-text" v-pre><p>Filters <a href="globals#Pose"><code>Pose</code></a> route values to have a pre-rotation applied.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>rotation</code></td><td><a href="Quat">Quat</a></td><td><p>The pre-rotation to add to the pose.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the pre-rotation applied.</p></div>

</div>

<div class="api-entry">

### scale {#scale}

```js
scale(multiplier)
```

<div class="api-text" v-pre><p>Filters numeric and <a href="globals#Pose"><code>Pose</code></a> route values to be scaled by a constant amount.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>multiplier</code></td><td>number</td><td><p>The scale to multiply the value by.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the filter applied.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Scale the value of the right joystick forward/back values by 10.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);
mapping.from(Controller.Standard.LY).to(function (value) {
    print("L value: " + value);  // -1.0 to 1.0 values.
});
mapping.from(Controller.Standard.RY).scale(10.0).to(function (value) {
    print("R value: " + value);  // -10.0 to -10.0 values.
});
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### to {#to}

```js
to(destination)
```

<div class="api-text" v-pre><p>Terminates the route with a standard control, an action, or a script function. The output value from the route is sent to the specified destination.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>destination</code></td><td><a href="Controller#Standard">Controller.Standard</a> | <a href="Controller#Actions">Controller.Actions</a> | function</td><td><p>The standard control, action, or JavaScript function that the route output is mapped to. For a function, the parameter can be either the name of the function or an in-line function definition.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Make the right trigger move your avatar up.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);

mapping.from(Controller.Standard.RT).to(Controller.Actions.TranslateY);
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

<div class="api-example" v-pre><strong>Example:</strong> <p>Make the right trigger call a function.</p></div>

```js
function onRightTrigger(value) {
    print("Trigger value: " + value);
}

var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);

mapping.from(Controller.Standard.RT).to(onRightTrigger);
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### toQml {#toQml}

```js
toQml(destination)
```

<div class="api-text" v-pre><p>Terminates the route with a standard control, an action, or a script function. The output value from the route is sent to the specified destination. </p>
<p>This is a QML-specific version of to: use this version in QML files.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>destination</code></td><td><a href="Controller#Standard">Controller.Standard</a> | <a href="Controller#Actions">Controller.Actions</a> | function</td><td><p>The standard control, action, or JavaScript function that the route output is mapped to. For a function, the parameter can be either the name of the function or an in-line function definition.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### transform {#transform}

```js
transform(transform)
```

<div class="api-text" v-pre><p>Filters <a href="globals#Pose"><code>Pose</code></a> route values to have a pre-transform applied.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>transform</code></td><td><a href="Mat4">Mat4</a></td><td><p>The pre-transform to apply.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the pre-transform applied.</p></div>

</div>

<div class="api-entry">

### translate {#translate}

```js
translate(translate)
```

<div class="api-text" v-pre><p>Filters <a href="globals#Pose"><code>Pose</code></a> route values to have a pre-translation applied.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>translate</code></td><td><a href="Vec3">Vec3</a></td><td><p>The pre-translation to add to the pose.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the pre-translation applied.</p></div>

</div>

<div class="api-entry">

### when {#when}

```js
when(expression)
```

<div class="api-text" v-pre><p>Processes the route only if a condition is satisfied. The condition is evaluated before the route input is read, and the input is read only if the condition is <code>true</code>. Thus, if the condition is not met then subsequent routes using the same input are processed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>expression</code></td><td>condition | Array&lt;condition&gt;</td><td><p>A <code>condition</code> may be a:</p>
 <ul> <li>A numeric <a href="Controller#Hardware"><code>Controller.Hardware</code></a> property, which is evaluated as a boolean.</li>
 <li><code>!</code> followed by a <a href="Controller#Hardware"><code>Controller.Hardware</code></a> property to use the logical NOT of the property value.</li>
 <li>A script function returning a boolean value. This can be either the name of the function or an in-line definition.</li>
 </ul>
 <p>If an array of conditions is provided, their values are ANDed together.</p>
 <p><strong>Warning:</strong> The use of <code>!</code> is not currently supported in JavaScript <code>.when()</code> calls.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the condition added.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Process the right trigger differently in HMD and desktop modes.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);

// Processed only if in HMD mode.
mapping.from(Controller.Standard.RT)
    .when(Controller.Hardware.Application.InHMD)
    .to(function () { print("Trigger pressed in HMD mode."); });

// Processed only if previous route not processed.
mapping.from(Controller.Standard.RT)
    .to(function () { print("Trigger pressed in desktop mode."); });

Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### whenQml {#whenQml}

```js
whenQml(expression)
```

<div class="api-text" v-pre><p>Processes the route only if a condition is satisfied. The condition is evaluated before the route input is read, and the input is read only if the condition is <code>true</code>. Thus, if the condition is not met then subsequent routes using the same input are processed. </p>
<p>This is a QML-specific version of when: use this version in QML files.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>expression</code></td><td>condition | Array&lt;condition&gt;</td><td><p>A <code>condition</code> may be a:</p>
 <ul> <li>A boolean or numeric <a href="Controller#Hardware"><code>Controller.Hardware</code></a> property, which is evaluated as a boolean.</li>
 <li><code>!</code> followed by a <a href="Controller#Hardware"><code>Controller.Hardware</code></a> property, indicating the logical NOT should be used.</li>
 <li>A script function returning a boolean value. This can be either the name of the function or an in-line definition.</li>
 </ul>
 <p>If an array of conditions is provided, their values are ANDed together.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">RouteObject</a> <p>The <code>RouteObject</code> with the condition added.</p></div>

</div>
