---
title: "Snapshot"
description: "The Snapshot API provides access to the path that snapshots are saved to."
draft: true
---

# Snapshot

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>Snapshot</code> API provides access to the path that snapshots are saved to. This path is that provided in Settings &gt; General &gt; Snapshots. Snapshots may be taken using <code>Window</code> API functions such as <a href="Window#takeSnapshot"><code>Window.takeSnapshot</code></a>. A snapshot taken with the default name, as Snap takes them, goes to the user's files (My Files), in their Snapshots folder, when someone is signed in; it is saved to this path when no one is signed in or the upload fails.</p></div>

## Functions {#functions}

### deleteFromUserFiles {#deleteFromUserFiles}

```js
Snapshot.deleteFromUserFiles(url)
```

<div class="api-text" v-pre><p>Deletes a snapshot from the user's files: one uploaded there by this viewer since it started. Others are left alone. <a href="#snapshotDeleted">snapshotDeleted</a> says when it is done.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The snapshot's URL, as <a href="#snapshotStored">snapshotStored</a> gave it.</p></td></tr>
</tbody></table></div>

### getAnimatedSnapshotDuration {#getAnimatedSnapshotDuration}

```js
Snapshot.getAnimatedSnapshotDuration()
```

<div class="api-text" v-pre><p>Gets how long an animated snapshot (a GIF) records.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> number <p>Its length in seconds, 1 to 5.</p></div>

### getSnapshotsLocation {#getSnapshotsLocation}

```js
Snapshot.getSnapshotsLocation()
```

<div class="api-text" v-pre><p>Gets the path that snapshots are saved to.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The path to save snapshots to.</p></div>

### setAnimatedSnapshotDuration {#setAnimatedSnapshotDuration}

```js
Snapshot.setAnimatedSnapshotDuration(seconds)
```

<div class="api-text" v-pre><p>Sets how long an animated snapshot (a GIF) records: the Settings panel's Snapshots section.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>seconds</code></td><td>number</td><td><p>Its length in seconds, held to 1 to 5.</p></td></tr>
</tbody></table></div>

### setSnapshotsLocation {#setSnapshotsLocation}

```js
Snapshot.setSnapshotsLocation(location)
```

<div class="api-text" v-pre><p>Sets the path that snapshots are saved to.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>location</code></td><td>String</td><td><p>The path to save snapshots to.</p></td></tr>
</tbody></table></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### snapshotDeleted {#snapshotDeleted}

```js
Snapshot.snapshotDeleted.connect(function (url, error) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when <a href="#deleteFromUserFiles">deleteFromUserFiles</a> is done.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The snapshot's URL in the user's files.</p></td></tr>
<tr><td><code>error</code></td><td>string</td><td><p>Why it could not be deleted; empty when it was.</p></td></tr>
</tbody></table></div>

### snapshotLocationSet {#snapshotLocationSet}

```js
Snapshot.snapshotLocationSet.connect(function (location) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when the path that snapshots are saved to is changed.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>location</code></td><td>string</td><td><p>The new snapshots location.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when the snapshots location is changed.</p></div>

```js
// Run this script then change the snapshots location in Settings > General > Snapshots.
Snapshot.snapshotLocationSet.connect(function (path) {
    print("New snapshot location: " + path);
});
```

### snapshotStored {#snapshotStored}

```js
Snapshot.snapshotStored.connect(function (takenPath, location, inUserFiles, uploadError) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a snapshot taken with the default name, as Snap takes them, is where it will stay: in the user's files (My Files), in their Snapshots folder, or on this computer, when no one was signed in as it was taken or the upload failed. A snapshot uploaded to the user's files is deleted from this computer.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>takenPath</code></td><td>string</td><td><p>The path the snapshot had when it was taken, as given by <a href="Window#stillSnapshotTaken">stillSnapshotTaken</a>, <a href="Window#processingGifStarted">processingGifStarted</a> or <a href="Window#processingGifCompleted">processingGifCompleted</a>.</p></td></tr>
<tr><td><code>location</code></td><td>string</td><td><p>Where the snapshot is now: its URL in the user's files, or its path on this computer.</p></td></tr>
<tr><td><code>inUserFiles</code></td><td>boolean</td><td><p><code>true</code> if it is in the user's files, <code>false</code> if it is on this computer.</p></td></tr>
<tr><td><code>uploadError</code></td><td>string</td><td><p>Why the upload failed, when it did; empty when the snapshot was uploaded or no upload was tried (no one was signed in).</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report where each Snap goes.</p></div>

```js
Snapshot.snapshotStored.connect(function (takenPath, location, inUserFiles, uploadError) {
    print(inUserFiles ? "In My Files: " + location : "On this computer: " + location + " " + uploadError);
});
```
