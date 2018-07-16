<template>
  <div class="activities-container">
    <div class="activities-header-nav">
      <index-header/>
      <index-navbar/>
    </div>
    <page-pic/>
    <div class="activities-content-container">
      <activity-content/>
    </div>
    <index-company-info/>
    <index-bottom/>
    <div class="online-service-container">
      <!-- <index-online-service/> -->
    </div>
  </div>
</template>

<script>
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'news')
const IndexNavbar = r => require.ensure([], () => r(require('@/components/IndexNavbar')), 'news')
const PagePic = r => require.ensure([], () => r(require('@/components/PagePic')), 'news')
const ActivityContent = r => require.ensure([], () => r(require('./components/ActivityContent')), 'news')

const IndexCompanyInfo = r => require.ensure([], () => r(require('@/components/IndexCompanyInfo')), 'news')
const IndexOnlineService = r => require.ensure([], () => r(require('@/components/IndexOnlineService')), 'news')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'aboutus')
export default {
  components: {
    IndexHeader,
    IndexNavbar,
    PagePic,
    ActivityContent,
    IndexCompanyInfo,
    IndexOnlineService,
    IndexBottom
  },
  metaInfo: {
    title: '活动互动',
    meta: [
      { name: 'keywords', content: '活动互动,活动信息' }
    ]
  }

}
</script>

<style lang="less">
.activities-container {
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
  .activities-header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1px;
  }
  .activities-content-container {
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
