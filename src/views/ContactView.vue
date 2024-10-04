<script setup lang="ts">
import tg from '@/assets/tg.json'
import email from '@/assets/email.json'

</script>


<template>
    <div class="h-[100dvh] bg-notblack flex justify-center items-center">
        <div class="bg-dblue w-[80%] h-[500px] rounded-3xl p-4 flex justify-center items-center">
            <div class="text-notblack clamp-[12px-5dvw-5xl] absolute">
                <div class="flex justify-center items-center py-2 ">
                    <span class="font-bold"><Vue3Lottie :animationData="email"  :height="100" :width="100" /></span> daymedead.dev@gmail.com
                </div>
                <div class="flex justify-center items-center py-2">
                    <span class="font-bold"><Vue3Lottie :animationData="tg"  :height="100" :width="100" /></span>@daymedead
                </div>
            </div>
            <RouterLink to="/" class="relative text-black font-semibold top-[45%] right-[35%] sm:right-[37%] lg:right-[40%] 2xl:right-[43%] text-2xl hover:scale-105 duration-300 after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                    Обратно
            </RouterLink>
        </div>
    </div>
</template>