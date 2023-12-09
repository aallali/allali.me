<template>
    <div class="container mx-auto px-6 py-10">
        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">My Projects</h1>

        <!-- <p class="mt-4 text-center text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Nostrum quam voluptatibus</p> -->

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
            <ProjectCard title="Gomoku engine"
                image="https://www.ebuyer.com/blog/wp-content/uploads/2017/10/game-of-go-with-robot-hand.jpg"
                description="An engine designed play Gomoku and win everytime" :isCover="true" />

            <ProjectCard title="Leaffliction"
                image="https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-022-21498-5/MediaObjects/41598_2022_21498_Fig1_HTML.png?as=webp"
                description="Detection and Classification of Plant Disease with Deep Learning" />

            <ProjectCard title="Linear Regression from scratch"
                image="https://raw.githubusercontent.com/aallali/ft-linear-regression/main/pic/LR-Live.gif"
                description="The aim of this project is to introduce you to the basic concept behind machine learning. For this project, you will have to create a program that predicts the price of a car by using a linear function train with a gradient descent algorithm."
                :isCover="true" />

            <ProjectCard title="Hogwarts Magic Hat"
                image="https://static.wikia.nocookie.net/harrypotter/images/6/60/McGonagall_and_the_Sorting_Hat-SS.png/"
                description="Reconstruction of the Hogwarts Magic Hat! by applying Logistic regression to sort students based on ther abilites."
                :isCover="true" />

            <ProjectCard title="N-Puzzle" image="/images/n-puzzle.png"
                description="Engine written in JS, designed to solve a slide puzzle of size N quicker, using various search algorithms" />

            <ProjectCard title="DeepEye"
                image="https://raw.githubusercontent.com/aallali/DeepEye/main/Ressources/DeepEye-logo.png"
                description="DeepEye a CLI that simply help you make search queries through files quickly using plain text or regex expressions, while having detailed output about it. The project meant to be simple and HELPFUL" />

            <ProjectCard title="Red-Tetris"
                image="https://raw.githubusercontent.com/aallali/RED-TETRIS/main/docs/playboard-Winner.png"
                description="DeepEye a CLI that simply help you make search queries through files quickly using plain text or regex expressions, while having detailed output about it. The projeThe objective of this project is to develop a networked multiplayer tetrisgame from a stack of software exclusively Full Stack Javascript" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
</script>