---
title: "AvatarBookmarks"
description: "The AvatarBookmarks API provides facilities for working with avatar bookmarks (\"favorites\" in the Avatar app)."
draft: true
---

# AvatarBookmarks

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>AvatarBookmarks</code> API provides facilities for working with avatar bookmarks ("favorites" in the Avatar app). An avatar bookmark associates a name with an avatar model, scale, and avatar entities (wearables).</p></div>

## Functions {#functions}

<div class="api-entry">

### addBookmark {#addBookmark}

```js
AvatarBookmarks.addBookmark(bookmarkName)
```

<div class="api-text" v-pre><p>Adds a new (or updates an existing) avatar bookmark with your current avatar model, scale, and avatar entities.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bookmarkName</code></td><td>string</td><td><p>The name of the avatar bookmark (case sensitive).</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Add a new avatar bookmark and report the bookmark data.</p></div>

```js
var bookmarkName = "New Bookmark";
AvatarBookmarks.addBookmark(bookmarkName);
var bookmarkData = AvatarBookmarks.getBookmark(bookmarkName);
print("Bookmark data: " + JSON.stringify(bookmarkData));
```

</div>

<div class="api-entry">

### getBookmark {#getBookmark}

```js
AvatarBookmarks.getBookmark(bookmarkName)
```

<div class="api-text" v-pre><p>Gets the details of an avatar bookmark.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bookmarkName</code></td><td>string</td><td><p>The name of the avatar bookmark (case sensitive).</p></td></tr>
</tbody></table></div>
<div class="api-returns" v-pre><strong>Returns:</strong> <a href="#BookmarkData">AvatarBookmarks.BookmarkData</a> | Object <p>The bookmark data if the bookmark exists, <code>{}</code> if it doesn't.</p></div>

</div>

<div class="api-entry">

### getBookmarks {#getBookmarks}

```js
AvatarBookmarks.getBookmarks()
```

<div class="api-text" v-pre><p>Gets the details of all avatar bookmarks.</p></div>
<div class="api-returns" v-pre><strong>Returns:</strong> Object&lt;string, <a href="#BookmarkData">AvatarBookmarks.BookmarkData</a>&gt; <p>The current avatar bookmarks in an object where the keys are the bookmark names and the values are the bookmark details.</p></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>List the names and URLs of all the avatar bookmarks.</p></div>

```js
var bookmarks = AvatarBookmarks.getBookmarks();
print("Avatar bookmarks:");
for (var key in bookmarks) {
    print("- " + key + " " + bookmarks[key].avatarUrl);
};
```

</div>

<div class="api-entry">

### loadBookmark {#loadBookmark}

```js
AvatarBookmarks.loadBookmark(bookmarkName)
```

<div class="api-text" v-pre><p>Loads an avatar bookmark, setting your avatar model, scale, and avatar entities (or attachments if an old bookmark) to those in the bookmark.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bookmarkName</code></td><td>string</td><td><p>The name of the avatar bookmark to load (case sensitive).</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### removeBookmark {#removeBookmark}

```js
AvatarBookmarks.removeBookmark(bookmarkName)
```

<div class="api-text" v-pre><p>Deletes an avatar bookmark.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bookmarkName</code></td><td>string</td><td><p>The name of the avatar bookmark to delete (case sensitive).</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### saveBookmark {#saveBookmark}

```js
AvatarBookmarks.saveBookmark(bookmarkName)
```

<div class="api-text" v-pre><p>Updates an existing bookmark with your current avatar model, scale, and wearables. No action is taken if the bookmark doesn't exist.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bookmarkName</code></td><td>string</td><td><p>The name of the avatar bookmark (case sensitive).</p></td></tr>
</tbody></table></div>

</div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### bookmarkAdded {#bookmarkAdded}

```js
AvatarBookmarks.bookmarkAdded.connect(function (bookmarkName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when a new avatar bookmark is added or an existing avatar bookmark is updated, using <a href="#addBookmark">addBookmark</a>.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bookmarkName</code></td><td>string</td><td><p>The name of the avatar bookmark added or updated.</p></td></tr>
</tbody></table></div>

</div>

<div class="api-entry">

### bookmarkDeleted {#bookmarkDeleted}

```js
AvatarBookmarks.bookmarkDeleted.connect(function (bookmarkName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an avatar bookmark is deleted.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bookmarkName</code></td><td>string</td><td><p>The name of the avatar bookmark deleted.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when a bookmark is deleted.</p></div>

```js
AvatarBookmarks.bookmarkDeleted.connect(function (bookmarkName) {
    print("Bookmark deleted: " + bookmarkName);
});
```

</div>

<div class="api-entry">

### bookmarkLoaded {#bookmarkLoaded}

```js
AvatarBookmarks.bookmarkLoaded.connect(function (bookmarkName) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an avatar bookmark is loaded, setting your avatar model, scale, and avatar entities (or attachments if an old bookmark) to those in the bookmark.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>bookmarkName</code></td><td>string</td><td><p>The name of the avatar bookmark loaded.</p></td></tr>
</tbody></table></div>

</div>

## Types {#types}

<div class="api-entry">

### BookmarkData {#BookmarkData}

<div class="api-text" v-pre><p>Details of an avatar bookmark.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>version</code></td><td>number</td><td><p>The version of the bookmark data format.</p></td></tr>
<tr><td><code>avatarUrl</code></td><td>string</td><td><p>The URL of the avatar model.</p></td></tr>
<tr><td><code>avatarScale</code></td><td>number</td><td><p>The target scale of the avatar.</p></td></tr>
<tr><td><code>avatarEntites</code> <em>optional</em></td><td>Array&lt;Object&lt;&quot;properties&quot;, <a href="Entities-types#EntityProperties">Entities.EntityProperties</a>&gt;&gt;</td><td><p>The avatar entities included with the bookmark.</p></td></tr>
<tr><td><code>attachments</code> <em>optional</em></td><td>Array&lt;<a href="globals#AttachmentData">AttachmentData</a>&gt;</td><td><p>The attachments included with the bookmark. </p>
<p class="important">Deprecated: Use avatar entities instead.</p></td></tr>
</tbody></table></div>

</div>

## Deprecated {#deprecated}

Still there for older scripts; new scripts should not use these.

<div class="api-entry">

### deleteBookmark {#deleteBookmark}

```js
AvatarBookmarks.deleteBookmark()
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed.</p></div>
:::

<div class="api-text" v-pre><p>Performs no action.</p></div>

</div>

<div class="api-entry">

### updateAvatarEntities {#updateAvatarEntities}

```js
AvatarBookmarks.updateAvatarEntities(avatarEntities)
```

::: warning Deprecated
<div class="api-text" v-pre><p>This function is deprecated and will be removed. Use the <a href="MyAvatar"><code>MyAvatar</code></a> API instead.</p></div>
:::

<div class="api-text" v-pre><p>Updates the avatar entities and their properties. Current avatar entities not included in the list provided are deleted.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>avatarEntities</code></td><td>Array&lt;<a href="MyAvatar#AvatarEntityData">MyAvatar.AvatarEntityData</a>&gt;</td><td><p>The avatar entity IDs and properties.</p></td></tr>
</tbody></table></div>

</div>
