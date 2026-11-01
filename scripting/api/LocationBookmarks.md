---
title: "LocationBookmarks"
description: "The LocationBookmarks API provides facilities for working with location bookmarks."
---

# LocationBookmarks

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: entity scripts, client scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>LocationBookmarks</code> API provides facilities for working with location bookmarks. A location bookmark associates a name with a metaverse address.</p></div>

## Functions {#functions}

<div class="api-entry">

### addBookmark {#addBookmark}

```js
LocationBookmarks.addBookmark()
```

<div class="api-text" v-pre><p>Prompts the user to bookmark their current location. The user can specify the name of the bookmark in the dialog that is opened.</p></div>

</div>

<div class="api-entry">

### deleteBookmark {#deleteBookmark}

```js
LocationBookmarks.deleteBookmark()
```

<div class="api-text" v-pre><p>Prompts the user to delete a bookmark. The user can select the bookmark to delete in the dialog that is opened.</p></div>

</div>

<div class="api-entry">

### getAddress {#getAddress}

```js
LocationBookmarks.getAddress(bookmarkName)
```

<div class="api-text" v-pre><p>Gets the metaverse address associated with a bookmark.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bookmarkName</code></td><td>string</td><td><p>Name of the bookmark to get the metaverse address for (case sensitive).</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The metaverse address for the bookmark. If the bookmark does not exist, <code>""</code> is returned.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report the "Home" bookmark's metaverse address.</p></div>

```js
print("Home bookmark's address: " + LocationBookmarks.getAddress("Home"));
```

</div>

<div class="api-entry">

### getHomeLocationAddress {#getHomeLocationAddress}

```js
LocationBookmarks.getHomeLocationAddress()
```

<div class="api-text" v-pre><p>Gets the metaverse address associated with the "Home" bookmark.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> string <p>The metaverse address for the "Home" bookmark.</p></div>

</div>

<div class="api-entry">

### setHomeLocationToAddress {#setHomeLocationToAddress}

```js
LocationBookmarks.setHomeLocationToAddress(address)
```

<div class="api-text" v-pre><p>Sets the metaverse address associated with the "Home" bookmark.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>address</code></td><td>string</td><td><p>The metaverse address to set the "Home" bookmark to.</p></td></tr>
</tbody></table></div>

</div>
