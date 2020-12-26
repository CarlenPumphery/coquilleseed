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
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue")
  },
  {
    path: "/signin",
    name: "Signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Signin.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
