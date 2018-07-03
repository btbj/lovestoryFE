<template>
  <section class="register-container">
    <div class="register-header-nav">
      <index-header></index-header>
    </div>
    <pay-info/>
    <index-bottom></index-bottom>
  </section>
</template>

<script>
const IndexHeader = r => require.ensure([], () => r(require('@/components/IndexHeader')), 'register')
const PayInfo = r => require.ensure([], () => r(require('./components/PayInfo')), 'register')
const IndexBottom = r => require.ensure([], () => r(require('@/components/IndexBottom')), 'register')

export default {
  components: {
    IndexHeader,
    PayInfo,
    IndexBottom
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
