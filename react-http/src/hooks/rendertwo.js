
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useReducer } from "react";

// const initial ={
//     first:0,
//     sec:10
// }

// const reducer=(state,action)=>{
//     switch(action.type){
//         case 'increment': return {... state,first :state.first + action.value}
//         case 'decrement': return {...state,first :state.first -action.value}
//         case 'increment2': return {...state,sec :state.first + action.value}
//         case 'decrement2': return {...state,sec :state.first -action.value}
//         case 'reset':return initial;
//         default : return state;
//     }
// }
     
// function Reducertwo(){ 
 
//     const [count,setcount]=useReducer(reducer,initial)

//     return(
//         <div style={{display:'flex',flexFlow:'column',gap:'10px'}}>
//             <count>{count.first}</count>

//             <button onClick={()=>setcount({type:'increment',value:1})}> Incrment-1</button>
//             <button onClick={()=>setcount({type:'decrement',value:1})}> Decrement-1</button>
//             <button onClick={()=>setcount({type:'increment',value:5})}> Incrment-5</button>
//             <button onClick={()=>setcount({type:'decrement',value:5})}> Decrement-5</button>
//             <button onClick={()=>setcount({type:'increment2',value:2})}> Incrment-2</button>
//             <button onClick={()=>setcount({type:'decrement2',value:2})}> Decrement-2</button>
//             <button onClick={()=>setcount({type:'reset'})}> Reset</button>
//             <coun>{count.sec}</coun>  
//         </div>
//     ) 
// }  
 
// export default Reducertwo




import React, { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";

const initial ={
    first:0,
    sec:10
}

const reducer=(state,action)=>{
    switch(action){
        case 'increment': return state +1;
        case 'decrement': return state -1;
        case 'reset':return initial;
        default : return state;
    }
}    
     
function Reducertwo(){ 
  
    const [count,setcount]=useReducer(reducer,initial)
    const [counttwo,setcount2]=useReducer(reducer,initial)
    return(
        <div style={{display:'flex',flexFlow:'column',gap:'10px'}}>
            
            <count>{count.first}</count>

            <button onClick={()=>setcount('increment')}> Incrment-1</button>
            <button onClick={()=>setcount('decrement')}> Decrement-1</button>

            <button onClick={()=>setcount('reset')}> Reset</button>

            <button onClick={()=>setcount2('increment')}> Incrment-5</button>
            <button onClick={()=>setcount2('decrement')}> Decrement-5</button>
        
            <button onClick={()=>setcount(  'reset')}> Reset</button>
            <coun>{count.sec}</coun>  
        </div>
    ) 
}  
 
export default Reducertwo;