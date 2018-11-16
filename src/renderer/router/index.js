import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import LoginPage from '@/components/LoginPage'
import ParaConf from '@/components/ParaConf'
import Search from '@/components/Search'
import Setting from '@/components/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'initial-page',
      component: require('@/components/InitialPsw').default
    },
    {
      path: '/home',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/logout',
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '/config',
      name: 'para-conf',
      component: ParaConf
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
