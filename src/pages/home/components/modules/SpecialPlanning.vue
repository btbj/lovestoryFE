<template>
  <div class="special-planning-box">
      <div class="special-planning-content">
        <div class="special-planning-header">
          <div :class="['header-item', isActiveTab(index) ? 'selected' : '']"
            v-for="(item, index) in newsList" :key="index"
            @click="activeTab = index">
            <div class="header-word">
               {{item.title}}
            </div>
            <div class="header-arrow"></div>
          </div>
        </div>
        <div class="special-planning-body">
          <img :src="selectedImg" class="img-style">
        </div>
      </div>
    </div>
</template>

<script>
import articleService from '@/services/articleService'

export default {
  data () {
    return {
      activeTab: 0,
      newsList: [{
        title: '暂无活动'
      }]
    }
  },
  methods: {
    isActiveTab (index) {
      return index === this.activeTab
    },
    getInfo (index) {
      this.$router.push({name: 'news-detail', params: {'category': 'notification', 'id': index}})
    },
    async getList (page = 1) {
      try {
        let res = await articleService.articles({
          category: 5,
          page,
          per_page: 3
        })
        console.log('success', res)
        this.newsList = res.data.articles
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    selectedImg () {
      return this.newsList[this.activeTab].image_url
    }
  },
  mounted: async function () {
    this.getList()
  }

}
</script>

<style lang="less">
.special-planning-box {
  box-sizing: border-box;
  width: 540px;
  height: 100%;
  padding-top: 8px;
  .special-planning-content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .special-planning-header {
      width: 540px;
      height: 60px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      .header-item {
        flex: 1;
        height: 52px;
        box-sizing: border-box;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 3px;
        border-left: 1px solid #ddd;
        &:first-child{
          border-left: none;
        }
        .header-word {
          width: 174px;
          max-height: 46px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          text-align: left;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .header-arrow {
          display: none;
          position: absolute;
          z-index: 1;
          margin: auto;
          margin-top: 30px;
          width:0;
          height:0;
          border-left:8px solid transparent;
          border-right:8px solid transparent;
          border-top:8px solid #FD6F9F;
        }
        &.selected{
          background: #FD6F9F;
          color: white;
          .header-arrow{
            display: block;
          }
        }
      }
    }
    .special-planning-body {
      margin-top: -8px;
      width: 540px;
      height: 300px;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img-style {
        min-width: 100%;
        min-height: 100%;
      }
    }
  }
}

</style>
