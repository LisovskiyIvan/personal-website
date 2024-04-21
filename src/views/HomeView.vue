<script setup lang="ts">
import Card from '@/components/Card.vue';
import Fishes from '@/components/Fishes.vue'
</script>

<template>
  <div class="bg-blue h-[100dvh] flex justify-center">
    <div class="w-[80%] flex flex-col items-center mt-[10%] ">
      <div class=" mb-[5%] animate-fade-right animate-duration-[1500ms] animate-delay-300 animate-ease-in-out">
        <div
          class="emoji text-7xl animate-wiggle-more animate-infinite animate-duration-[7000ms] animate-delay-300 animate-ease-in-out">
          🚀
        </div>
      </div>
      <div
        class="heading text-[60px] text-center mb-[5%] animate-fade-down animate-duration-[1500ms] animate-delay-300 animate-ease-in-out">
        Привет! Меня зовут Иван и я junior frontend разработчик
      </div>
      <div
        class="text text-2xl mb-[10%] animate-fade-up animate-duration-[1500ms] animate-delay-500 animate-ease-in-out">
        <a href="#stack"><button
            class="bg-dblue px-4 py-2 rounded-3xl m-4 hover:bg-black hover:text-dblue hover:scale-105 duration-300">Мой
            стек</button></a>
        <RouterLink to="contact"><button
            class="bg-black px-4 py-2 rounded-3xl m-4 text-white hover:text-dblue hover:scale-105 duration-300">Контакты</button>
        </RouterLink>
      </div>

      <RouterLink to="cat"
        class="flex flex-col items-center  cursor-pointer animate-fade-up animate-duration-[1500ms] animate-delay-700 animate-ease-in-out">
        <div class="text text-3xl relative  cursor-pointer mb-6 hover:scale-110  duration-300">
          Cat's page
        </div>
      </RouterLink>
    </div>
  </div>
  <div class="h-[100dvh] bg-dblue" id="stack">
    <div class="absolute z-40 w-[100%] h-[100%] flex justify-between">
      <div class="heading ml-[10%] text-3xl top-[85%] relative">
        В вебе как рыба в воде
      </div>
      <div class="mr-[15%] my-[5%] flex flex-col items-center">
        <div class="heading text-4xl mb-[25%]">
          Стек технологий
        </div>
        <div
          class="bg-notblack w-[100%] rounded-3xl pb-2 text-white mb-[15%]  hover:shadow-2xl hover:scale-105 duration-200">
          <div class="text-2xl px-5 py-2 heading">Основное</div>
          <div class="text-xl px-8 text">
            <ul>
              <li class="py-1">JavaScript, опыт с TypeScript, NodeJs, HTML, CSS</li>
              <li class="py-1">Vue3, Nuxt3, React</li>
              <li class="py-1">ElysiaJs</li>
            </ul>
          </div>
        </div>
        <div
          class="bg-notblack w-[100%] rounded-3xl pb-2 text-white mb-[15%] hover:shadow-2xl hover:scale-105 duration-200">
          <div class="text-2xl px-5 py-2 heading">Прочее</div>
          <div class="text-xl px-8 text">
            <ul>
              <li class="py-1">Tailwind CSS, REST API</li>
              <li class="py-1">Git, Docker</li>
              <li class="py-1">Vite, опыт с Webpack</li>
              <li class="py-1">Базовые знания Python и SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Suspense>
      <Fishes />
    </Suspense>
  </div>
  <div class=" h-[100dvh] ">
    <div class="h-[25%] bg-blue">

    </div>
    <div class="flex items-center h-[75%] bg-dblue">


      <Card class="ml-[15%]" />
      <Card class="mx-[5%]" />
      <Card class="mr-[15%]" />
    </div>
  </div>
  <div class="fixed bottom-[5%] right-[2%] z-100 w-16 hover:scale-110 duration-300">
    <a href="https://github.com/LisovskiyIvan" target="_blank"><img src="/img/github.png" alt=""></a>
  </div>
</template>
