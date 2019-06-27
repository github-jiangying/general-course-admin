import Vue from 'vue'
import Router from 'vue-router'
import client from './client'
import admin from './admin'

Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   component: () => import('../components/HelloWorld.vue')
    // },
    ...client,
    ...admin,
    {
      path: '/login',
      name: 'login',
      component: () => import('../view/admin/login/index.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../components/errorPage/404.vue')
    },
    {
      path: '*',
      name: 'err',
      redirect: '404',
    },
  ]
})

export default router
