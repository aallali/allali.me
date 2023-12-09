<script setup lang="ts">
import NavMenu from "../components/Menu.vue"
import NavMenuButton from "../components/MenuButton.vue"

import { useSeoMeta, } from '@unhead/vue';
import { useDarkMode } from "~/composable/store";

const route = useRoute()
const isDark = computed(() => useDarkMode.isDark)

const routesNames: { [key: string]: string } = {
    'index': 'Home',
    'projects': 'Projects',
    'blog': 'Blog'
}

const author = {
    name: 'Abdellah Allali'
}
useSeoMeta({
    title: routesNames[route.name as string] + ' | ' + author.name,
    ogTitle: routesNames[route.name as string] + ' | ' + author.name,
    ogLocale: 'en_US',
    contentType: 'text/html; charset=utf-8',
    xUaCompatible: 'IE=edge',
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    description: 'allali.me a modest log of my journey through tech, reading and life learnings',
    ogDescription: 'allali.me a modest log of my journey through tech, reading and life learnings',
    ogImage: '/images/splash.png',
    twitterCard: 'summary_large_image',
    twitterSite: 'is3dida'
})


</script>
<template>
    <main :class="{ dark: isDark }">
        <section class="bg-white dark:bg-gray-900 theme-dark">
            <nav x-data="{ isOpen: false }" class="container mx-auto max-w-4xl py-6 lg:flex lg:items-center lg:justify-between">
                <div class="flex items-center justify-between">
                    <div class="mb-2 sm:mb-0 flex flex-row">
                        <div class="h-10 w-10 self-center mr-2">
                            <img class="h-10 w-10 self-center" src="/android-chrome-192x192.png" loading="lazy" />
                        </div>
                        <a class="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
                            href="#">{{ author.name }}</a>
                    </div>
                    <!-- Mobile menu button -->
                    <NavMenuButton />
                </div>
                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <NavMenu />
            </nav>
        </section>
        <slot />
        <Footer />
    </main>
</template> 