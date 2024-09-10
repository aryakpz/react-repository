
import React from "react";
import './AddNew.css'
class AddNew extends React.Component{

  constructor(props){
    super(props);
    this.state={
        input:' '
    }
  }

  display=()=>{
    console.log(this.state.input)
  }

  change=(evnt)=>{
    const value=evnt.target.value;
    this.setState({
        input:value
    })
  }
   
    render(){
      console.log("render addnew")
        return(
            <div>
                <input onChange={this.change}/>
                <button onClick={this.display}> click</button>
         </div>
        )   
    }   
}
     
export default AddNew

            