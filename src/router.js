import ApartmentInfo from "./pages/ApartmentInfo.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import LoginPage from "./pages/Login.vue";

const routes = [
  {
    path: "/apartments/:id",
    component: ApartmentInfo,
    name: "apartmentInfo",
  },
  {
    path: "/",
    component: HomePage,
    name: "homePage",
  },

  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
