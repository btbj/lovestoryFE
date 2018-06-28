<template>
  <div class="detail-info-container">
    <div class="detail-info-title">
      <span class="icon-radio_button_unchecked icon"></span>
      <span>详细资料</span>
    </div>
    <div class="detail-info-label">资料越完善，同等条件我们将优先推荐您哦！</div>
    <div class="detail-info-box">
      <div class="switch-tab-list">
        <div :class="['switch-tab-item', isCurrent('economicStrength') ? 'selected' : '']"
          @click="changeTab('economicStrength')"><span>经济实力</span></div>
        <div :class="['switch-tab-item', isCurrent('lifeStyle') ? 'selected' : '']"
          @click="changeTab('lifeStyle')"><span>生活方式</span></div>
        <div :class="['switch-tab-item', isCurrent('workStudy') ? 'selected' : '']"
          @click="changeTab('workStudy')"><span>工作学习</span></div>
        <div :class="['switch-tab-item', isCurrent('appearance') ? 'selected' : '']"
          @click="changeTab('appearance')"><span>外貌体型</span></div>
        <div :class="['switch-tab-item', isCurrent('marriageConcept') ? 'selected' : '']"
          @click="changeTab('marriageConcept')"><span>婚姻观念</span></div>
        <div :class="['switch-tab-item', isCurrent('hobby') ? 'selected' : '']"
          @click="changeTab('hobby')"><span>兴趣爱好</span></div>
      </div>
      <div class="switch-tab-content" v-if="isCurrent('economicStrength')">
        <div class="content-box">
          <div class="left-label">
            <div class="label">投资理财&nbsp;:</div>
            <div class="remark" style="color: #EF356E">(可多选)</div>
          </div>
          <div class="right-checkbox">
            <el-checkbox-group v-model="economicStrengthList">
              <div class="checkbox-row">
                <el-checkbox label="银行存款"></el-checkbox>
                <el-checkbox label="购买基金"></el-checkbox>
                <el-checkbox label="证券投资"></el-checkbox>
              </div>
              <div class="checkbox-row">
                <el-checkbox label="购买保险"></el-checkbox>
                <el-checkbox label="理财产品投资"></el-checkbox>
                <el-checkbox label="外汇投资"></el-checkbox>
              </div>
              <div class="checkbox-row">
                <el-checkbox label="期货投资"></el-checkbox>
                <el-checkbox label="贵金属投资"></el-checkbox>
                <el-checkbox label="房产投资"></el-checkbox>
              </div>
              <div class="checkbox-row">
                <el-checkbox label="收藏品投资"></el-checkbox>
              </div>
            </el-checkbox-group>
          </div>
        </div>
        <div class="content-box">
          <div class="left-label">
            <div class="label">外债贷款&nbsp;:</div>
            <div class="remark" style="color: #EF356E">(可多选)</div>
          </div>
          <div class="right-checkbox">
            <el-checkbox-group v-model="economicStrengthList">
              <div class="checkbox-row">
                <el-checkbox label="无外债贷款"></el-checkbox>
                <el-checkbox label="房贷"></el-checkbox>
                <el-checkbox label="车贷"></el-checkbox>
              </div>
              <div class="checkbox-row">
                <el-checkbox label="留学贷款"></el-checkbox>
                <el-checkbox label="助学贷款"></el-checkbox>
                <el-checkbox label="个人生产经营性贷款"></el-checkbox>
              </div>
            </el-checkbox-group>
          </div>
        </div>
        <div class="content-box">
          <div class="left-label">
            <div class="label">经济观念&nbsp;:</div>
          </div>
          <div class="right-checkbox" style="padding: 0">
            <el-select size="small" v-model="economicConcept"></el-select>
          </div>
        </div>
      </div>
      <div class="switch-tab-content" v-else-if="isCurrent('lifeStyle')">
        <span>生活方式</span>
      </div>
      <div class="switch-tab-content" v-else-if="isCurrent('workStudy')">
        <span>工作学习</span>
      </div>
      <div class="switch-tab-content" v-else-if="isCurrent('appearance')">
        <span>外貌体型</span>
      </div>
      <div class="switch-tab-content" v-else-if="isCurrent('marriageConcept')">
        <span>婚姻观念</span>
      </div>
      <div class="switch-tab-content" v-else-if="isCurrent('hobby')">
        <span>兴趣爱好</span>
      </div>
    </div>
    <div class="option-btn">
      <div class="btn">保存并继续</div>
      <div class="btn">跳过此页</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activityTab: 'economicStrength',
      economicStrengthList: [],
      economicConcept: ''
    }
  },
  methods: {
    isCurrent (tab) {
      return this.activityTab === tab
    },
    changeTab (tab) {
      this.activityTab = tab
    }
  }
}
</script>

<style lang="less">
.detail-info-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .detail-info-title {
    width: 150px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .icon {
      color: #F1356F;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .detail-info-label {
    width: 100%;
    height: 30px;
    background-color: #F0F0F0;
    box-sizing: border-box;
    color: #F1356F;
    font-size: 14px;
    line-height: 30px;
    padding: 0 0 0 25px;
    text-align: left;
    margin-bottom: 30px;
  }
  .detail-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    .switch-tab-list{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid #F1356F;
      margin-bottom: 5px;
      .switch-tab-item{
        height: 35px;
        width: 100px;
        font-size: 14px;
        box-sizing: border-box;
        margin-right: -1px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &.selected{
          background: #F1356F;
          color: white;
        }
        span{
          width: 100%;
          border-right: 1px solid #F1356F;
        }
      }
    }
    .switch-tab-content {
      width: 100%;
      height: 310px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: 5px 0;
      margin-bottom: 40px;
      .content-box {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        padding: 5px 0;
        .left-label {
          width: 100px;
          height: 100%;
          box-sizing: border-box;
          margin-right:10px;
          padding: 10px 0 0 0;
          display: flex;
          flex-direction: column;
          .label {
            margin-bottom: 10px;
          }
        }
        .right-checkbox {
          flex: 1;
          height: 100%;
          box-sizing: border-box;
          padding: 10px 0 0 0;
          text-align: left;
          .checkbox-row {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  .option-btn {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    .btn {
      width: 120px;
      height: 40px;
      background-color: #EF356E;
      box-sizing: border-box;
      border-radius: 5px;
      color: white;
      line-height: 40px;
      margin: 0 30px;
      font-size: 14px;
      cursor: pointer;
    }
  }
}

</style>
