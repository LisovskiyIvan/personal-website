import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatView from '../views/CatView.vue'
import ContactView from '../views/ContactView.vue'
import GameView from '../views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cat',
      name: 'cat',
      component: CatView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
