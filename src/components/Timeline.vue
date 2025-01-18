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

</script>

<template>
  <div class=" flex justify-center bg-blue text-black text">
    <ul
      className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-[70%] py-[5%]"
    >
      <li>
        <div
          className="timeline-start md:text-end mb-10 mt-5 xl:min-w-[600px] text-white bg-black rounded-xl p-3 mr-5"
        >
          <div className="text-lg heading font-black my-5">Сайт резюме<span><Vue3Lottie :animationData="resume"  :height="200" :width="200" /></span></div>
          Немного информации о себе. Технологии, проекты, навыки.
          <div className="text-lg heading font-black my-5">
            Использованные технологии
          </div>
          <div
            className="badge badge-primary badge-outline mx-1 "
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
          className="timeline-end mb-10 text-white bg-black rounded-xl p-3 lg:ml-5 xl:min-w-[600px]"
        >
          <div className="text-lg heading font-black my-5">Planetify <span><Vue3Lottie :animationData="task"  :height="200" :width="200" /></span></div>
          Недавно я понял, что мне необходим таск трекер для жизни. Поэтому я решил написать свой. Заметки и канбан доски. Попробовать можно <a href="https://planetify.space/" target="_blank" class="text-xl transition-all relative hover:scale-110 duration-300 after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">здесь</a>
          <div className="text-lg heading font-black my-5">
            Использованные технологии
          </div>
          <div
            className="badge badge-primary badge-outline mx-1 "
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
          className="timeline-start md:text-end mb-10 mt-5 text-white bg-black rounded-xl p-3 mr-5 xl:min-w-[600px]"
        >
          <div className="text-lg heading font-black my-5">Dayme npm package<span><Vue3Lottie :animationData="npm"  :height="200" :width="200" /></span></div>
          Создание react и vue проектов конфигурированных под мои нужды. Посмотреть можно <a href="https://www.npmjs.com/package/dayme" target="_blank" class="text-xl transition-all relative hover:scale-110 duration-300 after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">тут</a> или <span class="bg-gray-800 text-white rounded-lg px-2 py-1" @click="copy('npx dayme create app-name')">npx dayme create app-name</span>
          <div className="text-lg heading font-black my-5">
            Использованные технологии
          </div>
          <div
            className="badge badge-primary badge-outline mx-1 "
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
