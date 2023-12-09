
<script setup lang="ts">
import { ref } from 'vue';
import Intro from "../components/Intro.vue"
import Projects from "../components/Projects.vue"
import Profiles from "../components/Profiles.vue"
import FeedBacks from "../components/Feedbacks.vue"
import Contact from "../components/Contact.vue"
import BlogShowcase from "../components/BlogShowcase.vue"
import { infos } from "@/content/portfolio.data"
const isOpen = ref(false)

</script>
<template>
  <!-- Intro  -->
  <section class="bg-white dark:bg-gray-900">
    <Intro />
  </section>

  <section class="bg-white dark:bg-gray-900">
    <!-- My Story -->
    <div class="bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-6 py-10">
        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">My Story</h1>

        <div class="mx-auto mt-6 flex justify-center">
          <span class="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
          <span class="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
          <span class="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
        </div>

        <p class="mx-auto mt-6   max-w-4xl text-start text-gray-800 dark:text-gray-300 text-lg font-normal"
          v-html="infos.longBio"></p>
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <!-- Projects showcase -->
    <Projects />
  </section>

  <section class="bg-white dark:bg-gray-900" v-if="isOpen">
    <!-- Profiles -->
    <Profiles />
  </section>

  <section class="bg-white dark:bg-gray-900" v-if="isOpen">
    <FeedBacks />
  </section>

  <section class="bg-white dark:bg-gray-900">
    <BlogShowcase />
  </section>

  <section class="bg-white dark:bg-gray-900" v-if="isOpen">
    <!-- Questions -->
    <Questions />
  </section>

  <section v-if="isOpen"
    class="min-h-screen bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
    <!-- Contact Form  -->
    <Contact />
  </section>
</template>
  
 