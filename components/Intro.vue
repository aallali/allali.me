<template>
    <div class="container mx-auto px-6 py-16 text-start ">
        <div class="mx-auto max-w-4xl">
            <div class="h-24 w-24 overflow-hidden rounded-full shadow-md">
                <img class="hover:scale-150 transition-all duration-500 cursor-pointer" src="/images/author.jpeg"
                    alt="author" loading="lazy" />
            </div>
            <!-- <img class="h-24 w-24 object-cover overflow-hidden rounded-full scale-100" src="/images/author2.png"
            alt="Current profile photo" /> -->
            <h1
                class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl  dark:text-white font-bold">
                Hi 👋, I'm Abdellah</h1>

            <p class="text-2xl font-normal text-gray-800 dark:text-white">A <b class="text-blue-600">software engineer</b>
                and open-source enthusiast. I
                like to keep this blog updated with what I learn along the journey of life as well as things I'm interested
                in.</p>

            <!-- <p class="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Libero similique obcaecati illum mollitia.</p> -->
            <button
                class="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-xl font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">Say Hello</button>
            <!-- <p class="mt-3 text-sm text-gray-400">No credit card required</p> -->
        </div>

        <div class="mt-10 mx-auto rounded-xl flex h-[400px] max-w-4xl justify-center overflow-hidden ">
            <img class="shadow-md object-cover w-full hover:scale-150 transition-all duration-[2000ms] cursor-pointer"
                src="/images/moroccan-architecture.jpeg" loading="lazy"/>
        </div>
    </div>
</template>