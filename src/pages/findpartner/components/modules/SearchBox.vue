<template>
  <div class="search-box">
    <div class="search-input-box">
      <input type="text" class="search-style" :value="value" @input="handleInput">
      <div class="search-btn" @click="search">搜&nbsp;&nbsp;索</div>
    </div>
    <div class="search-word-box">
      <div class="word-label">热门搜索词&nbsp;&nbsp;: </div>
      <span class="word-style"
        v-for="(item, index) in hotKeywords" :key="index"
        @click="selectKeyword(item)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      hotKeywords: ['苗条', '幽默', '清纯', '可爱', '时尚', '睿智']
    }
  },
  methods: {
    handleInput (evnet) {
      let newValue = event.target.value
      console.log(newValue)
      this.$emit('input', newValue)
    },
    search () {
      console.log('start search')
      this.$emit('search')
    },
    selectKeyword (keyword) {
      this.$emit('input', keyword)
      this.$emit('search')
    }
  }

}
</script>

<style lang="less">
.search-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  box-sizing: border-box;
  padding: 5px 40px;
  .search-input-box {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    .search-style {
      width: 380px;
      height: 30px;
      box-sizing: border-box;
      border: 3px solid #F1356F;
      padding: 5px 10px;
      outline: none;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    .search-btn {
      width: 90px;
      height: 30px;
      background-color: #F1356F;
      color: white;
      line-height: 30px;
      cursor: pointer;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
  .search-word-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    padding: 0 40px;
    .word-label {
      font-size: 14px;
      font-weight: bold;
    }
    .word-style {
      font-size: 14px;
      margin: 0 5px;
      cursor: pointer;
      &.word-style:hover{
        text-decoration-line: underline;
      }
    }
  }
}
</style>
