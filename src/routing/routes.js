import Router from 'vue-router'
import Home from '../components/Home'
import Phones from '../components/Phones.vue'
import Laptops from '../components/Laptops.vue'
import TV from '../components/TV.vue'

export default new Router({
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
      },
      {
        path: '/tv',
        name: 'TV',
        component: TV
      }
    ]
  })