<template>
  <div class="page">
    <CaseStudyHeader
      :accent="accent"
      project-title="ERP Accounting System"
      subtitle="Sistem akuntansi internal berbasis web: general ledger, jurnal, purchasing, cash & bank, multi-company, dan pelaporan terintegrasi."
      :year="year"
      :role="role"
    />

    <section class="section">
      <h2 class="h2">Overview</h2>
      <div class="body">
        <p>
          Platform akuntansi internal untuk kebutuhan distribusi digital dan kebutuhan finansial.
          Modul-modul inti saling terhubung agar jurnal dan pelaporan selalu sesuai dengan data transaksi.
        </p>
        <p>
          Fokus implementasi ada pada konsistensi, validasi data, dan kemudahan audit.
        </p>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">My Role</h2>
      <div class="body">
        <p>
          Backend development, perancangan struktur data, dan pengembangan API untuk modul akuntansi.
        </p>
        <p>
          Membuat pengalaman pengguna frontend berbasis layout yang konsisten.
        </p>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">Tech Stack</h2>
      <div class="tags-tech">
        <TechBadge accent="accent">FastAPI</TechBadge>
        <TechBadge accent="accent">Nuxt 3</TechBadge>
        <TechBadge accent="accent">PostgreSQL</TechBadge>
      </div>
    </section>

    <section class="footer">
      <NuxtLink to="/projects" class="nav-btn">← Kembali ke Projects</NuxtLink>
      <NuxtLink to="/projects/lintas-samudera" class="nav-btn">Project lainnya →</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import CaseStudyHeader from '~/components/CaseStudyHeader.vue'
import TechBadge from '~/components/TechBadge.vue'

const accent = '#a855f7'
const year = '2025 – 2026'
const role = 'Backend • Frontend • Database'
</script>

<style scoped>
.page {
  padding-bottom: 40px;
}

.section {
  margin-top: 22px;
}

.h2 {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}

.body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 1.7;
}

.tags-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.footer {
  margin-top: 22px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-btn {
  flex: 1 1 250px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 12px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.82);
  font-size: 12px;
}
</style>

