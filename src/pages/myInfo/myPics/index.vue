<template>
  <div class="pics-info-container">
    <div class="pics-info-title">
      <span class="icon-radio_button_unchecked item-icon"></span>
      <span>我的相册</span>
    </div>
    <div class="pics-info-label">资料越完善，同等条件我们将优先推荐您哦！</div>
    <div class="pics-info-box">
      <div class="pics-info-banner">我的头像</div>
      <div class="avatar-container">
        <div class="avatar-box">
          <div class="avatar">
            <img v-if="avatarUrl" :src="avatarUrl"
                class="img-style">
          </div>
        </div>
        <!-- <div class="avatar-btn">更换头像</div> -->
        <upload-avatar-btn @changed="handleNewAvatar"/>
      </div>
    </div>
    <div class="seprator"></div>
    <pic-wall></pic-wall>
    <div class="option-btn">
      <div class="btn" @click="nextStep">继续</div>
      <!-- <div class="btn" @click="nextStep">跳过此页</div> -->
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import UploadAvatarBtn from './components/UploadAvatarBtn'
import PicWall from './components/PicWall'

export default {
  components: { UploadAvatarBtn, PicWall },
  data () {
    return {
      avatarUrl: null
    }
  },
  methods: {
    nextStep () {
      this.$router.push({name: 'myinfo-mydetail'})
    },
    async getUserInfo () {
      try {
        let res = await userService.getInfo({
          token: this.$store.getters.token
        })
        this.avatarUrl = res.data.info.info.head_image_url
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    async submitInfo () {
      if (this.letterCount < 20) {
        alert('内心独白字数不小于20')
        return
      }
      try {
        let res = await userService.setMonologue({
          token: this.$store.getters.token,
          monologue: this.intro
        })
        this.$message({
          message: res.message,
          type: 'success'
        })
        this.$router.push({name: 'myinfo-mypics'})
      } catch (error) {
        userService.handleErr(error)
      }
    },
    handleNewAvatar () {
      window.location.reload()
    }
  },
  mounted: async function () {
    await this.getUserInfo()
  }
}
</script>

<style lang="less">
.pics-info-container {
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
    margin-bottom: 20px;
  }
  .pics-info-title {
    width: 150px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .item-icon {
      color: #F1356F;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .pics-info-label {
    width: 100%;
    height: 30px;
    background-color: #F0F0F0;
    box-sizing: border-box;
    color: #F1356F;
    font-size: 14px;
    line-height: 30px;
    padding: 0 0 0 25px;
    text-align: left;
    margin-bottom: 15px;
  }
  .pics-info-banner {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    text-align: left;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 0 25px;
  }
  .pics-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .avatar-container {
      width: 200px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      .avatar-box {
        width: 140px;
        height: 140px;
        border: 1px solid lightgrey;
        box-sizing: border-box;
        margin-bottom: 20px;
        padding: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        .avatar {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
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

    }
  }
  .option-btn {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    .btn {
      width: 120px;
      height: 40px;
      background-color: #EF356E;
      box-sizing: border-box;
      border-radius: 5px;
      color: white;
      line-height: 40px;
      margin: 0 30px;
      font-size: 14px;
      cursor: pointer;
    }
  }
}

</style>
