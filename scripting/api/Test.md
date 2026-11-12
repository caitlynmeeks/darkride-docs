---
title: "Test"
description: "Here's how you could use the Test API: Write a script using the below and launch interface with: interface --testScript path/to/script.js Save the recorded events with Test.stopTracing to a .json or ."
---

# Test

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts.</div>

<div class="api-text" v-pre><p>Here's how you could use the Test API:</p>
 <ul> <li>Write a script using the below and launch interface with: <code>interface --testScript path/to/script.js</code></li>
 <li>Save the recorded events with <a href="#stopTracing"><code>Test.stopTracing</code></a> to a <code>.json</code> or <code>.json.gz</code> file</li>
 <li>Open Chrome, visit <span>chrome://tracing</span> and load your file</li>
 </ul></div>

## Functions {#functions}

<div class="api-entry">

### clear {#clear}

```js
Test.clear()
```

<div class="api-text" v-pre><p>Clears all caches</p></div>

</div>

<div class="api-entry">

### clearCaches {#clearCaches}

```js
Test.clearCaches()
```

<div class="api-text" v-pre><p>Clear all caches (menu command Reload Content)</p></div>

</div>

<div class="api-entry">

### endTraceEvent {#endTraceEvent}

```js
Test.endTraceEvent(name)
```

<div class="api-text" v-pre><p>Stop a specific name event</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>Name of event</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getOtherAvatarsReplicaCount {#getOtherAvatarsReplicaCount}

```js
Test.getOtherAvatarsReplicaCount()
```

<div class="api-text" v-pre><p>Return the number of replicas that are being created of other-avatars when entering a world</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Current number of replicas of other-avatars.</p></div>

</div>

<div class="api-entry">

### isTextureLoadingComplete {#isTextureLoadingComplete}

```js
Test.isTextureLoadingComplete()
```

<div class="api-text" v-pre><p>Check whether all textures have been loaded</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> texture memory usage is not increasing</p></div>

</div>

<div class="api-entry">

### loadTestScene {#loadTestScene}

```js
Test.loadTestScene(sceneFile)
```

<div class="api-text" v-pre><p>Waits for all pending downloads, parsing and texture transfers to be complete</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sceneFile</code></td><td>string</td><td><p>URL of scene to load</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### quit {#quit}

```js
Test.quit()
```

<div class="api-text" v-pre><p>Exits the application</p></div>

</div>

<div class="api-entry">

### saveObject {#saveObject}

```js
Test.saveObject(name, filename)
```

<div class="api-text" v-pre><p>Save a JSON object to a file in the test results location</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>Name of the object</p></td></tr>
<tr><td><code>filename</code></td><td>string</td><td><p>Name of file to save to</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### savePhysicsSimulationStats {#savePhysicsSimulationStats}

```js
Test.savePhysicsSimulationStats(filename)
```

<div class="api-text" v-pre><p>Write detailed timing stats of next physics stepSimulation() to filename</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>Name of file to save to</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setMinimumGPUTextureMemStabilityCount {#setMinimumGPUTextureMemStabilityCount}

```js
Test.setMinimumGPUTextureMemStabilityCount(count)
```

<div class="api-text" v-pre><p>The arrival's texture gate's settle, as a count of checks at 60 a second (30 = 500 ms, the default); the gate also needs min(count, 5) consecutive checks. Until 2026-11-07 the count was consecutive presents, which a slowly presenting loading screen stretched.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>count</code></td><td>number</td><td><p>The settle as a count of checks at 60 a second</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setOtherAvatarsReplicaCount {#setOtherAvatarsReplicaCount}

```js
Test.setOtherAvatarsReplicaCount(count)
```

<div class="api-text" v-pre><p>Values higher than 0 will create replicas of other-avatars when entering a world for testing purpouses</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>count</code></td><td>number</td><td><p>Number of replicas we want to create</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### showMaximized {#showMaximized}

```js
Test.showMaximized()
```

<div class="api-text" v-pre><p>Maximizes the window</p></div>

</div>

<div class="api-entry">

### startTraceEvent {#startTraceEvent}

```js
Test.startTraceEvent(name)
```

<div class="api-text" v-pre><p>Starts a specific trace event</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>Name of event</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### startTracing {#startTracing}

```js
Test.startTracing(logrules?)
```

<div class="api-text" v-pre><p>Start recording Chrome compatible tracing events<br> <code>logrules</code> can be used to specify a set of logging category rules to limit what gets captured</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>logrules</code> <em>optional</em></td><td>string</td><td><code>&quot;&quot;</code></td><td><p>See implementation for explanation</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### stopTracing {#stopTracing}

```js
Test.stopTracing(filename)
```

<div class="api-text" v-pre><p>Stop recording Chrome compatible tracing events and serialize recorded events to a file<br> Using a filename with <code>.gz</code> extension will automatically compress the output file</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>filename</code></td><td>string</td><td><p>Name of file to save to ending with <code>.json</code> or <code>.json.gz</code></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> bool <p>True if successful.</p></div>

</div>

<div class="api-entry">

### wait {#wait}

```js
Test.wait(milliseconds)
```

<div class="api-text" v-pre><p>Waits a specific number of milliseconds</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>milliseconds</code></td><td>number</td><td><p>Number of milliseconds to wait</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### waitForConnection {#waitForConnection}

```js
Test.waitForConnection(maxWaitMs?)
```

<div class="api-text" v-pre><p>Waits for establishment of connection to server</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>maxWaitMs</code> <em>optional</em></td><td>number</td><td><code>10000</code></td><td><p>Number of milliseconds to wait</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### waitForDownloadIdle {#waitForDownloadIdle}

```js
Test.waitForDownloadIdle()
```

<div class="api-text" v-pre><p>Waits for all pending downloads to be complete</p></div>

</div>

<div class="api-entry">

### waitForProcessingIdle {#waitForProcessingIdle}

```js
Test.waitForProcessingIdle()
```

<div class="api-text" v-pre><p>Waits for all file parsing operations to be complete</p></div>

</div>

<div class="api-entry">

### waitForTextureIdle {#waitForTextureIdle}

```js
Test.waitForTextureIdle()
```

<div class="api-text" v-pre><p>Waits for all texture transfers to be complete</p></div>

</div>

<div class="api-entry">

### waitIdle {#waitIdle}

```js
Test.waitIdle()
```

<div class="api-text" v-pre><p>Waits for all pending downloads, parsing and texture transfers to be complete</p></div>

</div>
