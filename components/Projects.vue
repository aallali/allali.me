<template>
    <div class="container mx-auto px-6 py-10">
        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">My Projects</h1>

        <!-- <p class="mt-4 text-center text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Nostrum quam voluptatibus</p> -->

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
            <ProjectCard title="Gomoku engine"
                image="https://www.ebuyer.com/blog/wp-content/uploads/2017/10/game-of-go-with-robot-hand.jpg"
                description="An engine designed play Gomoku and win everytime" />

            <ProjectCard title="Leaffliction"
                image="https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-022-21498-5/MediaObjects/41598_2022_21498_Fig1_HTML.png?as=webp"
                description="Detection and Classification of Plant Disease with Deep Learning" />

            <ProjectCard title="N-Puzzle"
                image="/images/n-puzzle.png"
                description="Engine written in JS, designed to solve a slide puzzle of size N quicker, using various search algorithms" />

        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
</script>