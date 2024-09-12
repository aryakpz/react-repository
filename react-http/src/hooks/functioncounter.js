
import React from "react";
import { useState } from "react";

function Hookcounter()
{
   const [count,change]=useState(0)
 
    return( 
        <div> 
            <button onClick={()=>change(count +1)}>click {count}</button>
        </div> 
    )}  
    
export  default Hookcounter;                                                        