<script setup lang="ts">
import tg from '@/assets/tg.json'
import email from '@/assets/email.json'
import { Vue3Lottie } from "vue3-lottie";

const slideUp = {
  initial: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring", 
      stiffness: "50",
      delay: 300,
    },
  },
};

const slideDown = {
  initial: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: "50", 
      delay: 500,
    },
  },
};
</script>

<template>
    <div class="h-[100dvh] bg-notblack flex justify-center items-center">
        <div 
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :visible="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
            class="bg-dblue w-[80%] h-[500px] rounded-3xl p-4 flex justify-center items-center hover:shadow-2xl hover:scale-[1.02] duration-300"
        >
            <div class="text-notblack clamp-[12px-5dvw-5xl] absolute">
                <div 
                    v-motion
                    :initial="slideUp.initial"
                    :visible="slideUp.visible"
                    class="flex justify-center items-center py-2 hover:scale-105 duration-300"
                >
                    <span class="font-bold"><Vue3Lottie :animationData="email" :height="100" :width="100" /></span>
                    <span class="hover:text-orange duration-300">daymedead.dev@gmail.com</span>
                </div>
                <div 
                    v-motion
                    :initial="slideDown.initial"
                    :visible="slideDown.visible"
                    class="flex justify-center items-center py-2 hover:scale-105 duration-300"
                >
                    <span class="font-bold"><Vue3Lottie :animationData="tg" :height="100" :width="100" /></span>
                    <span class="hover:text-orange duration-300">@daymedead</span>
                </div>
            </div>
            <RouterLink 
                to="/" 
                v-motion
                :initial="{ opacity: 0 }"
                :visible="{ opacity: 1, transition: { delay: 700 } }"
                class="relative text-black font-semibold top-[45%] right-[35%] sm:right-[37%] lg:right-[40%] 2xl:right-[43%] text-2xl hover:scale-105 duration-300 after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
                Обратно
            </RouterLink>
        </div>
    </div>
</template>