<template>
  <div class="home-online-service">
    <div class="online-service-label" @click="hidden = !hidden">
      <span>红娘牵线</span>
      <span class="icon-message" style="margin-top: 5px"></span>
    </div>
    <div class="online-service-box" v-show="!hidden">
      <div class="qq-box">
        <div class="qq-label">QQ咨询</div>
        <div class="qq-item" style="border-bottom: 1px solid lightgrey">
          <span style="color: rgb(132, 218, 240);">沈老师：</span>
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1014180992&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:1014180992:52" alt="aaa" title="aaa"/></a>
        </div>
        <div class="qq-item">
          <span style="color: rgb(132, 218, 240);">马老师：</span>
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1014180992&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:1014180992:52" alt="aaa" title="aaa"/></a>
        </div>
      </div>
      <div class="tel-box">
        <span class="icon-phone_in_talk phone-icon"></span>
        <span>4000-****-****</span>
      </div>
      <div class="wechat-box">
        <div class="wechat-label">关注微信</div>
        <div class="wechat-qrcode" v-if="wechatQR">
          <img :src="wechatQR" class="img-style">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import siteService from '@/services/siteService'

export default {
  data () {
    return {
      hidden: true,
      wechatQR: null
    }
  },
  methods: {
    async getQRCode () {
      try {
        let res = await siteService.info({id: 16})
        this.wechatQR = res.data.info.url
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getQRCode()
  }
}
</script>

<style lang="less" scoped>
.home-online-service {
  position: fixed;
  right: 0;
  bottom: 100px;
  z-index: 100000;
  width: 160px;
  height: 300px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  .online-service-label {
    margin-top: 20px;
    width: 30px;
    height: 120px;
    text-align: center;
    background-color: #F1356F;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .online-service-box {
    background-color: white;
    width: 130px;
    height: 100%;
    border: 2px solid #F1356F;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .qq-box {
      width: 100%;
      height: 125px;
      border-bottom: 2px solid #F1356F;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px;
      .qq-label {
        width: 100%;
        height: 30px;
        color: #EF4279;
        border-bottom: 1px solid #FFCCCC;
        margin-bottom: 3px;
      }
      .qq-item {
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .qq-icon {
          color: rgb(132, 218, 240);
          font-size: 20px;
          margin-right: 10px;
        }
      }
    }
    .tel-box {
      width: 100%;
      height: 45px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      .phone-icon {
        color: #F1356F;
        font-size: 20px;
        margin-right: 5px;
      }
    }
    .wechat-box {
      width: 100%;
      height: 125px;
      border-top: 2px solid #F1356F;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px;
      .wechat-label {
        width: 100%;
        height: 30px;
        color: #EF4279;
        border-bottom: 1px solid #FFCCCC;
        margin-bottom: 5px;
      }
      .wechat-qrcode {
        width: 80px;
        height: 80px;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .img-style {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}

</style>
