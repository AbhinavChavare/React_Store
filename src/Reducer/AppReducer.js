

const AppReducer = (state,action) => {

 switch(action.type){

    case "SUBSTRACTION" :
            return{
            ...state,count:state.count - 1
        }

      case "ADDITION":return{
        ...state,count:state.count + 1
      }  

    default:{
      return{...state}
    }
}
}

export default AppReducer
