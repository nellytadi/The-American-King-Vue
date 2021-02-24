import Vue from 'vue/dist/vue.js';
import router from '@/routes.js'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import App from "@/App";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import '@/assets/css/style.css';


import 'font-awesome/css/font-awesome.min.css';

Vue.component('navigation', Navigation);
Vue.component('footer-view', Footer);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

