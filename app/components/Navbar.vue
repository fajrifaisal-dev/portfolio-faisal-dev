<template>
    <nav class="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-black/60">
        <div class="container mx-auto px-5 md:px-20 flex items-center justify-between py-4 md:py-6">

            <!-- LOGO -->
            <NuxtLink to="/" class="text-cyan-400 font-bold text-sm md:text-base">
                Faisal Fajri.dev
            </NuxtLink>

            <!-- DESKTOP MENU -->
            <div class="hidden md:flex gap-6 text-sm text-gray-300">
                <NuxtLink to="/" class="hover:text-white transition">Home</NuxtLink>
                <NuxtLink to="/about" class="hover:text-white transition">About</NuxtLink>
                <NuxtLink to="/projects" class="hover:text-white transition">Projects</NuxtLink>
                <NuxtLink to="/experience" class="hover:text-white transition">Experience</NuxtLink>
            </div>

            <!-- HAMBURGER BUTTON -->
            <button class="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8" @click="open = !open"
                aria-label="Toggle menu">
                <span class="block w-5 h-px bg-gray-300 transition-all duration-300"
                    :class="open ? 'rotate-45 translate-y-[7px]' : ''"></span>
                <span class="block w-5 h-px bg-gray-300 transition-all duration-300"
                    :class="open ? 'opacity-0' : ''"></span>
                <span class="block w-5 h-px bg-gray-300 transition-all duration-300"
                    :class="open ? '-rotate-45 -translate-y-[7px]' : ''"></span>
            </button>

        </div>

        <!-- MOBILE MENU -->
        <div class="md:hidden overflow-hidden transition-all duration-300"
            :class="open ? 'max-h-64 border-t border-white/10' : 'max-h-0'">
            <div class="flex flex-col px-5 py-4 gap-5">
                <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
                    class="text-sm text-gray-300 hover:text-white transition flex items-center justify-between"
                    @click="open = false">
                    {{ link.label }}
                    <Icon name="mdi:arrow-right" class="text-cyan-400 text-xs" />
                </NuxtLink>
            </div>
        </div>

    </nav>
</template>

<script setup>
const open = ref(false)

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
]

// tutup menu kalau pindah halaman
const route = useRoute()
watch(() => route.path, () => { open.value = false })
</script>