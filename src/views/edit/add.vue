<template>
    <div class="app-box">
        <p class="title">添加试题</p>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="题干" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入题目标题，不超过20个子"></el-input>
            </el-form-item>

            <el-form-item label="题目主题" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>

            <el-form-item label="考试类型" prop="date1">
                <el-select v-model="ruleForm.date1" placeholder="请选择考试类型">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="课题类型" prop="date2">
                <el-select v-model="ruleForm.date2" placeholder="请选择课题类型">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="题目类型" prop="date3">
                <el-select v-model="ruleForm.date3" placeholder="请选择题目类型">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
           
            <el-form-item label="答案信息" prop="desc1">
                <el-input type="textarea" v-model="ruleForm.desc1"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          date1: '',
          date2: '',
          date3: '',
          delivery: false,
          type: [],
          desc: '',
          desc1: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入题干', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          date1: [
            { required: true, message: '请选择考试类型', trigger: 'change' }
          ],
          date2: [
            { required: true, message: '请选择课题类型', trigger: 'change' }
          ],
          date3: [
            { required: true, message: '请选择题目类型', trigger: 'change' }
          ],
          type: [
            { required: true, message: '请至少选择一个活动性质', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请填写题目主题', trigger: 'blur' }
          ],
          desc1: [
            { required: true, message: '请填写答案信息', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.app-main .app-box{
    padding-right: 15px;
    height: 100%;
    // background: #aaaaaa
}
.title{
    font-size: 20px;
    margin-left: 20px;
}
</style>
