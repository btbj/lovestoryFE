<template>
  <div class="home-login">
    <special-planning></special-planning>
    <login-register v-show="!currentToken"></login-register>
    <user-info v-show="currentToken"></user-info>
  </div>
</template>

<script>
import SpecialPlanning from './modules/SpecialPlanning'
import LoginRegister from './modules/LoginRegister'
import UserInfo from './modules/UserInfo'

export default {
  components: { SpecialPlanning, LoginRegister, UserInfo },
  computed: {
    currentToken () {
      return this.$store.getters.token
    }
  }
}
</script>

<style lang="less">
.home-login {
  margin-top: -60px;
  margin-bottom: 10px;
  width: 90%;
  max-width: 1200px;
  height: 360px;
  display: flex;
  z-index: 100;
}

</style>
