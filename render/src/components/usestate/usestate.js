
import React from 'react';
import {useState} from 'react'

export const Usestate=()=>{
    const [count,setcount]=useState(0)
    console.log('render')
    return (
        <div>  
              <button onClick={()=>setcount((c)=>c+1)}>count - {count}</button>
              <button onClick={()=>setcount(0)}>count - 0</button>
              <button onClick={()=>setcount(5)}>count - 5</button>
        </div>
    )
} 