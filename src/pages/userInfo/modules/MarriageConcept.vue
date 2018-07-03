<template>
  <div class="_box-container">
    <div class="_box-title">
      <span class="icon-radio_button_unchecked icon"></span>
      <span>婚姻观念</span>
    </div>
    <div class="_marriage-item-label">关于自己</div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">籍贯</span>：
          <span>湖北武汉</span>
        </div>
        <div class="_item-column">
          <span class="label">户口</span>：
          <span>湖北武汉</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">国籍</span>：
          <span>中国大陆</span>
        </div>
        <div class="_item-column">
          <span class="label">个性特征</span>：
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">幽默感</span>：
          <span>---</span>
        </div>
        <div class="_item-column">
          <span class="label">脾气</span>：
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">对待感情</span>：
          <span>---</span>
        </div>
        <div class="_item-column">
          <span class="label">是否要小孩</span>：
          <span>想要小孩</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">何时结婚</span>：
          <span>---</span>
        </div>
        <div class="_item-column">
          <span class="label" style="width: 120px">是否能接受异地恋</span>：
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">理想婚姻</span>：
          <span>---</span>
        </div>
      </div>
    </div>
    <div class="_marriage-item-label" style="margin-top: 20px">关于家庭</div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label" style="width: 120px">愿与对方父母同住</span>：
          <span>不愿意</span>
        </div>
        <div class="_item-column">
          <span class="label">家中排行</span>：
          <span>老幺</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">父母情况</span>：
          <span>---</span>
        </div>
        <div class="_item-column">
          <span class="label">兄弟姐妹</span>：
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label" style="width: 90px">父母经济情况</span>：
          <span>---</span>
        </div>
        <div class="_item-column">
          <span class="label" style="width: 90px">父母医保情况</span>：
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">父母的工作</span>：
          <span>---</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
    background-color: #F0F0F0;
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
