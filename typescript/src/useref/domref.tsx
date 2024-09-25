
import { useRef,useEffect } from "react";

export const Domref =()=>{
    const inputref =useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputref.current?.focus()
    },[])

    return(
        <div>
            <input type="text" ref={inputref}></input>
        </div>
    )
}
 