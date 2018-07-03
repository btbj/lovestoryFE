<template>
  <div class="news-content-box">
    <div class="content-link-box">
      <news-info></news-info>
      <new-news></new-news>
      <contact-us></contact-us>
    </div>
    <div class="content-info-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const NewsInfo = r => require.ensure([], () => r(require('@/frame/sidebar/NewsInfo')), 'news')
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'news')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'news')

export default {
  components: { NewsInfo, NewNews, ContactUs },
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
.news-content-box {
  width: 1000px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  .content-link-box {
    width: 280px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 0;
  }
  .content-info-box {
    width: 700px;
    height: 100%;
    box-sizing: border-box;
    padding: 5px;
  }
}

</style>
