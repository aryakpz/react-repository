
import React from "react";
import Regular from "./regcomp";
import Pure from "./purecomponenet";
import { Component } from "react";
import Memo from "./memo";

class Parentcomp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"arya"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"ary"                 
            })
        },2000)

     
    }
    render()
    {
        console.log("=========parent comp ===========")
        return(
            <div>parent component
                {/* <Regular name={this.state.name}></Regular> */}
                {/* <Pure name={this.state.name}></Pure> */}

                <Memo name={this.state.name}></Memo>
            </div>
        )
    }
}
    
export default Parentcomp;