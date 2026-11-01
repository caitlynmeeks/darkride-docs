---
title: "AudioStats"
description: "The AudioStats API provides statistics of the client and mixer audio."
---

# AudioStats

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>AudioStats</code> API provides statistics of the client and mixer audio.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>clientStream</code></td><td><a href="AudioStats-AudioStreamStats">AudioStats.AudioStreamStats</a></td><td><p>Statistics of the client's audio stream. <em>Read-only.</em></p></td></tr>
<tr><td><code>inputReadMsMax</code></td><td>number</td><td><p>The maximum duration of a block of audio data recently read from the microphone, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>inputUnplayedMsMax</code></td><td>number</td><td><p>The maximum duration of microphone audio recently in the input buffer waiting to be played, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>mixerStream</code></td><td><a href="AudioStats-AudioStreamStats">AudioStats.AudioStreamStats</a></td><td><p>Statistics of the audio mixer's stream. <em>Read-only.</em></p></td></tr>
<tr><td><code>outputUnplayedMsMax</code></td><td>number</td><td><p>The maximum duration of output audio recently in the output buffer waiting to be played, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>pingMs</code></td><td>number</td><td><p>The current ping time to the audio mixer, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>sentTimegapMsAvg</code></td><td>number</td><td><p>The overall average time between sending data packets to the audio mixer, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>sentTimegapMsAvgWindow</code></td><td>number</td><td><p>The recent average time between sending data packets to the audio mixer, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>sentTimegapMsMax</code></td><td>number</td><td><p>The overall maximum time between sending data packets to the audio mixer, in ms. <em>Read-only.</em></p></td></tr>
<tr><td><code>sentTimegapMsMaxWindow</code></td><td>number</td><td><p>The recent maximum time between sending data packets to the audio mixer, in ms. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### clientStreamChanged {#clientStreamChanged}

```js
AudioStats.clientStreamChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the client's stream statisticss have been updated.</p></div>

</div>

<div class="api-entry">

### injectorStreamsChanged {#injectorStreamsChanged}

```js
AudioStats.injectorStreamsChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the injector streams' statistics have been updated. </p>
<p><strong>Note:</strong> The injector streams' statistics are currently not provided.</p>
<p></p></div>

</div>

<div class="api-entry">

### inputReadMsMaxChanged {#inputReadMsMaxChanged}

```js
AudioStats.inputReadMsMaxChanged.connect(function (inputReadMsMax) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the maximum duration of a block of audio data recently read from the microphone changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>inputReadMsMax</code></td><td>number</td><td><p>The maximum duration of a block of audio data recently read from the microphone, in ms.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### inputUnplayedMsMaxChanged {#inputUnplayedMsMaxChanged}

```js
AudioStats.inputUnplayedMsMaxChanged.connect(function (inputUnplayedMsMax) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the maximum duration of microphone audio recently in the input buffer waiting to be played changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>inputUnplayedMsMax</code></td><td>number</td><td><p>The maximum duration of microphone audio recently in the input buffer waiting to be played, in ms.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### mixerStreamChanged {#mixerStreamChanged}

```js
AudioStats.mixerStreamChanged.connect(function () {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the mixer's stream statistics have been updated.</p></div>

</div>

<div class="api-entry">

### outputUnplayedMsMaxChanged {#outputUnplayedMsMaxChanged}

```js
AudioStats.outputUnplayedMsMaxChanged.connect(function (outputUnplayedMsMax) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the maximum duration of output audio recently in the output buffer waiting to be played changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>outputUnplayedMsMax</code></td><td>number</td><td><p>The maximum duration of output audio recently in the output buffer waiting to be played, in ms.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### pingMsChanged {#pingMsChanged}

```js
AudioStats.pingMsChanged.connect(function (pingMs) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the ping time to the audio mixer changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>pingMs</code></td><td>number</td><td><p>The ping time to the audio mixer, in ms.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sentTimegapMsAvgChanged {#sentTimegapMsAvgChanged}

```js
AudioStats.sentTimegapMsAvgChanged.connect(function (sentTimegapMsAvg) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the overall average time between sending data packets to the audio mixer changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sentTimegapMsAvg</code></td><td>number</td><td><p>The overall average time between sending data packets to the audio mixer, in ms.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sentTimegapMsAvgWindowChanged {#sentTimegapMsAvgWindowChanged}

```js
AudioStats.sentTimegapMsAvgWindowChanged.connect(function (sentTimegapMsAvgWindow) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the recent average time between sending data packets to the audio mixer changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sentTimegapMsAvgWindow</code></td><td>number</td><td><p>The recent average time between sending data packets to the audio mixer, in ms.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sentTimegapMsMaxChanged {#sentTimegapMsMaxChanged}

```js
AudioStats.sentTimegapMsMaxChanged.connect(function (sentTimegapMsMax) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the overall maximum time between sending data packets to the audio mixer changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sentTimegapMsMax</code></td><td>number</td><td><p>The overall maximum time between sending data packets to the audio mixer, in ms.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### sentTimegapMsMaxWindowChanged {#sentTimegapMsMaxWindowChanged}

```js
AudioStats.sentTimegapMsMaxWindowChanged.connect(function (sentTimegapMsMaxWindow) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the recent maximum time between sending data packets to the audio mixer changes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>sentTimegapMsMaxWindow</code></td><td>number</td><td><p>The recent maximum time between sending data packets to the audio mixer, in ms.</p></td></tr>
</tbody></table></div>

</div>
