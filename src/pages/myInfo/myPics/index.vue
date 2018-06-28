<template>
  <div class="pics-info-container">
    <div class="pics-info-title">
      <span class="icon-radio_button_unchecked item-icon"></span>
      <span>我的相册</span>
    </div>
    <div class="pics-info-label">资料越完善，同等条件我们将优先推荐您哦！</div>
    <div class="pics-info-box">
      <div class="pics-info-banner">我的头像</div>
      <div class="avatar-container">
        <div class="avatar-box">
          <div class="avatar">
            <img src="https://dummyimage.com/130x130/333/3ff.jpg&text=pic"
                class="img-style">
          </div>
        </div>
        <div class="avatar-btn">更换头像</div>
      </div>
    </div>
    <div class="seprator"></div>
    <div class="pics-info-box">
      <div class="pics-info-banner">我的生活照</div>
      <div class="pics-container">
        <div class="pic-box" v-for="(pic, index) in picList"
             :key="index">
          <div class="pic">
            <img :src=pic.img
                class="img-style">
          </div>
        </div>
        <div class="pic-box">
          <div class="pic">
            <div class="add-icon-box">
              <span class="icon-control_point item-icon"></span>
              <div class="add-word">上传照片</div>
            </div>
          </div>
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
      picList: [
        {
          img: 'https://dummyimage.com/120x180/333/3ff.jpg&text=pic'
        }, {
          img: 'https://dummyimage.com/120x180/333/3ff.jpg&text=pic'
        }, {
          img: 'https://dummyimage.com/120x180/333/3ff.jpg&text=pic'
        }, {
          img: 'https://dummyimage.com/120x180/333/3ff.jpg&text=pic'
        }, {
          img: 'https://dummyimage.com/120x180/333/3ff.jpg&text=pic'
        }, {
          img: 'https://dummyimage.com/120x180/333/3ff.jpg&text=pic'
        }]
    }
  }
}
</script>

<style lang="less">
.pics-info-container {
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
  .pics-info-title {
    width: 150px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .item-icon {
      color: #F1356F;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .pics-info-label {
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
  .pics-info-banner {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    text-align: left;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 0 25px;
  }
  .pics-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .avatar-container {
      width: 200px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      .avatar-box {
        width: 140px;
        height: 140px;
        border: 1px solid lightgrey;
        box-sizing: border-box;
        margin-bottom: 20px;
        padding: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        .avatar {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .img-style {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
      .avatar-btn {
        width: 130px;
        height: 40px;
        background-color: #F1356F;
        box-sizing: border-box;
        border-radius: 5px;
        line-height: 40px;
        color: white;
        cursor: pointer;
      }
    }
    .pics-container {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      .pic-box {
        width: 140px;
        height: 200px;
        border: 1px solid lightgrey;
        box-sizing: border-box;
        margin: 0 2px 30px 5px;
        padding: 9px;
        display: flex;
        .pic {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .img-style {
            max-width: 100%;
            max-height: 100%;
          }
          .add-icon-box {
            width: 100%;
            height: 100%;
            background-color: #E8E8E8;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            .item-icon {
              font-size: 80px;
              color: white;
              margin: 20px 0;
            }
            .add-word {
              font-size: 16px;
            }
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
}

</style>
