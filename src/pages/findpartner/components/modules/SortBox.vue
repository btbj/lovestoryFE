<template>
  <div class="sort-box-root">
    <div class="sorting-header-box">
      <div :class="['sorting-item', isCurrent('') ? 'selected' : '']"
        @click="selectType('')">综合排序</div>
      <div :class="['sorting-item', isCurrent('time') ? 'selected' : '']"
        @click="selectType('time')">登录时间
        <span class="mdi-expand_more icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    isCurrent (type) {
      return this.value === type
    },
    selectType (type) {
      this.$emit('input', type)
      this.$emit('sortChanged')
    }
  }
}
</script>

<style lang="less">
.sorting-header-box {
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  background-color: #F2F2F2;
  border: 1px solid lightgrey;
  display: flex;
  margin-bottom: 15px;
  .sorting-item {
    width: 100px;
    border-right: 1px solid lightgrey;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    &.selected{
      background: white;
      color: red;
    }
    .icon {
      font-size: 10px;
      position: relative;
      top: 1px;
      margin-left: 5px;
    }
  }
}
</style>
