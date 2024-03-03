<script setup lang="ts">
import Arrow from '../components/svg/Arrow.vue'
import Card from '@/components/Card.vue';
</script>

<template>
  <div class="bg-blue h-[100dvh] flex justify-center">
    <div class="w-[80%] flex flex-col items-center mt-[10%]">
      <div class="emoji text-7xl mb-[5%]">
        🚀
      </div>
      <div class="heading text-[60px] text-center mb-[5%]">
        Привет! Меня зовут Иван и я junior frontend разработчик
      </div>
      <div class="text text-2xl mb-[15%]">
        <button
          class="bg-dblue px-4 py-2 rounded-3xl m-4 hover:bg-black hover:text-dblue hover:scale-105 duration-300">Мои
          работы</button>
        <button
          class="bg-black px-4 py-2 rounded-3xl m-4 text-white hover:text-dblue hover:scale-105 duration-300">Контакты</button>
      </div>
      <div class="flex flex-col items-center hover:scale-110  duration-300 cursor-pointer">
        <div class="text text-3xl relative  cursor-pointer mb-6">
          Мой стек
        </div>
        <div>
          <Arrow class="text-5xl animate-bounce animate-infinite animate-ease-in-out" />
        </div>
      </div>
    </div>
  </div>
  <div class=" h-[100dvh]">
    <div class="h-[25%] bg-black">

    </div>
    <div class="flex items-center h-[75%] bg-dblue">
      <Card class="ml-[15%]" />
      <Card class="mx-[5%]" />
      <Card class="mr-[15%]" />
    </div>
  </div>
</template>
