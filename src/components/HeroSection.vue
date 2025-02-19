<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import Header from "@/components/Header.vue";

// Обновленный интерфейс для x-анимаций
interface XAnimationProps {
  initial: {
    opacity: number;
    x: number; // x теперь обязательный
  };
  visible: {
    opacity: number;
    x: number;
    scale: number;
    transition: {
      type: string;
      stiffness: string;
      delay: number;
    };
  };
}

// Обновленный интерфейс для y-анимаций
interface YAnimationProps {
  initial: {
    opacity: number;
    y: number; // y теперь обязательный
  };
  visible: {
    opacity: number;
    y: number;
    scale: number;
    transition: {
      type: string;
      stiffness: string;
      delay: number;
    };
  };
}

defineProps<{
  fish: Record<string, any>;
  slideLeft: XAnimationProps;
  slideDown: YAnimationProps;
  slideUpBig: YAnimationProps;
  slideUpSmall: YAnimationProps;
  slideRight: XAnimationProps;
  isMobile: boolean;
}>();
</script>

<template>
  <div
    class="bg-blue h-auto min-h-[100vh] sm:h-[100dvh] w-[100%] flex justify-center text-black"
  >
    <div class="w-[80%] flex flex-col items-center mt-[3%]">
      <div
        class="mb-[3%]"
        v-motion
        :initial="slideLeft.initial"
        :visible="slideLeft.visible"
      >
        <Vue3Lottie :animationData="fish" :height="200" :width="200" />
      </div>
      <Header
        :slideDown="slideDown"
        :slideUpBig="slideUpBig"
        :isMobile="isMobile"
        :slideRight="slideRight"
      />
      <RouterLink
        to="game"
        v-motion
        :initial="slideUpSmall.initial"
        :visible="slideUpSmall.visible"
        class="flex flex-col items-center cursor-pointer"
      >
        <div
          class="text text-3xl relative cursor-pointer mb-6 sm:mb-16 lg:mt-24 hover:scale-110 duration-300"
        >
          Fish Game
        </div>
      </RouterLink>
    </div>
  </div>
</template>
