<script setup lang="ts">
import Fishes from "@/components/Fishes.vue";
import { useWindowSize } from "@vueuse/core";
import { ref, watchEffect } from "vue";
import Timeline from "@/components/Timeline.vue";
import fish from "@/assets/fish.json";
import Header from "@/components/Header.vue";
const { width } = useWindowSize();

const isMobile = ref(false);
watchEffect(() => {
  if (width.value < 650) isMobile.value = true;
  else isMobile.value = false;
});

const slideRight = {
  initial: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: "50",
      delay: 300,
    },
  },
};

const slideLeft = {
  initial: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: "50",
      delay: 300,
    },
  },
};
const slideUpBig = {
  initial: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: "50",
      delay: 400,
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
      delay: 300,
    },
  },
};
const slideUpSmall = {
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
      delay: 700,
    },
  },
};

const skills = {
  primary: [
    "JavaScript, TypeScript",
    "React, Mobx, Jotai, dnd-kit, Tailwind",
    "Vue, Pinia, Tailwind",
    "Nest, Elysia, Express",
    "Postgresql, Prisma",
  ],
  secondary: [
    "Git, Docker",
    "Vite, Webpack",
    "linux, nginx",
  ],
};
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
      <Header :slideDown="slideDown" :slideUpBig="slideUpBig" :isMobile="isMobile" :slideRight="slideRight"/>
      <RouterLink
        to="cat"
        v-motion
        :initial="slideUpSmall.initial"
        :visible="slideUpSmall.visible"
        class="flex flex-col items-center cursor-pointer"
      >
        <div
          class="text text-3xl relative cursor-pointer mb-6 hover:scale-110 duration-300"
        >
          Cat's page
        </div>
      </RouterLink>
    </div>
  </div>
  <div class="min-h-[100dvh] bg-dblue text-black" id="stack" v-if="!isMobile">
    <div class="absolute z-40 w-[100%] h-[100%] flex justify-between">
      <div
        class="heading sm:ml-[3%] lg:ml-[5%] 2xl:ml-[10%] text-3xl top-[85%] relative text-center"
      >
        В вебе как рыба в воде
      </div>
      <div class="lg:mr-[2%] 2xl:mr-[15%] my-[5%] flex flex-col items-center">
        <div
          class="heading clamp-[24px-5dvw-4xl] mr-[2%] sm:mb-[8%] lg:mb-[15%] 2xl:mb-[25%]"
        >
          Стек технологий
        </div>
        <div
          class="bg-notblack sm:w-[70%] 2xl:w-[100%] rounded-3xl pb-2 text-white sm:mb-[5%] lg:mb-[10%] hover:shadow-2xl hover:scale-105 duration-200"
          v-motion
          :initial="slideLeft.initial"
          :visibleOnce="slideLeft.visible"
        >
          <div class="text-2xl px-5 py-2 heading">Основное</div>
          <div class="text-xl px-8 text">
            <ul v-for="item in skills.primary">
              <li class="py-1">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div
          class="bg-notblack sm:w-[70%] 2xl:w-[100%] rounded-3xl pb-2 text-white mb-[15%] hover:shadow-2xl hover:scale-105 duration-200"
          v-motion
          :initial="slideLeft.initial"
          :visibleOnce="slideLeft.visible"
        >
          <div class="text-2xl px-5 py-2 heading">Прочее</div>
          <div class="text-xl px-8 text">
            <ul v-for="item in skills.secondary">
              <li class="py-1">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Suspense>
      <Fishes />
    </Suspense>
  </div>
  <div class="h-[100dvh] bg-dblue text-black" id="stackMobile" v-if="isMobile">
    <div class="h-[100%]">
      <div class="heading mt-[10%] px-[5%] z-40 text-2xl absolute">
        В вебе как рыба в воде
      </div>
      <div class="absolute h-[100%] z-40 w-[100%]"></div>
      <Suspense>
        <Fishes />
      </Suspense>
    </div>
  </div>
  <div class="min-h-[100dvh] bg-black text-black" v-if="isMobile">
    <div class="flex flex-col items-center">
      <div class="heading text-orange clamp-[24px-5dvw-4xl] my-[10%] z-40">
        Стек технологий
      </div>
      <div
        class="bg-dblue w-[70%] rounded-3xl pb-2 text-black mb-[15%]"
        v-motion
        :initial="slideLeft.initial"
        :visibleOnce="slideLeft.visible"
      >
        <div class="text-2xl px-5 py-2 heading">Основное</div>
        <div class="text-xl px-8 text">
          <ul v-for="item in skills.primary">
            <li class="py-1">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div
        class="bg-dblue w-[70%] rounded-3xl pb-2 text-black mb-[30px]"
        v-motion
        :initial="slideRight.initial"
        :visibleOnce="slideRight.visible"
      >
        <div class="text-2xl px-5 py-2 heading">Прочее</div>
        <div class="text-xl px-8 text">
          <ul v-for="item in skills.secondary">
            <li class="py-1">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Timeline />
  <div
    class="fixed bottom-[5%] right-[2%] z-100 w-12 sm:w-16 hover:scale-110 duration-300 z-50"
  >
    <a href="https://github.com/LisovskiyIvan" target="_blank"
      ><img src="/img/github.png" alt="githublink"
    /></a>
  </div>
</template>
