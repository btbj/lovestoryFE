<template>
  <div class="account-info-container">
    <div class="account-info-title">
      <span class="icon-radio_button_unchecked item-icon"></span>
      <span>密码修改</span>
    </div>
    <div class="account-step-box"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.account-info-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .account-info-title {
    width: 150px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .item-icon {
      color: #F1356F;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .account-step-box {
    width: 100%;
    height: 100px;
    border: 1px solid black;
    box-sizing: border-box;
  }
}
</style>
