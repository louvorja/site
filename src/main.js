import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { i18n } from "./i18n";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/css/font-awesome.min.css";
import "./assets/css/style.css";

import "./assets/js/jquery-3.2.1.min.js";

import "slicknav/dist/slicknav.min.css";
import "slicknav/dist/jquery.slicknav.min.js";

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
