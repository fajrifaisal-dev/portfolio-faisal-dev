<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

// Mock database for project details
const projects = {
  'lsj-express': {
    title: 'LSJ Express ERP',
    client: 'PT Lintas Samudera Jaya Express',
    role: 'Lead Fullstack Developer',
    tech: 'Laravel, Vue, MySQL',
    description: 'Sistem ERP komprehensif, booking system operasional, dan company profile.',
    image: '/gambar/Gemini_Generated_Image_s8jg06s8jg06s8jg.jpg',
    features: ['Real-time Tracking', 'Automated HR Reporting', 'Finance Module', 'Booking Management']
  },
  'hello-friday': {
    title: 'Hello Friday Studio',
    client: 'Hello Friday',
    role: 'Frontend Architect',
    tech: 'Next.js, TypeScript, Tailwind',
    description: 'Premium slow-living platform replacing manual chat workflows with an interactive Booking Self-Service.',
    image: '/gambar/hello-friday-booking-surabaya.jpg',
    features: ['Multi-branch Booking', 'WhatsApp Integration', 'Instant Confirmation', 'Premium Dark Mode UI']
  },
  'kazi-nail': {
    title: 'Kazi Nail Beauty Bar',
    client: 'Kazi',
    role: 'Frontend Developer',
    tech: 'Next.js, Tailwind',
    description: 'Dynamic portal for 15+ outlets across Java with Instant Outlet Locator.',
    image: '/gambar/kazi-nail-outlet-locator.jpg',
    features: ['Outlet Locator', 'Real-time Pricing', 'Custom Routing System']
  },
  'erp-accounting': {
    title: 'ERP Soft Accounting',
    client: 'Koffiesoft',
    role: 'Software Engineer',
    tech: 'FastAPI, Nuxt 3, PostgreSQL',
    description: 'Sistem akuntansi ERP komprehensif untuk distribusi digital dan PPOB.',
    image: '/gambar/pos_system_mockup.png',
    features: ['General Ledger', 'Journaling', 'Inventory Control', 'High-volume Transactions']
  },
  'dalwa-payment': {
    title: 'Dalwa Payment Engine',
    client: 'Pondok Pesantren Dalwa',
    role: 'Fullstack Developer',
    tech: 'Laravel 11, Vue 3',
    description: 'End-to-end VA/QRIS transaction initiation system with callbacks and signature validation.',
    image: '/gambar/santech-2.jpeg',
    features: ['VA/QRIS Generation', 'Callback Listener', 'Signature Validation', 'Retry Mechanism']
  },
  'santech': {
    title: 'Santech Interface',
    client: 'Siber Antar Technology',
    role: 'UI/UX & Frontend',
    tech: 'Figma, Frontend Stack',
    description: 'Architected the user interface for internal business operations focusing on data density.',
    image: '/gambar/santech.jpeg',
    features: ['Data-dense Dashboard', 'Zero-latency Interactions', 'Role-based Access UI']
  }
}

const project = projects[slug]
</script>

<template>
  <div class="bg-[#0A0A0A] min-h-screen text-[#E5E5E5] font-sans selection:bg-[#E5E5E5] selection:text-[#0A0A0A]">
    <!-- Navbar (Minimal for inner pages) -->
    <header class="fixed top-0 w-full z-50 border-b border-[#E5E5E5]/10 backdrop-blur-xl bg-[#0A0A0A]/70">
      <div class="p-4 md:p-6 flex justify-between items-center">
        <NuxtLink to="/" class="font-mono text-[10px] uppercase tracking-[0.2em] font-bold hover:text-emerald-400 transition-colors">
          ← BACK TO INDEX
        </NuxtLink>
        <span class="font-mono text-[9px] uppercase tracking-widest opacity-50">SYS.DETAILS</span>
      </div>
    </header>

    <div v-if="project" class="pt-32 pb-24 px-4 md:px-8 max-w-[1200px] mx-auto min-h-screen flex flex-col justify-center">
      
      <!-- Meta -->
      <div class="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50 mb-8 border-l border-emerald-500 pl-4">
        CLIENT: {{ project.client }} // ROLE: {{ project.role }}
      </div>
      
      <!-- Title -->
      <h1 class="text-4xl md:text-6xl lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.8] mb-12">
        {{ project.title }}
      </h1>

      <!-- Main Image -->
      <div class="w-full border border-[#E5E5E5]/20 mb-16 bg-[#111] p-2 md:p-4 shadow-[8px_8px_0px_0px_rgba(229,229,229,0.1)]">
        <img :src="project.image" :alt="project.title" class="w-full h-auto max-h-[70vh] object-contain grayscale hover:grayscale-0 transition-all duration-700" />
      </div>

      <!-- Details Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#E5E5E5]/20 pt-12">
        <div class="md:col-span-1">
          <div class="font-mono text-xs font-bold mb-4">TECHNOLOGY STACK</div>
          <p class="font-mono text-[10px] uppercase tracking-widest opacity-70">{{ project.tech }}</p>
          
          <div class="font-mono text-xs font-bold mt-12 mb-4">KEY ARCHITECTURE</div>
          <ul class="font-mono text-[10px] uppercase tracking-widest opacity-70 space-y-2">
            <li v-for="feat in project.features" :key="feat">. {{ feat }}</li>
          </ul>
        </div>
        
        <div class="md:col-span-2">
          <div class="font-mono text-xs font-bold mb-4">PROJECT OVERVIEW</div>
          <p class="font-mono text-sm leading-relaxed opacity-80 text-justify">
            {{ project.description }}
            <br/><br/>
            This project required a meticulous approach to both system architecture and user interface logic. By prioritizing scalable data structures and a zero-fluff frontend execution, the resulting platform handles high-volume operations seamlessly while maintaining an elegant aesthetic standard.
          </p>
          
          <div class="mt-12">
             <a href="#" class="inline-block font-mono text-[10px] uppercase tracking-widest font-bold border border-[#E5E5E5]/30 px-8 py-4 hover:bg-[#E5E5E5] hover:text-[#0A0A0A] transition-colors">
               [ VIEW LIVE DEPLOYMENT ]
             </a>
          </div>
        </div>
      </div>
      
    </div>
    
    <div v-else class="pt-32 pb-24 px-4 md:px-8 text-center min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-4xl font-black uppercase">404 - SYSTEM NOT FOUND</h1>
      <NuxtLink to="/" class="mt-8 font-mono text-xs underline">Return to Index</NuxtLink>
    </div>
  </div>
</template>
