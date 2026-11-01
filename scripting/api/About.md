---
title: "About"
description: "The About API provides information about the version of Interface that is currently running."
---

# About

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>About</code> API provides information about the version of Interface that is currently running. It also has the functionality to open a web page in an Interface browser window.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report build information for the version of Interface currently running.</p></div>

```js
print("Darkride build date: " + About.buildDate);  // Returns the build date of the version of Interface currently running on your machine.
print("Darkride version: " + About.buildVersion);  // Returns the build version of Interface currently running on your machine.
print("Qt version: " + About.qtVersion);  // Returns the Qt version details of the version of Interface currently running on your machine.
print("Platform: " + About.platform);  // Returns the platform that is currently running on your machine, usually "Darkride".
```

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>buildDate</code></td><td>string</td><td><p>The build date of Darkride that is currently running. <em>Read-only.</em></p></td></tr>
<tr><td><code>buildVersion</code></td><td>string</td><td><p>The build version of Darkride that is currently running. <em>Read-only.</em></p></td></tr>
<tr><td><code>qtVersion</code></td><td>string</td><td><p>The Qt version used in Darkride that is currently running. <em>Read-only.</em></p></td></tr>
<tr><td><code>platform</code></td><td>string</td><td><p>The name of the platform that is currently running, usually "Darkride". <em>Read-only.</em></p></td></tr>
<tr><td><code>buildCommit</code></td><td>string</td><td><p>The short git commit the build was made from; empty if unknown. <em>Read-only.</em></p></td></tr>
<tr><td><code>buildLine</code></td><td>string</td><td><p>The version and build in one line, as the sign-in page shows them for bug reports: "Darkride 1.1.0 · build 7382ec48ce". <em>Read-only.</em></p></td></tr>
</tbody></table></div>
