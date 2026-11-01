---
title: "MappingObject"
description: "A Controller mapping object that can contain a set of routes that map: Controller.Standard outputs to Controller.Actions actions or script functions."
draft: true
---

# MappingObject

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>A <a href="Controller"><code>Controller</code></a> mapping object that can contain a set of routes that map:</p>
 <ul> <li><a href="Controller#Standard"><code>Controller.Standard</code></a> outputs to <a href="Controller#Actions"><code>Controller.Actions</code></a> actions or script functions.</li>
 <li><a href="Controller#Hardware"><code>Controller.Hardware</code></a> outputs to <a href="Controller#Standard"><code>Controller.Standard</code></a> outputs, <a href="Controller#Actions"><code>Controller.Actions</code></a> actions, or script functions.</li>
 </ul>
 <p>Create by one of the following methods:</p>
 <ul> <li>Use <a href="Controller#newMapping"><code>Controller.newMapping</code></a> to create the mapping object, add routes using <a href="#from">from</a> or <a href="#makeAxis">makeAxis</a>, and map the routes to actions or functions using <a href="RouteObject"><code>RouteObject</code></a> methods.</li>
 <li>Use <a href="Controller#parseMapping"><code>Controller.parseMapping</code></a> or <a href="Controller#loadMapping"><code>Controller.loadMapping</code></a> to load a <a href="Controller#MappingJSON"><code>Controller.MappingJSON</code></a>.</li>
 </ul>
 <p>Enable the mapping using <a href="#enable">enable</a> or <a href="Controller#enableMapping"><code>Controller.enableMapping</code></a> for it to take effect.</p>
 <p>Mappings and their routes are applied according to the following rules:</p>
 <ul> <li>One read per output: after a controller output has been read, it can't be read again. Exception: You can use <a href="RouteObject#peek"><code>RouteObject#peek</code></a> to read a value without marking that output as having been read.</li>
 <li>Existing mapping routes take precedence over new mapping routes: within a mapping, if a route is added for a control output that already has a route the new route is ignored.</li>
 <li>New mappings override previous mappings: each output is processed using the route in the most recently enabled mapping that contains that output.</li>
 </ul></div>

## Methods {#functions}

<div class="api-entry">

### disable {#disable}

```js
disable()
```

<div class="api-text" v-pre><p>Disables the mapping. When disabled, the routes in the mapping have no effect. </p>
<p>Synonymous with <a href="Controller#disableMapping"><code>Controller.disableMapping</code></a>.</p>
<p></p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">MappingObject</a> <p>The mapping object, so that further routes can be added.</p></div>

</div>

<div class="api-entry">

### enable {#enable}

```js
enable(enable)
```

<div class="api-text" v-pre><p>Enables or disables the mapping. When enabled, the routes in the mapping take effect. </p>
<p>Synonymous with <a href="Controller#enableMapping"><code>Controller.enableMapping</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>enable</code></td><td>boolean</td><td><code>true</code></td><td><p>If <code>true</code> then the mapping is enabled, otherwise it is disabled.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">MappingObject</a> <p>The mapping object, so that further routes can be added.</p></div>

</div>

<div class="api-entry">

### from {#from}

```js
from(source)
```

<div class="api-text" v-pre><p>Creates a new <a href="RouteObject"><code>RouteObject</code></a> from a controller output, ready to be mapped to a standard control, action, or function.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source</code></td><td><a href="Controller#Standard">Controller.Standard</a> | <a href="Controller#Hardware">Controller.Hardware</a> | function</td><td><p>The controller output or function that is the source of the route data. If a function, it must return a number or a <a href="globals#Pose"><code>Pose</code></a> value as the route data.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="RouteObject">RouteObject</a> <p>A route ready for mapping to an action or function using <a href="RouteObject"><code>RouteObject</code></a> methods.</p></div>

</div>

<div class="api-entry">

### fromQml {#fromQml}

```js
fromQml(source)
```

<div class="api-text" v-pre><p>Creates a new <a href="RouteObject"><code>RouteObject</code></a> from a controller output, ready to be mapped to a standard control, action, or function. </p>
<p>This is a QML-specific version of <a href="#from">from</a>: use this version in QML files.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source</code></td><td><a href="Controller#Standard">Controller.Standard</a> | <a href="Controller#Hardware">Controller.Hardware</a> | function</td><td><p>The controller output or function that is the source of the route data. If a function, it must return a number or a <a href="globals#Pose"><code>Pose</code></a> value as the route data.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="RouteObject">RouteObject</a> <p>A route ready for mapping to an action or function using <a href="RouteObject"><code>RouteObject</code></a> methods.</p></div>

</div>

<div class="api-entry">

### makeAxis {#makeAxis}

```js
makeAxis(source1, source2)
```

<div class="api-text" v-pre><p>Creates a new <a href="RouteObject"><code>RouteObject</code></a> from two numeric <a href="Controller#Hardware"><code>Controller.Hardware</code></a> outputs, one applied in the negative direction and the other in the positive direction, ready to be mapped to a standard control, action, or function.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source1</code></td><td><a href="Controller#Hardware">Controller.Hardware</a></td><td><p>The first, negative-direction controller output.</p></td></tr>
<tr><td><code>source2</code></td><td><a href="Controller#Hardware">Controller.Hardware</a></td><td><p>The second, positive-direction controller output.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="RouteObject">RouteObject</a> <p>A route ready for mapping to an action or function using <a href="RouteObject"><code>RouteObject</code></a> methods. The data value passed to the route is the combined value of <code>source2 - source1</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Make the Oculus Touch triggers move your avatar up and down.</p></div>

```js
var MAPPING_NAME = "com.highfidelity.controllers.example.newMapping";
var mapping = Controller.newMapping(MAPPING_NAME);
mapping
    .makeAxis(Controller.Hardware.OculusTouch.LT, Controller.Hardware.OculusTouch.RT)
    .to(Controller.Actions.Up);
Controller.enableMapping(MAPPING_NAME);

Script.scriptEnding.connect(function () {
    Controller.disableMapping(MAPPING_NAME);
});
```

</div>

<div class="api-entry">

### makeAxisQml {#makeAxisQml}

```js
makeAxisQml(source1, source2)
```

<div class="api-text" v-pre><p>Creates a new <a href="RouteObject"><code>RouteObject</code></a> from two numeric <a href="Controller#Hardware"><code>Controller.Hardware</code></a> outputs, one applied in the negative direction and the other in the positive direction, ready to be mapped to a standard control, action, or function. </p>
<p>This is a QML-specific version of <a href="#makeAxis">makeAxis</a>: use this version in QML files.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source1</code></td><td><a href="Controller#Hardware">Controller.Hardware</a></td><td><p>The first, negative-direction controller output.</p></td></tr>
<tr><td><code>source2</code></td><td><a href="Controller#Hardware">Controller.Hardware</a></td><td><p>The second, positive-direction controller output.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="RouteObject">RouteObject</a> <p>A route ready for mapping to an action or function using <a href="RouteObject"><code>RouteObject</code></a> methods. The data value passed to the route is the combined value of <code>source2 - source1</code>.</p></div>

</div>
