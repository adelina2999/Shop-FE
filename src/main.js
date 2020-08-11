import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routing/routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
