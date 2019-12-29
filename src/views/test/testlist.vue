<template>
  <div class="testPaper-box">
    <h2>试卷列表</h2>
    <el-form class="testPaper-first" :inline="true" :model="formInline">
      <el-form-item class="el-item" label="考试类型">
        <el-select v-model="formInline.class_type" placeholder="请选择">
          <el-option
            class="ipt"
            v-for="(item,index) in testType"
            :key="index"
            :label="item.exam_name"
            :value="item.exam_id"
          />
        </el-select>
      </el-form-item>
      <el-form-item class="el-item" label="课程">
        <el-select v-model="formInline.test_type" placeholder="请选择课程">
          <el-option
            v-for="(item,index) in classList"
            :key="index"
            :label="item.subject_text"
            :value="item.subject_id"
          />
        </el-select>
      </el-form-item>
      <el-form-item class="el-item">
        <el-button class="el-button" type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="test_list">
      <div class="test_list_first">
        <h4>试卷列表</h4>
        <div>
          <el-radio-group v-model="radio1">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="进行中"></el-radio-button>
            <el-radio-button label="已结束"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="test_list_twice">
        <el-table :data="testlist" stripe style="width: 100%">
          <el-table-column label="试题信息" prop="title"></el-table-column>
          <el-table-column label="班级" prop="grade_name"></el-table-column>
          <el-table-column label="创建人" prop="user_name"></el-table-column>
          <el-table-column label="开始时间" prop="start_time"></el-table-column>
          <el-table-column label="结束时间" prop="end_time"></el-table-column>
          <el-table-column label="操作" prop="cz">
<<<<<<< HEAD
            <template>
              <el-button @click="detail()" type="text" size="small">详情</el-button>
=======
            <template slot-scope="scope">
              <el-button @click="detail(scope.now)" type="text" size="small">操作</el-button>
>>>>>>> szw
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      formInline: {
        class_type: "",
        test_type: ""
      },
      start_time: "",
      radio1: "全部",
      radio2: "进行中",
      radio3: "已结束",
      testTitle: []
    };
  },
  methods: {
    onSubmit() {
      // console.log(1);
    },
    ...mapActions({
      getTestType: "testcont/getTestType",
      getClassList: "testcont/getClassList",
      getAlltest: "getAllTest/getAlltest"
    }),
    detail(){
      this.$router.push({
        path:"/detail"
      })
    }
  },
  computed: {
    ...mapState({
      testType: state => state.testcont.testType,
      classList: state => state.testcont.classList,
      testlist: state => state.getAllTest.testList
    })
  },
  watch: {
    testlist(now) {
      this.testTitle = now.map(item => {
        console.log(item.grade_name, "2222");
        return {
          title: item.title,
          grade_name: item.grade_name,
          user_name: item.user_name,
          start_time: item.start_time,
          end_time: item.end_time,
          cz: "操作"
        };
      });
      
    }
  },
  created() {
    this.getTestType();
    this.getClassList();
    this.getAlltest();
  },
  mounted() {
    setTimeout(() => {
    }, 1000);
  }
};
</script>
<style lang="scss" scoped>
.testPaper-box {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .testPaper-first {
    display: flex;
    background: #fff;
    border-radius: 10px;
    padding: 24px;
    margin-bottom: 20px;
    .el-item {
      width: 33.3%;
      .el-button {
        margin: 3px 0px 0px 50px;
        width: 130px;
      }
    }
  }
  .test_list {
    background: #fff;
    border-radius: 10px;
    padding: 24px;
    .test_list_first {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
  }
}
</style>
