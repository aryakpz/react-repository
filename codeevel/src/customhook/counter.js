import React, { useEffect, useState } from "react";
import usecounter from "./countercustom";

function Counterone(){

//    const[count,setcount]=  useState(0)

//   const increment=()=>{
//     setcount(count+1)
//   }
//   const decrement=()=>{
//     setcount(count - 1)
//   }
//   const reset=()=>{
//     setcount(0)
//   }      
const [count,increment,decrement,reset]=usecounter()

    return( 
        <div>
            <div>count = {count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>

        </div>
    )
}
export default Counterone

