<template>
  <div class="news-list-root">
    <content-nav>
      <span slot="rightTitle">{{categoryText}}</span>
      <span slot="leftFirstTitle">首页></span>
      <span slot="leftSecondTitle">新闻资讯></span>
      <span slot="leftThirdTitle">{{categoryText}}</span>
    </content-nav>
    <div class="_inner-item-content" v-if="newsDetail">
      <div class="_inner-news-title-box">
        <div class="_news-title">
          {{newsDetail.info.title}}
        </div>
        <div class="_news-date">
          发布时间 : {{newsDetail.info.created_date}}
        </div>
      </div>
      <div class="_inner-news-content-box" v-html="newsDetail.info.content">
        <!-- {{newsDetail.info.content}} -->
      </div>
      <div class="_inner-news-prev-next">
        <div :class="['_news-prev', newsDetail.pre ? 'clickable' : '']"
          @click="newsDetail.pre ? getDetail(newsDetail.pre.id) : null">
          <div class="prev-link">上一篇 : </div>
          <div class="prev-label">{{newsDetail.pre ? newsDetail.pre.title : '没有了'}}</div>
        </div>
        <div :class="['_news-next', newsDetail.next ? 'clickable' : '']"
          @click="newsDetail.next ? getDetail(newsDetail.next.id) : null">
          <div class="next-link">下一篇 : </div>
          <div class="next-label">{{newsDetail.next ? newsDetail.next.title : '没有了'}}</div>
        </div>
      </div>
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
      newsDetail: null
    }
  },
  methods: {
    getInfo (index) {
      this.$router.push({name: 'newsinfo', params: {'id': index}})
    },
    async getDetail (id) {
      try {
        let res = await articleService.info({
          id: id || this.$route.params.id
        })
        console.log('success', res)
        this.newsDetail = res.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    categoryText () {
      let currentCategory = this.$route.path.split('/')[2]
      let result = '未知分类'
      switch (currentCategory) {
        case 'notification': result = '通知公告'; break
        case 'company': result = '公司新闻'; break
        case 'industry': result = '行业资讯'; break
      }
      return result
    }
  },
  mounted: async function () {
    this.getDetail()
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
  ._inner-item-content {
    margin-top: 20px;
    width: 100%;
    border: 1px solid grey;
    box-sizing: border-box;
    padding: 10px 20px;
    ._inner-news-title-box {
      margin-bottom: 10px;
      width: 100%;
      border-bottom: 1px solid grey;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: 0 0 10px 0;
      ._news-title {
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
      }
      ._news-date {
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: grey;
      }
    }
    ._inner-news-content-box {
      width: 100%;
      height: 600px;
      border-bottom: 1px dotted grey;
      box-sizing: border-box;
      padding: 20px 10px;
      font-size: 14px;
      text-align: left;
      margin-bottom: 20px;
    }
    ._inner-news-prev-next {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      padding: 5px 0;
      margin-bottom: 10px;
      .clickable{
        cursor: pointer;
      }
      ._news-prev {
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .prev-link {
          font-size: 12px;
          color: grey;
          width: 45px;
          margin-right: 3px;
        }
        .prev-label {
          color: black;
          font-size: 12px;
          text-align: left;
        }
      }
      ._news-next {
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .next-link {
          font-size: 12px;
          color: grey;
          width: 45px;
          margin-right: 3px;
        }
        .next-label {
          color: black;
          font-size: 12px;
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
