import api from '@/api'

const system = {
  login: data => {
    return new Promise((resolve, reject) => {
      api.post(`auth/login`, data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default system
