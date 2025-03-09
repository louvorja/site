import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18nInstance } from "./i18n";

import "./assets/js/jquery-3.2.1.min.js";
window.$ = $;
window.jQuery = $;

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/css/font-awesome.min.css";
import "./assets/css/style.css";

import "./assets/css/slicknav.css";
import "./assets/js/jquery.slicknav.js";

const app = createApp(App);
app.use(router);

createI18nInstance().then((i18n) => {
  app.use(i18n);
  app.mount("#app");
});
