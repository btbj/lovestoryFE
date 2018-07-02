<template>
  <div class="intro-info-container">
    <div class="intro-info-title">
      <span class="icon-radio_button_unchecked icon"></span>
      <span>内心独白</span>
    </div>
    <div class="intro-info-label">资料越完善，同等条件我们将优先推荐您哦！</div>
    <div class="intro-info-box">
      <el-input type="textarea" resize="none"
        :rows="10" v-model="intro" maxlength="1000"></el-input>
      <div class="intro-remark">限20~1000字， 目前已输入{{letterCount}}, 您还可以输入{{1000-letterCount}}字</div>
    </div>
    <div class="option-btn">
      <div class="btn" @click="submitInfo">保存并继续</div>
      <div class="btn">跳过此页</div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      intro: ''
    }
  },
  methods: {
    async getUserInfo () {
      try {
        let res = await userService.getInfo({
          token: this.$store.getters.token
        })
        this.intro = res.data.info.info.monologue || ''
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
    }
  },
  computed: {
    letterCount () {
      return this.intro.length
    }
  },
  mounted: async function () {
    await this.getUserInfo()
  }

}
</script>

<style lang="less">
.intro-info-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .intro-info-title {
    width: 150px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .icon {
      color: #F1356F;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .intro-info-label {
    width: 100%;
    height: 30px;
    background-color: #F0F0F0;
    box-sizing: border-box;
    color: #F1356F;
    font-size: 14px;
    line-height: 30px;
    padding: 0 0 0 25px;
    text-align: left;
    margin-bottom: 30px;
  }
  .intro-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .intro-remark {
      margin-top: 5px;
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      line-height: 30px;
      text-align: left;
      font-size: 14px;
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
.el-textarea{
  width: 100%;
}
</style>
