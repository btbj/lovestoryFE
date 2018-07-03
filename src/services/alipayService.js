import Api from '@/services/Api'
import Vue from 'vue'
const vm = new Vue()

export default {
  serviceURL: 'alipay/',
  getAlipayUrl (token) {
    return Api.post((this.serviceURL + 'get_alipay_url'), token)
  },
  alipayToPagePay (token) {
    return (this.serviceURL + 'alipay_to_page_pay?token=' + token)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      vm.$message.error(data.message)
    }
  }
}
