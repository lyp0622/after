import { getTestType, getClassList, updataTest } from '@/api/testCont'
import { addtest } from "@/api/addtestpaper"
const state = {
  testType: [],
  classList: [],
  data: [],
  updataTest: ""
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
  setdata(state, payload) {
    state.data = payload;
    sessionStorage.setItem("mine", JSON.stringify(state.data))
  },
  setUpdata(state, payload) {
    state.data = payload

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
  async addtest({ commit }, payload) {
    const res = await addtest(payload)
    console.log(res, "payloadddd")
    commit('setdata', res)
  },
  async updataTest({ commit }, payload) {
    const res = await updataTest(payload)//因为只是传参，所以直接把参数给api里边的function即可
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
