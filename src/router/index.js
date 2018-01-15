import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import home from '@/components/home'
import houseDetail from '@/components/house/houseDetail'
import login from '@/components/login'
import account from '@/components/account'
import addHouse from '@/components/account/addhouse'
import editHouse from '@/components/account/edithouse'
import search from '@/components/search'
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
      // props: true,
      children:[
        {
          path: 'addhouse',
          name: 'addhouse',
          component: addHouse
        },
        {
          path: ':id/edithouse',
          name: 'edithouse',
          component: editHouse
        }
      ]
    },
    {
      path: '/search',
      name: 'searchPage',
      component: search
    }
  ]
})
