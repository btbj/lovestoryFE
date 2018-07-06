<template>
  <div class="home-header-container">
    <div class="home-header-nav">
      <index-header></index-header>
      <index-navbar></index-navbar>
      <div class="my-info-main-body">
        <el-container class="main-body">
          <el-aside width="220px">
            <left-bar></left-bar>
          </el-aside>
          <el-main>
            <!-- <basic-info></basic-info> -->
            <router-view></router-view>
          </el-main>
        </el-container>
      </div>
    </div>
    <index-bottom></index-bottom>
  </div>
</template>

<script>
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'myinfo')
const IndexNavbar = r => require.ensure([], () => r(require('@/components/IndexNavbar')), 'myinfo')
const LeftBar = r => require.ensure([], () => r(require('./components/LeftBar')), 'myinfo')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'myinfo')

export default {
  components: {
    IndexHeader,
    IndexNavbar,
    LeftBar,
    IndexBottom
  },
  computed: {
    currentToken () {
      return this.$store.getters.token
    }
  },
  mounted: async function () {
    if (this.currentToken === null) {
      this.$router.replace({name: 'login'})
    }
  }
}
</script>

<style lang="less">
.home-header-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0;
  .home-header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1px;
  }
  .my-info-main-body{
    width: 100%;
    min-height: 800px;
    background: #f7f7f7;
    text-align: center;
    .main-body{
      margin: auto;
      width: 90%;
      max-width: 1200px;
      padding: 15px 0;
      .el-main {
        padding: 0 0px;
        margin-left: 20px;
      }
    }
  }
}
</style>
