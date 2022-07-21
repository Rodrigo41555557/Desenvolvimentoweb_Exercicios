import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: () => import("../views/IndexView.vue"),
    },
    {
      path: "/livros",
      name: "livros",
      component: () => import("../views/LivrosView.vue"),
    },
    {
      path: "/compra",
      name: "compra",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CompraView.vue"),
    },
  ],
});

export default router;
