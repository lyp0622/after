
const INITIAL_STATE = {
  address: {},
  flag:-1
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
     default:
       return state
  }
}
