---
title: "AudioStats.AudioStreamStats"
description: "Statistics for an audio stream."
draft: true
---

# AudioStats.AudioStreamStats

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>Statistics for an audio stream.</p>
 <p>Provided in properties of the <a href="AudioStats"><code>AudioStats</code></a> API.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dropCount</code></td><td>number</td><td><p>The number of silent or old audio frames dropped. <em>Read-only.</em></p></td></tr>
<tr><td><code>framesAvailable</code></td><td>number</td><td><p>The number of audio frames containing data available. <em>Read-only.</em></p></td></tr>
<tr><td><code>framesAvailableAvg</code></td><td>number</td><td><p>The time-weighted average of audio frames containing data available. <em>Read-only.</em></p></td></tr>
<tr><td><code>framesDesired</code></td><td>number</td><td><p>The desired number of audio frames for the jitter buffer. <em>Read-only.</em></p></td></tr>
<tr><td><code>lastStarveDurationCount</code></td><td>number</td><td><p>The most recent number of consecutive times that audio frames have not been available for processing. <em>Read-only.</em></p></td></tr>
<tr><td><code>lossCount</code></td><td>number</td><td><p>The total number of audio packets lost. <em>Read-only.</em></p></td></tr>
<tr><td><code>lossCountWindow</code></td><td>number</td><td><p>The number of audio packets lost since the previous statistic. <em>Read-only.</em></p></td></tr>
<tr><td><code>lossRate</code></td><td>number</td><td><p>The ratio of the total number of audio packets lost to the total number of audio packets expected. <em>Read-only.</em></p></td></tr>
<tr><td><code>lossRateWindow</code></td><td>number</td><td><p>The ratio of the number of audio packets lost to the number of audio packets expected since the previous statistic. <em>Read-only.</em></p></td></tr>
<tr><td><code>overflowCount</code></td><td>number</td><td><p>The number of times that the audio ring buffer has overflowed. <em>Read-only.</em></p></td></tr>
<tr><td><code>starveCount</code></td><td>number</td><td><p>The total number of times that audio frames have not been available for processing. <em>Read-only.</em></p></td></tr>
<tr><td><code>timegapMsAvg</code></td><td>number</td><td><p>The overall average time between data packets, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>timegapMsAvgWindow</code></td><td>number</td><td><p>The recent average time between data packets, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>timegapMsMax</code></td><td>number</td><td><p>The overall maximum time between data packets, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>timegapMsMaxWindow</code></td><td>number</td><td><p>The recent maximum time between data packets, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>unplayedMsMax</code></td><td>number</td><td><p>The duration of audio waiting to be played, in ms. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### dropCountChanged {#dropCountChanged}

```js
AudioStats.AudioStreamStats.dropCountChanged.connect(function (dropCount) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the number of silent or old audio frames dropped changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>dropCount</code></td><td>number</td><td><p>The number of silent or old audio frames dropped.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### framesAvailableAvgChanged {#framesAvailableAvgChanged}

```js
AudioStats.AudioStreamStats.framesAvailableAvgChanged.connect(function (framesAvailableAvg) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the time-weighted average of audio frames containing data available changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>framesAvailableAvg</code></td><td>number</td><td><p>The time-weighted average of audio frames containing data available.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### framesAvailableChanged {#framesAvailableChanged}

```js
AudioStats.AudioStreamStats.framesAvailableChanged.connect(function (framesAvailable) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the number of audio frames containing data available changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>framesAvailable</code></td><td>number</td><td><p>The number of audio frames containing data available.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### framesDesiredChanged {#framesDesiredChanged}

```js
AudioStats.AudioStreamStats.framesDesiredChanged.connect(function (framesDesired) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the desired number of audio frames for the jitter buffer changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>framesDesired</code></td><td>number</td><td><p>The desired number of audio frames for the jitter buffer.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### lastStarveDurationCountChanged {#lastStarveDurationCountChanged}

```js
AudioStats.AudioStreamStats.lastStarveDurationCountChanged.connect(function (lastStarveDurationCount) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the most recenbernumber of consecutive times that audio frames have not been available for processing changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>lastStarveDurationCount</code></td><td>number</td><td><p>The most recent number of consecutive times that audio frames have not been available for processing.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### lossCountChanged {#lossCountChanged}

```js
AudioStats.AudioStreamStats.lossCountChanged.connect(function (lossCount) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the total number of audio packets lost changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>lossCount</code></td><td>number</td><td><p>The total number of audio packets lost.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### lossCountWindowChanged {#lossCountWindowChanged}

```js
AudioStats.AudioStreamStats.lossCountWindowChanged.connect(function (lossCountWindow) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the number of audio packets lost since the previous statistic changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>lossCountWindow</code></td><td>number</td><td><p>The number of audio packets lost since the previous statistic.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### lossRateChanged {#lossRateChanged}

```js
AudioStats.AudioStreamStats.lossRateChanged.connect(function (lossRate) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the ratio of the total number of audio packets lost to the total number of audio packets expected changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>lossRate</code></td><td>number</td><td><p>The ratio of the total number of audio packets lost to the total number of audio packets expected.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### lossRateWindowChanged {#lossRateWindowChanged}

```js
AudioStats.AudioStreamStats.lossRateWindowChanged.connect(function (lossRateWindow) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the ratio of the number of audio packets lost to the number of audio packets expected since the previous statistic changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>lossRateWindow</code></td><td>number</td><td><p>The ratio of the number of audio packets lost to the number of audio packets expected since the previous statistic.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### overflowCountChanged {#overflowCountChanged}

```js
AudioStats.AudioStreamStats.overflowCountChanged.connect(function (overflowCount) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the number of times that the audio ring buffer has overflowed changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>overflowCount</code></td><td>number</td><td><p>The number of times that the audio ring buffer has overflowed.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### starveCountChanged {#starveCountChanged}

```js
AudioStats.AudioStreamStats.starveCountChanged.connect(function (starveCount) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the total number of times that audio frames have not been available for processing changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>starveCount</code></td><td>number</td><td><p>The total number of times that audio frames have not been available for processing.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### timegapMsAvgChanged {#timegapMsAvgChanged}

```js
AudioStats.AudioStreamStats.timegapMsAvgChanged.connect(function (timegapMsAvg) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the overall average time between data packets changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>timegapMsAvg</code></td><td>number</td><td><p>The overall average time between data packets, in ms.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### timegapMsAvgWindowChanged {#timegapMsAvgWindowChanged}

```js
AudioStats.AudioStreamStats.timegapMsAvgWindowChanged.connect(function (timegapMsAvgWindow) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the recent average time between data packets changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>timegapMsAvgWindow</code></td><td>number</td><td><p>The recent average time between data packets, in ms.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### timegapMsMaxChanged {#timegapMsMaxChanged}

```js
AudioStats.AudioStreamStats.timegapMsMaxChanged.connect(function (timegapMsMax) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the overall maximum time between data packets changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>timegapMsMax</code></td><td>number</td><td><p>The overall maximum time between data packets, in ms.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### timegapMsMaxWindowChanged {#timegapMsMaxWindowChanged}

```js
AudioStats.AudioStreamStats.timegapMsMaxWindowChanged.connect(function (timegapMsMaxWindow) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the recent maximum time between data packets changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>timegapMsMaxWindow</code></td><td>number</td><td><p>The recent maximum time between data packets, in ms.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### unplayedMsMaxChanged {#unplayedMsMaxChanged}

```js
AudioStats.AudioStreamStats.unplayedMsMaxChanged.connect(function (unplayedMsMax) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the duration of audio waiting to be played changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>unplayedMsMax</code></td><td>number</td><td><p>The duration of audio waiting to be played, in ms.</p></td></tr>
</tbody></table></div>

</div>
