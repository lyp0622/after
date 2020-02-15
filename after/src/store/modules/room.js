
import { getRoom } from '@/api/room'

const state = {
    getRoomList: [],//页面,
   
  }
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
        state.getRoomList=payload 
    }
  }
  
  const actions = {
    async getRoom ({commit}){
        let res=await getRoom()
        console.log(res,"-----------------------------教室号")
        commit ("ADD_ERROR_LOG",res.data)
    },
  
} 
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  