<script async setup lang="ts">
import { ref } from 'vue';
import { useGLTF, useAnimations } from '@tresjs/cientos'

const { scene, nodes, animations } = await useGLTF('/models/aquarium/scene.gltf', { draco: true })
const { actions } = useAnimations(animations, scene)

const currentAction = ref(actions.Animation)
currentAction.value.play()


</script>

<template>
        <Suspense>
            <primitive :scale="3" :object="nodes.root" :position="[-1, -0.7, 0]" :rotation="[4.75, 0, 0.3]" />
        </Suspense>
</template>