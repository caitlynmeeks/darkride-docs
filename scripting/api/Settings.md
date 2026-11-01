---
title: "Settings"
description: "The Settings API provides a facility to store and retrieve values that persist between Darkride runs."
---

# Settings

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Settings</code> API provides a facility to store and retrieve values that persist between Darkride runs.</p></div>

## Functions {#functions}

<div class="api-entry">

### getValue {#getValue}

```js
Settings.getValue(key, defaultValue?)
```

<div class="api-text" v-pre><p>Retrieves the value from a named setting.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>string</td><td></td><td><p>The name of the setting.</p></td></tr>
<tr><td><code>defaultValue</code> <em>optional</em></td><td>string | number | boolean | object</td><td><code>&quot;&quot;</code></td><td><p>The value to return if the setting doesn't exist.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string | number | boolean | object <p>The value stored in the named setting if it exists, otherwise the <code>defaultValue</code>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Retrieve non-existent setting values.</p></div>

```js
var value1 = Settings.getValue("Script Example/Nonexistent Key");
print("Value: " + (typeof value1) + " " + JSON.stringify(value1));  // string ""

var value2 = Settings.getValue("Script Example/Nonexistent Key", true);
print("Value: " + (typeof value2) + " " + JSON.stringify(value2));  // boolean true
```

</div>

<div class="api-entry">

### setValue {#setValue}

```js
Settings.setValue(key, value)
```

<div class="api-text" v-pre><p>Stores a value in a named setting. If the setting already exists, its value is overwritten. If the value is <code>null</code> or <code>undefined</code>, the setting is deleted.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>key</code></td><td>string</td><td><p>The name of the setting. Be sure to use a unique name if creating a new setting.</p></td></tr>
<tr><td><code>value</code></td><td>string | number | boolean | object | undefined</td><td><p>The value to store in the setting. If <code>null</code> or <code>undefined</code> is specified, the setting is deleted.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Store and retrieve an object value.</p></div>

```js
Settings.setValue("Script Example/My Key", { x: 0, y: 10, z: 0 });

var value = Settings.getValue("Script Example/My Key");
print("Value: " + (typeof value) + " " + JSON.stringify(value));  // object {"x":0,"y":10,"z":0}
```

</div>
