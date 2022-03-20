import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/discover",
  },
  {
    path: "/discover",
    component: () => import("../views/HomelyDiscover"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/rentals",
    component: () => import("../views/HomelyRentals"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/profiles",
    component: () => import("../views/HomelyProfiles"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/publishPlan/:id",
    component: () => import("../views/HomelyPublish"),
    meta: {
      keepAlive: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
