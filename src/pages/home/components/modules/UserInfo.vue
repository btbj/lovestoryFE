<template>
  <div class="user-info-box" v-if="userInfo">
    <div class="user-avatar" :style="`background-image: url('${userInfo.info.head_image_url}');`"></div>
    <div class="user-nickname">{{userInfo.info.nickname}}</div>
    <div class="user-phone">{{userInfo.info.phone}}</div>
    <div class="user-address">{{userInfo.info.address}}</div>
    <div class="user-status">{{UserAge}} {{userInfo.info.marital_status}}</div>
  </div>
</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      userInfo: null
    }
  },
  methods: {
    async getUserInfo () {
      try {
        let res = await userService.info({
          token: this.$store.getters.token
        })
        this.userInfo = res.data.info
        console.log(res)
      } catch (error) {
        if (error.error_code === 110 || error.error_code === 101) {
          this.$store.dispatch('logout')
        } else {
          console.log(error)
        }
      }
    }
  },
  computed: {
    UserAge () {
      let age = 0
      if (this.userInfo) {
        let currentYear = new Date().getFullYear()
        age = currentYear - this.userInfo.info.year + 1
      }
      return age + '岁'
    }
  },
  mounted: async function () {
    this.getUserInfo()
  }
}
</script>

<style lang="less">
.user-info-box {
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  background-color: white;
  box-sizing: border-box;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .user-avatar, .user-nickname, .user-phone, .user-address{
    margin-bottom: 10px;
  }
  .user-status, .user-nickname, .user-phone, .user-address{
    color: #444;
  }
  .user-avatar{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
}

</style>
