<template>
  <div class="personal-info-container">
    <div class="personal-info-box">
      <div class="personal-info-title">
        <span class="icon-radio_button_unchecked icon-style"></span>
        <span>我的择偶标准</span>
      </div>
      <div class="personal-info-content">
        <div class="content-item-row">
          <div class="item-column">
            <span>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄&nbsp;:&nbsp;</span>
            <span>26~32岁之间</span>
          </div>
          <div class="item-column">
            <span>身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高&nbsp;:&nbsp;</span>
            <span>158-164cm</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族&nbsp;:&nbsp;</span>
            <span>不限</span>
          </div>
          <div class="item-column">
            <span>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历&nbsp;:&nbsp;</span>
            <span>不限</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>相&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册&nbsp;:&nbsp;</span>
            <span>有照片</span>
          </div>
          <div class="item-column">
            <span>婚姻状况&nbsp;:&nbsp;</span>
            <span>不限</span>
          </div>
        </div>
        <div class="content-item-row">
          <div class="item-column">
            <span>居&nbsp;住&nbsp;地&nbsp;:&nbsp;</span>
            <span>浙江宁波</span>
          </div>
          <div class="item-column">
            <span>诚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信&nbsp;:&nbsp;</span>
            <span>不限</span>
          </div>
        </div>
      </div>
    </div>
    <div class="seprator"></div>
    <div class="personal-info-box" style="margin-top: 30px">
      <div class="personal-info-title">
        <span class="icon-radio_button_unchecked icon-style"></span>
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
        <span class="icon-radio_button_unchecked icon-style"></span>
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
        <span class="icon-radio_button_unchecked icon-style"></span>
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
    .icon-style {
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
