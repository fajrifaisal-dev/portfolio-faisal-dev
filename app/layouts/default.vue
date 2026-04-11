<template>
    <div class="min-h-screen bg-[#0B1220] text-white">
        <Navbar />

        <main class="max-w-6xl mx-auto px-6">
            <slot />
        </main>
    </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
</script>