
const initialState=0

 const IncDec = (state =initialState,action) => {
switch(action.type){
    case "INCREMENT":return(state + 3)
    case "DECREMENT":return(state - 3)
    default :return state
}
}

export default IncDec

