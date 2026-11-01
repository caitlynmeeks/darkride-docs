---
title: "File"
description: "The File API provides some facilities for working with the file system."
draft: true
---

# File

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: Interface scripts, client entity scripts, avatar scripts, server entity scripts, assignment client scripts.</div>

<div class="api-text" v-pre><p>The <code>File</code> API provides some facilities for working with the file system.</p></div>

## Functions {#functions}

### convertUrlToPath {#convertUrlToPath}

```js
File.convertUrlToPath(url)
```

<div class="api-text" v-pre><p>Extracts a filename from a URL, where the filename is specified in the query part of the URL as <code>filename=</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL to extract the filename from.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The filename specified in the URL; an empty string if no filename is specified.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Extract a filename from a URL.</p></div>

```js
var url = "http://domain.tld/path/page.html?filename=file.ext";
print("File name: " + File.convertUrlToPath(url));  // file.ext
```

### getTempDir {#getTempDir}

```js
File.getTempDir()
```

<div class="api-text" v-pre><p>Creates a new, unique directory for temporary use.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The path of the newly created temporary directory.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Create a temporary directory.</p></div>

```js
print("New temporary directory: " + File.getTempDir());
```

### runUnzip {#runUnzip}

```js
File.runUnzip(path, url, autoAdd, isZip, isBlocks)
```

<div class="api-text" v-pre><p>Unzips a file in the local file system to a new, unique temporary directory.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The path of the zip file in the local file system. May have a leading <code>"file:///"</code>. Need not have a <code>".zip"</code> extension if it is in a temporary directory (as created by <a href="#getTempDir">getTempDir</a>).</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td><p><em>Not used.</em></p></td></tr>
<tr><td><code>autoAdd</code></td><td>boolean</td><td><p><em>Not used by user scripts.</em> The value is simply passed through to the <a href="#unzipResult">unzipResult</a> signal.</p></td></tr>
<tr><td><code>isZip</code></td><td>boolean</td><td><p>Set to <code>true</code> if <code>path</code> has a <code>".zip"</code> extension, <code>false</code> if it doesn't (but should still be treated as a zip file).</p></td></tr>
<tr><td><code>isBlocks</code></td><td>boolean</td><td><p><em>Not used by user scripts.</em> The value is simply passed through to the <a href="#unzipResult">unzipResult</a> signal.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Select and unzip a file.</p></div>

```js
File.unzipResult.connect(function (zipFile, unzipFiles, autoAdd, isZip, isBlocks) {
    print("File.unzipResult()");
    print("- zipFile: " + zipFile);
    print("- unzipFiles(" + unzipFiles.length + "): " + unzipFiles);
    print("- autoAdd: " + autoAdd);
    print("- isZip: " + isZip);
    print("- isBlocks: " + isBlocks);
});

var zipFile = Window.browse("Select a Zip File", "", "*.zip");
if (zipFile) {
    File.runUnzip(zipFile, "", false, true, false);
} else {
    print("Zip file not selected.");
}
```

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

### unzipResult {#unzipResult}

```js
File.unzipResult.connect(function (zipFile, unzipFiles, autoAdd, isZip, isBlocks) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when <a href="#runUnzip">runUnzip</a> completes.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>zipFile</code></td><td>string</td><td><p>The file that was unzipped.</p></td></tr>
<tr><td><code>unzipFiles</code></td><td>Array&lt;string&gt;</td><td><p>The paths of the unzipped files in a newly created temporary directory. Includes entries for any subdirectories created. An empty array if the <code>zipFile</code> could not be unzipped.</p></td></tr>
<tr><td><code>autoAdd</code></td><td>boolean</td><td><p>The value that <a href="#runUnzip">runUnzip</a> was called with.</p></td></tr>
<tr><td><code>isZip</code></td><td>boolean</td><td><p><code>true</code> if <a href="#runUnzip">runUnzip</a> was called with <code>isZip == true</code>, unless there is no FBX or OBJ file in the unzipped file(s) in which case the value is <code>false</code>.</p></td></tr>
<tr><td><code>isBlocks</code></td><td>boolean</td><td><p>The value that <a href="#runUnzip">runUnzip</a> was called with.</p></td></tr>
</tbody></table></div>
