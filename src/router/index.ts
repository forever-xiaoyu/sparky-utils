import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/directory',
      name: 'directory',
      component: () => import('../views/Directory/Directory.vue'),
    },
    {
      path: '/typeWriter',
      name: 'typeWriter',
      component: () => import('../views/TypeWriterDemo/index.vue'),
    },
  ],
})

export default router
