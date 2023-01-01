import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/AppReducer";


const AppContext= createContext()

const initialState={
count:0,
}

const AppContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

const Substraction=()=>{
    return (
    dispatch({type:"SUBSTRACTION"})
    )
}
const Addition=()=>{
    return (
    dispatch({type:"ADDITION"})
    )
}




return (
       <AppContext.Provider value={{...state,data:"data",Substraction,Addition}}>
    {children}
  </AppContext.Provider>

    )
}

const useAppContext=()=>{
    return(
        useContext(AppContext)
    )
}

export  {AppContext, AppContextProvider,useAppContext }