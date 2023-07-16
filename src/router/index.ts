import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Ethan Oz'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting
    // this generates a separate chunk (portfolio.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/PortfolioView.vue'),
    meta: {
      title: 'Ethan Oz - Portfolio'
    }
  },
  {
    path: '/medium',
    name: 'Medium',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/MediumView.vue'),

    meta: {
      title: 'Ethan Oz - Medium'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
