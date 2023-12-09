<script setup lang="ts">
import { useMenu } from '../composable/store'

// defineProps<{ switchDark: () => void }>()

const menuElements = [
    { title: "Intro", url: "/" },
    // { title: "Projects", url: "/projects" },
    { title: "Blog", url: "https://blog.allali.me/" },
]

</script>


<template>
    <div :class="[useMenu.isOpenMenu ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
        class=" absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent">
        <div class="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
            <NuxtLink v-for="elem in menuElements" :to="elem.url" :key="elem.title"
                class="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8">
                {{ elem.title }}</NuxtLink>
        </div>
        <DarkSwitcher />
        <!-- <a class="mt-4 block rounded-lg bg-blue-600 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-blue-500 lg:mt-0 lg:w-auto"
            href="#">Collab</a> -->
    </div>
</template>
 