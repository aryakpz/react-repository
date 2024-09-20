
import React from "react"

type conprop={
    name:String,
    styles :React.CSSProperties
}

export const Container=(props:conprop) =>{
    return (
        <div style={props.styles}>
        TEXT-CONTENT {props.name}
        </div>
    )                                                                 
}                  