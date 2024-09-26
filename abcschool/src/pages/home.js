
import React,{useState} from "react";

function Home(){
const [text,settext]=useState('welcome')
const [input,setinput]=useState('')
 
const handle=()=>{
    settext(input)
}
const handlechange=(e)=>{
setinput(e.target.value)
}
    return(
        <div>
            <input type="text" placeholder="enter here..." onChange={handlechange}></input>
            <button onClick={handle}>click</button>
            <p>{text}</p>
        </div>
    )
}
  
export default Home;        