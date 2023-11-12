import ApartmentInfo from "./pages/ApartmentInfo.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";

const routes = [
  {
    path: "/apartmentInfo",
    component: ApartmentInfo,
    name: "apartmentInfo",
  },
  {
    path: "/",
    component: HomePage,
    name: "homePage",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
