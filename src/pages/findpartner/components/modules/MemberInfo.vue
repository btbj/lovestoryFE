<template>
  <div>
    <div class="sorting-pic-box">
      <div class="single-card"
        v-for="(member, index) in list" :key="index">
        <div class="card-pic">
          <img :src="member.head_image_url" class="img-style">
        </div>
        <div class="card-info">
          <div class="info-name" style="color: #F02D73;font-size: 16px;">
            {{member.nickname}}
          </div>
          <div class="info-detial">
            <div class="detial-item">
              <div>年龄：</div><div>{{member.age}}</div></div>
            <div class="detial-item">
              <div>身高：</div><div>{{member.height}}</div></div>
            <div class="detial-item">
              <div>学历：</div><div>{{member.education}}</div></div>
            <!-- <div class="member-info-item">
              <div>收入:</div><div>{{member.month_pay}}</div></div> -->
          </div>

          <div class="info-detail-btn">
            <div class="btn" @click="getInfo(member)">查看详情</div>
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
    getInfo (member) {
      this.$router.push({name: 'userinfo', params: {'id': member.id}})
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
      justify-content: space-between;
      width: 95px;
      height: 100%;
      box-sizing: border-box;
      .info-detial{
        display: flex;
        flex-direction: column;
        .detial-item {
          font-size: 12px;
          margin-bottom: 5px;
          display: flex;
          flex-direction: row;
        }
      }
      .info-detail-btn {
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
