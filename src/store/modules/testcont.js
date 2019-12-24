import { getTestType, getClassList } from '@/api/testCont'
import {addtest} from "@/api/addtestpaper"
const state = {
  testType: [],
  classList: [],
  data:[]
}

const mutations = {
  // 设置课程类型
  setTestType(state, payload) {
    if (payload.code == 1) {
      state.testType = payload.data
    } else {
      console.log('参数信息不对')
    }
  },
  setClassList(state, payload) {
    state.classList = payload
  },
  setdata(state,payload){
    state.data=payload
  }
}
const actions = {
  async getTestType({ commit }, payload) {
    const res = await getTestType()
    commit('setTestType', res)
  },
  async getClassList({ commit }, payload) {
    const res = await getClassList()
    commit('setClassList', res.data)
  },
  async addtest({commit},payload){
    console.log(payload,"payloadddd")
        const res=await addtest(payload)
        console.log(res)
        commit('setdata',res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
