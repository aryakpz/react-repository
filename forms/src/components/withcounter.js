
import React from "react";
import { Component } from "react";

const  Withcounter=(Wrappedcomp,number)=>{
    class Withconter extends React.Component{

        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
    
        increment = () => {
            this.setState(prev => {
                return { count:prev.count +number}
                
            })
        }
    
        render(){
            return(
                <Wrappedcomp  count={this.state.count} increment={this.increment}
                {...this.props} />
            )
        }
    }

 return Withconter
}


export  default  Withcounter;