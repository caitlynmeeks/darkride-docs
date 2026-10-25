<script setup lang="ts">
// shown above a page whose front matter says `draft: true`
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.draft" class="draft-banner" role="note">
    <strong>Draft.</strong> This guide is still being written, so some details may change.
  </div>
</template>

<style scoped>
.draft-banner {
  margin: 0 0 24px;
  padding: 10px 16px;
  border: 1px solid var(--vp-c-warning-2);
  border-radius: 8px;
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-text-1);
  font-size: 14px;
  line-height: 22px;
}
</style>
