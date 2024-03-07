<script setup lang="ts">
import Arrow from '../components/svg/Arrow.vue'
import Card from '@/components/Card.vue';
import Shark from '@/components/Shark.vue'
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
        <button
          class="bg-dblue px-4 py-2 rounded-3xl m-4 hover:bg-black hover:text-dblue hover:scale-105 duration-300">Мои
          работы</button>
        <button
          class="bg-black px-4 py-2 rounded-3xl m-4 text-white hover:text-dblue hover:scale-105 duration-300">Контакты</button>
      </div>
      <div
        class="flex flex-col items-center hover:scale-110  duration-300 cursor-pointer animate-fade-up animate-duration-[1500ms] animate-delay-700 animate-ease-in-out">
        <div class="text text-3xl relative  cursor-pointer mb-6">
          Мой стек
        </div>
        <div>
          <Arrow class="text-5xl animate-bounce animate-infinite animate-ease-in-out" />
        </div>
      </div>
    </div>
  </div>
  <div class="h-[100dvh] bg-dblue flex justify-between">
    <div class="h-[100%] w-[40%]">
      <div class=" h-[90%] ">
        <Suspense>
          <Shark />
        </Suspense>
      </div>
      <div class="heading ml-[20%] text-3xl">
        В вебе как рыба в воде
      </div>
    </div>
    <div class="mr-[20%] my-[5%] flex flex-col items-center">
      <div class="heading text-4xl mb-[25%]">
        Стек технологий
      </div>
      <div class="bg-notblack w-[140%] rounded-3xl h-[20%] text-white mb-[15%]  hover:shadow-2xl duration-200">
        <div class="text-2xl px-5 py-2 heading">Основное</div>
        <div class="text-xl px-8 text">
          <ul>
            <li>JavaScript, TypeScript, HTML, CSS</li>
            <li>Vue</li>
          </ul>
        </div>
      </div>
      <div class="bg-notblack w-[140%] rounded-3xl h-[20%] text-white mb-[15%] hover:shadow-2xl duration-200">
        <div class="text-2xl px-5 py-2 heading">Основное</div>
        <div class="text-xl px-8 text">
          <ul>
            <li>JavaScript, TypeScript, HTML, CSS</li>
            <li>Vue</li>
          </ul>
        </div>
      </div>
      <div class="bg-notblack w-[140%] rounded-3xl h-[20%] text-white mb-[15%] hover:shadow-2xl duration-200">
        <div class="text-2xl px-5 py-2 heading">Основное</div>
        <div class="text-xl px-8 text">
          <ul>
            <li>JavaScript, TypeScript, HTML, CSS</li>
            <li>Vue</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
  <div class=" h-[100dvh] ">
    <div class="h-[25%] bg-black">

    </div>
    <div class="flex items-center h-[75%] bg-dblue">


      <Card class="ml-[15%]" />
      <Card class="mx-[5%]" />
      <Card class="mr-[15%]" />
    </div>
  </div>
</template>
