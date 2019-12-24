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
            <el-input v-model="title" placeholder="试卷名称"/>
          </div>
        </div>
        <!-- 选择考试的类型 -->
        <div class="test-type">
          <label for="title" title="选择考试的类型" class="xrequired">
            <span>选择考试的类型</span>
          </label>
          <div>
            <el-select v-model="exam_id" placeholder="请选择">
              <el-option
                v-for="(item,index) in testType"
                :key="index"
                :label="item.exam_name"
                :value="item.exam_id"
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
            <el-select v-model="subject_id" placeholder="请选择课程">
              <el-option
                v-for="(item,index) in classList"
                :key="index"
                :label="item.subject_text"
                :value="item.subject_id"
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
              v-model="number"
              class="quesnum"
              controls-position="right"
              :min="3"
              :max="10"
            />
          </div>
        </div>
        <!--考试时间  -->
        <div>
          <p>考试时间</p>
          <div class="block">
            <div class="block">
              <el-date-picker v-model="start_time" type="datetime" placeholder="选择开始时间"></el-date-picker>
            </div>
          </div>
          <div class="block">
            <div class="block">
              <el-date-picker v-model="end_time" type="datetime" placeholder="选择结束时间"></el-date-picker>
            </div>
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
import { addtest } from "@/api/addtestpaper";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      subject_id: "",
      exam_id: "",
      number: "",
      start_time:"",
      end_time:"",
      title: ""
    };
  },
  computed: {
    ...mapState({
      testType: state => state.testcont.testType,
      classList: state => state.testcont.classList
    })
  },
  methods: {
    ...mapActions({
      getTestType: "testcont/getTestType",
      getClassList: "testcont/getClassList",
      addtest: "testpaper/addtest"
    }),
    createPaper() {
      if (
        this.subject_id == "" ||
        this.exam_id == "" ||
        this.number == "" ||
        this.start_time == "" ||
        this.title == ""||
        this.end_time==""
      ) {
        alert("信息不全");
      } else {
        console.log(parseInt(this.start_time.getTime()/1000), parseInt(this.end_time.getTime()/1000),this.subject_id,this.exam_id);
        const title = this.testNamevalue;
        this.addtest(
        );
      }
    }
  },
  created() {
    this.getTestType();
    this.getClassList();
  },
  mounted() {}
};
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
