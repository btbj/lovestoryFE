<template>
  <div class="dating-records-container">
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="谁看过我" name="first">
        <member-card></member-card>
      </el-tab-pane>
      <el-tab-pane label="我看过谁" name="second">我看过谁</el-tab-pane>
      <el-tab-pane label="谁关注我" name="third">谁关注我</el-tab-pane>
      <el-tab-pane label="我关注谁" name="fourth">我关注谁</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
const MemberCard = r => require.ensure([], () => r(require('./components/MemberCard')), 'myinfo')

export default {
  components: {
    MemberCard
  },
  data () {
    return {
      activeTab: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
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
  .el-tabs__nav-wrap {
    border-bottom: 1px solid #F1356F;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item {
    border-bottom: none;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    background-color: #F1356F;
    color: white;
  }
  .el-tabs__item {
    width: 120px;
    border-right: 1px solid #F1356F;
    box-sizing: border-box;
  }
  .el-tabs__item:hover {
    color: #F1356F;
  }
}
</style>
