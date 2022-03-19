import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/discover",
  },
  {
    path: "/discover",
    component: () => import("../views/HomelyDiscover"),
  },
  {
    path: "/rentals",
    component: () => import("../views/HomelyRentals"),
  },
  {
    path: "/profiles",
    component: () => import("../views/HomelyProfiles"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
