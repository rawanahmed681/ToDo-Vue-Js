import { createRouter, createWebHistory } from 'vue-router'

import ModalView from '../views/ModalView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Modal',
      name: 'ModalView',
      component: ModalView
    }
  ]
})

export default router
