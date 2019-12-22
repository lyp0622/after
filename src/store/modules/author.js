import { examStudent , examIDentity} from '@/api/exam'

const state = {
    examS:[], //所有用户信息数据
    userNPID:[], //展示身份数据
    length:''
}

const mutations = {
    //所有用户信息数据
    SET_EXAMS(state,payload){
        state.examS=payload
        console.log(state.examS.length)
        state.length=state.examS.length
    },

    //展示身份数据
    SET_EXAMF(state,payload){
        state.userNPID=payload
    }
}

const actions = {
  //获取所有的用户信息
  async examStudent({ commit }) { 
    const res = await examStudent()
    // console.log('444444',res)
    commit('SET_EXAMS',res.data)
  },

  async examIDentity({commit}){
    const res = await examIDentity()
    commit('SET_EXAMF',res.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
