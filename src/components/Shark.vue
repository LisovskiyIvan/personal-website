<script async setup lang="ts">
import { useRenderLoop } from '@tresjs/core'
import { ref, shallowRef, watchEffect } from 'vue';
import { useWindowSize } from '@vueuse/core'


const offsetPositionX = ref(0)
const offsetPositionY = ref(0)
const offsetRotationZ = ref(0)
watchEffect(() => {
    const { width } = useWindowSize()
    if (width.value < 650) {
        offsetPositionX.value = 0
        offsetPositionY.value = -0.8
        offsetRotationZ.value = -10.6
    }
    else {
        offsetPositionX.value = width.value/300 - (width.value/900)
        offsetPositionY.value = 0.8
        offsetRotationZ.value = -10.2
    }
})

const shark = shallowRef()

import { useGLTF } from '@tresjs/cientos'



const { scene, nodes, animations, materials } = await useGLTF('/models/shark/scene.gltf', { draco: true })
const { onLoop } = useRenderLoop()
onLoop(({ delta, elapsed }) => {
    if (shark.value) {
        // shark.value.scale.x = 10
        // shark.value.scale.z = 10
        // shark.value.scale.y = 10

        shark.value.rotation.z = offsetRotationZ.value + Math.sin(elapsed * 1.3) / 3;
        shark.value.position.y = offsetPositionY.value + Math.sin(elapsed * 1)
    }
})

</script>

<template>
    <!-- <TresCanvas clear-color='#0FA3B1'> -->
        <!-- <TresPerspectiveCamera :look-at="[0, 0, 0]" :position="[0, 2, 10]" /> -->
        <Suspense>
            <primitive ref="shark" :object="nodes.root" :position="[-offsetPositionX, 0, -1]" :rotation="[-1.8, 0, 5]" />
        </Suspense>
        <!-- <TresMesh receive-shadow :rotate-x="- Math.PI/2">
      <TresPlaneGeometry :args="[10, 10]" />
      <TresMeshStandardMaterial color="B5E2FA" />
    </TresMesh> -->
        <!-- <TresDirectionalLight :args="['white', 4]" :position="[5, 10, 5]" /> -->
        <!-- <TresHemisphereLight :args="['white', 'blue', 3]" :position="[5, 10, 5]" /> -->
    <!-- </TresCanvas> -->
</template>