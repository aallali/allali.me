
<template>
    <div class="container mx-auto px-6 py-10">
        <div class="text-center">
            <h1 class="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">From the blog</h1>

            <p class="mx-auto mt-4 max-w-lg text-gray-500">My Latest posts </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div v-for="post in posts">
                <div class="relative">
                    <img class="h-64 w-full rounded-lg object-cover object-center  " :src="post.image" loading="lazy"
                        :alt="post.title" />

                    <!-- <div class="absolute bottom-0 flex bg-white p-3 dark:bg-gray-900 rounded-tr-xl">
                        <img class="h-10 w-10 rounded-full object-cover object-center"
                            src="/images/author.jpeg"
                            alt="" />

                        <div class="mx-4">
                            <h1 class="text-sm text-gray-700 dark:text-gray-200">Abdellah Allali</h1>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                        </div>
                    </div> -->
                </div>

                <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">{{ post.title }}</h1>

                <!-- <hr class="my-6 w-32 text-blue-500" /> -->
                <!-- 
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ post.description }}</p> -->

                <a :href="post.link" class="mt-1 inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
            </div>

        </div>
    </div>
</template>

 
<script setup lang="ts">
import { parseXml } from "~/composable/store";
const posts = ref<{
    title: string;
    link: string | undefined;
    pubDate: Date;
    description: string;
    image: string;
}[]>()

const getPosts = async () => {
    const data = await $fetch('https://blog.allali.me/blog/index.xml').catch((error) => error.data) as string
    posts.value = parseXml(data)
}
onMounted(getPosts)


</script>
 