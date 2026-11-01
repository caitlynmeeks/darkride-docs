---
title: "ScriptsModel"
description: "Information on the scripts that are in the default scripts directory of the Interface installation."
draft: true
---

# ScriptsModel

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>Information on the scripts that are in the default scripts directory of the Interface installation. This is provided as a property of <a href="ScriptDiscoveryService"><code>ScriptDiscoveryService</code></a>.</p>
 <p>The information provided reflects the subdirectory structure. Methods and signals are per QT's <a href="http://doc.qt.io/qt-5/qabstractitemmodel.html" target="_blank" rel="noopener">QAbstractItemModel</a> class, with the following details:</p>
 <ul> <li>A single column of data: <code>columnCount(index)</code> returns <code>1</code>. </li>
 <li>Data is provided for the following roles: <table> <thead> <tr><th>Role</th><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td>Display</td><td><code>0</code></td><td>The directory or script file name.</td></tr>
 <tr><td>Path</td><td><code>256</code></td><td>The path and filename of the data item if it is a script, <code>undefined</code> if it is a directory.</td></tr>
 </tbody>
 </table>
 </li>
 <li>Use <code>null</code> for the root directory's index.</li>
 </ul></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>List the first 2 levels of the scripts directory.</p></div>

```js
var MAX_DIRECTORY_LEVEL = 1;
var DISPLAY_ROLE = 0;
var PATH_ROLE = 256;

function printDirectory(parentIndex, directoryLevel, indent) {
    var numRows = ScriptDiscoveryService.scriptsModel.rowCount(parentIndex);
    for (var i = 0; i < numRows; i++) {
        var rowIndex = ScriptDiscoveryService.scriptsModel.index(i, 0, parentIndex);

        var name = ScriptDiscoveryService.scriptsModel.data(rowIndex, DISPLAY_ROLE);
        var hasChildren = ScriptDiscoveryService.scriptsModel.hasChildren(rowIndex);
        var path = hasChildren ? "" : ScriptDiscoveryService.scriptsModel.data(rowIndex, PATH_ROLE);

        print(indent + "- " + name + (hasChildren ? "" : " - " + path));

        if (hasChildren && directoryLevel < MAX_DIRECTORY_LEVEL) {
            printDirectory(rowIndex, directoryLevel + 1, indent + "    ");
        }
    }
}

print("Scripts:");
printDirectory(null, 0, "");  // null index for the root directory.
```

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

### downloadFinished {#downloadFinished}

```js
ScriptsModel.downloadFinished()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed from the API.</p></div>
:::


### reloadDefaultFiles {#reloadDefaultFiles}

```js
ScriptsModel.reloadDefaultFiles()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed from the API.</p></div>
:::


### reloadLocalFiles {#reloadLocalFiles}

```js
ScriptsModel.reloadLocalFiles()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed from the API.</p></div>
:::


### updateScriptsLocation {#updateScriptsLocation}

```js
ScriptsModel.updateScriptsLocation(newPath)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This method is deprecated and will be removed from the API.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>newPath</code></td><td>string</td><td><p>New path.</p></td></tr>
</tbody></table></div>
