<script setup lang="ts">
import task from '@/assets/task.json'
import resume from '@/assets/resume.json'
import npm from '@/assets/npm.json'
import { useClipboard } from '@vueuse/core'
const skills = {
  start: ["Vue3", "TresJs", "TypeScript", "docker"],
  first: ["React", "Nestjs", "Postgresql", "Prisma", "docker", "Jotai", "Tailwind", "dnd-kit"],
  second: ["Vue", "React"],
};
const { copy } = useClipboard()

const slideLeft = {
  initial: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1000
    }
  }
}

const slideRight = {
  initial: {
    x: 100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1000
    }
  }
}

</script>

<template>
  <div class="flex justify-center bg-blue text-black text">
    <ul
      className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-[90%] md:w-[70%] py-[5%]"
    >
      <li>
        <div
          className="timeline-start md:text-end mb-10 mt-5 w-full md:w-[600px] text-white bg-black rounded-xl p-3 mr-0 md:mr-5"
          v-motion
          :initial="slideLeft.initial"
          :visibleOnce="slideLeft.visible"
        >
          <div className="text-lg heading font-black my-5">Сайт резюме<span><Vue3Lottie :animationData="resume" :height="150" :width="150" class="md:h-[200px] md:w-[200px]" /></span></div>
          Немного информации о себе. Технологии, проекты, навыки.
          <div className="text-lg heading font-black my-5">
            Использованные технологии
          </div>
          <div
            className="badge badge-primary badge-outline mx-1 my-1"
            v-for="(item, index) in skills.start"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div
          className="timeline-end mb-10 text-white bg-black rounded-xl p-3 lg:ml-5 w-full md:w-[600px]"
          v-motion
          :initial="slideRight.initial"
          :visibleOnce="slideRight.visible"
        >
          <div className="text-lg heading font-black my-5">Planetify <span><Vue3Lottie :animationData="task" :height="150" :width="150" class="md:h-[200px] md:w-[200px]" /></span></div>
          Недавно я понял, что мне необходим таск трекер для жизни. Поэтому я решил написать свой. Заметки и канбан доски. Попробовать можно <a href="https://planetify.space/" target="_blank" class="text-xl text-orange underline font-bold transition-all relative hover:scale-110 duration-300 cursor-pointer">здесь</a>
          <div className="text-lg heading font-black my-5">
            Использованные технологии
          </div>
          <div
            className="badge badge-primary badge-outline mx-1 my-1"
            v-for="(item, index) in skills.first"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <hr />
      </li>
      <li>
        <div
          className="timeline-start md:text-end mb-10 mt-5 text-white bg-black rounded-xl p-3 mr-0 md:mr-5 w-full md:w-[600px]"
          v-motion
          :initial="slideLeft.initial"
          :visibleOnce="slideLeft.visible"
        >
          <div className="text-lg heading font-black my-5">Dayme npm package<span><Vue3Lottie :animationData="npm" :height="150" :width="150" class="md:h-[200px] md:w-[200px]" /></span></div>
          Создание react и vue проектов конфигурированных под мои нужды. Посмотреть можно <a href="https://www.npmjs.com/package/dayme" target="_blank" class="text-xl text-orange underline font-bold transition-all relative hover:scale-110 duration-300 cursor-pointer">тут</a> или <span class="bg-orange text-white rounded-lg px-2 py-1 text-sm md:text-base cursor-pointer hover:bg-white hover:text-orange transition-all duration-300" @click="copy('npx dayme create app-name')">npx dayme create app-name</span>
          <div className="text-lg heading font-black my-5">
            Использованные технологии
          </div>
          <div
            className="badge badge-primary badge-outline mx-1 my-1"
            v-for="(item, index) in skills.second"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>
