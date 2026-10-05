<template>
  <section class="case-header">
    <div class="breadcrumbs">
      <NuxtLink to="/projects" class="crumb">
        <Icon name="mdi:arrow-left" /> Kembali ke Projects
      </NuxtLink>
      <span class="crumb-sep">/</span>
      <span class="crumb-muted">Case Study</span>
    </div>

    <div class="title-row">
      <div class="accent-bar" :style="{ background: accent }" />
      <div class="title-wrap">
        <h1 class="title">
          {{ projectTitle }}
        </h1>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
    </div>

    <div class="meta-row">
      <span class="badge" :style="{ borderColor: accent, color: badgeText }">
        Case Study
      </span>
      <span class="meta monospace">{{ year }}</span>
      <span class="meta monospace">{{ role }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  accent: string
  projectTitle: string
  subtitle: string
  year: string
  role: string
}>()

const badgeText = computed(() => props.accent)
</script>

<style scoped>
.case-header {
  padding: 26px 0 8px;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 12px;
}

.crumb {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}

.crumb:hover {
  color: rgba(255, 255, 255, 0.95);
}

.crumb-sep {
  opacity: 0.35;
}

.crumb-muted {
  color: rgba(255, 255, 255, 0.5);
}

.title-row {
  margin-top: 14px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.accent-bar {
  width: 4px;
  border-radius: 999px;
  height: 42px;
}

.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.title {
  font-size: 22px;
  font-weight: 800;
  color: #fff;
  line-height: 1.25;
}

.subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
}

.meta-row {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.badge {
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.04);
}

.meta {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.monospace {
  font-family: ui-monospace, monospace;
  letter-spacing: 0.06em;
}
</style>

