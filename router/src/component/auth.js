import React, { Children, AuthContext,useContext } from "react";
import { useState,createContext } from "react";

// const AuthContext =createContext(null)
export const Authprovider =({children})=>{
    const[user,setUser]=useState (null)
    const login=user=>{
        setUser(user)
    }
    const logout=user=>{
        setUser(null)
    }
    return<AuthContext.Provider value={{user,login,logout}}>{Children}</AuthContext.Provider>
}             
                          
export const userAuth=()=>{              
    return(
        useContext(AuthContext)
    )
}                                             