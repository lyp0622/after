<template>
  <div class="addtest-box">
    <h2>添加考试</h2>
    <div class="test-cont-box">
      <div class="addTestbox">
        <div class="test-name">
          <label for="title" title="试卷名称" class="xrequired">
            <span>试卷称</span>
          </label>
          <div>
            <el-input v-model="testNamevalue" placeholder="试卷名称" />
          </div>
        </div>
        <!-- 选择考试的类型 -->
        <div class="test-type">
          <label for="title" title="选择考试的类型" class="xrequired">
            <span>选择考试的类型</span>
          </label>
          <div>
            <el-select v-model="testype" placeholder="请选择">
              <el-option
                v-for="(item,index) in testType"
                :key="index"
                :label="item.exam_name"
                :value="item.exam_name"
              />
            </el-select>
          </div>
        </div>

        <!-- 选择课程 -->
        <div>
          <label for="title" title="选择课程" class="xrequired">
            <span>选择课程</span>
          </label>
          <div>
            <el-select v-model="addclass" placeholder="请选择课程">
              <el-option
                v-for="(item,index) in classList"
                :key="index"
                :label="item.subject_text"
                :value="item.subject_text"
              />
            </el-select>
          </div>
        </div>
        <!-- 设置题量 -->
        <div>
          <label for="title" title="设置题量" class="xrequired">
            <span>设置题量</span>
          </label>
          <div>
            <el-input-number
              v-model="num"
              class="quesnum"
              controls-position="right"
              :min="3"
              :max="10"
            />
          </div>
        </div>
        <!--考试时间  -->
        <div>
          <div class="block">
            <p>考试时间</p>
            <el-date-picker
              v-model="timing"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['00:00:00', '23:59:59']"
            />
          </div>
        </div>
        <!-- 提交按钮 -->
        <div>
          <el-button type="primary" @click="createPaper">创建试卷</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addtest } from '@/api/addtestpaper'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      addclass: '',
      testype: '',
      num: '',
      timing: '',
      testNamevalue: ''
    }
  },
  computed: {
    ...mapState({
      testType: state => state.testcont.testType,
      classList: state => state.testcont.classList
    })
  },
  methods: {
    ...mapActions({
      getTestType: 'testcont/getTestType',
      getClassList: 'testcont/getClassList',
      addtest: 'testpaper/addtest'
    }),
    createPaper() {
      if (this.addclass == '' || this.testype == '' || this.num == '' || this.timing == '' || this.testNamevalue == '') {
        alert('信息不全')
      } else {
        console.log(this.timing[0], this.timing[1])
        const title = this.testNamevalue
        // let subject_id=this.
        //  console.log(this.testNamevalue,this.testype,this.num,this.timing,this.addclass);
        this.addtest(this.testNamevalue, this.testype, this.num, this.timing, this.addclass)
      }
    }
  },
  created() {
    this.getTestType()
    this.getClassList()
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.addtest-box {
background: #f0f2f5;
  width: 100%;
  height: 100%;
  padding: 0px 24px 24px;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 300;
  }
  .test-cont-box {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: #fff;
    padding: 20px 15px;
    .test-name {
      width: 50%;
    }
    label {
      span {
        font-weight: 500;
      }
    }
    label.xrequired:before {
      content: "* ";
      color: red;
    }
    label.xrequired:after {
      content: ": ";
      color: black;
    }
  }
  .addTestbox {
    padding-left: 3px;
    padding-right: 3px;
    div {
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.65);
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style: none;
      margin-bottom: 24px;
      vertical-align: top;
    }
  }
}
.quesnum {
  width: 100px;
}
</style>
