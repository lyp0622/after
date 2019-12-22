<template>
  <div class="testPaper-box">
    试卷列表
    <div class="testPaper-first">
      <div>
        <div>
          考试类型
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="(item,index) in testType"
              :key="index"
              :label="item.exam_name"
              :value="item.exam_id"
            />
          </el-select>
        </div>
      </div>
      <!-- 课程 -->
      <div>
        课程
        <el-select v-model="value" placeholder="请选择课程">
          <el-option
            v-for="(item,index) in classList"
            :key="index"
            :label="item.subject_text"
            :value="item.subject_id"
          />
        </el-select>
      </div>
      <!-- 查询 -->
      <div>
        <el-button icon="el-icon-search" type="primary">查询</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      value: '',
      num: ''
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
      getClassList: 'testcont/getClassList'
    })
  },
  created() {
    this.getTestType()
    this.getClassList()
  },
  mounted() {}
}
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
    justify-content: space-between;
    background: #fff;
    border-radius: 10px;
    div {
      width: 33%;
    }
  }
}
</style>
