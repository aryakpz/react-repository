
import React from "react";

type Textprop<E extends React.ElementType> ={
    size ?:'sm'| 'md'|'lg'
    color ?: 'primary' |'secondary'
    children :React.ReactNode
    as?:E
}


type Text2props < E extends React.ElementType>=Textprop<E> & 
Omit<React.ComponentProps<E>,keyof  Textprop<E>>

export const Text=<E extends React.ElementType ='div'>({size,color,children,as}:Textprop<E>)=>{

    const Component = as ||'div'
    return (
        <Component className={`class-with-${size}-${color}`}>
            {children}
        </Component>
    )
}
  