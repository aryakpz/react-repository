
import React, { useEffect, useRef } from "react";

function Focus() {
    const inputref=useRef(null)
    useEffect(()=>{
        //focus the i/p elements
       inputref.current.focus()


    },[])

    return (
        <div>
            <input ref={inputref} type="text"></input>

        </div>
    )
}

export default Focus