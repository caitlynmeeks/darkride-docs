---
title: "Script"
description: "The Script API provides facilities for working with scripts."
---

# Script

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>The <code>Script</code> API provides facilities for working with scripts.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>context</code></td><td>string</td><td><p>The context that the script is running in: </p>
<ul> <li><code>"client"</code>: A client or avatar script.</li>
 <li><code>"entity_client"</code>: A client entity script.</li>
 <li><code>"entity_server"</code>: A server entity script.</li>
 <li><code>"agent"</code>: An assignment client script.</li>
 </ul>
 <em>Read-only.</em><p></p></td></tr>
<tr><td><code>type</code></td><td>string</td><td><p>The type of script that is running: </p>
<ul> <li><code>"client"</code>: A client script.</li>
 <li><code>"entity_client"</code>: A client entity script.</li>
 <li><code>"avatar"</code>: An avatar script.</li>
 <li><code>"entity_server"</code>: A server entity script.</li>
 <li><code>"agent"</code>: An assignment client script.</li>
 </ul>
 <em>Read-only.</em><p></p></td></tr>
<tr><td><code>filename</code></td><td>string</td><td><p>The filename of the script file. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Functions {#functions}

<div class="api-entry">

### addEventHandler {#addEventHandler}

```js
Script.addEventHandler(entityID, eventName, handler)
```

<div class="api-text" v-pre><p>Adds a function to the list of functions called when a particular event occurs on a particular entity. </p>
<p>See also, the <a href="Entities"><code>Entities</code></a> API.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>eventName</code></td><td><a href="#EntityEvent">Script.EntityEvent</a></td><td><p>The name of the event.</p></td></tr>
<tr><td><code>handler</code></td><td><a href="#entityEventCallback">Script~entityEventCallback</a> | <a href="#pointerEventCallback">Script~pointerEventCallback</a> | <a href="#collisionEventCallback">Script~collisionEventCallback</a></td><td><p>The function to call when the event occurs on the entity. It can be either the name of a function or an in-line definition.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when a mouse press occurs on a particular entity.</p></div>

```js
var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    lifetime: 300  // Delete after 5 minutes.
});

function reportMousePress(entityID, event) {
    print("Mouse pressed on entity: " + JSON.stringify(event));
}

Script.addEventHandler(entityID, "mousePressOnEntity", reportMousePress);
```

</div>

<div class="api-entry">

### beginProfileRange {#beginProfileRange}

```js
Script.beginProfileRange(label)
```

<div class="api-text" v-pre><p>Starts timing a section of code for the app's performance traces. Shouldn't be used outside of the standard scripts.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>label</code></td><td>string</td><td><p>A name that identifies the section of code.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### callEntityScriptMethod {#callEntityScriptMethod}

```js
Script.callEntityScriptMethod(entityID, methodName, parameters?, remoteCallerID?)
```

<div class="api-text" v-pre><p>Calls a method in an entity script.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>The ID of the entity running the entity script.</p></td></tr>
<tr><td><code>methodName</code></td><td>string</td><td></td><td><p>The name of the method to call.</p></td></tr>
<tr><td><code>parameters</code> <em>optional</em></td><td>Array&lt;string&gt;</td><td><code>[]</code></td><td><p>The parameters to call the specified method with.</p></td></tr>
<tr><td><code>remoteCallerID</code> <em>optional</em></td><td><a href="Uuid">Uuid</a></td><td><code>Uuid.NULL</code></td><td><p>An ID that identifies the caller.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### clearInterval {#clearInterval}

```js
Script.clearInterval(timer)
```

<div class="api-text" v-pre><p>Stops an interval timer set by <a href="#setInterval">setInterval</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>timer</code></td><td>object</td><td><p>The interval timer to stop.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Stop an interval timer.</p></div>

```js
// Print a message every second.
var timer = Script.setInterval(function () {
    print("Interval timer fired");
}, 1000);

// Stop the timer after 10 seconds.
Script.setTimeout(function () {
    print("Stop interval timer");
    Script.clearInterval(timer);
}, 10000);
```

</div>

<div class="api-entry">

### clearTimeout {#clearTimeout}

```js
Script.clearTimeout(timer)
```

<div class="api-text" v-pre><p>Stops a timeout timer set by <a href="#setTimeout">setTimeout</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>timer</code></td><td>object</td><td><p>The timeout timer to stop.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Stop a timeout timer.</p></div>

```js
// Print a message after two seconds.
var timer = Script.setTimeout(function () {
    print("Timer fired");
}, 2000);

// Uncomment the following line to stop the timer from firing.
//Script.clearTimeout(timer);
```

</div>

<div class="api-entry">

### dumpApi {#dumpApi}

```js
Script.dumpApi(path)
```

<div class="api-text" v-pre><p>Writes a description of every global object this script sees to a JSON file: for an object from the engine, its class and the methods, properties, signals and enums of its meta-object, with parameter and return types; for anything else, its kind and members. A developer tool: the file is the machine-readable form of the API in this script's context. The file goes under the application's own data folder (<code>api-dumps/</code>, the path's file name only); a test run with the Test API on may name any path.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The file to write.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the file was written.</p></div>

</div>

<div class="api-entry">

### endProfileRange {#endProfileRange}

```js
Script.endProfileRange(label)
```

<div class="api-text" v-pre><p>Finishes timing a section of code for the app's performance traces. Shouldn't be used outside of the standard scripts.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>label</code></td><td>string</td><td><p>A name that identifies the section of code.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getContext {#getContext}

```js
Script.getContext()
```

<div class="api-text" v-pre><p>Gets the context that the script is running in: Darkride/avatar, client entity, server entity, or assignment client.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The context that the script is running in: </p>
<ul> <li><code>"client"</code>: A client or avatar script.</li>
 <li><code>"entity_client"</code>: A client entity script.</li>
 <li><code>"entity_server"</code>: A server entity script.</li>
 <li><code>"agent"</code>: An assignment client script.</li>
 </ul>
<p></p></div>

</div>

<div class="api-entry">

### include {#include}

```js
Script.include(filenames, callback?)
```

<div class="api-text" v-pre><p>Includes JavaScript from other files in the current script. If a callback is specified, the files are loaded and included asynchronously, otherwise they are included synchronously (i.e., script execution blocks while the files are included).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filenames</code></td><td>Array&lt;string&gt;</td><td></td><td><p>The URLs of the scripts to include. Each can be relative to the current script.</p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td>function</td><td><code>null</code></td><td><p>The function to call back when the scripts have been included. It can be either the name of a function or an in-line definition.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### include {#include-2}

```js
Script.include(filename, callback?)
```

<div class="api-text" v-pre><p>Includes JavaScript from another file in the current script. If a callback is specified, the file is loaded and included asynchronously, otherwise it is included synchronously (i.e., script execution blocks while the file is included).</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td></td><td><p>The URL of the script to include. It can be relative to the current script.</p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td>function</td><td><code>null</code></td><td><p>The function to call back when the script has been included. It can be either the name of a function or an in-line definition.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Include a script file asynchronously.</p></div>

```js
// First file: scriptA.js
print("This is script A");

// Second file: scriptB.js
print("This is script B");
Script.include("scriptA.js", function () {
    print("Script A has been included");
});

// If you run scriptB.js you should see only scriptB.js in the running scripts list.
// And you should see the following output:
// This is script B
// This is script A
// Script A has been included
```

</div>

<div class="api-entry">

### isAgentScript {#isAgentScript}

```js
Script.isAgentScript()
```

<div class="api-text" v-pre><p>Checks whether the script is running as an assignment client script.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the script is running as an assignment client script, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### isClientScript {#isClientScript}

```js
Script.isClientScript()
```

<div class="api-text" v-pre><p>Checks whether the script is running as a client or avatar script.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the script is running as a client or avatar script, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### isDebugMode {#isDebugMode}

```js
Script.isDebugMode()
```

<div class="api-text" v-pre><p>Checks whether the application was compiled as a debug build.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the application was compiled as a debug build, <code>false</code> if it was compiled as a release build.</p></div>

</div>

<div class="api-entry">

### isEntityClientScript {#isEntityClientScript}

```js
Script.isEntityClientScript()
```

<div class="api-text" v-pre><p>Checks whether the script is running as a client entity script.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the script is running as a client entity script, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### isEntityScriptRunning {#isEntityScriptRunning}

```js
Script.isEntityScriptRunning(entityID)
```

<div class="api-text" v-pre><p>Checks whether an entity has an entity script running.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the entity has an entity script running, <code>false</code> if it doesn't.</p></div>

</div>

<div class="api-entry">

### isEntityServerScript {#isEntityServerScript}

```js
Script.isEntityServerScript()
```

<div class="api-text" v-pre><p>Checks whether the script is running as a server entity script.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the script is running as a server entity script, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### load {#load}

```js
Script.load(filename)
```

<div class="api-text" v-pre><p>Starts running another script in Darkride, if it isn't already running. The script is not automatically loaded next time Darkride starts. </p>
<p class="availableIn"><strong>Supported Script Types:</strong> client scripts • Avatar Scripts</p>
 <p>See also, <a href="ScriptDiscoveryService#loadScript"><code>ScriptDiscoveryService.loadScript</code></a>.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>The URL of the script to load. This can be relative to the current script's URL.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Load a script from another script.</p></div>

```js
// First file: scriptA.js
print("This is script A");

// Second file: scriptB.js
print("This is script B");
Script.load("scriptA.js");

// If you run scriptB.js you should see both scripts in the Running Scripts dialog.
// And you should see the following output:
// This is script B
// This is script A
```

</div>

<div class="api-entry">

### print {#print}

```js
Script.print(message)
```

<div class="api-text" v-pre><p>Prints a message to the program log and emits <a href="#printedMessage"><code>Script.printedMessage</code></a>. </p>
<p>Alternatively, you can use <a href="globals#print"><code>print</code></a> or one of the <a href="console"><code>console</code></a> API methods.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The message to print.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### removeEventHandler {#removeEventHandler}

```js
Script.removeEventHandler(entityID, eventName, handler)
```

<div class="api-text" v-pre><p>Removes a function from the list of functions called when an entity event occurs on a particular entity. </p>
<p>See also, the <a href="Entities"><code>Entities</code></a> API.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity.</p></td></tr>
<tr><td><code>eventName</code></td><td><a href="#EntityEvent">Script.EntityEvent</a></td><td><p>The name of the entity event.</p></td></tr>
<tr><td><code>handler</code></td><td>function</td><td><p>The name of the function to no longer call when the entity event occurs on the entity.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### requestGarbageCollection {#requestGarbageCollection}

```js
Script.requestGarbageCollection()
```

<div class="api-text" v-pre><p>Manually runs the JavaScript garbage collector which reclaims memory by disposing of objects that are no longer reachable.</p></div>

</div>

<div class="api-entry">

### require {#require}

```js
Script.require(module)
```

<div class="api-text" v-pre><p>Provides access to methods or objects provided in an external JavaScript or JSON file. </p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>module</code></td><td>string</td><td><p>The module to use. May be a JavaScript file, a JSON file, or the name of a system module such as <code>"appUi"</code> (i.e., the "appUi.js" system module JavaScript file).</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object | array <p>The value assigned to <code>module.exports</code> in the JavaScript file, or the value defined in the JSON file.</p></div>

</div>

<div class="api-entry">

### resolvePath {#resolvePath}

```js
Script.resolvePath(path)
```

<div class="api-text" v-pre><p>Resolves a relative path to an absolute path. The relative path is relative to the script's location.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The relative path to resolve.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The absolute path.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the directory and filename of the running script.</p></div>

```js
print(Script.resolvePath(""));
```

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the directory of the running script.</p></div>

```js
print(Script.resolvePath("."));
```

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the path to a file located relative to the running script.</p></div>

```js
print(Script.resolvePath("../assets/sounds/hello.wav"));
```

</div>

<div class="api-entry">

### resourcesPath {#resourcesPath}

```js
Script.resourcesPath()
```

<div class="api-text" v-pre><p>Gets the path to the resources directory for QML files.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The path to the resources directory for QML files.</p></div>

</div>

<div class="api-entry">

### setInterval {#setInterval}

```js
Script.setInterval(function, interval)
```

<div class="api-text" v-pre><p>Calls a function repeatedly, at a set interval.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>function</code></td><td>function</td><td><p>The function to call. This can be either the name of a function or an in-line definition.</p></td></tr>
<tr><td><code>interval</code></td><td>number</td><td><p>The interval at which to call the function, in ms.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>A handle to the interval timer. This can be used in <a href="#clearInterval"><code>Script.clearInterval</code></a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Print a message every second.</p></div>

```js
Script.setInterval(function () {
    print("Interval timer fired");
}, 1000);
```

</div>

<div class="api-entry">

### setTimeout {#setTimeout}

```js
Script.setTimeout(function, timeout)
```

<div class="api-text" v-pre><p>Calls a function once, after a delay.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>function</code></td><td>function</td><td><p>The function to call. This can be either the name of a function or an in-line definition.</p></td></tr>
<tr><td><code>timeout</code></td><td>number</td><td><p>The delay after which to call the function, in ms.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>A handle to the timeout timer. This can be used in <a href="#clearTimeout"><code>Script.clearTimeout</code></a>.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Print a message once, after a second.</p></div>

```js
Script.setTimeout(function () {
    print("Timeout timer fired");
}, 1000);
```

</div>

<div class="api-entry">

### stop {#stop}

```js
Script.stop(marshal?)
```

<div class="api-text" v-pre><p>Stops and unloads the current script. </p>
<p><strong>Warning:</strong> If an assignment client script, the script gets restarted after stopping.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>marshal</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>Marshal. </p>
<p class="important">Deprecated: This parameter is deprecated and will be removed.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Stop a script after 5s.</p></div>

```js
Script.setInterval(function () {
    print("Hello");
}, 1000);

Script.setTimeout(function () {
    Script.stop(true);
}, 5000);
```

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### doneRunning {#doneRunning}

```js
Script.doneRunning.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the script has stopped.</p></div>

</div>

<div class="api-entry">

### entityScriptPreloadFinished {#entityScriptPreloadFinished}

```js
Script.entityScriptPreloadFinished.connect(function (entityID) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the script starts for the user. See also, <a href="Entities#preload"><code>Entities.preload</code></a>. </p>
<p class="availableIn"><strong>Supported Script Types:</strong> Client Entity Scripts • Server Entity Scripts</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity that the script is running in.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Get the ID of the entity that a client entity script is running in.</p></div>

```js
var entityScript = function () {
    this.entityID = Uuid.NULL;
};

Script.entityScriptPreloadFinished.connect(function (entityID) {
    this.entityID = entityID;
    print("Entity ID: " + this.entityID);
});

var entityID = Entities.addEntity({
    type: "Box",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -5 })),
    dimensions: { x: 0.5, y: 0.5, z: 0.5 },
    color: { red: 255, green: 0, blue: 0 },
    script: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});
```

</div>

<div class="api-entry">

### errorMessage {#errorMessage}

```js
Script.errorMessage.connect(function (message, scriptName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the script generates an error, <a href="console#error"><code>console.error</code></a> or <a href="console#exception"><code>console.exception</code></a> is called, or <a href="console#assert"><code>console.assert</code></a> is called and fails.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The error message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>The name of the script that generated the error message.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### infoMessage {#infoMessage}

```js
Script.infoMessage.connect(function (message, scriptName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the script generates an information message or <a href="console#info"><code>console.info</code></a> is called.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The information message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>The name of the script that generated the information message.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### printedMessage {#printedMessage}

```js
Script.printedMessage.connect(function (message, scriptName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the script prints a message to the program log via <a href="globals#print"><code>print</code></a>, <a href="#print"><code>Script.print</code></a>, <a href="console#log"><code>console.log</code></a>, <a href="console#debug"><code>console.debug</code></a>, <a href="console#group"><code>console.group</code></a>, <a href="console#groupEnd"><code>console.groupEnd</code></a>, <a href="console#time"><code>console.time</code></a>, or <a href="console#timeEnd"><code>console.timeEnd</code></a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>The name of the script that generated the message.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### runningStateChanged {#runningStateChanged}

```js
Script.runningStateChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the running state of the script changes, e.g., from running to stopping.</p></div>

</div>

<div class="api-entry">

### scriptEnding {#scriptEnding}

```js
Script.scriptEnding.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the script is stopping.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when a script is stopping.</p></div>

```js
print("Script started");

Script.scriptEnding.connect(function () {
    print("Script ending");
});

Script.setTimeout(function () {
    print("Stopping script");
    Script.stop();
}, 1000);
```

</div>

<div class="api-entry">

### unhandledException {#unhandledException}

```js
Script.unhandledException.connect(function (exception) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a script generates an unhandled exception.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>exception</code></td><td>object</td><td><p>The details of the exception.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the details of an unhandled exception.</p></div>

```js
Script.unhandledException.connect(function (exception) {
    print("Unhandled exception: " + JSON.stringify(exception));
});
var properties = JSON.parse("{ x: 1"); // Invalid JSON string.
```

</div>

<div class="api-entry">

### update {#update}

```js
Script.update.connect(function (deltaTime) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered frequently at a system-determined interval.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deltaTime</code></td><td>number</td><td><p>The time since the last update, in s.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report script update intervals.</p></div>

```js
Script.update.connect(function (deltaTime) {
    print("Update: " + deltaTime);
});
```

</div>

<div class="api-entry">

### warningMessage {#warningMessage}

```js
Script.warningMessage.connect(function (message, scriptName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the script generates a warning or <a href="console#warn"><code>console.warn</code></a> is called.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>The warning message.</p></td></tr>
<tr><td><code>scriptName</code></td><td>string</td><td><p>The name of the script that generated the warning message.</p></td></tr>
</tbody></table></div>

</div>

## Types {#types}

<div class="api-entry">

### collisionEventCallback {#collisionEventCallback}

<div class="api-text" v-pre><p>Called when a collision event occurs on an entity as registered with <a href="#addEventHandler"><code>Script.addEventHandler</code></a>.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityA</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of one entity in the collision.</p></td></tr>
<tr><td><code>entityB</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the other entity in the collision.</p></td></tr>
<tr><td><code>collisionEvent</code></td><td><a href="globals#Collision">Collision</a></td><td><p>Details of the collision.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### EntityEvent {#EntityEvent}

<div class="api-text" v-pre><p>The name of an entity event. When the entity event occurs, any function that has been registered for that event via <a href="#addEventHandler"><code>Script.addEventHandler</code></a> is called with parameters per the entity event.</p>
 <table> <thead> <tr><th>Event Name</th><th>Callback Type</th><th>Entity Event</th></tr>
 </thead>
 <tbody> <tr><td><code>"enterEntity"</code></td><td><a href="#entityEventCallback">entityEventCallback</a></td> <td><a href="Entities#enterEntity"><code>Entities.enterEntity</code></a></td></tr>
 <tr><td><code>"leaveEntity"</code></td><td><a href="#entityEventCallback">entityEventCallback</a></td> <td><a href="Entities#leaveEntity"><code>Entities.leaveEntity</code></a></td></tr>
 <tr><td><code>"mousePressOnEntity"</code></td><td><a href="#pointerEventCallback">pointerEventCallback</a></td> <td><a href="Entities#mousePressOnEntity"><code>Entities.mousePressOnEntity</code></a></td></tr>
 <tr><td><code>"mouseMoveOnEntity"</code></td><td><a href="#pointerEventCallback">pointerEventCallback</a></td> <td><a href="Entities#mouseMoveOnEntity"><code>Entities.mouseMoveOnEntity</code></a></td></tr>
 <tr><td><code>"mouseReleaseOnEntity"</code></td><td><a href="#pointerEventCallback">pointerEventCallback</a></td> <td><a href="Entities#mouseReleaseOnEntity"><code>Entities.mouseReleaseOnEntity</code></a></td></tr>
 <tr><td><code>"clickDownOnEntity"</code></td><td><a href="#pointerEventCallback">pointerEventCallback</a></td> <td><a href="Entities#clickDownOnEntity"><code>Entities.clickDownOnEntity</code></a></td></tr>
 <tr><td><code>"holdingClickOnEntity"</code></td><td><a href="#pointerEventCallback">pointerEventCallback</a></td> <td><a href="Entities#holdingClickOnEntity"><code>Entities.holdingClickOnEntity</code></a></td></tr>
 <tr><td><code>"clickReleaseOnEntity"</code></td><td><a href="#pointerEventCallback">pointerEventCallback</a></td> <td><a href="Entities#clickReleaseOnEntity"><code>Entities.clickReleaseOnEntity</code></a></td></tr>
 <tr><td><code>"hoverEnterEntity"</code></td><td><a href="#pointerEventCallback">pointerEventCallback</a></td> <td><a href="Entities#hoverEnterEntity"><code>Entities.hoverEnterEntity</code></a></td></tr>
 <tr><td><code>"hoverOverEntity"</code></td><td><a href="#pointerEventCallback">pointerEventCallback</a></td> <td><a href="Entities#hoverOverEntity"><code>Entities.hoverOverEntity</code></a></td></tr>
 <tr><td><code>"hoverLeaveEntity"</code></td><td><a href="#pointerEventCallback">pointerEventCallback</a></td> <td><a href="Entities#hoverLeaveEntity"><code>Entities.hoverLeaveEntity</code></a></td></tr>
 <tr><td><code>"collisionWithEntity"</code></td><td><a href="#collisionEventCallback">collisionEventCallback</a></td> <td><a href="Entities#collisionWithEntity"><code>Entities.collisionWithEntity</code></a></td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### entityEventCallback {#entityEventCallback}

<div class="api-text" v-pre><p>Called when an entity event occurs on an entity as registered with <a href="#addEventHandler"><code>Script.addEventHandler</code></a>.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity the event has occured on.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### pointerEventCallback {#pointerEventCallback}

<div class="api-text" v-pre><p>Called when a pointer event occurs on an entity as registered with <a href="#addEventHandler"><code>Script.addEventHandler</code></a>.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>The ID of the entity the event has occurred on.</p></td></tr>
<tr><td><code>pointerEvent</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Details of the event.</p></td></tr>
</tbody></table></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### _requireResolve {#_requireResolve}

```js
Script._requireResolve(module, relativeTo?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>module</code></td><td>string</td><td></td><td><p>Module.</p></td></tr>
<tr><td><code>relativeTo</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>Relative to.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>Result.</p></div>

</div>

<div class="api-entry">

### callAnimationStateHandler {#callAnimationStateHandler}

```js
Script.callAnimationStateHandler(callback, parameters, names, useNames, resultHandler)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>callback</code></td><td>function</td><td><p>Callback function.</p></td></tr>
<tr><td><code>parameters</code></td><td>object</td><td><p>Parameters.</p></td></tr>
<tr><td><code>names</code></td><td>Array&lt;string&gt;</td><td><p>Names.</p></td></tr>
<tr><td><code>useNames</code></td><td>boolean</td><td><p>Use names.</p></td></tr>
<tr><td><code>resultHandler</code></td><td>function</td><td><p>Result handler.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### callEntityScriptMethod {#callEntityScriptMethod-2}

```js
Script.callEntityScriptMethod(entityID, methodName, event)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Calls a method in an entity script.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>Entity ID.</p></td></tr>
<tr><td><code>methodName</code></td><td>string</td><td><p>Method name.</p></td></tr>
<tr><td><code>event</code></td><td><a href="globals#PointerEvent">PointerEvent</a></td><td><p>Pointer event.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### callEntityScriptMethod {#callEntityScriptMethod-3}

```js
Script.callEntityScriptMethod(entityID, methodName, otherID, collision)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Calls a method in an entity script.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>Entity ID.</p></td></tr>
<tr><td><code>methodName</code></td><td>string</td><td><p>Method name.</p></td></tr>
<tr><td><code>otherID</code></td><td><a href="Uuid">Uuid</a></td><td><p>Other entity ID.</p></td></tr>
<tr><td><code>collision</code></td><td><a href="globals#Collision">Collision</a></td><td><p>Collision.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### entityScriptContentAvailable {#entityScriptContentAvailable}

```js
Script.entityScriptContentAvailable(entityID, scriptOrURL, contents, isURL, success, status)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>Entity ID.</p></td></tr>
<tr><td><code>scriptOrURL</code></td><td>string</td><td><p>Path.</p></td></tr>
<tr><td><code>contents</code></td><td>string</td><td><p>Contents.</p></td></tr>
<tr><td><code>isURL</code></td><td>boolean</td><td><p>Is a URL.</p></td></tr>
<tr><td><code>success</code></td><td>boolean</td><td><p>Success.</p></td></tr>
<tr><td><code>status</code></td><td>string</td><td><p>Status.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### evaluate {#evaluate}

```js
Script.evaluate(program, filename, lineNumber?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>program</code></td><td>string</td><td></td><td><p>Program.</p></td></tr>
<tr><td><code>filename</code></td><td>string</td><td></td><td><p>File name.</p></td></tr>
<tr><td><code>lineNumber</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>Line number.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>Object.</p></div>

</div>

<div class="api-entry">

### evaluateInClosure {#evaluateInClosure}

```js
Script.evaluateInClosure(locals, program)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>locals</code></td><td>object</td><td><p>Locals.</p></td></tr>
<tr><td><code>program</code></td><td>object</td><td><p>Program.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>Object.</p></div>

</div>

<div class="api-entry">

### executeOnScriptThread {#executeOnScriptThread}

```js
Script.executeOnScriptThread(function, type?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>function</code></td><td>function</td><td></td><td><p>Function.</p></td></tr>
<tr><td><code>type</code> <em>optional</em></td><td>ConnectionType</td><td><code>2</code></td><td><p>Connection type.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### formatExecption {#formatExecption}

```js
Script.formatExecption(exception, inludeExtendeDetails)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>exception</code></td><td>object</td><td><p>Exception.</p></td></tr>
<tr><td><code>inludeExtendeDetails</code></td><td>boolean</td><td><p>Include extended details.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>String.</p></div>

</div>

<div class="api-entry">

### generateUUID {#generateUUID}

```js
Script.generateUUID()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use <a href="Uuid#generate">Uuid.generate</a> instead.</p></div>
:::

<div class="api-returns" v-pre><strong>Returns:</strong> <a href="Uuid">Uuid</a> <p>A new UUID.</p></div>

</div>

<div class="api-entry">

### lintScript {#lintScript}

```js
Script.lintScript(sourceCode, fileName, lineNumber?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sourceCode</code></td><td>string</td><td></td><td><p>Source code.</p></td></tr>
<tr><td><code>fileName</code></td><td>string</td><td></td><td><p>File name.</p></td></tr>
<tr><td><code>lineNumber</code> <em>optional</em></td><td>number</td><td><code>1</code></td><td><p>Line number.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>Object.</p></div>

</div>

<div class="api-entry">

### loadEntityScript {#loadEntityScript}

```js
Script.loadEntityScript(entityID, script, forceRedownload)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td><p>Entity ID.</p></td></tr>
<tr><td><code>script</code></td><td>string</td><td><p>Script.</p></td></tr>
<tr><td><code>forceRedownload</code></td><td>boolean</td><td><p>Force re-download.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### makeError {#makeError}

```js
Script.makeError(other?, type?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>other</code> <em>optional</em></td><td>object</td><td></td><td><p>Other.</p></td></tr>
<tr><td><code>type</code> <em>optional</em></td><td>string</td><td><code>&quot;Error&quot;</code></td><td><p>Error.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> object <p>Object.</p></div>

</div>

<div class="api-entry">

### registerFunction {#registerFunction}

```js
Script.registerFunction(name, function, numArguments?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>Name.</p></td></tr>
<tr><td><code>function</code></td><td>function</td><td></td><td><p>Function.</p></td></tr>
<tr><td><code>numArguments</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>Number of arguments.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### registerFunction {#registerFunction-2}

```js
Script.registerFunction(parent, name, function, numArguments?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>parent</code></td><td>string</td><td></td><td><p>Parent.</p></td></tr>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>Name.</p></td></tr>
<tr><td><code>function</code></td><td>function</td><td></td><td><p>Function.</p></td></tr>
<tr><td><code>numArguments</code> <em>optional</em></td><td>number</td><td><code>-1</code></td><td><p>Number of arguments.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### registerGetterSetter {#registerGetterSetter}

```js
Script.registerGetterSetter(name, getter, setter, parent?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td></td><td><p>Name.</p></td></tr>
<tr><td><code>getter</code></td><td>function</td><td></td><td><p>Getter.</p></td></tr>
<tr><td><code>setter</code></td><td>function</td><td></td><td><p>Setter.</p></td></tr>
<tr><td><code>parent</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>Parent.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### registerValue {#registerValue}

```js
Script.registerValue(name, value)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>Name.</p></td></tr>
<tr><td><code>value</code></td><td>object</td><td><p>Value.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### resetModuleCache {#resetModuleCache}

```js
Script.resetModuleCache(deleteScriptCache?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deleteScriptCache</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>Delete script cache.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### unloadAllEntityScripts {#unloadAllEntityScripts}

```js
Script.unloadAllEntityScripts(blockingCall?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>blockingCall</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>Wait for completion if call moved to another thread.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### unloadEntityScript {#unloadEntityScript}

```js
Script.unloadEntityScript(entityID, shouldRemoveFromMap?)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>entityID</code></td><td><a href="Uuid">Uuid</a></td><td></td><td><p>Entity ID.</p></td></tr>
<tr><td><code>shouldRemoveFromMap</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p>Should remove from map.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### updateMemoryCost {#updateMemoryCost}

```js
Script.updateMemoryCost(deltaSize)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>deltaSize</code></td><td>number</td><td><p>Delta size.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### cleanupMenuItem {#cleanupMenuItem}

```js
Script.cleanupMenuItem.connect(function (menuItem) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>menuItem</code></td><td>string</td><td><p>Menu item.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### clearDebugWindow {#clearDebugWindow}

```js
Script.clearDebugWindow.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### entityScriptDetailsUpdated {#entityScriptDetailsUpdated}

```js
Script.entityScriptDetailsUpdated.connect(function () {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### errorLoadingScript {#errorLoadingScript}

```js
Script.errorLoadingScript.connect(function (filename) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>File name.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### finished {#finished}

```js
Script.finished.connect(function (filename, engine) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>File name.</p></td></tr>
<tr><td><code>engine</code></td><td>object</td><td><p>Engine.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### loadScript {#loadScript}

```js
Script.loadScript.connect(function (scriptName, isUserLoaded) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>scriptName</code></td><td>string</td><td><p>Script name.</p></td></tr>
<tr><td><code>isUserLoaded</code></td><td>boolean</td><td><p>Is user loaded.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### reloadScript {#reloadScript}

```js
Script.reloadScript.connect(function (scriptName, isUserLoaded) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>scriptName</code></td><td>string</td><td><p>Script name.</p></td></tr>
<tr><td><code>isUserLoaded</code></td><td>boolean</td><td><p>Is user loaded.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### scriptLoaded {#scriptLoaded}

```js
Script.scriptLoaded.connect(function (filename) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>File name.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### signalHandlerException {#signalHandlerException}

```js
Script.signalHandlerException.connect(function (exception) {
    ...
});
```

::: warning Deprecated
<div class="api-text" v-pre><p>This signal is deprecated and will be removed.</p></div>
:::

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>exception</code></td><td>object</td><td><p>Exception.</p></td></tr>
</tbody></table></div>

</div>
