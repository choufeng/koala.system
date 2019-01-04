import Vue from 'vue'
import Vuex from 'vuex'
import group from './modules/group'
import manager from './modules/manager'
import category from './modules/category'

Vue.use(Vuex)
const debug = process.env.NODE_env !== 'production'
export default new Vuex.Store({
  modules: {
    group,
    manager,
    category
  },
  strict: debug
})
