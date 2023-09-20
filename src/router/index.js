import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactPage.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
