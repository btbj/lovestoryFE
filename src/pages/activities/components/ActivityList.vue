<template>
  <div class="activities-list-root">
    <content-nav>
      <span slot="rightTitle">互动活动</span>
      <span slot="leftFirstTitle">首页></span>
      <span slot="leftSecondTitle">互动活动</span>
    </content-nav>
    <div class="inner-item-content">
      <div class="news-item-box" v-for="(activity, index) in newsList"
          :key="index">
        <div class="item-title-box">
          <div class="title-words">{{activity.title}}</div>
          <div class="title-date">{{activity.created_date}}</div>
        </div>
        <div class="item-content-box">
          <div class="news-pic" :style="`background-image: url('${activity.image_url}');`">
            <!-- <img :src="activity.image_url" class="img-style"> -->
          </div>
          <div class="activities-words-box">
            <div class="activity-info-box">
              <div class="activity-time">活动时间：{{activity.time}}</div>
              <div class="activity-address">活动地点：{{activity.address}}</div>
              <div class="activity-intro">活动介绍：{{activity.introduction}}</div>
            </div>
            <div class="news-more-btn">
              <div class="more-btn" @click="getInfo(activity.id)">了解详情</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-box">
      <page-pagination :paginationData="paginationData" @change="getList"></page-pagination>
    </div>
  </div>
</template>

<script>
import activityService from '@/services/activityService'
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'news')
const PagePagination = r => require.ensure([], () => r(require('@/components/PagePagination')), 'news')

export default {
  components: { ContentNav, PagePagination },
  data () {
    return {
      paginationData: {
        current: 1,
        total: 1,
        size: 4
      },
      newsList: []
    }
  },
  methods: {
    getInfo (id) {
      this.$router.push({name: 'activities-detail', params: {id}})
    },
    async getList (page = 1) {
      try {
        let res = await activityService.activities({
          page,
          per_page: this.paginationData.size
        })
        console.log('success', res)
        this.newsList = res.data.activities
        let {count: total, page: current, per_page: size} = res.data
        this.paginationData = {
          current, total, size
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted: async function () {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.activities-list-root {
  padding: 5px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .inner-item-content {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0;
    text-align: left;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    .news-item-box {
      width: 100%;
      border: 1px solid grey;
      box-sizing: border-box;
      margin-bottom: 20px;
      padding: 5px 20px 20px;
      display: flex;
      flex-direction: column;
      .item-title-box {
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .title-words {
          font-weight: bold;
          font-size: 18px;
        }
        .title-date {
          margin-right: 5px;
          flex: 1;
          text-align: right;
          font-size: 14px;
          color: grey;
        }
      }
      .item-content-box {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        // align-items: center;
        justify-content: flex-start;
        .news-pic {
          width: 230px;
          height: 160px;
          box-sizing: border-box;
          margin-right: 5px;
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
        .activities-words-box {
          font-size: 14px;
          width: 400px;
          height: 200px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          .activity-info-box {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            box-sizing: border-box;
            font-size: 14px;
            padding: 5px;
            .activity-time, .activity-address{
              margin-bottom: 20px;
            }
            .activity-intro{
              line-height: 20px;
              height: 60px;
              width: 380px;
              word-wrap: break-word;
              word-break: break-all;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
          }
          .news-more-btn {
            width: 100%;
            height: 30px;
            box-sizing: border-box;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            .more-btn {
              width: 80px;
              height: 25px;
              line-height: 22px;
              border: 1px solid #D76083;
              box-sizing: border-box;
              text-align: center;
              cursor: pointer;
            }
          }
        }
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
</style>
