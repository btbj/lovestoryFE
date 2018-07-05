<template>
  <div class="follow-btn-root">
    <div class="follow-btn" v-if="!isFollowed" @click="followUser">关 注</div>
    <div class="follow-btn unfollow" v-else @click="unfollowUser">取消关注</div>
  </div>
</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      isFollowed: false
    }
  },
  methods: {
    async getAttentionStatus () {
      try {
        let res = await userService.attentionStatus({
          token: this.$store.getters.token,
          id: this.$route.params.id
        })
        // console.log('follow status', res)
        this.isFollowed = res.data.status
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async followUser () {
      try {
        let res = await userService.doAttention({
          token: this.$store.getters.token,
          user_id: this.$route.params.id
        })
        this.$message({
          message: res.message,
          type: 'success'
        })
        this.getAttentionStatus()
        // console.log('follow status', res)
        // this.isFollowed = res.status
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async unfollowUser () {
      try {
        let res = await userService.cancelAttention({
          token: this.$store.getters.token,
          user_id: this.$route.params.id
        })
        this.$message({
          message: res.message,
          type: 'success'
        })
        this.getAttentionStatus()
        // console.log('follow status', res)
        // this.isFollowed = res.status
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getAttentionStatus()
  }
}
</script>

<style lang="less">
.follow-btn-root{
  .follow-btn {
    width: 80px;
    height: 30px;
    background-color: #F1356F;
    box-sizing: border-box;
    border-radius: 3px;
    color: white;
    line-height: 30px;
    cursor: pointer;
    &.unfollow{
      background-color: rgb(221, 162, 181);
    }
  }
}

</style>
