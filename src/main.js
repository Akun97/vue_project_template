import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import { get, post, put, del } from './api/axios'
import '_c/import'

Vue.config.productionTip = false;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$put = put;
Vue.prototype.$del = del;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
