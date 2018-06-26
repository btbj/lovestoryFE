<template>
  <div class="dating-record-type-root">
    <member-card :list="memberList"></member-card>
    <div class="pagination-box">
      <page-pagination></page-pagination>
    </div>
  </div>
</template>

<script>
const MemberCard = r => require.ensure([], () => r(require('../components/MemberCard')), 'myinfo')
const PagePagination = r => require.ensure([], () => r(require('@/components/PagePagination')), 'story')

export default {
  components: {
    MemberCard, PagePagination
  },
  data () {
    return {
      memberList: [
        {
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
        }
      ]
    }
  }
}
</script>

<style lang="less">
.dating-record-type-root{
  box-sizing: border-box;
  padding: 15px;
}
</style>
