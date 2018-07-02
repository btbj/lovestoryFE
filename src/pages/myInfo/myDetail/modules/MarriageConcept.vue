<template>
  <div>
    <div class="marriage-content">
      <el-form class="form-sector" label-position="right" label-width="150px"
        :model="familyInfo" ref="infoForm" :rules="formRule">
        <div class="style-label">关于自己</div>
        <el-form-item prop="origin">
          <span slot="label">籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯&nbsp;:</span>
          <area-picker class="area-picker" v-model="familyInfo.origin"></area-picker>
        </el-form-item>
        <el-form-item prop="nationality">
          <span slot="label">国&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;籍&nbsp;:</span>
          <!-- <el-select size="small" v-model="familyInfo.nationality">
            <el-option v-for="item in options.nationality" :key="item"
              :label="item" :value="item"></el-option>
          </el-select> -->
          数据多 未写
        </el-form-item>
        <el-form-item label="个性特征 :" prop="personality">
          <el-select size="small" v-model="familyInfo.personality">
            <el-option v-for="item in options.personality" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="幽默感 :" prop="humor">
          <el-select size="small" v-model="familyInfo.humor">
            <el-option v-for="item in options.humor" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="对待感情 :" prop="feeling">
          <el-select size="small" v-model="familyInfo.feeling">
            <el-option v-for="item in options.feeling" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否要小孩 :" prop="child">
          <el-select size="small" v-model="familyInfo.child">
            <el-option v-for="item in options.child" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="何时结婚 :" prop="marriageTime">
          <el-select size="small" v-model="familyInfo.marriageTime">
            <el-option v-for="item in options.marriageTime" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否接受异地恋 :" prop="remoteLove">
          <el-select size="small" v-model="familyInfo.remoteLove">
            <el-option v-for="item in options.remoteLove" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="理想婚姻 :" prop="remoteLove">
          <el-input type="textarea" resize="none"
           :rows="5" v-model="familyInfo.idealMarriage"></el-input>
        </el-form-item>
        <div class="style-label">关于家庭</div>
        <el-form-item label="愿与对方父母同住 :" prop="living">
          <el-select size="small" v-model="familyInfo.living">
            <el-option v-for="item in options.living" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="家中排行 :" prop="ranking">
          <el-select size="small" v-model="familyInfo.ranking">
            <el-option v-for="item in options.ranking" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="兄弟姐妹 :" prop="relative">
          还没写
        </el-form-item>
        <el-form-item label="父母情况 :" prop="parents">
          <el-select size="small" v-model="familyInfo.parents">
            <el-option v-for="item in options.parents" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="父母工作 :" prop="parentsWork">
          父&nbsp;<el-select size="small" class="select-style" v-model="familyInfo.fatherWork">
            <el-option v-for="item in options.parentsWork" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
          母&nbsp;<el-select size="small" class="select-style" v-model="familyInfo.motherWork">
            <el-option v-for="item in options.parentsWork" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="父母经济情况 :" prop="parentsEconomic">
          <el-select size="small" v-model="familyInfo.parentsEconomic">
            <el-option v-for="item in options.parentsEconomic" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="父母医保情况 :" prop="parentsInsurance">
          <el-select size="small" v-model="familyInfo.parentsInsurance">
            <el-option v-for="item in options.parentsInsurance" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="option-btn">
      <div class="btn">保存并继续</div>
      <div class="btn">跳过此页</div>
    </div>
  </div>
</template>

<script>
import AreaPicker from '@/components/AreaPicker'
export default {
  components: { AreaPicker },
  data () {
    return {
      familyInfo: {
        origin: '',
        nationality: '',
        personality: '',
        humor: '',
        temper: '',
        feeling: '',
        child: '',
        marriageTime: '',
        remoteLove: '',
        idealMarriage: '',
        living: '',
        ranking: '',
        relative: '',
        parents: '',
        fatherWork: '',
        motherWork: '',
        parentsEconomic: '',
        parentsInsurance: ''
      },
      options: {
        nationality: [],
        personality: ['请选择', '非常内向', '有点内向', '内外向平衡', '有点外向', '非常外向'],
        humor: ['请选择', '没有幽默感', '有点幽默感', '幽默风趣', '经常带来欢笑'],
        temper: ['请选择', '脾气很好', '很少发脾气', '偶尔会憋不住', '经常发脾气', '火气一点就着'],
        feeling: ['请选择', '人生得意须尽欢', '是否投入真情要看情况', '一向认真对待感情', '憎恨虚情假意用情不专的人'],
        child: ['请选择', '想要孩子', '要不要都行', '不要孩子', '视情况而定'],
        marriageTime: ['请选择', '接受闪婚', '顺其自然', '一年内', '两年内', '三年以上'],
        remoteLove: ['请选择', '不能接受', '能接受', '视情况而定'],
        living: ['请选择', '愿意', '不愿意', '视情况而定'],
        ranking: ['请选择', '独生子女', '老大', '老二', '老三', '老四', '老五及更小', '老幺'],
        parents: ['请选择', '父母健在', '单亲家庭', '父亲健在', '母亲健在', '父母均离世'],
        parentsWork: ['请选择', '政府机关(已退休)', '政府机关(未退休)', '事业单位(已退休)', '事业单位(未退休)',
          '外企单位(已退休)', '外企单位(未退休)', '世界500强(已退休)', '世界500强(未退休)',
          '上市公司(已退休)', '上市公司(未退休)', '国有企业(已退休)', '国有企业(未退休)',
          '私营企业(已退休)', '私营企业(未退休)', '自有公司', '无工作', '其他(已退休)', '其他(未退休)'],
        parentsEconomic: ['请选择', '均有退休金', '均无退休金', '只有父亲有退休金', '只有母亲有退休金'],
        parentsInsurance: ['请选择', '均有医疗保险', '均无医疗保险', '只有父亲有医疗保险', '只有母亲有医疗保险']
      },
      formRule: {
        origin: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        nationality: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        child: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        living: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        ranking: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }

}
</script>

<style lang="less">
.marriage-content {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  margin-bottom: 40px;
  .form-sector{
    box-sizing: border-box;
    .el-form-item{
      margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
      .el-form-item__content{
        text-align: left;
        margin-left: 10px;
      }
    }
    .style-label {
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      text-align: left;
      font-weight: bold;
      line-height: 30px;
      margin-left: 5px;
    }
    .select-style {
      width: 150px;
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
