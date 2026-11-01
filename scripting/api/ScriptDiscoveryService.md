---
title: "ScriptDiscoveryService"
description: "The ScriptDiscoveryService API provides facilities to work with Interface scripts."
draft: true
---

# ScriptDiscoveryService

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, avatar scripts, entity scripts.</div>

<div class="api-text" v-pre><p>The <code>ScriptDiscoveryService</code> API provides facilities to work with Interface scripts.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>debugScriptUrl</code></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The path and name of a script to debug using the "API Debugger" developer tool (currentAPI.js). If set, the API Debugger dialog displays the objects and values exposed by the script using <a href="Script#registerValue"><code>Script.registerValue</code></a> and similar.</p></td></tr>
<tr><td><code>defaultScriptsPath</code></td><td>string</td><td></td><td><p>The path where the default scripts are located in the Interface installation. <em>Read-only.</em></p></td></tr>
<tr><td><code>scriptsModel</code></td><td><a href="ScriptsModel">ScriptsModel</a></td><td></td><td><p>Information on the scripts that are in the default scripts directory of the Interface installation. <em>Read-only.</em></p></td></tr>
<tr><td><code>scriptsModelFilter</code></td><td><a href="ScriptsModelFilter">ScriptsModelFilter</a></td><td></td><td><p>Sorted and filtered information on the scripts that are in the default scripts directory of the Interface installation. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### getPublic {#getPublic}

```js
ScriptDiscoveryService.getPublic()
```

<div class="api-text" v-pre><p>Gets a list of all script files that are in the default scripts directory of the Interface installation.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="#PublicScript">ScriptDiscoveryService.PublicScript</a>&gt; <p>All scripts in the "scripts" directory of the Interface installation.</p></div>

</div>

<div class="api-entry">

### getRunning {#getRunning}

```js
ScriptDiscoveryService.getRunning()
```

<div class="api-text" v-pre><p>Gets a list of all Interface scripts that are currently running.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="#RunningScript">ScriptDiscoveryService.RunningScript</a>&gt; <p>All Interface scripts that are currently running.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report all running scripts.</p></div>

```js
var runningScripts = ScriptDiscoveryService.getRunning();
print("Running scripts:");
for (var i = 0; i < runningScripts.length; i++) {
    print(JSON.stringify(runningScripts[i]));
}
```

</div>

<div class="api-entry">

### loadOneScript {#loadOneScript}

```js
ScriptDiscoveryService.loadOneScript(url)
```

<div class="api-text" v-pre><p>Starts running an Interface script, if it isn't already running. The script is automatically loaded next time Interface starts. </p>
<p>This is a synonym for calling <a href="#loadScript">loadScript</a> with just the script URL.</p>
 <p class="availableIn"><strong>Supported Script Types:</strong> Interface Scripts • Avatar Scripts</p>
 <p>See also, <a href="Script#load"><code>Script.load</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The path and name of the script. If a local file, including the <code>"file:///"</code> scheme is optional.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### loadScript {#loadScript}

```js
ScriptDiscoveryService.loadScript(url?, isUserLoaded?, loadScriptFromEditor?, activateMainWindow?, reload?, quitWhenFinished?)
```

<div class="api-text" v-pre><p>Starts running an Interface script, if it isn't already running. </p>
<p class="availableIn"><strong>Supported Script Types:</strong> Interface Scripts • Avatar Scripts</p>
 <p>See also, <a href="Script#load"><code>Script.load</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>The path and name of the script. If a local file, including the <code>"file:///"</code> scheme is optional.</p></td></tr>
<tr><td><code>isUserLoaded</code> <em>optional</em></td><td>boolean</td><td><code>true</code></td><td><p><code>true</code> if the user specifically loaded it, <code>false</code> if not (e.g., a script loaded it). If <code>false</code>, the script is not automatically loaded next time Interface starts.</p></td></tr>
<tr><td><code>loadScriptFromEditor</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>activateMainWindow</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>reload</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to redownload the script, <code>false</code> to use the copy from the cache if available.</p></td></tr>
<tr><td><code>quitWhenFinished</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to close Interface when the script finishes, <code>false</code> to not close Interface.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>An empty object, <code>{}</code>.</p></div>

</div>

<div class="api-entry">

### reloadAllScripts {#reloadAllScripts}

```js
ScriptDiscoveryService.reloadAllScripts()
```

<div class="api-text" v-pre><p>Restarts all Interface, avatar, and client entity scripts after clearing the scripts cache.</p></div>

</div>

<div class="api-entry">

### stopAllScripts {#stopAllScripts}

```js
ScriptDiscoveryService.stopAllScripts(restart?)
```

<div class="api-text" v-pre><p>Stops or restarts all Interface scripts. The scripts cache is not cleared. If restarting, avatar and client entity scripts are also restarted.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>restart</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to restart the scripts, <code>false</code> to stop them.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### stopScript {#stopScript}

```js
ScriptDiscoveryService.stopScript(url, restart?)
```

<div class="api-text" v-pre><p>Stops or restarts an Interface script.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The path and name of the script. If a local file, including the <code>"file:///"</code> scheme is optional.</p></td></tr>
<tr><td><code>restart</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to redownload and restart the script, <code>false</code> to stop it.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the script was successfully stopped or restarted, <code>false</code> if it wasn't (e.g., the script couldn't be found).</p></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### clearDebugWindow {#clearDebugWindow}

```js
ScriptDiscoveryService.clearDebugWindow.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the Debug Window is cleared.</p></div>

</div>

<div class="api-entry">

### errorMessage {#errorMessage}

```js
ScriptDiscoveryService.errorMessage.connect(function (message, scriptName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when any script generates an error or <a href="console#error"><code>console.error</code></a> is called.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The error message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>The name of the script that generated the error message.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### infoMessage {#infoMessage}

```js
ScriptDiscoveryService.infoMessage.connect(function (message, scriptName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when any script generates an information message or <a href="console#info"><code>console.info</code></a> is called.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The information message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>The name of the script that generated the informaton message.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### printedMessage {#printedMessage}

```js
ScriptDiscoveryService.printedMessage.connect(function (message, scriptName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when any script prints a message to the program log via <a href="globals#print"><code>print</code></a>, <a href="Script#print"><code>Script.print</code></a>, <a href="console#log"><code>console.log</code></a>, or <a href="console#debug"><code>console.debug</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>The name of the script that generated the message.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### scriptCountChanged {#scriptCountChanged}

```js
ScriptDiscoveryService.scriptCountChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the number of Interface scripts running changes.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when the number of running scripts changes.</p></div>

```js
ScriptDiscoveryService.scriptCountChanged.connect(function () {
    print("Scripts count changed: " + ScriptDiscoveryService.getRunning().length);
});
```

</div>

<div class="api-entry">

### scriptLoadError {#scriptLoadError}

```js
ScriptDiscoveryService.scriptLoadError.connect(function (url, error) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a script could not be loaded.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The path and name of the script that could not be loaded.</p></td></tr>
<tr><td><code>error</code></td><td>string</td><td><p><code>""</code> always.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### scriptsReloading {#scriptsReloading}

```js
ScriptDiscoveryService.scriptsReloading.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when Interface, avatar, and client entity scripts are restarting as a result of <a href="#reloadAllScripts">reloadAllScripts</a> or <a href="#stopAllScripts">stopAllScripts</a>.</p></div>

</div>

<div class="api-entry">

### warningMessage {#warningMessage}

```js
ScriptDiscoveryService.warningMessage.connect(function (message, scriptName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when any script generates a warning or <a href="console#warn"><code>console.warn</code></a> is called.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The warning message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>The name of the script that generated the warning message.</p></td></tr>
</tbody></table></div>

</div>

## Types {#types}

<div class="api-entry">

### PublicScript {#PublicScript}

<div class="api-text" v-pre><p>Information on a public script, i.e., a script that's included in the Interface installation.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The script's file name.</p></td></tr>
<tr><td><code>type</code></td><td>string</td><td><p><code>"script"</code> or <code>"folder"</code>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed. It currently always has the value, <code>"script"</code>.</p>
<p></p></td></tr>
<tr><td><code>children</code> <em>optional</em></td><td>Array&lt;<a href="#PublicScript">ScriptDiscoveryService.PublicScript</a>&gt;</td><td><p>Only present if <code>type == "folder"</code>. </p>
<p class="important">Deprecated: This property is deprecated and will be removed. It currently is never present.</p></td></tr>
<tr><td><code>url</code> <em>optional</em></td><td>string</td><td><p>The full URL of the script — including the <code>"file:///"</code> scheme at the start. </p>
<p>Only present if <code>type == "script"</code>.</p>
<p></p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### RunningScript {#RunningScript}

<div class="api-text" v-pre><p>Information on a running script.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>local</code></td><td>boolean</td><td><p><code>true</code> if the script is a local file (i.e., the scheme is "file"), <code>false</code> if it isn't (e.g., the scheme is "http").</p></td></tr>
<tr><td><code>name</code></td><td>string</td><td><p>The script's file name.</p></td></tr>
<tr><td><code>path</code></td><td>string</td><td><p>The script's path and file name — excluding the scheme if a local file.</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td><p>The full URL of the script — including the scheme if a local file.</p></td></tr>
</tbody></table></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### getLocal {#getLocal}

```js
ScriptDiscoveryService.getLocal()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;<a href="#LocalScript">ScriptDiscoveryService.LocalScript</a>&gt; <p>Local scripts.</p></div>

</div>

<div class="api-entry">

### onClearDebugWindow {#onClearDebugWindow}

```js
ScriptDiscoveryService.onClearDebugWindow()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### onErrorLoadingScript {#onErrorLoadingScript}

```js
ScriptDiscoveryService.onErrorLoadingScript(url)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>URL.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### onErrorMessage {#onErrorMessage}

```js
ScriptDiscoveryService.onErrorMessage(message, scriptName)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>Message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>Script name.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### onInfoMessage {#onInfoMessage}

```js
ScriptDiscoveryService.onInfoMessage(message, scriptName)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>Message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>Script name.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### onPrintedMessage {#onPrintedMessage}

```js
ScriptDiscoveryService.onPrintedMessage(message, scriptName)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>Message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>Script name.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### onScriptFinished {#onScriptFinished}

```js
ScriptDiscoveryService.onScriptFinished(scriptName, engine)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>scriptName</code></td><td>string</td><td><p>Script name.</p></td></tr>
<tr><td><code>engine</code></td><td>object</td><td><p>Engine.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### onWarningMessage {#onWarningMessage}

```js
ScriptDiscoveryService.onWarningMessage(message, scriptName)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>Message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>Script name.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### errorLoadingScript {#errorLoadingScript}

```js
ScriptDiscoveryService.errorLoadingScript.connect(function (url) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>URL.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### LocalScript {#LocalScript}

::: warning Deprecated
<div class="api-text" v-pre><p>This type is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Information on a local script.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The script's file name.</p></td></tr>
<tr><td><code>path</code></td><td>string</td><td><p>The script's path.</p></td></tr>
</tbody></table></div>

</div>
