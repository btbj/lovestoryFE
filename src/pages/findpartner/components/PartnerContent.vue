<template>
  <div class="partner-content-box">
    <div class="content-link-box">
      <new-news></new-news>
      <contact-us></contact-us>
    </div>
    <div class="content-info-box">
      <div class="inner-item-box">
        <content-nav>
          <span slot="rightTitle">寻找对象</span>
          <span slot="leftFirstTitle">首页></span>
          <span slot="leftSecondTitle">寻找对象></span>
        </content-nav>
        <div class="inner-item-content">
          <search-box v-model="searchData.keyword" @search="getList"></search-box>
          <tag-box @change="handelTagBoxChange"></tag-box>
          <sort-box v-model="searchData.sort" @sortChanged="getList"></sort-box>
          <member-info :list="userList"></member-info>
          <div class="pagination-box">
            <page-pagination :paginationData="paginationData" @change="getList"></page-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
const NewNews = r => require.ensure([], () => r(require('@/frame/sidebar/NewNews')), 'partner')
const ContactUs = r => require.ensure([], () => r(require('@/frame/sidebar/ContactUs')), 'partner')
const ContentNav = r => require.ensure([], () => r(require('@/frame/contentnav/ContentNav')), 'partner')
const SearchBox = r => require.ensure([], () => r(require('./modules/SearchBox')), 'partner')
const TagBox = r => require.ensure([], () => r(require('./modules/TagBox')), 'partner')
const SortBox = r => require.ensure([], () => r(require('./modules/SortBox')), 'partner')
const MemberInfo = r => require.ensure([], () => r(require('./modules/MemberInfo')), 'partner')
const PagePagination = r => require.ensure([], () => r(require('@/components/PagePagination')), 'partner')

export default {
  components: {
    NewNews,
    ContactUs,
    ContentNav,
    SearchBox,
    TagBox,
    SortBox,
    MemberInfo,
    PagePagination },
  data () {
    return {
      searchData: {
        keyword: '',
        attrs: [{name: 'sex', value: '女', type: 1}],
        sort: ''
      },
      paginationData: {
        current: 1,
        total: 1,
        size: 15
      },
      userList: [
        // {
        //   head_image_url: 'https://dummyimage.com/100x155/333/3ff.jpg&text=pic',
        //   name: '雅萱',
        //   age: '34岁',
        //   height: '176',
        //   education: '海龟硕士',
        //   income: '150000'
        // }
      ]
    }
  },
  methods: {
    async getList (page = 1) {
      try {
        let res = await userService.search({
          token: this.$store.getters.token,
          keyword: this.searchData.keyword,
          attrs: this.searchData.attrs,
          sort: this.searchData.sort,
          page,
          per_page: this.paginationData.size
        })
        this.userList = res.data.users
        console.log(res)
      } catch (error) {
        userService.handleErr(error)
      }
    },
    handelTagBoxChange (attrs) {
      // console.log(attrs)
      this.searchData.attrs = attrs
      this.getList()
    }
  },
  mounted: async function () {
    await this.getList()
  }
}
</script>

<style lang="less">
.partner-content-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  .content-link-box {
    width: 280px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 0;
  }
  .content-info-box {
    // width: 700px;
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    padding: 5px;
    margin-left: 20px;
    .inner-item-box {
      padding: 5px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .inner-item-content {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 5px;

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

</style>
