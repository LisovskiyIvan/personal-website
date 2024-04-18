<script async setup lang="ts">
import Cat from './Cat.vue'
import Aquarium from './Aquarium.vue'
import { OrbitControls } from '@tresjs/cientos'

</script>

<template>
    <TresCanvas clear-color='#0FA3B1'>
        <TresPerspectiveCamera :look-at="[0, 0, 0]" :position="[0, 0, 5]" />
        <OrbitControls />
        <Suspense>
            <Aquarium/>
        </Suspense>
        <Suspense>
            <Cat/>
        </Suspense>
        <TresHemisphereLight :args="['white', 'blue', 3]" :position="[5, 10, 5]" />
    </TresCanvas>
</template>