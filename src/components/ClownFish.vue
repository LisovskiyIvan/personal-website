<script async setup lang="ts">
import { useRenderLoop } from '@tresjs/core'
import { ref, shallowRef, watchEffect } from 'vue';
import { useGLTF, useAnimations } from '@tresjs/cientos'
import { useWindowSize } from '@vueuse/core'

const fish = shallowRef()

let offset = ref(0)
watchEffect(() => {
    const { width } = useWindowSize()
    if (width.value < 650) offset.value = 0
    else offset.value = width.value/500
})


const { scene, nodes, animations, materials } = await useGLTF('/models/clownfish/scene.gltf', { draco: true })
const { actions } = useAnimations(animations, scene)
const currentAction = ref(actions.swim)
const { onLoop } = useRenderLoop()
onLoop(({ delta, elapsed }) => {
    if (fish.value) {
        fish.value.scale.x = 0.1
        fish.value.scale.z = 0.1
        fish.value.scale.y = 0.1
        fish.value.rotation.z =  Math.sin(elapsed * 1.3) / 5;
        fish.value.rotation.y = 0.3 + Math.sin(elapsed * 1.5) / 5;
        fish.value.position.y = -1 + Math.sin(elapsed * 2) / 5
        fish.value.position.x = - offset.value + Math.sin(elapsed * 1.3) / 5
        currentAction.value.play()
        
    }
})
</script>

<template>
    <!-- <TresCanvas clear-color='#0FA3B1'> -->
        <!-- <TresPerspectiveCamera :look-at="[0, 0, 0]" :position="[0, 0, 100]" /> -->
        <Suspense>
            <primitive ref="fish" :object="nodes.RootNode" :position="[0, 0, 2]" :rotation="[0, 0.5, 0]" />
        </Suspense>
        <!-- <TresHemisphereLight :args="['white', 'blue', 3]" :position="[5, 10, 5]" /> -->
    <!-- </TresCanvas> -->
</template>