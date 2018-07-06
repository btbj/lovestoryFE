<template>
  <div class="dating-record-type-root">
    <member-card :list="memberList"></member-card>
    <div class="pagination-box">
      <page-pagination :paginationData="paginationData" @change="getList"></page-pagination>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
const MemberCard = r => require.ensure([], () => r(require('../components/MemberCard')), 'myinfo')
const PagePagination = r => require.ensure([], () => r(require('@/components/PagePagination')), 'story')

export default {
  components: {
    MemberCard, PagePagination
  },
  data () {
    return {
      paginationData: {
        current: 1,
        total: 1,
        size: 15
      },
      memberList: [ ]
    }
  },
  methods: {
    async getList (page = 1) {
      try {
        let res = await userService.seensUsers({
          token: this.$store.getters.token,
          page,
          per_page: this.paginationData.size
        })
        console.log('success', res)
        this.memberList = res.data.users
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted: async function () {
    this.getList()
  }
}
</script>

<style lang="less">
.dating-record-type-root{
  box-sizing: border-box;
  padding: 15px;
}
</style>
