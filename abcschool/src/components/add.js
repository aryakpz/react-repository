

import React, { useState } from "react";

const Add = ({ onAdd }) => {
    const [name, setname] = useState('');
    const [email, setmail] = useState('')
  
    const handle =(e)=>{
        e.preventDefault()
        if(name.trim() && email.trim())
        {
           onAdd(name,email);
           setname('')
           setmail('') 
        }
    }

       
    return ( 
        <form onSubmit={handle}>
            <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="enter student name" />
            <input 
                type="email"  
                value={email} 
                onChange={(e) => setmail(e.target.value)}
                placeholder="enter mail id"
            />
            <button type="submit"> add student</button>
        </form>
    )                                                
}

export default Add; 