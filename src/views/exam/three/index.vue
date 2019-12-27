<template>
  <div class="wrap">
      <main>
          <h2>查看试题</h2>
           <div class="box">
                    <span>课程类型</span>
                      <span v-for="(item,index) in keList" :key="index" class="lei">
                          {{item.subject_text}}
                      </span>
           </div>
           <div class="content">
                  <div class="bo">
                    <div class="type"> 
                    <span>课程类型:</span>
                      <span v-for="(item,index) in keList" :key="index" @click="addList(index)" :class="{'lei':curIndex==index}" >
                          {{item.subject_text}}
                      </span>
                      </div>
                      <br>
                      <span>
                       <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
                    <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')" class="btn">查询</el-button>
                    </el-form-item>
                </el-form>
                      </span>
                </div>
           </div>
           <div class="content">
              <div v-for="(item,index) in gaiList" :key="index" class="bx" @click="tiao(item)">
                    <span>{{item.title}}</span>
                    <p>
                      <span class="one">{{item.questions_type_text}}</span>
                      <span class="two">{{item.subject_text}}</span>
                      <span class="three">{{item.exam_name}}</span>
                    </p>
                    <span class="pull">{{item.user_name}}发布</span>
                    <span class="edite" @click.stop="compile()">编辑</span>
              </div>
           </div>
      </main>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
 export default {
     computed: {
       ...mapState({
           keList: state => state.exam.keList,
       })
   },
    methods:{
      ...mapActions({
        keType:'exam/keType',
      })
    },
     created(){
       this.keType()
   },

    data() {
      return {
        ruleForm: {
          exam_id:'',
          questions_type_id:'',
          subject:''
        },
        curIndex:null,
        rules: {
          exam_id: [
             { required: true, message: '请选择考试类型', trigger: 'blur' }
          ],
           questions_type_id: [
             { required: true, message: '请选择题目类型', trigger: 'blur' }
          ]
        }
      };
    },
   computed: {
       ...mapState({
           list: state => state.exam.list,
           keList: state => state.exam.keList,
           tiList: state => state.exam.tiList,
           gaiList:state=>state.exam.gaiList,
       })
   },
    methods: {
      addList(index){
        if(index==this.curIndex){
            this.curIndex=''
        }else{
            this.curIndex=index
        }
        console.log(index)
      },
      submitForm(formName) {
        console.log('333333333',this.keList[this.curIndex])
        this.ruleForm.subject=this.keList[this.curIndex]?this.keList[this.curIndex].subject_id:''
        this.$refs[formName].validate(() => {
        this.includesType({ruleForm:this.ruleForm})
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      tiao(item){
         this.$router.push({
           path:'detail',
           query:{item}
         })
      },
      compile(){
         this.$router.push({
           path:'edit', 
           query:{item}
         })
      },
      ...mapActions({
        examType:'exam/examType',
        keType:'exam/keType',
        tiType:'exam/tiType',
        gaiType:'exam/gaiType',
        includesType:'exam/includesType'
      })
    },
      created(){
        this.examType(),
        this.keType(),
        this.tiType(),
        this.gaiType(),
        this.includesType()
   },
}
</script>

<style lang='scss' scoped>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none
    }
    .wrap{
        width: 100%;
        height: 100%;
        background: #f0f2f5;
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
    .box{
      width: 90%;
      background: white;
      margin: 0 auto;
      span{
        margin-left: 30px;
        // font-size: 16px
      }
    }
   .lei{
     font-size: 12px;
     color: #222;
        border-radius: 2%;
    }
    .bo{
        span{
        margin-left: 30px;
        margin-top: 10px
      }
    }
    .type{
        padding-top: 20px;
        line-height: 30px
    }
    .demo-ruleForm{
      display: flex;
      margin-top: 10px;
      margin-bottom: 20px
    }
   .lei{
    //  font-size: 12px;
     background: skyblue;
     color: #ffffff;
   }
   .content{
     border-radius: 3%;
     margin-top: 30px
   }
   .bx{
      padding: 0px 0px 0px 30px;
      width: 90%;
      height: 100px;
      background: white;
      margin: 0 auto;
      line-height: 30px;
      font-size: 14px;
      border-bottom:1px solid #EEEEEE
   }
   .one{
      padding: 0px 10px 0px 10px;
      background: #e6f7ff;
      border: 1px solid #91d5ff
   }
    .two{
      padding: 0px 10px 0px 10px;
      background: #f0f5ff;
      border: 1px solid #adc6ff
   }
   .three{
      padding: 0px 10px 0px 10px;
      background:   #fff7e6;
      border: 1px solid #ffd591
   }
   .pull{
     color: #5339fd;
   }
   .btn{
     width: 130px;
     height: 32px;
   }
   .edite{
     position: absolute;
     right: 9%;
     margin-top: -20px
   }
</style>