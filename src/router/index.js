import Vue from 'vue'
import Router from 'vue-router'
import client from './client'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: () => import('../components/HelloWorld.vue')
    // },
    ...client,
  ]
})
