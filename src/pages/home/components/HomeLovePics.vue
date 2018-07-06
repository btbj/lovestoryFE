<template>
  <div class="home-love-pics">
    <div class="first-row" v-if="storyList.length >= 2">
      <div class="first-row-pic" v-for="(item, index) in firstRow" :key="index"
        :style="`background-image: url('${item.image_url}')`" @click="checkDetail(item)">
        <div class="first-pic-logo">
          <div class="first-logo-words index-story-title">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="second-row" v-if="storyList.length >= 6">
      <div class="second-row-pic" v-for="(item, index) in secondRow" :key="index"
        :style="`background-image: url('${item.image_url}')`" @click="checkDetail(item)">
        <div class="second-pic-logo">
          <div class="second-logo-words index-story-title">{{item.title}}</div>
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
      storyList: [ ]
    }
  },
  methods: {
    checkDetail (story) {
      // this.$router.push({name: 'newsinfo', params: {'id': index}})
      this.$router.push({name: 'lovestory-detail', params: {'id': story.id}})
    },
    async getList (page = 1) {
      try {
        let res = await articleService.articles({
          category: 6,
          page,
          per_page: 6
        })
        console.log('success', res)
        this.storyList = res.data.articles
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    firstRow () {
      let array = []
      if (this.storyList.length >= 2) {
        array = [this.storyList[0], this.storyList[1]]
      }
      return array
    },
    secondRow () {
      let array = []
      if (this.storyList.length >= 6) {
        array = this.storyList.filter((item, index) => { return index >= 2 })
      }
      return array
    }
  },
  mounted: async function () {
    this.getList()
  }
}
</script>

<style lang="less">
.home-love-pics {
  margin: 10px 0 30px 0;
  box-sizing: border-box;
  width: 840px;
  display: flex;
  flex-direction: column;
  .first-row {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;
    .first-row-pic {
      width: 408px;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
      .first-pic-logo {
        border-bottom: 30px solid #FD6F9F;
        border-left: 30px solid transparent;
        width: 120px;
        .first-logo-words {
          position: relative;
          top: 25px;
          color: white;
          user-select: none;
          -webkit-user-select: none;
        }
        .index-story-title{
          width: 120px;
        }
      }
    }
  }
  .second-row {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    .second-row-pic {
      width: 200px;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
      .second-pic-logo {
        border-bottom: 25px solid #FD6F9F;
        border-left: 25px solid transparent;
        width: 90px;
        display: flex;
        .second-logo-words {
          position: relative;
          top: 22px;
          color: white;
          user-select: none;
          -webkit-user-select: none;
        }
        .index-story-title{
          width: 80px;
        }
      }
    }
  }
  .index-story-title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    align-self: flex-end;
  }
}

</style>
