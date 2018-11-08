import mock from './mock/'
import api from '@/api'

const system = {
  login: data => {
    return api.post('auth', data)
    // return mock.system.login(data)
  }
}
export default system
