import Vue from 'vue'
import Router from 'vue-router'
import Hana from 'pages/Hana'
import Profile from 'pages/Profile'
import Blog from 'pages/Blog'
import Draggable from 'pages/Draggable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog,
      meta: {
        title: 'Blog'
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      meta: {
        title: 'Profile'
      }
    },
    {
      path: '/Hana',
      name: 'Hana',
      component: Hana,
      meta: {
        title: 'hana'
      }
    },
    {
      path: '/Draggable',
      name: 'Draggable',
      component: Draggable,
      meta: {
        title: 'draggable test'
      }
    }
  ]
})
