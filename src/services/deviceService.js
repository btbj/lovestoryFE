import Api from '@/services/Api'
import Vue from 'vue'
const vm = new Vue()

export default {
  serviceURL: 'device/',

  info (credentials) {
    return Api.post((this.serviceURL + 'info'), credentials)
    // return Api.create().post((this.serviceURL + 'info'), credentials)
  },
  create (newInfo) {
    return Api.post((this.serviceURL + 'do_create'), newInfo)
    // return Api.create().post((this.serviceURL + 'do_create'), newInfo)
  },
  register (newInfo) {
    return Api.post((this.serviceURL + 'do_register_device'), newInfo)
    // return Api.create().post((this.serviceURL + 'do_register_device'), newInfo)
  },
  delete (credentials) {
    return Api.post((this.serviceURL + 'do_delete_device'), credentials)
    // return Api.create().post((this.serviceURL + 'do_delete_device'), credentials)
  },
  update (newInfo) {
    return Api.post((this.serviceURL + 'do_update'), newInfo)
    // return Api.create().post((this.serviceURL + 'do_update'), newInfo)
  },
  devices (token) {
    return Api.post((this.serviceURL + 'devices'), token)
    // return Api.create().post((this.serviceURL + 'devices'), token)
  },
  queryDevice (token) {
    return Api.post((this.serviceURL + 'query'), token)
    // return Api.create().post((this.serviceURL + 'query'), token)
  },
  getDeviceQR (sn) {
    return Api.serverBaseURL + this.serviceURL + 'get_qr?sn=' + sn
  },
  usageLogs (sn) {
    return Api.post((this.serviceURL + 'usage_logs'), sn)
    // return Api.create().post((this.serviceURL + 'usage_logs'), sn)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      vm.$message.error(data.message)
    }
  }
}
