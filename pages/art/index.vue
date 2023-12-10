
<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="container mx-auto px-6 py-16 text-start ">
            <div class="mx-auto max-w-4xl">
                <p class="text-2xl font-normal text-gray-800 dark:text-white "> 👋 In this compilation, you'll find some of
                    my earlier artworks—a mix of handmade crafts and sporadic sketches. Feel free to browse and immerse
                    yourself in the creative journey.</p>
                <br>
                <p class="text-2xl font-normal text-gray-800 dark:text-white "> Notably, there's a photograph of a
                    handshake, not a drawing, taken some time ago. I've always cherished the moment captured in that image
                    and wanted to share it with you.</p>
                <br>

                <p class="text-2xl font-normal text-gray-800 dark:text-white ">(Click image to open)</p>
            </div>
        </div>
        <div class="p-4">
            <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-5 gap-4">
                <div v-for="(img, idx) in imgs">
                    <img class="shadow-black dark:shadow-white shadow-sm h-auto w-full rounded-lg" :src="img" alt=""
                        @click=" selectedImg = idx">
                </div>
            </div>
            <!-- Modal -->
            <div v-if="selectedImg >= 0" class="fixed inset-0 z-50 flex items-center justify-center"
                @click="selectedImg = -1">
                <div class="absolute inset-0 bg-black opacity-80"></div>
                <div class="flex justify-center sm:px-12 p-8 h-screen">
                    <img class="object-scale-down max-h-full drop-shadow-md rounded-md m-auto" :src="imgs[selectedImg]"
                        alt="selectedImagos" />
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const arts = Object.values(import.meta.globEager('@/assets/art/*.jpg'));
const selectedImg = ref(-1)
const imgs = arts.map((l: any) => l.default).filter((_l, i) => i != 2)

</script>
 