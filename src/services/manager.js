import api from '@/api'
import { dissoc } from 'ramda'

const manager = {
  list: () => {
    return new Promise((resolve, reject) => {
      api.get('manager').then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  create: (data) => {
    return new Promise((resolve, reject) => {
      api.post(`manager`, data).then(res => {
        console.log('is this resolve')
        resolve(res)
      }).catch(err => {
        console.log('is this reject')
        reject(err)
      })
    })
  },
  update: (data) => {
    return new Promise((resolve, reject) => {
      api.put(`manager/${data.id}`, dissoc('id', data)).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      api.delete(`manager/${id}`).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default manager
