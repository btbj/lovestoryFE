<template>
  <div class="area-picker-root">
    <el-select size="small" class="area-picker" v-model="province" placeholder="请选择">
      <el-option
        v-for="(item, index) in provinceList" :key="index"
        :label="item" :value="item">
      </el-option>
    </el-select>
    <el-select size="small" class="area-picker" v-model="city" placeholder="请选择">
      <el-option
        v-for="(item, index) in cityList" :key="index"
        :label="item" :value="item">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import AddressRawData from './addressBook'
export default {
  props: ['value'],
  data () {
    return {
      AddressData: {}
      // province: '',
      // city: ''
    }
  },
  methods: {
    // handleChange (reset) {
    //   console.log(reset)
    //   if (reset === 'reset') {
    //     this.city = this.cityList[0]
    //   }
    //   this.$emit('input', [this.province, this.city])
    // }
    getCityList (province = this.province) {
      if (province) {
        let citys = Object.keys(this.AddressData[province] || {})
        if (citys.length === 1) {
          return Object.values(this.AddressData[province])[0]
        } else {
          return citys
        }
      } else {
        return null
      }
    }
  },
  computed: {
    provinceList () {
      return Object.keys(this.AddressData)
    },
    cityList (province = this.province) {
      return this.getCityList()
    },
    province: {
      get: function () {
        return this.value ? this.value[0] : ''
      },
      set: function (newProvince) {
        let newCity = this.getCityList(newProvince)[0]
        // console.log(newProvince, newCity)
        this.$emit('input', [newProvince, newCity])
      }
    },
    city: {
      get: function () {
        return this.value ? this.value[1] : ''
      },
      set: function (newCity) {
        // console.log(this.province, newCity)
        this.$emit('input', [this.province, newCity])
      }
    }
  },
  mounted: function () {
    this.AddressData = AddressRawData
    // this.province = this.value[0]
    // this.city = this.value[1]
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
