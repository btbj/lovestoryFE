<template>
  <div class="member-card-container">
    <div class="pic-box-container">
      <div class="pic-box" v-for="(card, index) in memberCardsList"
           :key="index">
        <div class="pic">
          <img :src=card.img
              class="img-style">
        </div>
        <div class="word">
          <div class="first-row">{{card.name}}</div>
          <div>{{card.age}}, {{card.address}}</div>
        </div>
      </div>
    </div>
    <div class="pagination-box">
      <page-pagination></page-pagination>
    </div>
  </div>
</template>

<script>
const PagePagination = r => require.ensure([], () => r(require('@/components/PagePagination')), 'story')

export default {
  components: {
    PagePagination
  },
  data () {
    return {
      memberCardsList: [{
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
      }]
    }
  }
}
</script>

<style lang="less">
.member-card-container {
  width: 100%;
  box-sizing: border-box;
  .pic-box-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    box-sizing: border-box;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 20px;
    .pic-box {
      width: 110px;
      height: 200px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin: 10px 0 20px 0;
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

  .pagination-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
}
</style>
