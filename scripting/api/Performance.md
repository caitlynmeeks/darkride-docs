---
title: "Performance"
description: "The Performance API provides control and information on graphics performance settings."
draft: true
---

# Performance

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Performance</code> API provides control and information on graphics performance settings.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>performancePreset</code></td><td><a href="#PerformancePreset">Performance.PerformancePreset</a></td><td><p>The current graphics performance preset.</p></td></tr>
<tr><td><code>refreshRateProfile</code></td><td><a href="#RefreshRateProfile">Performance.RefreshRateProfile</a></td><td><p>The current refresh rate profile.</p></td></tr>
</tbody></table></div>

## Functions {#functions}

### getActiveRefreshRate {#getActiveRefreshRate}

```js
Performance.getActiveRefreshRate()
```

<div class="api-text" v-pre><p>Gets the current target refresh rate, in Hz, per the current refresh rate profile and refresh rate regime if in desktop mode; a higher rate if in VR mode.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>The current target refresh rate, in Hz.</p></div>

### getPerformancePreset {#getPerformancePreset}

```js
Performance.getPerformancePreset()
```

<div class="api-text" v-pre><p>Gets the current graphics performance preset in use.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#PerformancePreset">Performance.PerformancePreset</a> <p>The current graphics performance preset in use.</p></div>

### getPerformancePresetNames {#getPerformancePresetNames}

```js
Performance.getPerformancePresetNames()
```

<div class="api-text" v-pre><p>Gets the names of the graphics performance presets.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The names of the graphics performance presets. The array index values correspond to <a href="#PerformancePreset"><code>Performance.PerformancePreset</code></a> values.</p></div>

### getRefreshRateProfile {#getRefreshRateProfile}

```js
Performance.getRefreshRateProfile()
```

<div class="api-text" v-pre><p>Gets the current refresh rate profile in use.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#RefreshRateProfile">Performance.RefreshRateProfile</a> <p>The refresh rate profile.</p></div>

### getRefreshRateProfileNames {#getRefreshRateProfileNames}

```js
Performance.getRefreshRateProfileNames()
```

<div class="api-text" v-pre><p>Gets the names of the refresh rate profiles.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Array&lt;string&gt; <p>The names of the refresh rate profiles. The array index values correspond to <a href="#RefreshRateProfile"><code>Performance.RefreshRateProfile</code></a> values.</p></div>

### getRefreshRateRegime {#getRefreshRateRegime}

```js
Performance.getRefreshRateRegime()
```

<div class="api-text" v-pre><p>Gets the current refresh rate regime that's in effect.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#RefreshRateRegime">RefreshRateRegime</a> <p>The current refresh rate regime.</p></div>

### getUXMode {#getUXMode}

```js
Performance.getUXMode()
```

<div class="api-text" v-pre><p>Gets the current user experience mode.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="globals#UXMode">UXMode</a> <p>The current user experience mode.</p></div>

### setPerformancePreset {#setPerformancePreset}

```js
Performance.setPerformancePreset(performancePreset)
```

<div class="api-text" v-pre><p>Sets graphics performance to a preset.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>performancePreset</code></td><td><a href="#PerformancePreset">Performance.PerformancePreset</a></td><td><p>The graphics performance preset to to use.</p></td></tr>
</tbody></table></div>

### setRefreshRateProfile {#setRefreshRateProfile}

```js
Performance.setRefreshRateProfile(refreshRateProfile)
```

<div class="api-text" v-pre><p>Sets the curfrent refresh rate profile.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>refreshRateProfile</code></td><td><a href="#RefreshRateProfile">Performance.RefreshRateProfile</a></td><td><p>The refresh rate profile.</p></td></tr>
</tbody></table></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### settingsChanged {#settingsChanged}

```js
Performance.settingsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the performance preset or refresh rate profile is changed.</p></div>

## Types {#types}

### PerformancePreset {#PerformancePreset}

<div class="api-text" v-pre><p>Graphics performance presets.</p>
 <table> <thead> <tr><th>Value</th><th>Name</th><th>Description</th> </tr>
</thead>
 <tbody> <tr><td><code>0</code></td><td>UNKNOWN</td><td>Custom settings of world detail, rendering effects, and refresh rate.</td></tr>
 <tr><td><code>1</code></td><td>POTATO</td><td>Low world detail, forward rendering, no rendering effects, low target fps, 1/4 resolution.</td></tr>
 <tr><td><code>2</code></td><td>LOW</td><td>Low world detail, forward rendering, no rendering effects, reduced resolution.</td></tr>
 <tr><td><code>3</code></td><td>MID</td><td>Medium world detail, deferred rendering, some rendering effects</td></tr>
 <tr><td><code>4</code></td><td>HIGH</td><td>Maximum world detail, deferred rendering, all rendering effects</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>

### RefreshRateProfile {#RefreshRateProfile}

<div class="api-text" v-pre><p>Target FPS (formerly Refresh Rate) profile.</p>
 <table> <thead> <tr> <th>Value</th> <th>Name</th> <th>Description</th> </tr>
</thead>
 <tbody> <tr> <td><code>0</code></td> <td>ECO</td> <td>20 FPS target rate, reduced when Interface doesn't have focus or is minimized</td> </tr>
 <tr> <td><code>1</code></td> <td>INTERACTIVE</td> <td>30 FPS target rate, reduced when Interface doesn't have focus or is minimized</td> </tr>
 <tr> <td><code>2</code></td> <td>REALTIME</td> <td>60 FPS target rate, reduced when Interface doesn't have focus or is minimized</td> </tr>
 <tr> <td><code>3</code></td> <td>DISPLAY_BASED</td> <td>Targets the refresh rate of your screen, reduced when Interface doesn't have focus or is minimized</td> </tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> number</div>
