
import React,{useState} from "react";
// import { ChildA } from "./cchild";

import { ChildA, Memoa } from "./cchild";
export const countcontext =React.createContext()
const Countprovider=countcontext.Provider

export const Cparent =( {children})=>{
    const [count ,setCount]=useState(0)
    console.log("context parent")

    return(
        <>
        <button onClick={()=>setCount (c =>c+1)}> count {count}</button>
        <Countprovider value ={count}>
           {/* <ChildA/> */}
           {children}
           {/* <Memoa/> */}
        </Countprovider>
        </>
    )
} 