import React,{useState} from "react";
import { Parent } from "./parent";

export const Grand=()=>{
    const[count,setcount]=useState(0)
    return(  
        <div>
          <button onClick={()=>setnew((nc)=>nc + 1)}>
             Grand - {count}
             <Parent>
                <Child/>     
             </Parent> 
          </button>
        </div>  
    )    
}                                       