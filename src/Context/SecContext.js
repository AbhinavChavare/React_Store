import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/SecReducer";


const SecContext=createContext()

const initialState={
muldiv:0,
}
const SecContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

    const Multiplication=()=>{
        return dispatch({type:"MULTIPLICATION"})
    }

const Division=()=>{
  return dispatch({type:"DIVISION"})
}
    return(
        <SecContext.Provider value={{...state,Division,Multiplication}}>
        {children}
    </SecContext.Provider>
        )
}

const useSecContext=()=>{
return (
    useContext(SecContext)
)
}

export {SecContext,SecContextProvider,useSecContext}



