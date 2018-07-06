<template>
  <div class="member-card-container">
    <div class="member-pic-box-container">
      <div class="member-pic-box" v-for="(member, index) in list"
           :key="index" @click="checkUser(member)">
        <div class="member-pic" :style="`background-image: url(${member.head_image_url})`">
          <!-- <img :src=member.img class="img-style"> -->
        </div>
        <div class="word">
          <div class="first-row">{{member.nickname}}</div>
          <div><span>{{member.age}}岁</span> <span v-if="member.province" class="margin-left: 10px;">{{member.province + ' ' + member.city}}</span></div>
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
  },
  methods: {
    checkUser (member) {
      this.$router.push({name: 'userinfo', params: {'id': member.id}})
    }
  }
}
</script>

<style lang="less">
.member-card-container {
  width: 100%;
  box-sizing: border-box;
  .member-pic-box-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    box-sizing: border-box;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 20px;
    .member-pic-box {
      flex-basis: 20%;
      width: 110px;
      height: 300px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px 0 20px 0;
      cursor: pointer;
      .member-pic {
        width: 90%;
        width: 150;
        height: 200px;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: center;
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
