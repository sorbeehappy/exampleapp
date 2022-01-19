import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import Cleave from "vue-cleave-component";

require('./bootstrap');

const app = createApp(App);
app.use(router);
app.use(Cleave);
app.mount("#app");
