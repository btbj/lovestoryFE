<template>
  <div class="option-info-container">
    <div class="option-info-title">
      <span class="icon-radio_button_unchecked icon"></span>
      <span>择偶条件</span>
    </div>
    <div class="option-info-label">资料越完善，同等条件我们将优先推荐您哦！</div>
    <div class="option-info-box">
      <div class="option-info-banner">我的择偶条件</div>
      <div class="option-info-content">
        <div class="content-item-row">
          <div class="item-column">
            <span>所在地区&nbsp;:&nbsp;</span>
            <span>浙江宁波</span>
          </div>
          <div class="item-column">
            <span>身高范围&nbsp;:&nbsp;</span>
            <span>158厘米~164厘米</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>婚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;史&nbsp;:&nbsp;</span>
            <span>不限</span>
          </div>
          <div class="item-column">
            <span>民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族&nbsp;:&nbsp;</span>
            <span>不限</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历&nbsp;:&nbsp;</span>
            <span>不限</span>
          </div>
          <div class="item-column">
            <span>有无照片&nbsp;:&nbsp;</span>
            <span>有</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>年龄范围&nbsp;:&nbsp;</span>
            <span>26岁~32岁</span>
          </div>
        </div>
      </div>
    </div>
    <div class="seprator"></div>
    <div class="option-info-form">
      <div class="option-info-banner">修改择偶条件</div>
      <el-form class="form-sector" label-position="right" label-width="100px"
        :model="optionInfo" ref="infoForm" :rules="formRule">
        <el-form-item label="所在地区 :" prop="region" >
          <el-select size="small" v-model="optionInfo.region"></el-select>
        </el-form-item>
        <el-form-item prop="age">
          <span slot="label">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄&nbsp;:</span>
          <el-select size="small" v-model="optionInfo.age"></el-select>
        </el-form-item>
        <el-form-item prop="marriage">
          <span slot="label">婚姻状况&nbsp;:</span>
          <el-select size="small" v-model="optionInfo.marriage">
          </el-select>
        </el-form-item>
        <el-form-item prop="height">
          <span slot="label">身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高&nbsp;:</span>
          <el-select size="small" v-model="optionInfo.height"></el-select>
        </el-form-item>
        <el-form-item prop="education">
          <span slot="label">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历&nbsp;:</span>
          <el-select size="small" v-model="optionInfo.education"></el-select>
        </el-form-item>
        <el-form-item prop="ethnic">
          <span slot="label">民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族&nbsp;:</span>
          <el-select size="small" v-model="optionInfo.ethnic"></el-select>
        </el-form-item>
        <el-form-item label="有无照片 :" prop="picture">
          <el-select size="small" v-model="optionInfo.picture">
            <el-option label="有照片" value="you"></el-option>
            <el-option label="无照片" value="wu"></el-option>
          </el-select>
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
      optionInfo: {
        region: '',
        age: '',
        marriage: '',
        height: '',
        education: '',
        ethnic: '',
        picture: ''
      },
      formRule: {
        region: [
          { required: true, message: '请选择所在地区', trigger: 'change' }
        ],
        age: [
          { required: true, message: '请选择年龄', trigger: 'change' }
        ],
        marriage: [
          { required: true, message: '请选择婚姻状况', trigger: 'change' }
        ],
        height: [
          { required: true, message: '请选择身高', trigger: 'change' }
        ],
        education: [
          { required: true, message: '请选择学历', trigger: 'change' }
        ],
        ethnic: [
          { required: true, message: '请选择民族', trigger: 'change' }
        ],
        picture: [
          { required: true, message: '请选择有无照片', trigger: 'change' }
        ]
      }
    }
  }
}
</script>

<style lang="less">
.option-info-container {
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
  .option-info-title {
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
  .option-info-label {
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
  .option-info-banner {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    text-align: left;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .option-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .option-info-content {
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
  .option-info-form {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 40px;
    .form-sector{
      box-sizing: border-box;
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
    // .el-input{
    //   width: 250px;
    // }
  }
}
.input-item{
  width: 250px;
}
.area-piker{
  width: 300px;
}

</style>
