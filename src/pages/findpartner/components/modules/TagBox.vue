<template>
  <div class="tag-box">
  <div class="hot-tag-box">
    <div class="row-item">
      <div class="row-label">热门标签 :</div>
      <div class="row-tags">
        <div :class="['hot-tag-item', item === tags.hotTag.value ? 'selected' : '']"
          v-for="(item, index) in tags.hotTag.options" :key="index"
          @click="selectHotTag(item)">{{item}}</div>
      </div>
    </div>
    <div class="row-item">
      <div class="row-label">您已选择 :</div>
      <div class="row-tags">
        <sex-tag class="tag-item" v-if="tags.sex.value" v-model="tags.sex.value"></sex-tag>
        <area-tag class="tag-item" v-if="tags.area.value.length" v-model="tags.area.value"></area-tag>
        <age-tag class="tag-item" v-if="tags.age.value.length" v-model="tags.age.value"></age-tag>
        <height-tag class="tag-item" v-if="tags.height.value.length" v-model="tags.height.value"></height-tag>
        <marage-history-tag class="tag-item" v-if="tags.marageHistroy.value" v-model="tags.marageHistroy.value"></marage-history-tag>
        <education-tag class="tag-item" v-if="tags.education.value" v-model="tags.education.value"></education-tag>
        <salary-tag class="tag-item" v-if="tags.salary.value" v-model="tags.salary.value"></salary-tag>
        <house-tag class="tag-item" v-if="tags.house.value" v-model="tags.house.value"></house-tag>
        <car-tag class="tag-item" v-if="tags.car.value" v-model="tags.car.value"></car-tag>
        <children-tag class="tag-item" v-if="tags.children.value" v-model="tags.children.value"></children-tag>
        <job-tag class="tag-item" v-if="tags.job.value" v-model="tags.job.value"></job-tag>
        <!-- <company-tag class="tag-item" v-if="tags.company.value" v-model="tags.company.value"></company-tag> -->
        <census-tag class="tag-item" v-if="tags.census.value.length" v-model="tags.census.value"></census-tag>
        <!-- <origin-tag class="tag-item" v-if="tags.origin.value.length" v-model="tags.origin.value"></origin-tag> -->
        <nation-tag class="tag-item" v-if="tags.nation.value" v-model="tags.nation.value"></nation-tag>
        <blood-tag class="tag-item" v-if="tags.blood.value" v-model="tags.blood.value"></blood-tag>
        <zodiac-tag class="tag-item" v-if="tags.zodiac.value.length" v-model="tags.zodiac.value"></zodiac-tag>
        <sign-tag class="tag-item" v-if="tags.sign.value.length" v-model="tags.sign.value"></sign-tag>
        <religion-tag class="tag-item" v-if="tags.religion.value" v-model="tags.religion.value"></religion-tag>
        <!-- <integrity-tag class="tag-item" v-if="tags.integrity.value" v-model="tags.integrity.value"></integrity-tag> -->
        <photo-tag class="tag-item" v-if="tags.photo.value" v-model="tags.photo.value"></photo-tag>
      </div>
    </div>
    <div class="collapse-btn" v-if="!moreTag" @click="moreTag = true">
      <span>设置更多条件</span>
      <span class="icon icon-expand_more"></span>
    </div>
  </div>
  <div class="more-tags" v-if="moreTag">
    <div class="row-item">
      <div class="row-label">更多标签 :</div>
      <div class="row-tags">
        <sex-tag class="tag-item" v-if="!tags.sex.value" v-model="tags.sex.value"></sex-tag>
        <area-tag class="tag-item" v-if="!tags.area.value.length" v-model="tags.area.value"></area-tag>
        <age-tag class="tag-item" v-if="!tags.age.value.length" v-model="tags.age.value"></age-tag>
        <height-tag class="tag-item" v-if="!tags.height.value.length" v-model="tags.height.value"></height-tag>
        <marage-history-tag class="tag-item" v-if="!tags.marageHistroy.value" v-model="tags.marageHistroy.value"></marage-history-tag>
        <education-tag class="tag-item" v-if="!tags.education.value" v-model="tags.education.value"></education-tag>
        <salary-tag class="tag-item" v-if="!tags.salary.value" v-model="tags.salary.value"></salary-tag>
        <house-tag class="tag-item" v-if="!tags.house.value" v-model="tags.house.value"></house-tag>
        <car-tag class="tag-item" v-if="!tags.car.value" v-model="tags.car.value"></car-tag>
        <children-tag class="tag-item" v-if="!tags.children.value" v-model="tags.children.value"></children-tag>
        <job-tag class="tag-item" v-if="!tags.job.value" v-model="tags.job.value"></job-tag>
        <!-- <company-tag class="tag-item" v-if="!tags.company.value" v-model="tags.company.value"></company-tag> -->
        <census-tag class="tag-item" v-if="!tags.census.value.length" v-model="tags.census.value"></census-tag>
        <!-- <origin-tag class="tag-item" v-if="!tags.origin.value.length" v-model="tags.origin.value"></origin-tag> -->
        <nation-tag class="tag-item" v-if="!tags.nation.value" v-model="tags.nation.value"></nation-tag>
        <blood-tag class="tag-item" v-if="!tags.blood.value" v-model="tags.blood.value"></blood-tag>
        <zodiac-tag class="tag-item" v-if="!tags.zodiac.value.length" v-model="tags.zodiac.value"></zodiac-tag>
        <sign-tag class="tag-item" v-if="!tags.sign.value.length" v-model="tags.sign.value"></sign-tag>
        <religion-tag class="tag-item" v-if="!tags.religion.value" v-model="tags.religion.value"></religion-tag>
        <!-- <integrity-tag class="tag-item" v-if="!tags.integrity.value" v-model="tags.integrity.value"></integrity-tag> -->
        <photo-tag class="tag-item" v-if="!tags.photo.value" v-model="tags.photo.value"></photo-tag>
      </div>
    </div>
    <div class="collapse-btn" @click="moreTag = false">
      <span>收起</span>
      <span class="icon icon-expand_less"></span>
    </div>
  </div>
</div>
</template>

<script>
import TagEventBus from '@/components/eventBus'
import SexTag from '../TagItems/SexTag'
import MarageHistoryTag from '../TagItems/MarageHistoryTag'
import AreaTag from '../TagItems/AreaTag'
import AgeTag from '../TagItems/AgeTag'
import HeightTag from '../TagItems/HeightTag'
import ZodiacTag from '../TagItems/ZodiacTag'
import EducationTag from '../TagItems/EducationTag'
import SalaryTag from '../TagItems/SalaryTag'
import HouseTag from '../TagItems/HouseTag'
import CarTag from '../TagItems/CarTag'
import ChildrenTag from '../TagItems/ChildrenTag'
import JobTag from '../TagItems/JobTag'
import CompanyTag from '../TagItems/CompanyTag'
import CensusTag from '../TagItems/CensusTag'
import OriginTag from '../TagItems/OriginTag'
import NationTag from '../TagItems/NationTag'
import BloodTag from '../TagItems/BloodTag'
import SignTag from '../TagItems/SignTag'
import ReligionTag from '../TagItems/ReligionTag'
import IntegrityTag from '../TagItems/IntegrityTag'
import PhotoTag from '../TagItems/PhotoTag'

export default {
  components: { SexTag, MarageHistoryTag, AreaTag, AgeTag, HeightTag, ZodiacTag, EducationTag, SalaryTag, HouseTag, CarTag, ChildrenTag, JobTag, CompanyTag, CensusTag, OriginTag, NationTag, BloodTag, SignTag, ReligionTag, IntegrityTag, PhotoTag },
  data () {
    return {
      moreTag: true,
      tags: {
        sex: {name: 'sex', value: '女', type: 1},
        marageHistroy: {name: 'marital_status', value: '', type: 1},
        area: {name: ['province', 'city'], value: [], type: 4},
        age: {name: 'age', value: [], type: 2},
        height: {name: 'height', value: [], type: 2},
        education: {name: 'education', value: '', type: 1},
        salary: {name: 'month_pay', value: '', type: 2},
        house: {name: 'live_status', value: '', type: 1},
        car: {name: 'car_status', value: '', type: 1},
        children: {name: 'children', value: '', type: 1},
        job: {name: 'job', value: '', type: 1},
        // company: {name: 'company', value: '', type: 1},
        census: {name: ['household_province', 'household_city'], value: [], type: 4},
        // origin: {name: ['origin_province', 'origin_city'], value: [], type: 4},
        nation: {name: 'nation', value: '', type: 1},
        blood: {name: 'blood_type', value: '', type: 1},
        zodiac: {name: 'zodiac', value: [], type: 3},
        sign: {name: 'sign', value: [], type: 3},
        religion: {name: 'religion', value: '', type: 1},
        // integrity: {name: 'integrity', value: '', type: 1},
        photo: {name: 'has_image', value: '', type: 1},
        hotTag: {name: 'hot_tag', value: '', options: ['高级白领', '教师', '医务工作者', '银行职员', '空姐', '公务员', '会计', '在校学生', '私营业主'], type: 1}
      }
    }
  },
  methods: {
    handleGetNewData () {
      let newSubmitTags = this.submitTags.map(item => {
        let {name, value, type} = item
        return {name, value, type}
      })
      this.$emit('change', newSubmitTags)
    },
    selectHotTag (item) {
      if (this.tags.hotTag.value === item) {
        this.tags.hotTag.value = null
      } else {
        this.tags.hotTag.value = item
      }
      this.handleGetNewData()
    }
  },
  computed: {
    submitTags () {
      let result = Object.values(this.tags).filter(item => {
        if (item.type === 1 && item.value) {
          return item
        }
        if (item.type === 2 && item.value.length) {
          return item
        }
        if (item.type === 3 && item.value.length) {
          return item
        }
      })
      let areaTags = Object.values(this.tags).filter(item => {
        return item.type === 4
      })
      areaTags.forEach(item => {
        let province = {name: item.name[0], value: item.value[0], type: 1}
        let city = {name: item.name[1], value: item.value[1], type: 1}
        if (province.value) {
          result.push(province)
        }
        if (city.value) {
          result.push(city)
        }
      })
      return result
    }
  },
  mounted: async function () {
    TagEventBus.$on('getNewData', this.handleGetNewData)
  },
  beforeDestroy: async function () {
    TagEventBus.$off()
  }
}
</script>

<style lang="less">
.tag-box {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-top: none;
  margin-bottom: 20px;
  .row-item {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .row-label {
      align-self: flex-start;
      margin-top: 10px;
      width: 70px;
      font-size: 14px;
      font-weight: bold;
    }
    .row-tags {
      display: flex;
      width: 600px;
      box-sizing: border-box;
      flex-wrap: wrap;
      .tag-item{
        margin: 5px 0 5px 5px;
      }
    }
  }
  .hot-tag-box {
    width: 100%;
    border-top: 3px solid #F33973;
    background-color: #F2F2F2;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 5px;
    .hot-tag-item {
      border: 1px solid #F33973;
      border-radius: 10px;
      line-height: 14px;
      font-size: 12px;
      margin: 5px;
      padding: 5px;
      color: #F33973;
      background-color: white;
      cursor: pointer;
      &.selected{
        color: white;
        background: #F33973;
      }
    }
  }
  .more-tags {
    width: 100%;
    border-top: 1px solid lightgrey;
    box-sizing: border-box;
    padding: 10px 5px;
    .single-tag {
      cursor: pointer;
      margin: 5px;
    }
  }
}

.collapse-btn {
  color: blue;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  float: right;
  align-self: flex-end;
  .icon{
    font-size: 18px;
  }
}
</style>
