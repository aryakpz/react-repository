
import React from 'react';
import {useState} from 'react'
import { Child } from './child';

export const Parent=({child})=>{
    const [count,setcount]=useState(0)
    const [name,setname]=useState('arya')
    console.log('parent render')
    return (
        <div>  
              <button onClick={()=>setcount((c)=>c+1)}>count - {count}</button>
              <button onClick={()=>setname('santhosh')}>change name</button>
              {/* <button onClick={()=>setcount(0)}>count - 0</button> */}
              {/* <button onClick={()=>setcount(5)}>count - 5</button> */}
              <Child name={name}/>  
              {/* {child} */}   
        </div>   
    )     
}   

