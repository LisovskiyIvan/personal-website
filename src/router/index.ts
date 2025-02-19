import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatView from "../views/CatView.vue";
import ContactView from "../views/ContactView.vue";
import FishGame from "@/components/FishGame.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cat",
      name: "cat",
      component: CatView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/game",
      name: "game",
      component: FishGame,
    },
  ],
});

export default router;
