<template>
  <div>
    <el-upload
      class="upload-avatar-btn"
      :action="uploadUrl"
      :show-file-list="false"
      :on-success="handleSuccess"
      :before-upload="beforeUpload">
      <div class="avatar-btn">更换头像</div>
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
        this.setAvatar()
      } else {
        this.$message.error(res.message)
      }
    },
    async setAvatar () {
      try {
        let res = await userService.setAvatar({
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
.avatar-btn {
  width: 130px;
  background-color: #F1356F;
  box-sizing: border-box;
  border-radius: 5px;
  height: 40px;
  line-height: 40px;
  color: white;
}
</style>
