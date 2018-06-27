<template>
  <div class="tag-item-root">
    <div :class="['small-tag', TagData.value ? 'selected' : '']"
      v-if="!TagData.extended" @click="extendTag">
      <span>{{TagData.value || TagData.title}}</span>
      <span class="icon icon-expand_more"></span>
      <span class="icon icon-cancel" v-if="TagData.value" @click.stop="resetValue"></span>
    </div>
    <div class="big-tag" v-else>
      <div :class="['small-tag', TagData.value ? 'selected' : '']"
        @click="extendTag(false)">
        <span>{{TagData.value || TagData.title}}</span>
        <span class="icon icon-expand_less"></span>
        <span class="icon icon-cancel" v-if="TagData.value" @click.stop="resetValue"></span>
      </div>
      <div class="extended-box" v-if="tempData">
        <div class="message">{{TagData.message}}</div>
        <el-select size="mini" v-model="tempData.value" placeholder="请选择">
          <el-option
            v-for="(item, index) in TagData.options"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
        <div class="confirm-btn" @click="confirmNewValue">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      tempData: null
    }
  },
  methods: {
    extendTag (extended = true) {
      let newData = this.TagData
      newData.extended = extended
      this.$emit('input', newData)
    },
    confirmNewValue () {
      let newData = JSON.parse(JSON.stringify(this.tempData))
      this.$emit('input', newData)
    },
    resetValue () {
      let newData = this.TagData
      newData.value = ''
      this.$emit('input', newData)
    }
  },
  computed: {
    TagData () {
      return this.value
    }
  },
  mounted: async function () {
    this.tempData = JSON.parse(JSON.stringify(this.TagData))
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
  .icon{
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
