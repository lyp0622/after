<template>
  <div class="wrap">
      <main>
          <h2>查看试题</h2>
           <div class="box">
                    <span>课程类型</span>
                      <span v-for="(item,index) in keList" :key="index" class="lei">
                          {{item.subject_text}}
                      </span>
           </div>
           <div class="content">

           </div>
      </main>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
 export default {
     computed: {
       ...mapState({
           keList: state => state.exam.keList,
       })
   },
    methods:{
      ...mapActions({
        keType:'exam/keType',
      })
    },
     created(){
       this.keType()
   }
}
</script>

<style lang='scss' scoped>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none
    }
    .wrap{
        width: 100%;
        height: 100%;
        background: #f0f2f5;
    }
    h2{
        color: rgba(0,0,0,0.85);
        font-size: 21px;
        margin: 0px 0px 10.5px 20px;
        padding: 20px 0px;
        font-weight: 400;
    }
    main{
        // margin: 0px 0px 0px 20px;
        p{
            width: 100%;
            font-size: 14px;
            span{
                color: red;
            }
        }
    }
    .box{
      width: 90%;
      background: white;
      margin: 0 auto;
      span{
        margin-left: 30px;
        // font-size: 16px
      }
    }
   .lei{
     font-size: 12px;
     color: #222;
   }
</style>







