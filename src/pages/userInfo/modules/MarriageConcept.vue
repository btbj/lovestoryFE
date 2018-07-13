<template>
  <div class="_box-container">
    <div class="_box-title">
      <span class="icon-radio_button_unchecked icon"></span>
      <span>婚姻观念</span>
    </div>
    <div class="_marriage-item-label">关于自己</div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">籍贯</span>：
          <span>{{originText || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">户口</span>：
          <span>{{householdText || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">国籍</span>：
          <span>{{familyInfo.nationality || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">个性特征</span>：
          <span>{{familyInfo.personality || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">幽默感</span>：
          <span>{{familyInfo.humor || '——'}}</span>
        </div>
        <!-- <div class="_item-column">
          <span class="label">脾气</span>：
          <span>{{familyInfo.temper || '——'}}</span>
        </div> -->
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">对待感情</span>：
          <span>{{familyInfo.feeling || '——'}}</span>
        </div>
        <div class="_item-column">
           <span class="label">是否要小孩</span>：
          <span>{{familyInfo.children || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
         <span class="label">何时结婚</span>：
          <span>{{familyInfo.timeFormMarriage || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label" style="width: 120px">是否能接受异地恋</span>：
          <span>{{familyInfo.remoteLove || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">理想婚姻</span>：
          <span>{{familyInfo.idealMarriage || '——'}}</span>
        </div>
      </div>
    </div>
    <div class="_marriage-item-label" style="margin-top: 20px">关于家庭</div>
    <div class="_box-content">
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label" style="width: 120px">愿与对方父母同住</span>：
          <span>{{familyInfo.liveWithParents || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">家中排行</span>：
          <span>{{familyInfo.familyRanking || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
         <span class="label">父母情况</span>：
          <span>{{familyInfo.parentsStatus || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">兄弟姐妹</span>：
          <span>{{relativeText || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label" style="width: 90px">父母经济情况</span>：
          <span>{{familyInfo.parentsEconomic || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label" style="width: 90px">父母医保情况</span>：
          <span>{{familyInfo.parentsInsurance || '——'}}</span>
        </div>
      </div>
      <div class="_content-item-row">
        <div class="_item-column">
          <span class="label">父亲的工作</span>：
          <span>{{familyInfo.fatherWork || '——'}}</span>
        </div>
        <div class="_item-column">
          <span class="label">母亲的工作</span>：
          <span>{{familyInfo.motherWork || '——'}}</span>
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
      familyInfo: {
        origin: [],
        nationality: '',
        personality: '',
        humor: '',
        temper: '',
        feeling: '',
        children: '',
        timeFormMarriage: '',
        remoteLove: '',
        idealMarriage: '',
        liveWithParents: '',
        familyRanking: '',
        parentsStatus: '',
        fatherWork: '',
        motherWork: '',
        parentsEconomic: '',
        parentsInsurance: ''
      },
      relative: {
        'brother': {
          'num': '',
          'checked': false
        },
        'youngerBro': {
          'num': '',
          'checked': false
        },
        'sister': {
          'num': '',
          'checked': false
        },
        'youngerSis': {
          'num': '',
          'checked': false
        }
      }
    }
  },
  methods: {
    async getDetails () {
      try {
        let keyArray = Object.keys(this.familyInfo).filter(item => { return item !== 'origin' })
        let extraArray = ['originProvince', 'originCity', 'bigBrother', 'youngBrother', 'bigSister', 'youngSister']
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          id: this.$route.params.id,
          data: [...keyArray, ...extraArray]
        })
        console.log(res)
        Object.keys(res.data.details).forEach(key => {
          if (extraArray.indexOf(key) === -1) {
            this.familyInfo[key] = res.data.details[key][0]
          }
        })
        let {originProvince, originCity} = res.data.details
        this.familyInfo.origin = originProvince ? [originProvince[0], originCity[0]] : []
        let {bigBrother, youngBrother, bigSister, youngSister} = res.data.details
        this.relative.brother = bigBrother ? {num: bigBrother[0], checked: Boolean(bigBrother[0])} : {num: 0, checked: false}
        this.relative.youngerBro = youngBrother ? {num: youngBrother[0], checked: Boolean(youngBrother[0])} : {num: 0, checked: false}
        this.relative.sister = bigSister ? {num: bigSister[0], checked: Boolean(bigSister[0])} : {num: 0, checked: false}
        this.relative.youngerSis = youngSister ? {num: youngSister[0], checked: Boolean(youngSister[0])} : {num: 0, checked: false}
      } catch (error) {
        console.log(error)
        // userService.handleErr(error)
      }
    }
  },
  computed: {
    originText () {
      return this.familyInfo.origin ? (this.familyInfo.origin[0] + ' ' + this.familyInfo.origin[1]) : ''
    },
    householdText () {
      let province = this.info.info.household_province
      let city = this.info.info.city
      return province ? province + ' ' + city : ''
    },
    relativeText () {
      let result = ''
      if (this.relative.brother.checked) {
        result += `哥哥${this.relative.brother.num}个 `
      }
      if (this.relative.youngerBro.checked) {
        result += `弟弟${this.relative.youngerBro.num}个 `
      }
      if (this.relative.sister.checked) {
        result += `姐姐${this.relative.sister.num}个 `
      }
      if (this.relative.youngerSis.checked) {
        result += `妹妹${this.relative.youngerSis.num}个`
      }
      return result
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
    background-color: #F0F0F0;
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
