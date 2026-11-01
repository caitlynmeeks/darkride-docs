---
title: "DriveKeys"
description: "The DriveKeys API provides constant numeric values that represent different logical keys that drive your avatar and camera."
draft: true
---

# DriveKeys

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>DriveKeys</code> API provides constant numeric values that represent different logical keys that drive your avatar and camera.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>TRANSLATE_X</code></td><td>number</td><td><p>Move the user's avatar in the direction of its x-axis, if the camera isn't in independent or mirror modes.</p></td></tr>
<tr><td><code>TRANSLATE_Y</code></td><td>number</td><td><p>Move the user's avatar in the direction of its y-axis, if the camera isn't in independent or mirror modes.</p></td></tr>
<tr><td><code>TRANSLATE_Z</code></td><td>number</td><td><p>Move the user's avatar in the direction of its z-axis, if the camera isn't in independent or mirror modes.</p></td></tr>
<tr><td><code>YAW</code></td><td>number</td><td><p>Rotate the user's avatar about its y-axis at a rate proportional to the control value, if the camera isn't in independent or mirror modes.</p></td></tr>
<tr><td><code>STEP_TRANSLATE_X</code></td><td>number</td><td><p>No action.</p></td></tr>
<tr><td><code>STEP_TRANSLATE_Y</code></td><td>number</td><td><p>No action.</p></td></tr>
<tr><td><code>STEP_TRANSLATE_Z</code></td><td>number</td><td><p>No action.</p></td></tr>
<tr><td><code>STEP_YAW</code></td><td>number</td><td><p>Rotate the user's avatar about its y-axis in a step increment, if the camera isn't in independent or mirror modes.</p></td></tr>
<tr><td><code>PITCH</code></td><td>number</td><td><p>Rotate the user's avatar head and attached camera about its negative x-axis (i.e., positive values pitch down) at a rate proportional to the control value, if the camera isn't in HMD, independent, or mirror modes.</p></td></tr>
<tr><td><code>ZOOM</code></td><td>number</td><td><p>Zoom the camera in or out.</p></td></tr>
<tr><td><code>DELTA_YAW</code></td><td>number</td><td><p>Rotate the user's avatar about its y-axis by an amount proportional to the control value, if the camera isn't in independent or mirror modes.</p></td></tr>
<tr><td><code>DELTA_PITCH</code></td><td>number</td><td><p>Rotate the user's avatar head and attached camera about its negative x-axis (i.e., positive values pitch down) by an amount proportional to the control value, if the camera isn't in HMD, independent, or mirror modes.</p></td></tr>
</tbody></table></div>
