<template>
  <div class="tag-item-root">
    <div :class="['small-tag', value ? 'selected' : '']"
      v-if="!TagData.extended"
      @click.stop="extendTag(true)">
      <span>{{tagLabel}}</span>
      <span class="item-icon mdi-expand_more"></span>
      <span class="item-icon mdi-cancel" v-if="value" @click.stop="resetValue"></span>
    </div>
    <div class="big-tag" v-else>
      <div :class="['small-tag', value ? 'selected' : '']"
        @click.stop="extendTag(false)">
        <span>{{tagLabel}}</span>
        <span class="item-icon mdi-expand_less"></span>
        <span class="item-icon mdi-cancel" v-if="value" @click.stop="resetValue"></span>
      </div>
      <div class="extended-box">
        <div class="message">{{TagData.message}}</div>
        <el-select class="salary-select" size="mini" v-model="TagData.value" placeholder="请选择">
          <el-option
            v-for="(item, index) in TagData.options"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
        <div class="confirm-btn" @click.stop="confirmNewValue">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import TagEventBus from '@/components/eventBus'

export default {
  props: ['value'],
  data () {
    return {
      TagData: {
        title: '职业',
        message: '请选择职业',
        options: ['在校学生', '计算机/互联网/IT', '电子/半导体/仪表仪器', '通信技术', '销售', '市场拓展', '公关/商务', '采购/贸易', '客户服务/技术支持', '人力资源/行政/后勤', '高级管理', '生产/加工/制造', '质控/安检', '工程机械', '技工', '财会/审计/统计', '金融/证券/投资/保险', '房地产/装修/物业', '仓储/物流', '交通/运输', '普通劳动力/家政服务', '普通服务行业', '航空服务业', '教育/培训', '咨询/顾问', '学术/科研', '法律', '设计/创意', '文学/传媒/影视', '餐饮/旅游', '化工', '能源/地质勘查', '医疗/护理', '保健/美容', '生物/制药/医疗器械', '体育工作者', '翻译', '公务员/国家干部', '私营业主', '农/林/牧/渔业', '警察/其它', '自由职业者', '其他'],
        value: '',
        extended: false
      }
    }
  },
  methods: {
    extendTag (extended = false) {
      if (extended) {
        TagEventBus.$emit('closeAll')
        this.TagData.value = this.value
      }
      this.TagData.extended = extended
    },
    confirmNewValue () {
      this.TagData.extended = false
      this.$emit('input', this.TagData.value)
      TagEventBus.$emit('getNewData')
    },
    resetValue () {
      this.$emit('input', '')
      TagEventBus.$emit('getNewData')
    }
  },
  computed: {
    tagLabel () {
      return this.value || this.TagData.title
    }
  },
  mounted: function () {
    TagEventBus.$on('closeAll', this.extendTag)
    window.addEventListener('click', () => {
      TagEventBus.$emit('closeAll')
    })
  }
}
</script>

<style lang="less" scoped>
.small-tag{
  height: 25px;
  min-width: 60px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  line-height: 16px;
  background: white;
  box-sizing: border-box;
  padding: 0 10px;
  &.selected{
    background-color: #d7ebff;
    border-color: #a3c5e8;
  }
  .item-icon{
    font-size: 16px;
    &.mdi-cancel{
      margin-left: 5px;
      color: #7db4ec;
    }
    &.mdi-cancel:hover{
      color: #3498db;
    }
  }
}
.small-tag:hover{
  background-color: #d7ebff;
  border-color: #a3c5e8;
}
.big-tag{
  position: relative;
  z-index: 10;
  .small-tag{
    background: white;
    border-color: #ddd;
    border-bottom-color: white !important;
  }
  .small-tag:hover{
    background: white;
    border-color: #ddd;
  }
  .extended-box{
    z-index: -1;
    background: white;
    position: absolute;
    border: 1px solid #ddd;
    min-width: 100px;
    min-height: 70px;
    margin-top: -1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 5px 10px;
    font-size: 12px;
    .message{
      font-weight: bold;
      margin: 5px 0;
    }
    .confirm-btn{
      height: 25px;
      line-height: 25px;
      width: 60px;
      background: #3498db;
      color: white;
      margin: 5px 0;
    }
  }
}
</style>

<style lang="less">
.salary-select{
  width: 150px;
}
</style>
