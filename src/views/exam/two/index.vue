<template>
<<<<<<< HEAD
  <div class="wrap">
      <main>
          <h2>试题分类</h2>
          <div class="main">
               <el-button type="text" @click="open3">
                 <Button class="But">+添加类型</Button>
               </el-button>
          </div>
        <el-table
        :data="tableData4"
        style="width: 100%"
        max-height="250">
        <el-table-column
        fixed
        prop="date"
        label="类型ID"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="类型名称"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small">
            移除
          </el-button>
      </template>
    </el-table-column>
  </el-table>
  </main>
  </div>
  
=======
  <div class="wrap-two">
    <div class="box-two">
      <div class="top-two">
        <h2>试卷列表</h2>
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
          <el-form-item label="考试类型" prop="region" >
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
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button  @click="onSubmit">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer-two">
        <div class="footer-first">
          <div class="left">试卷列表</div>
          <div class="right">
            <span>
              <el-button>全部</el-button>
            </span>
            <span>
              <el-button>进行中</el-button>
            </span>
            <span>
              <el-button>已绑定</el-button>
            </span>
          </div>
        </div>
        <div class="footer second">
          <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="message" label="试卷信息" width="370"></el-table-column>
            <el-table-column prop="grade" label="班级" width="180"></el-table-column>
            <el-table-column prop="create" label="创建人" width="180"></el-table-column>
            <el-table-column prop="start" label="开始时间" width="180"></el-table-column>
            <el-table-column prop="end" label="结束时间" width="180"></el-table-column>
            <el-table-column prop="address" label="操作"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
>>>>>>> lmy
</template>
<script>
<<<<<<< HEAD
import {mapActions, mapState} from 'vuex'

  export default {
    computed: {
        //  list:state=>state.exam.addList
    },
    methods: {
      open3() {
        this.$prompt('创建新类型' ,{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        });
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      ...mapActions({
        //  addType:'exam/addType'
      })
    },
  
    created(){
        //  this.addType()
    },

     data() {
      return {
        tableData4: []
      }
    }
  }
</script>

<style lang='scss' scoped>
    .wrap{
        width: 100%;
        height: 100%;
        background: #f0f2f5
    }
    h2{
        color: rgba(0,0,0,0.85);
        font-size: 21px;
        margin: 0px 0px 10.5px 20px;
        padding: 20px 0px;
        font-weight: 400;
    }
    main{
       margin: 0px 0px 0px 0px;
    }
    .main{
      width: 95%;
      height: 95%;
      background: white;
      margin-left: 20px
    }
    .But{
      width: 100px;
      height: 30px;
      margin-left: 20px
    }

</style>


=======
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
  }
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
>>>>>>> lmy
