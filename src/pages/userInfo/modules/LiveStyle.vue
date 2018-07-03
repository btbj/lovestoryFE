<template>
  <div class="_box-container">
    <div class="_box-title">
      <span class="icon-radio_button_unchecked icon"></span>
      <span>生活方式</span>
    </div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">吸烟</span>：
          <span>不吸，但反感</span>
        </div>
        <div class="_item-column">
          <span class="label">饮酒</span>：
          <span>有兴致时喝</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">锻炼习惯</span>：
          <span>集中时间锻炼</span>
        </div>
        <div class="_item-column">
          <span class="label">饮食习惯</span>：
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">逛街购物</span>：
          <span>---</span>
        </div>
        <div class="_item-column">
          <span class="label">宗教信仰</span>：
          <span>无宗教信仰</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">作息时间</span>：
          <span>偶尔懒散一下</span>
        </div>
        <div class="_item-column">
          <span class="label">交际圈子</span>：
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">最大消费</span>：
          <span>购置服装</span>
        </div>
        <div class="_item-column">
          <span class="label">家务</span>：
          <span>会一些</span>
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
