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
          <el-date-picker size="small" class="input-item"
            v-model="registerInfo.birthday"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="常住地" prop="address">
          <area-picker class="input-item" v-model="registerInfo.address"></area-picker>
        </el-form-item>
        <el-form-item label="婚姻状况" prop="marrageState">
          <el-radio v-model="registerInfo.marrageState" label="未婚">未婚</el-radio>
          <el-radio v-model="registerInfo.marrageState" label="离异">离异</el-radio>
          <el-radio v-model="registerInfo.marrageState" label="丧偶">丧偶</el-radio>
        </el-form-item>
        <el-form-item label="身高" prop="height">
          <el-input class="input-item" size="small" placeholder="请输入身高（cm）"
            v-model="registerInfo.height" maxlength="3"></el-input>
        </el-form-item>
        <el-form-item label="学历" prop="education">
          <el-select size="small" class="input-item" placeholder="请选择学历"
            v-model="registerInfo.education">
            <el-option v-for="(item, index) in options.education" :key="index"
              :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="月薪" prop="salary">
          <el-input class="input-item" size="small" placeholder="请输入月薪（元）"
            v-model="registerInfo.salary"></el-input>
        </el-form-item>
        <div class="seperator"></div>
        <el-form-item label="手机号" prop="phone">
          <el-input style="width: 200px;" size="small" placeholder="请输入手机号"
            v-model="registerInfo.phone" maxlength="11"></el-input>
          <otp-btn class="otp-btn" :phoneNumber="registerInfo.phone"></otp-btn>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input style="width: 200px;" size="small" placeholder="请输入验证码"
            v-model="registerInfo.code" maxlength="4"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
          <el-input class="input-item" size="small" type="password" placeholder="请输入密码"
            v-model="registerInfo.password" auto-complete="new-password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="passwordConfirm">
          <el-input class="input-item" size="small" type="password" placeholder="请再次输入密码"
            v-model="registerInfo.passwordConfirm" auto-complete="new-password"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input class="input-item" size="small" placeholder="请输入昵称"
            v-model="registerInfo.nickname"></el-input>
        </el-form-item>
        <el-form-item label="自我介绍" prop="introduction">
          <el-input class="textarea-item" type="textarea" resize="none"
            placeholder="请输入自我介绍"
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
import AreaPicker from '@/components/AreaPicker'

export default {
  components: { OtpBtn, AreaPicker },
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
        sex: '男',
        birthday: '',
        address: ['北京市', '东城区'],
        marrageState: '未婚',
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
          { type: 'array', required: true, message: '请输入常住地', trigger: 'blur' }
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
          { required: true, message: '请输入月薪（元）', trigger: 'blur' },
          { pattern: /^[\d]{1,10}$/, message: '请输入月薪（元）', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[\d]{10}$/, message: '手机号格式错误', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入收到的验证码', trigger: 'blur' },
          { pattern: /^[\d]{4}$/, message: '验证码格式错误', trigger: 'blur' }
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
      },
      options: {
        education: ['高中及中专以下', '大专', '本科', '双学士', '硕士', '博士', '博士后']
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
          province: this.registerInfo.address[0],
          city: this.registerInfo.address[1],
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
  },
  computed: {

  },
  mounted: function () {
    this.registerInfo.birthday = new Date('2000-01-01')
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
  }
}
.input-item{
  width: 300px;
}
.textarea-item{
  width: 460px;
}

</style>
