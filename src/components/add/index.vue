<template>
  <div class="add">
    <!-- 新增操作 -->
    <el-form label-width="80px" ref="addForm" :model="addForm" style="width:50%">
      <el-form-item label="网站名称:">
        <el-input
          clearable
          type="text"
          placeholder="请在这里输入网站名称"
          v-model="addForm.name"
          maxlength="64"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="网站简介:">
        <el-input
          :rows="10"
          class="hei"
          type="textarea"
          placeholder="请输入内容"
          v-model="addForm.introduce"
          resize="none"
        ></el-input>
      </el-form-item>
      <el-form-item label="封面图:">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="链接:">
        <el-input type="text" v-model="addForm.link" placeholder="请输入" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="拼音全拼:">
        <el-input type="text" v-model="addForm.full" placeholder="请输入" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label=" " style="margin-top:24px">
        <el-button @click="add">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['show'],
  data () {
    return {
      imageUrl: '',
      addForm: {
        name: '',
        introduce: '',
        link: '',
        full: ''
      }
    }
  },
  methods: {
    add () {
      this.$emit('showForm', this.show)
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped lang = "scss">
.add {
  padding-left: 30px;
  .el-button {
    width: 76px;
    height: 32px;
    background: #009dff;
    border-radius: 0;
    color: #fff;
    border-color: #009dff;
    &:hover {
      background-color: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
