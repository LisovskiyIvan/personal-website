<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
* {
  scroll-behavior: smooth;
}
.text {
  font-family: "Golos Text", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.heading {
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
}

.emoji {
  font-family: "Noto Emoji", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
