import * as types from '../mutation-types'
import { group } from '@/services'
const state = {
  list: []
}

const getters = {}

const actions = {
  getGroupList ({ commit, state }) {
    return new Promise((resolve, reject) => {
      group.list().then(result => {
        commit(types.GET_GROUP_LIST_SUCCESS, result)
        resolve(result)
      }).catch(err => {
        commit(types.GET_GROUP_LIST_FAILURE, err)
        reject(err)
      })
    })
  }
}

const mutations = {
  [types.GET_GROUP_LIST_SUCCESS] (state, result) {
    state.list = result
  },
  [types.GET_GROUP_LIST_FAILURE] (state, err) {
    state.err = err
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
