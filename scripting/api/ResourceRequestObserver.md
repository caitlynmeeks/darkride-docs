---
title: "ResourceRequestObserver"
description: "The ResourceRequestObserver API provides notifications when an observable resource request is made."
---

# ResourceRequestObserver

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>ResourceRequestObserver</code> API provides notifications when an observable resource request is made.</p></div>

## Signals {#signals}

Connect a function to a signal to run it each time the signal fires; disconnect it the same way with `disconnect`.

<div class="api-entry">

### resourceRequestEvent {#resourceRequestEvent}

```js
ResourceRequestObserver.resourceRequestEvent.connect(function (request) {
    ...
});
```

<div class="api-text" v-pre><p>Triggered when an observable resource request is made.</p></div>
<div class="api-table" v-pre><strong>Parameters</strong><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>request</code></td><td><a href="#ResourceRequest">ResourceRequestObserver.ResourceRequest</a></td><td><p>Information about the resource request.</p></td></tr>
</tbody></table></div>

<div class="api-example" v-pre><strong>Example:</strong> <p>Report when a particular Clipboard.importEntities() resource request is made.</p></div>

```js
ResourceRequestObserver.resourceRequestEvent.connect(function (request) {
    if (request.callerId === 100) {
        print("Resource request: " + JSON.stringify(request));
    }
});

function importEntities() {
    var filename = Window.browse("Import entities to clipboard", "", "*.json");
    if (filename) {
        Clipboard.importEntities(filename, true, 100);
        pastedEntities = Clipboard.pasteEntities(Vec3.sum(MyAvatar.position,
            Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })));
        print("Entities pasted: " + JSON.stringify(pastedEntities));
    }
}

Script.setTimeout(importEntities, 2000);
```

</div>

## Types {#types}

<div class="api-entry">

### ResourceRequest {#ResourceRequest}

<div class="api-text" v-pre><p>Information about a resource request.</p></div>
<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>url</code></td><td>string</td><td><p>The URL of the resource request.</p></td></tr>
<tr><td><code>callerId</code></td><td>number</td><td><p>An ID identifying the request.</p></td></tr>
<tr><td><code>extra</code></td><td>string</td><td><p>Extra information about the request.</p></td></tr>
</tbody></table></div>

</div>
