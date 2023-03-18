import { createRouter, createWebHistory } from 'vue-router'
import Counter from '../src/components/CounterApp.vue'
import NotFound from '../src/components/NotFound.vue'
import HomePage from '../src/components/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router