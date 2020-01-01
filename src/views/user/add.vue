<template>
    <div class="box">
        <p class="title">添加用户</p>
        <div class="con">
            <div class="one"> <!--添加用户/更新用户-->
              <button @click="addAuthor" class="addAuthor" style="color:skyblue;border:1px solid skyblue">添加用户</button>
              <button @click="gNew" class="newAuthor">更新用户</button>
              <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
                <el-tabs :tab-position="tabPosition" style="display:none" ref="select">
                  <el-select v-model="ruleForm.value" placeholder="请选择身份id">
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
                  <el-select v-model="ruleForm.values" placeholder="请选择">
                      <el-option v-for="(item,i) in userNPID" :key="i" :value="item.identity_text"></el-option>
                  </el-select>
                </el-tabs>
                <el-form-item>
                  <el-button type="primary" @click="submitForm()">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="two">  <!--添加身份-->
              <button class="addAuthor" style="color:skyblue;border:1px solid skyblue">添加身份</button>
              <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm demo-two">
                <el-form-item prop="author">
                  <el-input type="author" v-model.number="numberValidateForm.author" autocomplete="off" placeholder="请输入身份名称"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitFormTWO()">提交</el-button>
                  <el-button @click="resetFormTWO('numberValidateForm')">重置</el-button>
                </el-form-item>
              </el-form>

            </div> 
            <div class="three"> <!--添加api接口权限-->
              <button class="addAuthor" style="color:skyblue;border:1px solid skyblue">添加api接口权限</button>
              <AddApiQuanXi/>
            </div>
            <div class="four"> <!--添加视图接口权限-->
               <button class="addAuthor" style="color:skyblue;border:1px solid skyblue">添加视图接口权限</button>
               <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
                  <el-tabs :tab-position="tabPosition">
                    <el-select v-model="ruleForm.valuesF" placeholder="请选择身份id">
                        <el-option v-for="item in allViewsQX" :key="item.view_authority_id" 
                        :label="item.view_authority_text"
                        :value="item.view_authority_id" 
                        ></el-option>
                    </el-select>
                  </el-tabs>
                  <el-form-item>
                    <el-button type="primary" @click="submitFormF()">提交</el-button>
                    <el-button @click="resetFormF('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
            </div>
            <div class="five"> <!--给身份设置api接口权限-->
              <button class="addAuthor" style="color:skyblue;border:1px solid skyblue">给身份设置api接口权限</button>
              <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
                  <el-tabs :tab-position="tabPosition">
                    <el-select v-model="ruleForm.valuesFive" placeholder="请选择身份id">
                        <el-option v-for="item in userNPID" :key="item.identity_id" :value="item.identity_text"
                        :label="item.identity_text"></el-option>
                    </el-select>
                  </el-tabs>
                  <el-tabs :tab-position="tabPosition">
                    <el-select v-model="ruleForm.valuesFiveTwo" placeholder="请选择api接口权限">
                        <el-option v-for="item in allGuanXi" :key="item.identity_api_authority_relation_id" :value="item.api_authority_text"
                        :label="item.api_authority_text"></el-option>
                    </el-select>
                  </el-tabs>
                  <el-form-item>
                    <el-button type="primary" @click="submitFormFive()">提交</el-button>
                    <el-button @click="resetFormFive('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
            </div>
            <div class="six"> <!--给身份设置视图权限-->
              <button class="addAuthor" style="color:skyblue;border:1px solid skyblue">给身份设置视图权限</button>
              <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
                  <el-tabs :tab-position="tabPosition">
                    <el-select v-model="ruleForm.valuesSix" placeholder="请选择身份id">
                        <el-option v-for="item in userNPID" :key="item.identity_text" :label="item.identity_text" :value="item.identity_text"></el-option>
                    </el-select>
                  </el-tabs>
                  <el-tabs :tab-position="tabPosition">
                    <el-select v-model="ruleForm.valuesSixTwo" placeholder="请选择视图权限id">
                        <el-option v-for="(item,ix) in allViewsQX" :key="ix" :label="item.view_authority_text" :value="item.view_authority_text"></el-option>
                    </el-select>
                  </el-tabs>
                  <el-form-item>
                    <el-button type="primary" @click="submitFormSix()">提交</el-button>
                    <el-button @click="resetFormSix('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { addAuthor , addYongHu , authorityView , setIdentityApi , setIdentityView , userNew} from '@/api/addAuthor.js'
import {mapState,mapActions,mapMutations} from 'vuex'
import AddApiQuanXi from '@/components/addApiQuanXi/index'
export default {
  data() {
      return {
        buttons:['添加用户','更新用户'],
        input: '',
        tabPosition: 'top',
        valuesFour: '',
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
          valuesF: '',
          value: '',
          valuesSix: '',
          valuesSixTwo: '',
          valuesFive: '',
          valuesFiveTwo: '',
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
      allViewsQX: state => state.author.allViewsQX,
      allGuanXi: state => state.author.allGuanXi,
      apiALL: state => state.author.apiALL, //所有api接口权限数据
      userNPID: state => state.author.userNPID, //展示身份数据
      allAuthorViews: state => state.author.allAuthorViews, //展示身份和视图权限关系的数据
      examS: state => state.author.examS, //所有用户信息数据 
    })
  },
  methods:{
      ...mapActions({
        viesQuanXI: "author/viesQuanXI",
        authorGuanXi: "author/authorGuanXi",
        authorIDentity: "author/authorIDentity",
        authorViews: "author/authorViews",
        authorityApi: "author/authorityApi",
        authorAll: "author/authorAll",
      }),
      addAuthor(){ // one的事件
        this.$refs.select.$el.style="display:none"
        document.querySelector('.newAuthor').style="none"
      },
      gNew(){ // one的事件
        this.$refs.select.$el.style="display:block"
        document.querySelector('.newAuthor').style="color:skyblue"
        document.querySelector('.addAuthor').style="none"        
      },
     submitForm() {// one的事件 已完成(添加用户,更新用户) 
        let user_name = this.ruleForm.pass;
        let user_pwd = this.ruleForm.checkPass;
        let identity_id = this.ruleForm.values;

        //利用filter进行筛选，把相对应的数据返回去  =》 添加用户的参数(identity_text) 用户展示的参数(identity_id/下拉框选中的每一项进行从新的赋值)
        let data = this.userNPID.filter(item => item.identity_text == identity_id)
        let datas = this.examS.filter(item => item.user_name ==  this.ruleForm.value)
        
        if(this.$refs.select.$el.style="display:none"){
            //密码必须为 一个大写字母+一个小写字母+一个数字+一个特殊字符 == 长度必须大于6
           addYongHu({ user_name: user_name, user_pwd: user_pwd ,identity_id: data[0].identity_id }).then(res=>{
             console.log(res,'2222222222222222222222222')
           })
        }else {
          userNew({ user_name: user_name, 
                      user_pwd: user_pwd ,
                      identity_id: data[0].identity_id ,
                      user_id: datas[0].user_id 
                      }).then(res=>{
              console.log(res,'44444444444444444444444444444')
            })
        }
      },
      resetForm(formName) {// one的事件
        this.$refs[formName].resetFields();
        this.ruleForm.pass=''
        this.ruleForm.checkPass=''
        this.ruleForm.values=''
        this.ruleForm.value=''
      },
      submitFormTWO() { //two的事件  添加身份 已完成
        addAuthor({ identity_text:this.numberValidateForm.author })
      },
      resetFormTWO(formName) {//two的事件
        this.$refs[formName].resetFields();
      },
      submitFormF() { //four的事件
        let str = this.ruleForm.valuesF
        let data = this.allViewsQX.filter(item => item.view_authority_id == str)
        authorityView({
          view_authority_text: data[0].view_authority_text,
          view_id: data[0].view_authority_id
        }).then(res=>{ console.log(res,'dfghj')})
      },
      resetFormF(formName) {//four的事件
        this.$refs[formName].resetFields();
        this.ruleForm.valuesF=''
      },
      submitFormFive() { //five的事件 未完成(第二个参数传递有误)
        let identity_id = this.ruleForm.valuesFive 
        let data = this.userNPID.filter(item => item.identity_text ==  identity_id)  //正确

        let api_authority_id = this.ruleForm.valuesFiveTwo
        let datanew = this.apiALL.filter(item=>item.api_authority_text == api_authority_id)
        setIdentityApi({
          identity_id: data[0].identity_id,
          api_authority_id: datanew[0].api_authority_id
        }).then(res=>{ console.log(res,'给身份设定api接口权限设置成功') })
      },
      resetFormFive(formName) {//five的事件
        this.$refs[formName].resetFields();
        this.ruleForm.valuesFive=''
        this.ruleForm.valuesFiveTwo=''
      },
      submitFormSix() { //six的事件  //添加成功 
        let identity_id = this.ruleForm.valuesSix
        let data = this.userNPID.filter(item => item.identity_text ==  identity_id)

        let view_authority_id = this.ruleForm.valuesSixTwo
        let datanew = this.allViewsQX.filter(item => item.view_authority_text ==  view_authority_id)

        setIdentityView({ 
          identity_id: data[0].identity_id, 
          view_authority_id: datanew[0].view_authority_id
        }).then(res => console.log(res,'添加成功'))
      },
      resetFormSix(formName) {//six的事件
        this.$refs[formName].resetFields();
        this.ruleForm.valuesSix=''
        this.ruleForm.valuesSixTwo=''
      }
    },
  created(){
    this.viesQuanXI()
    this.authorGuanXi()
    this.authorIDentity()
    this.authorViews();
    this.authorityApi()
        this.authorAll();

  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 18px;
  padding: 10px
}
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
  font-size: 15px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
}
.demo-ruleForm{
  margin-left: 10px;
  margin-right: 10px;
  margin-top:10px
}
.el-button{
  margin-top: 10px;
}
.el-form-item:nth-child(2),.el-tabs--top{
  margin-bottom: 10px
}
.el-form-item{
  margin: 0
}
.el-form-item--medium{
  margin-top: 10px;
  margin-bottom: 10px
}
</style>