---
title: "AudioEffectOptions"
description: "Audio effect options used by the Audio API."
draft: true
---

# AudioEffectOptions

<div class="api-kind" v-pre><strong>Class.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>Audio effect options used by the <a href="Audio"><code>Audio</code></a> API.</p>
 <p>Create using <code>new AudioEffectOptions(...)</code>.</p></div>

```js
new AudioEffectOptions(reverbOptions?)
```

<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>reverbOptions</code> <em>optional</em></td><td><a href="#ReverbOptions">AudioEffectOptions.ReverbOptions</a></td><td><code>null</code></td><td><p>Reverberation options.</p></td></tr>
</tbody></table></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bandwidth</code></td><td>number</td><td><code>10000</code></td><td><p>The corner frequency (Hz) of the low-pass filter at reverb input.</p></td></tr>
<tr><td><code>preDelay</code></td><td>number</td><td><code>20</code></td><td><p>The delay (milliseconds) between dry signal and the onset of early reflections.</p></td></tr>
<tr><td><code>lateDelay</code></td><td>number</td><td><code>0</code></td><td><p>The delay (milliseconds) between early reflections and the onset of reverb tail.</p></td></tr>
<tr><td><code>reverbTime</code></td><td>number</td><td><code>2</code></td><td><p>The time (seconds) for the reverb tail to decay by 60dB, also known as RT60.</p></td></tr>
<tr><td><code>earlyDiffusion</code></td><td>number</td><td><code>100</code></td><td><p>Adjusts the buildup of echo density in the early reflections, normally 100%.</p></td></tr>
<tr><td><code>lateDiffusion</code></td><td>number</td><td><code>100</code></td><td><p>Adjusts the buildup of echo density in the reverb tail, normally 100%.</p></td></tr>
<tr><td><code>roomSize</code></td><td>number</td><td><code>50</code></td><td><p>The apparent room size, from small (0%) to large (100%).</p></td></tr>
<tr><td><code>density</code></td><td>number</td><td><code>100</code></td><td><p>Adjusts the echo density in the reverb tail, normally 100%.</p></td></tr>
<tr><td><code>bassMult</code></td><td>number</td><td><code>1.5</code></td><td><p>Adjusts the bass-frequency reverb time, as multiple of reverbTime.</p></td></tr>
<tr><td><code>bassFreq</code></td><td>number</td><td><code>250</code></td><td><p>The crossover frequency (Hz) for the onset of bassMult.</p></td></tr>
<tr><td><code>highGain</code></td><td>number</td><td><code>-6</code></td><td><p>Reduces the high-frequency reverb time, as attenuation (dB).</p></td></tr>
<tr><td><code>highFreq</code></td><td>number</td><td><code>3000</code></td><td><p>The crossover frequency (Hz) for the onset of highGain.</p></td></tr>
<tr><td><code>modRate</code></td><td>number</td><td><code>2.3</code></td><td><p>The rate of modulation (Hz) of the LFO-modulated delay lines.</p></td></tr>
<tr><td><code>modDepth</code></td><td>number</td><td><code>50</code></td><td><p>The depth of modulation (percent) of the LFO-modulated delay lines.</p></td></tr>
<tr><td><code>earlyGain</code></td><td>number</td><td><code>0</code></td><td><p>Adjusts the relative level (dB) of the early reflections.</p></td></tr>
<tr><td><code>lateGain</code></td><td>number</td><td><code>0</code></td><td><p>Adjusts the relative level (dB) of the reverb tail.</p></td></tr>
<tr><td><code>earlyMixLeft</code></td><td>number</td><td><code>20</code></td><td><p>The apparent distance of the source (percent) in the early reflections.</p></td></tr>
<tr><td><code>earlyMixRight</code></td><td>number</td><td><code>20</code></td><td><p>The apparent distance of the source (percent) in the early reflections.</p></td></tr>
<tr><td><code>lateMixLeft</code></td><td>number</td><td><code>90</code></td><td><p>The apparent distance of the source (percent) in the reverb tail.</p></td></tr>
<tr><td><code>lateMixRight</code></td><td>number</td><td><code>90</code></td><td><p>The apparent distance of the source (percent) in the reverb tail.</p></td></tr>
<tr><td><code>wetDryMix</code></td><td>number</td><td><code>50</code></td><td><p>Adjusts the wet/dry ratio, from completely dry (0%) to completely wet (100%).</p></td></tr>
</tbody></table></div>

## Types {#types}

<div class="api-entry">

### ReverbOptions {#ReverbOptions}

<div class="api-text" v-pre><p>Reverberation options that can be used to initialize an <a href=""><code>AudioEffectOptions</code></a> object when created.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bandwidth</code></td><td>number</td><td><code>10000</code></td><td><p>The corner frequency (Hz) of the low-pass filter at reverb input.</p></td></tr>
<tr><td><code>preDelay</code></td><td>number</td><td><code>20</code></td><td><p>The delay (milliseconds) between dry signal and the onset of early reflections.</p></td></tr>
<tr><td><code>lateDelay</code></td><td>number</td><td><code>0</code></td><td><p>The delay (milliseconds) between early reflections and the onset of reverb tail.</p></td></tr>
<tr><td><code>reverbTime</code></td><td>number</td><td><code>2</code></td><td><p>The time (seconds) for the reverb tail to decay by 60dB, also known as RT60.</p></td></tr>
<tr><td><code>earlyDiffusion</code></td><td>number</td><td><code>100</code></td><td><p>Adjusts the buildup of echo density in the early reflections, normally 100%.</p></td></tr>
<tr><td><code>lateDiffusion</code></td><td>number</td><td><code>100</code></td><td><p>Adjusts the buildup of echo density in the reverb tail, normally 100%.</p></td></tr>
<tr><td><code>roomSize</code></td><td>number</td><td><code>50</code></td><td><p>The apparent room size, from small (0%) to large (100%).</p></td></tr>
<tr><td><code>density</code></td><td>number</td><td><code>100</code></td><td><p>Adjusts the echo density in the reverb tail, normally 100%.</p></td></tr>
<tr><td><code>bassMult</code></td><td>number</td><td><code>1.5</code></td><td><p>Adjusts the bass-frequency reverb time, as multiple of reverbTime.</p></td></tr>
<tr><td><code>bassFreq</code></td><td>number</td><td><code>250</code></td><td><p>The crossover frequency (Hz) for the onset of bassMult.</p></td></tr>
<tr><td><code>highGain</code></td><td>number</td><td><code>-6</code></td><td><p>Reduces the high-frequency reverb time, as attenuation (dB).</p></td></tr>
<tr><td><code>highFreq</code></td><td>number</td><td><code>3000</code></td><td><p>The crossover frequency (Hz) for the onset of highGain.</p></td></tr>
<tr><td><code>modRate</code></td><td>number</td><td><code>2.3</code></td><td><p>The rate of modulation (Hz) of the LFO-modulated delay lines.</p></td></tr>
<tr><td><code>modDepth</code></td><td>number</td><td><code>50</code></td><td><p>The depth of modulation (percent) of the LFO-modulated delay lines.</p></td></tr>
<tr><td><code>earlyGain</code></td><td>number</td><td><code>0</code></td><td><p>Adjusts the relative level (dB) of the early reflections.</p></td></tr>
<tr><td><code>lateGain</code></td><td>number</td><td><code>0</code></td><td><p>Adjusts the relative level (dB) of the reverb tail.</p></td></tr>
<tr><td><code>earlyMixLeft</code></td><td>number</td><td><code>20</code></td><td><p>The apparent distance of the source (percent) in the early reflections.</p></td></tr>
<tr><td><code>earlyMixRight</code></td><td>number</td><td><code>20</code></td><td><p>The apparent distance of the source (percent) in the early reflections.</p></td></tr>
<tr><td><code>lateMixLeft</code></td><td>number</td><td><code>90</code></td><td><p>The apparent distance of the source (percent) in the reverb tail.</p></td></tr>
<tr><td><code>lateMixRight</code></td><td>number</td><td><code>90</code></td><td><p>The apparent distance of the source (percent) in the reverb tail.</p></td></tr>
<tr><td><code>wetDryMix</code></td><td>number</td><td><code>50</code></td><td><p>Adjusts the wet/dry ratio, from completely dry (0%) to completely wet (100%).</p></td></tr>
</tbody></table></div>

</div>
