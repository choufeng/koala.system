import api from '@/api'

const manager = {
  list: () => {
    return new Promise((resolve, reject) => {
      api.get('manager').then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default manager
