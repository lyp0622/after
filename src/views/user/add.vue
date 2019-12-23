<template>
    <div class="box">
        <p>添加用户</p>
        <div class="con">

            <div class="one">
              <button @click="addAuthor" class="addAuthor" style="color:skyblue;border:1px solid skyblue">添加用户</button>
              <button @click="gNew" class="newAuthor">更新用户</button>
              <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
                <el-tabs :tab-position="tabPosition" style="display:none" ref="select">
                  <el-select v-model="value" placeholder="请选择身份id">
                      <el-option v-for="item in allShenFen" :key="item" :value="item"></el-option>
                  </el-select>
                </el-tabs>
                <el-form-item prop="pass">
                  <el-input type="text" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                  <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-tabs :tab-position="tabPosition">
                  <el-select v-model="values" placeholder="请选择">
                      <el-option v-for="item in shenfen" :key="item" :value="item"></el-option>
                  </el-select>
                </el-tabs>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>

            <div class="two">
              <button class="addAuthor" style="color:skyblue;border:1px solid skyblue">添加身份</button>
              <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm demo-two">
                <el-form-item prop="author">
                  <el-input type="author" v-model.number="numberValidateForm.author" autocomplete="off" placeholder="请输入身份名称"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitFormTWO('numberValidateForm')">提交</el-button>
                  <el-button @click="resetFormTWO('numberValidateForm')">重置</el-button>
                </el-form-item>
              </el-form>

            </div>
            <div class="three">
              <button class="addAuthor" style="color:skyblue;border:1px solid skyblue">添加api接口权限</button>
              <AddApiQuanXi/>
            </div>
            <div class="four">
               <button class="addAuthor" style="color:skyblue;border:1px solid skyblue">添加视图接口权限</button>
               <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
                  <el-tabs :tab-position="tabPosition">
                    <el-select v-model="valuesF" placeholder="请选择身份id">
                        <el-option v-for="item in allViewsQX" :key="item.view_authority_text" :value="item.view_authority_text"></el-option>
                    </el-select>
                  </el-tabs>
                  <el-form-item>
                    <el-button type="primary" @click="submitFormF('ruleForm')">提交</el-button>
                    <el-button @click="resetFormF('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
            </div>
            <div class="five">
              <button class="addAuthor" style="color:skyblue;border:1px solid skyblue">给身份设置api接口权限</button>
              <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
                  <el-tabs :tab-position="tabPosition">
                    <el-select v-model="valuesFive" placeholder="请选择身份id">
                        <el-option v-for="item in shenfen" :key="item.view_authority_text" :value="item"></el-option>
                    </el-select>
                  </el-tabs>
                  <el-tabs :tab-position="tabPosition">
                    <el-select v-model="valuesFiveTwo" placeholder="请选择api接口权限">
                        <el-option v-for="item in allGuanXi" :key="item.identity_api_authority_relation_id" :value="item.api_authority_text"></el-option>
                    </el-select>
                  </el-tabs>
                  <el-form-item>
                    <el-button type="primary" @click="submitFormFive('ruleForm')">提交</el-button>
                    <el-button @click="resetFormFive('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
            </div>
            <div class="six">
              <button class="addAuthor" style="color:skyblue;border:1px solid skyblue">给身份设置视图权限</button>
              <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
                  <el-tabs :tab-position="tabPosition">
                    <el-select v-model="valuesSix" placeholder="请选择身份id">
                        <el-option v-for="item in shenfen" :key="item.view_authority_text" :value="item"></el-option>
                    </el-select>
                  </el-tabs>
                  <el-tabs :tab-position="tabPosition">
                    <el-select v-model="valuesSixTwo" placeholder="请选择视图权限id">
                        <el-option v-for="item in allViewsQX" :key="item.view_authority_text" :value="item.view_authority_text"></el-option>
                    </el-select>
                  </el-tabs>
                  <el-form-item>
                    <el-button type="primary" @click="submitFormSix('ruleForm')">提交</el-button>
                    <el-button @click="resetFormSix('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { addAuthor , addYongHu } from '@/api/addAuthor.js'
import {mapState,mapActions,mapMutations} from 'vuex'
import AddApiQuanXi from '@/components/addApiQuanXi/index'
export default {
  data() {
      return {
        buttons:['添加用户','更新用户'],
        input: '',
        tabPosition: 'top',
        value: '',
        values: '',
        valuesF: '',
        valuesFive: '',
        valuesFiveTwo: '',
        valuesSix: '',
        valuesSixTwo: '',
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        numberValidateForm: {
          author: ''
        }
      };
  },
  components:{AddApiQuanXi},
  computed:{
    ...mapState({
      allShenFen: state => state.author.allShenFen,
      shenfen: state => state.author.shenfen,
      allViewsQX: state => state.author.allViewsQX,
      allGuanXi: state => state.author.allGuanXi,
    })
  },
  methods:{
      ...mapActions({
        authorAll: 'author/authorAll',
        viesQuanXI: "author/viesQuanXI",
        authorGuanXi: "author/authorGuanXi",
      }),
      // ...mapMutations(['addAuthors']),
      addAuthor(){ // one的事件
        this.$refs.select.$el.style="display:none"
        document.querySelector('.newAuthor').style="none"
      },
      gNew(){ // one的事件
        this.$refs.select.$el.style="display:block"
        document.querySelector('.newAuthor').style="color:skyblue"
        document.querySelector('.addAuthor').style="none"        
      },
      submitForm(formName) {// one的事件  添加用户未完成
        addYongHu({
          user_name: this.ruleForm.pass,
          user_pwd: this.ruleForm.checkPass,
          identity_id: tihs.values
        })
      },
      resetForm(formName) {// one的事件
        this.$refs[formName].resetFields();
        this.value=''
        this.values=''
      },
      submitFormTWO() { //two的事件  添加身份
        addAuthor({ identity_text:this.numberValidateForm })
        // this.addAuthors(this.numberValidateForm.author)// = >>保存状态有问题？？
        this.shenfen.push(this.numberValidateForm.author)
        console.log(this.shenfen)
      },
      resetFormTWO(formName) {//two的事件
        this.$refs[formName].resetFields();
      },
      submitFormF(formName) { //four的事件
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetFormF(formName) {//four的事件
        this.$refs[formName].resetFields();
        this.valuesF=''
      },
      submitFormFive(formName) { //five的事件
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetFormFive(formName) {//five的事件
        this.$refs[formName].resetFields();
        this.valuesFive=''
        this.valuesFiveTwo=''
      },
      submitFormSix(formName) { //six的事件
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetFormSix(formName) {//six的事件
        this.$refs[formName].resetFields();
        this.valuesSix=''
        this.valuesSixTwo=''
      }
    },
  created(){
    this.authorAll()
    this.viesQuanXI()
    this.authorGuanXi()
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
    border: 1px solid #3A71A8;
}
.addAuthor,.newAuthor{
  background: #ffff;
  border: 1px solid #eeeeee;
  line-height: 30px;
  margin-left: 10px;
  margin-top: 10px;
}
.demo-ruleForm{
  margin-left: 10px;
  margin-right: 10px;
  margin-top:10px
}
</style>