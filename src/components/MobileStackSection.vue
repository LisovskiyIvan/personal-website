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
  skills: SkillsProps;
  slideLeft: XAnimationProps;
  slideRight: XAnimationProps;
}>();
</script>

<template>
  <div class="h-[100dvh] bg-dblue text-black" id="stackMobile">
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
  <div class="min-h-[100dvh] bg-black text-black">
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
</template>
