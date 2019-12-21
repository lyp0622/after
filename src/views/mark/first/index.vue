<template>
  <div class="wrap-first">
    <div class="box-first">
      <div class="top-first">
        <h3>待批班级</h3>
      </div>
      <div class="center-first">
        <el-table style="width: 100%" :data="studentList">
          <el-table-column type="index"></el-table-column>
          <el-table-column prop="date" label="班级名称">
        
            <!-- <ul>
              <li >
                {{item.student_name}}</li>
            </ul> -->
          </el-table-column>
          <el-table-column prop="name" label="课程名称"></el-table-column>
          <el-table-column prop="address" label="班级号"></el-table-column>
          <el-table-column prop="data" label="操作"></el-table-column>
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
      list: ["班级名称", "课程名称", "班级号", "操作"]
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