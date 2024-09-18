
import React, { useState ,useCallback} from "react";
import Title from "./title";
import Count from "./count";
import Button from "./button";

function Parentcomp(){

    const [age,setage]=useState(25)
    const[salary,setsalary]=useState(50000)
    const incrementage = useCallback(()=>{
        setage(age + 1)
    },[age])
    const incrementsalary= useCallback(()=>{
        setsalary(salary + 10000)
    },[salary])
    
    const call='call back hook'

    return(
        <div>
            <Title text={call}/>
            <Count text="Age" count={age}/>
            <Button handleclick={incrementage}>increment age</Button>
            <Count text="salary" count={salary}/>
            <Button handleclick={incrementsalary}>increment salary</Button>
        </div>
    )
}    
  
export default Parentcomp;