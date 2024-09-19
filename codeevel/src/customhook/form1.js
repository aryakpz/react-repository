
import React, { useState } from "react";
import useInput from "./useinput";
function Form1(){

//    const [firstname,setfirst]= useState('')
//    const [lastname,setlast]=useState('')

   const [firstname,bindfirst,resetfirst]=useInput('')
   
   const [lastname,bindlast,resetlast]=useInput('')


   const submithandler =e=>{
    e.preventDefault()
    alert(`${firstname} & ${lastname}`)
    resetfirst()
    resetlast()
   }

    return(
        <div>
            <form onSubmit={submithandler}>
                <div>
                    <label> first name</label>
                    <input type="text" {...bindfirst}></input>
                </div>
                <div>
                    <label>last name</label>
                    <input type="text" {...bindlast}></input>
                </div>
                <div>
                    <button> submit</button>
                </div>
            </form>
        </div>
    )  
} 
export default Form1

