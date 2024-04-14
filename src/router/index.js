import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },    
    {
      path: '/prices',
      name: 'prices',
      component: () => import('../pages/Prices.vue')
    },    
    {
      path: '/services',
      name: 'services',
      component: () => import('../pages/Services.vue')
    },    
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../pages/Contacts.vue')
    },    
    {
      path: '/admins',
      name: 'admins',
      component: () => import('../admin/Admin.vue')
    },    
    {
      path: '/tables',
      name: 'tables',
      component: () => import('../admin/pages/Table.vue')
    }    
  ]
})

export default router
