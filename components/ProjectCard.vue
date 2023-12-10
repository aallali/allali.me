<template >
    <div>
        <div class="relative group overflow-hidden rounded-lg shadow-md">
            <img :class="isCover ? 'object-cover' : 'object-scale-down'"
                class="h-60 w-full " :src="image" :alt="title" />

            <div
                class="flex flex-col opacity-0 group-hover:opacity-95 absolute inset-x-0 bottom-0 justify-center items-center text-md text-start bg-gray-800 text-white font-semibold h-full transition-all transform translate-y-32 group-hover:translate-y-0 duration-1000  rounded-lg p-4 ">

                <div class="m-auto overflow-auto">
                    {{ description }}
                </div>
                <div class="m-auto flex gap-4 justify-center">
                    <button
                        class="mt-6 rounded-lg border-2 text-blue-300 border-blue-300 px-6 py-2.5 text-center text-xl font-medium capitalize leading-5   hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">Demo</button>
                    <button
                        class="mt-6 rounded-lg border-2 text-blue-300 border-blue-300 px-6 py-2.5 text-center text-xl font-medium capitalize leading-5   hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">Github</button>
                </div>

            </div>
        </div>

        <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">{{ title }}</h2>
        <!-- <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">Ui kit</p> -->
    </div>
</template>
<script setup lang="ts">
defineProps<{ title: string, image: string, description: string, isCover?: boolean }>()
</script>
