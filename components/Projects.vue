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
                image="https://camo.githubusercontent.com/4a40452bf14786ccfb502f5524574fb593536bff9d06bd3c0a5c14d232646131/68747470733a2f2f692e696d6775722e636f6d2f59734d697936422e676966"
                description="Here, I perform the analysis, augmentation and transformation of a leaf dataset. After image classification using a Convolutional Neural Network."
                :isCover="true" />
            <!-- image="https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-022-21498-5/MediaObjects/41598_2022_21498_Fig1_HTML.png?as=webp" -->

            <ProjectCard title="Linear Regression from scratch"
                image="https://raw.githubusercontent.com/aallali/ft-linear-regression/main/pic/LR-Live.gif"
                description="The aim of this project is to introduce you to the basic concept behind machine learning. For this project, you will have to create a program that predicts the price of a car by using a linear function train with a gradient descent algorithm."
                :isCover="true" />

            <ProjectCard title="DSLR" image="https://i.imgur.com/70PtVql.gif"
                description="Data Science x Logistic Regression, is a project that aims to analyze a data set and predict Hogwarts House."
                :isCover="true" />

            <ProjectCard title="N-Puzzle" image="/images/n-puzzle.png"
                description="Engine written in JS, designed to solve a slide puzzle of size N quicker, using various search algorithms" />

            <ProjectCard title="DeepEye"
                image="https://raw.githubusercontent.com/aallali/DeepEye/main/Ressources/DeepEye-logo.png"
                description="a CLI that simply help you make search queries through files quickly using plain text or regex expressions, while having detailed output about it. The project meant to be simple and HELPFUL" />

            <ProjectCard title="Inception of Things"
                image="https://cloudvests.com/wp-content/uploads/2020/08/How-To-Create-a-Kubernetes-Cluster-Using-Kubeadm-on-Ubuntu-18.jpg"
                description="This project aims to introduce you to kubernetes from a developer perspective. You will have to set up small clusters and discover the mechanics of continuous integration. At the end of this project you will be able to have a working cluster in docker and have a usable continuous integration for your applications Resources" :isCover="true" />
            <ProjectCard title="Red-Tetris"
                image="https://img.joomcdn.net/42c6474dc9f0b60fb19e24871535d6bb96641832_original.jpeg"
                description="The objective of this project is to develop a networked multiplayer tetris game from a stack of software exclusively Full Stack Javascript" :isCover="true" />


        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
</script>