
import React,{useState} from "react";


export const Child3 =({children,name})=>{
 

    console.log('child 3 render')
    return (
        <div>
            {children} {name}
           
        </div>
        
    )
}


export const Memochild3 =React.memo(Child3)