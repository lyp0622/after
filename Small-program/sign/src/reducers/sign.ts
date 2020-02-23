
const INITIAL_STATE = {
  address: {},
  list: [],
  flag:-1,
  current:0,
  navList: ['未开始', '已开始', '已放弃', '全部']
}

export default function sign (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_ADDRESS':
      return {
        ...state,
        address: action.payload
      }
      case 'SUBMIT_SIGN':
        return {
          ...state,
          flag:action.payload
        }
      case 'SIGN_LIST':
        return {
          ...state,
          list:action.payload, 
       }
     default:
       return state
  }
}
