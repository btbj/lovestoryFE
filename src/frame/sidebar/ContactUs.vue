<template>
  <div class="link-item-box">
    <div class="item-title">
      <span class="icon-phone item-icon"></span>
      <span style="margin-left: 10px;">联系我们</span>
      <span style="font-size: 16px;">&nbsp;/CONTACT US</span>
    </div>
    <div class="item-list-box">
      <div class="contact-item" v-for="(contact, index) in contactList"
            :key="index">
        <span class="item-label">{{contact.label}}：</span>
        <div class="item-info">{{contact.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import siteService from '@/services/siteService'

export default {
  data () {
    return {
      contactList: []
    }
  },
  methods: {
    async getSiteInfo (id) {
      try {
        let res = await siteService.info({id})
        let array = res.data.info.map(item => {
          let {name, value, label} = item
          return {name, value, label}
        })
        // console.log(array)
        this.contactList = array
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getSiteInfo([7, 8, 9, 10, 11])
  }
}
</script>

<style lang="less">
.link-item-box {
  padding: 0 5px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  .item-title {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #D76083;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #D76083;
    font-size: 18px;
    margin-bottom: 8px;
    .item-icon {
      color: #D22F60;
      font-size: 20px;
    }
  }
  .item-list-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .contact-item {
      padding: 5px 0 5px 0;
      width: 100%;
      height: 20%;
      box-sizing: border-box;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      font-size: 14px;
      text-align: left;
      .item-label {
        width: 45px;
        box-sizing: border-box;
        text-align: right;
      }
      .item-info{
        flex: 1;
      }
    }
  }
}

</style>
