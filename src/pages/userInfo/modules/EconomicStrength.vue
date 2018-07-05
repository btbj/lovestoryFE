<template>
  <div class="_box-container">
    <div class="_box-title">
      <span class="icon-radio_button_unchecked icon"></span>
      <span>经济实力</span>
    </div>
    <div class="_box-content">
      <div class="economic-item-row">
        <div class="_item-column">
          <span class="label">月薪</span>：
          <span>{{info.info.month_pay || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">购房</span>：
          <span>{{info.info.live_status || '——'}}</span>
        </div>
      </div>
      <div class="economic-item-row">
        <div class="_item-column">
          <span class="label">购车</span>：
          <span>{{info.info.car_status || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">经济观念</span>：
          <span>{{economicConcept || '——'}}</span>
        </div>
      </div>
      <div class="economic-item-row">
        <div class="_item-column">
          <span class="label">投资理财</span>：
          <div class="economic-strength-info-list">
            <div class="list-item" v-for="(item, index) in investList" :key="index">{{item}}</div>
          </div>
        </div>
        <div class="_item-column">
          <span class="label">外债贷款</span>：
          <div class="economic-strength-info-list">
            <div class="list-item" v-for="(item, index) in debitList" :key="index">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'

export default {
  props: ['info'],
  data () {
    return {
      investList: [],
      debitList: [],
      economicConcept: ''
    }
  },
  methods: {
    async getDetails () {
      try {
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          id: this.$route.params.id,
          data: ['investList', 'debitList', 'economicConcept']
        })
        let {investList, debitList, economicConcept} = res.data.details
        this.investList = investList || []
        this.debitList = debitList || []
        this.economicConcept = economicConcept ? economicConcept[0] : ''
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    await this.getDetails()
  }
}
</script>

<style lang="less">
._box-title {
  width: 150px;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  .icon {
    color: #F1356F;
    font-weight: bold;
    margin-right: 10px;
  }
}
._box-container {
  width: 100%;
  border: 1px solid lightgrey;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  ._marriage-item-label {
    width: 100%;
    height: 25px;
    background-color: lightgrey;
    box-sizing: border-box;
    color: #F1356F;
    padding: 0 0 0 25px;
    line-height: 25px;
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0;
  }
  ._box-content {
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    padding: 5px 5px 5px 25px;
    text-align: left;
    .economic-item-row {
      width: 100%;
      // height: 20px;
      box-sizing: border-box;
      font-size: 14px;
      margin-bottom: 5px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      ._item-column {
        display: flex;
        width: 50%;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        .label{
          width: 70px;
          text-align-last: justify;
        }
        .economic-strength-info-list{
          flex: 1;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .list-item{
            margin-right: 15px;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
