
import React from "react";

class Refsdemo extends React.Component
{
    constructor(props){
        super(props)
        this.inputRef =React.createRef()
    }
     
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickev=(e)=>{
        alert(this.inputRef.current.value)
    } 
       
    render()      
        
    {      
        return(   
            <div>  
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.clickev}>click</button>
            </div>     
        )       
    }        
}     
       
export default Refsdemo;