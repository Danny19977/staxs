import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from "aos";
import BootstrapVueNext from "bootstrap-vue-next";
import VueApexCharts from "vue3-apexcharts";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "swiper/css";
import "swiper/css/bundle";

import "./assets/custom.scss";

const app = createApp(App).use(router);
app.mixin({
  mounted() {
    AOS.init();
  },
});
app.use(BootstrapVueNext);
app.use(VueApexCharts);

app.mount('#app')