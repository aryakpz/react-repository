
import React, { useState } from "react";
function Logintype(){
    type auther ={
        name:string
        email:string
    }

    // const [islog,setlog]=useState(false)
    const [user,setuser]=useState< auther | null>( {} as auther)
    const login=()=>{
        setuser({
            name:'arya',
            email:'a@gmail.com'
        },)    
    }
        
    const logout=()=>{
        setuser(null)     
    }
    
    return(    
        <div>
             <button onClick={login}>login</button>
             <button onClick={logout}>logout</button>
             <div>user name is {user?.name}</div>
             {/* the value can be null,advantage of type script */}
             <div>user mail is {user?.email}</div>
             {/* {islog.length ?'logged in...':'logged out'}</div> */}
        </div>
    )}   
                
export default Logintype;