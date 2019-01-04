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
  },
  categoryMock: {
    topList: () => {
      return new Promise((resolve, reject) => {
        resolve([
          { label: 'A', value: 1 },
          { label: 'B', value: 2 },
          { label: 'C', value: 3 },
          { label: 'D', value: 4 }
        ])
      })
    }
  }
}
export default mock
