<template>
  <section class="container">
    <div class="login-header-nav">
      <index-header></index-header>
    </div>
    <register-body></register-body>
    <index-bottom></index-bottom>
  </section>
</template>

<script>
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'register')
const RegisterBody = r => require.ensure([], () => r(require('./components/RegisterBody')), 'register')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'register')

export default {
  components: { IndexHeader, RegisterBody, IndexBottom }

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
  padding: 0 0 0 0;
  height: 100%;
  .login-header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1px;
  }
}
</style>
