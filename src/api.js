import axios from 'axios'
import config from './config'
import qs from 'qs'
import { lt, indexOf, not, isNil } from 'ramda'
import localforage from 'localforage'

const statusList = {
  400: '请求错误',
  401: '未授权， 请登录',
  403: '拒绝访问',
  404: '请求地址出错',
  408: '请求超时',
  500: '服务器内部错误',
  501: '服务为实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持'
}

// 根据后端校验需要可修改这里的Authorization为其他属性

const $axios = (options) => {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      headers: {
        Authorization: ''
      }
    })
    instance.interceptors.request.use(
      async config => {
        const list = ['get', 'put', 'patch', 'delete']
        if (lt(0, indexOf(config.method.toLocaleLowerCase(), list))) {
          config.data = qs.stringify(config.data)
        }
        // 针对token做处理
        try {
          const token = await localforage.getItem('token')
          if (not(isNil(token))) {
            config.headers['Authorization'] = `Bearer ${token}`
          }
          return config
        } catch (err) {
          console.log('获取token出错', err)
          return config
        }
      },
      error => {
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          console.log('请求超时了')
        }
        const errorInfo = error.response
        console.log(errorInfo)
        if (errorInfo) {
          const errorStatus = errorInfo.status
          console.log('处理错误问题', errorStatus)
        }
        return Promise.reject(error)
      }
    )
    instance.interceptors.response.use(
      response => {
        return (response.data === undefined) ? response.request.responseText : response.data
      },
      err => {
        if (err && err.response.data) {
          err.message = err.response.data.message
        } else if (err && err.response) {
          err.message = statusList[err.response.status]
        }
        return Promise.reject(err)
      }
    )
    instance(options).then(res => resolve(res)).catch(err => reject(err))
  })
}

const api = {
  get: (url) => {
    console.log('test', url)
    return $axios({ url: url, method: 'get' })
  },
  post: (url, data) => {
    return $axios({ url: url, method: 'post', data: data })
  },
  put: (url, data) => {
    return $axios({ url: url, method: 'put', data: data })
  },
  patch: (url, data) => {
    return $axios({ url: url, method: 'patch', data: data })
  },
  delete: (url) => {
    return $axios({ url: url, method: 'delete' })
  },
  all: (data) => {
    return axios.all(data)
  }
}

export default api
