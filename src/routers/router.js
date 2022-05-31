import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    props: true,
  },
  {
    path: "/UserLogin",
    name: "UserLogin",
    component: () => import("../views/Login/UserLogin.vue"),
    props: true,
  },
  {
    path: "/FormLogin",
    name: "FormLogin",
    component: () => import("../views/Login/FormLogin.vue"),
    props: true,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../views/Admin/Admin.vue"),
    props: true,
  },
  {
    path: "/Update",
    name: "Update",
    component: () => import("../views/Admin/Update.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
