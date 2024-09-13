
import React, { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";

const initial =0
const reducer=(state,action)=>{
    switch(action){
        case 'increment': return state +1;
        case 'decrement': return state -1;
        case 'reset':return initial;
        default : return state;
    }
}

function Reducercount(){

    const [count,setcount]=useReducer(reducer,initial)

    return(
        <div>
            <count>{count}</count>
            <button onClick={()=>setcount('increment')}> Incrment</button>
            <button onClick={()=>setcount('decrement')}> Decrement</button>
            <button onClick={()=>setcount('reset')}> Reset</button>
        </div>
    ) 
}  
 
export default Reducercount;        
