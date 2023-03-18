import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import CounterApp from '../components/CounterApp.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/counter', component: CounterApp },
  { path: '/:catchAll(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router