import './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'

import App from './App.vue'
import router from './router'
import Tres from '@tresjs/core'

const app = createApp(App)

app.use(MotionPlugin)
app.use(createPinia())
app.use(router)
app.use(Tres)
app.use(Vue3Lottie)
app.mount('#app')
