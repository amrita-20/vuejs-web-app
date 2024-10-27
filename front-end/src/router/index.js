import { createRouter, createWebHistory } from 'vue-router'
import ShoppingCartPage from '@/pages/ShoppingCartPage.vue'
import ProductsPage from '@/pages/ProductsPage.vue'
import ProductDetailsPage from '@/pages/ProductDetailsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCartPage
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsPage
    },
    {
      path: '/products/:id',
      name: 'productDetails',
      component: ProductDetailsPage
    }
  ]
})

export default router
