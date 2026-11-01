---
title: "Assets"
description: "The Assets API provides facilities for interacting with the world's asset server and the client cache."
---

# Assets

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts, server entity scripts, agents.</div>

<div class="api-text" v-pre><p>The <code>Assets</code> API provides facilities for interacting with the world's asset server and the client cache. </p>
<p>Assets are stored in the asset server in files with SHA256 names. These files are mapped to user-friendly URLs of the format: <code>atp:/path/filename</code>. The assets may optionally be baked, in which case a request for the original unbaked version of the asset is automatically redirected to the baked version. The asset data may optionally be stored as compressed.</p>
 <p>The client cache can be accessed directly, using <code>"atp:"</code> or <code>"cache:"</code> URLs. Darkride, avatar, and assignment client scripts can write to the cache. All script types can read from the cache.</p>
<p></p></div>

## Functions {#functions}

<div class="api-entry">

### canWriteCacheValue {#canWriteCacheValue}

```js
Assets.canWriteCacheValue(url)
```

<div class="api-text" v-pre><p>Checks whether the script can write to the cache.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p><em>Not used.</em></p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the script is a Darkride, avatar, or assignment client script, <code>false</code> if the script is a client entity or server entity script.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report whether the script can write to the cache.</p></div>

```js
print("Can write to cache: " + Assets.canWriteCacheValue(null));
```

</div>

<div class="api-entry">

### compressData {#compressData}

```js
Assets.compressData(source, scopeOrCallback, callback?)
```

<div class="api-text" v-pre><p>Compresses data in memory using gzip.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source</code></td><td>string | ArrayBuffer | <a href="#CompressOptions">Assets.CompressOptions</a></td><td><p>What to compress and compression options. If a string or ArrayBuffer, the data to compress.</p></td></tr>
<tr><td><code>scopeOrCallback</code></td><td>object | <a href="#CallbackDetails">Assets.CallbackDetails</a> | <a href="#compressDataCallback">Assets~compressDataCallback</a></td><td><p>If an object, then the scope that the <code>callback</code> function is defined in. This object is bound to <code>this</code> when the function is called. </p>
<p>Otherwise, the function to call upon completion. This may be an inline function or a function identifier.</p>
<p></p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td><a href="#compressDataCallback">Assets~compressDataCallback</a></td><td><p>Used if <code>scopeOrCallback</code> specifies the scope. </p>
<p>The function to call upon completion. May be an inline function, a function identifier, or the name of a function in a string. If the name of a function or a function identifier, it must be a member of the scope specified by <code>scopeOrCallback</code>.</p>
<p></p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### decompressData {#decompressData}

```js
Assets.decompressData(source, scopeOrCallback, callback?)
```

<div class="api-text" v-pre><p>Decompresses data in memory using gunzip.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source</code></td><td><a href="#DecompressOptions">Assets.DecompressOptions</a></td><td><p>What to decompress and decompression options.</p></td></tr>
<tr><td><code>scopeOrCallback</code></td><td>object | <a href="#CallbackDetails">Assets.CallbackDetails</a> | <a href="#decompressDataCallback">Assets~decompressDataCallback</a></td><td><p>If an object, then the scope that the <code>callback</code> function is defined in. This object is bound to <code>this</code> when the function is called. </p>
<p>Otherwise, the function to call upon completion. This may be an inline function or a function identifier.</p>
<p></p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td><a href="#decompressDataCallback">Assets~decompressDataCallback</a></td><td><p>Used if <code>scopeOrCallback</code> specifies the scope. </p>
<p>The function to call upon completion. May be an inline function, a function identifier, or the name of a function in a string. If the name of a function or a function identifier, it must be a member of the scope specified by <code>scopeOrCallback</code>.</p>
<p></p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### deleteAsset {#deleteAsset}

```js
Assets.deleteAsset(options, scope, callback)
```

<div class="api-text" v-pre><p>Deletes content from the asset server. </p>
<p class="important">Not implemented: This method is not implemented yet.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>options</code></td><td>Assets.DeleteOptions</td><td><p>The content to delete and delete options.</p></td></tr>
<tr><td><code>scope</code></td><td>object</td><td><p>The scope that the <code>callback</code> function is defined in.</p></td></tr>
<tr><td><code>callback</code></td><td><a href="#deleteAssetCallback">Assets~deleteAssetCallback</a></td><td><p>The function to call upon completion.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### downloadData {#downloadData}

```js
Assets.downloadData(url, callback)
```

<div class="api-text" v-pre><p>Downloads content from the asset server, from a SHA256-named file.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The raw URL of asset to download: <code>atp:</code> followed by the assets's SHA256 hash.</p></td></tr>
<tr><td><code>callback</code></td><td><a href="#downloadDataCallback">Assets~downloadDataCallback</a></td><td><p>The function to call upon completion.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Store and retrieve a string from the asset server.</p></div>

```js
var assetURL;

// Store the string.
Assets.uploadData("Hello world!", function (url, hash) {
    assetURL = url;
    print("url: " + assetURL);  // atp:a0g89...
    Assets.setMapping("/assetsExamples/helloWorld.txt", hash, function (error) {
        if (error) {
            print("ERROR: Could not set mapping!");
            return;
        }
    });
});

// Retrieve the string.
Script.setTimeout(function () {
    Assets.downloadData(assetURL, function (data, error) {
        print("Downloaded data: " + data);
        print("Error: " + JSON.stringify(error));
    });
}, 1000);
```

</div>

<div class="api-entry">

### extractAssetHash {#extractAssetHash}

```js
Assets.extractAssetHash(url)
```

<div class="api-text" v-pre><p>Gets the SHA256 hexadecimal hash portion of an asset server URL.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL to get the SHA256 hexadecimal hash from.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The SHA256 hexadecimal hash portion of the URL if present and valid, <code>""</code> otherwise.</p></div>

</div>

<div class="api-entry">

### getAsset {#getAsset}

```js
Assets.getAsset(source, scopeOrCallback, callback?)
```

<div class="api-text" v-pre><p>Downloads content from the asset server.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source</code></td><td>string | <a href="#GetOptions">Assets.GetOptions</a></td><td><p>What to download and download options. If a string, the mapped path or hash to download, optionally including a leading <code>"atp:"</code>.</p></td></tr>
<tr><td><code>scopeOrCallback</code></td><td>object | <a href="#CallbackDetails">Assets.CallbackDetails</a> | <a href="#getAssetCallback">Assets~getAssetCallback</a></td><td><p>If an object, then the scope that the <code>callback</code> function is defined in. This object is bound to <code>this</code> when the function is called. </p>
<p>Otherwise, the function to call upon completion. This may be an inline function or a function identifier.</p>
<p></p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td><a href="#getAssetCallback">Assets~getAssetCallback</a></td><td><p>Used if <code>scopeOrCallback</code> specifies the scope. </p>
<p>The function to call upon completion. May be an inline function, a function identifier, or the name of a function in a string. If the name of a function or a function identifier, it must be a member of the scope specified by <code>scopeOrCallback</code>.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Retrieve a string from the asset server.</p></div>

```js
Assets.getAsset(
    {
        url: "/assetsExamples/helloWorld.txt",
        responseType: "text"
    },
    function (error, result) {
        if (error) {
            print("ERROR: Data not downloaded");
        } else {
            print("Data: " + result.response);
        }
    }
);
```

</div>

<div class="api-entry">

### getATPUrl {#getATPUrl}

```js
Assets.getATPUrl(url)
```

<div class="api-text" v-pre><p>Gets the normalized ATP URL for a path or hash: ensures that it has <code>"atp:"</code> at the start.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL to normalize.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The normalized ATP URL.</p></div>

</div>

<div class="api-entry">

### getCacheStatus {#getCacheStatus}

```js
Assets.getCacheStatus(scopeOrCallback, callback?)
```

<div class="api-text" v-pre><p>Gets the current cache status.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>scopeOrCallback</code></td><td>object | <a href="#CallbackDetails">Assets.CallbackDetails</a> | <a href="#getCacheStatusCallback">Assets~getCacheStatusCallback</a></td><td><p>If an object, then the scope that the <code>callback</code> function is defined in. This object is bound to <code>this</code> when the function is called. </p>
<p>Otherwise, the function to call upon completion. This may be an inline function or a function identifier.</p>
<p></p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td><a href="#getCacheStatusCallback">Assets~getCacheStatusCallback</a></td><td><p>Used if <code>scopeOrCallback</code> specifies the scope. </p>
<p>The function to call upon completion. May be an inline function, a function identifier, or the name of a function in a string. If the name of a function or a function identifier, it must be a member of the scope specified by <code>scopeOrCallback</code>.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the cache status.</p></div>

```js
Assets.getCacheStatus(function (error, status) {
    print("Cache status");
    print("- Error: " + error);
    print("- Status: " + JSON.stringify(status));
});
```

</div>

<div class="api-entry">

### getMapping {#getMapping}

```js
Assets.getMapping(path, callback)
```

<div class="api-text" v-pre><p>Gets the hash for a path within the asset server. The hash is for the unbaked or baked version of the asset, according to the asset server setting for the particular path.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The path to a file in the asset server to get the hash of.</p></td></tr>
<tr><td><code>callback</code></td><td><a href="#getMappingCallback">Assets~getMappingCallback</a></td><td><p>The function to call upon completion.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the hash of an asset server item.</p></div>

```js
var assetPath = Window.browseAssets();
if (assetPath) {
    var mapping = Assets.getMapping(assetPath, function (error, hash) {
        print("Asset: " + assetPath);
        print("- hash:  " + hash);
        print("- error: " + error);
    });
}
```

</div>

<div class="api-entry">

### hashData {#hashData}

```js
Assets.hashData(data)
```

<div class="api-text" v-pre><p>Calculates the SHA256 hash of given data.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code></td><td>string | ArrayBuffer</td><td><p>The data to calculate the hash of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> ArrayBuffer <p>The SHA256 hash of the <code>data</code>.</p></div>

</div>

<div class="api-entry">

### hashDataHex {#hashDataHex}

```js
Assets.hashDataHex(data)
```

<div class="api-text" v-pre><p>Calculates the SHA256 hash of given data, in hexadecimal format.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code></td><td>string | ArrayBuffer</td><td><p>The data to calculate the hash of.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The SHA256 hash of the <code>data</code>, in hexadecimal format.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Calculate the hash of some text.</p></div>

```js
var text = "Hello world!";
print("Hash: " + Assets.hashDataHex(text));
```

</div>

<div class="api-entry">

### initializeCache {#initializeCache}

```js
Assets.initializeCache()
```

<div class="api-text" v-pre><p>Initializes the cache if it isn't already initialized.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the cache is initialized, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### isValidFilePath {#isValidFilePath}

```js
Assets.isValidFilePath(path)
```

<div class="api-text" v-pre><p>Checks whether a string is a valid path and filename. Note: A valid path and filename must start with a <code>"/"</code> but must not end with a <code>"/"</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The path to check.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the path is a valid file path, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### isValidHash {#isValidHash}

```js
Assets.isValidHash(hash)
```

<div class="api-text" v-pre><p>Checks whether a string is a valid SHA256 hexadecimal hash, i.e., 64 hexadecimal characters.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>hash</code></td><td>string</td><td><p>The hash to check.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the hash is a valid SHA256 hexadecimal string, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### isValidPath {#isValidPath}

```js
Assets.isValidPath(path)
```

<div class="api-text" v-pre><p>Checks whether a string is a valid path. Note: A valid path must start with a <code>"/"</code>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>The path to check.</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> boolean <p><code>true</code> if the path is a valid path, <code>false</code> if it isn't.</p></div>

</div>

<div class="api-entry">

### loadFromCache {#loadFromCache}

```js
Assets.loadFromCache(options, scopeOrCallback, callback?)
```

<div class="api-text" v-pre><p>Retrieves data from the cache directly, without downloading it.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>options</code></td><td>string | <a href="#LoadFromCacheOptions">Assets.LoadFromCacheOptions</a></td><td><p>The URL of the asset to load from the cache if a string, otherwise an object specifying the asset to load from the cache and load options. The URL must start with <code>"atp:"</code> or <code>"cache:"</code>.</p></td></tr>
<tr><td><code>scopeOrCallback</code></td><td>object | <a href="#CallbackDetails">Assets.CallbackDetails</a> | <a href="#loadFromCacheCallback">Assets~loadFromCacheCallback</a></td><td><p>If an object, then the scope that the <code>callback</code> function is defined in. This object is bound to <code>this</code> when the function is called. </p>
<p>Otherwise, the function to call upon completion. This may be an inline function or a function identifier.</p>
<p></p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td><a href="#loadFromCacheCallback">Assets~loadFromCacheCallback</a></td><td><p>Used if <code>scopeOrCallback</code> specifies the scope. </p>
<p>The function to call upon completion. May be an inline function, a function identifier, or the name of a function in a string. If the name of a function or a function identifier, it must be a member of the scope specified by <code>scopeOrCallback</code>.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Retrieve a string from the cache.</p></div>

```js
Assets.loadFromCache(
    "cache:/cacheExample/helloCache.txt",
    function (error, result) {
        if (error) {
            print("Error: " + error);
        } else {
            print("Success:");
            print("- Response: " + result.response);
            print("- Content type: " + result.contentType);
            print("- Number of bytes: " + result.byteLength);
            print("- Bytes: " + [].slice.call(new Uint8Array(result.data), 0, result.byteLength));
            print("- URL: " + result.url);
        }
    }
);
```

</div>

<div class="api-entry">

### putAsset {#putAsset}

```js
Assets.putAsset(options, scopeOrCallback, callback?)
```

<div class="api-text" v-pre><p>Uploads content to the asset server and sets a path-to-hash mapping.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>options</code></td><td>string | <a href="#PutOptions">Assets.PutOptions</a></td><td><p>The content to upload and upload options. If a string, the value of the string is uploaded but a path-to-hash mapping is not set.</p></td></tr>
<tr><td><code>scopeOrCallback</code></td><td>object | <a href="#CallbackDetails">Assets.CallbackDetails</a> | <a href="#putAssetCallback">Assets~putAssetCallback</a></td><td><p>If an object, then the scope that the <code>callback</code> function is defined in. This object is bound to <code>this</code> when the function is called. </p>
<p>Otherwise, the function to call upon completion. This may be an inline function or a function identifier.</p>
<p></p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td><a href="#putAssetCallback">Assets~putAssetCallback</a></td><td><p>Used if <code>scopeOrCallback</code> specifies the scope. </p>
<p>The function to call upon completion. May be an inline function, a function identifier, or the name of a function in a string. If the name of a function or a function identifier, it must be a member of the scope specified by <code>scopeOrCallback</code>.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Store a string in the asset server.</p></div>

```js
Assets.putAsset(
    {
        data: "Hello world!",
        path: "/assetsExamples/helloWorld.txt"
    },
    function (error, result) {
        if (error) {
            print("ERROR: Data not uploaded or mapping not set");
        } else {
            print("URL: " + result.url);  // atp:/assetsExamples/helloWorld.txt
        }
    }
);
```

</div>

<div class="api-entry">

### queryCacheMeta {#queryCacheMeta}

```js
Assets.queryCacheMeta(path, scopeOrCallback, callback?)
```

<div class="api-text" v-pre><p>Gets information about the status of an asset in the cache.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string | <a href="#QueryCacheMetaOptions">Assets.QueryCacheMetaOptions</a></td><td><p>The URL of the cached asset to get information on if a string, otherwise an object specifying the cached asset to get information on. The URL must start with <code>"atp:"</code> or <code>"cache:"</code>.</p></td></tr>
<tr><td><code>scopeOrCallback</code></td><td>object | <a href="#CallbackDetails">Assets.CallbackDetails</a> | <a href="#queryCacheMetaCallback">Assets~queryCacheMetaCallback</a></td><td><p>If an object, then the scope that the <code>callback</code> function is defined in. This object is bound to <code>this</code> when the function is called. </p>
<p>Otherwise, the function to call upon completion. This may be an inline function or a function identifier.</p>
<p></p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td><a href="#queryCacheMetaCallback">Assets~queryCacheMetaCallback</a></td><td><p>Used if <code>scopeOrCallback</code> specifies the scope. </p>
<p>The function to call upon completion. May be an inline function, a function identifier, or the name of a function in a string. If the name of a function or a function identifier, it must be a member of the scope specified by <code>scopeOrCallback</code>.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report details of a string store in the cache.</p></div>

```js
Assets.queryCacheMeta(
    "cache:/cacheExample/helloCache.txt",
    function (error, result) {
        if (error) {
            print("Error: " + error);
        } else {
            print("Success:");
            print("- URL: " + result.url);
            print("- isValid: " + result.isValid);
            print("- saveToDisk: " + result.saveToDisk);
            print("- expirationDate: " + result.expirationDate);
        }
    }
);
```

</div>

<div class="api-entry">

### resolveAsset {#resolveAsset}

```js
Assets.resolveAsset(source, scopeOrCallback, callback?)
```

<div class="api-text" v-pre><p>Resolves and returns information on a hash or a path in the asset server.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>source</code></td><td>string | <a href="#ResolveOptions">Assets.ResolveOptions</a></td><td><p>The hash or path to resolve if a string, otherwise an object specifying what to resolve. If a string, it may have a leading <code>"atp:"</code>.</p></td></tr>
<tr><td><code>scopeOrCallback</code></td><td>object | <a href="#CallbackDetails">Assets.CallbackDetails</a> | <a href="#resolveAssetCallback">Assets~resolveAssetCallback</a></td><td><p>If an object, then the scope that the <code>callback</code> function is defined in. This object is bound to <code>this</code> when the function is called. </p>
<p>Otherwise, the function to call upon completion. This may be an inline function or a function identifier.</p>
<p></p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td><a href="#resolveAssetCallback">Assets~resolveAssetCallback</a></td><td><p>Used if <code>scopeOrCallback</code> specifies the scope. </p>
<p>The function to call upon completion. May be an inline function, a function identifier, or the name of a function in a string. If the name of a function or a function identifier, it must be a member of the scope specified by <code>scopeOrCallback</code>.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Get the hash and URL for a path.</p></div>

```js
Assets.resolveAsset(
    "/assetsExamples/helloWorld.txt",
    function (error, result) {
        if (error) {
            print("ERROR: " + error);
        } else {
            print("Hash: " + result.hash);
            print("URL: " + result.url);
        }
    }
);
```

</div>

<div class="api-entry">

### saveToCache {#saveToCache}

```js
Assets.saveToCache(options, scopeOrCallback, callback?)
```

<div class="api-text" v-pre><p>Saves asset data to the cache directly, without downloading it from a URL. </p>
<p>Note: Can only be used in Darkride, avatar, and assignment client scripts.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>options</code></td><td><a href="#SaveToCacheOptions">Assets.SaveToCacheOptions</a></td><td><p>The data to save to the cache and cache options.</p></td></tr>
<tr><td><code>scopeOrCallback</code></td><td>object | <a href="#CallbackDetails">Assets.CallbackDetails</a> | <a href="#saveToCacheCallback">Assets~saveToCacheCallback</a></td><td><p>If an object, then the scope that the <code>callback</code> function is defined in. This object is bound to <code>this</code> when the function is called. </p>
<p>Otherwise, the function to call upon completion. This may be an inline function or a function identifier.</p>
<p></p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td><a href="#saveToCacheCallback">Assets~saveToCacheCallback</a></td><td><p>Used if <code>scopeOrCallback</code> specifies the scope. </p>
<p>The function to call upon completion. May be an inline function, a function identifier, or the name of a function in a string. If the name of a function or a function identifier, it must be a member of the scope specified by <code>scopeOrCallback</code>.</p>
<p></p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Save a string in the cache.</p></div>

```js
Assets.saveToCache(
    {
        url: "cache:/cacheExample/helloCache.txt",
        data: "Hello cache"
    },
    function (error, result) {
        if (error) {
            print("Error: " + error);
        } else {
            print("Success:");
            print("- Bytes: " + result.byteLength);
            print("- URL: " + result.url);
        }
    }
);
```

</div>

<div class="api-entry">

### saveToCache {#saveToCache-2}

```js
Assets.saveToCache(url, data, headers, scopeOrCallback, callback?)
```

<div class="api-text" v-pre><p>Saves asset data to the cache directly, without downloading it from a URL. </p>
<p>Note: Can only be used in Darkride, avatar, and assignment client scripts.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL to associate with the cache item. Must start with <code>"atp:"</code> or <code>"cache:"</code>.</p></td></tr>
<tr><td><code>data</code></td><td>string | ArrayBuffer</td><td><p>The data to save to the cache.</p></td></tr>
<tr><td><code>headers</code></td><td><a href="#SaveToCacheHeaders">Assets.SaveToCacheHeaders</a></td><td><p>The last-modified and expiry times for the cache item.</p></td></tr>
<tr><td><code>scopeOrCallback</code></td><td>object | <a href="#CallbackDetails">Assets.CallbackDetails</a> | <a href="#saveToCacheCallback">Assets~saveToCacheCallback</a></td><td><p>If an object, then the scope that the <code>callback</code> function is defined in. This object is bound to <code>this</code> when the function is called. </p>
<p>Otherwise, the function to call upon completion. This may be an inline function or a function identifier.</p>
<p></p></td></tr>
<tr><td><code>callback</code> <em>optional</em></td><td><a href="#saveToCacheCallback">Assets~saveToCacheCallback</a></td><td><p>Used if <code>scopeOrCallback</code> specifies the scope. </p>
<p>The function to call upon completion. May be an inline function, a function identifier, or the name of a function in a string. If the name of a function or a function identifier, it must be a member of the scope specified by <code>scopeOrCallback</code>.</p>
<p></p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setMapping {#setMapping}

```js
Assets.setMapping(path, hash, callback)
```

<div class="api-text" v-pre><p>Sets a path-to-hash mapping within the asset server.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>string</td><td><p>A user-friendly path for the file in the asset server, without leading <code>"atp:"</code>.</p></td></tr>
<tr><td><code>hash</code></td><td>string</td><td><p>The hash in the asset server.</p></td></tr>
<tr><td><code>callback</code></td><td><a href="#setMappingCallback">Assets~setMappingCallback</a></td><td><p>The function to call upon completion.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### uploadData {#uploadData}

```js
Assets.uploadData(data, callback)
```

<div class="api-text" v-pre><p>Uploads content to the asset server, storing it in a SHA256-named file. </p>
<p>Note: The asset server destroys any unmapped SHA256-named file at server restart. Use <a href="#setMapping"><code>Assets.setMapping</code></a> to set a path-to-hash mapping for the new file.</p>
<p></p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code></td><td>string</td><td><p>The content to upload.</p></td></tr>
<tr><td><code>callback</code></td><td><a href="#uploadDataCallback">Assets~uploadDataCallback</a></td><td><p>The function to call upon completion.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Store a string in the asset server.</p></div>

```js
Assets.uploadData("Hello world!", function (url, hash) {
    print("URL: " + url);  // atp:0a1b...9g
    Assets.setMapping("/assetsExamples/helloWorld.txt", hash, function (error) {
        if (error) {
            print("ERROR: Could not set mapping!");
            return;
        }
    });
});
```

</div>

## Types {#types}

<div class="api-entry">

### CacheItemMetaData {#CacheItemMetaData}

<div class="api-text" v-pre><p>Information on an asset in the cache. Value returned by <a href="#queryCacheMeta"><code>Assets.queryCacheMeta</code></a> and included in the data returned by <a href="#loadFromCache"><code>Assets.loadFromCache</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>attributes</code> <em>optional</em></td><td>object</td><td><p>The attributes that are stored with this cache item. <em>Not used.</em></p></td></tr>
<tr><td><code>expirationDate</code> <em>optional</em></td><td>Date</td><td><p>The date and time when the meta data expires. An invalid date means "never expires".</p></td></tr>
<tr><td><code>isValid</code></td><td>boolean</td><td><p><code>true</code> if the item specified in the URL is in the cache, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>lastModified</code> <em>optional</em></td><td>Date</td><td><p>The date and time when the meta data was last modified.</p></td></tr>
<tr><td><code>rawHeaders</code> <em>optional</em></td><td>object</td><td><p>The raw headers that are set in the meta data. <em>Not used.</em></p></td></tr>
<tr><td><code>saveToDisk</code> <em>optional</em></td><td>boolean</td><td><p><code>true</code> if the cache item is allowed to be store on disk, <code>false</code> if it isn't.</p></td></tr>
<tr><td><code>url|metaDataURL</code> <em>optional</em></td><td>string</td><td><p>The ATP URL of the cached item.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### CallbackDetails {#CallbackDetails}

<div class="api-text" v-pre><p>Details of a callback function.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>scope</code></td><td>object</td><td><p>The scope that the <code>callback</code> function is defined in. This object is bound to <code>this</code> when the function is called.</p></td></tr>
<tr><td><code>callback</code></td><td><a href="#compressDataCallback">Assets~compressDataCallback</a> | <a href="#decompressDataCallback">Assets~decompressDataCallback</a> | <a href="#getAssetCallback">Assets~getAssetCallback</a> | <a href="#getCacheStatusCallback">Assets~getCacheStatusCallback</a> | <a href="#loadFromCacheCallback">Assets~loadFromCacheCallback</a> | <a href="#putAssetCallback">Assets~putAssetCallback</a> | <a href="#queryCacheMetaCallback">Assets~queryCacheMetaCallback</a> | <a href="#resolveAssetCallback">Assets~resolveAssetCallback</a> | <a href="#saveToCacheCallback">Assets~saveToCacheCallback</a></td><td><p>The function to call upon completion. May be an inline function or a function identifier. If a function identifier, it must be a member of <code>scope</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### compressDataCallback {#compressDataCallback}

<div class="api-text" v-pre><p>Called when an <a href="#compressData"><code>Assets.compressData</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the data was successfully compressed, otherwise a description of the error.</p></td></tr>
<tr><td><code>result</code></td><td><a href="#CompressResult">Assets.CompressResult</a></td><td><p>Information on and the compressed data.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### CompressOptions {#CompressOptions}

<div class="api-text" v-pre><p>Content and compression options for <a href="#compressData"><code>Assets.compressData</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code></td><td>string | ArrayBuffer</td><td><p>The data to compress.</p></td></tr>
<tr><td><code>level</code></td><td>number</td><td><p>The compression level, range <code>-1</code> – <code>9</code>. <code>-1</code> means use the default gzip compression level, <code>0</code> means no compression, and <code>9</code> means maximum compression.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### CompressResult {#CompressResult}

<div class="api-text" v-pre><p>Result value returned by <a href="#compressData"><code>Assets.compressData</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>byteLength</code> <em>optional</em></td><td>number</td><td><p>The number of bytes in the compressed data.</p></td></tr>
<tr><td><code>compressed</code> <em>optional</em></td><td>boolean</td><td><p><code>true</code> if the data is compressed.</p></td></tr>
<tr><td><code>contentType</code> <em>optional</em></td><td>string</td><td><p>The MIME type of the compressed data, i.e., <code>"application/gzip"</code>.</p></td></tr>
<tr><td><code>data</code> <em>optional</em></td><td>ArrayBuffer</td><td><p>The compressed data.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### decompressDataCallback {#decompressDataCallback}

<div class="api-text" v-pre><p>Called when an <a href="#decompressData"><code>Assets.decompressData</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the data was successfully compressed, otherwise a description of the error.</p></td></tr>
<tr><td><code>result</code></td><td><a href="#DecompressResult">Assets.DecompressResult</a></td><td><p>Information on and the decompressed data.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### DecompressOptions {#DecompressOptions}

<div class="api-text" v-pre><p>Content and decompression options for <a href="#decompressData"><code>Assets.decompressData</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code></td><td>ArrayBuffer</td><td></td><td><p>The data to decompress.</p></td></tr>
<tr><td><code>responseType</code> <em>optional</em></td><td><a href="#ResponseType">Assets.ResponseType</a></td><td><code>text</code></td><td><p>The type of decompressed data to return.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### DecompressResult {#DecompressResult}

<div class="api-text" v-pre><p>Result value returned by <a href="#decompressData"><code>Assets.decompressData</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>byteLength</code> <em>optional</em></td><td>number</td><td><p>The number of bytes in the decompressed data.</p></td></tr>
<tr><td><code>contentType</code> <em>optional</em></td><td>string</td><td><p>The MIME type of the decompressed data.</p></td></tr>
<tr><td><code>decompressed</code> <em>optional</em></td><td>boolean</td><td><p><code>true</code> if the data is decompressed.</p></td></tr>
<tr><td><code>response</code> <em>optional</em></td><td>string | object | ArrayBuffer</td><td><p>The decompressed data.</p></td></tr>
<tr><td><code>responseType</code> <em>optional</em></td><td><a href="#ResponseType">Assets.ResponseType</a></td><td><p>The type of the decompressed data in <code>response</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### deleteAssetCallback {#deleteAssetCallback}

<div class="api-text" v-pre><p>Called when an <a href="#deleteAsset"><code>Assets.deleteAsset</code></a> call is complete. </p>
<p class="important">Not implemented: This type is not implemented yet.</p>
<p></p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the content was deleted, otherwise a description of the error.</p></td></tr>
<tr><td><code>result</code></td><td>Assets.DeleteResult</td><td><p>Information on the content deleted.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### downloadDataCallback {#downloadDataCallback}

<div class="api-text" v-pre><p>Called when an <a href="#downloadData"><code>Assets.downloadData</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code></td><td>string</td><td><p>The content that was downloaded.</p></td></tr>
<tr><td><code>error</code></td><td><a href="#DownloadDataError">Assets.DownloadDataError</a></td><td><p>The success or failure of the download.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### DownloadDataError {#DownloadDataError}

<div class="api-text" v-pre><p>The success or failure of an <a href="#downloadData"><code>Assets.downloadData</code></a> call.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>errorMessage</code></td><td>string</td><td><p><code>""</code> if the download was successful, otherwise a description of the error.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getAssetCallback {#getAssetCallback}

<div class="api-text" v-pre><p>Called when an <a href="#getAsset"><code>Assets.getAsset</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the content was downloaded, otherwise a description of the error.</p></td></tr>
<tr><td><code>result</code></td><td><a href="#GetResult">Assets.GetResult</a></td><td><p>Information on and the content downloaded.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getCacheStatusCallback {#getCacheStatusCallback}

<div class="api-text" v-pre><p>Called when a <a href="#getCacheStatus"><code>Assets.getCacheStatus</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the cache status was retrieved without error, otherwise a description of the error.</p></td></tr>
<tr><td><code>result</code></td><td><a href="#GetCacheStatusResult">Assets.GetCacheStatusResult</a></td><td><p>Details of the current cache status.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### GetCacheStatusResult {#GetCacheStatusResult}

<div class="api-text" v-pre><p>Cache status value returned by <a href="#getCacheStatus"><code>Assets.getCacheStatus</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>cacheDirectory</code></td><td>string</td><td><p>The path of the cache directory.</p></td></tr>
<tr><td><code>cacheSize</code></td><td>number</td><td><p>The current cache size, in bytes.</p></td></tr>
<tr><td><code>maximumCacheSize</code></td><td>number</td><td><p>The maximum cache size, in bytes.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### getMappingCallback {#getMappingCallback}

<div class="api-text" v-pre><p>Called when an <a href="#getMapping"><code>Assets.getMapping</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the path was found, otherwise a description of the error.</p></td></tr>
<tr><td><code>hash</code></td><td>string</td><td><p>The hash value if the path was found, <code>""</code> if it wasn't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### GetOptions {#GetOptions}

<div class="api-text" v-pre><p>Source and download options for <a href="#getAsset"><code>Assets.getAsset</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>decompress</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to gunzip decompress the downloaded data. Synonym: <code>compressed</code>.</p></td></tr>
<tr><td><code>responseType</code> <em>optional</em></td><td><a href="#ResponseType">Assets.ResponseType</a></td><td><code>&quot;text&quot;</code></td><td><p>The desired result type.</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The mapped path or hash to download. May have a leading <code>"atp:"</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### GetResult {#GetResult}

<div class="api-text" v-pre><p>Result value returned by <a href="#getAsset"><code>Assets.getAsset</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>byteLength</code> <em>optional</em></td><td>number</td><td><p>The number of bytes in the downloaded content in <code>response</code>.</p></td></tr>
<tr><td><code>cached</code></td><td>boolean</td><td><p><code>true</code> if the item was retrieved from the cache, <code>false</code> if it was downloaded.</p></td></tr>
<tr><td><code>contentType</code> <em>optional</em></td><td>string</td><td><p>The automatically detected MIME type of the content.</p></td></tr>
<tr><td><code>decompressed</code> <em>optional</em></td><td>boolean</td><td><p><code>true</code> if the content was decompressed, <code>false</code> if it wasn't.</p></td></tr>
<tr><td><code>hash</code> <em>optional</em></td><td>string</td><td><p>The hash for the downloaded asset.</p></td></tr>
<tr><td><code>hashURL</code> <em>optional</em></td><td>string</td><td><p>The ATP URL of the hash file.</p></td></tr>
<tr><td><code>path</code> <em>optional</em></td><td>string</td><td><p>The path for the asset, if a path was requested. Otherwise, <code>undefined</code>.</p></td></tr>
<tr><td><code>response</code> <em>optional</em></td><td>string | object | ArrayBuffer</td><td><p>The downloaded content.</p></td></tr>
<tr><td><code>responseType</code> <em>optional</em></td><td><a href="#ResponseType">Assets.ResponseType</a></td><td><p>The type of the downloaded content in <code>response</code>.</p></td></tr>
<tr><td><code>url</code> <em>optional</em></td><td>string</td><td><p>The URL of the asset requested: the path with leading <code>"atp:"</code> if a path was requested, otherwise the requested URL.</p></td></tr>
<tr><td><code>wasRedirected</code> <em>optional</em></td><td>boolean</td><td><p><code>true</code> if the downloaded data is the baked version of the asset, <code>false</code> if it isn't baked.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### loadFromCacheCallback {#loadFromCacheCallback}

<div class="api-text" v-pre><p>Called when an <a href="#loadFromCache"><code>Assets.loadFromCache</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the cache item was successfully retrieved, otherwise a description of the error.</p></td></tr>
<tr><td><code>result</code></td><td><a href="#LoadFromCacheResult">Assets.LoadFromCacheResult</a></td><td><p>Information on and the retrieved data.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### LoadFromCacheOptions {#LoadFromCacheOptions}

<div class="api-text" v-pre><p>Source and retrieval options for <a href="#loadFromCache"><code>Assets.loadFromCache</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>decompress</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to gunzip decompress the cached data. Synonym: <code>compressed</code>.</p></td></tr>
<tr><td><code>responseType</code> <em>optional</em></td><td><a href="#ResponseType">Assets.ResponseType</a></td><td><code>text</code></td><td><p>The desired result type.</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td></td><td><p>The URL of the asset to load from cache. Must start with <code>"atp:"</code> or <code>"cache:"</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### LoadFromCacheResult {#LoadFromCacheResult}

<div class="api-text" v-pre><p>Data and information returned by <a href="#loadFromCache"><code>Assets.loadFromCache</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>byteLength</code> <em>optional</em></td><td>number</td><td><p>The number of bytes in the retrieved data.</p></td></tr>
<tr><td><code>contentType</code> <em>optional</em></td><td>string</td><td><p>The automatically detected MIME type of the content.</p></td></tr>
<tr><td><code>data</code></td><td>ArrayBuffer</td><td><p>The data bytes.</p></td></tr>
<tr><td><code>metadata</code></td><td><a href="#CacheItemMetaData">Assets.CacheItemMetaData</a></td><td><p>Information on the cache item.</p></td></tr>
<tr><td><code>response</code> <em>optional</em></td><td>string | object | ArrayBuffer</td><td><p>The content of the response.</p></td></tr>
<tr><td><code>responseType</code></td><td><a href="#ResponseType">Assets.ResponseType</a></td><td><p>The type of the content in <code>response</code>.</p></td></tr>
<tr><td><code>url</code></td><td>string</td><td><p>The URL of the cache item.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### putAssetCallback {#putAssetCallback}

<div class="api-text" v-pre><p>Called when an <a href="#putAsset"><code>Assets.putAsset</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the content was uploaded and any path-to-hash mapping set, otherwise a description of the error.</p></td></tr>
<tr><td><code>result</code></td><td><a href="#PutResult">Assets.PutResult</a></td><td><p>Information on the content uploaded.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### PutOptions {#PutOptions}

<div class="api-text" v-pre><p>Content and upload options for <a href="#putAsset"><code>Assets.putAsset</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
<tr><td><code>compress</code> <em>optional</em></td><td>boolean</td><td><code>false</code></td><td><p><code>true</code> to gzip compress the content for upload and storage, <code>false</code> to upload and store the data without gzip compression. Synonym: <code>compressed</code>.</p></td></tr>
<tr><td><code>data</code></td><td>string | ArrayBuffer</td><td></td><td><p>The content to upload.</p></td></tr>
<tr><td><code>path</code> <em>optional</em></td><td>string</td><td></td><td><p>A user-friendly path for the file in the asset server. May have a leading <code>"atp:"</code>. If not specified, no path-to-hash mapping is set. </p>
<p>Note: The asset server destroys any unmapped SHA256-named file at server restart. Either set the mapping path with this property or use <a href="#setMapping"><code>Assets.setMapping</code></a> to set a path-to-hash mapping for the uploaded file.</p>
<p></p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### PutResult {#PutResult}

<div class="api-text" v-pre><p>Result value returned by <a href="#putAsset"><code>Assets.putAsset</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>byteLength</code> <em>optional</em></td><td>number</td><td><p>The number of bytes in the hash file stored on the asset server.</p></td></tr>
<tr><td><code>compressed</code> <em>optional</em></td><td>boolean</td><td><p><code>true</code> if the content stored is gzip compressed.</p></td></tr>
<tr><td><code>contentType</code> <em>optional</em></td><td>string</td><td><p><code>"application/gzip"</code> if the content stored is gzip compressed.</p></td></tr>
<tr><td><code>hash</code> <em>optional</em></td><td>string</td><td><p>The SHA256 hash of the content.</p></td></tr>
<tr><td><code>url</code> <em>optional</em></td><td>string</td><td><p>The <code>atp:</code> URL of the content: using the path if specified, otherwise the hash.</p></td></tr>
<tr><td><code>path</code> <em>optional</em></td><td>string</td><td><p>The uploaded content's mapped path, if specified.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### queryCacheMetaCallback {#queryCacheMetaCallback}

<div class="api-text" v-pre><p>Called when <a href="#queryCacheMeta"><code>Assets.queryCacheMeta</code></a> is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the URL has a valid cache entry, otherwise a description of the error.</p></td></tr>
<tr><td><code>result</code></td><td><a href="#CacheItemMetaData">Assets.CacheItemMetaData</a></td><td><p>Information on an asset in the cache.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### QueryCacheMetaOptions {#QueryCacheMetaOptions}

<div class="api-text" v-pre><p>Source for <a href="#queryCacheMeta"><code>Assets.queryCacheMeta</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL of the cached asset to get information on. Must start with <code>"atp:"</code> or <code>"cache:"</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### resolveAssetCallback {#resolveAssetCallback}

<div class="api-text" v-pre><p>Called when an <a href="#resolveAsset"><code>Assets.resolveAsset</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the asset hash or path was resolved, otherwise a description of the error.</p></td></tr>
<tr><td><code>result</code></td><td><a href="#ResolveResult">Assets.ResolveResult</a></td><td><p>Information on the hash or path resolved.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ResolveOptions {#ResolveOptions}

<div class="api-text" v-pre><p>Source options for <a href="#resolveAsset"><code>Assets.resolveAsset</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The hash or path to resolve. May have a leading <code>"atp:"</code>.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ResolveResult {#ResolveResult}

<div class="api-text" v-pre><p>Result value returned by <a href="#resolveAsset"><code>Assets.resolveAsset</code></a>. </p>
<p>Note: If resolving a hash, a file of that hash need not be present on the asset server for the hash to resolve.</p>
<p></p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>hash</code> <em>optional</em></td><td>string</td><td><p>The hash of the asset.</p></td></tr>
<tr><td><code>hashURL</code> <em>optional</em></td><td>string</td><td><p>The url of the asset's hash file, with leading <code>atp:</code>.</p></td></tr>
<tr><td><code>path</code> <em>optional</em></td><td>string</td><td><p>The path to the asset.</p></td></tr>
<tr><td><code>url</code> <em>optional</em></td><td>string</td><td><p>The URL of the asset.</p></td></tr>
<tr><td><code>wasRedirected</code> <em>optional</em></td><td>boolean</td><td><p><code>true</code> if the resolved data is for the baked version of the asset, <code>false</code> if it isn't.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### ResponseType {#ResponseType}

<div class="api-text" v-pre><p>Types of response that <a href="#decompressData"><code>Assets.decompressData</code></a>, <a href="#getAsset"><code>Assets.getAsset</code></a>, or <a href="#loadFromCache"><code>Assets.loadFromCache</code></a> may provide.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code>"arraybuffer"</code></td><td>A binary <code>ArrayBuffer</code> object.</td></tr>
 <tr><td><code>"json"</code></td><td>A parsed <code>JSON</code> object.</td></tr>
 <tr><td><code>"text"</code></td><td>UTF-8 decoded <code>string</code> value.</td></tr>
 </tbody>
 </table></div>
<div class="api-type" v-pre><strong>Type:</strong> string</div>

</div>

<div class="api-entry">

### saveToCacheCallback {#saveToCacheCallback}

<div class="api-text" v-pre><p>Called when an <a href="#saveToCache"><code>Assets.saveToCache</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the asset data was successfully saved to the cache, otherwise a description of the error.</p></td></tr>
<tr><td><code>result</code></td><td><a href="#SaveToCacheResult">Assets.SaveToCacheResult</a></td><td><p>Information on the cached data.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### SaveToCacheHeaders {#SaveToCacheHeaders}

<div class="api-text" v-pre><p>Last-modified and expiry times for a cache item.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>expires</code> <em>optional</em></td><td>string</td><td><p>The date and time the cache value expires, in the format: <code>"ddd, dd MMM yyyy HH:mm:ss"</code>. The default value is an invalid date, representing "never expires".</p></td></tr>
<tr><td><code>last-modified</code> <em>optional</em></td><td>string</td><td><p>The date and time the cache value was last modified, in the format: <code>"ddd, dd MMM yyyy HH:mm:ss"</code>. The default value is the current date and time.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### SaveToCacheOptions {#SaveToCacheOptions}

<div class="api-text" v-pre><p>The data to save to the cache and cache options for <a href="#saveToCache"><code>Assets.saveToCache</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>data</code></td><td>string | ArrayBuffer</td><td><p>The data to save to the cache.</p></td></tr>
<tr><td><code>headers</code> <em>optional</em></td><td><a href="#SaveToCacheHeaders">Assets.SaveToCacheHeaders</a></td><td><p>The last-modified and expiry times for the cache item.</p></td></tr>
<tr><td><code>url</code> <em>optional</em></td><td>string</td><td><p>The URL to associate with the cache item. Must start with <code>"atp:"</code> or <code>"cache:"</code>. If not specified, the URL is <code>"atp:"</code> followed by the SHA256 hash of the content.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### SaveToCacheResult {#SaveToCacheResult}

<div class="api-text" v-pre><p>Information on saving asset data to the cache with <a href="#saveToCache"><code>Assets.saveToCache</code></a>.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>byteLength</code> <em>optional</em></td><td>number</td><td><p>The size of the cached data, in bytes.</p></td></tr>
<tr><td><code>expirationDate</code> <em>optional</em></td><td>Date</td><td><p>The date and time that the cache item expires. An invalid date means "never expires".</p></td></tr>
<tr><td><code>lastModified</code> <em>optional</em></td><td>Date</td><td><p>The date and time that the cache item was last modified.</p></td></tr>
<tr><td><code>metaDataURL</code> <em>optional</em></td><td>string</td><td><p>The URL associated with the cache item.</p></td></tr>
<tr><td><code>success</code> <em>optional</em></td><td>boolean</td><td><p><code>true</code> if the save to cache request was successful.</p></td></tr>
<tr><td><code>url</code> <em>optional</em></td><td>string</td><td><p>The URL associated with the cache item.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### setMappingCallback {#setMappingCallback}

<div class="api-text" v-pre><p>Called when an <a href="#setMapping"><code>Assets.setMapping</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>error</code></td><td>string</td><td><p><code>null</code> if the path-to-hash mapping was set, otherwise a description of the error.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### uploadDataCallback {#uploadDataCallback}

<div class="api-text" v-pre><p>Called when an <a href="#uploadData"><code>Assets.uploadData</code></a> call is complete.</p></div>
<div class="api-type" v-pre><strong>Type:</strong> function</div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The raw URL of the file that the content is stored in, with <code>atp:</code> as the scheme and the SHA256 hash as the filename (with no extension).</p></td></tr>
<tr><td><code>hash</code></td><td>string</td><td><p>The SHA256 hash of the content.</p></td></tr>
</tbody></table></div>

</div>
