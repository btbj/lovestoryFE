import axios from 'axios'
import Vue from 'vue'
import router from '@/router'
import store from '@/store/store'
import config from '@/myconfig'

const vm = new Vue({router, store})
const Host = config.host
const Http = axios.create({
  baseUrl: Host
})

const get = (url, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await Http.get(Host + url, data)
      if (res.status === 200) {
        if (res.data.success) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      } else {
        reject(res)
      }
    } catch (error) {
      reject(error)
    }
  })
}
const post = (url, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await Http.post(Host + url, data)
      if (res.status === 200) {
        if (res.data.success) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      } else {
        reject(res)
      }
    } catch (error) {
      reject(error)
    }
  })
}
const handleTokenError = (message) => {
  if (store.getters.token) {
    store.dispatch('logout')
    vm.$alert(message, '请重新登录', {
      confirmButtonText: '确定',
      callback: () => {
        router.push({name: 'login'})
      }
    })
  } else {
    router.push({name: 'login'})
  }
}

export default {
  serverBaseURL: Host,
  post,
  get,

  // API基础错误处理方式
  handleError (res) {
    const errcode = res.error_code
    if (!errcode) {
      console.error('错误信息没有错误码: ', res)
      return null
    }
    // token已过期
    if (errcode === 101) {
      this.handleTokenError('登录信息已过期')
      return null
    }
    // token不存在
    if (errcode === 110) {
      this.handleTokenError('登录信息已失效')
      return null
    }
    // 没有预存的错误，则返回原数据包，交给具体Service内部处理
    return res
  },
  handleTokenError
}
