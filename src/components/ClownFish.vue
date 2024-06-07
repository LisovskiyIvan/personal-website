<script async setup lang="ts">
import { useRenderLoop } from '@tresjs/core'
import { ref, shallowRef, watchEffect } from 'vue';
import { useGLTF, useAnimations } from '@tresjs/cientos'
import { useWindowSize } from '@vueuse/core'

const fish = shallowRef()

const offsetPositionX = ref(0)
const offsetPositionY = ref(0)
const offsetRotationY = ref(0)
watchEffect(() => {
    const { width } = useWindowSize()
    if (width.value < 650) {
        offsetPositionX.value = 0
        offsetPositionY.value = -2.3
        offsetRotationY.value = 0.3
    }
    else {
        offsetPositionX.value = width.value/500 - width.value/1700
        offsetPositionY.value = -1
        offsetRotationY.value = 0.6
    }
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
        fish.value.rotation.y = offsetRotationY.value + Math.sin(elapsed * 1.5) / 5;
        fish.value.position.y =  offsetPositionY.value + Math.sin(elapsed * 2) / 5
        fish.value.position.x = - offsetPositionX.value + Math.sin(elapsed * 1.3) / 5
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