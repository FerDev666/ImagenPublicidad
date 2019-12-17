import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: () => import('../views/Catalogue.vue')
  },
  {
    path: '/catalogue-ploter',
    name: 'catalogue-ploter',
    component: () => import('../views/CataloguePloter.vue')
  },
  {
    path: '/impresion-digital',
    name: 'impresion',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: 'esmerilado',
        name: 'Esmerilado',
        component: () => import('../views/Products/Impresion/Esmerilado.vue')
      },
      {
        path: 'brilloso',
        name: 'Brilloso',
        component: () => import('../views/Products/Impresion/Brilloso.vue')
      },
      {
        path: 'pared',
        name: 'Pared',
        component: () => import('../views/Products/Impresion/Pared.vue')
      },
      {
        path: 'piso',
        name: 'Piso',
        component: () => import('../views/Products/Impresion/Piso.vue')
      },
      {
        path: 'microperforado',
        name: 'Microperforado',
        component: () => import('../views/Products/Impresion/Microperforado.vue')
      },
      {
        path: 'bastidor',
        name: 'Bastidor',
        component: () => import('../views/Products/Impresion/Bastidor.vue')
      },
      {
        path: 'caja-de-luz',
        name: 'CajaLuz',
        component: () => import('../views/Products/Impresion/CajaLuz.vue')
      },
      {
        path: 'corporeo',
        name: 'Corporeo',
        component: () => import('../views/Products/Impresion/Corporeo.vue')
      },
      {
        path: 'señaletica',
        name: 'Señaletica',
        component: () => import('../views/Products/Impresion/Señalitica.vue')
      },
    ]
  },
  {
    path: '/displays',
    name: 'displays',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: 'rollers',
        name: 'Rollers',
        component: () => import('../views/Products/Displays/Rollers.vue')
      },
      {
        path: 'mesas',
        name: 'Mesas',
        component: () => import('../views/Products/Displays/Mesas.vue')
      },
      {
        path: 'backpanel',
        name: 'BackPanel',
        component: () => import('../views/Products/Displays/BackPanel.vue')
      },
      {
        path: 'router',
        name: 'Router',
        component: () => import('../views/Products/Displays/Router.vue')
      },
      {
        path: 'muebles',
        name: 'Muebles',
        component: () => import('../views/Products/Displays/Muebles.vue')
      },
      {
        path: 'stands',
        name: 'Stands',
        component: () => import('../views/Products/Displays/Stands.vue')
      },
    ]
  },
  {
    path: '/vallas',
    name: 'vallas',
    component: () => import('../views/Products/Vallas/Vallas.vue')
  },
  {
    path: '/:slug',
    name: 'post',
    component: () => import('../views/Post.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeResolve((to, from, next) => {
//   if (to.name) {
//       store.dispatch('showLoader', true)
//   }
//   next()
// })

// router.afterEach((to, from) => {
//   setTimeout( () => store.dispatch('showLoader', false), 700);
// })

export default router
