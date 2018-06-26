import Api from '@/services/Api'
import Vue from 'vue'
const vm = new Vue()

export default {
  serviceURL: 'role/',
  roles (token) {
    return Api.post((this.serviceURL + 'roles'), token)
    // return Api.create().post((this.serviceURL + 'roles'), token)
  },
  create (newInfo) {
    return Api.post((this.serviceURL + 'do_create'), newInfo)
    // return Api.create().post((this.serviceURL + 'do_create'), newInfo)
  },
  delete (newInfo) {
    return Api.post((this.serviceURL + 'do_delete'), newInfo)
    // return Api.create().post((this.serviceURL + 'do_delete'), newInfo)
  },
  update (newInfo) {
    return Api.post((this.serviceURL + 'do_update'), newInfo)
    // return Api.create().post((this.serviceURL + 'do_update'), newInfo)
  },
  auths (newInfo) {
    return Api.post((this.serviceURL + 'auths'), newInfo)
    // return Api.create().post((this.serviceURL + 'auths'), newInfo)
  },
  setAuth (newInfo) {
    return Api.post((this.serviceURL + 'set_auth'), newInfo)
    // return Api.create().post((this.serviceURL + 'set_auth'), newInfo)
  },
  menus (newInfo) {
    return Api.post((this.serviceURL + 'menus'), newInfo)
    // return Api.create().post((this.serviceURL + 'menus'), newInfo)
  },
  setMenu (newInfo) {
    return Api.post((this.serviceURL + 'set_menu'), newInfo)
    // return Api.create().post((this.serviceURL + 'set_menu'), newInfo)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      vm.$message.error(data.message)
    }
  }
}
