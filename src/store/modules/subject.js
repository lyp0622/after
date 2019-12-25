
import { getSubject } from '@/api/subject'

const state = {
    subjectList: [],//页面
   
  }
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
        state.subjectList=payload 
    }
  }
  
  const actions = {
    async getSubject ({commit}){
        let res=await getSubject()
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
  