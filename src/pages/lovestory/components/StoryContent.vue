<template>
  <div class="story-content-box">
    <div class="content-link-box">
      <new-news></new-news>
      <contact-us></contact-us>
    </div>
    <div class="content-info-box">
      <div class="inner-item-box">
        <content-nav>
          <span slot="rightTitle">晒幸福</span>
          <span slot="leftFirstTitle">首页></span>
          <span slot="leftSecondTitle">晒幸福></span>
        </content-nav>
        <div class="inner-item-content">

          <div class="card-box" v-for="(story, index) in storyList"
                :key="index">
            <div class="card-pic">
              <img :src="story.image_url" class="img-style">
            </div>
            <div class="story-title">{{story.title}}</div>
            <div class="story-content">{{story.content}}</div>
          </div>

        </div>
        <div class="pagination-box">
          <page-pagination :paginationData="paginationData" @change="getList"></page-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleService from '@/services/articleService'
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'story')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'story')
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'story')
const PagePagination = r => require.ensure([], () => r(require('@/components/PagePagination')), 'story')

export default {
  components: {
    NewNews,
    ContactUs,
    ContentNav,
    PagePagination
  },
  data () {
    return {
      paginationData: {
        current: 1,
        total: 1,
        size: 9
      },
      storyList: [ ]
    }
  },
  methods: {
    checkDetail (id) {
      // this.$router.push({name: 'newsinfo', params: {'id': index}})
      // this.$router.push({name: 'news-detail', params: {'category': 'company', 'id': id}})
    },
    async getList (page = 1) {
      try {
        let res = await articleService.articles({
          category: 6,
          page,
          per_page: this.paginationData.size
        })
        console.log('success', res)
        this.storyList = res.data.articles
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

<style lang="less">
.story-content-box {
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
