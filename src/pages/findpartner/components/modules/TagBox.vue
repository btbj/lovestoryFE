<template>
  <div class="tag-box">
  <div class="hot-tag-box">
    <div class="row-item">
      <div class="row-label">热门标签 :</div>
      <div class="row-tags">
        <div class="hot-tag-item">高级白领</div>
        <div class="hot-tag-item">教师</div>
        <div class="hot-tag-item">医务工作者</div>
        <div class="hot-tag-item">高级白领</div>
        <div class="hot-tag-item">教师</div>
        <div class="hot-tag-item">医务工作者</div>
      </div>
    </div>
    <div class="row-item">
      <div class="row-label">您已选择 :</div>
      <div class="row-tags">
        <sex-tag class="tag-item" v-if="tags.sex" v-model="tags.sex"></sex-tag>
        <marage-history-tag class="tag-item" v-if="tags.marageHistroy" v-model="tags.marageHistroy"></marage-history-tag>
      </div>
    </div>
  </div>
  <div class="more-tags">
    <div class="row-item">
      <div class="row-label">更多标签 :</div>
      <div class="row-tags">
        <sex-tag class="tag-item" v-if="!tags.sex" v-model="tags.sex"></sex-tag>
        <marage-history-tag class="tag-item" v-if="!tags.marageHistroy" v-model="tags.marageHistroy"></marage-history-tag>
      </div>
    </div>
    <div class="collapse-btn">收起
      <span class="icon-expand_less"></span>
    </div>
  </div>
</div>
</template>

<script>
import SexTag from '../TagItems/SexTag'
import MarageHistoryTag from '../TagItems/MarageHistoryTag'

export default {
  components: { SexTag, MarageHistoryTag },
  data () {
    return {
      tags: {
        sex: '',
        marageHistroy: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="less">
.tag-box {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-top: none;
  margin-bottom: 20px;
  .row-item {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .row-label {
      align-self: flex-start;
      margin-top: 10px;
      width: 70px;
      font-size: 14px;
      font-weight: bold;
    }
    .row-tags {
      display: flex;
      width: 500px;
      box-sizing: border-box;
      flex-wrap: wrap;
      .tag-item{
        margin-left: 5px;
      }
    }
  }
  .hot-tag-box {
    width: 100%;
    border-top: 3px solid #F33973;
    background-color: #F2F2F2;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 5px;
    .hot-tag-item {
      border: 1px solid #F33973;
      border-radius: 10px;
      font-size: 14px;
      margin: 5px;
      padding: 3px;
      color: #F33973;
      background-color: white;
    }
  }
  .more-tags {
    width: 100%;
    border-top: 1px solid lightgrey;
    box-sizing: border-box;
    padding: 10px 5px;
    .single-tag {
      cursor: pointer;
      margin: 5px;
    }
    .collapse-btn {
      color: blue;
      cursor: pointer;
      font-size: 14px;
      float: right;
    }
  }
}
</style>
