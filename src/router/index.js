import Vue from 'vue'
import Router from 'vue-router'
import Hana from 'pages/Hana'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hana',
      component: Hana
    }
  ]
})
