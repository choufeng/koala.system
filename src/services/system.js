import api from '@/api'

const system = {
  login: data => {
    return api.post('auth', data)
  }
}
export default system
