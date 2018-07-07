<template>
  <div class="aboutus-container">
    <div class="us-header-nav">
      <index-header></index-header>
      <index-navbar></index-navbar>
    </div>
    <page-pic></page-pic>
    <div class="us-content-container">
      <about-frame></about-frame>
      <!-- <div class="about-content-box">
        <div class="content-link-box">
          <about-us></about-us>
          <new-news></new-news>
          <contact-us></contact-us>
        </div>
        <div class="content-info-box">
          <router-view></router-view>
        </div>
      </div> -->
    </div>
    <index-company-info></index-company-info>
    <index-bottom></index-bottom>
    <div class="online-service-container">
      <!-- <index-online-service></index-online-service> -->
    </div>
    <div class="online-service-container"></div>
  </div>
</template>

<script>
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'aboutus')
const IndexNavbar = r => require.ensure([], () => r(require('@/components/IndexNavbar')), 'aboutus')
const PagePic = r => require.ensure([], () => r(require('@/components/PagePic')), 'aboutus')
const AboutFrame = r => require.ensure([], () => r(require('./components/AboutFrame')), 'aboutus')

const IndexCompanyInfo = r => require.ensure([], () => r(require('@/components/IndexCompanyInfo')), 'aboutus')
const IndexOnlineService = r => require.ensure([], () => r(require('@/components/IndexOnlineService')), 'aboutus')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'aboutus')
export default {
  components: {
    IndexHeader,
    IndexNavbar,
    PagePic,
    AboutFrame,
    IndexCompanyInfo,
    IndexOnlineService,
    IndexBottom
  },
  metaInfo: {
    title: '关于我们',
    meta: [
      { name: 'keywords', content: '关于我们,公司信息,联系方式,工作环境' }
    ]
  }

}
</script>

<style lang="less">
.aboutus-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0;
  background: white;
  .us-header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1px;
  }
  .us-content-container {
    max-width: 1200px;
    width: 90%;
    // height: 680px;
    box-sizing: border-box;
  }
  .online-service-container {
    z-index: 1;
    position: fixed;
    bottom: 50px;
    right: 0;
  }
}
</style>
