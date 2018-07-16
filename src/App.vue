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
  components: { FloatBox }
}
</script>

<style>

</style>
