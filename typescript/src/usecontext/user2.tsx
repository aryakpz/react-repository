
import { useContext } from "react"

import { UserContext } from "./usercontext2"

export const User2=()=>{
    const usercon =useContext(UserContext)
    const login =()=>{
        console.log('in')
        if(usercon){
            usercon.setuser({
                name:'arya',
                email:'arya@gmail.com'
            })
        }
    }
    const logout =()=>{
        console.log("out")
        if(usercon){
            usercon.setuser(null)
        }
    }
     
    return( 
        <div>
            <button onClick={login}>login</button>
            <button onClick={logout}> logout</button>
            <div>user name is {usercon?.user?.name}</div>
            <div>user mail is {usercon?.user?.email}</div>
        </div>
    )
}                                      