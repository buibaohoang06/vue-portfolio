import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CertificationView from "../views/CertificationView.vue";
import ContactView from "../views/ContactView.vue";
import ErrorView from "../views/ErrorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/certs",
      name: "certificate",
      component: CertificationView
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/:pathMatch(.*)",
      name: "error",
      component: ErrorView
    }
  ],
});

export default router;
