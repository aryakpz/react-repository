
import React from "react"

type inputprops ={
    value:string
    handlechage:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

export const input = (props:inputprops)=>{
    return <input type ='text' value={props.value} onChange={props.handlechage}/>
}

