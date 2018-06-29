<template>
  <div class="news-list-root">
    <content-nav>
      <span slot="rightTitle">公司新闻</span>
      <span slot="leftFirstTitle">首页></span>
      <span slot="leftSecondTitle">新闻资讯></span>
      <span slot="leftThirdTitle">公司新闻</span>
    </content-nav>
    <div class="inner-item-content">
      <div class="news-item-box" v-for="(newsItem, index) in newsList"
          :key="index">
        <div class="item-title-box">
          <div class="title-words">{{newsItem.title}}</div>
          <div class="title-date">{{newsItem.created_date}}</div>
        </div>
        <div class="item-content-box">
          <div class="news-pic">
            <img :src="newsItem.image_url"
                  class="img-style">
          </div>
          <div class="news-words-box">
            <div class="news-words">{{newsItem.content}}</div>
            <div class="news-more-btn">
              <div class="more-btn" @click="getInfo(newsItem.id)">了解详情</div>
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
import articleService from '@/services/articleService'
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
    getInfo (index) {
      // this.$router.push({name: 'newsinfo', params: {'id': index}})
      this.$router.push({name: 'news-detail', params: {'category': 'company', 'id': index}})
    },
    async getList (page = 1) {
      try {
        let res = await articleService.articles({
          category: 2,
          page,
          per_page: this.paginationData.size
        })
        console.log('success', res)
        this.newsList = res.data.articles
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
.news-list-root {
  padding: 5px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .inner-item-content {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
    text-align: left;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    .news-item-box {
      width: 100%;
      height: 220px;
      border: 1px solid grey;
      box-sizing: border-box;
      margin-bottom: 20px;
      padding: 5px 20px;
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
        align-items: center;
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
          .img-style {
            max-width: 100%;
            max-height: 100%;
          }
        }
        .news-words-box {
          font-size: 14px;
          width: 400px;
          height: 160px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          .news-words {
            width: 100%;
            height: 130px;
            box-sizing: border-box;
            font-size: 14px;
            padding: 5px;
            text-align: left;
            word-wrap: break-word;
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
