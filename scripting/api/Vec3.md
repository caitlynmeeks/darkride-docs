---
title: "Vec3"
description: "The Vec3 API provides facilities for generating and manipulating 3-dimensional vectors."
---

# Vec3

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>The <code>Vec3</code> API provides facilities for generating and manipulating 3-dimensional vectors. Darkride uses a right-handed Cartesian coordinate system where the y-axis is the "up" and the negative z-axis is the "front" direction.</p></div>

## The Vec3 type {#type}

<div class="api-text" v-pre><p>A 3-dimensional vector. See also the <a href="">Vec3</a> object.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>X-coordinate of the vector. Synonyms: <code>r</code>, <code>red</code>.</p></td></tr>
<tr><td><code>y</code></td><td>number</td><td><p>Y-coordinate of the vector. Synonyms: <code>g</code>, <code>green</code>.</p></td></tr>
<tr><td><code>z</code></td><td>number</td><td><p>Z-coordinate of the vector. Synonyms: <code>b</code>, <code>blue</code>.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Vec3 values can be set in multiple ways and modified with their aliases, but still stringify in the same way.</p></div>

```js
Entities.editEntity(<id>, { position: { x: 1, y: 2, z: 3 }});                 // { x: 1, y: 2, z: 3 }
Entities.editEntity(<id>, { position: { r: 4, g: 5, b: 6 }});                 // { x: 4, y: 5, z: 6 }
Entities.editEntity(<id>, { position: { red: 7, green: 8, blue: 9 }});        // { x: 7, y: 8, z: 9 }
Entities.editEntity(<id>, { position: [10, 11, 12] });                        // { x: 10, y: 11, z: 12 }
Entities.editEntity(<id>, { position: 13 });                                  // { x: 13, y: 13, z: 13 }
var position = Entities.getEntityProperties(<id>).position;                   // { x: 13, y: 13, z: 13 }
position.g = 14;                                                              // { x: 13, y: 14, z: 13 }
position.blue = 15;                                                           // { x: 13, y: 14, z: 15 }
Entities.editEntity(<id>, { position: "red"});                                // { x: 255, y: 0, z: 0 }
Entities.editEntity(<id>, { position: "#00FF00"});                            // { x: 0, y: 255, z: 0 }
```

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>UNIT_X</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 1, y: 0, z: 0 }</code> : Unit vector in the x-axis direction. <em>Read-only.</em></p></td></tr>
<tr><td><code>UNIT_Y</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0, y: 1, z: 0 }</code> : Unit vector in the y-axis direction. <em>Read-only.</em></p></td></tr>
<tr><td><code>UNIT_Z</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0, y: 0, z: 1 }</code> : Unit vector in the z-axis direction. <em>Read-only.</em></p></td></tr>
<tr><td><code>UNIT_NEG_X</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: -1, y: 0, z: 0 }</code> : Unit vector in the negative x-axis direction. <em>Read-only.</em></p></td></tr>
<tr><td><code>UNIT_NEG_Y</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0, y: -1, z: 0 }</code> : Unit vector in the negative y-axis direction. <em>Read-only.</em></p></td></tr>
<tr><td><code>UNIT_NEG_Z</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0, y: 0, z: -1 }</code> : Unit vector in the negative z-axis direction. <em>Read-only.</em></p></td></tr>
<tr><td><code>UNIT_XY</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0.707107, y: 0.707107, z: 0 }</code> : Unit vector in the direction of the diagonal between the x and y axes. <em>Read-only.</em></p></td></tr>
<tr><td><code>UNIT_XZ</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0.707107, y: 0, z: 0.707107 }</code> : Unit vector in the direction of the diagonal between the x and z axes. <em>Read-only.</em></p></td></tr>
<tr><td><code>UNIT_YZ</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0, y: 0.707107, z: 0.707107 }</code> : Unit vector in the direction of the diagonal between the y and z axes. <em>Read-only.</em></p></td></tr>
<tr><td><code>UNIT_XYZ</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0.577350, y: 0.577350, z: 0.577350 }</code> : Unit vector in the direction of the diagonal between the x, y, and z axes. <em>Read-only.</em></p></td></tr>
<tr><td><code>FLOAT_MAX</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 3.402823e+38, y: 3.402823e+38, z: 3.402823e+38 }</code> : Vector with all axis values set to the maximum floating point value. <em>Read-only.</em></p></td></tr>
<tr><td><code>FLOAT_MIN</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: -3.402823e+38, y: -3.402823e+38, z: -3.402823e+38 }</code> : Vector with all axis values set to the negative of the maximum floating point value. <em>Read-only.</em></p></td></tr>
<tr><td><code>ZERO</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0, y: 0, z: 0 }</code> : Vector with all axis values set to <code>0</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>ONE</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 1, y: 1, z: 1 }</code> : Vector with all axis values set to <code>1</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>TWO</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 2, y: 2, z: 2 }</code> : Vector with all axis values set to <code>2</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>HALF</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0.5, y: 0.5, z: 0.5 }</code> : Vector with all axis values set to <code>0.5</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>RIGHT</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 1, y: 0, z: 0 }</code> : Unit vector in the "right" direction. Synonym for <code>UNIT_X</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>UP</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0, y: 1, z: 0 }</code> : Unit vector in the "up" direction. Synonym for <code>UNIT_Y</code>. <em>Read-only.</em></p></td></tr>
<tr><td><code>FRONT</code></td><td><a href="">Vec3</a></td><td><p><code>{ x: 0, y: 0, z: -1 }</code> : Unit vector in the "front" direction. Synonym for <code>UNIT_NEG_Z</code>. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### cross {#cross}

```js
Vec3.cross(v1, v2)
```

<div class="api-text" v-pre><p>Calculates the cross product of two vectors.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v1</code></td><td><a href="">Vec3</a></td><td><p>The first vector.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="">Vec3</a></td><td><p>The second vector.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>The cross product of <code>v1</code> and <code>v2</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>The cross product of x and y unit vectors is the z unit vector.</p></div>

```js
var v1 = { x: 1, y: 0, z: 0 };
var v2 = { x: 0, y: 1, z: 0 };
var crossProduct = Vec3.cross(v1, v2);
print(JSON.stringify(crossProduct)); // {"x":0,"y":0,"z":1}
```

</div>

<div class="api-entry">

### distance {#distance}

```js
Vec3.distance(p1, p2)
```

<div class="api-text" v-pre><p>Calculates the distance between two points.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>p1</code></td><td><a href="">Vec3</a></td><td><p>The first point.</p></td></tr>
<tr><td><code>p2</code></td><td><a href="">Vec3</a></td><td><p>The second point.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The distance between the two points.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>The distance between two points is aways positive.</p></div>

```js
var p1 = { x: 0, y: 0, z: 0 };
var p2 = { x: 0, y: 0, z: 10 };
var distance = Vec3.distance(p1, p2);
print(distance); // 10

p2 = { x: 0, y: 0, z: -10 };
distance = Vec3.distance(p1, p2);
print(distance); // 10
```

</div>

<div class="api-entry">

### dot {#dot}

```js
Vec3.dot(v1, v2)
```

<div class="api-text" v-pre><p>Calculates the dot product of two vectors.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v1</code></td><td><a href="">Vec3</a></td><td><p>The first vector.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="">Vec3</a></td><td><p>The second vector.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The dot product of <code>v1</code> and <code>v2</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>The dot product of vectors at right angles is <code>0</code>.</p></div>

```js
var v1 = { x: 1, y: 0, z: 0 };
var v2 = { x: 0, y: 1, z: 0 };
var dotProduct = Vec3.dot(v1, v2);
print(dotProduct); // 0
```

</div>

<div class="api-entry">

### equal {#equal}

```js
Vec3.equal(v1, v2)
```

<div class="api-text" v-pre><p>Tests whether two vectors are equal. </p>
<p><strong>Note:</strong> The vectors must be exactly equal in order for <code>true</code> to be returned; it is often better to use <a href="#withinEpsilon">withinEpsilon</a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v1</code></td><td><a href="">Vec3</a></td><td><p>The first vector.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="">Vec3</a></td><td><p>The second vector.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the two vectors are exactly equal, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p> Vectors are only equal if exactly the same.</p></div>

```js
var v1 = { x: 10, y: 10, z: 10 };
var v2 = { x: 10, y: 10, z: 10 };

var equal = Vec3.equal(v1, v2);
print(equal);  // true

v2 = { x: 10, y: 10, z: 10.0005 };
equal = Vec3.equal(v1, v2);
print(equal);  // false
```

</div>

<div class="api-entry">

### fromPolar {#fromPolar}

```js
Vec3.fromPolar(polar)
```

<div class="api-text" v-pre><p>Calculates the coordinates of a point from polar coordinate transformation of the unit z-axis vector.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>polar</code></td><td><a href="">Vec3</a></td><td><p>The polar coordinates of a point: <code>x</code> elevation rotation about the x-axis in radians, <code>y</code> azimuth rotation about the y-axis in radians, and <code>z</code> radius.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>The coordinates of the point.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Polar coordinates to Cartesian.</p></div>

```js
var polar = { x: -19.471 * Math.PI / 180, y: 45 * Math.PI / 180, z: 7.5 };
var p = Vec3.fromPolar(polar);
print(JSON.stringify(p));  // {"x":5,"y":2.5,"z":5}
```

</div>

<div class="api-entry">

### fromPolar {#fromPolar-2}

```js
Vec3.fromPolar(elevation, azimuth)
```

<div class="api-text" v-pre><p>Calculates the unit vector corresponding to polar coordinates elevation and azimuth transformation of the unit z-axis vector.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>elevation</code></td><td>number</td><td><p>Rotation about the x-axis, in radians.</p></td></tr>
<tr><td><code>azimuth</code></td><td>number</td><td><p>Rotation about the y-axis, in radians.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>Unit vector for the direction specified by <code>elevation</code> and <code>azimuth</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Polar coordinates to Cartesian coordinates.</p></div>

```js
var elevation = -19.471 * Math.PI / 180;
var rotation = 45 * Math.PI / 180;
var p = Vec3.fromPolar(elevation, rotation);
print(JSON.stringify(p));  // {"x":0.667,"y":0.333,"z":0.667}
p = Vec3.multiply(7.5, p);
print(JSON.stringify(p));  // {"x":5,"y":2.5,"z":5}
```

</div>

<div class="api-entry">

### getAngle {#getAngle}

```js
Vec3.getAngle(v1, v2)
```

<div class="api-text" v-pre><p>Calculates the angle between two vectors.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v1</code></td><td><a href="">Vec3</a></td><td><p>The first vector.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="">Vec3</a></td><td><p>The second vector.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The angle between the two vectors, in radians.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Calculate the angle between two vectors.</p></div>

```js
var v1 = { x: 10, y: 0, z: 0 };
var v2 = { x: 0, y: 0, z: 10 };
var angle = Vec3.getAngle(v1, v2);
print(angle * 180 / Math.PI);  // 90
```

</div>

<div class="api-entry">

### length {#length}

```js
Vec3.length(v)
```

<div class="api-text" v-pre><p>Calculates the length of a vector</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v</code></td><td><a href="">Vec3</a></td><td><p>The vector.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The length of the vector.</p></div>

</div>

<div class="api-entry">

### mix {#mix}

```js
Vec3.mix(v1, v2, factor)
```

<div class="api-text" v-pre><p>Calculates a linear interpolation between two vectors.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v1</code></td><td><a href="">Vec3</a></td><td><p>The first vector.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="">Vec3</a></td><td><p>The second vector.</p></td></tr>
<tr><td><code>factor</code></td><td>number</td><td><p>The interpolation factor, range <code>0.0</code> – <code>1.0</code>.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>The linear interpolation between the two vectors: <code>(1 - factor) * v1 + factor * v2</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Linear interpolation between two vectors.</p></div>

```js
var v1 = { x: 10, y: 0, z: 0 };
var v2 = { x: 0, y: 10, z: 0 };
var interpolated = Vec3.mix(v1, v2, 0.75);  // 1/4 of v1 and 3/4 of v2.
print(JSON.stringify(interpolated));  // {"x":2.5,"y":7.5","z":0}
```

</div>

<div class="api-entry">

### multiply {#multiply}

```js
Vec3.multiply(v, scale)
```

<div class="api-text" v-pre><p>Multiplies a vector by a scale factor.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v</code></td><td><a href="">Vec3</a></td><td><p>The vector.</p></td></tr>
<tr><td><code>scale</code></td><td>number</td><td><p>The scale factor.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>The vector with each ordinate value multiplied by the <code>scale</code>.</p></div>

</div>

<div class="api-entry">

### multiply {#multiply-2}

```js
Vec3.multiply(scale, v)
```

<div class="api-text" v-pre><p>Multiplies a vector by a scale factor.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>scale</code></td><td>number</td><td><p>The scale factor.</p></td></tr>
<tr><td><code>v</code></td><td><a href="">Vec3</a></td><td><p>The vector.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>The vector with each ordinate value multiplied by the <code>scale</code>.</p></div>

</div>

<div class="api-entry">

### multiplyQbyV {#multiplyQbyV}

```js
Vec3.multiplyQbyV(q, v)
```

<div class="api-text" v-pre><p>Rotates a vector.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>q</code></td><td><a href="Quat">Quat</a></td><td><p>The rotation to apply.</p></td></tr>
<tr><td><code>v</code></td><td><a href="">Vec3</a></td><td><p>The vector to rotate.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p><code>v</code> rotated by <code>q</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Rotate the negative z-axis by 90 degrees about the x-axis.</p></div>

```js
var v = Vec3.UNIT_NEG_Z;
var q = Quat.fromPitchYawRollDegrees(90, 0, 0);
var result = Vec3.multiplyQbyV(q, v);
print(JSON.stringify(result));  // {"x":0,"y":1.000,"z":1.19e-7}
```

</div>

<div class="api-entry">

### multiplyVbyV {#multiplyVbyV}

```js
Vec3.multiplyVbyV(v1, v2)
```

<div class="api-text" v-pre><p>Multiplies two vectors.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v1</code></td><td><a href="">Vec3</a></td><td><p>The first vector.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="">Vec3</a></td><td><p>The second vector.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>A vector formed by multiplying the ordinates of two vectors: <code>{ x: v1.x * v2.x, y: v1.y * v2.y, z: v1.z * v2.z }</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Multiply two vectors.</p></div>

```js
var v1 = { x: 1, y: 2, z: 3 };
var v2 = { x: 1, y: 2, z: 3 };
var multiplied = Vec3.multiplyVbyV(v1, v2);
print(JSON.stringify(multiplied));  // {"x":1,"y":4,"z":9}
```

</div>

<div class="api-entry">

### normalize {#normalize}

```js
Vec3.normalize(v)
```

<div class="api-text" v-pre><p>Normalizes a vector so that its length is <code>1</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v</code></td><td><a href="">Vec3</a></td><td><p>The vector to normalize.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>The vector normalized to have a length of <code>1</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Normalize a vector.</p></div>

```js
var v = { x: 10, y: 10, z: 0 };
var normalized = Vec3.normalize(v);
print(JSON.stringify(normalized));  // {"x":0.7071,"y":0.7071,"z":0}
print(Vec3.length(normalized));  // 1
```

</div>

<div class="api-entry">

### orientedAngle {#orientedAngle}

```js
Vec3.orientedAngle(v1, v2, ref)
```

<div class="api-text" v-pre><p>Calculates the angle of rotation from one vector onto another, with the sign depending on a reference vector.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v1</code></td><td><a href="">Vec3</a></td><td><p>The first vector.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="">Vec3</a></td><td><p>The second vector.</p></td></tr>
<tr><td><code>ref</code></td><td><a href="">Vec3</a></td><td><p>Reference vector.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The angle of rotation from the first vector to the second, in degrees. The value is positive if the rotation axis aligns with the reference vector (has a positive dot product), otherwise the value is negative.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Compare <code>Vec3.getAngle()</code> and <code>Vec3.orientedAngle()</code>.</p></div>

```js
var v1 = { x: 5, y: 0, z: 0 };
var v2 = { x: 5, y: 0, z: 5 };

var angle = Vec3.getAngle(v1, v2);
print(angle * 180 / Math.PI);  // 45

print(Vec3.orientedAngle(v1, v2, Vec3.UNIT_Y));  // -45
print(Vec3.orientedAngle(v1, v2, Vec3.UNIT_NEG_Y));  // 45
print(Vec3.orientedAngle(v1, v2, { x: 1, y: 2, z: -1 }));  // -45
print(Vec3.orientedAngle(v1, v2, { x: 1, y: -2, z: -1 }));  // 45
```

</div>

<div class="api-entry">

### print {#print}

```js
Vec3.print(label, v)
```

<div class="api-text" v-pre><p>Prints the vector to the program log, as a text label followed by the vector value.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>label</code></td><td>string</td><td><p>The label to print.</p></td></tr>
<tr><td><code>v</code></td><td><a href="">Vec3</a></td><td><p>The vector value to print.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Two ways of printing a label and vector value.</p></div>

```js
var v = { x: 1, y: 2, z: 3 };
Vec3.print("Vector: ", v);  // dvec3(1.000000, 2.000000, 3.000000)
print("Vector: " + JSON.stringify(v));  // {"x":1,"y":2,"z":3}
```

</div>

<div class="api-entry">

### reflect {#reflect}

```js
Vec3.reflect(v, normal)
```

<div class="api-text" v-pre><p>Calculates the reflection of a vector in a plane.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v</code></td><td><a href="">Vec3</a></td><td><p>The vector to reflect.</p></td></tr>
<tr><td><code>normal</code></td><td><a href="">Vec3</a></td><td><p>The normal of the plane.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>The vector reflected in the plane given by the normal.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Reflect a vector in the x-z plane.</p></div>

```js
var v = { x: 1, y: 2, z: 3 };
var normal = Vec3.UNIT_Y;
var reflected = Vec3.reflect(v, normal);
print(JSON.stringify(reflected));  // {"x":1,"y":-2,"z":3}
```

</div>

<div class="api-entry">

### subtract {#subtract}

```js
Vec3.subtract(v1, v2)
```

<div class="api-text" v-pre><p>Calculates one vector subtracted from another.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v1</code></td><td><a href="">Vec3</a></td><td><p>The first vector.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="">Vec3</a></td><td><p>The second vector.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>The second vector subtracted from the first.</p></div>

</div>

<div class="api-entry">

### sum {#sum}

```js
Vec3.sum(v1, v2)
```

<div class="api-text" v-pre><p>Calculates the sum of two vectors.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v1</code></td><td><a href="">Vec3</a></td><td><p>The first vector.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="">Vec3</a></td><td><p>The second vector.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>The sum of the two vectors.</p></div>

</div>

<div class="api-entry">

### toPolar {#toPolar}

```js
Vec3.toPolar(p)
```

<div class="api-text" v-pre><p>Calculates polar coordinates (elevation, azimuth, radius) that transform the unit z-axis vector onto a point.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>p</code></td><td><a href="">Vec3</a></td><td><p>The point to calculate the polar coordinates for.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Vec3</a> <p>Vector of polar coordinates for the point: <code>x</code> elevation rotation about the x-axis in radians, <code>y</code> azimuth rotation about the y-axis in radians, and <code>z</code> radius.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Polar coordinates for a point.</p></div>

```js
var v = { x: 5, y: 2.5, z: 5 };
var polar = Vec3.toPolar(v);
print("Elevation: " + polar.x * 180 / Math.PI);  // -19.471
print("Azimuth: " + polar.y * 180 / Math.PI);  // 45
print("Radius: " + polar.z);  // 7.5
```

</div>

<div class="api-entry">

### withinEpsilon {#withinEpsilon}

```js
Vec3.withinEpsilon(v1, v2, epsilon)
```

<div class="api-text" v-pre><p>Tests whether two vectors are equal within a tolerance. </p>
<p><strong>Note:</strong> It is often better to use this function than <a href="#equal">equal</a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>v1</code></td><td><a href="">Vec3</a></td><td><p>The first vector.</p></td></tr>
<tr><td><code>v2</code></td><td><a href="">Vec3</a></td><td><p>The second vector.</p></td></tr>
<tr><td><code>epsilon</code></td><td>number</td><td><p>The maximum distance between the two vectors.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the distance between the points represented by the vectors is less than or equal to <code>epsilon</code>, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Testing vectors for near equality.</p></div>

```js
var v1 = { x: 10, y: 10, z: 10 };
var v2 = { x: 10, y: 10, z: 10.0005 };

var equal = Vec3.equal(v1, v2);
print(equal);  // false

equal = Vec3.withinEpsilon(v1, v2, 0.001);
print(equal);  // true
```

</div>
