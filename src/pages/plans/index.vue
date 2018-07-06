<template>
  <div class="plans-container">
    <div class="plans-header-nav">
      <index-header/>
      <index-navbar/>
    </div>
    <page-pic/>
    <div class="plans-content-container">
      <plans-content/>
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
const PlansContent = r => require.ensure([], () => r(require('./components/PlansContent')), 'news')

const IndexCompanyInfo = r => require.ensure([], () => r(require('@/components/IndexCompanyInfo')), 'news')
const IndexOnlineService = r => require.ensure([], () => r(require('@/components/IndexOnlineService')), 'news')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'aboutus')
export default {
  components: {
    IndexHeader,
    IndexNavbar,
    PagePic,
    PlansContent,
    IndexCompanyInfo,
    IndexOnlineService,
    IndexBottom
  }

}
</script>

<style lang="less">
.plans-container {
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
  .plans-header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1px;
  }
  .plans-content-container {
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
