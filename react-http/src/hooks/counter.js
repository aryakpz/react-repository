
import React, { useState }  from "react";

function Counter()
{
    const i=0
    const [count,change]=useState(i)
    const incr=()=>{
        return(
        change(pr=>pr +5)
        )
    }

    return(
    <div>
       count:{count}
       <button onClick={()=>change(i)}>Reset</button>
       <button onClick={()=>change(pr =>pr + 1)}>increment</button>
       <button onClick={()=>change(pr=>pr -1 )}>Decrement </button>
       <button onClick={()=>incr()}>inc 5</button>
    </div> 
    )
}   

export default Counter; 