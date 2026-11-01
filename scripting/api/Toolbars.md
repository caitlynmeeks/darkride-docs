---
title: "Toolbars"
description: "The Toolbars API provides facilities to work with the system or other toolbar."
draft: true
---

# Toolbars

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Toolbars</code> API provides facilities to work with the system or other toolbar.</p>
 <p>See also the <a href="Tablet"><code>Tablet</code></a> API for use of the system tablet and toolbar in desktop and HMD modes.</p></div>

## Functions {#functions}

### getToolbar {#getToolbar}

```js
Toolbars.getToolbar(name)
```

<div class="api-text" v-pre><p>Gets an instance of a toolbar. A new toolbar is created if one with the specified name doesn't already exist.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>A unique name that identifies the toolbar.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="ToolbarProxy">ToolbarProxy</a> <p>The toolbar instance.</p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### toolbarVisibleChanged {#toolbarVisibleChanged}

```js
Toolbars.toolbarVisibleChanged.connect(function (isVisible, toolbarName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the visibility of a toolbar changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>isVisible</code></td><td>boolean</td><td><p><code>true</code> if the toolbar is visible, <code>false</code> if it is hidden.</p></td></tr>
<tr><td><code>toolbarName</code></td><td>string</td><td><p>The name of the toolbar.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Briefly hide the system toolbar.</p></div>

```js
Toolbars.toolbarVisibleChanged.connect(function(visible, name) {
    print("Toolbar " + name + " visible changed to " + visible);
});

var toolbar = Toolbars.getToolbar("com.highfidelity.interface.toolbar.system");
if (toolbar) {
    toolbar.writeProperty("visible", false);
    Script.setTimeout(function () {
        toolbar.writeProperty("visible", true);
    }, 2000);
}
```
