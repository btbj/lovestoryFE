<template>
  <div class="personal-info-container">
    <div class="personal-info-box">
      <div class="personal-info-title">
        <span class="icon-radio_button_unchecked icon"></span>
        <span>我的择偶标准</span>
      </div>
      <div class="personal-info-content">
        <div class="pi-content-item-row">
          <div class="pi-item-column">
            <span class="label">年龄</span>：
            <span>{{ageOptionText}}</span>
          </div>
          <div class="pi-item-column">
            <span class="label">身高</span>：
            <span>{{heightOptionText}}</span>
          </div>
        </div>
        <div class="pi-content-item-row">
          <div class="pi-item-column">
            <span class="label">民族</span>：
            <span>{{optionInfo.nation || '不限'}}</span>
          </div>
          <div class="pi-item-column">
            <span class="label">学历</span>：
            <span>{{optionInfo.education || '不限'}}</span>
          </div>
        </div>
        <div class="pi-content-item-row">
          <div class="pi-item-column">
            <span class="label">相册</span>：
            <span>{{optionInfo.hasPic || '不限'}}</span>
          </div>
          <div class="pi-item-column">
            <span class="label">婚姻状况</span>：
            <span>{{optionInfo.marriageStatus || '不限'}}</span>
          </div>
        </div>
        <div class="pi-content-item-row">
          <div class="pi-item-column">
            <span class="label">居住地</span>：
            <span>{{optionInfo.province ? optionInfo.province + ' ' + optionInfo.city : '不限'}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="seprator"></div>
    <div class="personal-info-box" style="margin-top: 30px">
      <div class="personal-info-title">
        <span class="icon-radio_button_unchecked icon"></span>
        <span>今日推荐</span>
      </div>
      <div class="personal-info-pic-content">
        <div class="pi-pic-box" v-for="(recommend, index) in recommendList" :key="index"
          @click="checkUser(recommend)">
          <div class="pi-pic" :style="`background-image: url(${recommend.head_image_url})`">
            <!-- <img :src=recommend.img class="img-style"> -->
          </div>
          <div class="word">
            <div class="first-row"><span style="margin-right: 10px;">{{recommend.nickname}}</span><span>{{recommend.age}}岁</span></div>
            <div>{{recommend.monologue}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="personal-info-box">
      <div class="personal-info-title">
        <span class="icon-radio_button_unchecked icon"></span>
        <span>谁看过我</span>
      </div>
      <div class="personal-info-pic-content">
        <div class="pi-pic-box" v-for="(visitor, index) in visitorList" :key="index"
          @click="checkUser(visitor)">
          <div class="pi-pic" :style="`background-image: url(${visitor.head_image_url})`">
            <!-- <img :src=visitor.img class="img-style"> -->
          </div>
          <div class="word">
            <div class="first-row">{{visitor.nickname}}</div>
            <div><span>{{visitor.age}}岁</span> <span v-if="visitor.province" class="margin-left: 10px;">{{visitor.province + ' ' + visitor.city}}</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="personal-info-box" style="margin: 0">
      <div class="personal-info-title">
        <span class="icon-radio_button_unchecked icon"></span>
        <span>谁关注我</span>
      </div>
      <div class="personal-info-pic-content">
        <div class="pi-pic-box" v-for="(follower, index) in followerList" :key="index"
          @click="checkUser(follower)">
          <div class="pi-pic" :style="`background-image: url(${follower.head_image_url})`">
            <!-- <img :src=follower.img class="img-style"> -->
          </div>
          <div class="word">
            <div class="first-row">{{follower.nickname}}</div>
            <div>{{follower.age}}岁, {{follower.address}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      optionInfo: {
        province: '',
        city: '',
        ageMin: '',
        ageMax: '',
        marriageStatus: '',
        heightMin: '',
        heightMax: '',
        nation: '',
        hasPic: ''
      },
      visitorList: [],
      followerList: [],
      recommendList: []
    }
  },
  methods: {
    checkUser (member) {
      this.$router.push({name: 'userinfo', params: {'id': member.id}})
    },
    async getUserInfo () {
      try {
        let res = await userService.getInfo({
          token: this.$store.getters.token
        })
        console.log(res)
        let {province, city, age_max: ageMax, age_min: ageMin, height_max: heightMax, height_min: heightMin, marital_status: marriageStatus, education, nation, has_images: hasPic} = res.data.info.condition
        this.optionInfo = {
          province,
          city,
          ageMin,
          ageMax,
          marriageStatus,
          heightMin,
          heightMax,
          education,
          nation,
          hasPic: hasPic === '0' ? '不限' : '有照片'
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getRecommendsList () {
      try {
        let res = await userService.recommends({
          token: this.$store.getters.token,
          num: 5
        })
        console.log('success', res)
        this.recommendList = res.data.users
      } catch (error) {
        console.log(error)
      }
    },
    async getVisitorList () {
      try {
        let res = await userService.seenMeUsers({
          token: this.$store.getters.token,
          num: 5
        })
        console.log('success', res)
        this.visitorList = res.data.users
      } catch (error) {
        console.log(error)
      }
    },
    async getFollowerList () {
      try {
        let res = await userService.attentionMeUsers({
          token: this.$store.getters.token,
          num: 5
        })
        console.log('success', res)
        this.followerList = res.data.users
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    ageOptionText () {
      let max = this.optionInfo.ageMax
      let min = this.optionInfo.ageMin
      if (max) {
        return `在${min}岁~${max}岁之间`
      } else if (min) {
        return `${min}岁以上`
      } else {
        return '不限'
      }
    },
    heightOptionText () {
      let max = this.optionInfo.heightMax
      let min = this.optionInfo.heightMin
      if (max) {
        return `${min}~${max}cm`
      } else if (min) {
        return `${min}cm以上`
      } else {
        return '不限'
      }
    }
  },
  mounted: async function () {
    this.getUserInfo()
    this.getRecommendsList()
    this.getVisitorList()
    this.getFollowerList()
  }

}
</script>

<style lang="less">
.personal-info-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .seprator{
    margin: 0 5px;
    height: 0;
    border-bottom: 1px solid #ddd;
  }
  .personal-info-title {
    width: 150px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    .icon {
      color: #F1356F;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .personal-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .personal-info-content {
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      padding: 5px 5px 5px 25px;
      text-align: left;
      .pi-content-item-row {
        width: 100%;
        height: 20px;
        box-sizing: border-box;
        font-size: 14px;
        margin-bottom: 10px;
        display: flex;
        .pi-item-column {
          display: flex;
          align-items: center;
          width: 50%;
          .label{
            width: 80px;
            text-align-last: justify;
          }
        }
      }
    }
    .personal-info-pic-content {
      width: 100%;
      height: 300px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .pi-pic-box {
        flex-basis: 20%;
        width: 110px;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        .pi-pic {
          width: 95%;
          width: 150px;
          height: 200px;
          box-sizing: border-box;
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
        .word {
          width: 100%;
          height: 60px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          .first-row {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}

</style>
