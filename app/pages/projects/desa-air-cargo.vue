<template>
  <div class="page">
    <CaseStudyHeader
      :accent="accent"
      project-title="Sistem Informasi Manajemen Operasional"
      subtitle="Sistem manajemen operasional pengolahan limbah B3 berbasis web untuk meningkatkan transparansi dan efisiensi administrasi."
      :year="year"
      :role="role"
    />

    <section class="section">
      <h2 class="h2">Overview</h2>
      <div class="body">
        <p>
          Modul ini dibangun untuk mengelola alur operasional pengolahan limbah B3.
          Fokus utamanya adalah merapikan proses administrasi, standarisasi status, dan
          memastikan data mudah diaudit.
        </p>
        <p>
          Pengguna dapat memantau proses dari sisi operasional secara terstruktur,
          sekaligus mengurangi ketergantungan proses manual.
        </p>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">My Role</h2>
      <div class="body">
        <p>
          Backend development dan perancangan struktur data.
          Mengintegrasikan modul-modul utama menggunakan pola kerja yang konsisten.
        </p>
        <p>
          Membuat UI berbasis template dan optimasi layout agar mudah digunakan tim operasional.
        </p>
      </div>
    </section>

    <section class="section">
      <h2 class="h2">Tech Stack</h2>
      <div class="tags-tech">
        <TechBadge accent="accent">CodeIgniter 3</TechBadge>
        <TechBadge accent="accent">Bootstrap</TechBadge>
        <TechBadge accent="accent">MySQL</TechBadge>
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

const accent = '#10b981'
const year = '2019'
const role = 'Backend • UI • Database'
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

