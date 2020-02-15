<template>
  <div class="wrap-two">
    <div class="box-two">
      <div class="top-two">
        <h2>查看面试题</h2>
      </div>
      <div class="center-two">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
          inline="true"
        >
          <el-form-item label="试题类型" prop="region" >
            <el-select v-model="ruleForm.region">
              <el-option label="周考一" value="shanghai"></el-option>
              <el-option label="周考二" value="beijing"></el-option>
              <el-option label="周考三" value="xiamen"></el-option>
              <el-option label="月考" value="aozhou"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button  @click="onSubmit">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer-two">
        <div class="footer-first">
          <div class="left">试卷列表</div>
        </div>
        <div class="footer second">
          <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="message" label="题目" width="750"></el-table-column>
            <el-table-column prop="grade" label="类型" width="180"></el-table-column>
            <el-table-column prop="create" label="出题人" width="180"></el-table-column>
            <el-table-column prop="address" label="操作"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      }
      }
  },
  methods: {
     
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 6) {
        return "success-row";
      }
      return "";
    }
  },
  
};
</script>

<style lang="scss" scoped>
.wrap-two {
  width: 100%;
  height: 100%;
}
.box-two {
  width: 100%;
  height: auto;
  background: #eee;
}
.top-two {
  width: 100%;
  height: 70px;
  h2 {
    padding: 0 20px;
    line-height: 70px;
    font-weight: normal;
  }
}
.center-two {
  width: 97%;
  height: 100px;
  background: #fff;
  margin: 0 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  .demo-ruleForm{
    padding-top: 30px;
  }
}
.footer-two {
  width: 97%;
  height: 500px;
  background: #fff;
  border-radius: 10px;
  margin: 0 20px;
}
.footer-first {
  width: 100%;
  height: 70px;
  display: flex;
  .left {
    width: 900px;
    line-height: 70px;
    padding: 0 20px;
  }
}
.right {
  span {
    line-height: 70px;
  }
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>