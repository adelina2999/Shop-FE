import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
