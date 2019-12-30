<template>
  <div class="wrap">
      <main>
          <h2>试题分类</h2>
          <div class="main">
               <el-button type="text" @click="dialogFormVisible = true">+添加类型</el-button>
              <el-dialog title="创建新类型" :visible.sync="dialogFormVisible">
                <el-form  :model="ruleForm" ref="ruleForm">
                  <el-form-item label="类型ID" :label-width="formLabelWidth" >
                    <el-input v-model="ruleForm.sort" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="类型名称" :label-width="formLabelWidth">
                    <el-input v-model="ruleForm.text" auto-complete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary"  @click="submitForm('ruleForm')">确 定</el-button>
                </div>
              </el-dialog>
          </div> 
    <el-table
        style="width: 100%"
        max-height="auto"
        :data="getList"
        >
        <el-table-column
        fixed
        prop="questions_type_id"
        label="类型ID"
      >
      </el-table-column>
      <el-table-column
        prop="questions_type_text"
        label="类型名称"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template >
          <el-button
            @click="deleteRow()">
            移除
          </el-button>
      </template>
    </el-table-column>
  </el-table>
  </main>
  </div>
  
</template>
<script>
import {mapActions, mapState} from 'vuex'
import {stType,remType} from '@/api/exam'
  export default {
    data() {
      return {
        ruleForm: {
            text:'',
            sort:'',
            id:''  
        },
        dialogTableVisible: false,
        dialogFormVisible: false,
       formLabelWidth: '120px'
      }
   },
       computed:{
         ...mapState({
            getList:state=>state.exam.getList
         })
       },
   methods: {
        deleteRow() {
          console.log('lyp')
        },
          submitForm(formName) {
          console.log(formName)
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
               stType(this.ruleForm)
            } else {
              console.log('error submit!!');
              return false;
            }
          })
        },
      ...mapActions({
             getType:'exam/getType'
      })
     },
    created(){
       this.getType()
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
       margin: 0px 0px 0px 0px;
    }
    .main{
      width: 95%;
      height: 95%;
      background: white;
      margin-left: 20px
    }
    .But{
      width: 100px;
      height: 30px;
      margin-left: 20px
    }
 

</style>


