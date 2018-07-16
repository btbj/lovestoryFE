<template>
  <div class="area-picker-root">
    <el-select size="small" class="area-picker" v-model="area" placeholder="请选择">
      <el-option
        v-for="(item, index) in AreaList" :key="index"
        :label="item" :value="item">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      AreaList: ['宁波市区', '海曙区', '江东区', '江北区', '北仑区', '镇海区', '鄞州区', '象山区', '宁海县', '余姚市', '慈溪市', '奉化市']
    }
  },
  computed: {
    area: {
      get: function () {
        return this.value ? this.value[0] : ''
      },
      set: function (newArea) {
        this.$emit('input', [newArea, newArea])
      }
    }
  }
}
</script>

<style lang="less">
.area-picker-root{
  display: flex;
  flex-direction: row;
  width: 300px;
  .area-picker{
    width: 120px;
    margin-right: 10px;
  }
}
</style>
