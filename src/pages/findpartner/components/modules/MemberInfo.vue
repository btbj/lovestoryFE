<template>
  <div>
    <div class="sorting-pic-box">
      <div class="single-card"
        v-for="(member, index) in list" :key="index">
        <div class="card-pic">
          <img :src=member.img class="img-style">
        </div>
        <div class="card-info">
          <div class="member-info-item" style="color: #F02D73;font-size: 16px;">
            {{member.name}}
          </div>
          <div class="member-info-item">年龄: {{member.age}}</div>
          <div class="member-info-item">身高: {{member.height}}</div>
          <div class="member-info-item">学历: {{member.education}}</div>
          <div class="member-info-item">收入: {{member.income}}</div>
          <div class="member-detail-btn">
            <div class="btn" @click="getInfo(index)">查看详情</div>
          </div>
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
      memberCardsList: []
    }
  },
  methods: {
    getInfo (index) {
      this.$router.push({name: 'partnerinfo', params: {'id': index}})
    }
  }
}
</script>

<style lang="less">
.sorting-pic-box {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 30px;
  .single-card {
    flex-basis: 33%;
    margin: 10px 0;
    display: flex;
    box-sizing: border-box;
    height: 170px;
    .card-pic {
      margin-right: 3px;
      width: 100px;
      height: 100%;
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
    .card-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      width: 100px;
      height: 100%;
      box-sizing: border-box;
      .member-info-item {
        font-size: 14px;
        margin-bottom: 5px;
        text-align: left;
      }
      .member-detail-btn {
        width: 100%;
        height: 30px;
        margin-top: 5px;
        .btn {
          background-color: #FD6F9F;
          color: white;
          line-height: 30px;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
}

</style>
