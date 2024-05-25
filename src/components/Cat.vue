<script async setup lang="ts">
import { ref, shallowRef, watchEffect } from 'vue';
import { useGLTF, useAnimations } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'
import { useWindowSize } from '@vueuse/core'

let offset = ref(0)
watchEffect(() => {
    const { width } = useWindowSize()
    offset.value = width.value/850
    if (offset.value < 0.6) offset.value = 0.6
    if (offset.value > 2) offset.value = 2
})

const cat = shallowRef()

const { onLoop } = useRenderLoop()
onLoop(({ delta, elapsed }) => {
    if (cat.value) {
        cat.value.scale.x = offset.value
        cat.value.scale.z = offset.value
        cat.value.scale.y = offset.value
        cat.value.position.y = Math.sin(elapsed * 1.5)  / 5;
        cat.value.position.z = -3.3 + Math.sin(elapsed * 1.5) / 5;
    }
})

const { scene, nodes, animations } = await useGLTF('/models/cats/scene.gltf', { draco: true })
const { actions } = useAnimations(animations, scene)

const currentAction = ref(actions['Take 001'])
currentAction.value.play()

</script>

<template>
        <Suspense>
            <primitive ref="cat" :scale="1" :object="nodes.RootNode" :position="[0, 0, 0]" :rotation="[4.9, 0, 0]" />
        </Suspense>
</template>