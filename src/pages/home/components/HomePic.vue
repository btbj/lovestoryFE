<template>
  <!-- <div class="index-pic" :style="`background-image: url('${bannerImg}');`"> -->
  <!-- </div> -->
  <div>
    <img :src="bannerImg" alt="" style="width: 100%;">
  </div>
</template>

<script>
import imageService from '@/services/imageService'

export default {
  computed: {
    bannerImg () {
      return imageService.banner
    }
  }

}
</script>

<style lang="less">

.index-pic {
  width: 100%;
  // height: 380px;
  // box-sizing: border-box;
  // // background-image: url("https://dummyimage.com/1200x380/333/3ff.jpg&text=pic");
  // background-repeat: no-repeat;
  // background-position: top center;
  // background-size: cover;
}

</style>
