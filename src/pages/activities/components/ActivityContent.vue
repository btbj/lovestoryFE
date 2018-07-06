<template>
  <div class="activities-content-box">
    <div class="content-link-box">
      <new-news/>
      <contact-us/>
    </div>
    <div class="content-info-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import PlanList from './PlanList'
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'news')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'news')

export default {
  components: { NewNews, ContactUs },
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
.activities-content-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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
    // width: 700px;
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    padding: 5px;
    margin-left: 20px;
  }
}

</style>
