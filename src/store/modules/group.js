import * as types from '../mutation-types'
import { group } from '@/services'
import { update, remove, append } from 'ramda'
const state = {
  list: [],
  dialogStatus: false,
  modal: {
    name: '',
    description: ''
  },
  editIndex: null
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
  setGroupModal ({ commit, state }, data) {
    commit(types.SET_GROUP_MODAL, data)
  },
  setEditIndex ({ commit, state }, data) {
    commit(types.SET_EDIT_INDEX, data)
  },
  clearGroupModal ({ commit, state }) {
    commit(types.CLEAR_GROUP_MODAL)
  },
  setGroupItem ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      group.update(data.item).then(res => {
        console.log('state actions update success', data)
        commit(types.SET_GROUP_ITEM, data)
        resolve(res)
      }).catch(err => {
        console.error('update group item err:', err)
        reject(err)
      })
    })
  },
  deleteGroupItem ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      group.delete(data.id).then(res => {
        console.log('delete group item success', res)
        commit(types.DELETE_GROUP_ITEM, {
          index: data.index
        })
        resolve(res)
      }).catch(err => {
        console.log('delete group item error', err)
        reject(err)
      })
    })
  },
  addGroupItem ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      group.create(data).then(res => {
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
  [types.SET_EDIT_INDEX] (state, index) {
    state.editIndex = index
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
  },
  [types.SET_GROUP_MODAL] (state, data) {
    state.modal = data
  },
  [types.CLEAR_GROUP_MODAL] (state) {
    state.modal = {
      name: '',
      description: ''
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
