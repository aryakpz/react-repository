import React from "react";

export const Child5 =({name})=>{
    console.log('child nav render')
return(
    <div> Hello -  {name} </div>
)
}

export const Memochild5 =React.memo(Child5)