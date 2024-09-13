
import React, { useCallback, useContext } from "react";
import { countcontext } from "../App";


function Comf(){
  
    const countco =useContext(countcontext)

    return(
        <div> 
             component - f - 
             <button onClick={()=>countco.countdispatch('increment')}>increment</button>
            <button onClick={()=>countco.countdispatch('decrement')}>decrement</button>
            <button onClick={()=>countco.countdispatch('reset')}>reset</button>
     
        </div>
    )
}
export default Comf;