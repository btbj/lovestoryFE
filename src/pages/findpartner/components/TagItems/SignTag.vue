<template>
  <div class="tag-item-root">
    <div :class="['small-tag', value.length ? 'selected' : '']"
      v-if="!TagData.extended"
      @click.stop="extendTag(true)">
      <span>{{tagLabel}}</span>
      <span class="item-icon icon-expand_more"></span>
      <span class="item-icon icon-cancel" v-if="value.length" @click.stop="resetValue"></span>
    </div>
    <div class="big-tag" v-else>
      <div :class="['small-tag', value.length ? 'selected' : '']"
        @click.stop="extendTag(false)">
        <span>{{tagLabel}}</span>
        <span class="item-icon icon-expand_less"></span>
        <span class="item-icon icon-cancel" v-if="value.length" @click.stop="resetValue"></span>
      </div>
      <div class="extended-box" @click.stop="() => {}">
        <div class="message">{{TagData.message}}</div>
        <el-checkbox-group class="xz-checkbox-group" v-model="TagData.value">
          <el-checkbox class="xz-checkbox-item"
            v-for="(item, index) in TagData.options"
            :key="index" :label="item">{{item}}</el-checkbox>
        </el-checkbox-group>
        <!-- <el-select size="mini" v-model="TagData.value" placeholder="请选择">
          <el-option
            v-for="(item, index) in TagData.options"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select> -->
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
        title: '星座',
        message: '请选择星座',
        options: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
        value: [],
        extended: false
      }
    }
  },
  methods: {
    extendTag (extended = false) {
      if (extended) {
        TagEventBus.$emit('closeAll')
        this.TagData.value = this.value
      }
      this.TagData.extended = extended
    },
    confirmNewValue () {
      this.TagData.extended = false
      this.$emit('input', this.TagData.value)
      TagEventBus.$emit('getNewData')
    },
    resetValue () {
      this.$emit('input', [])
      TagEventBus.$emit('getNewData')
    }
  },
  computed: {
    tagLabel () {
      let result = this.TagData.title
      if (this.value.length) {
        result = ''
        this.value.forEach((item, index) => {
          if (index > 0) {
            result += '、'
          }
          result += item
        })
      }
      return result
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
    &.icon-cancel{
      margin-left: 5px;
      color: #7db4ec;
    }
    &.icon-cancel:hover{
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
    min-width: 100px;
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
.xz-checkbox-group{
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 5px 0;
  .xz-checkbox-item{
    flex-basis: 30%;
    margin: 5px 0;
  }
}
</style>
