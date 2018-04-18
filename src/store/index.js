import Vue from 'vue'
import Vuex from 'vuex'
import ua from './ua'
import common from './common'
import draggable from './draggable'

// Make vue aware of Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ua,
    draggable,
    common
  }
})
