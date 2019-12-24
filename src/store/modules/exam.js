import { examType,keType,tiType,gaiType,getType,includesType} from '@/api/exam'
const state = {
    list:[],
    keList:[],
    tiList:[],
    gaiList:[],
    getList:[],
    includesList:[]
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
    },
    getType(state,payload){
        state.getList=payload
    },
    includesType(state,payload){
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
    },
    async getType({commit},payload){
        let res=await getType()
        console.log('lyppp........',res)
        await commit('getType',res.data)
    },
    async includesType({commit},payload){
        console.log('payload----------',payload)
        const params = {}
        if (payload.ruleForm.subject) {
          params.subject_id = payload.ruleForm.subject
        }
        if (payload.ruleForm.exam_id) {
          params.exam_id = payload.ruleForm.exam_id
        }
        if (payload.ruleForm.questions_type_id) {
          params.questions_type_id = payload.ruleForm.questions_type_id
        }
        let res=await includesType(params)
        console.log('lypppppp........',res)
        await commit('includesType',res.data)
    },
  }

  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  