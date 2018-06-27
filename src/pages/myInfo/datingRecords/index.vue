<template>
  <div class="dating-records-container">
    <div class="switch-tab-list">
      <div :class="['switch-tab-item', isCurrent('visitor') ? 'selected' : '']"
        @click="toDatingRecords('visitor')"><span>谁看过我</span></div>
      <div :class="['switch-tab-item', isCurrent('history') ? 'selected' : '']"
        @click="toDatingRecords('history')"><span>我看过谁</span></div>
      <div :class="['switch-tab-item', isCurrent('follower') ? 'selected' : '']"
        @click="toDatingRecords('follower')"><span>谁关注我</span></div>
      <div :class="['switch-tab-item', isCurrent('following') ? 'selected' : '']"
        @click="toDatingRecords('following')"><span>我关注谁</span></div>
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
      let rightRoute = this.$route.name === 'myinfo-datingrecords-' + type
      return rightRoute
    },
    toDatingRecords (type) {
      this.$router.push({name: 'myinfo-datingrecords-' + type})
    }
  }

}
</script>

<style lang="less">
.dating-records-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  .switch-tab-list{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #F1356F;
    .switch-tab-item{
      height: 35px;
      width: 120px;
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
  .pagination-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
}
</style>
