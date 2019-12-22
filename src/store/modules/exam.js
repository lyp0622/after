import { examType,keType,tiType,gaiType} from '@/api/exam'
const state = {
    list:[],
    keList:[],
    tiList:[],
    gaiList:[]
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
      },
      gaiType(state,payload){
        state.gaiList=payload
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
    },
    async gaiType({commit},payload){
        let res=await gaiType()
        console.log('ly........',res)
        await commit('gaiType',res.data)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  