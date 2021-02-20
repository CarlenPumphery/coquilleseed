import Vue from "vue";
import VueRouter from "vue-router";
import Hero from "../views/Hero.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hero",
    component: Hero
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/cancel",
    name: "Cancel",
    component: () => import(/* webpackChunkName: "home" */ "../views/Cancel.vue")
  },
  {
    path: "/thankyou",
    name: "ThankYou",
    component: () => import(/* webpackChunkName: "thankyou" */ "../views/ThankYou.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
