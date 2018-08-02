<template>
  <div class="home-news-info">
    <div class="news-info-header">
      <div class="news-info-label">新闻资讯</div>
      <div class="news-info-tab">
        <div :class="['tab-item', type === 'company' ? 'selected' : '']" @click="getNews('company')">
          <div class="tab-item-text">公司新闻</div>
          <div class="tab-arrow"></div>
        </div>
        <div :class="['tab-item', type === 'industry' ? 'selected' : '']" @click="getNews('industry')">
          <div class="tab-item-text">情感资讯</div>
          <div class="tab-arrow"></div>
        </div>
      </div>
    </div>
    <div class="news-info-box">
      <div class="news-info-content">
        <div class="info-item" v-for="(news, index) in newsList" :key="index">
          <div class="info-pic" :style="`background-image: url('${news.image_url}')`">
            <!-- <img :src="news.image_url" class="img-style"> -->
          </div>
          <div class="info-words">
            <div class="info-title" @click="checkNewsDetail(news.id)"> {{news.title}} </div>
            <div class="info-content"> {{news.content}} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleService from '@/services/articleService'

export default {
  data () {
    return {
      arrowShow: '',
      activeColor: '#FF1493',
      type: 'company',
      newsList: []
    }
  },
  methods: {
    checkNewsDetail (id) {
      this.$router.push({name: 'news-detail', params: {'category': this.type, id}})
    },
    async getNews (type = 'company') {
      this.type = type
      try {
        let res = await articleService.articles({
          category: type === 'company' ? 2 : 3,
          page: 1,
          per_page: 3
        })
        console.log('success', res)
        this.newsList = res.data.articles
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted: async function () {
    this.getNews()
  }

}
</script>

<style lang="less" scoped>
.home-news-info {
  width: 55%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 20px;
  .news-info-header {
    margin-top: 6px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    .news-info-label {
      padding: 5px 0;
      border-bottom: 1px solid #FF70A2;
      font-size: 18px;
      font-weight: bold;
      box-sizing: border-box;
      margin-right: 80px;
      margin-bottom: -1px;
      z-index: 1;
      // height: 34px;
    }
    .news-info-tab {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .tab-item {
        position: relative;
        border-bottom: 1px solid rgba(0, 0, 0, 0);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 50px;
        margin-bottom: -1px;
        height: 32px;
        line-height: 32px;
        cursor: pointer;
        .tab-item-text {
          padding: 5px 0;
          font-size: 16px;
        }
        .tab-arrow {
          position: absolute;
          display: none;
          z-index: 1;
          bottom: 0;
          margin: auto;
          width:0;
          height:0;
          border-left:4px solid transparent;
          border-right:4px solid transparent;
          border-bottom:4px solid #FF70A2;
        }
        &.selected {
          color: #FF70A2;
          border-color: #FF70A2;
          .tab-arrow {
            display: block;
          }
        }
      }
    }
  }
  .news-info-box {
    padding: 20px 0 5px 0;
    width: 100%;
    border-top: 1px solid lightgrey;
    .news-info-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: space-around;
      box-sizing: border-box;
      .info-item {
        width: 100%;
        height: 120px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-bottom: 1px solid lightgrey;
        padding: 5px 0;
        .info-pic {
          width: 150px;
          height: 100px;
          box-sizing: border-box;
          margin-right: 10px;
          overflow: hidden;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .info-words {
          box-sizing: border-box;
          flex: 1;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 10px 0;
          .info-title {
            font-size: 16px;
            margin-bottom: 10px;
            cursor: pointer;
            &.info-title:hover{
              color: #FF70A2;
            }
          }
          .info-content {
            flex: 1;
            font-size: 14px;
            height: 50px;
            line-height: 25px;
            text-align: left;
            color: grey;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}

</style>
