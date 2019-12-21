<template>
  <div class="box">
    <p class="title">用户展示</p>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户数据" name="first">
        <h6 class="first-title">用户数据</h6>
        <!-- <ul class="first-ulto">
          <li>用户名</li>
          <li>密码</li>
          <li>身份</li>
        </ul> -->
        <div>
          <el-table :data="examS.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
            <el-table-column prop="user_name" label="用户名" width="180"></el-table-column>
            <el-table-column prop="user_pwd" label="密码" width="280"></el-table-column>
            <el-table-column prop="identity_text" label="身份"></el-table-column>
          </el-table>

          <!-- 分页 -->
          <el-pagination layout="prev, pager, next" @current-change="current_change"
            :total="examS.lenght"
            background
          ></el-pagination>
        </div>
      </el-tab-pane>

      <el-tab-pane label="身份数据" name="second">
        <h6 class="second-title">身份数据</h6>
        <div class="second-box">
          <ul v-for="(item,index) in userNPID" :key="index" class="second-ult">
            <li>{{item.identity_text}}</li>
          </ul>
        </div>
      </el-tab-pane>

      <el-tab-pane label="api接口权限数据" name="third">api接口权限数据</el-tab-pane>
      <el-tab-pane label="身份和api接口数据" name="fourth">身份和api接口数据</el-tab-pane>
      <el-tab-pane label="视图接口数据" name="fifth">视图接口数据</el-tab-pane>
      <el-tab-pane label="身份和视图权限关系" name="sixth">身份和视图权限关系</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      // total: 1000, //默认数据总数
      pagesize: 3, //每页的数据条数
      currentPage: 1 //默认开始页面
    };
  },
  computed: {
    ...mapState({
      examS: state => state.exam.examS,
      userNPID: state => state.exam.userNPID
    })
  },
  methods: {
    ...mapActions({
      examStudent: "exam/examStudent",
      examIDentity: "exam/examIDentity"
    }),
    current_change:function(currentPage){
        this.currentPage = currentPage;
      }
  },
  mounted() {
    this.examStudent();
    this.examIDentity();
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin-left: 15px;
  position: relative;
}
.box .title {
  font-size: 20px;
}
.first-title {
  font-size: 20px;
  position: absolute;
  top: -42px;
}
.first-ulto {
  display: flex;
  background: #eeeeee;
  line-height: 50px;
  margin-top: 40px;
  li:nth-child(1) {
    flex: 2;
  }
  li:nth-child(2) {
    flex: 7;
  }
  li:nth-child(3) {
    flex: 4;
  }
}
.first-ult {
  display: flex;
  border-bottom: 1px solid #eeeeee;
  line-height: 25px;
  li:nth-child(1) {
    flex: 2;
  }
  li:nth-child(2) {
    flex: 7;
  }
  li:nth-child(3) {
    flex: 4;
  }
}
.second-box {
  margin-top: 50px;
}
.second-title {
  font-size: 20px;
  position: absolute;
  top: -42px;
}
.second-ult {
  display: flex;
  border-bottom: 1px solid #eeeeee;
  line-height: 25px;
  li:nth-child(1) {
    flex: 2;
  }
  li:nth-child(2) {
    flex: 7;
  }
  li:nth-child(3) {
    flex: 4;
  }
}
</style>