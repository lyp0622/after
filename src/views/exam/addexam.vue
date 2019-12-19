<template>
  <div class="addexamwrap">
    <h2>添加试题</h2>
    <div class="content-box">
      <h3>题目信息</h3>
      <p>题干</p>
      <el-input v-model="input" class="add-exam-ipt" placeholder="请输入题目标题，不超过20个字" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
* {
  list-style: none;
  box-sizing: border-box;
}
.addexamwrap {
  padding: 0px 35px 14px;
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
  min-height: 0;
  h2 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  .content-box {
    background: #fff;
    background: rgb(255, 255, 255);
    padding: 24px;
    margin: 0px 0px 20px;
    border-radius: 10px;
    h3 {
      margin-top: 0;
      margin-bottom: 0.5em;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
    }
    .add-exam-ipt {
      padding: 6px 11px;
      font-size: 16px;
      height: 40px
    }
    .el-input__inner{
      height: 40px;
    }
  }
}
</style>

