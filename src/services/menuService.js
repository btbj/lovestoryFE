import Api from '@/services/Api'
import Vue from 'vue'
const vm = new Vue()

export default {
  serviceURL: 'menu/',

  menus (credentials) {
    return Api.post((this.serviceURL + 'menus'), credentials)
    // return Api.create().post((this.serviceURL + 'menus'), credentials)
  },
  create (newInfo) {
    return Api.post((this.serviceURL + 'do_create'), newInfo)
    // return Api.create().post((this.serviceURL + 'do_create'), newInfo)
  },
  update (newInfo) {
    return Api.post((this.serviceURL + 'do_update'), newInfo)
    // return Api.create().post((this.serviceURL + 'do_update'), newInfo)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      vm.$message.error(data.message)
    }
  }
}
