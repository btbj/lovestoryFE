<template>
  <div>
    <div class="economic-content">
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
          <el-select size="small" v-model="economicConcept">
            <el-option v-for="item in options" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </div>
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
      economicStrengthList: [],
      economicConcept: '',
      options: ['基本是月光族，及时享乐主义', '每月会存点钱，但是也要享受生活', '每月有固定存款，剩余自由分配', '为了未来努力攒钱，勤俭节约过日子']
    }
  }
}
</script>

<style lang="less">
.economic-content {
  width: 100%;
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
</style>
