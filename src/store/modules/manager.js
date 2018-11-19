import * as types from '../mutation-types'
import { manager } from '@/services'
import { update, remove } from 'ramda'
const state = {
  list: []
}

const getters = {
}

const actions = {
  getManagerList ({ commit, state }) {
    return new Promise((resolve, reject) => {
      manager.list().then(result => {
        commit(types.GET_MANAGER_LIST, result)
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  setManagerItem ({ commit, state }, data) {
    console.log('this is set')
    return new Promise((resolve, reject) => {
      manager.update(data.item).then(result => {
        commit(types.SET_MANAGER_ITEM, data)
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  deleteManagerItem ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      manager.delete(data.id).then(result => {
        commit(types.DELETE_MANAGER_ITEM, data)
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  addManagerItem ({ commit, state }, data) {
    console.log('this is add', data)
    return new Promise((resolve, reject) => {
      manager.create(data).then(result => {
        console.log('is this state resolve', result)
        resolve(result)
      }).catch(err => {
        console.log('is this state reject')
        reject(err)
      })
    })
  }
}

const mutations = {
  [types.GET_MANAGER_LIST] (state, list) {
    state.list = list
  },
  [types.SET_MANAGER_ITEM] (state, data) {
    state.list = update(data.index, data.item, state.list)
  },
  [types.DELETE_MANAGER_ITEM] (state, data) {
    state.list = remove(data.index, 1, state.list)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
