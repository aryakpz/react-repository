
import React, { Component } from "react";

class Classtimer extends Component{

   interval
   constructor(props){
    super(props)

    this.state ={
        timer:0
    }
   }

  componentDidMount(){
    this.interval=setInterval(()=>{
        this.setState(prevstate =>({timer:prevstate.timer + 1}))
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

   render(){
    return(
        <div>
           class timer - {this.state.timer}
           <div> </div>
           <button onClick={()=> clearInterval(this.interval)}> class timer</button>
        </div> 
    )}
  }

export default Classtimer