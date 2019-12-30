import { getGrand } from '@/api/grand'

const state = {
    getGrandList: [],//页面
   
  }
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
        state.getGrandList=payload 
    }
  }
  
  const actions = {
    async getGrand ({commit}){
        let res=await getGrand()
        // console.log(res,"-----------------------------")
        commit ("ADD_ERROR_LOG",res.data)
    },
  
}
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  