import * as types from '../mutation-types'
import { group } from '@/services'
import { update, remove, append } from 'ramda'
const state = {
  list: [],
  dialogStatus: false
}

const getters = {}

const actions = {
  getGroupList ({ commit, state}) {
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
  setGroupItem ({ commit, state }, data ) {
    commit(types.SET_GROUP_ITEM, {
      index: data.index,
      item: data.item
    })
  },
  deleteGroupItem ({ commit, state }, data) {
     commit(types.DELETE_GROUP_ITEM, {
       index: data
     })
  },
  addGroupItem ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      group.add(data).then(res => {
        console.log('state actions success', res)
        resolve(res)
      }).catch(err => {
        console.error('add group item err:', err)
        reject(err)
      })
    })
  },
  openGroupDialog ({ commit, state }) {
    commit(types.OPEN_GROUP_DIALOG)
  },
  closeGroupDialog ({ commit, state }) {
    commit(types.CLOSE_GROUP_DIALOG)
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
  },
  [types.OPEN_GROUP_DIALOG] (state, data) {
    state.dialogStatus = true
  },
  [types.CLOSE_GROUP_DIALOG] (state, data) {
    state.dialogStatus = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
