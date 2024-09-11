import React from "react";
import Input from "./input";

class Focusinput extends React.Component{

    constructor(props){
        super(props)
        this.component=React.createRef()
    }

    clikcev=()=>{
        console.log("fn")
        this.component.current.focuse()
    }
    render(){
        return( 
            <div>
               <Input ref={this.component}></Input>
            <button onClick={this.clikcev}>focus input</button>
            </div>
        )
    }
}



export default Focusinput;