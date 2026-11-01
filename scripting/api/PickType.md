---
title: "PickType"
description: "The PickType API provides constant numeric values that represent different types of picks."
---

# PickType

<div class="api-kind" v-pre><strong>Namespace.</strong> Can be used in: client scripts, entity scripts, avatar scripts.</div>

<div class="api-text" v-pre><p>The <code>PickType</code> API provides constant numeric values that represent different types of picks.</p></div>

## The PickType type {#type}

<div class="api-text" v-pre><p>A type of pick.</p>
 <table> <thead> <tr><th>Value</th><th>Description</th></tr>
 </thead>
 <tbody> <tr><td><code><a href="">PickType.Ray</a></code></td><td>Ray picks intersect a ray with objects in front of them, along their direction.</td></tr>
 <tr><td><code><a href="">PickType.Parabola</a></code></td><td>Parabola picks intersect a parabola with objects in front of them, along their arc.</td></tr>
 <tr><td><code><a href="">PickType.Stylus</a></code></td><td>Stylus picks provide "tapping" functionality on or into flat surfaces.</td></tr>
 <tr><td><code><a href="">PickType.Collision</a></code></td><td>Collision picks intersect a collision volume with avatars and entities that have collisions.</td></tr>
 </tbody>
 </table></div>

## Properties {#properties}

<div class="api-table" v-pre><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>Ray</code></td><td>number</td><td><p>Ray picks intersect a ray with objects in front of them, along their direction.</p></td></tr>
<tr><td><code>Parabola</code></td><td>number</td><td><p>Parabola picks intersect a parabola with objects in front of them, along their arc.</p></td></tr>
<tr><td><code>Stylus</code></td><td>number</td><td><p>Stylus picks provide "tapping" functionality on or into flat surfaces.</p></td></tr>
<tr><td><code>Collision</code></td><td>number</td><td><p>Collision picks intersect a collision volume with avatars and entities that have collisions.</p></td></tr>
</tbody></table></div>
