import * as types from '../mutation-types'
import { group } from '@/services'
import { update, remove, append } from 'ramda'
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
  },
  setGroupItem({ commit, state }, data ) {
    commit(types.SET_GROUP_ITEM, {
      index: data.index,
      item: data.item
    })
  },
  deleteGroupItem({ commit, state }, data) {
    console.log('data')
     commit(types.DELETE_GROUP_ITEM, {
       index: data
     })
  },
  addGroupItem({ commit, state }, data) {
    commit(types.ADD_GROUP_ITEM, data)
  }
}

const mutations = {
  [types.GET_GROUP_LIST_SUCCESS] (state, result) {
    state.list = result
  },
  [types.GET_GROUP_LIST_FAILURE] (state, err) {
    state.err = err
  },
  [types.SET_GROUP_ITEM] (state, data) {
    state.list = update(data.index, data.item, state.list)
  },
  [types.DELETE_GROUP_ITEM] (state, data) {
    state.list = remove(data.index, 1, state.list)
  },
  [types.ADD_GROUP_ITEM] (state, data) {
    state.list = append(data, state.list)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
