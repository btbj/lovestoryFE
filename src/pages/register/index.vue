<template>
  <section class="register-container">
    <div class="register-header-nav">
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
  components: {
    IndexHeader,
    RegisterBody,
    IndexBottom
  },
  computed: {
    currentToken () {
      return this.$store.getters.token
    }
  },
  mounted: async function () {
    if (this.currentToken) {
      this.$message({
        message: '您已注册',
        type: 'success'
      })
      this.$router.replace({name: 'myinfo'})
    }
  }
}
</script>

<style lang="less">
.register-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0;
  .register-header-nav {
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
