<script setup lang="ts">
import Fishes from "@/components/Fishes.vue";
import { ref } from 'vue';

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

interface Skill {
  name: string;
  icon: string;
  description: string;
  color: string;
}

interface SkillsProps {
  primary: Skill[];
  secondary: Skill[];
}

const activeSkill = ref<Skill | null>(null);
const tooltipPosition = ref({ x: 0, y: 0 });

const showSkillInfo = (event: MouseEvent, skill: Skill) => {
  activeSkill.value = skill;
  tooltipPosition.value = {
    x: event.clientX,
    y: event.clientY
  };
};

const hideSkillInfo = () => {
  activeSkill.value = null;
};

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
        class="heading sm:ml-[3%] lg:ml-[5%] 2xl:ml-[10%] text-4xl top-[85%] relative text-center font-bold drop-shadow-lg hover:scale-105 transition-all duration-300"
      >
        В вебе как рыба в воде
      </div>
      <div class="lg:mr-[2%] 2xl:mr-[15%] my-[5%] flex flex-col items-center">
        <div
          class="heading clamp-[24px-5dvw-4xl] mr-[2%] sm:mb-[8%] lg:mb-[15%] 2xl:mb-[20%] text-black drop-shadow-glow hover:scale-105 transition-all duration-300"
        >
          Стек технологий
        </div>
        <div
          class="bg-notblack sm:w-[70%] 2xl:w-[100%] rounded-3xl pb-4 text-white sm:mb-[5%] lg:mb-[10%] hover:shadow-[0_0_30px_rgba(255,165,0,0.3)] hover:scale-105 duration-300 backdrop-blur-md bg-opacity-95 border-2 border-orange/30"
          v-motion
          :initial="slideLeft.initial"
          :visibleOnce="slideLeft.visible"
        >
          <div class="text-3xl px-6 py-3 heading text-orange font-bold border-b border-orange/20">
            Основное
          </div>
          <div class="text-xl px-8 text mt-2">
            <ul v-for="skill in skills.primary" :key="skill.name">
              <li
                class="py-2 hover:text-orange hover:bg-white/5 rounded-lg px-3 transition-all duration-300 cursor-pointer flex items-center gap-3 group"
                @mouseenter="(e) => showSkillInfo(e, skill)"
                @mouseleave="hideSkillInfo"
              >
                <i :class="skill.icon" :style="{ color: skill.color }" class="text-2xl group-hover:scale-110 transition-transform"></i>
                {{ skill.name }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="bg-notblack sm:w-[70%] 2xl:w-[100%] rounded-3xl pb-4 text-white mb-[15%] hover:shadow-[0_0_30px_rgba(255,165,0,0.3)] hover:scale-105 duration-300 backdrop-blur-md bg-opacity-95 border-2 border-orange/30"
          v-motion
          :initial="slideLeft.initial"
          :visibleOnce="slideLeft.visible"
        >
          <div class="text-3xl px-6 py-3 heading text-orange font-bold border-b border-orange/20">
            Прочее
          </div>
          <div class="text-xl px-8 text mt-2">
            <ul v-for="skill in skills.secondary" :key="skill.name">
              <li
                class="py-2 hover:text-orange hover:bg-white/5 rounded-lg px-3 transition-all duration-300 cursor-pointer flex items-center gap-3 group"
                @mouseenter="(e) => showSkillInfo(e, skill)"
                @mouseleave="hideSkillInfo"
              >
                <i :class="skill.icon" :style="{ color: skill.color }" class="text-2xl group-hover:scale-110 transition-transform"></i>
                {{ skill.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Всплывающее окно -->
    <div
      v-if="activeSkill"
      class="fixed z-50 bg-notblack/95 text-white p-6 rounded-xl shadow-2xl border-2 border-orange/30 max-w-[350px] backdrop-blur-lg transform transition-transform duration-200 scale-105"
      :style="{
        left: `${tooltipPosition.x + 10}px`,
        top: `${tooltipPosition.y + 10}px`
      }"
    >
      <p class="text-base leading-relaxed">{{ activeSkill.description }}</p>
    </div>

    <Suspense>
      <Fishes />
    </Suspense>
  </div>
</template>
