import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/Home'
import Phones from './components/Phones.vue'
import Laptops from './components/Laptops.vue'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/phones',
      name: 'Phones',
      component: Phones
    },
    {
      path: '/laptops',
      name: 'Laptops',
      component: Laptops
    }
  ]
})

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
