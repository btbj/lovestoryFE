<template>
  <section class="container">
    <div class="home-header-nav">
      <index-header></index-header>
      <index-navbar></index-navbar>
      <div class="my-info-main-body">
        <el-container class="main-body">
          <el-aside width="220px">
            <left-bar></left-bar>
          </el-aside>
          <el-main>
            <nuct-child></nuct-child>
          </el-main>
        </el-container>
      </div>
    </div>
  </section>
</template>

<script>
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'myinfo')
const IndexNavbar = r => require.ensure([], () => r(require('@/components/IndexNavbar')), 'myinfo')
const LeftBar = r => require.ensure([], () => r(require('./components/LeftBar')), 'myinfo')

export default {
  components: {
    IndexHeader, IndexNavbar, LeftBar
  },
}
</script>

<style lang="less">
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0 0 10px 0;
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
      width: 840px;
      padding: 15px;
    }
  }
}
</style>
