<script async setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useGLTF, useAnimations } from '@tresjs/cientos'
import { useRenderLoop } from '@tresjs/core'

const cat = shallowRef()

const { onLoop } = useRenderLoop()
onLoop(({ delta, elapsed }) => {
    if (cat.value) {
        cat.value.rotation.z = 3.3 + (elapsed * 1.3) / 3;
    }
})

const { scene, nodes, animations } = await useGLTF('/models/cat/scene.gltf', { draco: true })
const { actions } = useAnimations(animations, scene)

const currentAction = ref(actions.Animation)
currentAction.value.play()

</script>

<template>
        <Suspense>
            <primitive ref="cat" :scale="2" :object="nodes.root" :position="[0, 0, 0]" :rotation="[0.1, -3.15, 3.25]" />
        </Suspense>
</template>