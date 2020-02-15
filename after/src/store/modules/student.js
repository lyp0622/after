import { getStudent } from '@/api/student'

const state = {
    studentList: []
  }
  
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
        state.studentList=payload
    }
  }
  
  const actions = {
    async getStudent ({commit}){
        let res=await getStudent()
        // console.log(res.exam,"-----------------------------")
        commit ("ADD_ERROR_LOG",res.exam)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  