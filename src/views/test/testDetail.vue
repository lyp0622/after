<template>
  <div class="testDetail_box">
    <h3>试卷详情</h3>
    <div class="testDetail_firstbox">
      <div class="testdetail_cont_box">
        <div class="detail_cont">
            机器人归为
            <div v-for="(item,index) in detailList" :key="index" >
                <h5>{{item.title}}</h5>
                  <div>
                      {{item.questions_stem}}
                  </div>
                </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            detailList:JSON.parse(sessionStorage.getItem("mine")).data.questions
        }
    },

};
</script>
<style lang="scss" scoped>
.testDetail_box {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .testDetail_firstbox {
    background: #fff;
    padding: 24px;
    margin: 0px 20px 20px 0px;
    border-radius: 10px;
    .testdetail_cont_box {
      min-height: 980px;
      margin: auto;
      padding: 40px;
      text-align: center;
      position: relative;
    }
  }
}
.detail_cont{
    box-sizing: border-box;
}
</style>

