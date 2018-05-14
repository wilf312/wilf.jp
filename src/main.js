// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import UA from 'woothee'

import App from './App'
import router from './router'
import store from './store'
import * as url from '@/util/url'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VTextField,
  VBtn,
  VRadioGroup,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VTextField,
    VBtn,
    VRadioGroup,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  }
})

store.state.ua.ua = UA.parse(navigator.userAgent)
store.state.common.dimension = {
  w: window.innerWidth,
  h: window.innerHeight
}

// httpの場合はhttpsに遷移
url.httpToHttps()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
