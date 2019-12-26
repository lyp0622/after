<template>
  <div class="edit-box">
    <h2 class="edit-testPaper">创建试卷</h2>
    <div class="edit-cont-box">
      <div class="edit-dont-box-first">
        <button class="edit-addtest">
          <span>添加新题</span>
        </button>
        <div class="edit-cont-box-cont">
          <h2>{{editcont.data.title}}</h2>
          <p>考试时间：1小时40分钟</p>
          <span class="style_juan__nAupa"></span>
          <div>
            <div
              class="edit-cont-everyquestion"
              v-for="(item,index) in editcont.data.questions"
              :key="index"
            >
              <div class="edit-every-title">
                <div>{{index+1}}:{{item.title}}</div>
                <div>
                  <a href>删除</a>
                </div>
              </div>
              <div class="edit-every-cont">{{item.questions_stem}}</div>
            </div>
          </div>
          <button class="ant-btn-primary" @click="createtest">创建试卷</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      editcont: JSON.parse(sessionStorage.getItem("mine"))
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      updataTest: "testcont/updataTest"
    }),
    createtest() {
      let question_ids = this.editcont.data.questions;
      let testArr = [];
      question_ids.forEach((item, index) => {
        testArr.push(item.questions_id);
      });
      this.updataTest(testArr);
      this.$router.push({
        path:"/testlist"
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-box {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  padding: 0px 24px 24px;
  display: flex;
  flex-direction: column;
  .edit-testPaper {
    font-weight: 300;
    font-size: 1.5rem;
    padding: 20px 0px;
    margin-top: 10px;
  }
  .edit-cont-box {
    padding: 24px;
    background: #fff;
    border-radius: 10px;
  }
  .style_juan__nAupa {
    position: absolute;
    border: 0;
    right: 0;
    bottom: 0;
    width: 84px;
    height: 72px;
    background: url(http://img.233.com/student/img/theme/jixun/imgs/nav.png)
      no-repeat -479px -378px;
  }
}
.ant-btn-primary {
  padding: 0 40px;
  border-radius: 4px;
  border: 0;
  font-size: 14px;
  color: #fff;
  background: linear-gradient(-90deg, #4e75ff, #0139fd);
  cursor: pointer;
  height: 32px;
  user-select: none;
}
.edit-dont-box-first {
  position: relative;
  .edit-addtest {
    line-height: 1.499;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 2px;
    height: 32px;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
  }
}
.edit-cont-box-cont {
  padding: 40px;
  margin: auto;
  text-align: center;
}
.edit-cont-everyquestion {
  text-align: left;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
.edit-every-title {
  display: flex;
  justify-content: space-between;
  a {
    color: blue;
  }
}
.edit-every-cont {
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
}
</style>
