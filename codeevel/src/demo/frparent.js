
import React from "react";
import Frinput from "./frinput";

class Frparent extends React.Component
{
    constructor(props){
        super(props)
        this.component=React.createRef()
    }

    clickev=()=>{
        console.log('ji')
        this.component.current.focus()
        
    }
    render(){
        return(
            <div>
            <Frinput ref={this.component}></Frinput>
            <button onClick={this.clickev}> click</button>
            </div>
        )
    } 
}
  
export default Frparent;  