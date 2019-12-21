<template>
<<<<<<< HEAD
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
                        <el-button type="primary" @click="submitForm(ruleForm)">提交</el-button>
                    </el-form-item>
                </el-form>
          </div>
      </main>
=======
  <div class="wrap-one">
    <div class="box">
      <div class="top">
        <h2>添加考试</h2>
      </div>
      <div class="center">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="考试类型" prop="region">
            <el-select v-model="ruleForm.region">
              <el-option label="周考一" value="shanghai"></el-option>
              <el-option label="周考二" value="beijing"></el-option>
              <el-option label="周考三" value="xiamen"></el-option>
              <el-option label="月考" value="aozhou"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择课程" prop="region">
            <el-select v-model="ruleForm.region">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设置题量" prop="region">
            <el-input-number v-model="num" :min="4" :max="20"></el-input-number>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">创建试卷</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
>>>>>>> lmy
  </div>
</template>
<script>
<<<<<<< HEAD
import {mapActions, mapState} from 'vuex'
 export default {
       data() {
      return {
        ruleForm: {
          questions_stem:'',
          title:'',
          questions_answer:'',
          exam_id:'',
          subject_id:'',
          user_id:'',
          questions_type_id:'',
          delivery: false,
          type: [],
          resource:'',
          desc:''
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
        console.log(formName)
        let {questions_type_id}=this.ruleForm
        console.log(questions_type_id)
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
      },
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
    // .Ipt{
      
    // }
=======
export default {
  data() {
    return {
      num: 4,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
              alert("submit!");
            } else {
              console.log("error submit!!");
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.wrap-one {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: auto;
  background: #eee;
}
.top {
  width: 100%;
  height: 70px;
  padding-left: 20px;
  line-height: 70px;
  h2 {
    font-weight: normal;
  }
}
.center {
  padding-top: 10px;
  width: 97%;
  height: 430px;
  background: #fff;
  margin: 0 20px;
  border-radius: 7px;
}
>>>>>>> lmy
</style>


