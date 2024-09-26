
import React from "react";
import { useState } from "react";
import { userAuth } from "./auth";
import { useNavigate } from "react-router";
export const Login=()=>{

    const [user,setuser]=useState('')
    const auth= userAuth()
    const navigate =useNavigate()

    const handle=()=>{
     auth.Login(user)
     navigate('/')
    }

    return(
        <div>
            <label>
                username :<input type="text" onChange={(e)=>setuser(e.target.value)}></input>
            </label>
            <button onClick={handle}>Login</button>
        </div>
    )
}                                     