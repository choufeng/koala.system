import mock from './mock/'
const test = {
  login: (data) => {
    return mock.system.login(data)
  }
}
export default test
