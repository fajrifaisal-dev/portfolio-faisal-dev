import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  css: [
    fileURLToPath(new URL('./assets/css/main.css', import.meta.url))
  ],

  devtools: { enabled: true },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  },

  // ✅ TAMBAHAN SEO DI SINI
  app: {
    head: {
      title: 'Muhammad Faisal Fajri - Software Engineer | ERP & Fintech Specialist',

      meta: [
        {
          name: 'description',
          content: 'Backend Software Engineer specializing in ERP systems, fintech platforms, and payment gateway integration (Midtrans, Espay).'
        },
        {
          name: 'keywords',
          content: 'Software Engineer, Backend Developer, ERP, Fintech, Laravel, FastAPI, Payment Gateway, Indonesia'
        },
        {
          property: 'og:title',
          content: 'Muhammad Faisal Fajri - Software Engineer'
        },
        {
          property: 'og:description',
          content: 'Portfolio of Faisal Fajri, focusing on ERP systems and fintech solutions.'
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ]
    }
  }
})
