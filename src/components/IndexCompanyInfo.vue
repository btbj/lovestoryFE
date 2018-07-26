<template>
 <div class="home-company-info">
   <div class="company-info-box">
     <div class="contact-info-box">
       <div class="info-label">联系方式</div>
       <div class="contact-info">
         <div class="contact-item" v-for="(item, index) in contactList" :key="index">
           <span class="contact-label">{{item.label}}：</span>
           <span class="contact-content">{{item.value}}</span></div>
       </div>
     </div>
     <div class="about-us-box">
       <div class="info-label">关于我们</div>
       <div class="about-us">
         <div class="about-item" @click="$router.push('/aboutus/company')">公司介绍</div>
         <div class="about-item" @click="$router.push('/aboutus/env')">公司环境</div>
         <div class="about-item" @click="$router.push('/aboutus/contact')">联系方式</div>
       </div>
     </div>
     <div class="attention-us-box">
       <div class="info-label">关注我们</div>
       <div class="attention-us">
         <div class="attention-item" v-for="(item, index) in qrCodeList" :key="index">
           <div class="item-qrcode">
             <img :src="item.value" class="img-style">
           </div>
           <div class="item-label">{{item.label}}</div>
         </div>
         <!-- <div class="attention-item">
           <div class="item-qrcode">
             <img src="https://dummyimage.com/100x100/333/3ff.jpg&text=pic"
                  class="img-style">
           </div>
           <div class="item-label">官方微博</div>
         </div>
         <div class="attention-item">
           <div class="item-qrcode">
             <img src="https://dummyimage.com/100x100/333/3ff.jpg&text=pic"
                  class="img-style">
           </div>
           <div class="item-label">官网手机版</div>
         </div> -->
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import siteService from '@/services/siteService'

export default {
  data () {
    return {
      contactList: [],
      qrCodeList: []
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
    },
    async getQRCode () {
      try {
        // let res = await siteService.info({id: [16, 17, 18]})
        let res = await siteService.info({id: [16, 17]})
        let array = res.data.info.map(item => {
          let {name, url: value, label} = item
          return {name, value, label}
        })
        // console.log(array)
        this.qrCodeList = array
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getSiteInfo([7, 8, 9, 11])
    this.getQRCode()
  }
}
</script>

<style lang="less">
.home-company-info {
  width: 100%;
  height: 220px;
  border-top: 2px solid #F3487E;
  box-sizing: border-box;
  padding: 10px 0 0 5px;
  background-color: #F5F5F5;
  display: inline-block;
  .company-info-box {
    padding: 20px 0 0 0;
    margin: auto;
    width: 90%;
    max-width: 1200px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    // justify-content: space-between;
    .info-label {
      text-align: left;
      border-left: 2px solid #F3487E;
      box-sizing: border-box;
      margin-bottom: 20px;
      padding: 0 0 0 5px;
    }
    .contact-info-box {
      box-sizing: border-box;
      width: 370px;
      // height: 100%;
      display: inline-block;
      // display: flex;
      // flex-direction: column;
      .contact-info {
        padding: 0 0 0 5px;
        width: 100%;
        // height: 100%;
        box-sizing: border-box;
        // display: flex;
        // flex-direction: column;
        // align-items: flex-start;
        .contact-item {
          font-size: 14px;
          margin-bottom: 5px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          .contact-label {
            width: 45px;
            text-align: right;
          }
          .contact-content {
            width: 280px;
            flex: 1;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
          }
        }
      }
    }
    .about-us-box {
      flex: 1;
      box-sizing: border-box;
      width: 100px;
      // height: 100%;
      display: inline-block;
      // display: flex;
      // flex-direction: column;
      .about-us {
        padding: 0 0 0 5px;
        width: 100%;
        // height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .about-item {
          font-size: 14px;
          margin-bottom: 10px;
          cursor: pointer;
        }
        .about-item:hover{
          color: #F3487E;
        }
      }
    }
    .attention-us-box {
      box-sizing: border-box;
      width: 250px;
      // height: 100%;
      display: inline-block;
      // display: flex;
      // flex-direction: column;
      .attention-us {
        padding: 0 0 0 5px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .attention-item {
          box-sizing: border-box;
          width: 100px;
          height: 100%;
          display: flex;
          flex-direction: column;
          .item-qrcode {
            width: 100px;
            height: 100px;
            box-sizing: border-box;
            margin-bottom: 5px;
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
          .item-label {
            width: 100%;
            height: 20px;
            box-sizing: border-box;
            font-size: 14px;
          }
        }
      }
    }
  }
}

</style>
