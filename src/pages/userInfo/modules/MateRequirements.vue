<template>
  <div class="_box-container">
    <div class="_box-title">
      <span class="mdi-radio_button_unchecked icon"></span>
      <span>择偶要求</span>
    </div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">所在地区</span>：
          <span v-if="info.condition.province">{{info.condition.province}} {{info.condition.city}}</span>
          <span v-else>不限</span>
        </div>
        <div class="_item-column">
          <span class="label">身高范围</span>：
          <span v-if="info.condition.height_min && info.condition.height_max">
            {{info.condition.height_min}}厘米~{{info.condition.height_max}}厘米
          </span>
          <span v-else-if="info.condition.height_min">{{info.condition.height_min}}厘米以上</span>
          <span v-else>不限</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">婚史</span>：
          <span>{{info.condition.marital_status || '不限'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">民族</span>：
          <span>{{info.condition.nation || '不限'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">学历</span>：
          <span>{{info.condition.education || '不限'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">有无照片</span>：
          <span>{{info.condition.has_images ? '有照片' : '不限'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">年龄范围</span>：
          <span v-if="info.condition.age_min && info.condition.age_max">
            {{info.condition.age_min}}岁~{{info.condition.age_max}}岁
          </span>
          <span v-else-if="info.condition.age_min">{{info.condition.age_min}}岁以上</span>
          <span v-else>不限</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style lang="less">
._box-title {
  width: 150px;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  .icon {
    color: #F1356F;
    font-weight: bold;
    margin-right: 10px;
  }
}
._box-container {
  width: 100%;
  border: 1px solid lightgrey;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  ._marriage-item-label {
    width: 100%;
    height: 25px;
    background-color: lightgrey;
    box-sizing: border-box;
    color: #F1356F;
    padding: 0 0 0 25px;
    line-height: 25px;
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0;
  }
  ._box-content {
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    padding: 5px 5px 5px 25px;
    text-align: left;
    ._content-item-row {
      width: 100%;
      height: 20px;
      box-sizing: border-box;
      font-size: 14px;
      margin-bottom: 5px;
      display: flex;
      ._item-column {
        display: flex;
        align-items: center;
        width: 50%;
        .label{
          width: 70px;
          text-align-last: justify;
        }
      }
    }
  }
}
</style>
