
// import React, { Component } from "react";
import { Login } from "./login";
import { Profile, Profileprops } from "./profile";
type Privateprops ={
    islog:boolean
    Component:React.ComponentType<Profileprops>
}

export const Private =({ islog,Component:Component}:Privateprops)=>{
    if(islog){
        return (
            <Component name='viswas'/>
        )
    }
    else{
        return<Login/>
    }
}