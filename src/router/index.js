import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainView from "../layout/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
   redirect:{name: 'dashboard'},
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: import("../views/LandingPage.vue"),
        },
       {
          path: "products",
          name: "products",
          component: () => import("../views/Products.vue"),
        },
      ],
    },
 
    {
      path: "/login",
      name: "login",
      component: () => import("../auth/Login.vue"),
    },
    
    {
      path: "/signUp",
      name: "signUp",
      component: () => import("../auth/SignUp.vue"),
    },


    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
