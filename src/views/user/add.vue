<template>
    <div class="box">
        <p>添加用户</p>
        <div class="con">

            <div class="one">
                  <el-radio-group v-model="tabPosition">
                    <el-radio-button label="top">添加用户</el-radio-button>
                    <el-radio-button label="right" @change="author">更新用户</el-radio-button>
                  </el-radio-group>
                  <el-tabs :tab-position="tabPosition">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                    <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item" :value="item"></el-option>
                    </el-select>
                  </el-tabs>
                  <button>确定</button>
                  <button>重置</button>
            </div>

            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
            <div class="five"></div>
            <div class="six"></div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      tabPosition: 'top',
      options:['黄金糕','双皮奶','蚵仔煎'],
      value: ''
    }
  },
  methods:{
      author(){
          console.log('1')
      }
  }
}
</script>

<style lang="scss" scoped>
.box{
    margin-left: 20px;
}
.con{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.one,.two,.three,.four,.five,.six{
    width: 33%;
    height: 200px;
    border: 1px solid #3A71A8
}
</style>