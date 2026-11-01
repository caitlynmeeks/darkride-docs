---
title: "Resource"
description: "The Resource API provides values that define the possible loading states of a resource."
draft: true
---

# Resource

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts, server entity scripts, assignment client scripts.</div>

<div class="api-text" v-pre><p>The <code>Resource</code> API provides values that define the possible loading states of a resource.</p></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>State</code></td><td><a href="#State">Resource.State</a></td><td><p>The possible loading states of a resource. <em>Read-only.</em></p></td></tr>
</tbody></table></div>

## Types {#types}

### State {#State}

<div class="api-text" v-pre><p>The loading state of a resource.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>QUEUED</code></td><td>number</td><td><p>The resource is queued up, waiting to be loaded.</p></td></tr>
<tr><td><code>LOADING</code></td><td>number</td><td><p>The resource is downloading.</p></td></tr>
<tr><td><code>LOADED</code></td><td>number</td><td><p>The resource has finished downloading but is not complete.</p></td></tr>
<tr><td><code>FINISHED</code></td><td>number</td><td><p>The resource has completely finished loading and is ready.</p></td></tr>
<tr><td><code>FAILED</code></td><td>number</td><td><p>The resource has failed to download.</p></td></tr>
</tbody></table></div>
