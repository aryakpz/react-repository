

import React from "react";
import { useNavigate } from "react-router";

export const Home=()=>{
  const navorder=  useNavigate()
    return(<div>
        home page
        <button onClick={()=>{navorder('order',{replace:true})}}> place order</button>
    </div>)
} 
