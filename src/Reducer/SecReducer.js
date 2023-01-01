
const SecReducer = (state,action) => {
 switch(action.type){

    case "DIVISION":return{
        ...state,muldiv:state.muldiv - 2
    }
case "MULTIPLICATION":return{
    ...state,muldiv:state.muldiv + 2
}

    default:
        return state
 }
}

export default SecReducer
