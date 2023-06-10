import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile')

  },
  {
    path: '/rule',
    name: 'rule',
    component: () => import('@/views/Rule')
  },
  {
    path: '/result/:goodsId',
    name: 'result',
    component: () => import('@/views/Result')
  },
  {
    path: '/detail/:goodsId',
    name: 'detail',
    component: () => import('@/views/Detail'),
    beforeRouteUpdate :(to,from,next)=>{}
  }
  // {
  //   path: '*',
  //   name: '404',
  //   component:() => import('@/views/Home')
  // }
]

const router = new VueRouter({
  routes:routes,
  mode: 'hash',
  // publicPath: './'
})

export default router
