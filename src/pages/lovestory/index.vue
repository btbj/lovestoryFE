<template>
  <div class="story-container">
    <div class="story-header-nav">
      <index-header></index-header>
      <index-navbar></index-navbar>
    </div>
    <page-pic></page-pic>
    <div class="story-content-container">
      <story-content></story-content>
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
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'story')
const IndexNavbar = r => require.ensure([], () => r(require('@/components/IndexNavbar')), 'story')
const PagePic = r => require.ensure([], () => r(require('@/components/PagePic')), 'story')
const StoryContent = r => require.ensure([], () => r(require('./components/StoryContent')), 'story')

const IndexCompanyInfo = r => require.ensure([], () => r(require('@/components/IndexCompanyInfo')), 'story')
const IndexOnlineService = r => require.ensure([], () => r(require('@/components/IndexOnlineService')), 'story')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'aboutus')
export default {
  components: {
    IndexHeader,
    IndexNavbar,
    PagePic,
    StoryContent,
    IndexCompanyInfo,
    IndexOnlineService,
    IndexBottom
  },
  metaInfo: {
    title: '晒幸福',
    meta: [
      { name: 'keywords', content: '晒幸福,分享幸福' }
    ]
  }

}
</script>

<style lang="less">
.story-container {
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
  .story-header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1px;
  }
  .story-content-container {
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
