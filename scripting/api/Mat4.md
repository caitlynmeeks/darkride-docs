---
title: "Mat4"
description: "The Mat4 API provides facilities for generating and using 4 x 4 matrices."
draft: true
---

# Mat4

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts, server entity scripts, assignment client scripts.</div>

<div class="api-text" v-pre><p>The <code>Mat4</code> API provides facilities for generating and using 4 x 4 matrices. These matrices are typically used to represent transforms (scale, rotate, and translate) that convert one coordinate system into another, or perspective transforms that convert 3D points into screen coordinates.</p></div>

## The Mat4 type {#type}

<div class="api-text" v-pre><p>A 4 x 4 matrix, typically containing a scale, rotation, and translation transform. See also the <a href="">Mat4</a> object.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>r0c0</code></td><td>number</td><td><p>Row 0, column 0 value.</p></td></tr>
<tr><td><code>r1c0</code></td><td>number</td><td><p>Row 1, column 0 value.</p></td></tr>
<tr><td><code>r2c0</code></td><td>number</td><td><p>Row 2, column 0 value.</p></td></tr>
<tr><td><code>r3c0</code></td><td>number</td><td><p>Row 3, column 0 value.</p></td></tr>
<tr><td><code>r0c1</code></td><td>number</td><td><p>Row 0, column 1 value.</p></td></tr>
<tr><td><code>r1c1</code></td><td>number</td><td><p>Row 1, column 1 value.</p></td></tr>
<tr><td><code>r2c1</code></td><td>number</td><td><p>Row 2, column 1 value.</p></td></tr>
<tr><td><code>r3c1</code></td><td>number</td><td><p>Row 3, column 1 value.</p></td></tr>
<tr><td><code>r0c2</code></td><td>number</td><td><p>Row 0, column 2 value.</p></td></tr>
<tr><td><code>r1c2</code></td><td>number</td><td><p>Row 1, column 2 value.</p></td></tr>
<tr><td><code>r2c2</code></td><td>number</td><td><p>Row 2, column 2 value.</p></td></tr>
<tr><td><code>r3c2</code></td><td>number</td><td><p>Row 3, column 2 value.</p></td></tr>
<tr><td><code>r0c3</code></td><td>number</td><td><p>Row 0, column 3 value.</p></td></tr>
<tr><td><code>r1c3</code></td><td>number</td><td><p>Row 1, column 3 value.</p></td></tr>
<tr><td><code>r2c3</code></td><td>number</td><td><p>Row 2, column 3 value.</p></td></tr>
<tr><td><code>r3c3</code></td><td>number</td><td><p>Row 3, column 3 value.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

### createFromArray {#createFromArray}

```js
Mat4.createFromArray(arr)
```

<div class="api-text" v-pre><p>Creates a matrix from an array of values.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>arr</code></td><td>Array&lt;number&gt;</td><td><p>The array of values, starting with column 0.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Mat4</a> <p>The matrix with the specified values.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a matrix from an array.</p></div>

```js
var arr = [
    0.707107, 1.224745, -1.414214, 0.0,
    -1.146447, 1.478398, 0.707107, 0.0,
    1.478398, 0.560660, 1.224745, 0.0,
    10.0, 11.0, 12.0, 1.00
];
var matrix = Mat4.createFromArray(arr);
Mat4.print("Matrix:", matrix);
//Matrix: dmat4x4((0.707107, 1.224745, -1.414214, 0.000000),
//                (-1.146447, 1.478398, 0.707107, 0.000000),
//                (1.478398, 0.560660, 1.224745, 0.000000),
//                (10.000000, 11.000000, 12.000000, 1.000000))
```

### createFromColumns {#createFromColumns}

```js
Mat4.createFromColumns(col0, col1, col2, col3)
```

<div class="api-text" v-pre><p>Creates a matrix from columns of values.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>col0</code></td><td><a href="globals#Vec4">Vec4</a></td><td><p>Column 0 values.</p></td></tr>
<tr><td><code>col1</code></td><td><a href="globals#Vec4">Vec4</a></td><td><p>Column 1 values.</p></td></tr>
<tr><td><code>col2</code></td><td><a href="globals#Vec4">Vec4</a></td><td><p>Column 2 values.</p></td></tr>
<tr><td><code>col3</code></td><td><a href="globals#Vec4">Vec4</a></td><td><p>Column 3 valuse.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Mat4</a> <p>The matrix with the specified columns values.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a matrix from columns.</p></div>

```js
var col0 = { x: 0.707107, y: 1.224745, z: -1.414214, w: 0.0 };
var col1 = { x: -1.146447, y: 1.478398, z: 0.707107, w: 0.0 };
var col2 = { x: 1.478398, y: 0.560660, z: 1.224745, w: 0.0 };
var col3 = { x: 10.0, y: 11.0, z: 12.0, w: 1.0 };
var matrix = Mat4.createFromColumns(col0, col1, col2, col3);
Mat4.print("Matrix:", matrix);
//Matrix: dmat4x4((0.707107, 1.224745, -1.414214, 0.000000),
//                (-1.146447, 1.478398, 0.707107, 0.000000),
//                (1.478398, 0.560660, 1.224745, 0.000000),
//                (10.000000, 11.000000, 12.000000, 1.000000))
```

### createFromRotAndTrans {#createFromRotAndTrans}

```js
Mat4.createFromRotAndTrans(rot, trans)
```

<div class="api-text" v-pre><p>Creates a matrix that represents a rotation and translation.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>rot</code></td><td><a href="Quat">Quat</a></td><td><p>The rotation.</p></td></tr>
<tr><td><code>trans</code></td><td><a href="Vec3">Vec3</a></td><td><p>The translation.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Mat4</a> <p>The matrix that represents the rotation and translation.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a matrix with rotation and translation.</p></div>

```js
var rot = Quat.fromPitchYawRollDegrees(30, 45, 60);
var trans = { x: 10, y: 11, z: 12 };
var matrix = Mat4.createFromRotAndTrans(rot, trans);
Mat4.print("Matrix:", matrix);
// Matrix: dmat4x4((0.353553, 0.612372, -0.707107, 0.000000),
//                 (-0.573223, 0.739199, 0.353553, 0.000000),
//                 (0.739199, 0.280330, 0.612372, 0.000000),
//                 (10.000000, 11.000000, 12.000000, 1.000000))
```

### createFromScaleRotAndTrans {#createFromScaleRotAndTrans}

```js
Mat4.createFromScaleRotAndTrans(scale, rot, trans)
```

<div class="api-text" v-pre><p>Creates a matrix that represents a scale, rotation, and translation.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>scale</code></td><td><a href="Vec3">Vec3</a></td><td><p>The scale.</p></td></tr>
<tr><td><code>rot</code></td><td><a href="Quat">Quat</a></td><td><p>The rotation.</p></td></tr>
<tr><td><code>trans</code></td><td><a href="Vec3">Vec3</a></td><td><p>The translation.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Mat4</a> <p>The matrix that represents the scale, rotation, and translation.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a matrix with scale, rotation, and translation.</p></div>

```js
var scale = Vec3.multiply(2, Vec3.ONE);
var rot = Quat.fromPitchYawRollDegrees(30, 45, 60);
var trans = { x: 10, y: 11, z: 12 };
var matrix = Mat4.createFromScaleRotAndTrans(scale, rot, trans);
Mat4.print("Matrix:", matrix);
// Matrix: dmat4x4((0.707107, 1.224745, -1.414214, 0.000000),
//                 (-1.146447, 1.478398, 0.707107, 0.000000),
//                 (1.478398, 0.560660, 1.224745, 0.000000),
//                 (10.000000, 11.000000, 12.000000, 1.000000))
```

### extractRotation {#extractRotation}

```js
Mat4.extractRotation(m)
```

<div class="api-text" v-pre><p>Extracts the rotation from a matrix.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>m</code></td><td><a href="">Mat4</a></td><td><p>The matrix.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Quat">Quat</a> <p>The rotation contained in the matrix.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Extract the rotation from a matrix.</p></div>

```js
var scale = Vec3.multiply(2, Vec3.ONE);
var rot = Quat.fromPitchYawRollDegrees(30, 45, 60);
var trans = { x: 10, y: 11, z: 12 };
var matrix = Mat4.createFromScaleRotAndTrans(scale, rot, trans);

rot = Mat4.extractRotation(matrix);
print("Rotation: " + JSON.stringify(Quat.safeEulerAngles(rot)));
// Rotation: {"x":29.999998092651367,"y":45.00000762939453,"z":60.000003814697266}
```

### extractScale {#extractScale}

```js
Mat4.extractScale(m)
```

<div class="api-text" v-pre><p>Extracts the scale from a matrix.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>m</code></td><td><a href="">Mat4</a></td><td><p>The matrix.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The scale contained in the matrix.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Extract the scale from a matrix.</p></div>

```js
var scale = Vec3.multiply(2, Vec3.ONE);
var rot = Quat.fromPitchYawRollDegrees(30, 45, 60);
var trans = { x: 10, y: 11, z: 12 };
var matrix = Mat4.createFromScaleRotAndTrans(scale, rot, trans);

scale = Mat4.extractScale(matrix);
print("Scale: " + JSON.stringify(scale));
// Scale: {"x":1.9999998807907104,"y":1.9999998807907104,"z":1.9999998807907104}
```

### extractTranslation {#extractTranslation}

```js
Mat4.extractTranslation(m)
```

<div class="api-text" v-pre><p>Extracts the translation from a matrix.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>m</code></td><td><a href="">Mat4</a></td><td><p>The matrix.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The translation contained in the matrix.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Extract the translation from a matrix.</p></div>

```js
var scale = Vec3.multiply(2, Vec3.ONE);
var rot = Quat.fromPitchYawRollDegrees(30, 45, 60);
var trans = { x: 10, y: 11, z: 12 };
var matrix = Mat4.createFromScaleRotAndTrans(scale, rot, trans);

trans = Mat4.extractTranslation(matrix);
print("Translation: " + JSON.stringify(trans));
// Translation: {"x":10,"y":11,"z":12}
```

### getForward {#getForward}

```js
Mat4.getForward(m)
```

<div class="api-text" v-pre><p>Gets the "forward" direction that the camera would face if its orientation was set to the rotation contained in a matrix. Darkride's camera has axes x = right, y = up, -z = forward.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>m</code></td><td><a href="">Mat4</a></td><td><p>The matrix.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The negative z-axis rotated by the rotation in the matrix.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Demonstrate that the "forward" direction is the negative z-axis.</p></div>

```js
var rot = Quat.IDENTITY;
var trans = Vec3.ZERO;
var matrix = Mat4.createFromRotAndTrans(rot, trans);
var forward = Mat4.getForward(matrix);
print("Forward: " + JSON.stringify(forward));
// Forward: {"x":0,"y":0,"z":-1}
```

### getFront {#getFront}

```js
Mat4.getFront(m)
```

<div class="api-text" v-pre><p>Gets the "forward" direction that the camera would face if its orientation was set to the rotation contained in a matrix. Darkride's camera has axes x = right, y = up, -z = forward. </p>
<p>Synonym for <a href="#getForward">getForward</a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>m</code></td><td><a href="">Mat4</a></td><td><p>The matrix.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The negative z-axis rotated by orientation.</p></div>

### getRight {#getRight}

```js
Mat4.getRight(m)
```

<div class="api-text" v-pre><p>Gets the "right" direction that the camera would have if its orientation was set to the rotation contained in a matrix. Darkride's camera has axes x = right, y = up, -z = forward.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>m</code></td><td><a href="">Mat4</a></td><td><p>The matrix.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The x-axis rotated by the rotation in the matrix.</p></div>

### getUp {#getUp}

```js
Mat4.getUp(m)
```

<div class="api-text" v-pre><p>Gets the "up" direction that the camera would have if its orientation was set to the rotation contained in a matrix. The High Fidelity camera has axes x = right, y = up, -z = forward.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>m</code></td><td><a href="">Mat4</a></td><td><p>The matrix.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The y-axis rotated by the rotation in the matrix.</p></div>

### inverse {#inverse}

```js
Mat4.inverse(m)
```

<div class="api-text" v-pre><p>Calculates the inverse of a matrix.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>m</code></td><td><a href="">Mat4</a></td><td><p>The matrix.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Mat4</a> <p>The inverse of the matrix.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>A matrix multiplied with its inverse is the unit matrix.</p></div>

```js
var scale = Vec3.multiply(2, Vec3.ONE);
var rot = Quat.fromPitchYawRollDegrees(30, 45, 60);
var trans = { x: 10, y: 11, z: 12 };
var matrix = Mat4.createFromScaleRotAndTrans(scale, rot, trans);
var inverse = Mat4.inverse(matrix);
var multiplied = Mat4.multiply(matrix, inverse);
Mat4.print("Multiplied:", multiplied);
//Multiplied: dmat4x4((1.000000, 0.000000, 0.000000, 0.000000),
//                    (0.000000, 1.000000, -0.000000, 0.000000),
//                    (0.000000, 0.000000, 1.000000, 0.000000),
//                    (0.000000, 0.000000, 0.000001, 1.000000))
```

### multiply {#multiply}

```js
Mat4.multiply(m1, m2)
```

<div class="api-text" v-pre><p>Multiplies two matrices.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>m1</code></td><td><a href="">Mat4</a></td><td><p>The first matrix.</p></td></tr>
<tr><td><code>m2</code></td><td><a href="">Mat4</a></td><td><p>The second matrix.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Mat4</a> <p><code>m1</code> multiplied with <code>m2</code>.</p></div>

### print {#print}

```js
Mat4.print(label, m, transpose?)
```

<div class="api-text" v-pre><p>Prints a matrix to the program log as a label followed by the matrix's values.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>label</code></td><td>string</td><td></td><td><p>The label to print.</p></td></tr>
<tr><td><code>m</code></td><td><a href="">Mat4</a></td><td></td><td><p>The matrix to print.</p></td></tr>
<tr><td><code>transpose</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to transpose the matrix before printing (so that it prints the matrix's rows), <code>false</code> to not transpose the matrix (so that it prints the matrix's columns).</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Two ways of printing a label and matrix value.</p></div>

```js
var scale = Vec3.multiply(2, Vec3.ONE);
var rot = Quat.fromPitchYawRollDegrees(30, 45, 60);
var trans = { x: 10, y: 11, z: 12 };
var matrix = Mat4.createFromScaleRotAndTrans(scale, rot, trans);

Mat4.print("Matrix:", matrix);
// Matrix: dmat4x4((0.707107, 1.224745, -1.414214, 0.000000),
//                 (-1.146447, 1.478398, 0.707107, 0.000000),
//                 (1.478398, 0.560660, 1.224745, 0.000000),
//                 (10.000000, 11.000000, 12.000000, 1.000000))

print("Matrix: " + JSON.stringify(matrix));
// Matrix: {"r0c0":0.7071067094802856,"r1c0":1.2247446775436401,"r2c0":-1.4142136573791504,"r3c0":0,
//          "r0c1": -1.1464465856552124, "r1c1": 1.4783978462219238, "r2c1": 0.7071066498756409, "r3c1": 0,
//          "r0c2": 1.4783978462219238, "r1c2": 0.5606603026390076, "r2c2": 1.2247447967529297, "r3c2": 0,
//          "r0c3": 10, "r1c3": 11, "r2c3": 12, "r3c3": 1}
```

### transformPoint {#transformPoint}

```js
Mat4.transformPoint(m, point)
```

<div class="api-text" v-pre><p>Transforms a point into a new coordinate system: the point value is scaled, rotated, and translated.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>m</code></td><td><a href="">Mat4</a></td><td><p>The transform to the new coordinate system.</p></td></tr>
<tr><td><code>point</code></td><td><a href="Vec3">Vec3</a></td><td><p>The point to transform.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The point in the new coordinate system.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Transform a point.</p></div>

```js
var scale = Vec3.multiply(2, Vec3.ONE);
var rot = Quat.fromPitchYawRollDegrees(0, 45, 0);
var trans = { x: 0, y: 10, z: 0 };
var matrix = Mat4.createFromScaleRotAndTrans(scale, rot, trans);

var point = { x: 1, y: 1, z: 1 };
var transformedPoint = Mat4.transformPoint(matrix, point);
print("Transformed point: " + JSON.stringify(transformedPoint));
// Transformed point: { "x": 2.8284270763397217, "y": 12, "z": -2.384185791015625e-7 }
```

### transformVector {#transformVector}

```js
Mat4.transformVector(m, vector)
```

<div class="api-text" v-pre><p>Transforms a vector into a new coordinate system: the vector is scaled and rotated.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>m</code></td><td><a href="">Mat4</a></td><td><p>The transform to the new coordinate system.</p></td></tr>
<tr><td><code>vector</code></td><td><a href="Vec3">Vec3</a></td><td><p>The vector to transform.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Vec3">Vec3</a> <p>The vector in the new coordinate system.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Transform a vector.</p></div>

```js
var scale = Vec3.multiply(2, Vec3.ONE);
var rot = Quat.fromPitchYawRollDegrees(0, 45, 0);
var trans = { x: 0, y: 10, z: 0 };
var matrix = Mat4.createFromScaleRotAndTrans(scale, rot, trans);

var vector = { x: 1, y: 1, z: 1 };
var transformedVector = Mat4.transformVector(matrix, vector);
print("Transformed vector: " + JSON.stringify(transformedVector));
// Transformed vector: { "x": 2.8284270763397217, "y": 2, "z": -2.384185791015625e-7 }
```
