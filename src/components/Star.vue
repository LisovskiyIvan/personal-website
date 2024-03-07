<script async setup lang="ts">
import { useRenderLoop, ThreeElement } from '@tresjs/core'
import { shallowRef } from 'vue';

const fish = shallowRef()

import { useGLTF, useFBX } from '@tresjs/cientos'

const model = await useFBX('/models/fish/fishHologram.fbx')
// const { scene, nodes, animations, materials } = await useGLTF('/models/aquarium/scene.gltf', { draco: true })
const { onLoop } = useRenderLoop()
onLoop(({ delta, elapsed }) => {
    if (fish.value) {
        model.animations[0].tracks
        // shark.value.rotation.z += delta;
        // fish.value.rotation.y = -10.6 + Math.sin(elapsed * 1.3) / 3;
        // fish.value.position.y = Math.sin(elapsed * 1)

    }
})
console.log(model)
</script>

<template>
    <TresCanvas clear-color='#0FA3B1'>
        <TresPerspectiveCamera :look-at="[0, 0, 0]" :position="[0, 2, 100]" />
        <Suspense>
            <primitive ref="fish" :object="model" :position="[0, 0, 0]" :rotation="[0, 0, 0]" />
        </Suspense>
        <!-- <TresMesh receive-shadow :rotate-x="- Math.PI/2">
      <TresPlaneGeometry :args="[10, 10]" />
      <TresMeshStandardMaterial color="B5E2FA" />
    </TresMesh> -->
        <!-- <TresDirectionalLight :args="['white', 4]" :position="[5, 10, 5]" /> -->
        <TresHemisphereLight :args="['white', 'blue', 3]" :position="[5, 10, 5]" />
    </TresCanvas>
</template>const const const const