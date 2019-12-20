import { getTestType, getClassList } from '@/api/testCont'
const state = {
  testType: [],
  classList: []
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
  }
}
const actions = {
  async getTestType({ commit }, payload) {
    const res = await getTestType()
    console.log(res.data)
    commit('setTestType', res)
  },
  async getClassList({ commit }, payload) {
    const res = await getClassList()
    console.log(res)
    commit('setClassList', res.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
