import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home – Justice Odoom' }
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'About – Justice Odoom' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/awards',
      name: 'awards',
      meta: { title: 'Awards – Justice Odoom' },
      component: () => import('../views/awards.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { title: 'Contact – Justice Odoom' },
      component: () => import('../views/contact.vue')
    },
    {
      path: '/research',
      name: 'research',
      meta: { title: 'Research – Justice Odoom' },
      component: () => import('../views/research.vue')
    },
    {
      path: '/service',
      name: 'service',
      meta: { title: 'Service – Justice Odoom' },
      component: () => import('../views/service.vue')
    },
    {
      path: '/education',
      name: 'education',
      meta: { title: 'Education – Justice Odoom' },
      component: () => import('../views/education.vue')
    },
    {
      path: '/newsfeed',
      name: 'newsfeed',
      meta: { title: 'Newsfeed – Justice Odoom' },
      component: () => import('../views/newsfeed.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      meta: { title: 'Courses – Justice Odoom' },
      component: () => import('../views/courses.vue')
    }
  ]
})

// update document title on navigation
router.afterEach((to) => {
  document.title = to.meta.title || 'Justice Odoom'
})

export default router
