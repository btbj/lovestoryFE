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
          <el-select size="mini" class="age-selector"
            v-model="TagData.min" placeholder="请选择"
            @change="() => {TagData.max = ''}">
            <el-option
              v-for="(item, index) in minList"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
          <span style="margin-right: 5px;">至</span>
          <el-select size="mini" class="age-selector"
            v-model="TagData.max" placeholder="请选择">
            <el-option label="不限" value=""></el-option>
            <el-option
              v-for="(item, index) in maxList"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
          <span>岁</span>
        </div>
        <div class="confirm-btn" @click.stop="confirmNewValue">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import TagEventBus from '@/components/eventBus'

export default {
  props: ['value'],
  data () {
    return {
      TagData: {
        title: '年龄',
        message: '请选择年龄',
        min: '',
        max: '',
        extended: false
      }
    }
  },
  methods: {
    extendTag (extended = false) {
      if (extended) {
        TagEventBus.$emit('closeAll')
        this.TagData.min = this.value[0] || ''
        this.TagData.max = this.value[1] || ''
      }
      this.TagData.extended = extended
    },
    confirmNewValue () {
      this.TagData.extended = false
      if (this.TagData.min) {
        let newData = [this.TagData.min]
        if (this.TagData.max) {
          newData.push(this.TagData.max)
        }
        this.$emit('input', newData)
        TagEventBus.$emit('getNewData')
      }
    },
    resetValue () {
      this.TagData.min = ''
      this.TagData.max = ''
      this.$emit('input', [])
      TagEventBus.$emit('getNewData')
    }
  },
  computed: {
    tagLabel () {
      let result = this.TagData.title
      if (this.value.length) {
        result = `${this.value[0]}岁`
        if (this.value[1]) {
          result += ` 至 ${this.value[1]} 岁`
        } else {
          result += '以上'
        }
      }
      return result
    },
    minList () {
      let array = []
      for (let age = 18; age < 100; age++) {
        array.push(age)
      }
      return array
    },
    maxList () {
      let array = []
      let lowLimit = this.TagData.min || ''
      for (let age = lowLimit; age < 100; age++) {
        array.push(age)
      }
      return array
    }
  },
  mounted: function () {
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
.age-selector{
  width: 90px;
  margin-right: 5px;
}
</style>
