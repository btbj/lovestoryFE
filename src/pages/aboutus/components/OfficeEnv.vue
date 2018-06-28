<template>
  <div class="about-company-intro-root">
    <div class="inner-item-box">
      <content-nav>
        <span slot="rightTitle">办公环境</span>
        <span slot="leftFirstTitle">首页></span>
        <span slot="leftSecondTitle">关于我们></span>
        <span slot="leftThirdTitle">办公环境</span>
      </content-nav>
      <div class="inner-item-content" v-html="contentInfo">
        <!-- {{contentInfo}} -->
      </div>
    </div>
  </div>
</template>

<script>
import siteService from '@/services/siteService'
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'aboutus')

export default {
  components: { ContentNav },
  data () {
    return {
      contentInfo: ''
    }
  },
  methods: {
    async getSiteInfo (id) {
      try {
        let res = await siteService.info({id})
        this.contentInfo = res.data.info.value
        // console.log(res)
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getSiteInfo(2)
  }
}
</script>

<style>

</style>
