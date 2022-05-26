import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: () => import("../App.vue"),
  },
  {
    path: "/UserLogin",
    name: "UserLogin",
    component: () => import("../views/Login/UserLogin.vue"),
  },
  {
    path: "/FormLogin",
    name: "FormLogin",
    component: () => import("../views/Login/FormLogin.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
