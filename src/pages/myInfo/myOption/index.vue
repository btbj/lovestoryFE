<template>
  <div class="option-info-container">
    <div class="option-info-title">
      <span class="icon-radio_button_unchecked icon"></span>
      <span>择偶条件</span>
    </div>
    <div class="option-info-label">资料越完善，同等条件我们将优先推荐您哦！</div>
    <div class="option-info-box">
      <div class="option-info-banner">我的择偶条件</div>
      <div class="option-info-content">
        <div class="content-item-row">
          <div class="item-column">
            <span>所在地区&nbsp;:&nbsp;</span>
            <span>{{optionAddressText}}</span>
          </div>
          <div class="item-column">
            <span>身高范围&nbsp;:&nbsp;</span>
            <span>{{optionHeightText}}</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>婚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;史&nbsp;:&nbsp;</span>
            <span>{{optionInfo.marriageStatus || '不限'}}</span>
          </div>
          <div class="item-column">
            <span>民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族&nbsp;:&nbsp;</span>
            <span>{{optionInfo.nation || '不限'}}</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历&nbsp;:&nbsp;</span>
            <span>{{optionInfo.education || '不限'}}</span>
          </div>
          <div class="item-column">
            <span>有无照片&nbsp;:&nbsp;</span>
            <span>{{optionInfo.hasPic || '不限'}}</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>年龄范围&nbsp;:&nbsp;</span>
            <span>{{optionAgeText}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="seprator"></div>
    <div class="option-info-form">
      <div class="option-info-banner">修改择偶条件</div>
      <el-form class="form-sector" label-position="right" label-width="100px"
        :model="optionInfo" ref="infoForm" :rules="formRule">
        <el-form-item label="所在地区 :" prop="address" >
          <!-- <el-select size="small" v-model="optionInfo.region"></el-select> -->
          <area-picker class="input-item" v-model="optionInfo.address"></area-picker>
        </el-form-item>
        <el-form-item prop="age">
          <span slot="label">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄&nbsp;:</span>
          <!-- <el-select size="small" v-model="optionInfo.age"></el-select> -->
          <age-picker class="input-item" v-model="optionInfo.age"></age-picker>
        </el-form-item>
        <el-form-item prop="marriageStatus">
          <span slot="label">婚姻状况&nbsp;:</span>
          <el-select size="small" v-model="optionInfo.marriageStatus" clearable>
            <el-option
              v-for="(item, index) in options.marriageStatus" :key="index"
              :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="height">
          <span slot="label">身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高&nbsp;:</span>
          <!-- <el-select size="small" v-model="optionInfo.height"></el-select> -->
          <height-picker class="input-item" v-model="optionInfo.height"></height-picker>
        </el-form-item>
        <el-form-item prop="education">
          <span slot="label">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历&nbsp;:</span>
          <el-select size="small" v-model="optionInfo.education" clearable>
            <el-option
              v-for="(item, index) in options.education" :key="index"
              :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="ethnic">
          <span slot="label">民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族&nbsp;:</span>
          <el-select size="small" v-model="optionInfo.nation" clearable>
            <el-option
              v-for="(item, index) in options.nation" :key="index"
              :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="有无照片 :" prop="picture">
          <el-select size="small" v-model="optionInfo.hasPic" clearable>
            <el-option
              v-for="(item, index) in options.hasPic" :key="index"
              :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="option-btn">
      <div class="btn" @click="validateForm">保存</div>
      <!-- <div class="btn">跳过此页</div> -->
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import AreaPicker from '@/components/AreaPicker'
import AgePicker from './components/AgePicker'
import HeightPicker from './components/HeightPicker'

export default {
  components: { AreaPicker, AgePicker, HeightPicker },
  data () {
    return {
      optionInfo: {
        address: [],
        age: [],
        marriageStatus: '',
        height: [],
        nation: '',
        ethnic: '',
        hasPic: ''
      },
      formRule: {
        // address: [
        //   { required: true, message: '请选择所在地区', trigger: 'change' }
        // ],
        // age: [
        //   { required: true, message: '请选择年龄', trigger: 'change' }
        // ],
        // marriageStatus: [
        //   { required: true, message: '请选择婚姻状况', trigger: 'change' }
        // ],
        // height: [
        //   { required: true, message: '请选择身高', trigger: 'change' }
        // ],
        // education: [
        //   { required: true, message: '请选择学历', trigger: 'change' }
        // ],
        // ethnic: [
        //   { required: true, message: '请选择民族', trigger: 'change' }
        // ],
        // picture: [
        //   { required: true, message: '请选择有无照片', trigger: 'change' }
        // ]
      },
      options: {
        marriageStatus: ['未婚', '离异', '丧偶'],
        education: ['高中及中专以下', '大专', '本科', '双学士', '硕士', '博士', '博士后'],
        nation: ['汉族', '藏族', '朝鲜族', '蒙古族', '回族', '满族', '维吾尔族', '壮族', '彝族', '苗族', '其它'],
        hasPic: ['无照片', '有照片']
      }
    }
  },
  methods: {
    async getUserInfo () {
      try {
        let res = await userService.getInfo({
          token: this.$store.getters.token
        })
        console.log(res)
        let {province, city, age_max: ageMax, age_min: ageMin, height_max: heightMax, height_min: heightMin, marital_status: marriageStatus, education, nation, has_images: hasPic} = res.data.info.condition
        this.optionInfo = {
          address: [province, city],
          age: [ageMin, ageMax],
          marriageStatus,
          height: [heightMin, heightMax],
          education,
          nation,
          hasPic: hasPic === '0' ? '' : '有照片'
        }
      } catch (error) {
        console.log(error)
      }
    },
    validateForm () {
      this.$refs['infoForm'].validate(valid => {
        if (valid) {
          this.submitNewInfo()
        } else {
          console.log('error')
        }
      })
    },
    async submitNewInfo () {
      console.log('submit new info')
      try {
        let {address, age, marriageStatus, height, education, nation, hasPic} = this.optionInfo
        let res = await userService.setConditions({
          token: this.$store.getters.token,
          province: address[0],
          city: address[1],
          age_min: age[0],
          age_max: age[1],
          height_min: height[0],
          height_max: height[1],
          marital_status: marriageStatus,
          education,
          nation,
          has_images: hasPic ? 1 : 0
        })
        // console.log(res)
        this.$message({
          message: res.message,
          type: 'success'
        })
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  computed: {
    optionAddressText () {
      let result = ''
      let province = this.optionInfo.address[0]
      let city = this.optionInfo.address[1]
      if (province) {
        result += province
        if (city) {
          result += ' ' + city
        }
      } else {
        result += '不限'
      }
      return result
    },
    optionHeightText () {
      let result = ''
      let min = this.optionInfo.height[0]
      let max = this.optionInfo.height[1]
      if (min) {
        result += min + '厘米'
        if (max) {
          result += `~${max}厘米`
        } else {
          result += '以上'
        }
      } else {
        result += '不限'
      }
      return result
    },
    optionAgeText () {
      let result = ''
      let min = this.optionInfo.age[0]
      let max = this.optionInfo.age[1]
      if (min) {
        result += min + '岁'
        if (max) {
          result += `~${max}岁`
        } else {
          result += '以上'
        }
      } else {
        result += '不限'
      }
      return result
    }
  },
  mounted: async function () {
    this.getUserInfo()
  }
}
</script>

<style lang="less">
.option-info-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .seprator{
    margin: 0 5px;
    height: 0;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
  }
  .option-info-title {
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
  .option-info-label {
    width: 100%;
    height: 30px;
    background-color: #F0F0F0;
    box-sizing: border-box;
    color: #F1356F;
    font-size: 14px;
    line-height: 30px;
    padding: 0 0 0 25px;
    text-align: left;
    margin-bottom: 15px;
  }
  .option-info-banner {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    text-align: left;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .option-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .option-info-content {
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      padding: 5px 5px 5px 25px;
      text-align: left;
      .content-item-row {
        width: 100%;
        height: 20px;
        box-sizing: border-box;
        font-size: 14px;
        margin-bottom: 10px;
        display: flex;
        .item-column {
          display: flex;
          align-items: center;
          width: 50%;
        }
      }
    }
  }
  .option-info-form {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 40px;
    .form-sector{
      box-sizing: border-box;
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
.el-form-item{
  margin-bottom: 5px;
  &:last-child{
    margin-bottom: 0;
  }
  .el-form-item__content{
    text-align: left;
    margin-left: 10px;
    // .el-input{
    //   width: 250px;
    // }
  }
}
.input-item{
  width: 250px;
}
.area-piker{
  width: 300px;
}

</style>
