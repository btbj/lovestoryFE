<template>
  <div class="user-album-list-root">
    <div class="page-btn">
      <span class="mdi-keyboard_arrow_left icon"
        v-if="displayIndex > 0"
        @click="displayIndex--"></span>
    </div>
    <div class="album-list">
      <div class="album-pic-wrapper" v-for="(pic, index) in DisplayedList" :key="index">
        <div class="pic-box" @click="showPic(pic)">
          <img :src="pic.url" class="img-style">
        </div>
      </div>
    </div>
    <div class="page-btn">
      <span class="mdi-keyboard_arrow_right icon"
        v-if="selfPicList.length > displayIndex + displayCount"
        @click="displayIndex++"></span>
    </div>

    <el-dialog
      title="查看图片"
      :visible.sync="dialog.visible"
      width="500px">
      <div class="album-dialog-image">
        <img :src="dialog.imgUrl" alt="pic">
      </div>
    </el-dialog>
  </div>
</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      displayIndex: 0,
      displayCount: 4,
      dialog: {
        visible: false,
        imgUrl: ''
      },
      selfPicList: [ ]
    }
  },
  methods: {
    async getList () {
      try {
        let res = await userService.albumImages({
          token: this.$store.getters.token,
          user_id: this.$route.params.id
        })
        console.log(res)
        this.selfPicList = res.data.images
      } catch (error) {
        userService.handleErr(error)
      }
    },
    showPic (pic) {
      console.log(pic)
      this.dialog.imgUrl = pic.url
      this.dialog.visible = true
    }
  },
  computed: {
    DisplayedList () {
      let array = []
      for (let i = this.displayIndex; i < this.displayIndex + this.displayCount; i++) {
        if (this.selfPicList[i]) {
          array.push(this.selfPicList[i])
        }
      }
      return array
    }
  },
  mounted: async function () {
    this.getList()
  }
}
</script>

<style lang="less">
.user-album-list-root {
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  .page-btn {
    width: 20px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .icon {
      font-size: 30px;
      color: grey;
    }
  }
  .album-list{
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .album-pic-wrapper{
      flex-basis: 25%;
      height: 100%;
      .pic-box {
        width: 86px;
        height: 100%;
        border: 1px solid lightgrey;
        box-sizing: border-box;
        padding: 5px;overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .img-style {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
  .album-dialog-image{
    img{
      max-width: 100%;
    }
  }
}
</style>
