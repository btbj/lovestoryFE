<template>
  <div>
    <el-upload
      class="upload-avatar-btn"
      :action="uploadUrl"
      :show-file-list="false"
      :on-success="handleSuccess"
      :before-upload="beforeUpload">
      <div class="pic-box">
        <div class="pic">
          <div class="add-icon-box">
            <span class="mdi-control_point item-icon"></span>
            <div class="add-word">上传照片</div>
          </div>
        </div>
      </div>
    </el-upload>
  </div>
</template>

<script>
import fileService from '@/services/fileService'
import userService from '@/services/userService'

export default {
  data () {
    return {
      file: {
        id: '',
        url: ''
      }
    }
  },
  methods: {
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleSuccess (res) {
      // console.log(res)
      if (res.success) {
        // this.$message({
        //   message: res.message,
        //   type: 'success'
        // })
        this.file.id = res.data.id
        this.file.url = res.data.url
        // this.$emit('newFile', file)
        this.addAlbumImage()
      } else {
        this.$message.error(res.message)
      }
    },
    async addAlbumImage () {
      try {
        let res = await userService.addAlbumImage({
          token: this.$store.getters.token,
          image_id: this.file.id
        })
        this.$message({
          message: res.message,
          type: 'success'
        })
        this.$emit('changed', this.file.url)
      } catch (error) {
        userService.handleErr(error)
      }
    }
  },
  computed: {
    uploadUrl () {
      return fileService.uploadUrl()
    }
  }
}
</script>

<style lang="less">
.pic-box {
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
}
</style>
