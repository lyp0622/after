<template>
  <div class="wrap">
      <main>
          <h2>试题分类</h2>
          <div class="main">
               <el-button type="text" @click="open3">
                 <Button class="But" @click="add()">+添加类型</Button>
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
  
</template>
<script>
import {mapActions, mapState} from 'vuex'
import {stType} from '@/api/exam'
  export default {
    data() {
      return {
        tableData4: {
          text:'',
          sort:''
        }
      }
    },
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
      add(tableData4){
        stType(this.tableData4)
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


