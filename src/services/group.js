import api from '@/api'
import { dissoc } from 'ramda'
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
  create: (data) => {
    return new Promise((resolve, reject) => {
      api.post('group', data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  update: (data) => {
    return new Promise((resolve, reject) => {
      api.put(`group/${data.id}`, dissoc('id', data)).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      api.delete(`group/${id}`).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default group
