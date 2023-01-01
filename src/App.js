
import './App.css';
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
// import { useState } from 'react';
import { useAppContext } from './Context/AppContext';
import { useSecContext } from './Context/SecContext';
import { useDispatch, useSelector } from 'react-redux';
import {Decrement, Increment} from "./Components/Action"

function App() {

  // const [count,setCount]=useState(0)
const {count,Substraction,Addition}=useAppContext()
const {muldiv,Division,Multiplication}=useSecContext()
const myState=useSelector((state)=>state.IncDec)
const dispatch=useDispatch()


  return (
    <div className="App">
    <hr/>
     <h2>Lets Increment and Decrement</h2>
     <hr/>
     <div className='container'>
     <div className='data-cont' onClick={()=>Substraction()}  ><AiOutlineMinus/></div>
     <div className='data-cont num'>{count}</div>
     <div className='data-cont' onClick={()=>Addition()}  ><AiOutlinePlus/></div>
   </div>
   <hr/>
     <div className='container'>
     <div className='data-cont' onClick={()=>Division()}  ><AiOutlineMinus/></div>
     <div className='data-cont num'>{muldiv}</div>
     <div className='data-cont' onClick={()=>Multiplication()}  ><AiOutlinePlus/></div>
   </div>
   <hr/>
     <div className='container'>
     <div className='data-cont' onClick={()=>dispatch(Decrement())}  ><AiOutlineMinus/></div>
     <div className='data-cont num'>{myState}</div>
     <div className='data-cont' onClick={()=>dispatch(Increment())}  ><AiOutlinePlus/></div>
   </div>
   <hr/>

    </div>
  );
}

export default App;
