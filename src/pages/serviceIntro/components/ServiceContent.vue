<template>
  <div class="service-content-box">
    <div class="content-link-box">
      <!-- <about-us></about-us> -->
      <new-news></new-news>
      <contact-us></contact-us>
    </div>
    <div class="content-info-box">
      <div class="service-intro-root">
        <div class="inner-item-box">
          <content-nav>
            <span slot="rightTitle">服务介绍</span>
            <span slot="leftFirstTitle">首页></span>
            <span slot="leftSecondTitle">服务介绍</span>
          </content-nav>
          <div class="inner-item-content" v-html="contentInfo">
            <!-- {{contentInfo}} -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import siteService from '@/services/siteService'
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'aboutus')
const AboutUs = r => require.ensure([], () => r(require('@/frame/sidebar/AboutUs')), 'aboutus')
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'aboutus')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'aboutus')

export default {
  components: { AboutUs, NewNews, ContactUs, ContentNav },
  data () {
    return {
      contentInfo: ''
    }
  },
  methods: {
    async getSiteInfo (id) {
      try {
        let res = await siteService.info({id})
        this.contentInfo = res.data.info.value
        // console.log(res)
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getSiteInfo(13)
  }

}
</script>

<style lang="less">
.service-content-box {
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
    margin-left: 20px;
    height: 100%;
    box-sizing: border-box;
    padding: 5px;
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
