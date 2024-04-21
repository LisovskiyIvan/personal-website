<script setup lang="ts">
import Cat from '@/components/Cat.vue'
import { OrbitControls } from '@tresjs/cientos'


</script>

<template>
  <div class=" h-[100vh]">
    <div class="absolute z-40 flex justify-between w-[100%] h-[100dvh]">
      <div class="ml-[2%] pt-[10%]">

        <div class="text-5xl ">世上无难事，只怕有心人</div>
      </div>
      <div>
        <div class="hover:scale-110 cursor-pointer duration-300 relative top-[93%]">
          <RouterLink to='/' class="text-3xl font-semibold hover:scale-105 duration-300 after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Обратно</RouterLink>
        </div>
      </div>
      <div class="mr-[2%] pt-[10%]">
        <div class="text-5xl ">Hesitation means defeat</div>
      </div>


    </div>
    <TresCanvas clear-color='#0FA3B1'>
      <TresPerspectiveCamera :look-at="[0, 0, 0]" :position="[0, 13, 0]" />
      <OrbitControls />
      <Suspense>
        <Cat />
      </Suspense>
      <TresHemisphereLight :args="['white', 'blue', 3]" :position="[5, 10, 5]" />
    </TresCanvas>
  </div>
</template>

<style></style>
