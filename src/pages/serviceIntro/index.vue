<template>
  <div class="service-container">
    <div class="service-header-nav">
      <index-header></index-header>
      <index-navbar></index-navbar>
    </div>
    <page-pic></page-pic>
    <div class="service-content-container">
      <service-content></service-content>
    </div>
    <index-company-info></index-company-info>
    <index-bottom></index-bottom>
    <div class="online-service-container">
      <!-- <index-online-service></index-online-service> -->
    </div>
  </div>
</template>

<script>
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'story')
const IndexNavbar = r => require.ensure([], () => r(require('@/components/IndexNavbar')), 'story')
const PagePic = r => require.ensure([], () => r(require('@/components/PagePic')), 'story')
const ServiceContent = r => require.ensure([], () => r(require('./components/ServiceContent')), 'story')

const IndexCompanyInfo = r => require.ensure([], () => r(require('@/components/IndexCompanyInfo')), 'story')
const IndexOnlineService = r => require.ensure([], () => r(require('@/components/IndexOnlineService')), 'story')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'aboutus')
export default {
  components: {
    IndexHeader,
    IndexNavbar,
    PagePic,
    ServiceContent,
    IndexCompanyInfo,
    IndexOnlineService,
    IndexBottom
  },
  metaInfo: {
    title: '服务介绍',
    meta: [
      { name: 'keywords', content: '服务介绍' }
    ]
  }

}
</script>

<style lang="less">
.service-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0;
  background: white;
  .service-header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1px;
  }
  .service-content-container {
    width: 90%;
    max-width: 1200px;
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
