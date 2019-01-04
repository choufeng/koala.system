import * as types from '../mutation-types.js'
import { category } from '@/services'

const state = {
  topList: [],
  list: []
}

const getters = {
}

const actions = {
  getRootCategoryList: ({ commit, state }) => {
    return new Promise((resolve, reject) => {
      category.topList().then(result => {
        commit(types.GET_ROOT_CATEGORY_LIST, result)
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getCategoryTree: ({ commit, state }, id) => {
    return new Promise((resolve, reject) => {
      category.getTree(id).then(result => {
        commit(types.GET_CATEGORY_TREE, result)
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

const mutations = {
  [types.GET_ROOT_CATEGORY_LIST] (state, result) {
    state.topList = result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
