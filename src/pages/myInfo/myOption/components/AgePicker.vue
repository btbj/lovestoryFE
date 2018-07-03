<template>
  <div class="area-picker-root">
    <el-select size="small" class="area-picker" v-model="min" placeholder="请选择">
      <el-option
        v-for="(item, index) in minList" :key="index"
        :label="item" :value="item">
      </el-option>
    </el-select>~&nbsp;&nbsp;&nbsp;
    <el-select size="small" class="area-picker" v-model="max" placeholder="请选择">
      <el-option
        v-for="(item, index) in maxList" :key="index"
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
    }
  },
  methods: {
    getMaxList (min = this.min) {
      if (min) {
        let array = []
        let lowLimit = min || 18
        for (let age = lowLimit; age < 100; age++) {
          array.push(age)
        }
        return array
      } else {
        return null
      }
    }
  },
  computed: {
    minList () {
      let array = []
      for (let age = 18; age < 100; age++) {
        array.push(age)
      }
      return array
    },
    maxList () {
      return this.getMaxList()
    },
    min: {
      get: function () {
        return this.value ? this.value[0] : ''
      },
      set: function (newMin) {
        let newMax = this.getMaxList(newMin)[0]
        // console.log(newProvince, newCity)
        this.$emit('input', [newMin, newMax])
      }
    },
    max: {
      get: function () {
        return this.value ? this.value[1] : ''
      },
      set: function (newMax) {
        // console.log(this.province, newCity)
        this.$emit('input', [this.max, newMax])
      }
    }
  },
  mounted: function () {
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
