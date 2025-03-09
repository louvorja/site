import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Download from "@/views/Download.vue";
import Contact from "@/views/Contact.vue";
import Donation from "@/views/Donation.vue";
import Dev from "@/views/Dev.vue";
import Help from "@/views/Help.vue";
import HelpItem from "@/views/HelpItem.vue";
import FAQ from "@/views/FAQ.vue";

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
    path: "/contato",
    name: "contact",
    component: Contact,
  },
  {
    path: "/doacao",
    name: "donation",
    component: Donation,
  },
  {
    path: "/ajuda",
    name: "help",
    component: Help,
  },
  {
    path: "/ajuda/:slug",
    name: "help-item",
    component: HelpItem,
    props: (route) => ({ slug: route.params.slug }),
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQ,
  },
  {
    path: "/dev",
    name: "dev",
    component: Dev,
  },
  {
    path: "/drive",
    name: "drive",
    beforeEnter(to, from, next) {
      window.location.href = import.meta.env.VITE_DRIVE_URL;
      next(false);
    },
  },
  {
    path: "/whatsapp",
    name: "whatsapp",
    beforeEnter(to, from, next) {
      window.location.href = import.meta.env.VITE_WHATSAPP_URL;
      next(false);
    },
  },
  {
    path: "/telegram",
    name: "telegram",
    beforeEnter(to, from, next) {
      window.location.href = import.meta.env.VITE_TELEGRAM_URL;
      next(false);
    },
  },
  {
    path: "/telegram-dev",
    name: "telegram-dev",
    beforeEnter(to, from, next) {
      window.location.href = import.meta.env.VITE_TELEGRAM_DEV_URL;
      next(false);
    },
  },
  {
    path: "/facebook",
    name: "facebook",
    beforeEnter(to, from, next) {
      window.location.href = import.meta.env.VITE_FACEBOOK_URL;
      next(false);
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL ?? "/"),
  routes,
});

export default router;
