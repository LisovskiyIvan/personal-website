<script setup lang="ts">
import me from '@/assets/me.json'
type Props = {
    slideDown: {
    initial: {
        opacity: number;
        y: number;
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
    slideUpBig: {
    initial: {
        opacity: number;
        y: number;
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
    slideRight: {
    initial: {
        opacity: number;
        x: number;
    };
    visible: {
        opacity: number;
        x: number;
    };
}
    isMobile: boolean
}

defineProps<Props>()
</script>

<template>
    <div class="flex flex-col sm:flex-row items-center justify-center">
    <div class="flex flex-col items-center w-[50%]">
    <div
        v-motion
        :initial="slideDown.initial"
        :visible="slideDown.visible"
        class="heading clamp-[34px-4dvw-6xl] text-center mb-[20%] sm:mb-[15%] lg:mb-[6%] 2xl:mb-[6%]"
      >
        Привет! Меня зовут Иван и я fullstack веб разработчик
      </div>
      <div
        v-motion
        :initial="slideUpBig.initial"
        :visible="slideUpBig.visible"
        class="text flex text-2xl flex-col sm:flex-row mb-[20%] sm:mb-[15%] lg:mb-[6%] 2xl:mb-[6%]"
      >
        <a :href="isMobile ? '#stackMobile' : '#stack'"
          ><button
            class="bg-dblue px-4 py-2 rounded-3xl my-8 2xl:my-4 mx-6 hover:bg-black hover:text-dblue hover:scale-105 duration-300"
          >
            Мой стек
          </button></a
        >
        <RouterLink to="contact"
          ><button
            class="bg-black px-4 py-2 rounded-3xl my-8 2xl:my-4 mx-6 text-white hover:text-dblue hover:scale-105 duration-300"
          >
            Контакты
          </button>
        </RouterLink>
      </div>
    </div>

    <Vue3Lottie  v-motion
    :initial="slideRight.initial"
    :visible="slideRight.visible"
    :animationData="me" :height="isMobile ? 300 : 400" :width="isMobile ? 300 : 400"  class=" sm:w-[50%]" />
    </div>
</template>