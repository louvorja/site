import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/programa",
    name: "about",
    component: About,
  },
  {
    path: "/download",
    name: "download",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: About,
  },
  {
    path: "/donation",
    name: "donation",
    component: About,
  },
  {
    path: "/app",
    name: "app",
    component: About,
  },
  {
    path: "/help",
    name: "help",
    component: About,
  },
  {
    path: "/faq",
    name: "faq",
    component: About,
  },
  {
    path: "/drive",
    name: "drive",
    component: About,
  },
  {
    path: "/dev",
    name: "dev",
    component: About,
  },
  {
    path: "/facebook",
    name: "facebook",
    component: About,
  },
  {
    path: "/whatsapp",
    name: "whatsapp",
    component: About,
  },
  {
    path: "/telegram",
    name: "telegram",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL ?? "/"),
  routes,
});

export default router;
