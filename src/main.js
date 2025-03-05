import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18nInstance } from "./i18n";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/css/font-awesome.min.css";
import "./assets/css/style.css";

import "./assets/js/jquery-3.2.1.min.js";

import "slicknav/dist/slicknav.min.css";
import "slicknav/dist/jquery.slicknav.min.js";

const app = createApp(App);
app.use(router);

createI18nInstance().then((i18n) => {
  app.use(i18n);
  app.mount("#app");
});
