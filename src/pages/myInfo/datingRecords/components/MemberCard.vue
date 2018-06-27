<template>
  <div class="member-card-container">
    <div class="pic-box-container">
      <div class="pic-box" v-for="(card, index) in list"
           :key="index">
        <div class="pic">
          <img :src=card.img
              class="img-style">
        </div>
        <div class="word">
          <div class="first-row">{{card.name}}</div>
          <div>{{card.age}}, {{card.address}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
.member-card-container {
  width: 100%;
  box-sizing: border-box;
  .pic-box-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    box-sizing: border-box;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 20px;
    .pic-box {
      flex-basis: 20%;
      width: 110px;
      height: 200px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin: 10px 0 20px 0;
      .pic {
        width: 100%;
        height: 140px;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .img-style {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .word {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        .first-row {
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
