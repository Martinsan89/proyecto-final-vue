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
  // {
  //   path: "/FormLogin",
  //   name: "FormLogin",
  //   component: () => import("../components/Login/FormLogin.vue"),
  //   props: true,
  // },
  {
    path: "/UsuarioView",
    name: "UsuarioView",
    component: () => import("../views/UsuarioView/UsuarioView.vue"),
    props: true,
  },
  {
    path: "/UsuarioCompras",
    name: "UsuarioCompras",
    component: () => import("../views/UsuarioView/UsuarioCompras.vue"),
    props: true,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../views/Admin/Admin.vue"),
    props: true,
  },
  {
    path: "/DataUsers",
    name: "DataUsers",
    component: () => import("../views/Admin/DataUsers.vue"),
    props: true,
  },
  {
    path: "/Update",
    name: "Update",
    component: () => import("../views/Admin/Update.vue"),
    props: true,
  },
  {
    path: "/Zapatilla",
    name: "Zapatilla",
    component: () => import("../views/Admin/Zapatilla.vue"),
    props: true,
  },
  {
    path: "/Delete",
    name: "Delete",
    component: () => import("../views/Admin/Delete.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
