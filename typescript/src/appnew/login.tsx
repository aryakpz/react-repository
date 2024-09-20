
import React, { useState } from "react";

function Login(){

    const [islog,setlog]=useState(false)

    const login=()=>{
        setlog(true)
    }
    const logout=()=>{
        setlog(0)
    }

    return(
        <div>
             <button onClick={login}>login</button>
             <button onClick={logout}>logout</button>
             <div>user is {islog.length ?'logged in...':'logged out'}</div>
        </div>
    )}
     
export default Login;  