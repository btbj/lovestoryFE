<template>
  <div class="account-info-container"
    v-loading="loading">
    <div class="account-info-title">
      <span class="icon-radio_button_unchecked item-icon"></span>
      <span>密码修改</span>
    </div>
    <div class="account-step-box">
      <div :class="['step-item-box', stepNum === '1' ? 'selected' : '']">
        <div class="step-rectangle">1&nbsp;安全验证</div>
        <div class="step-solid-triangle"></div>
      </div>
      <div class="step-item-box"></div>
      <div :class="['step-item-box', stepNum === '3' ? 'selected' : '']">
        <div class="step-hollow-triangle"></div>
        <div class="step-rectangle">3&nbsp;修改成功</div>
      </div>
    </div>
    <div :class="['step-middle-box', stepNum === '2' ? 'selected' : '']">
      <div class="step-hollow-triangle"></div>
      <div class="step-rectangle" style="width: 178px">2&nbsp;输入新密码</div>
      <div class="step-solid-triangle"></div>
    </div>
    <div class="account-step-content" v-if="stepNum === '1'">
      <div class="item-row">
        <div class="row-label">您的手机号是:</div>
        <div class="row-content">
          <span>{{maskPhone}}</span>
          <otp-btn class="otp-btn" :phoneNumber="phone"></otp-btn>
          <!-- <div class="vecode-btn">发送验证码</div> -->
        </div>
      </div>
      <div class="item-row">
        <div class="row-label">手机验证码:</div>
        <div class="row-content">
          <el-input placeholder="请输入验证码" v-model="vecode" maxlength="4"></el-input>
        </div>
      </div>
      <div class="item-row">
        <div class="row-label"></div>
        <div class="row-content">
          <!-- <div class="vecode-remark">
            验证码已发送。超过60秒未收到短信校验码，可点击重新发送按钮来重新获取短信校验码。
          </div> -->
        </div>
      </div>
      <div class="btn-group">
        <div class="btn" style="margin-left: 200px" @click="verifyCode">下一步</div>
        <!-- <div class="btn" style="margin-left: 20px"
             @click="verifyCode">下一步</div> -->
      </div>
    </div>
    <div class="account-step-content" v-else-if="stepNum === '2'">
      <div class="item-row">
        <div class="row-label">新密码:</div>
        <div class="row-content">
          <el-input type="password" placeholder="请输入新密码" v-model="newPwd"
            maxlength="20" auto-complete="new-password"></el-input>
        </div>
      </div>
      <div class="item-row">
        <div class="row-label">再次输入新密码:</div>
        <div class="row-content">
          <el-input type="password" placeholder="请再次输入新密码" v-model="againPwd"
            maxlength="20" auto-complete="new-password"></el-input>
        </div>
      </div>
      <div class="btn-group">
        <div class="btn" style="margin-left: 200px" @click="changePwd">修改</div>
        <!-- <div class="btn" style="margin-left: 20px"
             @click="nextStep('3')">下一步</div> -->
      </div>
    </div>
    <div class="account-step-content" v-else-if="stepNum === '3'">
      修改成功
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import OtpBtn from '@/components/OtpBtn'

export default {
  components: { OtpBtn },
  data () {
    return {
      loading: false,
      phone: '',
      vecode: '',
      stepNum: '1',
      newPwd: '',
      againPwd: ''
    }
  },
  methods: {
    nextStep (id) {
      this.stepNum = id
    },
    async getUserInfo () {
      this.loading = true
      try {
        let res = await userService.getInfo({
          token: this.$store.getters.token
        })
        this.phone = res.data.info.info.phone
        console.log(res)
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },
    async verifyCode () {
      this.loading = true
      try {
        let res = await userService.verifyCode({
          phone: this.phone,
          code: this.vecode
        })
        console.log(res)
        this.nextStep('2')
      } catch (error) {
        userService.handleErr(error)
      }
      this.loading = false
    },
    async changePwd () {
      if (this.newPwd.length < 8 || this.againPwd.length < 8) {
        this.$message({
          message: '密码长度不能小于8位',
          type: 'error'
        })
        return
      }
      this.loading = true
      try {
        let res = await userService.changePwd({
          token: this.$store.getters.token,
          pwd: this.newPwd,
          pwd2: this.againPwd
        })
        console.log(res)
        this.nextStep('3')
      } catch (error) {
        userService.handleErr(error)
      }
      this.loading = false
    }
  },
  computed: {
    maskPhone () {
      if (!this.phone) {
        return null
      } else {
        return this.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
      }
    }
  },
  mounted: async function () {
    await this.getUserInfo()
  }
}
</script>

<style lang="less">
.account-info-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .account-info-title {
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
  .step-middle-box {
    height: 40px;
    box-sizing: border-box;
    display: flex;
    margin-top: -40px;
    margin-left: 164px;
  }
  .step-rectangle {
    width: 154px;
    height: 100%;
    background-color: lightgrey;
    line-height: 40px;
  }
  .step-solid-triangle {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-left: 40px solid lightgrey;
    border-bottom: 20px solid transparent;
  }
  .step-hollow-triangle {
    width: 0;
    height: 0;
    border-top: 20px solid lightgrey;
    border-left: 40px solid transparent;
    border-bottom: 20px solid lightgrey;
  }
  .selected {
    .step-rectangle {
      background-color: #F1356F;
      color: white;
    }
    .step-solid-triangle {
      border-left: 40px solid #F1356F;
    }
    .step-hollow-triangle {
      border-top: 20px solid #F1356F;
      border-bottom: 20px solid #F1356F;
    }
  }
  .account-step-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    .step-item-box {
      width: 196px;
      height: 40px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
    }
  }
  .account-step-content {
    margin: 30px 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    .item-row {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      .row-label {
        font-size: 16px;
        width: 120px;
        text-align: left;
      }
      .row-content {
        width: 300px;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .vecode-btn {
          margin-left: 20px;
          width: 120px;
          height: 40px;
          background-color: #F1356F;
          color: white;
          line-height: 40px;
          cursor: pointer;
        }
        .vecode-remark {
          width: 100%;
          text-align: left;
          color: grey;
          font-size: 14px;
        }
      }
    }
    .btn-group {
      margin-top: 20px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .btn {
        width: 100px;
        height: 30px;
        border-radius: 3px;
        background-color: #F1356F;
        color: white;
        line-height: 30px;
        cursor: pointer;
      }
    }
  }
}
.otp-btn{
  margin-left: 15px;
}
</style>
