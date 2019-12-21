import { examType,keType,tiType} from '@/api/exam'
const state = {
    list:[],
    keList:[],
    tiList:[]
  }
  const mutations = {
     typeList(state,payload){
          state.list=payload
      },
      keType(state,payload){
          state.keList=payload
      },
      tiType(state,payload){
          state.tiList=payload
      }
  }
  const actions = {
     async examType({commit},payload){
        let res=await examType()
        console.log('res........',res)
        await commit('typeList',res.data)
    },
    async keType({commit},payload){
        let res=await keType()
        console.log('res........',res)
        await commit('keType',res.data)
    },
    async tiType({commit},payload){
        let res=await tiType()
        console.log('lyp........',res)
        await commit('tiType',res.data)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  