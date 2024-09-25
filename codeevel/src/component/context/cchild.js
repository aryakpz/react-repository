
import React, {useContext} from "react";
import { countcontext } from "./cparent";

export const ChildA =()=>{
    console.log("child a")
    return(
        <>
        <div>child a</div>
        <ChildB/>
        </>
    )
}

export const Memoa=React.memo(ChildA)

export const ChildB =()=>{
    console.log('child b')

    return(
        <>
        <div> child b</div>
        <ChildC/>
        </>
    )
}

export const ChildC=()=>{
    const counts=useContext(countcontext)
    console.log("child c")
    return(
        <>
        <div>child c count= {counts}</div>
        {/* <ChildC/> */}
        </>
    )
}       