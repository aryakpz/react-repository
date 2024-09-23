
import React, { createContext,useState } from "react"
export type Authuser={
    name:string
    email:string
}
type usercontexttype={
    user:Authuser |null
    setUser :React.Dispatch<React.SetStateAction<Authuser | null>>
}
export const Usercontext =createContext<usercontexttype | null >(null)

type Usercontextprops={
    children :React.ReactNode
}

export const UserContextProvider=({children}:Usercontextprops)=>{
    const [user,setUser] =useState<Authuser | null>(null)
    return(
        <Usercontext.Provider value={{user,setUser}}>
            {children}
        </Usercontext.Provider>            
    )
}    