<template>
  <div class="personal-info-container">
    <div class="personal-info-box">
      <div class="personal-info-title">
        <span class="icon-radio_button_unchecked icon"></span>
        <span>我的择偶标准</span>
      </div>
      <div class="personal-info-content">
        <div class="content-item-row">
          <div class="item-column">
            <span class="label">年龄</span>：
            <span>26~32岁之间</span>
          </div>
          <div class="item-column">
            <span class="label">身高</span>：
            <span>158-164cm</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span class="label">民族</span>：
            <span>不限</span>
          </div>
          <div class="item-column">
            <span class="label">学历</span>：
            <span>不限</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span class="label">相册</span>：
            <span>有照片</span>
          </div>
          <div class="item-column">
            <span class="label">婚姻状况</span>：
            <span>不限</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span class="label">居住地</span>：
            <span>浙江宁波</span>
          </div>
          <div class="item-column">
            <span class="label">诚信</span>：
            <span>不限</span>
          </div>
        </div>
      </div>
    </div>
    <div class="seprator"></div>
    <div class="personal-info-box" style="margin-top: 30px">
      <div class="personal-info-title">
        <span class="icon-radio_button_unchecked icon"></span>
        <span>今日推荐</span>
      </div>
      <div class="personal-info-pic-content">
        <div class="pic-box" v-for="(recommend, index) in recommendList"
             :key="index">
          <div class="pic">
            <img :src=recommend.img
                 class="img-style">
          </div>
          <div class="word">
            <div class="first-row">{{recommend.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{recommend.age}}岁</div>
            <div>{{recommend.intro}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="personal-info-box">
      <div class="personal-info-title">
        <span class="icon-radio_button_unchecked icon"></span>
        <span>谁看过我</span>
      </div>
      <div class="personal-info-pic-content">
        <div class="pic-box" v-for="(vistor, index) in vistorList"
             :key="index">
          <div class="pic">
            <img :src=vistor.img
                 class="img-style">
          </div>
          <div class="word">
            <div class="first-row">{{vistor.name}}</div>
            <div>{{vistor.age}}岁, {{vistor.address}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="personal-info-box" style="margin: 0">
      <div class="personal-info-title">
        <span class="icon-radio_button_unchecked icon"></span>
        <span>谁关注我</span>
      </div>
      <div class="personal-info-pic-content">
        <div class="pic-box" v-for="(follower, index) in followerList"
             :key="index">
          <div class="pic">
            <img :src=follower.img
                 class="img-style">
          </div>
          <div class="word">
            <div class="first-row">{{follower.name}}</div>
            <div>{{follower.age}}岁, {{follower.address}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vistorList:
        [{
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          address: '杭州湾新区'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          address: '杭州湾新区'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          address: '杭州湾新区'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          address: '杭州湾新区'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          address: '杭州湾新区'
        }],
      followerList:
        [{
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          address: '杭州湾新区'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          address: '杭州湾新区'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          address: '杭州湾新区'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          address: '杭州湾新区'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          address: '杭州湾新区'
        }],
      recommendList:
        [{
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          intro: '我是一个靠谱,乐观,简单的人'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          intro: '我是一个靠谱,乐观,简单的人'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          intro: '我是一个靠谱,乐观,简单的人'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          intro: '我是一个靠谱,乐观,简单的人'
        }, {
          img: 'https://dummyimage.com/110x140/333/3ff.jpg&text=pic',
          name: '雅萱',
          age: '34',
          intro: '我是一个靠谱,乐观,简单的人'
        }]
    }
  }

}
</script>

<style lang="less">
.personal-info-container {
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
  }
  .personal-info-title {
    width: 150px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    .icon {
      color: #F1356F;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .personal-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .personal-info-content {
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
          .label{
            width: 70px;
            text-align-last: justify;
          }
        }
      }
    }
    .personal-info-pic-content {
      width: 100%;
      height: 200px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .pic-box {
        width: 110px;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .pic {
          width: 100%;
          height: 140px;
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
        .word {
          width: 100%;
          height: 60px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          .first-row {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}

</style>
