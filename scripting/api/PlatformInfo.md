---
title: "PlatformInfo"
description: "The PlatformInfo API provides information about the hardware platform being used."
---

# PlatformInfo

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>PlatformInfo</code> API provides information about the hardware platform being used.</p></div>

## Functions {#functions}

<div class="api-entry">

### getComputer {#getComputer}

```js
PlatformInfo.getComputer()
```

<div class="api-text" v-pre><p>Gets the platform description of the computer.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The <a href="#ComputerDescription">ComputerDescription</a> information as a JSON string.</p></div>

</div>

<div class="api-entry">

### getCPU {#getCPU}

```js
PlatformInfo.getCPU(index)
```

<div class="api-text" v-pre><p>Gets the platform description of a CPU.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index number of the CPU.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The CPU's <a href="#CPUDescription">CPUDescription</a> information as a JSON string.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report details of the computer's CPUs.</p></div>

```js
var numCPUs = PlatformInfo.getNumCPUs();
print("Number of CPUs: " + numCPUs);
for (var i = 0; i < numCPUs; i++) {
    var cpuDescription = PlatformInfo.getCPU(i);
    print("CPU " + i + ": " + cpuDescription);
}
```

</div>

<div class="api-entry">

### getDisplay {#getDisplay}

```js
PlatformInfo.getDisplay(index)
```

<div class="api-text" v-pre><p>Gets the platform description of a display.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index number of the display.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The display's <a href="#DisplayDescription">DisplayDescription</a> information as a JSON string.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report details of the systems's displays.</p></div>

```js
var numDisplays = PlatformInfo.getNumDisplays();
print("Number of displays: " + numDisplays);
for (var i = 0; i < numDisplays; i++) {
    var displayDescription = PlatformInfo.getDisplay(i);
    print("Display " + i + ": " + displayDescription);
}
```

</div>

<div class="api-entry">

### getGPU {#getGPU}

```js
PlatformInfo.getGPU(index)
```

<div class="api-text" v-pre><p>Gets the platform description of a GPU.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>index</code></td><td>number</td><td><p>The index number of the GPU.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The GPU's <a href="#GPUDescription">GPUDescription</a> information as a JSON string.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report details of the computer's GPUs.</p></div>

```js
var numGPUs = PlatformInfo.getNumGPUs();
print("Number of GPUs: " + numGPUs);
for (var i = 0; i < numGPUs; i++) {
    var gpuDescription = PlatformInfo.getGPU(i);
    print("GPU " + i + ": " + gpuDescription);
}
```

</div>

<div class="api-entry">

### getMasterCPU {#getMasterCPU}

```js
PlatformInfo.getMasterCPU()
```

<div class="api-text" v-pre><p>Gets the index number of the master CPU.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The index of the master CPU.</p></div>

</div>

<div class="api-entry">

### getMasterDisplay {#getMasterDisplay}

```js
PlatformInfo.getMasterDisplay()
```

<div class="api-text" v-pre><p>Gets the index number of the master display.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The index of the master display.</p></div>

</div>

<div class="api-entry">

### getMasterGPU {#getMasterGPU}

```js
PlatformInfo.getMasterGPU()
```

<div class="api-text" v-pre><p>Gets the index number of the master GPU.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The index of the master GPU.</p></div>

</div>

<div class="api-entry">

### getMemory {#getMemory}

```js
PlatformInfo.getMemory()
```

<div class="api-text" v-pre><p>Gets the platform description of computer memory.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The computer's <a href="#MemoryDescription">MemoryDescription</a> information as a JSON string.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report details of the computer's memory.</p></div>

```js
print("Memory: " + PlatformInfo.getMemory());
```

</div>

<div class="api-entry">

### getNumCPUs {#getNumCPUs}

```js
PlatformInfo.getNumCPUs()
```

<div class="api-text" v-pre><p>Gets the number of CPUs.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The number of CPUs.</p></div>

</div>

<div class="api-entry">

### getNumDisplays {#getNumDisplays}

```js
PlatformInfo.getNumDisplays()
```

<div class="api-text" v-pre><p>Gets the number of displays.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The number of displays.</p></div>

</div>

<div class="api-entry">

### getNumGPUs {#getNumGPUs}

```js
PlatformInfo.getNumGPUs()
```

<div class="api-text" v-pre><p>Gets the number of GPUs.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The number of GPUs.</p></div>

</div>

<div class="api-entry">

### getPlatform {#getPlatform}

```js
PlatformInfo.getPlatform()
```

<div class="api-text" v-pre><p>Gets the complete description of the computer as a whole.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The <a href="#PlatformDescription">PlatformDescription</a> information as a JSON string.</p></div>

</div>

<div class="api-entry">

### getPlatformTierNames {#getPlatformTierNames}

```js
PlatformInfo.getPlatformTierNames()
```

<div class="api-text" v-pre><p>Gets the names of the possible platform tiers, per <a href="#PlatformTier"><code>PlatformInfo.PlatformTier</code></a>.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The names of the possible platform tiers.</p></div>

</div>

<div class="api-entry">

### getTierProfiled {#getTierProfiled}

```js
PlatformInfo.getTierProfiled()
```

<div class="api-text" v-pre><p>Gets the platform tier of the computer, profiled at Interface start-up.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#PlatformTier">PlatformInfo.PlatformTier</a> <p>The platform tier of the computer.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the platform tier of the computer.</p></div>

```js
var platformTier = PlatformInfo.getTierProfiled();
var platformTierName = PlatformInfo.getPlatformTierNames()[platformTier];
print("Platform tier: " + platformTier + ", " + platformTierName);
```

</div>

<div class="api-entry">

### has3DHTML {#has3DHTML}

```js
PlatformInfo.has3DHTML()
```

<div class="api-text" v-pre><p>Checks whether HTML on 3D surfaces (e.g., Web entities) is supported.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the current display supports HTML on 3D surfaces, <code>false</code> if it doesn't.</p></div>

</div>

<div class="api-entry">

### hasRiftControllers {#hasRiftControllers}

```js
PlatformInfo.hasRiftControllers()
```

<div class="api-text" v-pre><p>Checks whether Oculus Touch controllers are connected.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if Oculus Touch controllers are connected, <code>false</code> if they aren't.</p></div>

</div>

<div class="api-entry">

### hasViveControllers {#hasViveControllers}

```js
PlatformInfo.hasViveControllers()
```

<div class="api-text" v-pre><p>Checks whether Vive controllers are connected.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if Vive controllers are connected, <code>false</code> if they aren't.</p></div>

</div>

<div class="api-entry">

### isRenderMethodDeferredCapable {#isRenderMethodDeferredCapable}

```js
PlatformInfo.isRenderMethodDeferredCapable()
```

<div class="api-text" v-pre><p>Gets whether the current hardware can use deferred rendering.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the current hardware can use deferred rendering, <code>false</code> if it can't.</p></div>

</div>

<div class="api-entry">

### isStandalone {#isStandalone}

```js
PlatformInfo.isStandalone()
```

<div class="api-text" v-pre><p>Checks whether Interface is running on a stand-alone HMD device (CPU incorporated into the HMD display).</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if Interface is running on a stand-alone HMD device, <code>false</code> if it isn't.</p></div>

</div>

## Types {#types}

<div class="api-entry">

### ComputerDescription {#ComputerDescription}

<div class="api-text" v-pre><p>Information on the computer.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>OS</code></td><td><a href="#ComputerOS">PlatformInfo.ComputerOS</a></td><td><p>The operating system.</p></td></tr>
<tr><td><code>OSversion</code></td><td>string</td><td><p>The operating system version.</p></td></tr>
<tr><td><code>vendor</code></td><td>string</td><td><p>The computer vendor.</p></td></tr>
<tr><td><code>model</code></td><td>string</td><td><p>The computer model.</p></td></tr>
<tr><td><code>profileTier</code></td><td><a href="#PlatformTier">PlatformInfo.PlatformTier</a></td><td><p>The platform tier of the computer, profiled at Interface start-up.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ComputerOS {#ComputerOS}

<div class="api-text" v-pre><p>The computer operating system.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"WINDOWS"</code></td><td>Windows.</td></tr>
 <tr><td><code>"MACOS"</code></td><td>Mac OS.</td></tr>
 <tr><td><code>"LINUX"</code></td><td>Linux.</td></tr>
 <tr><td><code>"ANDROID"</code></td><td>Android.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### CPUDescription {#CPUDescription}

<div class="api-text" v-pre><p>Information on a CPU.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>vendor</code></td><td>string</td><td><p>The CPU vendor (e.g., <code>"Intel"</code> or <code>"AMD"</code>).</p></td></tr>
<tr><td><code>model</code></td><td>string</td><td><p>The CPU model.</p></td></tr>
<tr><td><code>numCores</code></td><td>number</td><td><p>The number of logical cores.</p></td></tr>
<tr><td><code>isMaster</code></td><td>boolean</td><td><p><code>true</code> if the CPU is the "master" or primary CPU, <code>false</code> or <code>undefined</code> if it isn't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### DisplayDescription {#DisplayDescription}

<div class="api-text" v-pre><p>Information on a display.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>description</code></td><td>string</td><td><p>The display's description.</p></td></tr>
<tr><td><code>deviceName</code></td><td>string</td><td><p>The display's device name.</p></td></tr>
<tr><td><code>boundsLeft</code></td><td>number</td><td><p>The pixel coordinate of the left edge of the display (e.g., <code>0</code>).</p></td></tr>
<tr><td><code>boundsRight</code></td><td>number</td><td><p>The pixel coordinate of the right edge of the display (e.g., <code>1920</code>).</p></td></tr>
<tr><td><code>boundsTop</code></td><td>number</td><td><p>The pixel coordinate of the top edge of the display (e.g., <code>0</code>).</p></td></tr>
<tr><td><code>boundsBottom</code></td><td>number</td><td><p>The pixel coordinate of the bottom edge of the display (e.g., <code>1080</code>).</p></td></tr>
<tr><td><code>gpu</code></td><td>number</td><td><p>The index number of the GPU that's driving the display.</p></td></tr>
<tr><td><code>ppi</code></td><td>number</td><td><p>The physical dots per inch of the display.</p></td></tr>
<tr><td><code>ppiDesktop</code></td><td>number</td><td><p>The logical dots per inch of the desktop as used by the operating system.</p></td></tr>
<tr><td><code>physicalWidth</code></td><td>number</td><td><p>The physical width of the display, in inches.</p></td></tr>
<tr><td><code>physicalHeight</code></td><td>number</td><td><p>The physical height of the display, in inches.</p></td></tr>
<tr><td><code>modeRefreshrate</code></td><td>number</td><td><p>The refresh rate of the current display mode, in Hz.</p></td></tr>
<tr><td><code>modeWidth</code></td><td>number</td><td><p>The width of the current display mode, in pixels.</p></td></tr>
<tr><td><code>modeHeight</code></td><td>number</td><td><p>The height of the current display mode, in pixels.</p></td></tr>
<tr><td><code>isMaster</code></td><td>boolean</td><td><p><code>true</code> if the GPU is the "master" or primary display, <code>false</code> or <code>undefined</code> if it isn't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### GPUDescription {#GPUDescription}

<div class="api-text" v-pre><p>Information on a GPU.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>vendor</code></td><td>string</td><td><p>The GPU vendor (e.g., <code>"NVIDIA"</code>, <code>"AMD"</code>, or <code>"Intel"</code>).</p></td></tr>
<tr><td><code>model</code></td><td>string</td><td><p>The GPU model.</p></td></tr>
<tr><td><code>driver</code></td><td>string</td><td><p>The GPU driver version.</p></td></tr>
<tr><td><code>videoMemory</code></td><td>number</td><td><p>The size of the GPU's video memory, in MB.</p></td></tr>
<tr><td><code>displays</code></td><td>Array&lt;number&gt;</td><td><p>The index numbers of the displays currently being driven by the GPU. An empty array if the GPU is currently not driving any displays.</p></td></tr>
<tr><td><code>isMaster</code></td><td>boolean</td><td><p><code>true</code> if the GPU is the "master" or primary GPU, <code>false</code> or <code>undefined</code> if it isn't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### GraphicsAPIDescription {#GraphicsAPIDescription}

<div class="api-text" v-pre><p>Information on a graphics API.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the graphics API.</p></td></tr>
<tr><td><code>version</code></td><td>string</td><td><p>The version of the graphics API.</p></td></tr>
<tr><td><code>renderer</code> <em>optional</em></td><td>string</td><td><p>If an OpenGL API, then the graphics card that performs the rendering.</p></td></tr>
<tr><td><code>vendor</code> <em>optional</em></td><td>string</td><td><p>If an OpenGL API, then the OpenGL vendor.</p></td></tr>
<tr><td><code>shadingLanguageVersion</code> <em>optional</em></td><td>string</td><td><p>If an OpenGL API, then the shading language version.</p></td></tr>
<tr><td><code>extensions</code> <em>optional</em></td><td>Array&lt;string&gt;</td><td><p>If an OpenGL API, then the list of OpenGL extensions supported.</p></td></tr>
<tr><td><code>devices</code> <em>optional</em></td><td>Array&lt;<a href="#VulkanAPIDescription">PlatformInfo.VulkanAPIDescription</a>&gt;</td><td><p>If a Vulkan API, then the devices provided in the API.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### MemoryDescription {#MemoryDescription}

<div class="api-text" v-pre><p>Information on the computer's memory.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>memTotal</code></td><td>number</td><td><p>The total amount of usable physical memory, in MB.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### NICDescription {#NICDescription}

<div class="api-text" v-pre><p>Information on a network card.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>The name of the network card.</p></td></tr>
<tr><td><code>mac</code></td><td>string</td><td><p>The MAC address of the network card.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### PlatformDescription {#PlatformDescription}

<div class="api-text" v-pre><p>Information on the computer platform as a whole.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>computer</code></td><td><a href="#ComputerDescription">PlatformInfo.ComputerDescription</a></td><td><p>Information on the computer.</p></td></tr>
<tr><td><code>cpus</code></td><td>Array&lt;<a href="#CPUDescription">PlatformInfo.CPUDescription</a>&gt;</td><td><p>Information on the computer's CPUs.</p></td></tr>
<tr><td><code>displays</code></td><td>Array&lt;<a href="#DisplayDescription">PlatformInfo.DisplayDescription</a>&gt;</td><td><p>Information on the computer's displays.</p></td></tr>
<tr><td><code>gpus</code></td><td>Array&lt;<a href="#GPUDescription">PlatformInfo.GPUDescription</a>&gt;</td><td><p>Information on the computer's GPUs.</p></td></tr>
<tr><td><code>graphicsAPIs</code></td><td>Array&lt;<a href="#GraphicsAPIDescription">PlatformInfo.GraphicsAPIDescription</a>&gt;</td><td><p>Information on the computer's graphics APIs.</p></td></tr>
<tr><td><code>memory</code></td><td><a href="#MemoryDescription">PlatformInfo.MemoryDescription</a></td><td><p>Information on the computer's memory.</p></td></tr>
<tr><td><code>nics</code></td><td><a href="#NICDescription">PlatformInfo.NICDescription</a></td><td><p>Information on the computer's network cards.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### PlatformTier {#PlatformTier}

<div class="api-text" v-pre><p>The platform tier of a computer is an indication of its rendering capability.</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>0</code></td><td>UNKNOWN</td><td>Unknown rendering capability.</td></tr>
 <tr><td><code>1</code></td><td>LOW</td><td>Low-end PC, capable of rendering low-quality graphics.</td></tr>
 <tr><td><code>2</code></td><td>MID</td><td>Business-class PC, capable of rendering medium-quality graphics.</td></tr>
 <tr><td><code>3</code></td><td>HIGH</td><td>High-end PC, capable of rendering high-quality graphics.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

</div>

<div class="api-entry">

### VulkanAPIDescription {#VulkanAPIDescription}

<div class="api-text" v-pre><p>Information on a Vulkan graphics API.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>undefined</code></td><td>string</td><td></td></tr>
<tr><td><code>driverVersion</code></td><td>string</td><td><p>The driver version.</p></td></tr>
<tr><td><code>apiVersion</code></td><td>string</td><td><p>The API version.</p></td></tr>
<tr><td><code>deviceType</code></td><td>string</td><td><p>The device type.</p></td></tr>
<tr><td><code>vendor</code></td><td>string</td><td><p>The device vendor.</p></td></tr>
<tr><td><code>name</code></td><td>string</td><td><p>The device name.</p></td></tr>
<tr><td><code>extensions</code></td><td>Array&lt;string&gt;</td><td><p>The list of Vulkan extensions supported.</p></td></tr>
<tr><td><code>queues</code></td><td>Array&lt;<a href="#VulkanQueueDescription">PlatformInfo.VulkanQueueDescription</a>&gt;</td><td><p>The Vulkan queues available.</p></td></tr>
<tr><td><code>heaps</code></td><td>Array&lt;<a href="#VulkanHeapDescription">PlatformInfo.VulkanHeapDescription</a>&gt;</td><td><p>The Vulkan heaps available.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### VulkanHeapDescription {#VulkanHeapDescription}

<div class="api-text" v-pre><p>Information on a Vulkan heap.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>flags</code></td><td>string</td><td><p>The Vulkan heap flags.</p></td></tr>
<tr><td><code>size</code></td><td>number</td><td><p>The heap size.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### VulkanQueueDescription {#VulkanQueueDescription}

<div class="api-text" v-pre><p>Information on a Vulkan queue.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>flags</code></td><td>string</td><td><p>The Vulkan queue flags.</p></td></tr>
<tr><td><code>count</code></td><td>number</td><td><p>The queue count.</p></td></tr>
</tbody></table></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### getCPUBrand {#getCPUBrand}

```js
PlatformInfo.getCPUBrand()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use <code>JSON.parse(<a href="#getCPU">PlatformInfo.getCPU(0)</a>).model</code> instead.</p></div>
:::

<div class="api-text" v-pre><p>Gets information on the CPU model.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>Information on the CPU.</p></div>

</div>

<div class="api-entry">

### getGraphicsCardType {#getGraphicsCardType}

```js
PlatformInfo.getGraphicsCardType()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use <code>JSON.parse(<a href="#getGPU">PlatformInfo.getGPU(</a> <a href="#getMasterGPU">PlatformInfo.getMasterGPU() )</a>).model</code> instead.</p></div>
:::

<div class="api-text" v-pre><p>Gets the model of the graphics card currently being used.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The model of the graphics card currently being used.</p></div>

</div>

<div class="api-entry">

### getInstance {#getInstance}

```js
PlatformInfo.getInstance()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::


</div>

<div class="api-entry">

### getNumLogicalCores {#getNumLogicalCores}

```js
PlatformInfo.getNumLogicalCores()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use <code>JSON.parse(<a href="#getCPU">PlatformInfo.getCPU(0)</a>).numCores</code> instead.</p></div>
:::

<div class="api-text" v-pre><p>Gets the number of logical CPU cores.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The number of logical CPU cores.</p></div>

</div>

<div class="api-entry">

### getOperatingSystemType {#getOperatingSystemType}

```js
PlatformInfo.getOperatingSystemType()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use <code>JSON.parse(<a href="#getComputer">PlatformInfo.getComputer()</a>).OS</code> instead.</p></div>
:::

<div class="api-text" v-pre><p>Gets the operating system type.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The operating system type: <code>"WINDOWS"</code>, <code>"MACOS"</code>, or <code>"UNKNOWN"</code>.</p></div>

</div>

<div class="api-entry">

### getTotalSystemMemoryMB {#getTotalSystemMemoryMB}

```js
PlatformInfo.getTotalSystemMemoryMB()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use <code>JSON.parse(<a href="#getMemory">PlatformInfo.getMemory()</a>).memTotal</code> instead.</p></div>
:::

<div class="api-text" v-pre><p>Gets the total amount of usable physical memory, in MB.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The total system memory in megabytes.</p></div>

</div>
