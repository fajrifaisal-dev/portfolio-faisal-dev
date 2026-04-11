<template>
  <section class="min-h-screen flex items-center px-6">

    <div class="grid md:grid-cols-2 gap-12 items-center w-full">

      <!-- LEFT CONTENT -->
      <div class="space-y-6">

        <!-- BADGE -->
        <p class="flex items-center gap-2 text-cyan-400 tracking-widest text-xs">
          <Icon name="mdi:shield-lock-outline" />
          SOFTWARE ENGINEER • FINTECH • ERP SYSTEM • PAYMENT INTEGRATION
        </p>

        <!-- TITLE -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
          Building
          <span class="text-cyan-400"> financial systems </span>
          that scale like enterprise banking infrastructure
        </h1>

        <!-- DESC -->
        <p class="text-gray-400 max-w-xl leading-relaxed">
          Backend-focused Software Engineer specialized in ERP systems,
          accounting platforms, and payment gateway integration (Midtrans, Espay).
          Experienced in building production-grade APIs using Laravel, FastAPI, and Node.js.
        </p>

        <!-- CTA -->
        <div class="flex gap-4 pt-2">

          <NuxtLink to="/projects"
            class="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition">

            <Icon name="mdi:rocket-launch" />
            View Projects
          </NuxtLink>

          <NuxtLink to="/about"
            class="flex items-center gap-2 px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition">

            <Icon name="mdi:account" />
            About Me
          </NuxtLink>

        </div>

        <!-- MINI STATS -->
        <div class="grid grid-cols-3 gap-3 pt-6">

          <div class="p-3 border border-white/10 rounded-lg bg-white/5">
            <div class="flex items-center gap-2 text-cyan-400 text-xs">
              <Icon name="mdi:bank-outline" />
              ERP
            </div>
            <p class="text-sm font-semibold mt-1">System</p>
          </div>

          <div class="p-3 border border-white/10 rounded-lg bg-white/5">
            <div class="flex items-center gap-2 text-cyan-400 text-xs">
              <Icon name="mdi:qrcode-scan" />
              Payments
            </div>
            <p class="text-sm font-semibold mt-1">VA / QRIS</p>
          </div>

          <div class="p-3 border border-white/10 rounded-lg bg-white/5">
            <div class="flex items-center gap-2 text-cyan-400 text-xs">
              <Icon name="mdi:api" />
              Backend
            </div>
            <p class="text-sm font-semibold mt-1">API Dev</p>
          </div>

        </div>


      </div>

      <!-- RIGHT CONTENT -->
      <div class="flex justify-center md:justify-end">

        <div class="relative">

          <!-- glow -->
          <div class="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <!-- card -->
          <div
            class="relative w-96 h-[420px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 flex flex-col items-center justify-center">

            <!-- IMAGE -->
            <div class="w-40 h-40 rounded-full overflow-hidden border-2 border-cyan-500 flex-shrink-0">
              <img src="/profile.jpg" alt="profile" class="w-full h-full object-cover"
                style="object-position: center 20%;" />
            </div>

            <!-- NAME -->
            <h3 class="mt-5 text-2xl font-bold">Faisal Fajri</h3>

            <!-- ROLE -->
            <p class="text-base text-gray-400">Software Engineer</p>

            <!-- STACK -->
            <div class="mt-6 space-y-3 text-base text-gray-400 text-center">
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
            <div class="flex justify-center gap-5 mt-6 text-gray-400 text-xl">
              <a href="#" class="hover:text-cyan-400 transition">
                <Icon name="mdi:github" />
              </a>
              <a href="#" class="hover:text-cyan-400 transition">
                <Icon name="mdi:linkedin" />
              </a>
              <a href="#" class="hover:text-cyan-400 transition">
                <Icon name="mdi:instagram" />
              </a>
              <a href="#" class="hover:text-cyan-400 transition">
                <Icon name="mdi:twitter" />
              </a>
            </div>

            <!-- STATUS -->
            <div class="mt-6 px-5 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm flex items-center gap-2">
              <Icon name="mdi:check-decagram-outline" />
              Available for opportunities
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
  <section class="px-6 py-20 border-t border-white/10">

    <div class="max-w-5xl mx-auto">

      <!-- TITLE -->
      <h2 class="text-2xl font-semibold mb-10 italic text-white">
        Experience
      </h2>

      <div class="space-y-12">

        <!-- MAIN ROLE -->
        <div>

          <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 class="text-lg font-semibold">Software Engineer</h3>
              <p class="text-gray-400 text-sm">
                PT. Dapur Perangkat Lunak Indonesia (Koffiesoft)
              </p>
            </div>

            <span class="text-gray-500 text-sm whitespace-nowrap">
              February 2025 - Present
            </span>
          </div>

          <p class="text-gray-400 text-sm leading-relaxed mt-3">
            Developed web-based ERP accounting systems for digital distribution and PPOB services using
            FastAPI (backend) and Nuxt 3 (frontend). Focused on financial modules such as ledger,
            journal, purchasing, cash & bank, and system integration to ensure accuracy and efficiency.
          </p>

          <!-- PROJECTS -->
          <div class="mt-4 space-y-4 border-l border-white/10 pl-4">

            <div>
              <p class="text-sm font-medium text-white">
                ERP Accounting System – PT Mitra Distribusi Utama
              </p>
              <p class="text-gray-500 text-xs">
                Internal finance system for digital product distribution
              </p>
            </div>

            <div>
              <p class="text-sm font-medium text-white">
                Miharogames PPOB Platform
              </p>
              <p class="text-gray-500 text-xs">
                Payment integration (Midtrans, Espay), transaction system, refund automation
              </p>
            </div>

            <div>
              <p class="text-sm font-medium text-white">
                Sales Order ERP – PT Central Surya Baru
              </p>
              <p class="text-gray-500 text-xs">
                Web-based ordering system built with React & Next.js
              </p>
            </div>

          </div>

        </div>

        <!-- LINTAS SAMUDERA -->
        <div>

          <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 class="text-lg font-semibold">IT Web Developer</h3>
              <p class="text-gray-400 text-sm">
                PT. Lintas Samudera Jaya
              </p>
            </div>

            <span class="text-gray-500 text-sm whitespace-nowrap">
              2022 - 2025
            </span>
          </div>

          <p class="text-gray-400 text-sm leading-relaxed mt-3">
            Developed and maintained internal ERP systems including logistics, finance, HR, and reporting modules.
            Focused on automation, system integration, and improving operational efficiency.
          </p>

        </div>

        <!-- GRADESTUDIO -->
        <div>

          <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 class="text-lg font-semibold">
                UI/UX Designer & Junior Frontend Developer
              </h3>
              <p class="text-gray-400 text-sm">
                Gradestudio.id
              </p>
            </div>

            <span class="text-gray-500 text-sm whitespace-nowrap">
              September 2019 - March 2023
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
      <div class="mt-12">
        <NuxtLink to="/about" class="text-cyan-400 text-sm flex items-center gap-2 hover:gap-3 transition-all">
          See More
          <Icon name="mdi:arrow-right" />
        </NuxtLink>
      </div>

    </div>

  </section>
</template>