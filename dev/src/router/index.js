import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/awards',
      name: 'awards',
      component: () => import('../views/awards.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('../views/research.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/service.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/education.vue')
    },
    {
      path: '/newsfeed',
      name: 'newsfeed',
      component: () => import('../views/newsfeed.vue')
    }
  ]
})

export default router
