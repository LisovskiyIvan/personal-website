<script setup lang="ts">
import task from '@/assets/task.json'
import resume from '@/assets/resume.json'
const skills = {
  start: ["Vue3", "TresJs", "TypeScript", "docker"],
  first: ["React", "Nestjs", "Postgresql", "Prisma", "docker"],
};
</script>

<template>
  <div class=" flex justify-center bg-blue text-black text">
    <ul
      className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-[70%] py-[5%]"
    >
      <li>
        <div
          className="timeline-start md:text-end mb-10 mt-5 text-white bg-black rounded-xl p-3 mr-5"
        >
          <div className="text-lg heading font-black">Сайт резюме<span><Vue3Lottie :animationData="resume"  :height="100" :width="100" /></span></div>
          Больше года назад начал заинтересовался веб девом. Сделал этот сайт как портфолио
          <div className="text-lg heading font-black my-1">
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
          className="timeline-end mb-10 text-white bg-black rounded-xl p-3 lg:ml-5 "
        >
          <div className="text-lg heading font-black ">Planetify <span><Vue3Lottie :animationData="task"  :height="100" :width="100" /></span></div>
          Недавно я понял, что мне необходим таск трекер для жизни. Поэтому я решил написать свой. Попробовать можно <a href="https://planetify.space/" target="_blank" class="text-xl transition-all relative hover:scale-110 duration-300 after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">здесь</a>
          <div className="text-lg heading font-black my-1">
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
      
    </ul>
  </div>
</template>
