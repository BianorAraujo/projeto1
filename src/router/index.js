import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PoliticasView from '../views/PoliticasView.vue'
import ImcView from '../views/Calculadora/ImcView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: AboutView
    },
    {
      path: '/politicas',
      name: 'politicas',
      component: PoliticasView
    },
    {
      path: '/calculadora/imc',
      name: 'imc',
      component: ImcView
    }
  ]
})

export default router
