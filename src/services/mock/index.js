const mock = {
  system: {
    login: data => {
      return new Promise((resolve, reject) => {
        resolve({
          token: 'xxxxxxxxxxxxxxxxxxxxx',
          name: data.username
        })
      })
    }
  }
}
export default mock
