<template>
  <div class="about-company-intro-root">
    <div class="inner-item-box">
      <content-nav>
        <span slot="rightTitle">公司介绍</span>
        <span slot="leftFirstTitle">首页></span>
        <span slot="leftSecondTitle">关于我们></span>
        <span slot="leftThirdTitle">公司介绍</span>
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
      contentInfo: '相亲相爱网是一个严肃认真的婚恋相亲网站，为具有中华人民共和国国籍的单身成年人士提供婚恋服务'
    }
  }
}
</script>

<style>

</style>
