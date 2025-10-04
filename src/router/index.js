import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    redirect: '/home',
    name: 'MainLayout',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'HomeView',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: '/my-projects',
        name: 'MyProjectsView',
        component: () => import('@/views/MyProjectsView.vue'),
      },

      {
        path: '/about-me',
        name: 'AboutMeView',
        component: () => import('@/views/AboutMeView.vue'),
      },

      {
        path: '/contact',
        name: 'ContactView',
        component: () => import('@/views/ContactView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'AdminLayout',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
