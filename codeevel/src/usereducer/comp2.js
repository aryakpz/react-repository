
import React, { useReducer } from "react";
import Column from "../demo/column";


const initialstate ={
    first:0,
    sec:10
}
const reducer =(state,action)=>{
    switch(action.type){

        case 'increment': 
        return  { ...state,first :state.first +action.value }
        case 'decrement' :
            return{ ...state,first :state.first -action.value}

// ======
        case 'increment1': 
        return  { ...state,sec :state.sec +action.value }
        case 'decrement1' :
            return{ ...state,sec :state.sec-action.value}

// ======
        case 'reset':
            return initialstate
        default : return state

    }

}

function Countertwo(){
   const [count,dispatch]= useReducer(reducer,initialstate)

   return(
    <div>
        <div>count = {count.first}</div>
        <div>count1 ={count.sec}</div>
        <button onClick={()=>dispatch({type:'increment',value:1})}>increment</button>
        <button onClick={()=>dispatch({type:'decrement' ,value:1})}>decrement</button>
        <button onClick={()=>dispatch({type:'increment1',value:5})}>increment</button>
        <button onClick={()=>dispatch({type:'decrement1' ,value:5})}>decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default Countertwo



