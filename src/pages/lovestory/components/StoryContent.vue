<template>
  <div class="story-content-box">
    <div class="content-link-box">
      <new-news></new-news>
      <contact-us></contact-us>
    </div>
    <div class="content-info-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'story')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'story')

export default {
  components: {
    NewNews,
    ContactUs
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.story-content-box {
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
      .inner-item-content {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 10px 0;
        .card-box {
          flex-basis: 30%;
          border: 1px solid lightgrey;
          box-sizing: border-box;
          margin: 0 10px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          .story-title {
            width: 100%;
            height: 30px;
            box-sizing: border-box;
            color: #D76083;
            line-height: 30px;
            text-align: left;
          }
          .story-content {
            padding: 1px 0;
            width: 100%;
            line-height: 25px;
            height: 125px;
            box-sizing: border-box;
            text-align: left;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
          }
        }
        .card-pic {
          width: 180px;
          height: 140px;
          box-sizing: border-box;
          margin-bottom: 10px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          .img-style {
            max-width: 100%;
            max-height: 100%;
          }

        }
      }
      .pagination-box {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
      }
    }
  }
}

</style>
