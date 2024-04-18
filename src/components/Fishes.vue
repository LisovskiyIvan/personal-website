<script setup lang="ts">
import ClownFish from '@/components/ClownFish.vue'
import Shark from '@/components/Shark.vue'

</script>

<template>
    <TresCanvas clear-color='#0FA3B1'>
        <TresPerspectiveCamera :look-at="[0, 0, 0]" :position="[0, 0, 10]" />
    <Suspense>
        <Shark />
    </Suspense>
    <Suspense>
        <ClownFish />
    </Suspense>
    <TresHemisphereLight :args="['white', 'blue', 3]" :position="[5, 10, 5]" />
</TresCanvas>
</template>