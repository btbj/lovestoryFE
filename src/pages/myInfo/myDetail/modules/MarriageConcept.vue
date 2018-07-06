<template>
  <div>
    <div class="marriage-content">
      <el-form class="form-sector" label-position="right" label-width="150px"
        :model="familyInfo" ref="infoForm" :rules="formRule">
        <div class="style-label">关于自己</div>
        <el-form-item prop="origin">
          <span slot="label">籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯：</span>
          <area-picker class="area-picker" v-model="familyInfo.origin"></area-picker>
        </el-form-item>
        <el-form-item prop="nationality">
          <span slot="label">国&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;籍&nbsp;:</span>
          <el-select size="small" v-model="familyInfo.nationality">
            <el-option v-for="item in options.nationality" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="个性特征：" prop="personality">
          <el-select size="small" v-model="familyInfo.personality">
            <el-option v-for="item in options.personality" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="幽默感：" prop="humor">
          <el-select size="small" v-model="familyInfo.humor">
            <el-option v-for="item in options.humor" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="对待感情：" prop="feeling">
          <el-select size="small" v-model="familyInfo.feeling">
            <el-option v-for="item in options.feeling" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否要小孩 :" prop="children">
          <el-select size="small" v-model="familyInfo.children">
            <el-option v-for="item in options.children" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="何时结婚 :" prop="timeFormMarriage">
          <el-select size="small" v-model="familyInfo.timeFormMarriage">
            <el-option v-for="item in options.timeFormMarriage" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否接受异地恋：" prop="remoteLove">
          <el-select size="small" v-model="familyInfo.remoteLove">
            <el-option v-for="item in options.remoteLove" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="理想婚姻：" prop="remoteLove">
          <el-input type="textarea" resize="none"
           :rows="5" v-model="familyInfo.idealMarriage"></el-input>
        </el-form-item>
        <div class="style-label">关于家庭</div>
        <el-form-item label="愿与对方父母同住 :" prop="liveWithParents">
          <el-select size="small" v-model="familyInfo.liveWithParents">
            <el-option v-for="item in options.liveWithParents" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="家中排行 :" prop="familyRanking">
          <el-select size="small" v-model="familyInfo.familyRanking">
            <el-option v-for="item in options.familyRanking" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="兄弟姐妹 :" prop="relative">
          <el-checkbox label="哥哥" v-model="relative.brother.checked"></el-checkbox>
          <el-select v-model="relative.brother.num" size="mini"
            class="select-num" v-if="relative.brother.checked">
            <el-option v-for="num in getNum" :key="num"
              :label="num" :value="num"></el-option>
            </el-select>
          <el-checkbox label="姐姐" v-model="relative.sister.checked"></el-checkbox>
          <el-select v-model="relative.sister.num" size="mini"
            class="select-num" v-if="relative.sister.checked">
            <el-option v-for="num in getNum" :key="num"
              :label="num" :value="num"></el-option>
          </el-select>
          <br>
          <el-checkbox label="弟弟" v-model="relative.youngerBro.checked"></el-checkbox>
          <el-select v-model="relative.youngerBro.num" size="mini"
            class="select-num" v-if="relative.youngerBro.checked">
            <el-option v-for="num in getNum" :key="num"
              :label="num" :value="num"></el-option>
          </el-select>
          <el-checkbox label="妹妹" v-model="relative.youngerSis.checked"></el-checkbox>
          <el-select v-model="relative.youngerSis.num" size="mini"
            class="select-num" v-if="relative.youngerSis.checked">
            <el-option v-for="num in getNum" :key="num"
              :label="num" :value="num"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="父母情况 :" prop="parentsStatus">
          <el-select size="small" v-model="familyInfo.parentsStatus">
            <el-option v-for="item in options.parentsStatus" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="父母工作：" prop="parentsWork">
          父&nbsp;<el-select size="small" class="select-style" v-model="familyInfo.fatherWork">
            <el-option v-for="item in options.parentsWork" :key="item"
              :label="item" :value="item"></el-option>
          </el-select><br>
          母&nbsp;<el-select size="small" class="select-style" v-model="familyInfo.motherWork">
            <el-option v-for="item in options.parentsWork" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="父母经济情况：" prop="parentsEconomic">
          <el-select size="small" v-model="familyInfo.parentsEconomic">
            <el-option v-for="item in options.parentsEconomic" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="父母医保情况：" prop="parentsInsurance">
          <el-select size="small" v-model="familyInfo.parentsInsurance">
            <el-option v-for="item in options.parentsInsurance" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="option-btn">
      <div class="btn" @click="saveDetails">保存</div>
      <!-- <div class="btn">跳过此页</div> -->
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import contryData from '../rawData/contries.js'
import AreaPicker from '@/components/ProvinceCityPicker'

export default {
  components: { AreaPicker },
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
      },
      options: {
        nationality: contryData.contries,
        personality: ['非常内向', '有点内向', '内外向平衡', '有点外向', '非常外向'],
        humor: ['没有幽默感', '有点幽默感', '幽默风趣', '经常带来欢笑'],
        temper: ['脾气很好', '很少发脾气', '偶尔会憋不住', '经常发脾气', '火气一点就着'],
        feeling: ['人生得意须尽欢', '是否投入真情要看情况', '一向认真对待感情', '憎恨虚情假意用情不专的人'],
        children: ['想要孩子', '要不要都行', '不要孩子', '视情况而定'],
        timeFormMarriage: ['接受闪婚', '顺其自然', '一年内', '两年内', '三年以上'],
        remoteLove: ['不能接受', '能接受', '视情况而定'],
        liveWithParents: ['愿意', '不愿意', '视情况而定'],
        familyRanking: ['独生子女', '老大', '老二', '老三', '老四', '老五及更小', '老幺'],
        parentsStatus: ['父母健在', '单亲家庭', '父亲健在', '母亲健在', '父母均离世'],
        parentsWork: ['政府机关(已退休)', '政府机关(未退休)', '事业单位(已退休)', '事业单位(未退休)',
          '外企单位(已退休)', '外企单位(未退休)', '世界500强(已退休)', '世界500强(未退休)',
          '上市公司(已退休)', '上市公司(未退休)', '国有企业(已退休)', '国有企业(未退休)',
          '私营企业(已退休)', '私营企业(未退休)', '自有公司', '无工作', '其他(已退休)', '其他(未退休)'],
        parentsEconomic: ['均有退休金', '均无退休金', '只有父亲有退休金', '只有母亲有退休金'],
        parentsInsurance: ['均有医疗保险', '均无医疗保险', '只有父亲有医疗保险', '只有母亲有医疗保险']
      },
      formRule: {
        // origin: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ],
        // nationality: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ],
        // children: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ],
        // liveWithParents: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ],
        // familyRanking: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ]
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
          data: [...keyArray, ...extraArray]
        })
        console.log(res)
        Object.keys(res.data.details).forEach(key => {
          if (extraArray.indexOf(key) === -1) {
            // this.familyInfo.origin[0] = res.data.details[key][0]
            this.familyInfo[key] = res.data.details[key][0]
          }
        })
        let {originProvince, originCity} = res.data.details
        this.familyInfo.origin = [originProvince[0], originCity[0]]
        let {bigBrother, youngBrother, bigSister, youngSister} = res.data.details
        this.relative.brother = {num: bigBrother[0], checked: Boolean(bigBrother[0])}
        this.relative.youngerBro = {num: youngBrother[0], checked: Boolean(youngBrother[0])}
        this.relative.sister = {num: bigSister[0], checked: Boolean(bigSister[0])}
        this.relative.youngerSis = {num: youngSister[0], checked: Boolean(youngSister[0])}
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async saveDetails () {
      try {
        let submitData = {
          originProvince: this.familyInfo.origin[0],
          originCity: this.familyInfo.origin[1],
          bigBrother: this.relative.brother.checked ? this.relative.brother.num : '',
          youngBrother: this.relative.youngerBro.checked ? this.relative.youngerBro.num : '',
          bigSister: this.relative.sister.checked ? this.relative.sister.num : '',
          youngSister: this.relative.youngerSis.checked ? this.relative.youngerSis.num : '',
          ...this.familyInfo
        }
        delete submitData.origin
        console.log(submitData, this.familyInfo)
        let res = await userService.setUserDetails({
          token: this.$store.getters.token,
          data: submitData
        })
        this.$message({
          message: res.message,
          type: 'success'
        })
        console.log(res)
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  computed: {
    getNum () {
      let numArray = []
      for (let i = 1; i < 11; i++) {
        numArray.push(i + '')
      }
      return numArray
    }
  },
  mounted: async function () {
    this.getDetails()
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
    .select-num {
      width: 100px;
      margin: 0 10px;
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
.el-form-item{
    margin-bottom: 10px;
    &:last-child{
      margin-bottom: 0;
    }
    .el-form-item__content{
      text-align: left;
      margin-left: 10px;
    }
    .el-checkbox {
      margin: 0 3px;
    }
  }
</style>
