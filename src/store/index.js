import Vue from 'vue'
import Vuex from 'vuex'
import group from './modules/group'

Vue.use(Vuex)
const debug = process.env.NODE_env !== 'production'
export default new Vuex.Store({
  modules: {
    group
  },
  strict: debug
})
