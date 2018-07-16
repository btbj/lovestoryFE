<template>
  <div class="about-content-box">
    <div class="content-link-box">
      <about-us></about-us>
      <new-news></new-news>
      <contact-us></contact-us>
    </div>
    <div class="content-info-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

const AboutUs = r => require.ensure([], () => r(require('@/frame/sidebar/AboutUs')), 'aboutus')
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'aboutus')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'aboutus')

export default {
  components: { AboutUs, NewNews, ContactUs },
  data () {
    return {
    }
  }

}
</script>

<style lang="less">
.about-content-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
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
    padding: 5px 0;
    margin-left: 20px;
    .inner-item-box {
      padding: 5px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .inner-item-nav {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #D76083;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-bottom: 8px;
        .item-label {
          display: flex;
          align-items: center;
          font-weight: bold;
          .item-icon {
            color: #D76083;
            font-size: 24px;
          }
        }
        .item-nav {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          font-size: 14px;
        }
      }
      .inner-item-content {
        width: 100%;
        // height: 580px;
        box-sizing: border-box;
        padding: 10px 5px;
        text-align: left;
        font-size: 14px;
      }
    }
  }
}

</style>
