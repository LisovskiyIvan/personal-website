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
    {
      name: "JavaScript, TypeScript",
      icon: "i-logos-javascript",
      description: "Основные языки программирования. Хочу изучать Go и Scala ", 
      color: "#F7DF1E"
    },
    {
      name: "React, Next.js, TanStack Query, Mobx, Jotai, Zustand, dnd-kit",
      icon: "i-lucide-component",
      description: "Работал с React и Next, пробовал разные стейт менеджеры и библиотеки",
      color: "#61DAFB"
    },
    {
      name: "Vue, Pinia, Vueuse, Vue Router",
      icon: "i-lucide-layers",
      description: "Vue нравится больше чем React",
      color: "#4FC08D"
    },
    {
      name: "Tailwind, Framer Motion, tailwind-animate, shadcn/ui",
      icon: "i-lucide-server",
      description: "Вот так стилизую свои проекты. Пробовал много библиотек компонентов - Material UI, Daysi UI, Ant Design, Chakra UI, Prime Vue",
      color: "#339933"
    },
    {
      name: "Nest, Elysia", 
      icon: "i-lucide-server",
      description: "Бэкенд фреймворки, которые использовал",
      color: "#E0234E"
    },
    {
      name: "Postgresql, Prisma, Sqlite",
      icon: "i-lucide-database",
      description: "База данных и ORM, которые использовал на проектах",
      color: "#336791"
    },
    {
      name: "Babylon.js, Three.js",
      icon: "i-lucide-git-branch",
      description: "Большой опыт работы с 3D графикой",
      color: "#F05032"
    },
  ],
  secondary: [
    {
      name: "Git, Docker",
      icon: "i-lucide-git-branch",
      description: "Инструменты разработки, без них никуда",
      color: "#F05032"
    },
    {
      name: "Vite, Webpack",
      icon: "i-lucide-package",
      description: "Использовал оба, но vite лучше",
      color: "#646CFF"
    },
    {
      name: "linux, nginx",
      icon: "i-lucide-terminal",
      description: "Иногда приходится использовать во время деплоя",
      color: "#000000"
    }
  ]
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
