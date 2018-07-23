<template>
  <div class="about-pic" :style="`background-image: url('${bannerImg}');`">
  </div>
</template>

<script>
// import imageService from '@/services/imageService'
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
        this.bannerList = res.data.info.images
        console.log('banner', res)
      } catch (error) {
        siteService.handleErr(error)
      }
    }
  },
  computed: {
    bannerImg () {
      if (this.bannerList.length) {
        let randomIndex = Math.round(Math.random() * this.bannerList.length)
        // console.log('asdfasdfasf', this.bannerList.length, randomIndex)
        return this.bannerList[randomIndex].url
      }
    }
  },
  mounted: async function () {
    this.getSiteInfo(26)
  }
}
</script>

<style lang="less">

.about-pic {
  width: 100%;
  height: 280px;
  box-sizing: border-box;
  // background-image: url("https://dummyimage.com/1200x220/333/3ff.jpg&text=pic");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

</style>
