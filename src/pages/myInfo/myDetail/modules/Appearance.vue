<template>
<div>
  <div class="appearance-content">
    <el-form class="form-sector" label-position="right" label-width="110px"
        :model="appearanceInfo" ref="infoForm" :rules="FormRules">
      <el-form-item prop="appearWeight">
        <span slot="label">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重&nbsp;:</span>
        <el-input class="input-style" size="small" v-model="appearanceInfo.appearWeight" maxlength="3">
        </el-input>&nbsp;公斤
      </el-form-item>
      <el-form-item prop="appearBody">
        <span slot="label">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;:</span>
        <el-select size="small" v-model="appearanceInfo.appearBody">
          <el-option v-for="item in options.appearBody" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="appearFace">
        <span slot="label">脸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;:</span>
        <el-select size="small" v-model="appearanceInfo.appearFace">
          <el-option v-for="item in options.appearFace" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="eye">
        <span slot="label">眼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;睛：</span>
        <div class="item-box">
          <el-select class="select-style" size="small"
           v-model="appearanceInfo.appearEyeColor"
           placeholder="请选择眼色">
           <el-option v-for="item in options.appearEyeColor" :key="item"
              :label="item" :value="item"></el-option></el-select>
          <el-select class="select-style" size="small"
            v-model="appearanceInfo.appearEyeType"
            placeholder="请选择眼型">
            <el-option v-for="item in options.appearEyeType" :key="item"
              :label="item" :value="item"></el-option></el-select>
        </div>
      </el-form-item>
      <el-form-item prop="hair">
        <span slot="label">头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发：</span>
        <div class="item-box">
          <el-select class="select-style" size="small"
           v-model="appearanceInfo.appearHairColor"
           placeholder="请选择发色">
           <el-option v-for="item in options.appearHairColor" :key="item"
              :label="item" :value="item"></el-option></el-select>
          <el-select class="select-style" size="small"
           v-model="appearanceInfo.appearHairType"
           placeholder="请选择发型">
           <el-option v-for="item in options.appearHairType" :key="item"
              :label="item" :value="item"></el-option></el-select>
          <el-select class="select-style" size="small"
           v-model="appearanceInfo.appearHairLength"
           placeholder="请选择发长">
           <el-option v-for="item in options.appearHairLength" :key="item"
              :label="item" :value="item"></el-option></el-select>
        </div>
      </el-form-item>
      <el-form-item prop="appearSkin">
        <span slot="label">皮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;肤&nbsp;:</span>
        <el-select size="small" v-model="appearanceInfo.appearSkin">
          <el-option v-for="item in options.appearSkin" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="appearSkinColor">
        <span slot="label">肤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色&nbsp;:</span>
        <el-select size="small" v-model="appearanceInfo.appearSkinColor">
          <el-option v-for="item in options.appearSkinColor" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="appearMuscle">
        <span slot="label">肌&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;肉&nbsp;:</span>
        <el-select size="small" v-model="appearanceInfo.appearMuscle">
          <el-option v-for="item in options.appearMuscle" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="健康情况 :" prop="appearHealth">
        <el-select size="small" v-model="appearanceInfo.appearHealth">
          <el-option v-for="item in options.appearHealth" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="穿着风格：" prop="style">
        <div class="style-box">
          <el-checkbox-group v-model="appearanceInfo.appearWearingStyle">
            <div class="checkbox-row">
              <el-checkbox label="休闲风格"></el-checkbox>
              <el-checkbox label="商务风格"></el-checkbox>
              <el-checkbox label="运动风格"></el-checkbox>
            </div>
            <div class="checkbox-row">
              <el-checkbox label="英伦风格"></el-checkbox>
              <el-checkbox label="非主流风格"></el-checkbox>
              <el-checkbox label="复古风格"></el-checkbox>
            </div>
            <div class="checkbox-row">
              <el-checkbox label="混搭风格"></el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
      </el-form-item>
    </el-form>
  </div>
  <div class="option-btn">
    <div class="btn" @click="saveDetails">保存</div>
      <!-- <div class="btn">跳过此页</div> -->
  </div>
</div>
</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      appearanceInfo: {
        appearWeight: '',
        appearBody: '',
        appearFace: '',
        appearEyeColor: '',
        appearEyeType: '',
        appearHairColor: '',
        appearHairType: '',
        appearHairLength: '',
        appearSkin: '',
        appearSkinColor: '',
        appearMuscle: '',
        appearHealth: '',
        appearWearingStyle: []
      },
      options: {
        appearBody: ['请选择', '苗条型', '匀称型', '高挑型', '丰满型', '健壮型', '魁梧型', '运动型',
          '曲线型', '高大型'],
        appearFace: ['请选择', '圆脸型', '方脸型', '长脸型', '瓜子脸型', '鸭蛋脸型', '国字脸型', '三角脸型',
          '菱形脸型', '保密'],
        appearEyeColor: ['请选择', '黑色', '蓝色', '浅褐色', '棕色', '灰色', '绿色', '特殊颜色'],
        appearEyeType: ['请选择', '标准眼', '丹凤眼', '细长眼', '眯缝眼', '三角眼', '深眼窝', '双眼皮大眼睛'],
        appearHairColor: ['请选择', '黑色', '金色', '褐色', '栗色', '灰色', '红色', '白色', '挑染', '光头'],
        appearHairType: ['请选择', '顺直', '大卷', '小卷', '微卷'],
        appearHairLength: ['请选择', '平头', '短发', '中长发', '长发', '其他'],
        appearSkin: ['请选择', '皮肤光滑', '皮肤白皙', '皮肤细腻', '皮肤暗黄', '皮肤粗糙', '皮肤敏感'],
        appearSkinColor: ['请选择', '小麦肤色', '黝黑肤色', '健康肤色', '亮白肤色'],
        appearMuscle: ['请选择', '肌肉发达', '有少量肌肉', '没有肌肉'],
        appearHealth: ['请选择', '运动健将', '结实健壮', '身体健康', '体质一般', '体弱多病', '身体残疾']
      },
      FormRules: {
        appearWeight: [
          { pattern: /^[\d]{2,3}$/, message: '请输入数字体重（公斤）', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async getDetails () {
      try {
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          data: Object.keys(this.appearanceInfo)
        })
        console.log(res)
        Object.keys(res.data.details).forEach(key => {
          if (key === 'appearWearingStyle') {
            this.appearanceInfo[key] = res.data.details[key]
          } else {
            this.appearanceInfo[key] = res.data.details[key][0]
          }
        })
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async saveDetails () {
      try {
        let res = await userService.setUserDetails({
          token: this.$store.getters.token,
          data: this.appearanceInfo
        })
        this.$message({
          message: res.message,
          type: 'success'
        })
        console.log(res)
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getDetails()
  }

}
</script>

<style lang="less">
.appearance-content {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  margin-bottom: 40px;
  .form-sector{
    box-sizing: border-box;
    .el-form-item{
      // margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
      .el-form-item__content{
        text-align: left;
        margin-left: 10px;
      }
    }
    .input-style {
      width: 200px;
    }
    .item-box {
      display: flex;
      flex-direction: row;
      .select-style {
        width: 150px;
        margin-right: 5px;
      }
    }
    .style-box {
      box-sizing: border-box;
      text-align: left;
      .checkbox-row {
        margin-bottom: 10px;
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

</style>
