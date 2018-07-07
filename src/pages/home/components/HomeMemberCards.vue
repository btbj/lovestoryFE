<template>
  <div v-show="show" class="home-member-cards">
    <div class="page-cards">
      <div class="single-card" v-for="(member, index) in memberCardsList"
        :key="index">
        <div class="card-pic" :style="`background-image: url(${member.head_image_url})`">
          <!-- <img :src="member.head_image_url" class="img-style"> -->
        </div>
        <div class="card-info">
          <div class="member-info-item" style="color: #F02D73;font-size: 16px;">
            {{member.nickname}}
          </div>
          <div class="member-info-item">年龄：{{member.age}}</div>
          <div class="member-info-item">身高：{{member.height}}</div>
          <div class="member-info-item">学历：{{member.education}}</div>
          <!-- <div class="member-info-item">收入：{{member.income}}</div> -->
          <div class="member-detail-btn">
            <div class="btn" @click="checkUserDetail(member)">查看详情</div>
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
      show: false,
      memberCardsList: [ ]
    }
  },
  methods: {
    checkUserDetail (user) {
      this.$router.push({name: 'userinfo', params: {'id': user.id}})
    },
    async getList (page = 1) {
      try {
        let res = await userService.recommends({
          token: this.$store.getters.token,
          num: 8
        })
        console.log('success', res)
        this.memberCardsList = res.data.users
        this.show = true
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
.home-member-cards {
  margin: 10px 0 20px 0;
  box-sizing: border-box;
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .page-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .single-card {
      flex-basis: 25%;
      margin: 5px 0;
      display: flex;
      box-sizing: border-box;
      width: 205px;
      height: 155px;
      justify-content: flex-start;
      align-items: center;
      .card-pic {
        margin-right: 10px;
        width: 120px;
        height: 160px;
        background: white;
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
      .card-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 95px;
        height: 155px;
        box-sizing: border-box;
        .member-info-item {
          font-size: 14px;
          margin-bottom: 5px;
        }
        .member-detail-btn {
          width: 95px;
          height: 30px;
          margin-top: 15px;
          .btn {
            background-color: #FD6F9F;
            color: white;
            line-height: 30px;
            font-size: 14px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
