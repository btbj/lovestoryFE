<template>
  <div class="_box-container">
    <div class="_box-title">
      <span class="mdi-radio_button_unchecked icon"></span>
      <span>工作学习</span>
    </div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">职业职位</span>：
          <span>{{workInfo.workProfession || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">公司行业</span>：
          <span>{{workInfo.workIndustry || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">公司类型</span>：
          <span>{{workInfo.workCompany || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">福利待遇</span>：
          <span>{{workInfo.workWelfare || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">工作状态</span>：
          <span>{{workInfo.workStatus || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label" style="width: 100px;">调动工作可能性</span>：
          <span>{{workInfo.workTransfer || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">事业与家庭</span>：
          <span>{{workInfo.workPriority || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label" style="width: 100px;">海外工作可能性</span>：
          <span>{{workInfo.workOverseas || '——'}}</span>
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
      workInfo: {
        workProfession: '',
        workIndustry: '',
        workCompany: '',
        workWelfare: '',
        workStatus: '',
        workTransfer: '',
        workOverseas: '',
        workPriority: ''
      }
    }
  },
  methods: {
    async getDetails () {
      try {
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          id: this.$route.params.id,
          data: Object.keys(this.workInfo)
        })
        Object.keys(res.data.details).forEach(key => {
          this.workInfo[key] = res.data.details[key][0]
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
