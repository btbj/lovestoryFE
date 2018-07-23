<template>
  <div class="pic-wall-root">
    <div class="pics-info-banner">我的生活照</div>
    <div class="pics-container">
      <div class="pic-wrapper" v-for="(pic, index) in picList"
          :key="index">
        <div class="pic-box">
          <div class="pic">
            <img :src="pic.url" class="img-style">
          </div>
          <div class="control-pannel">
            <div class="control-item" @click="ShowPic(pic)">查看</div>
            <div class="control-item" @click="WarningDeletePic(pic.id)">删除</div>
          </div>
        </div>
      </div>
      <div class="pic-wrapper">
        <upload-pic-btn v-if="picList.length < 8" @changed="getList" />
      </div>

    </div>
    <el-dialog
      title="生活照"
      :visible.sync="picDialog.visible"
      width="600px">
      <div class="image-preview">
        <img style="max-width: 100%; max-height: 400px;" :src="picDialog.imageUrl" alt="image">
      </div>
    </el-dialog>
  </div>
</template>

<script>
import UploadPicBtn from './UploadPicBtn'
import userService from '@/services/userService'

export default {
  components: { UploadPicBtn },
  data () {
    return {
      picDialog: {
        visible: false,
        imageUrl: ''
      },
      picList: []
    }
  },
  methods: {
    ShowPic (pic) {
      this.picDialog.imageUrl = pic.url
      this.picDialog.visible = true
    },
    async getList () {
      try {
        let res = await userService.albumImages({
          token: this.$store.getters.token
        })
        console.log(res)
        this.picList = res.data.images
      } catch (error) {
        userService.handleErr(error)
      }
    },
    async WarningDeletePic (id) {
      this.$confirm('照片删除后不可恢复, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.DeletePic(id)
      }).catch((cancel) => {
        console.log(cancel)
      })
    },
    async DeletePic (id) {
      try {
        let res = await userService.deleteAlbumImage({
          token: this.$store.getters.token,
          image_id: id
        })
        this.$message({
          message: res.message,
          type: 'success'
        })
        this.getList()
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  mounted: async function () {
    await this.getList()
  }
}
</script>

<style lang="less">
.pic-wall-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .pics-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    .pic-wrapper{
      flex-basis: 25%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .pic-box {
        position: relative;
        width: 140px;
        height: 200px;
        border: 1px solid lightgrey;
        box-sizing: border-box;
        margin: 0 2px 30px 5px;
        padding: 9px;
        display: flex;
        .pic {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
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
          .add-icon-box {
            width: 100%;
            height: 100%;
            background-color: #E8E8E8;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            .item-icon {
              font-size: 80px;
              color: white;
              margin: 20px 0;
            }
            .add-word {
              font-size: 16px;
            }
          }
        }
        .control-pannel{
          display: none;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          position: absolute;
          height: 30px;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(0,0,0,.5);
          color: #ddd;
          font-size: 14px;
          .control-item:hover{
            color: white;
            cursor: pointer;
          }
        }
        &.pic-box:hover{
          .control-pannel{
            display: flex !important;
          }
        }
      }
    }

  }
}

</style>
