
import React, { useState } from "react";

function Login(){

    type auther ={
        name:string
        email:string
    }

    // const [islog,setlog]=useState(false)
    const [user,setuser]=useState()
    const login=()=>{
        setuser()
    }
    
    const logout=()=>{

        setuser(null)
    }
    return(
        <div>
             <button onClick={login}>login</button>
             <button onClick={logout}>logout</button>
             <div>user name is </div>
             <div>user mail is</div>
             {/* {islog.length ?'logged in...':'logged out'}</div> */}
        </div>
    )}

export default Login;  