<template>
  <div class="wrap">
      <main>
          <h2>添加试题</h2>
          <div class="main">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="题干" prop="questions_stem">
                        <el-input v-model="ruleForm.questions_stem"></el-input>
                    </el-form-item>
                    <el-form-item label="题目主题" prop="title">
                        <el-input type="textarea" v-model="ruleForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="考试类型" required prop="exam_id">
                        <el-select v-model="ruleForm.exam_id">
                            <el-option 
                              v-for="(item,index) in list"
                              :key="index"
                              :label="item.exam_name" 
                              :value="item.exam_id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="课程类型" required prop="subject_id">
                         <el-select v-model="ruleForm.subject_id">
                            <el-option 
                              v-for="(item,index) in keList"
                              :key="index"
                              :label="item.subject_text" 
                              :value="item.subject_id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="题目类型" required prop="questions_type_id">
                         <el-select v-model="ruleForm.questions_type_id">
                            <el-option 
                              v-for="(item,index) in tiList"
                              :key="index"
                              :label="item.questions_type_text" 
                              :value="item.questions_type_id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                      <el-form-item label="答案信息" prop="questions_answer">
                        <el-input type="textarea" v-model="ruleForm.questions_answer"></el-input>
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
import {mapActions, mapState} from 'vuex'
import {addType} from '@/api/exam'
 export default {
   data() {
      return {
        ruleForm: {
          questions_stem:'',
          title:'',
          questions_answer:'',
          exam_id:'',
          subject_id:'',
          user_id: "ypay2t-7uxsd",
          questions_type_id:''
        },
        rules: {
          questions_stem: [
            { required: true, message: '请输入题干信息', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          title: [
            { required: true, message: '请输入题目主题', trigger: 'blur' }
          ],
          exam_id: [
             { required: true, message: '请选择考试类型', trigger: 'blur' }
          ],
           subject_id: [
             { required: true, message: '请选择课程类型', trigger: 'blur' }
          ],
           questions_type_id: [
             { required: true, message: '请选择题目类型', trigger: 'blur' }
          ],
           questions_answer: [
            { required: true, message: '请输入答案信息', trigger: 'blur' }
          ]
        }
      };
    },
   computed: {
       ...mapState({
           list: state => state.exam.list,
           keList: state => state.exam.keList,
           tiList: state => state.exam.tiList
       })
   },
    methods: {
      submitForm(formName) {
        console.log(formName,'11111')
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
             addType(this.ruleForm)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // },
       ...mapActions({
        examType:'exam/examType',
        keType:'exam/keType',
        tiType:'exam/tiType'
      })
    },
     created(){
       this.examType(),
       this.keType(),
       this.tiType()
   },
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
</style>