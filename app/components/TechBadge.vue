<template>
  <span class="tag-tech" :style="styleVars">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  accent?: string
}>()

const styleVars = computed(() => {
  const accent = props.accent
  if (!accent) return {}
  return {
    borderColor: 'rgba(255,255,255,.12)',
    background: `color-mix(in oklab, ${accent} 18%, rgba(255,255,255,.04))`,
    color: 'rgba(255,255,255,.55)',
  } as Record<string, string>
})
</script>

<style scoped>
.tag-tech {
  font-size: 10px;
  font-family: ui-monospace, monospace;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.04);
}
</style>

