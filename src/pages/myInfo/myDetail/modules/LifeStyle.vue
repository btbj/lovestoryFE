<template>
  <div>
    <div class="life-content">
      <el-form class="form-sector" label-position="right" label-width="110px"
        :model="styleInfo" ref="infoForm" :rules="formRule">
        <div class="style-label">嗜好习惯</div>
        <el-form-item prop="smoking">
          <span slot="label">吸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;烟：</span>
          <el-select size="small" v-model="styleInfo.smoking">
            <el-option v-for="item in options.smoking" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="drinking">
          <span slot="label">饮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;酒：</span>
          <el-select size="small" v-model="styleInfo.drinking">
            <el-option v-for="item in options.drinking" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="锻炼习惯：" prop="exercise">
          <el-select size="small" v-model="styleInfo.exercise">
            <el-option v-for="item in options.exercise" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="饮食习惯：" prop="diet">
          <el-select size="small" v-model="styleInfo.diet">
            <el-option v-for="item in options.diet" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="逛街购物：" prop="shopping">
          <el-select size="small" v-model="styleInfo.shopping">
            <el-option v-for="item in options.shopping" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="宗教信仰：" prop="religion">
          <el-select size="small" v-model="styleInfo.religion">
            <el-option v-for="item in options.religion" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作息时间：" prop="schedule">
          <el-select size="small" v-model="styleInfo.schedule">
            <el-option v-for="item in options.schedule" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="交际圈子：" prop="communication">
          <el-select size="small" v-model="styleInfo.communication">
            <el-option v-for="item in options.communication" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="最大消费：" prop="consumption">
          <el-select size="small" v-model="styleInfo.consumption">
            <el-option v-for="item in options.consumption" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <div class="style-label">家务</div>
        <el-form-item label="家务水平等级：" prop="level">
          <el-select size="small" v-model="styleInfo.level">
            <el-option v-for="item in options.level" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="家务分配情况：" prop="assignment">
          <el-select size="small" v-model="styleInfo.assignment">
            <el-option v-for="item in options.assignment" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <div class="style-label">宠物</div>
        <el-form-item label="宠物喜欢程度：" prop="degree">
          <el-select size="small" v-model="styleInfo.degree">
            <el-option v-for="item in options.degree" :key="item"
              :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关于宠物：" prop="pet">
          <el-select size="small" v-model="styleInfo.pet">
            <el-option v-for="item in options.pet" :key="item"
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
export default {
  data () {
    return {
      styleInfo: {
        smoking: '',
        drinking: '',
        exercise: '',
        diet: '',
        shopping: '',
        religion: '',
        schedule: '',
        communication: '',
        consumption: '',
        level: '',
        assignment: '',
        degree: '',
        pet: ''
      },
      options: {
        smoking: ['请选择', '不吸，很反感吸烟', '不吸，但不反感', '社交时偶尔吸', '每周吸几次', '每天都吸', '有烟瘾'],
        drinking: ['请选择', '不喝', '社交需要时喝', '有兴致时喝', '每天都离不开酒'],
        exercise: ['请选择', '每天锻炼', '每周至少一次', '每月几次', '没时间锻炼', '集中时间锻炼', '不喜欢锻炼'],
        diet: ['请选择', '无特殊习惯', '口味清淡', '无辣不欢', '口味偏重', '无肉不欢', '习惯吃素'],
        shopping: ['请选择', '从来不去', '没办法才去', '偶尔逛逛', '经常逛街', '非常爱逛街', '不逛就难受'],
        religion: ['请选择', '无宗教信仰', '大乘佛教显宗', '大乘佛教密宗', '大乘佛教净宗', '小乘佛教',
          '道教', '儒教', '基督教天主教派', '基督教东正教派', '基督教新教派',
          '犹太教', '伊斯兰教什叶派', '伊斯兰教逊尼派', '印度教', '神道教', '萨满教', '其它宗教信仰'],
        schedule: ['请选择', '早睡早起很规律', '经常夜猫子', '总是早起鸟', '偶尔懒散一下', '没有规律'],
        communication: ['请选择', '同学朋友都逐渐疏远了', '平时通过互联网和电话联系', '每年参加几次聚会',
          '偶尔主动约会朋友', '经常和朋友见面', '朋友越来越多', '每天呼朋唤友'],
        consumption: ['请选择', '享受美食', '购置服装', '购置包包', '购置美鞋', '美容护肤', '健身锻炼',
          '休闲娱乐', '旅游度假', '出行交通', '电子产品', '书本杂志', '教育培训',
          '社交交友', '文化活动', '电动游戏', '其他'],
        level: ['请选择', '精通', '会一些', '不会'],
        assignment: ['请选择', '家务全部都我做', '夫妻平均分配', '谁有时间谁做', '夫妻各自承担自己擅长的家务'],
        degree: ['请选择', '很喜欢', '还可以', '不喜欢'],
        pet: ['请选择', '我没有养宠物，也不接受对方养', '暂时没有养宠物，如果你喜欢我们一起养', '喜欢宠物，家里有养小狗',
          '喜欢宠物，家里有养猫咪', '喜欢宠物，我养的宠物很特别，好奇的话，来信问问我吧']
      },
      formRule: {
        smoking: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        drinking: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        exercise: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        religion: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        schedule: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
}
</script>

<style lang="less">
.life-content {
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
