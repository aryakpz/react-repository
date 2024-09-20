import React from "react"


type buttonprops={
    handleclick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

export const Button=(props:buttonprops)=>{
    return (
        <div>
            <button onClick={(event)=> props.handleclick(event,1)}>
                click
            </button>
        </div>
    )
}            