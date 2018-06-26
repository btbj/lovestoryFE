<template>
  <div class="left-bar-root">
    <user-info-box></user-info-box>
    <div class="seprator"></div>
    <div class="menu-list">
      <div class="menu-box">
        <div class="title">
          <span class="icon icon-people"></span>
          <span>交 友 记 录</span>
        </div>
        <div :class="['item', currentDatingRecordsType('visitor') ? 'selected': '']" @click="toDatingRecords('visitor')">
          <span class="icon icon-keyboard_arrow_right"></span>
          <span>谁看过我</span>
        </div>
        <div :class="['item', currentDatingRecordsType('history') ? 'selected': '']" @click="toDatingRecords('history')">
          <span class="icon icon-keyboard_arrow_right"></span>
          <span>我看过谁</span>
        </div>
        <div :class="['item', currentDatingRecordsType('follower') ? 'selected': '']" @click="toDatingRecords('follower')">
          <span class="icon icon-keyboard_arrow_right"></span>
          <span>谁关注我</span>
        </div>
        <div :class="['item', currentDatingRecordsType('following') ? 'selected': '']" @click="toDatingRecords('following')">
          <span class="icon icon-keyboard_arrow_right"></span>
          <span>我关注谁</span>
        </div>
      </div>
      <div class="menu-box">
        <div class="title">
          <span class="icon icon-assignment"></span>
          <span>完 善 资 料</span>
        </div>
        <div :class="['item', isCurrentRoute('basicinfo') ? 'selected' : '']"
          @click="toInfoRoute('basicinfo')">
          <span class="icon icon-keyboard_arrow_right"></span>
          <span>基本资料</span>
        </div>
        <div :class="['item', isCurrentRoute('myintro') ? 'selected' : '']">
          <span class="icon icon-keyboard_arrow_right"></span>
          <span>内心独白</span>
        </div>
        <div :class="['item', isCurrentRoute('mypics') ? 'selected' : '']">
          <span class="icon icon-keyboard_arrow_right"></span>
          <span>我的相册</span>
        </div>
        <div :class="['item', isCurrentRoute('mydetail') ? 'selected' : '']">
          <span class="icon icon-keyboard_arrow_right"></span>
          <span>详细资料</span>
        </div>
        <div :class="['item', isCurrentRoute('myoption') ? 'selected' : '']">
          <span class="icon icon-keyboard_arrow_right"></span>
          <span>择偶条件</span>
        </div>
      </div>
      <div class="menu-box">
        <div class="title">
          <span class="icon icon-settings"></span>
          <span>我 的 账 号</span>
        </div>
        <div :class="['item', isCurrentRoute('changepwd') ? 'selected' : '']">
          <span class="icon icon-keyboard_arrow_right"></span>
          <span>密码修改</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfoBox from './UserInfoBox'

export default {
  components: { UserInfoBox },
  methods: {
    currentDatingRecordsType (type) {
      let rightRoute = this.$route.name === 'myinfo-datingrecords-' + type
      return rightRoute
    },
    toDatingRecords (type) {
      this.$router.push({name: 'myinfo-datingrecords-' + type})
    },
    isCurrentRoute (name) {
      let rightRoute = this.$route.name === 'myinfo-' + name
      return rightRoute
    },
    toInfoRoute (name) {
      this.$router.push({name: 'myinfo-' + name})
    }
  }

}
</script>

<style lang="less">
.left-bar-root{
  width: 100%;
  background: white;
  .seprator{
    margin: 5px;
    height: 0;
    border-bottom: 1px solid #ddd;
  }
  .menu-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 15px;
    .menu-box{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 30px;
      .title{
        font-size: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .icon{
          margin-left: -20px;
          width: 20px;
          font-size: 20px;
          margin-right: 10px;
        }
      }
      .item{
        font-size: 14px;
        margin-top: 6px;
        margin-bottom: 2px;
        margin-left: 7px;
        cursor: pointer;
        .icon{
          color: #D76083;
          width: 20px;
          margin-left: -5px;
          display: none;
        }
        &.selected{
          color: #D76083;
          .icon{
            display: inline;
          }
        }
      }
    }
  }
}
</style>
