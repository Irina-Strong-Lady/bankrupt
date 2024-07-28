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
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: () => import('../admin/pages/UserProfile.vue')
    },
    {
      path: '/confidentials',
      name: 'confidentials',
      component: () => import('../pages/ConfidentialLayout.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../pages/404.vue')
    },
    { path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export default router
