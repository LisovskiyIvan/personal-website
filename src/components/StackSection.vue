<script setup lang="ts">
import Fishes from "@/components/Fishes.vue";

interface XAnimationProps {
  initial: {
    opacity: number;
    x: number;
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

interface SkillsProps {
  primary: string[];
  secondary: string[];
}

defineProps<{
  isMobile: boolean;
  skills: SkillsProps;
  slideLeft: XAnimationProps;
  slideRight: XAnimationProps;
}>();
</script>

<template>
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
          class="bg-notblack sm:w-[70%] 2xl:w-[100%] rounded-3xl pb-2 text-white sm:mb-[5%] lg:mb-[10%] hover:shadow-2xl hover:scale-105 duration-200 backdrop-blur-sm bg-opacity-90 border border-orange/20"
          v-motion
          :initial="slideLeft.initial"
          :visibleOnce="slideLeft.visible"
        >
          <div class="text-2xl px-5 py-2 heading text-orange font-semibold">
            Основное
          </div>
          <div class="text-xl px-8 text">
            <ul v-for="item in skills.primary">
              <li
                class="py-1 hover:text-orange transition-colors duration-300 cursor-default"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="bg-notblack sm:w-[70%] 2xl:w-[100%] rounded-3xl pb-2 text-white mb-[15%] hover:shadow-2xl hover:scale-105 duration-200 backdrop-blur-sm bg-opacity-90 border border-orange/20"
          v-motion
          :initial="slideLeft.initial"
          :visibleOnce="slideLeft.visible"
        >
          <div class="text-2xl px-5 py-2 heading text-orange font-semibold">
            Прочее
          </div>
          <div class="text-xl px-8 text">
            <ul v-for="item in skills.secondary">
              <li
                class="py-1 hover:text-orange transition-colors duration-300 cursor-default"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Suspense>
      <Fishes />
    </Suspense>
  </div>
</template>
