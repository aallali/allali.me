<template>
    <div class="container mx-auto px-6 py-10">
        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">My Projects</h1>

        <!-- <p class="mt-4 text-center text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Nostrum quam voluptatibus</p> -->

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-4 xl:gap-12">
            <ProjectCard v-for="p in projects" :title="p.title" :image="p.image" :description="p.description"
                :isCover="p.isCoverImg" :demo="p.link.demo" :github="p.link.github" />

            <!-- image="https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-022-21498-5/MediaObjects/41598_2022_21498_Fig1_HTML.png?as=webp" -->

        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import { projects } from "@/content/portfolio.data"
</script>