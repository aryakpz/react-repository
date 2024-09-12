
import React, { Component } from "react";

class Classcounter extends Component{
    
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }   
    }
     
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })                                
     }
    
    render(){
        const{count}=this.state
        return(
           <div>
             <button onClick={this.increment}>click {count}</button>   
           </div>
        )}
}  
     
export default Classcounter;     