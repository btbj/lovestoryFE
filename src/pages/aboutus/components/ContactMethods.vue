<template>
  <div class="about-company-intro-root">
    <div class="inner-item-box">
      <content-nav>
        <span slot="rightTitle">联系方式</span>
        <span slot="leftFirstTitle">首页></span>
        <span slot="leftSecondTitle">关于我们></span>
        <span slot="leftThirdTitle">联系方式</span>
      </content-nav>
      <div class="inner-item-content">
        {{contentInfo}}
      </div>
    </div>
  </div>
</template>

<script>
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'aboutus')

export default {
  components: { ContentNav },
  data () {
    return {
      contentInfo: '相亲相爱网联系方式联系方式联系方式联系方式联系方式联系方式联系方式联系方式联系方式联系方式联系方式联系方式'
    }
  }
}
</script>

<style>

</style>
