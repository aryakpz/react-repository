
import React from "react";

type Inputprops =React.ComponentProps <'input'>
export const Custominput=(props :Inputprops)=>{
    return <input {...props}/>
}