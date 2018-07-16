<template>
  <div class="link-item-box">
    <div class="item-title">
      <span class="mdi-language item-icon"></span>
      <span style="margin-left: 10px;">最新资讯</span>
      <span style="font-size: 16px;">&nbsp;/NEWS</span>
    </div>
    <div class="item-list-box">
      <div class="news-item" v-for="(news, index) in newsList" :key="index"
        @click="checkNewsDetail(news)">
        <span class="mdi-stop item-icon"></span>
        <span class="news-content">{{news.title}}</span></div>
    </div>
  </div>
</template>

<script>
import articleService from '@/services/articleService'

export default {
  data () {
    return {
      newsList: []
    }
  },
  methods: {
    async getNews () {
      try {
        let res = await articleService.articles({
          category: [1, 2, 3],
          page: 1,
          per_page: 5
        })
        // console.log('success', res)
        this.newsList = res.data.articles
      } catch (error) {
        console.log(error)
      }
    },
    checkNewsDetail (news) {
      console.log(news)
      let category = 'notification'
      switch (news.category) {
        case '1': category = 'notification'; break
        case '2': category = 'company'; break
        case '3': category = 'industry'; break
        default: category = 'not registered'
      }
      if (category !== 'not registered') {
        this.$router.push({name: 'news-detail', params: {category, 'id': news.id}})
      } else {
        console.log('category not registered in NewNews')
      }
    }
  },
  mounted: async function () {
    this.getNews()
  }
}
</script>

<style lang="less">
.link-item-box {
  padding: 0 5px;
  width: 100%;
  min-width: 280px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  .item-title {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #D76083;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #D76083;
    font-size: 18px;
    margin-bottom: 8px;
    .item-icon {
      color: #D22F60;
      font-size: 20px;
    }
  }
  .item-list-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .news-item {
      padding: 5px 0;
      width: 100%;
      height: 20%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 14px;
      cursor: pointer;
      .item-icon {
        color: #D76083;
        margin-right: 10px;
      }
      .news-content{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .news-content:hover{
        color: #D76083;
      }
    }
  }
}

</style>
