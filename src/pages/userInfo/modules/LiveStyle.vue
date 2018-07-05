<template>
  <div class="_box-container">
    <div class="_box-title">
      <span class="icon-radio_button_unchecked icon"></span>
      <span>生活方式</span>
    </div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">吸烟</span>：
          <span>{{styleInfo.styleSmoking || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">饮酒</span>：
          <span>{{styleInfo.styleDrinking || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">锻炼习惯</span>：
          <span>{{styleInfo.styleExercise || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">饮食习惯</span>：
          <span>{{styleInfo.styleDiet || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">逛街购物</span>：
          <span>{{styleInfo.styleShopping || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">宗教信仰</span>：
          <span>{{styleInfo.styleReligion || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">作息时间</span>：
          <span>{{styleInfo.styleSchedule || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">交际圈子</span>：
          <span>{{styleInfo.styleCommunication || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">最大消费</span>：
          <span>{{styleInfo.styleConsumption || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">家务</span>：
          <span>{{styleInfo.styleHomeworkAssignment || '——'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      styleInfo: {
        styleSmoking: '',
        styleDrinking: '',
        styleExercise: '',
        styleDiet: '',
        styleShopping: '',
        styleReligion: '',
        styleSchedule: '',
        styleCommunication: '',
        styleConsumption: '',
        styleHomeworkLevel: '',
        styleHomeworkAssignment: '',
        stylePetLoving: '',
        styleAboutPet: ''
      }
    }
  },
  methods: {
    async getDetails () {
      try {
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          id: this.$route.params.id,
          data: Object.keys(this.styleInfo)
        })
        Object.keys(res.data.details).forEach(key => {
          this.styleInfo[key] = res.data.details[key][0]
        })
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
    ._content-item-row {
      width: 100%;
      height: 20px;
      box-sizing: border-box;
      font-size: 14px;
      margin-bottom: 5px;
      display: flex;
      ._item-column {
        display: flex;
        align-items: center;
        width: 50%;
        .label{
          width: 70px;
          text-align-last: justify;
        }
      }
    }
  }
}
</style>
