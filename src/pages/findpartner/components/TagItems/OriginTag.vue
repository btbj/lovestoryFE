<template>
  <div class="tag-item-root">
    <div :class="['small-tag', value.length ? 'selected' : '']"
      v-if="!TagData.extended"
      @click.stop="extendTag(true)">
      <span>{{tagLabel}}</span>
      <span class="item-icon mdi-expand_more"></span>
      <span class="item-icon mdi-cancel" v-if="value.length" @click.stop="resetValue"></span>
    </div>
    <div class="big-tag" v-else>
      <div :class="['small-tag', value.length ? 'selected' : '']"
        @click.stop="extendTag(false)">
        <span>{{tagLabel}}</span>
        <span class="item-icon mdi-expand_less"></span>
        <span class="item-icon mdi-cancel" v-if="value.length" @click.stop="resetValue"></span>
      </div>
      <div class="extended-box">
        <div class="message">{{TagData.message}}</div>
        <div class="box-row">
          <el-select size="mini" class="area-selector" v-model="TagData.province" placeholder="请选择"
            @change="() => {TagData.city = ''}">
            <el-option
              v-for="(item, index) in provinceList"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
          <el-select size="mini" class="area-selector" v-model="TagData.city" placeholder="请选择">
            <el-option label="不限" value=""></el-option>
            <el-option
              v-for="(item, index) in cityList"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="confirm-btn" @click.stop="confirmNewValue">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import TagEventBus from '@/components/eventBus'
import AddressRawData from './addressBook'

export default {
  props: ['value'],
  data () {
    return {
      AddressData: null,
      TagData: {
        title: '籍贯地区',
        message: '请选择籍贯地区',
        province: '北京市',
        city: '',
        extended: false
      }
    }
  },
  methods: {
    extendTag (extended = false) {
      if (extended) {
        TagEventBus.$emit('closeAll')
        this.TagData.province = this.value[0] || '北京市'
        this.TagData.city = this.value[1] || ''
      }
      this.TagData.extended = extended
    },
    confirmNewValue () {
      this.TagData.extended = false
      if (this.TagData.province) {
        let newData = [this.TagData.province]
        if (this.TagData.city) {
          newData.push(this.TagData.city)
        }
        this.$emit('input', newData)
        TagEventBus.$emit('getNewData')
      }
    },
    resetValue () {
      this.TagData.province = '北京市'
      this.TagData.city = ''
      this.$emit('input', [])
      TagEventBus.$emit('getNewData')
    }
  },
  computed: {
    tagLabel () {
      let result = this.TagData.title
      if (this.value.length) {
        result = '（籍贯）' + this.value[0]
        if (this.value[1]) {
          result += `, ${this.value[1]}`
        }
      }
      return result
    },
    provinceList () {
      return Object.keys(this.AddressData)
    },
    cityList () {
      if (this.TagData.province) {
        let citys = Object.keys(this.AddressData[this.TagData.province])
        if (citys.length === 1) {
          return Object.values(this.AddressData[this.TagData.province])[0]
        } else {
          return citys
        }
      } else {
        return null
      }
    }
  },
  mounted: function () {
    this.AddressData = AddressRawData
    TagEventBus.$on('closeAll', this.extendTag)
    window.addEventListener('click', () => {
      TagEventBus.$emit('closeAll')
    })
  }
}
</script>

<style lang="less" scoped>
.small-tag{
  height: 25px;
  min-width: 60px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  line-height: 16px;
  background: white;
  box-sizing: border-box;
  padding: 0 10px;
  &.selected{
    background-color: #d7ebff;
    border-color: #a3c5e8;
  }
  .item-icon{
    font-size: 16px;
    &.mdi-cancel{
      margin-left: 5px;
      color: #7db4ec;
    }
    &.mdi-cancel:hover{
      color: #3498db;
    }
  }
}
.small-tag:hover{
  background-color: #d7ebff;
  border-color: #a3c5e8;
}
.big-tag{
  position: relative;
  z-index: 10;
  .small-tag{
    background: white;
    border-color: #ddd;
    border-bottom-color: white !important;
  }
  .small-tag:hover{
    background: white;
    border-color: #ddd;
  }
  .extended-box{
    z-index: -1;
    background: white;
    position: absolute;
    border: 1px solid #ddd;
    min-width: 250px;
    min-height: 70px;
    margin-top: -1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 5px 10px;
    font-size: 12px;
    .message{
      font-weight: bold;
      margin: 5px 0;
    }
    .box-row{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }
    .confirm-btn{
      height: 25px;
      line-height: 25px;
      width: 60px;
      background: #3498db;
      color: white;
      margin: 5px 0;
    }
  }
}
</style>

<style lang="less">
.area-selector {
  width: 150px !important;
  margin-right: 5px;
}
</style>
