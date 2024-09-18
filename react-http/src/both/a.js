
import React, { useContext } from "react";
import { countcontext } from "../App";

function Coma(){
  
    const countco=useContext(countcontext)

    return(
        <div>
            component -a - 
            <button onClick={()=>countco.countdispatch('increment')}>increment</button>
            <button onClick={()=>countco.countdispatch('decrement')}>decrement</button>
            <button onClick={()=>countco.countdispatch('reset')}>reset</button>
        </div>
    )
}
export default Coma;   