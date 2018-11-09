import api from '@/api'
import mock from './mock'
const group = {
  list: () => {
    return new Promise(async (resolve, reject) => {
      api.get('group').then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  add: (data) => {
    return mock.system.login()
    // return api.post('group', data)
  },
  edit: (id, data) => {
    return api.put(`group/${id}`, data)
  },
  delete: (id) => {
    return api.delete(`group/${id}`)
  }
}
export default group
