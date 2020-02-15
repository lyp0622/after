<template>
    <div className='detail'>
        <h2 class="weight">试题详情</h2>
        <main className='main'>
            <div class="box">
                <div class="left">
                        <p>出题人:{{item.user_name}}</p>
                        <p>题目信息</p>
                        <span class="one">{{item.questions_type_text}}</span>
                        <span class="two">{{item.subject_text}}</span>
                        <span class="three">{{item.exam_name}}</span>
                        <p>{{item.title}}</p>
                        <pre>
                            {{item.questions_stem}}
                        </pre> 
                </div>
                <div class="right">
                    <pre>{{item.questions_answer}}</pre>   
                </div>
            </div>
        </main> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            item:this.$route.query.item
        }
    },
}
</script>
<style lang="scss" scoped>
      .detail{
          width:100%;
          height:100%;
        //   display: flex;
          background: #f0f2f5
      }
      .weight{
          font-weight: 200;
          font-size: 20px;
          padding: 30px
      }
      .main{
          flex:1;
          
      }
      .box{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
         
      }
      .left{
          width: 55%;
          padding: 20px;
          background: #eee;
     
         
      }
       pre {
          white-space: pre-wrap; /*css-3*/
      }
      .right{
          width: 40%;
          padding: 20px;
          background: #ddd;
      }
        .one{
          padding: 0px 10px 0px 10px;
          background: #e6f7ff;
          border: 1px solid #91d5ff
      }
        .two{
          padding: 0px 10px 0px 10px;
          background: #f0f5ff;
          border: 1px solid #adc6ff
      }
        .three{
          padding: 0px 10px 0px 10px;
          background:   #fff7e6;
          border: 1px solid #ffd591  
      }
      pre{
          width: 100%;
          word-wrap: break-word;
      }
</style>