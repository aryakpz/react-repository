import React from "react";
import { useNavigate } from "react-router";

export const Order =()=>{

    const nav=useNavigate()
    return(
        <div>order confirmed

        <button onClick={()=>{nav('/')}}>back</button>
        </div>
    )
}             