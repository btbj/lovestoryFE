<template>
  <div class="index-bottom">
    <div class="bottom-box">
      <div class="bottom-copyright">
        {{copyRightText}}
      </div>
      <div class="site-register-info">
        {{registerInfoText}}
      </div>
      <div class="bottom-technical-support">
        技术支持：谷多网络
      </div>
    </div>
  </div>
</template>

<script>
import siteService from '@/services/siteService'

export default {
  data () {
    return {
      siteInfo: []
    }
  },
  methods: {
    async getSiteInfo (id) {
      try {
        let res = await siteService.info({id})
        let array = res.data.info.map(item => {
          let {name, value, label} = item
          return {name, value, label}
        })
        // console.log(array)
        this.siteInfo = array
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  computed: {
    copyRightText () {
      return this.siteInfo[0] ? this.siteInfo[0].value : ''
    },
    registerInfoText () {
      return this.siteInfo[1] ? this.siteInfo[1].value : ''
    }
  },
  mounted: async function () {
    this.getSiteInfo([19, 20])
  }
}
</script>

<style lang="less">
.index-bottom {
  width: 100%;
  background-color: #F1356F;
  padding: 5px 0 0;
  .bottom-box {
    margin: auto;
    width: 90%;
    max-width: 1200px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    color: white;
    font-size: 14px;
    .bottom-copyright {
      margin-right: 25px;
      margin-bottom: 5px;
    }
    .site-register-info{
      flex: 1;
      min-width: 200px;
      text-align: left;
      margin-bottom: 5px;
    }
    .bottom-technical-support {
      margin-bottom: 5px;
    }
  }
}
</style>
