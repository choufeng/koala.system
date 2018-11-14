import { Loading } from 'element-ui'

const loader = Loading.service({
  lock: true,
  text: '数据载入中',
  spinner: 'el-icon-loading',
  background: 'rgba(255, 255, 255, 0.7)'
})
const utils = {
  loading: {
    open: () => {
      return loader
    },
    close: () => {
      loader.close()
    }
  }
}

export default utils
