<template>
  <div class="nav-box">
    <div class="nav-list">
      <div :class="['nav-item', isCurrent('home') ? 'selected' : '']" @click="navTo('home')">首页</div>
      <div :class="['nav-item', isCurrent('aboutus') ? 'selected' : '']" @click="navTo('aboutus')">关于我们</div>
      <div :class="['nav-item', (isCurrent('news') || isCurrent('newsinfo')) ? 'selected' : '']" @click="navTo('news')">新闻资讯</div>
      <div :class="['nav-item', isCurrent('serviceintro') ? 'selected' : '']" @click="navTo('serviceintro')">服务介绍</div>
      <div :class="['nav-item', isCurrent('lovestory') ? 'selected' : '']" @click="navTo('lovestory')">晒幸福</div>
      <div :class="['nav-item', isCurrent('findpartner') ? 'selected' : '']" @click="navTo('findpartner')">寻找对象</div>
      <div :class="['nav-item', isCurrent('register')  ? 'selected' : '']" @click="navTo('register')">我要相亲</div>
      <div :class="['nav-item', isCurrent('plans') ? 'selected' : '']" @click="navTo('plans')">定制服务</div>
      <div :class="['nav-item', isCurrent('activities') ? 'selected' : '']" @click="navTo('activities')">活动互动</div>
      <div :class="['nav-item', isCurrent('myinfo') ? 'selected' : '']" @click="navTo('myinfo')">
        <span class="icon-person person-icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navTo (destName) {
      // let notAllowed = (destName === 'myinfo' && this.currentToken === null)
      // let newDest = notAllowed ? 'login' : destName
      this.$router.push({name: destName})
    },
    isCurrent (pageName) {
      let routeRootName = this.$route.name.split('-')[0]
      let currentPage = routeRootName
      return currentPage === pageName
    }
  },
  computed: {
    currentToken () {
      return this.$store.getters.token
    }
  },
  mounted: function () {
    // console.log(this.currentToken)
  }
}
</script>

<style lang="less">
.nav-box{
  width: 100%;
  box-sizing: border-box;
  background-color: #F1356F;
  width: 100%;
  height: 47px;
  padding: 0;
  display: flex;
  justify-content: center;
  .nav-list{
    max-width: 1200px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    .nav-item {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      font-size: 14px;
      color: white;
      margin-right: 1px;
      cursor: pointer;
      .person-icon {
        font-size: 18px;
        color: white;
        box-sizing: border-box;
      }
    }
    .nav-item:active {
      background-color: #c20450;
    }
    .nav-item:hover {
      background-color: #c20450;
    }
    .selected {
      background-color: #c20450;
    }
  }
}

</style>
