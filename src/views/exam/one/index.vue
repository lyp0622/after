<template>
  <div class="wrap-one">
    <div class="box">
      <div class="top">
        <h2>添加考试</h2>
      </div>
      <div class="center">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="考试类型" prop="region">
            <el-select v-model="ruleForm.region">
              <el-option label="周考一" value="shanghai"></el-option>
              <el-option label="周考二" value="beijing"></el-option>
              <el-option label="周考三" value="xiamen"></el-option>
              <el-option label="月考" value="aozhou"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择课程" prop="region">
            <el-select v-model="ruleForm.region">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设置题量" prop="region">
            <el-input-number v-model="num" :min="4" :max="20"></el-input-number>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">创建试卷</el-button>
          </el-form-item>
        </el-form>
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
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
              alert("submit!");
            } else {
              console.log("error submit!!");
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.wrap-one {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 500px;
  background: #eee;
}
.top {
  width: 100%;
  height: 70px;
  padding-left: 20px;
  line-height: 70px;
  h2 {
    font-weight: normal;
  }
}
.center {
  padding-top: 10px;
  width: 97%;
  height: 430px;
  background: #fff;
  margin: 0 20px;
  border-radius: 7px;
}
</style>


