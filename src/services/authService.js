import Api from '@/services/Api'
import Vue from 'vue'
const vm = new Vue()

export default {
  serviceURL: 'auth/',

  auths (credentials) {
    return Api.post((this.serviceURL + 'auths'), credentials)
    // return Api.create().post((this.serviceURL + 'auths'), credentials)
  },
  create (newInfo) {
    return Api.post((this.serviceURL + 'do_create'), newInfo)
    // return Api.create().post((this.serviceURL + 'do_create'), newInfo)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      vm.$message.error(data.message)
    }
  }
}
