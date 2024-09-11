import React from "react";
import Child from "./Child";


class Parent extends React.Component{

constructor(props){
        super(props)

        this.state={
            parent:"parent"
        }
    }

 greet=()=>{
   window.alert(`hello,${this.state.parent}`)
   console.log("n")
 } 
 
    render(){
        return(
          <div>
            <Child greethand={this.greet}></Child> 
          </div>    
        )
    }
}
 
export  default Parent;      