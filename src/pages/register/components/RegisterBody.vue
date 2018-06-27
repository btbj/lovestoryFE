<template>
  <div class="register-body-container">
    <div class="register-form">
      <div class="form-title">
        <div class="title-text">用户注册</div>
        <div class="title-tail">填写的不是资料，是一辈子的幸福</div>
      </div>
      <el-form class="form-sector" label-position="right" label-width="170px"
        :model="registerInfo" ref="registerForm" :rules="formRule">
        <!-- <el-form-item label="姓名" prop="name">
          <el-input size="small" v-model="registerInfo.name"></el-input>
        </el-form-item> -->
        <el-form-item label="性别" prop="sex">
          <el-radio v-model="registerInfo.sex" label="男">男</el-radio>
          <el-radio v-model="registerInfo.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <el-date-picker size="small"
            v-model="registerInfo.birthday"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="常住地" prop="address">
          <el-input size="small" v-model="registerInfo.address"></el-input>
        </el-form-item>
        <el-form-item label="婚姻状况" prop="marrageState">
          <el-radio v-model="registerInfo.marrageState" label="未婚">未婚</el-radio>
          <el-radio v-model="registerInfo.marrageState" label="离异">离异</el-radio>
          <el-radio v-model="registerInfo.marrageState" label="丧偶">丧偶</el-radio>
        </el-form-item>
        <el-form-item label="身高" prop="height">
          <el-input size="small" v-model="registerInfo.height" maxlength="3"></el-input>
        </el-form-item>
        <el-form-item label="学历" prop="education">
          <el-input size="small" v-model="registerInfo.education"></el-input>
        </el-form-item>
        <el-form-item label="薪水" prop="salary">
          <el-input size="small" v-model="registerInfo.salary"></el-input>
        </el-form-item>
        <div class="seperator"></div>
        <el-form-item label="手机号" prop="phone">
          <el-input style="width: 200px;" size="small" v-model="registerInfo.phone" maxlength="11"></el-input>
          <otp-btn class="otp-btn" :phoneNumber="registerInfo.phone"></otp-btn>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input style="width: 200px;" size="small" v-model="registerInfo.code"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
          <el-input size="small" type="password" v-model="registerInfo.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="passwordConfirm">
          <el-input size="small" type="password" v-model="registerInfo.passwordConfirm" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input size="small" v-model="registerInfo.nickname"></el-input>
        </el-form-item>
        <el-form-item label="自我介绍" prop="introduction">
          <el-input type="textarea" resize="none"
            :rows="4"
            v-model="registerInfo.introduction"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="register-btn" @click="validateForm">立即注册</el-button>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import OtpBtn from '@/components/OtpBtn'

export default {
  components: { OtpBtn },
  data () {
    let checkEqualPass = (rule, value, callback) => {
      if (value !== this.registerInfo.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerInfo: {
        // name: 'btbj',
        sex: '',
        birthday: '',
        address: '',
        marrageState: '',
        height: '',
        education: '',
        salary: '',
        phone: '',
        code: '',
        password: '',
        passwordConfirm: '',
        nickname: '',
        introduction: ''
      },
      formRule: {
        // name: [
        //   { required: true, message: '请输入姓名', trigger: 'blur' }
        // ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        birthday: [
          { required: true, message: '请选择生日', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入常住地', trigger: 'blur' }
        ],
        marrageState: [
          { required: true, message: '请选择婚姻状况', trigger: 'blur' }
        ],
        height: [
          { required: true, message: '请输入身高', trigger: 'blur' },
          { pattern: /^[\d]{3}$/, message: '请输入身高（cm）', trigger: 'blur' }
        ],
        education: [
          { required: true, message: '请输入学历', trigger: 'blur' }
        ],
        salary: [
          { required: true, message: '请输入薪水', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[\d]{10}$/, message: '手机号格式错误', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入收到的验证码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        passwordConfirm: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          { validator: checkEqualPass, trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        introduction: [
          { required: true, message: '请输入自我介绍', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    navTo (destName) {
      this.$router.push({name: destName})
    },
    validateForm () {
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          this.startRegister()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async startRegister () {
      try {
        let res = await userService.doReg({
          // name: this.registerInfo.name,
          sex: this.registerInfo.sex,
          year: this.registerInfo.birthday.getFullYear(),
          month: this.registerInfo.birthday.getMonth() + 1,
          day: this.registerInfo.birthday.getDay(),
          address: this.registerInfo.address,
          marital_status: this.registerInfo.marrageState,
          height: this.registerInfo.height,
          education: this.registerInfo.education,
          month_pay: this.registerInfo.salary,
          introduction: this.registerInfo.introduction,
          phone: this.registerInfo.phone,
          code: this.registerInfo.code,
          password: this.registerInfo.password,
          nickname: this.registerInfo.nickname
        })
        this.$message({
          message: res.message,
          type: 'success'
        })
      } catch (error) {
        console.log(error)
        if (error.message) {
          this.$message.error(error.message)
        }
      }
    }
  }
}
</script>

<style lang="less">
.register-body-container {
  flex: 1;
  width: 100%;
  min-height: 1220px;
  border-top: 2px solid #F3487E;
  box-sizing: border-box;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .register-form{
    margin-top: 40px;
    height: 1120px;
    background: white;
    width: 840px;
    box-sizing: border-box;
    padding: 20px;
    .form-title{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      .title-tail{
        color: #F3487E;
      }
    }
    .form-sector{
      border-top: 1px solid #ddd;
      box-sizing: border-box;
      padding: 20px 0;
      .seperator{
        margin-bottom: 22px;
        width: 100%;
        border-bottom: 1px solid #ddd;
      }
      .otp-btn{
        margin-left: 15px;
        height: 40px;
      }
    }
  }
  .register-btn{
    color: white;
    background: #F3487E;
    border-radius: 0;
    border: none;
    width: 300px;
  }
}
.el-form-item{
  &:last-child{
    margin-bottom: 0;
  }
  .el-form-item__content{
    text-align: left;
    .el-input{
      width: 300px;
    }
    .el-textarea{
      width: 460px;
    }
  }
}

</style>
