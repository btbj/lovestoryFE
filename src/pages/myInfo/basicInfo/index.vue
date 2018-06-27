<template>
  <div class="basic-info-container">
    <div class="basic-info-title">
      <span class="icon-radio_button_unchecked icon-style"></span>
      <span>基本资料</span>
    </div>
    <div class="basic-info-label">资料越完善，同等条件我们将优先推荐您哦！</div>
    <div class="basic-info-box">
      <div class="basic-info-content">
        <div class="content-item-row">
          <div class="item-column">
            <span>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称&nbsp;:&nbsp;</span>
            <span>老爷</span>
          </div>
          <div class="item-column">
            <span>身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高&nbsp;:&nbsp;</span>
            <span>172cm</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别&nbsp;:&nbsp;</span>
            <span>男</span>
          </div>
          <div class="item-column">
            <span>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄&nbsp;:&nbsp;</span>
            <span>39岁</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>出生日期&nbsp;:&nbsp;</span>
            <span>1978-11-21</span>
          </div>
          <div class="item-column">
            <span>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历&nbsp;:&nbsp;</span>
            <span>大专</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;肖&nbsp;:&nbsp;</span>
            <span>马</span>
          </div>
          <div class="item-column">
            <span>婚姻状况&nbsp;:&nbsp;</span>
            <span>离异</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>星&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;座&nbsp;:&nbsp;</span>
            <span>天蝎座</span>
          </div>
        </div>
      </div>
    </div>
    <div class="seprator"></div>
    <div class="basic-info-form">
      <el-form class="form-sector" label-position="right" label-width="100px"
        :model="basicInfo" ref="infoForm" :rules="formRule">
        <el-form-item label="有无子女 :" prop="child">
          <el-select size="small" v-model="basicInfo.child">
            <el-option label="有" value="you"></el-option>
            <el-option label="无" value="wu"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所在地区 :" prop="region">
          <el-select size="small" v-model="basicInfo.region"></el-select>
        </el-form-item>
        <el-form-item prop="account">
          <span slot="label">户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;口&nbsp;:</span>
          <el-select size="small" v-model="basicInfo.account"></el-select>
        </el-form-item>
        <el-form-item prop="blood">
          <span slot="label">血&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;:</span>
          <el-select size="small" v-model="basicInfo.blood">
            <el-option label="A型" value="A"></el-option>
            <el-option label="B型" value="B"></el-option>
            <el-option label="AB型" value="AB"></el-option>
            <el-option label="O型" value="O"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="ethnic">
          <span slot="label">民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族&nbsp;:</span>
          <el-select size="small" v-model="basicInfo.ethnic"></el-select>
        </el-form-item>
        <el-form-item prop="salary">
          <span slot="label">月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;薪&nbsp;:</span>
          <el-select size="small" v-model="basicInfo.salary"></el-select>
        </el-form-item>
        <el-form-item label="居住情况 :" prop="living">
          <el-select size="small" v-model="basicInfo.living"></el-select>
        </el-form-item>
        <el-form-item label="购车情况 :" prop="car">
          <el-select size="small" v-model="basicInfo.car"></el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="seprator"></div>
    <div class="basic-info-contact">
      <div class="contact-label">联系方式</div>
      <div class="contact-label" style="color: lightgrey">以下资料我们将为您保密，不会显示在您的个人资料页面上</div>
      <el-form class="form-sector" label-position="right" label-width="100px"
        :model="contactInfo" ref="contactForm">
        <el-form-item label="真实姓名 :" prop="name">
          <el-input size="small" v-model="contactInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号 :" prop="idNumber">
          <el-input size="small" v-model="contactInfo.idNumber"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <span slot="label">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱&nbsp;:</span>
          <el-input size="small" v-model="contactInfo.email"></el-input>
        </el-form-item>
        <el-form-item prop="wechat">
          <span slot="label">微&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信&nbsp;:</span>
          <el-input size="small" v-model="contactInfo.wechat"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="option-btn">
      <div class="btn">保存并继续</div>
      <div class="btn">跳过此页</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contactInfo: {
        name: '',
        idNumber: '',
        email: '',
        wechat: ''
      },
      basicInfo: {
        child: '',
        region: '',
        account: '',
        blood: '',
        ethnic: '',
        salary: '',
        living: '',
        car: ''
      },
      formRule: {
        child: [
          { required: true, message: '请选择有无子女', trigger: 'change' }
        ],
        region: [
          { required: true, message: '请选择所在地区', trigger: 'change' }
        ],
        account: [
          { required: true, message: '请选择户口', trigger: 'change' }
        ],
        blood: [
          { required: true, message: '请选择血型', trigger: 'change' }
        ],
        ethnic: [
          { required: true, message: '请选择民族', trigger: 'change' }
        ],
        salary: [
          { required: true, message: '请选择月薪', trigger: 'change' }
        ],
        living: [
          { required: true, message: '请选择居住情况', trigger: 'change' }
        ],
        car: [
          { required: true, message: '请选择购车情况', trigger: 'change' }
        ]
      }
    }
  }
}
</script>

<style lang="less">
.basic-info-container {
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
  .basic-info-title {
    width: 150px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .icon-style {
      color: #F1356F;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .basic-info-label {
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
  .basic-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .basic-info-content {
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      padding: 5px 5px 5px 25px;
      text-align: left;
      .content-item-row {
        width: 100%;
        height: 20px;
        box-sizing: border-box;
        font-size: 14px;
        margin-bottom: 10px;
        display: flex;
        .item-column {
          display: flex;
          align-items: center;
          width: 50%;
        }
      }
    }
  }
  .basic-info-form {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 25px;
    .form-sector{
      box-sizing: border-box;
      padding: 10px 0;
    }
  }
  .basic-info-contact {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    .contact-label {
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      color: #F1356F;
      font-size: 14px;
      line-height: 30px;
      padding: 0 0 0 25px;
      text-align: left;
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
.el-form-item{
  margin-bottom: 5px;
  &:last-child{
    margin-bottom: 0;
  }
  .el-form-item__content{
    text-align: left;
    margin-left: 10px;
    .el-input{
      width: 250px;
    }
  }
}

</style>
