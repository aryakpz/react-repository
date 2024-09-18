
import React,{useState,useEffect,useRef} from "react";

function Hooktimer(){
    const [timer,settimer]=useState(0)
    const intervalRef =useRef()


    useEffect(()=>{
        intervalRef.current=setInterval(() => {
            settimer(prevtime =>prevtime + 1)
        }, 1000);
        return ()=>{ 
            // effect
            clearInterval(intervalRef.current)
        };
    },[]) 

    return(
        <div>
            Hook timer - {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>clear hook timer</button>
        </div>
    )}

export default Hooktimer                                          