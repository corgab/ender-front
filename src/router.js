import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import NotFound from './pages/404.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage }, // Example
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }, // Da tenere come ultimo

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
