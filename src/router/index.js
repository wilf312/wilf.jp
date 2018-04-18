import Vue from 'vue'
import Router from 'vue-router'
import Hana from 'pages/Hana'
import Profile from 'pages/Profile'
import Blog from 'pages/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Hana',
      name: 'Hana',
      component: Hana
    }
  ]
})
