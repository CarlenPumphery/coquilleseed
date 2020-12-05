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
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  {
    path: "/construction",
    name: "Construction",
    component: () =>
      import(/* webpackChunkName: "construction" */ "../views/Construction.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
