<template>
  <div class="wrap-first">
    <div class="box-first">
      <div class="top-first">
        <h3>待批班级</h3>
      </div>
      <div class="center-first">
        <el-table :data="studentList" style="width: 100%">
          <el-table-column prop="name" label="班级名" width="180">
     <!-- :row-class-name="tableRowClassName" -->
          </el-table-column>
          <el-table-column prop="courseTitle" label="课程名称"></el-table-column>
          <el-table-column prop="state" label="阅卷状态"></el-table-column>
          <el-table-column prop="classroom" label="教室号"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span
                size="mini"
                type="danger"
                class="read"
                @click="handleLook(scope.$index, scope.row)"
              >
                <a href="#">批卷</a>
              </span>
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
     
    };
  },
  computed: {
    ...mapState({ studentList: state => state.student.studentList })
  },
  methods: {
    ...mapActions({ getStudent: "student/getStudent" })
  },
  mounted() {
    this.getStudent();
  },
  methods:{
    handleLook(){

    }
  }
};
</script>

<style lang="scss" scoped>
.wrap-first {
  width: 100%;
  height: 100%;
}
.box-first {
  width: 100%;
  height: auto;
  background: #eee;
}
.top-first {
  width: 100%;
  height: 100px;
  h3 {
    font-weight: normal;
    line-height: 100px;
    padding: 0 20px;
  }
}
.center-first {
  width: 97%;
  margin: 0 20px;
  background: #fff;
  height: auto;
  border-radius: 10px;
}
</style>