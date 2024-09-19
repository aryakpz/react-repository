
import React, { useState } from "react";

function useInput(initialvalue){
    const [value,setvalue]=useState(initialvalue)

    const reset=()=>{
        setvalue(initialvalue)
    }

    const bind={
        value,
        onChange:e=>{
            setvalue(e.target.value)
        }
    }
    return[value,bind,reset]
}

export default useInput; 