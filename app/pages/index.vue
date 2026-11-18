<script setup>
import { onMounted, ref, computed } from 'vue'

const isMobileMenuOpen = ref(false)
const activeFilter = ref('ALL')

const projectsList = [
  {
    slug: 'lsj-express',
    title: 'LSJ Express ERP & Booking',
    tag: '01 // Laravel . Vue',
    category: 'SYSTEMS',
    image: '/gambar/Gemini_Generated_Image_s8jg06s8jg06s8jg.jpg',
    description: 'Sistem ERP komprehensif, booking system operasional, dan company profile untuk PT Lintas Samudera Jaya Express.'
  },
  {
    slug: 'hello-friday',
    title: 'Hello Friday Studio',
    tag: '02 // Next.js . TS',
    category: 'SYSTEMS',
    image: '/gambar/hello-friday-booking-surabaya.jpg',
    description: 'Premium slow-living platform replacing manual chat workflows with an interactive, centralized multi-branch Booking Self-Service.'
  },
  {
    slug: 'kazi-nail',
    title: 'Kazi Nail Beauty Bar',
    tag: '03 // Next.js . Tailwind',
    category: 'SYSTEMS',
    image: '/gambar/kazi-nail-outlet-locator.jpg',
    description: 'Dynamic portal for 15+ outlets across Java. Features Instant Outlet Locator, real-time catalog pricing, and custom WhatsApp routing systems.'
  },
  {
    slug: 'erp-accounting',
    title: 'ERP Soft Accounting',
    tag: '04 // FastAPI . Nuxt 3',
    category: 'SYSTEMS',
    image: '/gambar/pos_system_mockup.png',
    description: 'Sistem akuntansi ERP komprehensif, mengelola General Ledger, Journaling, dan inventaris dengan efisiensi tingkat enterprise.'
  },
  {
    slug: 'dalwa-payment',
    title: 'Dalwa Payment Engine',
    tag: '05 // Laravel 11 . Vue 3',
    category: 'SYSTEMS',
    image: '/gambar/santech-2.jpeg',
    description: 'End-to-end VA/QRIS transaction initiation system with callbacks, signature validation, error handling, and retry mechanisms for hundreds of daily transactions.'
  },
  {
    slug: 'santech',
    title: 'Santech Interface',
    tag: '06 // UI/UX . Frontend',
    category: 'SYSTEMS',
    image: '/gambar/santech.jpeg',
    description: 'Architected the user interface for internal business operations, focusing strictly on data density, navigational efficiency, and zero-latency interactions.'
  },
  {
    slug: 'lintang-kejora',
    title: 'Lintang Kejora Gift',
    tag: '07 // Web Platform . Caching',
    category: 'WEBSITES',
    image: '/gambar/lintang-kejora.jpg',
    description: 'Website katalog souvenir pernikahan & tas etnik dengan gambar WebP terkompresi, cache responsif, dan optimasi SEO lokal Solo (Award Winner).'
  },
  {
    slug: 'gosip-pontianak',
    title: 'Gosip Pontianak',
    tag: '08 // News Portal . SEO',
    category: 'WEBSITES',
    image: '/gambar/gosip-pontianak.jpg',
    description: 'Portal berita & hiburan regional dengan struktur taksonomi kategori, integrasi Google Search Console untuk monitoring indexing, dan Open Graph metadata.'
  },
  {
    slug: 'pontianak-keras',
    title: 'Pontianak Keras',
    tag: '09 // Media Profile . Web',
    category: 'WEBSITES',
    image: '/gambar/pontianak-keras.jpg',
    description: 'Platform profil media digital dengan setup domain/DNS, layout modern teroptimasi, dan antarmuka responsif.'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'ALL') return projectsList
  return projectsList.filter(p => p.category === activeFilter.value)
})

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-12')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="bg-[#0A0A0A] min-h-screen text-[#E5E5E5] font-sans selection:bg-[#E5E5E5] selection:text-[#0A0A0A]">
    <!-- ============================================== -->
    <!-- NAVBAR: Non-Slop, Grid-Based, Technical        -->
    <!-- ============================================== -->
    <header class="fixed top-0 w-full z-50">
      <div class="grid grid-cols-2 md:grid-cols-3 border-b border-[#E5E5E5]/10 backdrop-blur-xl bg-[#0A0A0A]/70">
        <!-- Brand -->
        <div class="p-4 md:p-6 border-r border-[#E5E5E5]/10 flex items-center">
          <span class="font-mono text-xs uppercase tracking-[0.2em] font-bold">FAISAL_FAJRI</span>
        </div>
        
        <!-- Links (Centered, Technical) -->
        <div class="hidden md:flex p-4 md:p-6 border-r border-[#E5E5E5]/10 items-center justify-center gap-10 font-mono text-[10px] uppercase tracking-[0.3em]">
          <a href="#home" class="relative group overflow-hidden">
            <span class="opacity-50 group-hover:opacity-100 transition-opacity">01. Index</span>
            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-[#E5E5E5] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
          <a href="#experience" class="relative group overflow-hidden">
            <span class="opacity-50 group-hover:opacity-100 transition-opacity">02. Archive</span>
            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-[#E5E5E5] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
          <a href="#projects" class="relative group overflow-hidden">
            <span class="opacity-50 group-hover:opacity-100 transition-opacity">03. Systems</span>
            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-[#E5E5E5] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
        </div>

        <!-- Mobile Menu Toggle & Status -->
        <div class="p-4 md:p-6 flex items-center justify-end gap-6">
          <div class="flex items-center gap-3">
            <div class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span class="font-mono text-[9px] uppercase tracking-widest opacity-60 hidden sm:block">System Online</span>
          </div>
          
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden font-mono text-[10px] uppercase tracking-widest font-bold border border-[#E5E5E5]/30 px-3 py-1 hover:bg-[#E5E5E5] hover:text-[#0A0A0A] transition-colors">
            {{ isMobileMenuOpen ? 'CLOSE' : 'MENU' }}
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div v-show="isMobileMenuOpen" class="md:hidden fixed inset-0 top-[53px] sm:top-[61px] bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#E5E5E5]/10 flex flex-col p-8 z-40 transition-opacity">
        <div class="flex flex-col gap-8 font-mono text-lg uppercase tracking-[0.2em] mt-8">
          <a href="#home" @click="isMobileMenuOpen = false" class="border-b border-[#E5E5E5]/10 pb-4 hover:text-emerald-400 transition-colors">01. Index</a>
          <a href="#experience" @click="isMobileMenuOpen = false" class="border-b border-[#E5E5E5]/10 pb-4 hover:text-emerald-400 transition-colors">02. Archive</a>
          <a href="#projects" @click="isMobileMenuOpen = false" class="border-b border-[#E5E5E5]/10 pb-4 hover:text-emerald-400 transition-colors">03. Systems</a>
        </div>
        <div class="mt-auto pt-8 font-mono text-[10px] opacity-50 uppercase tracking-widest">
          SYS.STATUS // ONLINE
        </div>
      </div>
    </header>

    <!-- ============================================== -->
    <!-- HERO: Asymmetrical, Huge Typography, Raw Data  -->
    <!-- ============================================== -->
    <section id="home" class="relative min-h-screen pt-32 px-4 md:px-8 flex flex-col justify-end pb-16">
      <!-- Subtle Background Grid -->
      <div class="absolute inset-0 pointer-events-none opacity-[0.02]" style="background-image: linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px); background-size: 50px 50px;"></div>
      
      <div class="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end relative z-10">
        
        <!-- Left: Technical Metadata -->
        <div class="order-2 lg:order-1 lg:col-span-3 pb-2 mb-8 lg:mb-0 border-t border-[#E5E5E5]/20 pt-8 lg:border-t-0 lg:pt-0 mt-8 lg:mt-0">
          <img src="/profile.jpg" alt="Profile" class="w-20 h-20 md:w-32 md:h-32 object-cover border border-[#E5E5E5]/20 mb-6 md:mb-8 grayscale hover:grayscale-0 transition-all shadow-[4px_4px_0px_0px_rgba(229,229,229,0.2)]" />
          <div class="font-mono text-[10px] uppercase tracking-widest opacity-50 flex flex-col gap-4">
            <div class="flex flex-col">
              <span class="mb-1 opacity-50">Location</span>
              <span class="text-[#E5E5E5] opacity-100">Surabaya, Indonesia</span>
            </div>
            <div class="flex flex-col">
              <span class="mb-1 opacity-50">Coordinates</span>
              <span class="text-[#E5E5E5] opacity-100">-7.2504° S, 112.7688° E</span>
            </div>
            <div class="flex flex-col border-t border-[#E5E5E5]/10 pt-4 mt-2">
              <span class="mb-1 opacity-50">Specialization</span>
              <span class="text-[#E5E5E5] opacity-100">Fullstack & ERP Architecture</span>
            </div>
            <div class="mt-8 border border-[#E5E5E5]/20 p-3 inline-block w-fit">
              [ READY FOR DEPLOYMENT ]
            </div>
          </div>
        </div>

        <!-- Right/Center: Bleeding Typography -->
        <div class="order-1 lg:order-2 lg:col-span-9">
          <h1 class="text-[14vw] lg:text-[9vw] leading-[0.8] font-bold tracking-tighter uppercase mb-8">
            Software
            <br />
            <span class="italic font-light text-transparent" style="-webkit-text-stroke: 1.5px #E5E5E5;">Engineer.</span>
          </h1>
          
          <div class="grid md:grid-cols-2 gap-8 items-start border-t border-[#E5E5E5]/20 pt-8 mt-12">
            <p class="font-mono text-xs md:text-sm opacity-70 leading-relaxed text-justify">
              Fullstack Software Engineer architecting scalable financial platforms, robust ERP infrastructures, and high-performance web systems. Merging clean architecture across Laravel, FastAPI, and Nuxt/Next.js with practical delivery of client CMS and standard SEO.
            </p>
            <div class="flex gap-4 md:justify-end">
              <a href="#projects" class="group flex items-center gap-3 border border-[#E5E5E5]/30 px-6 py-4 hover:bg-[#E5E5E5] hover:text-[#0A0A0A] transition-colors">
                <span class="font-mono text-[10px] uppercase tracking-widest font-bold">View Projects</span>
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- EXPERIENCE: Career Ledger                      -->
    <!-- ============================================== -->
    <section id="experience" class="min-h-screen px-4 md:px-8 py-24 border-t border-[#E5E5E5]/20">
      <div class="max-w-[1600px] mx-auto w-full">
        
        <div class="flex items-end justify-between mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
          <h2 class="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Career
            <br />
            <span class="text-transparent" style="-webkit-text-stroke: 1px #E5E5E5;">Archive.</span>
          </h2>
          <div class="hidden md:flex flex-col text-right font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
            <span>Verified Record: 4+ Years</span>
            <span>Total Deployments: 7+ Orgs</span>
          </div>
        </div>

        <!-- Career Ledger Grid -->
        <div class="border-t border-[#E5E5E5]/20">
          
          <!-- ITEM 01 -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-b border-[#E5E5E5]/20 py-10 lg:py-16 group hover:bg-[#E5E5E5]/5 transition-colors">
            <div class="lg:col-span-3 flex flex-col justify-between">
              <div>
                <div class="font-mono text-[10px] border border-emerald-500 text-emerald-400 px-2 py-1 inline-block mb-4 tracking-widest">
                  [ CURRENT // 2025 - PRESENT ]
                </div>
                <h3 class="text-2xl font-bold uppercase">Software<br/>Engineer</h3>
              </div>
              <p class="font-mono text-[10px] uppercase tracking-widest opacity-50 mt-6 lg:mt-0">@ Koffiesoft</p>
            </div>
            
            <div class="lg:col-span-6 font-mono text-xs md:text-sm leading-relaxed opacity-70 text-justify">
              Membangun ERP akuntansi (FastAPI, Nuxt 3) untuk PT Mitra Distribusi Utama (General Ledger, jurnal otomatis, mutasi bank, rekonsiliasi, PPh unifikasi, stok FIFO), platform PPOB Miharogames Store (Midtrans & Espay, refund otomatis, 2FA, dashboard admin), dan ERP Web Order (React, Next.js) untuk PT Central Surya Baru. Mengelola deployment server Linux, DNS/domain, dan backup berkala dengan cron.
            </div>
            
            <div class="lg:col-span-3">
               <div class="overflow-hidden border border-[#E5E5E5]/20 h-40 md:h-48 relative">
                 <img src="/gambar/koffie.jpg" alt="Koffiesoft" class="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700" />
               </div>
            </div>
          </div>

          <!-- ITEM 02 -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-b border-[#E5E5E5]/20 py-10 lg:py-16 group hover:bg-[#E5E5E5]/5 transition-colors">
            <div class="lg:col-span-3 flex flex-col justify-between">
              <div>
                <div class="font-mono text-[10px] border border-[#E5E5E5]/30 px-2 py-1 inline-block mb-4 tracking-widest opacity-60">
                  [ ARCHIVED // 2022 - 2025 ]
                </div>
                <h3 class="text-2xl font-bold uppercase">Staff IT<br/><span class="text-transparent" style="-webkit-text-stroke: 1px #E5E5E5;">Web Dev</span></h3>
              </div>
              <p class="font-mono text-[10px] uppercase tracking-widest opacity-50 mt-6 lg:mt-0">@ PT Lintas Samudera Jaya</p>
            </div>
            
            <div class="lg:col-span-6 font-mono text-xs md:text-sm leading-relaxed opacity-70 text-justify">
              Membangun ERP logistik internal (Laravel) dari nol untuk 10+ modul operasional (STT, Keuangan, Piutang, Absensi, SLA) dipakai 20–60 user di 3 cabang, serta mengotomatisasi pelaporan harian menjadi hitungan menit. Memelihara website perusahaan dan memodernisasi arsitekturnya (migrasi dari WPBakery ke Elementor).
            </div>
            
            <div class="lg:col-span-3 flex flex-col gap-2">
               <div class="overflow-hidden border border-[#E5E5E5]/20 h-32 relative">
                 <img src="/gambar/lsj.jpg" alt="LSJ" class="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700" />
               </div>
               <div class="flex gap-2 h-20">
                 <div class="overflow-hidden border border-[#E5E5E5]/20 flex-1 relative">
                   <img src="/gambar/lsj-2.jpg" alt="LSJ 2" class="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 delay-75" />
                 </div>
                 <div class="overflow-hidden border border-[#E5E5E5]/20 flex-1 relative">
                   <img src="/gambar/lsj-3.jpg" alt="LSJ 3" class="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 delay-150" />
                 </div>
               </div>
            </div>
          </div>

          <!-- ITEM 03 -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-16 group hover:bg-[#E5E5E5]/5 transition-colors">
            <div class="lg:col-span-3 flex flex-col justify-between">
              <div>
                <div class="font-mono text-[10px] border border-[#E5E5E5]/30 px-2 py-1 inline-block mb-4 tracking-widest opacity-60">
                  [ FOUNDER // 2019 - 2023 ]
                </div>
                <h3 class="text-2xl font-bold uppercase">UI/UX &<br/>Dev</h3>
              </div>
              <p class="font-mono text-[10px] uppercase tracking-widest opacity-50 mt-6 lg:mt-0">@ Gradestudio.id</p>
            </div>
            
            <div class="lg:col-span-9 font-mono text-xs md:text-sm leading-relaxed opacity-70 text-justify">
              Founded an independent freelance studio serving 5+ clients. Specialized in user-centered design, functional Flutter (Android) and web prototypes, alongside comprehensive technical documentation (BRD, UML, ERD).
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- PROJECTS: Systems Portfolio                    -->
    <!-- ============================================== -->
    <section id="projects" class="min-h-screen px-4 md:px-8 py-24 border-t border-[#E5E5E5]/20 bg-[#0A0A0A]">
      <div class="max-w-[1600px] mx-auto w-full">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <h2 class="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Deployed
            <br />
            <span class="text-transparent" style="-webkit-text-stroke: 1px #E5E5E5;">Systems.</span>
          </h2>

          <!-- Category Filter Tabs -->
          <div class="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest">
            <button 
              @click="activeFilter = 'ALL'"
              :class="activeFilter === 'ALL' ? 'bg-[#E5E5E5] text-[#0A0A0A] font-bold' : 'border border-[#E5E5E5]/20 text-[#E5E5E5]/60 hover:text-[#E5E5E5] hover:border-[#E5E5E5]/50'"
              class="px-4 py-2 transition-all">
              [ ALL // 09 ]
            </button>
            <button 
              @click="activeFilter = 'SYSTEMS'"
              :class="activeFilter === 'SYSTEMS' ? 'bg-[#E5E5E5] text-[#0A0A0A] font-bold' : 'border border-[#E5E5E5]/20 text-[#E5E5E5]/60 hover:text-[#E5E5E5] hover:border-[#E5E5E5]/50'"
              class="px-4 py-2 transition-all">
              [ CORE SYSTEMS // 06 ]
            </button>
            <button 
              @click="activeFilter = 'WEBSITES'"
              :class="activeFilter === 'WEBSITES' ? 'bg-[#E5E5E5] text-[#0A0A0A] font-bold' : 'border border-[#E5E5E5]/20 text-[#E5E5E5]/60 hover:text-[#E5E5E5] hover:border-[#E5E5E5]/50'"
              class="px-4 py-2 transition-all">
              [ CLIENT WEBSITES // 03 ]
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          <NuxtLink 
            v-for="(project, idx) in filteredProjects" 
            :key="project.slug"
            :to="`/projects/${project.slug}`" 
            :class="[idx % 2 === 1 ? 'md:mt-24' : '']"
            class="group cursor-pointer block transition-all duration-500"
          >
            <div class="relative overflow-hidden border border-[#E5E5E5]/20 mb-6 bg-[#111]">
              <img :src="project.image" :alt="project.title" class="w-full h-64 md:h-80 object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 z-0 relative" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-60 z-10 pointer-events-none group-hover:opacity-20 transition-all duration-700"></div>
            </div>
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-2">{{ project.tag }}</div>
                <h3 class="text-2xl font-bold uppercase tracking-tighter mb-3 group-hover:text-emerald-400 transition-colors">{{ project.title }}</h3>
                <p class="font-mono text-xs opacity-70 leading-relaxed max-w-sm text-justify">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- CAPABILITIES: Tech Stack Matrix                -->
    <!-- ============================================== -->
    <section class="border-t border-[#E5E5E5]/20 py-24 px-4 md:px-8 bg-[#E5E5E5] text-[#0A0A0A]">
      <div class="max-w-[1600px] mx-auto w-full">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <!-- Title -->
          <div class="md:col-span-1 flex flex-col justify-between">
            <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
              System
              <br />
              Capabilities.
            </h2>
            <p class="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
              Stack Architecture & Tools
            </p>
          </div>

          <!-- Matrix Grid -->
          <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 border-t-2 sm:border-t-0 sm:border-l-2 border-[#0A0A0A]">
            
            <!-- Core 01 -->
            <div class="p-6 sm:p-8 border-b-2 sm:border-b-0 sm:border-r-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#E5E5E5] transition-colors group">
              <div class="font-mono text-xs font-bold mb-8">01 // BACKEND ENGINE</div>
              <ul class="space-y-4 font-black uppercase text-xl md:text-2xl tracking-tighter">
                <li>Laravel 11</li>
                <li>FastAPI</li>
                <li>Node.js / NestJS</li>
                <li>RESTful API</li>
              </ul>
              <div class="font-mono text-[10px] mt-8 opacity-60 group-hover:opacity-100">
                Architecture . Linux (SSH/Nginx) . Cron Jobs
              </div>
            </div>

            <!-- Core 02 -->
            <div class="p-6 sm:p-8 border-b-2 sm:border-b-0 sm:border-r-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#E5E5E5] transition-colors group">
              <div class="font-mono text-xs font-bold mb-8">02 // FRONTEND UI</div>
              <ul class="space-y-4 font-black uppercase text-xl md:text-2xl tracking-tighter">
                <li>Vue 3 / Nuxt 3</li>
                <li>React / Next.js</li>
                <li>Tailwind CSS</li>
                <li>Inertia.js</li>
              </ul>
              <div class="font-mono text-[10px] mt-8 opacity-60 group-hover:opacity-100">
                Reactivity . SSR/SPA . Performance & SEO
              </div>
            </div>

            <!-- Core 03 -->
            <div class="p-6 sm:p-8 hover:bg-[#0A0A0A] hover:text-[#E5E5E5] transition-colors group">
              <div class="font-mono text-xs font-bold mb-8">03 // DB & PAYMENTS</div>
              <ul class="space-y-4 font-black uppercase text-xl md:text-2xl tracking-tighter">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Midtrans / Espay</li>
                <li>VA / QRIS Channels</li>
              </ul>
              <div class="font-mono text-[10px] mt-8 opacity-60 group-hover:opacity-100">
                Relational Schema . Web Delivery & Tools
              </div>
            </div>

          </div>

          <!-- Technical SEO & CMS Delivery Strip -->
          <div class="md:col-span-4 border-t-2 border-[#0A0A0A] pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-[11px] uppercase tracking-wider">
            <div class="border border-[#0A0A0A]/30 p-4 bg-[#0A0A0A]/5">
              <span class="font-bold text-[#0A0A0A] block mb-2">// TECHNICAL SEO & SPEED OPTIMIZATION</span>
              <p class="text-[#0A0A0A]/80 lowercase first-letter:uppercase leading-relaxed">
                Google Search Console, Google Site Kit, Open Graph protocols, sitemap & indexing monitoring, WebP compression, and browser caching layers.
              </p>
            </div>
            <div class="border border-[#0A0A0A]/30 p-4 bg-[#0A0A0A]/5">
              <span class="font-bold text-[#0A0A0A] block mb-2">// CLIENT CMS & WEB DELIVERY</span>
              <p class="text-[#0A0A0A]/80 lowercase first-letter:uppercase leading-relaxed">
                WordPress + Elementor, domain/DNS management, cPanel, and responsive business catalogs with direct WhatsApp checkout integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- CONTACT SECTION                                -->
    <!-- ============================================== -->
    <section id="contact" class="min-h-[60vh] flex flex-col justify-center px-4 md:px-8 border-t border-[#E5E5E5]/20 py-24 relative overflow-hidden bg-[#0A0A0A]">
      <div class="absolute inset-0 pointer-events-none opacity-[0.02]" style="background-image: linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px); background-size: 50px 50px;"></div>
      <div class="max-w-[1600px] mx-auto w-full text-center flex flex-col items-center relative z-10">
        <div class="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50 mb-6 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
          [ 04. COMMS CHANNEL ]
        </div>
        <h2 class="text-5xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] mb-8 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-100">
          Initiate
          <br />
          <span class="text-transparent" style="-webkit-text-stroke: 1.5px #E5E5E5;">Contact.</span>
        </h2>
        <p class="font-mono text-xs md:text-sm opacity-70 max-w-lg mx-auto mb-12 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-200">
          Currently open for new engineering challenges. If your systems require scalable architectures and robust execution, send a transmission.
        </p>
        <div class="flex gap-4 md:gap-6 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-300">
          <a href="mailto:fajrifaisal.user.id@gmail.com" class="font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold border border-[#E5E5E5]/30 px-6 md:px-8 py-4 hover:bg-[#E5E5E5] hover:text-[#0A0A0A] transition-colors">
            Transmit Signal
          </a>
          <a href="https://www.linkedin.com/in/muhammad-faisal-fajri/" target="_blank" class="font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold border border-[#E5E5E5]/30 px-6 md:px-8 py-4 hover:bg-[#E5E5E5] hover:text-[#0A0A0A] transition-colors">
            Network [IN]
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- FOOTER                                         -->
    <!-- ============================================== -->
    <footer class="border-t border-[#E5E5E5]/20 py-8 px-4 md:px-8">
      <div class="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-widest opacity-50">
        <span>&copy; 2026 FAISAL FAJRI. ALL RIGHTS RESERVED.</span>
        <span>SYS.BUILD: NUXT_ENGINE // STYLE: NEO_BRUTAL_MINIMAL</span>
      </div>
    </footer>
  </div>
</template>

<style>
/* Importing premium typography to kill the AI Slop vibe */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&family=JetBrains+Mono:wght@100..800&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Space Grotesk', sans-serif;
  background-color: #0A0A0A;
}

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

/* Custom Scrollbar for extra premium feel */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0A0A0A;
}
::-webkit-scrollbar-thumb {
  background: #333;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>