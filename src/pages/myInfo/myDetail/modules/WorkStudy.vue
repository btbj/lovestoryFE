<template>
  <div>
    <div class="work-content">
      <el-form class="form-sector" label-position="right" label-width="120px"
        :model="workInfo" ref="infoForm" :rules="formRule">
        <div class="style-label">工作</div>
        <el-form-item label="职业职位 :" prop="workProfession">
          <el-select size="small" v-model="workInfo.workProfession">
            <el-option v-for="item in options.workProfession" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公司行业 :" prop="workIndustry">
          <el-select size="small" v-model="workInfo.workIndustry">
            <el-option v-for="item in options.workIndustry" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公司类型 :" prop="workCompany">
          <el-select size="small" v-model="workInfo.workCompany">
            <el-option v-for="item in options.workCompany" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="福利待遇 :" prop="workWelfare">
          <el-select size="small" v-model="workInfo.workWelfare">
            <el-option v-for="item in options.workWelfare" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作状态 :" prop="workStatus">
          <el-select size="small" v-model="workInfo.workStatus">
            <el-option v-for="item in options.workStatus" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="调动工作可能性 :" prop="workTransfer">
          <el-select size="small" v-model="workInfo.workTransfer">
            <el-option v-for="item in options.workTransfer" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="海外工作可能性 :" prop="workOverseas">
          <el-select size="small" v-model="workInfo.workOverseas">
            <el-option v-for="item in options.workOverseas" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="事业与家庭 :" prop="workPriority">
          <el-select size="small" v-model="workInfo.workPriority">
            <el-option v-for="item in options.workPriority" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <div class="style-label">学习</div>
        <el-form-item label="毕业学校 :" prop="studySchool">
          <el-input v-model="workInfo.studySchool" placeholder="请输入学校" size="small" style="width: 200px;"></el-input>
        </el-form-item>
        <el-form-item label="专业类型 :" prop="studyMajor">
          <el-select size="small" v-model="workInfo.studyMajor">
            <el-option v-for="item in options.studyMajor" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="语言能力 :" prop="studyLanguages">
          <div class="language-box">
            <el-checkbox-group v-model="workInfo.studyLanguages">
              <div class="checkbox-column">
                <el-checkbox v-for="language in options.languageList1" :key="language"
                 :label="language" :value="language"></el-checkbox>
              </div>
              <div class="checkbox-column">
                <el-checkbox v-for="language in options.languageList2" :key="language"
                 :label="language" :value="language"></el-checkbox>
              </div>
            </el-checkbox-group>
          </div>
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
        workPriority: '',
        studySchool: '',
        studyMajor: '',
        studyLanguages: []
      },
      options: {
        workProfession: ['在校学生', '计算机/互联网/IT', '电子/半导体/仪表仪器', '通信技术', '销售',
          '市场拓展', '公关/商务', '采购/贸易', '客户服务/技术支持', '人力资源/行政/后勤', '高级管理',
          '生产/加工/制造', '质控/安检', '工程机械', '技工', '财会/审计/统计', '金融/证券/投资/保险',
          '房地产/装修/物业', '仓储/物流', '交通/运输', '普通劳动力/家政服务', '普通服务行业',
          '航空服务业', '教育/培训', '咨询/顾问', '学术/科研', '法律', '设计/创意', '文学/影视/传媒',
          '餐饮/旅游', '化工', '能源/地质勘查', '医疗/护理', '保健/美容', '生物/制药/医疗器械',
          '体育工作者', '翻译', '公务员/国家干部', '私营业主', '农/林/牧/渔业', '自由职业者', '其他'],
        workIndustry: ['计算机(软件、硬件、服务)', '通信、电信', '互联网', '电子(半导体、仪器、自动化)',
          '金融服务(会计/审计、银行、保险)', '金融/投资/证券', '贸易(进出口、批发、零售)',
          '快速消费品(食品、饮料、化妆品)', '服装/纺织/皮革', '家具/家电/工艺品/玩具', '办公用品及设备',
          '医疗、医药', '广告/公关/市场推广/会展', '影视/媒体/出版/印刷/包装', '房地产相关',
          '家居/室内设计/装潢', '服务(咨询、人力资源)', '法律相关', '教育/培训', '学术/科研',
          '酒店/餐饮业', '旅游', '娱乐/休闲/体育', '美容/保健', '交通(运输、物流、航天、航空)',
          '汽车及零配件', '农业', '政府/非营利机构', '其他行业'],
        workCompany: ['政府机关', '事业单位', '外企企业', '世界500强', '上市公司', '国有企业',
          '私营企业', '自有公司'],
        workWelfare: ['福利优越', '奖金丰厚', '事业稳定上升', '事业刚起步', '投资高回报'],
        workStatus: ['轻松稳定', '朝九晚五', '偶尔加班', '经常加班', '偶尔出差', '经常出差',
          '经常有应酬', '工作时间自由'],
        workTransfer: ['完全无可能', '未来几年几乎没可能', '未来几年有可能', '最近即将调动'],
        workOverseas: ['完全无可能', '未来几年几乎没可能', '未来几年有可能', '最近即将调动'],
        workPriority: ['一切以家庭为重', '会为家庭牺牲事业', '尽量均衡事业与家庭', '会为事业牺牲家庭利益', '事业第一'],
        studySchool: '',
        studyMajor: ['计算机类', '电子信息类', '中文类', '外文类', '经济学类', '金融学类', '管理类',
          '市场营销类', '法学类', '教育类', '社会学类', '历史类', '哲学类', '艺术类', '图书馆类',
          '情报档案类', '政治类', '数学类', '统计类', '物理类', '化学类', '生物类', '食品类',
          '医学类', '环境类', '地理类', '建筑类', '测绘类', '电气类', '机械类'],
        languageList1: ['中文(普通话)', '英语', '日语', '德语', '俄语', '荷兰语', '西班牙语',
          '阿拉伯语', '印度尼西亚语', '丹麦语', '伊朗语', '土耳其语', '捷克语', '瑞典语', '罗马尼亚语'],
        languageList2: ['中文(广东话)', '法语', '韩语', '意大利语', '芬兰语', '葡萄牙语', '越南语',
          '泰国语', '印度语', '希腊语', '匈牙利语', '挪威语', '波兰语', '缅甸语', '其他']
      },
      formRule: {
        // workProfession: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ],
        // workIndustry: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ],
        // workCompany: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ],
        // workWelfare: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ],
        // workStatus: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ],
        // studySchool: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ],
        // studyMajor: [
        //   { required: true, message: '请选择', trigger: 'change' }
        // ]
      }
    }
  },
  methods: {
    async getDetails () {
      try {
        let res = await userService.getUserDetails({
          token: this.$store.getters.token,
          data: Object.keys(this.workInfo)
        })
        console.log(res)
        Object.keys(res.data.details).forEach(key => {
          if (key === 'studyLanguages') {
            this.workInfo[key] = res.data.details[key]
          } else {
            this.workInfo[key] = res.data.details[key][0]
          }
        })
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async saveDetails () {
      try {
        let res = await userService.setUserDetails({
          token: this.$store.getters.token,
          data: this.workInfo
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
  mounted: async function () {
    this.getDetails()
  }
}
</script>

<style lang="less">
.work-content {
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
    .language-box {
      box-sizing: border-box;
      .el-checkbox-group {
        display: flex;
        flex-direction: row;
        .el-checkbox+.el-checkbox {
          margin-left: 0;
        }
        .checkbox-column {
          display: flex;
          flex-direction: column;
          margin-right: 10px;
          box-sizing: border-box;
          width: 150px;
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

</style>
