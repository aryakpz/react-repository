
import React from "react"
type Buttonprop ={
    variant:'primary '|'secondary'
    children:string
} & Omit < React.ComponentProps<'button'>,'children'>

export const Custombutton =({variant,children,...rest} :Buttonprop )=>{
    return( <button className={`class-with-${variant}`}{...rest}>{children}</button>)
}

