import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Draw from '../views/Draw.vue'
import Loading from '../views/Loading.vue'
import Result from '../views/Result.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/draw', component: Draw },
  { path: '/loading', component: Loading },
  { path: '/result', component: Result }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router