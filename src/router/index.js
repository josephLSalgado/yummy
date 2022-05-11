import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CategoriesView from '@/views/CategoriesView.vue';
import RestaurantsView from '@/views/RestaurantsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categorias',
    name: 'categories',
    component: CategoriesView
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: RestaurantsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
