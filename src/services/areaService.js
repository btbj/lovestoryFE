import Api from '@/services/Api'
import Vue from 'vue'
const vm = new Vue()

export default {
  serviceURL: 'area/',

  info (credentials) {
    return Api.post((this.serviceURL + 'info'), credentials)
  },
  create (newInfo) {
    return Api.post((this.serviceURL + 'do_create'), newInfo)
  },
  delete (credentials) {
    return Api.post((this.serviceURL + 'do_delete'), credentials)
  },
  update (newInfo) {
    return Api.post((this.serviceURL + 'do_update'), newInfo)
  },
  areas (token) {
    return Api.post((this.serviceURL + 'areas'), token)
  },
  getAreas (token) {
    return Api.post((this.serviceURL + 'get_areas'), token)
  },
  devices (token) {
    return Api.post((this.serviceURL + 'devices'), token)
  },
  assign (info) {
    return Api.post((this.serviceURL + 'assign'), info)
  },
  revoke (info) {
    return Api.post((this.serviceURL + 'revoke'), info)
  },
  createOperator (info) {
    return Api.post((this.serviceURL + 'do_create_operator'), info)
  },
  operators (info) {
    return Api.post((this.serviceURL + 'operators'), info)
  },
  updateOperator (info) {
    return Api.post((this.serviceURL + 'do_update_operator'), info)
  },
  getOperatorAreas (info) {
    return Api.post((this.serviceURL + 'get_operator_areas'), info)
  },
  queryArea (token) {
    return Api.post((this.serviceURL + 'query'), token)
  },
  users (areaId) {
    return Api.post((this.serviceURL + 'users'), areaId)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      vm.$message.error(data.message)
    }
  }
}
