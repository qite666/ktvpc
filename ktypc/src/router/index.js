import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/',
        redirect: '/index'
      },
      {
        path: '/index',
        name: 'Index',
        component: () => import('../components/Index.vue')
      },
      {
        path: '/aboutus',
        name: 'AboutUs',
        component: () => import('../components/AboutUs.vue')
      },
      {
        path: '/environmental',
        name: 'Environmental',
        component: () => import('../components/Environmental.vue')
      },
      {
        path: '/journalism',
        name: 'Journalism',
        component: () => import('../components/Journalism.vue')
      },
      {
        path: '/modelshow',
        name: 'ModelShow',
        component: () => import('../components/ModelShow.vue')
      },
      {
        path: '/newsdetails/:id',
        name: 'NewsDetails',
        component: () => import('../components/NewsDetails.vue')
      },
      {
        path: '/environmentaldetails/:id',
        name: 'EnvironmentalDetails',
        component: () => import('../components/EnvironmentalDetails.vue')
      },
      {
        path: '/modelshow2',
        name: 'ModelShow2',
        component: () => import('../components/ModelShow2.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
