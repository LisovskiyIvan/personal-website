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

defineProps<{
  skills: SkillsProps;
  slideLeft: XAnimationProps;
  slideRight: XAnimationProps;
}>();
</script>

<template>
  <div class="h-[100dvh] bg-dblue text-black overflow-hidden" id="stackMobile">
    <div class="h-full relative">
      <div class="heading text-3xl absolute top-[10%] left-[5%] z-40 text-black drop-shadow-lg transform hover:scale-105 transition-transform">
        В вебе как рыба в воде
      </div>
      <Suspense>
        <Fishes />
      </Suspense>
    </div>
  </div>

  <div class="min-h-[100dvh] bg-gradient-to-b from-black to-dblue/90">
    <div class="container mx-auto px-4 py-20">
      <h2 class="heading text-orange text-center text-5xl mb-20 drop-shadow-glow">
        Стек технологий
      </h2>

      <div class="space-y-10 max-w-2xl mx-auto">
        <div 
          class="bg-dblue/90 rounded-3xl p-8 shadow-2xl border border-orange/10 backdrop-blur-sm transform hover:scale-[1.02] transition-all"
          v-motion
          :initial="slideLeft.initial"
          :visibleOnce="slideLeft.visible"
        >
          <h3 class="heading text-3xl mb-6 text-black">Основное</h3>
          <div class="space-y-5">
            <div 
              v-for="skill in skills.primary" 
              :key="skill.name"
              class="p-5 bg-white/20 rounded-xl backdrop-blur-md shadow-lg hover:bg-white/30 transition-all"
            >
              <div class="flex items-center gap-4 mb-3">
                <i :class="skill.icon" :style="{ color: skill.color }" class="text-3xl"></i>
                <span class="text-xl font-semibold text-black">{{ skill.name }}</span>
              </div>
              <p class="text-base text-black/80 leading-relaxed">{{ skill.description }}</p>
            </div>
          </div>
        </div>

        <div 
          class="bg-dblue/90 rounded-3xl p-8 shadow-2xl border border-orange/10 backdrop-blur-sm transform hover:scale-[1.02] transition-all"
          v-motion
          :initial="slideRight.initial"
          :visibleOnce="slideRight.visible"
        >
          <h3 class="heading text-3xl mb-6 text-black">Прочее</h3>
          <div class="space-y-5">
            <div 
              v-for="skill in skills.secondary" 
              :key="skill.name"
              class="p-5 bg-white/20 rounded-xl backdrop-blur-md shadow-lg hover:bg-white/30 transition-all"
            >
              <div class="flex items-center gap-4 mb-3">
                <i :class="skill.icon" :style="{ color: skill.color }" class="text-3xl"></i>
                <span class="text-xl font-semibold text-black">{{ skill.name }}</span>
              </div>
              <p class="text-base text-black/80 leading-relaxed">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
