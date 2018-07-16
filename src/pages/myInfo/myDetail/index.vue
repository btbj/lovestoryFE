<template>
  <div class="detail-info-container">
    <div class="detail-info-title">
      <span class="mdi-radio_button_unchecked icon"></span>
      <span>详细资料</span>
    </div>
    <div class="detail-info-label">资料越完善，同等条件我们将优先推荐您哦！</div>
    <div class="detail-info-box">
      <div class="switch-tab-list">
        <div :class="['switch-tab-item', isCurrent('economic') ? 'selected' : '']"
          @click="changeTab('economic')"><span>经济实力</span></div>
        <div :class="['switch-tab-item', isCurrent('life') ? 'selected' : '']"
          @click="changeTab('life')"><span>生活方式</span></div>
        <div :class="['switch-tab-item', isCurrent('work') ? 'selected' : '']"
          @click="changeTab('work')"><span>工作学习</span></div>
        <div :class="['switch-tab-item', isCurrent('appearance') ? 'selected' : '']"
          @click="changeTab('appearance')"><span>外貌体型</span></div>
        <div :class="['switch-tab-item', isCurrent('marriage') ? 'selected' : '']"
          @click="changeTab('marriage')"><span>婚姻观念</span></div>
        <div :class="['switch-tab-item', isCurrent('hobby') ? 'selected' : '']"
          @click="changeTab('hobby')"><span>兴趣爱好</span></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    isCurrent (type) {
      let rightRoute = this.$route.name === 'myinfo-mydetail-' + type
      return rightRoute
    },
    changeTab (type) {
      this.$router.push({name: 'myinfo-mydetail-' + type})
    }
  }
}
</script>

<style lang="less">
.detail-info-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .detail-info-title {
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
  .detail-info-label {
    width: 100%;
    height: 30px;
    background-color: #F0F0F0;
    box-sizing: border-box;
    color: #F1356F;
    font-size: 14px;
    line-height: 30px;
    padding: 0 0 0 25px;
    text-align: left;
    margin-bottom: 30px;
  }
  .detail-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    .switch-tab-list{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid #F1356F;
      margin-bottom: 5px;
      .switch-tab-item{
        height: 35px;
        width: 100px;
        font-size: 14px;
        box-sizing: border-box;
        margin-right: -1px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &.selected{
          background: #F1356F;
          color: white;
        }
        span{
          width: 100%;
          border-right: 1px solid #F1356F;
        }
      }
    }

  }
}

</style>
