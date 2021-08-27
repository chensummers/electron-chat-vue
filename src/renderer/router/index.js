import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode:'history', //electron 不支持history
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: require('@/views/home').default
    // },
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/views/login').default
    },
    {
      path: '/info',
      name: 'info',
      component: require('@/views/info').default
    },
    // {
    //   path: '/landingpage',
    //   name: 'landing-page',
    //   component: require('@/views/landingPage').default
    // },
    {
      path: '/chat',
      name: 'chat',
      component: require('@/views/chat').default
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
