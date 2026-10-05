<template>
  <div class="impact-card">
    <div class="impact-accent" :style="{ background: accent }" />
    <div class="impact-value">{{ value }}</div>
    <div class="impact-label">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string
  label: string
  accent: string
}>()
</script>

<style scoped>
.impact-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.impact-accent {
  height: 2px;
  width: 22px;
  border-radius: 999px;
}

.impact-value {
  font-family: ui-monospace, monospace;
  letter-spacing: 0.06em;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
}

.impact-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.4;
}
</style>

