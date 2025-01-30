import { createRouter, createWebHistory } from "vue-router";
import Demo01 from "../components/Demo01.vue";
import Demo02 from "../components/Demo02.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Demo01,
    },
    {
      path: "/demo01",
      name: "demo01",
      component: Demo01,
    },
    {
      path: "/demo02",
      name: "demo02",
      component: Demo02,
    },
  ],
});

export default router;
