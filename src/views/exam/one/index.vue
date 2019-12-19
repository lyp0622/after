<template>
  <div class="wrap">
      <main>
          <h2>添加试题</h2>
          <div class="main">
              <!-- <p><span>*</span> 题干</p>
              <el-form>
                 <el-input class="Ipt"></el-input>
              </el-form>
                  <p><span>*</span> 题干</p>
              <el-form>
                 <el-input class="Ipt"></el-input>
              </el-form> -->
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="题干" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="题目主题" prop="region">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="考试类型" required prop="date1">
                         <el-select v-model="ruleForm.date1">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="课程类型" required prop="date2">
                         <el-select v-model="ruleForm.date2">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="题目类型" required prop="date3">
                         <el-select v-model="ruleForm.date3">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                      <el-form-item label="答案信息" prop="regio">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    </el-form-item>
                </el-form>
          </div>
      </main>
  </div>
</template>
<script>
 export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          regio: '',
          date1: '',
          date2: '',
          date3:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入题干信息', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请输入题目主题', trigger: 'change' }
          ],
          date1: [
             { required: true, message: '请选择考试类型', trigger: 'blur' }
          ],
           date2: [
             { required: true, message: '请选择课程类型', trigger: 'blur' }
          ],
           date3: [
             { required: true, message: '请选择题目类型', trigger: 'blur' }
          ],
           regio: [
            { required: true, message: '请输入答案信息', trigger: 'change' }
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
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang='scss' scoped>
    .wrap{
        width: 100%;
        height: 100%;
        background: #f0f2f5
    }
    h2{
        color: rgba(0,0,0,0.85);
        font-size: 21px;
        margin: 0px 0px 10.5px 20px;
        padding: 20px 0px;
        font-weight: 400;
    }
    main{
        // margin: 0px 0px 0px 20px;
        p{
            width: 100%;
            font-size: 14px;
            span{
                color: red;
            }
        }
    }
    // .Ipt{
      
    // }
</style>


