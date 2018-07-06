<template>
  <div class="index-header-root">
    <div class="info-box">
      <div class="logo" :style="`background-image: url('${siteLogo}');`"
        @click="$router.push('/')">
        <!-- <span class="text-logo">爱情故事</span> -->
        <!-- <img :src="siteLogo" style="width: 100%; height: 100%"> -->
      </div>
      <div class="info">
        <div class="info-row1">
          向会员提供，高品质，高效率
        </div>
        <div class="info-row2">
          高端相亲交友服务平台
        </div>
      </div>
      <div class="tel">
        <span class="icon-phone2 tel-icon"></span>
        <span class="tel-number">{{hotLine}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import imageService from '@/services/imageService'
import siteService from '@/services/siteService'

export default {
  data () {
    return {
      hotLine: ''
    }
  },
  methods: {
    async getSiteInfo (id) {
      try {
        let res = await siteService.info({id})
        this.hotLine = res.data.info.value
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  computed: {
    siteLogo () {
      return imageService.siteLogo
    }
  },
  mounted: async function () {
    this.getSiteInfo(12)
  }
}
</script>

<style lang="less">
.index-header-root{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 115px;
  background: white;
  .info-box{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 1200px;
    padding: 5px 0;
    padding-bottom: 5px;
    .logo {
      box-sizing: border-box;
      width: 200px;
      height: 70px;
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      // .text-logo{
      //   font-size: 50px;
      //   color: #F4336A;
      //   font-weight: bold;
      //   user-select: none;
      //   cursor: pointer;
      // }
    }
    .info {
      flex: 1;
      border-left: 1px solid lightgray;
      box-sizing: border-box;
      min-width: 200px;
      min-height: 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 20px;
      .info-row1 {
        font-size: 14px;
        color: gray;
        margin-bottom: 3px;
      }
      .info-row2 {
        color: #F4336A;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .tel {
      min-width: 200px;
      min-height: 70px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
      .tel-icon {
        width: 22px;
        height: 22px;
        line-height: 22px;
        font-size: 20px;
        background-color: #F4336A;
        margin-right: 10px;
        color: white;
      }
      .tel-number {
        font-size: 18px;
        color: #F4336A;
      }
    }
  }
}
</style>
