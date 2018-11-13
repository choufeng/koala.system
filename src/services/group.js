import api from '@/api'
import mock from './mock'
const group = {
  list: () => {
    return new Promise((resolve, reject) => {
      api.get('group').then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  add: (data) => {
    return new Promise((resolve, reject) => {
      api.post('group', data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  edit: (id, data) => {
    return api.put(`group/${id}`, data)
  },
  delete: (id) => {
    return api.delete(`group/${id}`)
  }
}
export default group
