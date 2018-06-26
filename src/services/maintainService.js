import Api from '@/services/Api'
import Vue from 'vue'
const vm = new Vue()

export default {
  serviceURL: 'maintain/',

  deviceErrors (credentials) {
    return Api.post((this.serviceURL + 'device_errors'), credentials)
  },
  deleteError (id) {
    return Api.post((this.serviceURL + 'do_delete_error'), id)
  },
  getErrorMaintainers (id) {
    return Api.post((this.serviceURL + 'get_error_maintainers'), id)
  },
  createMaintainer (credentials) {
    return Api.post((this.serviceURL + 'do_create_maintainer'), credentials)
  },
  maintainers (credentials) {
    return Api.post((this.serviceURL + 'maintainers'), credentials)
  },
  addCompany (credentials) {
    return Api.post((this.serviceURL + 'add_company'), credentials)
  },
  companies (credentials) {
    return Api.post((this.serviceURL + 'companies'), credentials)
  },
  updateCompany (credentials) {
    return Api.post((this.serviceURL + 'do_update_company'), credentials)
  },
  queryCompany (credentials) {
    return Api.post((this.serviceURL + 'query_company'), credentials)
  },
  deleteCompany (id) {
    return Api.post((this.serviceURL + 'do_delete_company'), id)
  },
  deleteMaintainer (id) {
    return Api.post((this.serviceURL + 'do_delete'), id)
  },
  updateMaintainer (id) {
    return Api.post((this.serviceURL + 'do_update'), id)
  },
  getMaintainLogs (errorId) {
    return Api.post((this.serviceURL + 'get_maintain_logs'), errorId)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      vm.$message.error(data.message)
    }
  }
}
