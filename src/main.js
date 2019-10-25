import Vue from 'vue'
import VueRouter from 'vue-router';

import App from '../src/App'
import routes from '../src/router/routes';

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
  

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
