<template>
  <div class="news-container">
    <div class="news-header-nav">
      <index-header></index-header>
      <index-navbar></index-navbar>
    </div>
    <page-pic></page-pic>
    <div class="news-content-container">
      <news-content></news-content>
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
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'news')
const IndexNavbar = r => require.ensure([], () => r(require('@/components/IndexNavbar')), 'news')
const PagePic = r => require.ensure([], () => r(require('@/components/PagePic')), 'news')
const NewsContent = r => require.ensure([], () => r(require('./components/NewsContent')), 'news')

const IndexCompanyInfo = r => require.ensure([], () => r(require('@/components/IndexCompanyInfo')), 'news')
const IndexOnlineService = r => require.ensure([], () => r(require('@/components/IndexOnlineService')), 'news')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'aboutus')
export default {
  components: {
    IndexHeader,
    IndexNavbar,
    PagePic,
    NewsContent,
    IndexCompanyInfo,
    IndexOnlineService,
    IndexBottom
  }

}
</script>

<style lang="less">
.news-container {
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
  .news-header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1px;
  }
  .news-content-container {
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
