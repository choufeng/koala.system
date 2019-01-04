import api from '@/api'

const category = {
  topList: () => {
    return new Promise((resolve, reject) => {
      api.get(`category/roots`).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getTree: (id) => {
    return new Promise((resolve, reject) => {
      api.get(`category/${id}`).then(result => {
          resolve(result)
        }).catch(err => {
          reject(err)
      })
    })
  }
}

export default category
