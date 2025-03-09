import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Download from "@/views/Download.vue";
import Contact from "@/views/Contact.vue";
import Donation from "@/views/Donation.vue";

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
    component: Download,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/donation",
    name: "donation",
    component: Donation,
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
