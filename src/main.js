import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router';
import {routes} from './router'
import {store} from './store/store'
import VueResource from 'vue-resource'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVueIcons);
const router = new VueRouter(
  {routes:routes}
);


new Vue({
  el: '#app',
  router:router,
  store,
  render: h => h(App)
})
