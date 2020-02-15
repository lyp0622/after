import {getAlltest} from "@/api/getAllTest"
const state={
    testList:[]
}
const mutations={
    setList(state,payload){
        state.testList=payload
    }
}
const actions={
      async getAlltest({commit},payload){
          let res=await getAlltest()
          console.log(res.exam,"11111")
          await commit('setList',res.exam)
      }


}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  