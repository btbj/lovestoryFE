<template>
 <div class="home-new-member">
   <div class="member-label">
     最新会员
   </div>
   <div class="member-info">
     <div class="info-item" v-for="(member, index) in newMemberList"
          :key="index">
       <span class="icon-keyboard_arrow_right item-icon"></span>
       <div class="item-date">{{member.date}}</div>
       <div class="item-content">{{member.content}}</div>
     </div>
   </div>
 </div>

</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      newMemberList: [
        {
          date: '2018-05-22',
          content: '恭喜135****5478某某某某某先生成为了我们尊贵的会员!'
        }
      ]
    }
  },
  methods: {
    async getList () {
      try {
        let res = await userService.newMembers({
          num: 10
        })
        this.newMemberList = res.data.users.map(item => {
          let date = item.created_date.split(' ')[0]
          let title = item.sex === '男' ? '先生' : '女士'
          let content = `恭喜${item.nickname}${title} ${item.phone}成为了我们尊贵的会员!`
          return { date, content }
        })
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getList()
  }

}
</script>

<style lang="less">
.home-new-member {
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px;
  .member-label {
    padding: 5px 0;
    border-bottom: 1px solid #FF70A2;
    font-size: 18px;
    font-weight: bold;
    box-sizing: border-box;
    height: 36px;
  }
  .member-info {
    box-sizing: border-box;
    padding: 25px 0 5px 0;
    width: 100%;
    height: 386px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-top: 1px solid lightgrey;
    .info-item {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 24px;
      align-items: center;
      .item-icon {
        font-size: 24px;
        color: #FF70A2;
      }
      .item-date {
        font-size: 14px;
        color: grey;
        margin-right: 30px;
      }
      .item-content {
        flex: 1;
        box-sizing: border-box;
        width: 325px;
        text-align: left;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

</style>
