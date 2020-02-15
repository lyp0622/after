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
  setdata(state, payload) {
    state.data = payload;
    // sessionStorage.setItem("mine", JSON.stringify(state.data))
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
    // console.log(res, "payloadddd")
    sessionStorage.setItem("mine", JSON.stringify(res))

    commit('setdata', res)
  },
  // 更新试卷的试题和确认状态
  async updataTest({ commit }, payload) {
    console.log(payload,"67890-0987")
    const res = await updataTest(payload)//因为只是传参，所以直接把参数给api里边的function即可
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
