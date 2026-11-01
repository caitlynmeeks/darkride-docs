---
title: "Rates"
description: "The Rates API provides some information on current rendering performance."
draft: true
---

# Rates

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Rates</code> API provides some information on current rendering performance.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report current rendering rates.</p></div>

```js
// The rates to report.
var rates = [
    "render",
    "present",
    "newFrame",
    "dropped",
    "simulation"
];

// Report the rates.
for (var i = 0; i < rates.length; i++) {
    print("Rates." + rates[i], "=", Rates[rates[i]]);
}
```

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>render</code></td><td>number</td><td><p>The rate at which new GPU frames are being created, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>present</code></td><td>number</td><td><p>The rate at which the display plugin is presenting to the display device, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>newFrame</code></td><td>number</td><td><p>The rate at which the display plugin is presenting new GPU frames, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>dropped</code></td><td>number</td><td><p>The rate at which the display plugin is dropping GPU frames, in Hz. <em>Read-only.</em></p></td></tr>
<tr><td><code>simulation</code></td><td>number</td><td><p>The rate at which the game loop is running, in Hz. <em>Read-only.</em></p></td></tr>
</tbody></table></div>
