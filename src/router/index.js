import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Prices from '../pages/Prices.vue'
import Services from '../pages/Services.vue'
import Contacts from '../pages/Contacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },    
    {
      path: '/prices',
      name: 'prices',
      component: Prices
    },    
    {
      path: '/services',
      name: 'services',
      component: Services
    },    
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    }    
  ]
})

export default router
