---
title: "Uuid"
description: "The Uuid API provides facilities for working with UUIDs."
draft: true
---

# Uuid

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts, server entity scripts, assignment client scripts.</div>

<div class="api-text" v-pre><p>The <code>Uuid</code> API provides facilities for working with UUIDs.</p></div>

## The Uuid type {#type}

<div class="api-text" v-pre><p>UUIDs (Universally Unique IDentifiers) are used to uniquely identify entities, avatars, and the like. They are represented in JavaScript as strings in the format, <code>"{nnnnnnnn-nnnn-nnnn-nnnn-nnnnnnnnnnnn}"</code>, where the "n"s are hexadecimal digits.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>NULL</code></td><td><a href="">Uuid</a></td><td><p>The null UUID, <code>"{00000000-0000-0000-0000-000000000000}"</code>.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

### fromString {#fromString}

```js
Uuid.fromString(string)
```

<div class="api-text" v-pre><p>Generates a UUID from a string representation of the UUID.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>string</code></td><td>string</td><td><p>A string representation of a UUID. The curly braces are optional.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Uuid</a> <p>A UUID if the given <code>string</code> is valid, <code>null</code> otherwise.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Valid and invalid parameters.</p></div>

```js
var uuid = Uuid.fromString("{527c27ea-6d7b-4b47-9ae2-b3051d50d2cd}");
print(uuid); // {527c27ea-6d7b-4b47-9ae2-b3051d50d2cd}

uuid = Uuid.fromString("527c27ea-6d7b-4b47-9ae2-b3051d50d2cd");
print(uuid); // {527c27ea-6d7b-4b47-9ae2-b3051d50d2cd}

uuid = Uuid.fromString("527c27ea");
print(uuid); // null
```

### generate {#generate}

```js
Uuid.generate()
```

<div class="api-text" v-pre><p>Generates a new UUID.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="">Uuid</a> <p>A new UUID.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Generate a new UUID and reports its JavaScript type.</p></div>

```js
var uuid = Uuid.generate();
print(uuid);        // {nnnnnnnn-nnnn-nnnn-nnnn-nnnnnnnnnnnn}
print(typeof uuid); // string
```

### isEqual {#isEqual}

```js
Uuid.isEqual(idA, idB)
```

<div class="api-text" v-pre><p>Tests whether two UUIDs are equal.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>idA</code></td><td><a href="">Uuid</a></td><td><p>The first UUID to compare.</p></td></tr>
<tr><td><code>idB</code></td><td><a href="">Uuid</a></td><td><p>The second UUID to compare.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the two UUIDs are equal, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Demonstrate <code>true</code> and <code>false</code> cases.</p></div>

```js
var uuidA = Uuid.generate();
var uuidB = Uuid.generate();
print(Uuid.isEqual(uuidA, uuidB)); // false
uuidB = uuidA;
print(Uuid.isEqual(uuidA, uuidB)); // true
```

### isNull {#isNull}

```js
Uuid.isNull(id)
```

<div class="api-text" v-pre><p>Tests whether a UUID is null.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="">Uuid</a></td><td><p>The UUID to test.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the UUID equals <code>Uuid.NULL</code> or is <code>null</code>, otherwise <code>false</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Demonstrate <code>true</code> and <code>false</code> cases.</p></div>

```js
var uuid; // undefined
print(Uuid.isNull(uuid)); // false
uuid = Uuid.generate();
print(Uuid.isNull(uuid)); // false
uuid = Uuid.NULL;
print(Uuid.isNull(uuid)); // true
uuid = null;
print(Uuid.isNull(uuid)); // true
```

### print {#print}

```js
Uuid.print(label, id)
```

<div class="api-text" v-pre><p>Prints a UUID to the program log, as a text label followed by the UUID value.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>label</code></td><td>string</td><td><p>The label to print.</p></td></tr>
<tr><td><code>id</code></td><td><a href="">Uuid</a></td><td><p>The UUID to print.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Two ways of printing a label plus UUID.</p></div>

```js
var uuid = Uuid.generate();
Uuid.print("Generated UUID:", uuid); // Generated UUID: {nnnnnnnn-nnnn-nnnn-nnnn-nnnnnnnnnnnn}
print("Generated UUID: " + uuid);    // Generated UUID: {nnnnnnnn-nnnn-nnnn-nnnn-nnnnnnnnnnnn}
```

### toString {#toString}

```js
Uuid.toString(id)
```

<div class="api-text" v-pre><p>Generates a string representation of a UUID. However, because UUIDs are represented in JavaScript as strings, this is in effect a no-op.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td><a href="">Uuid</a></td><td><p>The UUID to generate a string from.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>- A string representation of the UUID.</p></div>
