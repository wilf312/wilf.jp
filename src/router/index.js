import Vue from 'vue'
import Router from 'vue-router'
import Hana from 'pages/Hana'
import Profile from 'pages/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
