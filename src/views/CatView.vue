<script setup lang="ts">
import Cat from '@/components/Cat.vue'
import { OrbitControls } from '@tresjs/cientos'


</script>

<template>
  <div class=" h-[100vh]">
    <div class="absolute z-40 flex justify-between pt-[10%] w-[100%]">
      <div class="ml-[2%]">
  
        <div class="text-5xl mb-[15%]">世上无难事，只怕有心人</div>
      </div>
      <div class="mr-[2%]">
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
