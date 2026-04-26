<script setup>
import {
  siLaravel,
  siNodedotjs,
  siNestjs,
  siPhp,
  siPython,
  siVuedotjs,
  siReact,
  siWordpress,
  siCodeigniter,
  siMysql,
  siPostgresql,
  siMongodb
} from 'simple-icons/icons'

const stack = [
  { icon: siLaravel, color: '#FF2D20' },
  { icon: siNodedotjs, color: '#339933' },
  { icon: siNestjs, color: '#E0234E' },
  { icon: siPhp, color: '#777BB4' },
  { icon: siPython, color: '#3776AB' },
  { icon: siVuedotjs, color: '#42B883' },
  { icon: siReact, color: '#61DAFB' },
  { icon: siWordpress, color: '#21759B' },
  { icon: siCodeigniter, color: '#EF4223' },
  { icon: siMysql, color: '#4479A1' },
  { icon: siPostgresql, color: '#4169E1' },
  { icon: siMongodb, color: '#47A248' }
]
</script>

<template>
  <section class="py-10 md:py-16 px-5 md:px-0 max-w-5xl mx-auto space-y-10">

    <!-- TITLE -->
    <div class="space-y-2">
      <h1 class="text-3xl md:text-4xl font-bold text-cyan-400">About Me</h1>
      <p class="text-gray-400 text-sm md:text-base leading-relaxed">
        Software Engineer with 6+ years experience in UI/UX Design and Digital Product Development,
        and 4+ years as Fullstack Web Developer specializing in ERP systems, accounting platforms,
        and payment gateway integration.
      </p>
    </div>

    <!-- PROFILE SUMMARY -->
    <div class="p-5 md:p-6 border border-white/10 rounded-xl bg-white/5 space-y-3">
      <p class="text-gray-300 text-sm md:text-base leading-relaxed">
        Experienced in analyzing user requirements and building scalable solutions using
        User-Centered Design (UCD). Strong background in backend architecture and API development
        using Laravel, FastAPI, and Node.js, with modern frontend frameworks like Nuxt 3 and Vue.
      </p>
      <p class="text-gray-400 text-sm md:text-base">
        Based in Surabaya, East Java • Open for opportunities • Fullstack & Backend focused
      </p>
    </div>

    <!-- CONTACT -->
    <div class="flex flex-wrap gap-3 md:gap-4 text-sm text-gray-300">
      <a class="hover:text-cyan-400 transition" href="https://www.linkedin.com/in/faisal-fajri-049920161/" target="_blank">LinkedIn</a>
      <span class="text-white/20">•</span>
      <a class="hover:text-cyan-400 transition" href="mailto:fajrifaisal.user.id@gmail.com">Email</a>
      <span class="text-white/20">•</span>
      <a class="hover:text-cyan-400 transition" href="https://bit.ly/portfolio-m-faisal-fajri" target="_blank">Portfolio</a>
      <span class="text-white/20">•</span>
      <span class="text-gray-500">+62 896-3987-3022</span>
    </div>

    <!-- EDUCATION -->
    <div class="space-y-2">
      <h2 class="text-lg md:text-xl font-semibold text-white">Education</h2>
      <div class="p-4 md:p-5 border border-white/10 rounded-lg bg-white/5">
        <p class="text-white font-medium text-sm md:text-base">Universitas Tanjungpura Pontianak</p>
        <p class="text-gray-400 text-sm">Bachelor Degree in Information Systems (GPA 3.36/4.00)</p>
        <p class="text-gray-500 text-xs md:text-sm mt-0.5">
          Selected as a participant in Technology Business Incubator Program (2020)
        </p>
      </div>
    </div>

    <!-- EXPERIENCE -->
    <div class="space-y-4 md:space-y-6">
      <h2 class="text-xl md:text-2xl font-semibold text-white">Experience</h2>

      <!-- KOFFIESOFT -->
      <div class="p-4 md:p-5 border border-white/10 rounded-lg bg-white/5 space-y-2">
        <div>
          <p class="text-cyan-400 font-semibold text-sm md:text-base">Software Engineer</p>
          <p class="text-white text-sm md:text-base">PT. Dapur Perangkat Lunak Indonesia (Koffiesoft.com)</p>
          <p class="text-gray-400 text-xs md:text-sm">Feb 2025 - Present</p>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed">
          Developed enterprise ERP Accounting System for financial operations including journal,
          ledger, purchasing, bank book, cash management, vendor cashback, and accounting modules.
          Built scalable backend architecture using FastAPI (Python) and Nuxt 3 with modular API design.
        </p>
        <div class="text-gray-500 text-xs space-y-1">
          <p><span class="text-cyan-400">Project:</span> ERP Accounting System – PT Mitra Distribusi Utama</p>
          <p><span class="text-cyan-400">Stack:</span> FastAPI, Nuxt 3</p>
        </div>
        <div class="text-gray-400 text-sm leading-relaxed">
          <p class="text-cyan-400 mt-2">Additional Projects:</p>
          <p>• PPOB System (Miharogames Store – PT Mitra Distribusi Utama)</p>
          <p class="ml-3 text-xs md:text-sm">Built payment system integrated with Midtrans & Espay, including transaction history, refund automation, and 2FA security.</p>
          <p class="mt-2">• ERP Sales Order System (PT Central Surya Baru)</p>
          <p class="ml-3 text-xs md:text-sm">Developed order management system using React & Next.js with real-time API integration and referral system.</p>
        </div>
      </div>

      <!-- PT LINTAS SAMUDERA -->
      <div class="p-4 md:p-5 border border-white/10 rounded-lg bg-white/5 space-y-2">
        <p class="text-cyan-400 font-semibold text-sm md:text-base">IT Staff / Web Developer</p>
        <p class="text-white text-sm md:text-base">PT Lintas Samudera Jaya</p>
        <p class="text-gray-400 text-xs md:text-sm">Jun 2022 - Jan 2025</p>
        <p class="text-gray-400 text-sm leading-relaxed">
          Developed and maintained internal ERP system covering logistics, finance, HR, and operational modules.
          Implemented automation for reporting systems and improved data processing efficiency across departments.
          Built using Laravel with full CRUD, reporting, and workflow optimization.
        </p>
      </div>

      <!-- FREELANCE -->
      <div class="p-4 md:p-5 border border-white/10 rounded-lg bg-white/5 space-y-2">
        <p class="text-cyan-400 font-semibold text-sm md:text-base">Freelance Software Developer</p>
        <p class="text-white text-sm md:text-base">Self-Employed / Remote Clients</p>
        <p class="text-gray-400 text-xs md:text-sm">2020 - Present</p>
        <p class="text-gray-400 text-sm leading-relaxed">
          Delivered multiple web applications for SMEs and startups, including ERP systems,
          landing pages, company profiles, and custom backend APIs.
          Responsible for fullstack development, UI/UX design, and system deployment.
        </p>
      </div>

      <!-- GRADESTUDIO -->
      <div class="p-4 md:p-5 border border-white/10 rounded-lg bg-white/5 space-y-2">
        <p class="text-cyan-400 font-semibold text-sm md:text-base">UI/UX Designer & Frontend Developer</p>
        <p class="text-white text-sm md:text-base">Gradestudio.id</p>
        <p class="text-gray-400 text-xs md:text-sm">Sep 2019 - Mar 2023</p>
        <p class="text-gray-400 text-sm leading-relaxed">
          Designed user-centered interfaces using Figma and developed prototypes using Flutter and CodeIgniter.
          Conducted user research, usability testing, and created design documentation (BRD, UML, ERD, User Flow).
        </p>
      </div>

      <!-- LINTAS TRANSINDO -->
      <div class="p-4 md:p-5 border border-white/10 rounded-lg bg-white/5 space-y-2">
        <p class="text-cyan-400 font-semibold text-sm md:text-base">Graphic Designer & UI/UX Designer</p>
        <p class="text-white text-sm md:text-base">PT Lintas Transindo Jaya</p>
        <p class="text-gray-400 text-xs md:text-sm">Apr 2022 - Mar 2023</p>
        <p class="text-gray-400 text-sm leading-relaxed">
          Designed branding assets, marketing materials, and UI designs to improve product awareness.
          Used Figma, Photoshop, and After Effects for digital and web-based visual content.
        </p>
      </div>

      <!-- UI/UX CERT -->
      <div class="p-4 md:p-5 border border-white/10 rounded-lg bg-white/5 space-y-2">
        <p class="text-cyan-400 font-semibold text-sm md:text-base">UI/UX Design Certification</p>
        <p class="text-white text-sm md:text-base">Skill Academy - Ruangguru</p>
        <p class="text-gray-400 text-xs md:text-sm">Apr 2020</p>
        <p class="text-gray-400 text-sm leading-relaxed">
          Focused on User-Centered Design (UCD), wireframing, prototyping, and user research.
          Built interactive prototypes and improved UX through iterative feedback cycles.
        </p>
      </div>

    </div>

    <!-- TECH STACK -->
    <div class="space-y-4">
      <div>
        <h2 class="text-lg md:text-xl font-semibold text-white">Tech Stack</h2>
        <p class="text-gray-400 text-sm">
          Some of the software and technologies I use on a daily basis
        </p>
      </div>
      <div class="tech-stack flex flex-wrap gap-4">
        <div v-for="(item, i) in stack" :key="i" :style="{ color: item.color }" v-html="item.icon.svg" />
      </div>
    </div>

    <!-- CTA -->
    <div class="pt-6 flex flex-wrap gap-3">
      <a href="mailto:fajrifaisal.user.id@gmail.com"
        class="flex-1 sm:flex-none text-center px-5 py-3 bg-cyan-500 text-black rounded-lg font-semibold text-sm hover:bg-cyan-400 transition">
        Let's Work Together
      </a>
      <a href="https://www.linkedin.com/in/faisal-fajri-049920161/" target="_blank"
        class="flex-1 sm:flex-none text-center px-5 py-3 border border-cyan-500 text-cyan-400 rounded-lg text-sm hover:bg-cyan-500/10 transition">
        View LinkedIn
      </a>
    </div>

  </section>
</template>

<style scoped>
.tech-stack :deep(svg) {
  width: 28px;
  height: 28px;
  fill: currentColor;
}

@media (min-width: 768px) {
  .tech-stack :deep(svg) {
    width: 32px;
    height: 32px;
  }
}
</style>