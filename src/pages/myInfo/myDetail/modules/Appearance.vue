<template>
<div>
  <div class="appearance-content">
    <el-form class="form-sector" label-position="right" label-width="110px"
        :model="appearanceInfo" ref="infoForm">
      <el-form-item prop="weight">
        <span slot="label">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重&nbsp;:</span>
        <el-input class="input-style" size="small" v-model="appearanceInfo.weight">
        </el-input>&nbsp;公斤
      </el-form-item>
      <el-form-item prop="body">
        <span slot="label">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;:</span>
        <el-select size="small" v-model="appearanceInfo.body">
          <el-option v-for="item in options.body" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="face">
        <span slot="label">脸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;:</span>
        <el-select size="small" v-model="appearanceInfo.face">
          <el-option v-for="item in options.face" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="eye">
        <span slot="label">眼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;睛&nbsp;:</span>
        <div class="item-box">
          <el-select class="select-style" size="small"
           v-model="appearanceInfo.eyeColor"
           placeholder="请选择眼色">
           <el-option v-for="item in options.eyeColor" :key="item"
              :label="item" :value="item"></el-option></el-select>
          <el-select class="select-style" size="small"
            v-model="appearanceInfo.eyeType"
            placeholder="请选择眼型">
            <el-option v-for="item in options.eyeType" :key="item"
              :label="item" :value="item"></el-option></el-select>
        </div>
      </el-form-item>
      <el-form-item prop="hair">
        <span slot="label">头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发&nbsp;:</span>
        <div class="item-box">
          <el-select class="select-style" size="small"
           v-model="appearanceInfo.hairColor"
           placeholder="请选择发色">
           <el-option v-for="item in options.hairColor" :key="item"
              :label="item" :value="item"></el-option></el-select>
          <el-select class="select-style" size="small"
           v-model="appearanceInfo.hairType"
           placeholder="请选择发型">
           <el-option v-for="item in options.hairType" :key="item"
              :label="item" :value="item"></el-option></el-select>
          <el-select class="select-style" size="small"
           v-model="appearanceInfo.hairLength"
           placeholder="请选择发长">
           <el-option v-for="item in options.hairLength" :key="item"
              :label="item" :value="item"></el-option></el-select>
        </div>
      </el-form-item>
      <el-form-item prop="skin">
        <span slot="label">皮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;肤&nbsp;:</span>
        <el-select size="small" v-model="appearanceInfo.skin">
          <el-option v-for="item in options.skin" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="color">
        <span slot="label">肤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色&nbsp;:</span>
        <el-select size="small" v-model="appearanceInfo.color">
          <el-option v-for="item in options.color" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="muscle">
        <span slot="label">肌&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;肉&nbsp;:</span>
        <el-select size="small" v-model="appearanceInfo.muscle">
          <el-option v-for="item in options.muscle" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="健康情况 :" prop="health">
        <el-select size="small" v-model="appearanceInfo.health">
          <el-option v-for="item in options.health" :key="item"
              :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="穿着风格 :" prop="style">
        <div class="style-box">
          <el-checkbox-group v-model="appearanceInfo.styleList">
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
    <div class="btn">保存并继续</div>
    <div class="btn">跳过此页</div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      appearanceInfo: {
        weight: '',
        body: '',
        face: '',
        eyeColor: '',
        eyeType: '',
        hairColor: '',
        hairType: '',
        hairLength: '',
        skin: '',
        color: '',
        muscle: '',
        health: '',
        styleList: []
      },
      options: {
        body: ['请选择', '苗条型', '匀称型', '高挑型', '丰满型', '健壮型', '魁梧型', '运动型',
          '曲线型', '高大型'],
        face: ['请选择', '圆脸型', '方脸型', '长脸型', '瓜子脸型', '鸭蛋脸型', '国字脸型', '三角脸型',
          '菱形脸型', '保密'],
        eyeColor: ['请选择', '黑色', '蓝色', '浅褐色', '棕色', '灰色', '绿色', '特殊颜色'],
        eyeType: ['请选择', '标准眼', '丹凤眼', '细长眼', '眯缝眼', '三角眼', '深眼窝', '双眼皮大眼睛'],
        hairColor: ['请选择', '黑色', '金色', '褐色', '栗色', '灰色', '红色', '白色', '挑染', '光头'],
        hairType: ['请选择', '顺直', '大卷', '小卷', '微卷'],
        hairLength: ['请选择', '平头', '短发', '中长发', '长发', '其他'],
        skin: ['请选择', '皮肤光滑', '皮肤白皙', '皮肤细腻', '皮肤暗黄', '皮肤粗糙', '皮肤敏感'],
        color: ['请选择', '小麦肤色', '黝黑肤色', '健康肤色', '亮白肤色'],
        muscle: ['请选择', '肌肉发达', '有少量肌肉', '没有肌肉'],
        health: ['请选择', '运动健将', '结实健壮', '身体健康', '体质一般', '体弱多病', '身体残疾']
      }
    }
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
      margin-bottom: 10px;
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
