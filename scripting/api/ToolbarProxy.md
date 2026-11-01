---
title: "ToolbarProxy"
description: "An instance of a toolbar."
---

# ToolbarProxy

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>An instance of a toolbar.</p>
 <p>Retrieve an existing toolbar or create a new toolbar using <a href="Toolbars#getToolbar"><code>Toolbars.getToolbar</code></a>.</p></div>

## Methods {#functions}

<div class="api-entry">

### readProperties {#readProperties}

```js
readProperties(propertyList)
```

<div class="api-text" v-pre><p>Gets the values of toolbar properties.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>propertyList</code></td><td>Array&lt;string&gt;</td><td><p>The names of the properties to get the values of. Toolbar properties are those in the QML implementation of the toolbar.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>The names and values of the specified properties. If the toolbar doesn't have a particular property then the result doesn't include that property.</p></div>

</div>

<div class="api-entry">

### readProperty {#readProperty}

```js
readProperty(propertyName)
```

<div class="api-text" v-pre><p>Gets the value of a toolbar property.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>propertyName</code></td><td>string</td><td><p>The property name. Toolbar properties are those in the QML implementation of the toolbar.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>The value of the property if the property name is valid, otherwise <code>undefined</code>.</p></div>

</div>

<div class="api-entry">

### writeProperties {#writeProperties}

```js
writeProperties(properties)
```

<div class="api-text" v-pre><p>Sets the values of toolbar properties. A property is added to the toolbar if a named property doesn't already exist.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td>object</td><td><p>The names and values of the properties to set. Toolbar properties are those in the QML implementation of the toolbar.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### writeProperty {#writeProperty}

```js
writeProperty(propertyValue)
```

<div class="api-text" v-pre><p>Sets the value of a toolbar property. A property is added to the toolbar if the named property doesn't already exist.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>propertyValue</code></td><td>object</td><td><p>The value of the property.</p></td></tr>
</tbody></table></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### addButton {#addButton}

```js
addButton(properties)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p><em>Currently doesn't work.</em></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>properties</code></td><td>object</td><td><p>Button properties</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>The button added.</p></div>

</div>

<div class="api-entry">

### removeButton {#removeButton}

```js
removeButton(name)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p><em>Currently doesn't work.</em></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>Button name.</p></td></tr>
</tbody></table></div>

</div>
