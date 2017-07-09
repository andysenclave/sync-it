import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: require('@/components/Start')
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/components/Login')
    },
    {
      path: '/landing-page',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
