import Vue from "vue";
import VueRouter from "vue-router";
// import Route1 from "../views/route1/Route1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Route1",
    name: "Route1",
    component: () => import("../views/route1/Route1.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
