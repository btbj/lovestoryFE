<template>
  <!-- <div class="index-pic" :style="`background-image: url('${bannerImg}');`"> -->
  <!-- </div> -->
  <el-carousel class="home-banner-root" :interval="5000" arrow="hover">
    <el-carousel-item v-for="(pic, index) in bannerList" :key="index">
      <img :src="pic.url" alt="" style="width: 100%;">
    </el-carousel-item>
  </el-carousel>
  <!-- <div>
    <img :src="bannerImg" alt="" style="width: 100%;">
  </div> -->
</template>

<script>
import siteService from '@/services/siteService'

export default {
  data () {
    return {
      bannerList: []
    }
  },
  methods: {
    async getSiteInfo (id) {
      try {
        let res = await siteService.info({id})
        this.bannerList = res.data.info
        console.log(res)
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    this.getSiteInfo([21, 22])
  }

}
</script>

<style lang="less" scoped>

.home-banner-root {
  width: 100%;
  height: 100%;
  // height: 380px;
  // box-sizing: border-box;
  // // background-image: url("https://dummyimage.com/1200x380/333/3ff.jpg&text=pic");
  // background-repeat: no-repeat;
  // background-position: top center;
  // background-size: cover;
}

</style>
