<template>
  <div class="home-love-pics">
    <div class="first-row" v-if="storyList.length >= 2">
      <div class="first-row-pic" :style="`background-image: url('${storyList[0].image_url}')`">
        <div class="first-pic-logo">
          <div class="first-logo-words">晒幸福</div>
        </div>
      </div>
      <div class="first-row-pic" :style="`background-image: url('${storyList[1].image_url}')`">
        <div class="first-pic-logo">
          <div class="first-logo-words">晒幸福</div>
        </div>
      </div>
    </div>
    <div class="second-row" v-if="storyList.length >= 6">
      <div class="second-row-pic" :style="`background-image: url('${storyList[2].image_url}')`">
        <div class="second-pic-logo">
          <div class="second-logo-words">晒幸福</div>
        </div>
      </div>
      <div class="second-row-pic" :style="`background-image: url('${storyList[3].image_url}')`">
        <div class="second-pic-logo">
          <div class="second-logo-words">晒幸福</div>
        </div>
      </div>
      <div class="second-row-pic" :style="`background-image: url('${storyList[4].image_url}')`">
        <div class="second-pic-logo">
          <div class="second-logo-words">晒幸福</div>
        </div>
      </div>
      <div class="second-row-pic" :style="`background-image: url('${storyList[5].image_url}')`">
        <div class="second-pic-logo">
          <div class="second-logo-words">晒幸福</div>
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
    checkDetail (id) {
      // this.$router.push({name: 'newsinfo', params: {'id': index}})
      // this.$router.push({name: 'news-detail', params: {'category': 'company', 'id': id}})
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
      .second-pic-logo {
        border-bottom: 25px solid #FD6F9F;
        border-left: 25px solid transparent;
        width: 90px;
        .second-logo-words {
          position: relative;
          top: 22px;
          color: white;
          user-select: none;
          -webkit-user-select: none;
        }
      }
    }
  }
}

</style>
