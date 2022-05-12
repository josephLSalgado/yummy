import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CategoriesView from '@/views/CategoriesView.vue';
import RestaurantsView from '@/views/RestaurantsView.vue';
import ItemsView from '@/views/ItemsView.vue';

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
    path: '/proximamente',
    name: 'proximamente',
    component: RestaurantsView
  },
  {
    path: '/fastfood',
    name: 'comidarapida',
    component: ItemsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
