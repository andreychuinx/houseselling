import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import home from '@/components/home'
import houseDetail from '@/components/house/houseDetail'
import login from '@/components/login'
import account from '@/components/account'
Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  linkActiveClass : 'is-active',
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: home
    },
    {
      path : '/detail/:id',
      name : 'houseDetailPage',
      component: houseDetail,
      props : true
    },
    {
      path : '/login',
      name : 'loginPage',
      component: login
    },
    {
      path: '/account',
      name: 'accountPage',
      component: account,
      props: true
    }
  ]
})
