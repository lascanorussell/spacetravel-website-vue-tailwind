import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/destination',
      name: 'Destination',
      redirect: '/destination/moon',
      component: () => import('../views/DestinationView.vue'),
      children: [
        {
            path: ':slug',
            name: 'Planet',
            component: () => import('../views/Planets.vue')
        }
      ]
    },
    {
      path: '/crew',
      name: 'Crew',
      component: () => import('../views/CrewView.vue')
    },
    {
      path: '/technology',
      name: 'Technology',
      component: () => import('../views/TechnologyView.vue')
    }
  ]
})

export default router
