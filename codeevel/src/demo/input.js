
import React from "react";
import Focusinput from "./focus";

class Input extends React.Component{

    constructor(props){
        super(props)
            this.inputRef=React.createRef()
         
    }

        focuse(){
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}
 
export default Input;     