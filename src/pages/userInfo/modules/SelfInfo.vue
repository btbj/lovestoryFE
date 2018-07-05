<template>
  <div class="_self-info-box">
    <div class="_self-big-pic">
      <div class="self-info-big-pic">
        <img :src="info.info.head_image_url" class="self-info-img-style">
      </div>
    </div>
    <div class="_self-content-box">
      <div class="_self-name-row">
        <div class="_self-name">{{info.info.nickname}}</div>
        <div class="_focus-btn-box">
          <follow-btn></follow-btn>
        </div>
      </div>
      <div class="_self-age-row">
        <span>{{info.info.age}}岁，</span>
        <span>{{info.info.sex}}，</span>
        <span>{{info.info.province}} {{info.info.city}}</span>
      </div>
      <div class="_self-detail-info">
        <div class="_detail-item-row">
          <div class="_item-column">
            <span class="label">学历</span>：
            <span>{{info.info.education}}</span>
          </div>
          <div class="_item-column">
            <span class="label">身高</span>：
            <span>{{info.info.height}}cm</span>
          </div>
        </div>
        <div class="_detail-item-row">
          <div class="_item-column">
            <span class="label">购车</span>：
            <span>{{info.info.car_status}}</span>
          </div>
          <div class="_item-column">
            <span class="label">月薪</span>：
            <span>{{info.info.month_pay}}</span>
          </div>
        </div>
        <div class="_detail-item-row">
          <div class="_item-column">
            <span class="label">住房</span>：
            <span>{{info.info.house_status}}</span>
          </div>
          <div class="_item-column">
            <span class="label">体重</span>：
            <span>{{info.info.weight || '——'}}</span>
          </div>
        </div>
        <div class="_detail-item-row">
          <div class="_item-column">
            <span class="label">星座</span>：
            <span>{{info.info.sign || '——'}}</span>
          </div>
          <div class="_item-column">
            <span class="label">民族</span>：
            <span>{{info.info.nation || '——'}}</span>
          </div>
        </div>
        <div class="_detail-item-row">
          <div class="_item-column">
            <span class="label">属相</span>：
            <span>{{info.info.zodiac || '——'}}</span>
          </div>
          <div class="_item-column">
            <span class="label">婚姻状况</span>：
            <span>{{info.info.marital_status || '——'}}</span>
          </div>
        </div>
      </div>

      <album-list></album-list>

    </div>
  </div>
</template>

<script>
import FollowBtn from '../components/FollowBtn'
import AlbumList from '../components/AlbumList'

export default {
  components: { FollowBtn, AlbumList },
  props: ['info']
}
</script>

<style lang="less">
._self-info-box {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ._self-big-pic {
    width: 220px;
    height: 320px;
    border: 1px solid lightgrey;
    box-sizing: border-box;
    align-self: flex-end;
    margin-right: 10px;
    margin-bottom: 5px;
    padding: 15px;
    .self-info-big-pic {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .self-info-img-style {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  ._self-content-box {
    padding: 5px;
    width: 440px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    ._self-name-row {
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      ._self-name {
        flex: 1;
        width: 90px;
        font-weight: bold;
        text-align: left;
      }
      ._focus-btn-box {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
      }
    }
    ._self-age-row {
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    ._self-detail-info {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 10px;
      ._detail-item-row {
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
}
</style>
