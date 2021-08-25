import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/home').default
    },
    {
      path: '/landingpage',
      name: 'landing-page',
      component: require('@/views/landingPage').default
    },
    {
      path: '/chat',
      name: 'chat',
      component: require('@/views/chat').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
