<template>
  <!-- ===== HERO ===== -->
  <section class="min-h-screen flex items-center px-5 py-16 md:py-0 md:px-6">
    <div class="grid md:grid-cols-2 gap-10 md:gap-12 items-center w-full">

      <!-- LEFT -->
      <div class="space-y-5 md:space-y-6 order-2 md:order-1">

        <!-- BADGE -->
        <p class="flex items-center gap-2 text-cyan-400 tracking-widest text-[10px] md:text-xs leading-relaxed">
          <Icon name="mdi:shield-lock-outline" class="shrink-0" />
          SOFTWARE ENGINEER • FINTECH • ERP SYSTEM • PAYMENT INTEGRATION
        </p>

        <!-- TITLE -->
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Building
          <span class="text-cyan-400"> financial systems </span>
          that scale like enterprise banking infrastructure
        </h1>

        <!-- DESC -->
        <p class="text-gray-400 text-sm md:text-base leading-relaxed">
          Backend-focused Software Engineer specialized in ERP systems,
          accounting platforms, and payment gateway integration (Midtrans, Espay).
          Experienced in building production-grade APIs using Laravel, FastAPI, and Node.js.
        </p>

        <!-- CTA -->
        <div class="flex flex-wrap gap-3 pt-1">
          <NuxtLink
            to="/projects"
            class="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-black rounded-lg font-semibold text-sm hover:bg-cyan-400 transition"
          >
            <Icon name="mdi:rocket-launch" />
            View Projects
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="flex items-center gap-2 px-5 py-2.5 border border-cyan-500 text-cyan-400 rounded-lg text-sm hover:bg-cyan-500/10 transition"
          >
            <Icon name="mdi:account" />
            About Me
          </NuxtLink>
        </div>

        <!-- MINI STATS -->
        <div class="grid grid-cols-3 gap-2 pt-4">
          <div class="p-3 border border-white/10 rounded-lg bg-white/5">
            <div class="flex items-center gap-1.5 text-cyan-400 text-[10px] md:text-xs">
              <Icon name="mdi:bank-outline" class="shrink-0" />
              <span>ERP</span>
            </div>
            <p class="text-xs md:text-sm font-semibold mt-1">System</p>
          </div>

          <div class="p-3 border border-white/10 rounded-lg bg-white/5">
            <div class="flex items-center gap-1.5 text-cyan-400 text-[10px] md:text-xs">
              <Icon name="mdi:qrcode-scan" class="shrink-0" />
              <span>Payments</span>
            </div>
            <p class="text-xs md:text-sm font-semibold mt-1">VA / QRIS</p>
          </div>

          <div class="p-3 border border-white/10 rounded-lg bg-white/5">
            <div class="flex items-center gap-1.5 text-cyan-400 text-[10px] md:text-xs">
              <Icon name="mdi:api" class="shrink-0" />
              <span>Backend</span>
            </div>
            <p class="text-xs md:text-sm font-semibold mt-1">API Dev</p>
          </div>
        </div>

      </div>

      <!-- RIGHT — profile card -->
      <div class="flex justify-center order-1 md:order-2 md:justify-end">
        <div class="relative w-full max-w-xs md:max-w-sm">

          <!-- glow -->
          <div class="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none"></div>

          <!-- card -->
          <div class="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 flex flex-col items-center">

            <!-- photo -->
            <div class="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-cyan-500 shrink-0">
              <img
                src="/profile.jpg"
                alt="Faisal Fajri"
                class="w-full h-full object-cover"
                style="object-position: center 20%;"
              />
            </div>

            <!-- name -->
            <h3 class="mt-4 text-xl md:text-2xl font-bold">Faisal Fajri</h3>
            <p class="text-sm md:text-base text-gray-400">Software Engineer</p>

            <!-- stack -->
            <div class="mt-5 space-y-2.5 text-sm text-gray-400 text-center">
              <p class="flex items-center justify-center gap-2">
                <Icon name="mdi:laravel" /> Laravel ERP Systems
              </p>
              <p class="flex items-center justify-center gap-2">
                <Icon name="mdi:api" /> FastAPI & Node.js
              </p>
              <p class="flex items-center justify-center gap-2">
                <Icon name="mdi:credit-card-outline" /> Payment Gateway
              </p>
            </div>

            <!-- social -->
            <div class="flex justify-center gap-5 mt-5 text-gray-400 text-lg md:text-xl">
              <a href="#" class="hover:text-cyan-400 transition"><Icon name="mdi:github" /></a>
              <a href="#" class="hover:text-cyan-400 transition"><Icon name="mdi:linkedin" /></a>
              <a href="#" class="hover:text-cyan-400 transition"><Icon name="mdi:instagram" /></a>
              <a href="#" class="hover:text-cyan-400 transition"><Icon name="mdi:twitter" /></a>
            </div>

            <!-- status -->
            <div class="mt-5 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs md:text-sm flex items-center gap-2">
              <Icon name="mdi:check-decagram-outline" />
              Available for opportunities
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ===== EXPERIENCE ===== -->
  <section class="px-5 md:px-6 py-16 md:py-20 border-t border-white/10">
    <div class="max-w-5xl mx-auto">

      <!-- TITLE -->
      <h2 class="text-xl md:text-2xl font-semibold mb-8 md:mb-10 italic text-white">
        Experience
      </h2>

      <div class="space-y-10 md:space-y-12">

        <!-- KOFFIESOFT -->
        <div>
          <div class="flex flex-col gap-1 md:flex-row md:justify-between md:items-start md:gap-4">
            <div>
              <h3 class="text-base md:text-lg font-semibold">Software Engineer</h3>
              <p class="text-gray-400 text-xs md:text-sm mt-0.5">
                PT. Dapur Perangkat Lunak Indonesia (Koffiesoft)
              </p>
            </div>
            <span class="text-gray-500 text-xs md:text-sm shrink-0 mt-0.5 md:mt-0">
              February 2025 – Present
            </span>
          </div>

          <p class="text-gray-400 text-sm leading-relaxed mt-3">
            Developed web-based ERP accounting systems for digital distribution and PPOB services
            using FastAPI (backend) and Nuxt 3 (frontend). Focused on financial modules such as
            ledger, journal, purchasing, cash & bank, and system integration to ensure accuracy
            and efficiency.
          </p>

          <!-- sub-projects -->
          <div class="mt-4 space-y-4 border-l border-white/10 pl-4">
            <div>
              <p class="text-sm font-medium text-white">
                ERP Accounting System – PT Mitra Distribusi Utama
              </p>
              <p class="text-gray-500 text-xs mt-0.5">
                Internal finance system for digital product distribution
              </p>
            </div>
            <div>
              <p class="text-sm font-medium text-white">
                Miharogames PPOB Platform
              </p>
              <p class="text-gray-500 text-xs mt-0.5">
                Payment integration (Midtrans, Espay), transaction system, refund automation
              </p>
            </div>
            <div>
              <p class="text-sm font-medium text-white">
                Sales Order ERP – PT Central Surya Baru
              </p>
              <p class="text-gray-500 text-xs mt-0.5">
                Web-based ordering system built with React & Next.js
              </p>
            </div>
          </div>
        </div>

        <!-- LINTAS SAMUDERA -->
        <div>
          <div class="flex flex-col gap-1 md:flex-row md:justify-between md:items-start md:gap-4">
            <div>
              <h3 class="text-base md:text-lg font-semibold">IT Web Developer</h3>
              <p class="text-gray-400 text-xs md:text-sm mt-0.5">PT. Lintas Samudera Jaya</p>
            </div>
            <span class="text-gray-500 text-xs md:text-sm shrink-0 mt-0.5 md:mt-0">
              2022 – 2025
            </span>
          </div>

          <p class="text-gray-400 text-sm leading-relaxed mt-3">
            Developed and maintained internal ERP systems including logistics, finance, HR, and
            reporting modules. Focused on automation, system integration, and improving operational
            efficiency.
          </p>
        </div>

        <!-- GRADESTUDIO -->
        <div>
          <div class="flex flex-col gap-1 md:flex-row md:justify-between md:items-start md:gap-4">
            <div>
              <h3 class="text-base md:text-lg font-semibold">
                UI/UX Designer & Junior Frontend Developer
              </h3>
              <p class="text-gray-400 text-xs md:text-sm mt-0.5">Gradestudio.id</p>
            </div>
            <span class="text-gray-500 text-xs md:text-sm shrink-0 mt-0.5 md:mt-0">
              September 2019 – March 2023
            </span>
          </div>

          <p class="text-gray-400 text-sm leading-relaxed mt-3">
            Designed user-centered interfaces using Figma and developed web/mobile prototypes.
            Created design documentation (UML, ERD, user flows) and ensured alignment between
            business requirements and implementation.
          </p>
        </div>

      </div>

      <!-- SEE MORE -->
      <div class="mt-10 md:mt-12">
        <NuxtLink
          to="/about"
          class="text-cyan-400 text-sm flex items-center gap-2 hover:gap-3 transition-all w-fit"
        >
          See More
          <Icon name="mdi:arrow-right" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>