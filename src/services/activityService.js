import Api from '@/services/Api'
import Vue from 'vue'
const vm = new Vue()

export default {
  serviceURL: 'activity/',

  activities (credentials) {
    return Api.post((this.serviceURL + 'activities'), credentials)
  },
  info (credentials) {
    return Api.post((this.serviceURL + 'info'), credentials)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      vm.$message.error(data.message)
    }
  }
}
