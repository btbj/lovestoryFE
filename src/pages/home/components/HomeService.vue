<template>
  <div class="home-service-wrapper">
    <!-- <img :src="processImg" alt=""> -->
    <div class="home-service" :style="`background-image: url('${processImg}');`">
      <div class="service-content">
        <div class="content-words">
          <div class="big-words">定制服务，为爱保驾护航</div>
          <div class="small-words">专业红娘团，优质一对一服务</div>
        </div>
        <div class="content-chart">
          <div class="chart-item">
            <div class="icon-bg">
              <span class="mdi-mode_edit icon"></span>
            </div>
            <div class="icon-label">在线免费注册</div>
          </div>
          <div class="chart-item">
            <span class="mdi-forward icon-arrow-style"></span>
          </div>
          <div class="chart-item">
            <div class="icon-bg">
              <span class="mdi-assignment_ind icon"></span>
            </div>
            <div class="icon-label">线下实名签约</div>
          </div>
          <div class="chart-item">
            <span class="mdi-forward icon-arrow-style"></span>
          </div>
          <div class="chart-item">
            <div class="icon-bg">
              <span class="mdi-search icon"></span>
            </div>
            <div class="icon-label">人工匹配筛选</div>
          </div>
          <div class="chart-item">
            <span class="mdi-forward icon-arrow-style"></span>
          </div>
          <div class="chart-item">
            <div class="icon-bg">
              <span class="mdi-my_location icon"></span>
            </div>
            <div class="icon-label">全程跟踪服务</div>
          </div>
          <div class="chart-item">
            <span class="mdi-forward icon-arrow-style"></span>
          </div>
          <div class="chart-item">
            <div class="icon-bg">
              <span class="mdi-people icon"></span>
            </div>
            <div class="icon-label">会员一对一约见</div>
          </div>
          <div class="chart-item">
            <span class="mdi-forward icon-arrow-style"></span>
          </div>
          <div class="chart-item">
            <div class="icon-bg">
              <span class="mdi-wc icon"></span>
            </div>
            <div class="icon-label">会员喜结佳缘</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageService from '@/services/imageService'

export default {
  computed: {
    processImg () {
      return imageService.process
    }
  }
}
</script>

<style lang="less">
.home-service-wrapper{
  margin: 30px 0;
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img{
    height: 100%;
  }
}
.home-service {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  // background: url("https://dummyimage.com/1200x320/eee/3ff.jpg&text=pic");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  // padding: 20px 180px;
  text-align: center;
  .service-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 50px 100px;
    .content-words {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 8px;
      margin-bottom: 10px;
      .big-words {
        font-size: 34px;
        margin-bottom: 15px;
      }
      .small-words {
        font-size: 18px;
      }
    }
    .content-chart {
      width: 100%;
      box-sizing: border-box;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .chart-item {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 5px;
        min-width: 30px;
        min-height: 30px;
        .icon-bg {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-color: #FD6F9F;
          margin-bottom: 10px;
          .icon {
            font-size: 28px;
            color: white;
            line-height: 55px;
          }
        }
        .icon-label {
          font-size: 12px;
        }
        .icon-arrow-style {
          font-size: 40px;
          color: #D32F61;
        }
      }
    }
  }
}

</style>
