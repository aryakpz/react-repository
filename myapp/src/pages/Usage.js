           

import React, { useEffect, useState } from "react";
import './Usage.css'

function Usage(param) {
    const [val, count] = useState(0)
    const [color, setclr] = useState('grey')
    const [boom,setboom]= useState(false)

    useEffect(() => {

  setboom(false)
     const demo=setTimeout(() => {

            setboom(true)
        },val*1000 );

        
        return(()=>{
            clearTimeout(demo)
        })
    }, [val,color]); 
                                                                                                                                                                                                                                                                                                                                         
    return (
       
        <div className="main">
            <div>
                <div className="maindiv" style={{ background: color }}>

                    <button className="incr" onClick={() => {
                        count(val + 1)
                    }}>Increment</button>       
                    <div className="sub">{val}</div>
                    <button className="desc" onClick={() => {
                        count(val - 1)
                    }}>Decrement</button>
                
                </div>

                <button className="blue" onClick={() => {
                    setclr('blue')
                }}> blue </button>
                <button className="red" onClick={() => {
                    setclr('red')
                }}> red</button>
            </div>


      {   /* 
            {
                boom && val?(
                <div className="boom">
                        <span>BOOM!</span>
                    </div>):null
            } */   }
       
        </div>
        ) 
    }     
            
export default Usage;                 