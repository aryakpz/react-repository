
import React from "react"

type inputprops = {
    value: string
    handlechage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const input = ({value,handlechage}: inputprops) => {
    const inputchange=(event:React.ChangeEvent<HTMLInputElement>)=>{
           console.log(event)
    }
    return <input type='text' value={value} onChange={handlechage} />
}                                                                              