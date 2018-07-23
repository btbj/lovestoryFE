<template>
  <div id="app">
    <router-view/>
    <float-box></float-box>
  </div>
</template>

<script>
const FloatBox = r => require.ensure([], () => r(require('@/components/IndexOnlineService')), 'home')

export default {
  name: 'App',
  components: { FloatBox },
  methods: {
    checkIE () {
      if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        alert('使用IE浏览器在本页面的显示效果可能有差异，建议更换浏览器')
      }
    }
  },
  mounted: async function () {
    await this.checkIE()
  }
}
</script>

<style>

</style>
