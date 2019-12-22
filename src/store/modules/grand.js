import { getGrand } from '@/api/grand'

const state = {
    getGrand: []
  }
  
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
        state.getGrand=payload
    }
  }
  
  const actions = {
    async getGrand ({commit}){
        let res=await getGrand()
        console.log(res,"-----------------------------")
        commit ("ADD_ERROR_LOG",res)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  