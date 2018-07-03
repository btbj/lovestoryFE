<template>
  <div class="_box-container">
    <div class="_box-title">
      <span class="icon-radio_button_unchecked icon"></span>
      <span>经济实力</span>
    </div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">月薪</span>：
          <span>2000~5000元</span>
        </div>
        <div class="_item-column">
          <span class="label">购房</span>：
          <span>与父母同住</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">购车</span>：
          <span>暂未购车</span>
        </div>
        <div class="_item-column">
          <span class="label">经济观念</span>：
          <span>---</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">投资理财</span>：
          <span>---</span>
        </div>
        <div class="_item-column">
          <span class="label">外债贷款</span>：
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
