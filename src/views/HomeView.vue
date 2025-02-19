<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { ref, watchEffect } from "vue";
import Timeline from "@/components/Timeline.vue";
import fish from "@/assets/fish.json";
import HeroSection from "@/components/HeroSection.vue";
import StackSection from "@/components/StackSection.vue";
import MobileStackSection from "@/components/MobileStackSection.vue";

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
  secondary: ["Git, Docker", "Vite, Webpack", "linux, nginx"],
};
</script>

<template>
  <HeroSection
    :fish="fish"
    :slideLeft="slideLeft"
    :slideDown="slideDown"
    :slideUpBig="slideUpBig"
    :slideUpSmall="slideUpSmall"
    :slideRight="slideRight"
    :isMobile="isMobile"
  />

  <StackSection
    v-if="!isMobile"
    :skills="skills"
    :slideLeft="slideLeft"
    :slideRight="slideRight"
    :isMobile="isMobile"
  />

  <MobileStackSection
    v-if="isMobile"
    :skills="skills"
    :slideLeft="slideLeft"
    :slideRight="slideRight"
  />

 

  <Timeline />
  <div
    class="fixed bottom-[5%] right-[2%] z-100 w-12 sm:w-16 hover:scale-110 duration-300 z-50"
  >
    <a href="https://github.com/LisovskiyIvan" target="_blank">
      <img src="/img/github.png" alt="githublink" />
    </a>
  </div>
</template>
