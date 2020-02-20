
import {addSign} from "../services/index"


//选择面试地址
export const changeAddress = (address) => {
  return {
    type: 'CHANGE_ADDRESS',
    payload: address
  }
}


//选择提交表旦
export const submitSign = (payload)=>{
  return dispatch=>{
    addSign(payload).then(res=>{
      dispatch({
        type:'SUBMIT_SIGN',
        payload:res.code===0?1:0
      })
    })
  }
}