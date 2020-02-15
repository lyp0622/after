<template>
  <div class="components-container">
    <aside>This is based on
      <a class="link-type" href="//github.com/dai-siki/vue-image-crop-upload"> vue-image-crop-upload</a>.
      {{ $t('components.imageUploadTips') }}
    </aside>

    <pan-thumb :image="image" />

    <el-button type="primary" icon="el-icon-upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
      Change Avatar
    </el-button>

    <image-cropper  
      v-show="imagecropperShow"
      :key="imagecropperKey"
      :width="300"
      :height="300"
      url="http://123.206.55.50:11000/upload"
      lang-type="en"
      @close="close"
      @crop-upload-success="cropSuccess"
    /><!--上传头像F  url需要更改为线上的API地址-->

    <!-- url="//service.jasonandjay.com/upload"     url="http://123.206.55.50:11000/upload" --> <!--打包时需要书写的-->
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import { mapActions, mapState, mapMutations } from "vuex" //上传头像G
import axios from "axios"  //上传头像H
// import { userNew } from '@/api/addAuthor.js' //需要传递头像的接口

export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper, PanThumb },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    }
  },
  methods: {
    ...mapMutations({
       SET_AVATAR: "user/SET_AVATAR"   //上传头像I
    }),
    cropSuccess(resData) {
      console.log(resData)
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1 //上传头像J
      this.image = resData[0].path  //上传头像K
      this.SET_AVATAR(resData[0].path) //上传头像L

      // userNew({avatar:  this.image})

      // localStorage.setItem('key',this.image) 
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>

<style scoped>