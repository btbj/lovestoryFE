<template>
  <div class="about-pic" :style="`background-image: url('${bannerImg}');`">
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
