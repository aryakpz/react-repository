
import React from "react";

class Form extends React.Component {

    constructor (props){
        super(props)
        this.state={
            username :'',
            comment:'',
            topic:'' 
        } 
    } 
       
    changename=(evnt)=>{
        this.setState({
            username:evnt.target.value,
        })
    }
  
    changecomment=(evnt)=>{
        this.setState({
            comment:evnt.target.value
        })                          
    }    
          
    changevalue=(evnt)=>{            
           this.setState({
            topic:evnt.target.value
           })
    }

    clickevent=(evnt)=>{
        // console.log(this.username)
        alert(` ${this.state.username}  ${this.state.comment}  ${this.state.topic}`)
        evnt.preventdefault()
    }

    render() { 
        const {username,comment,topic}=this.state
        return (
            <form onSubmit={this.clickevent}>
                <div>   
                    <lable>username</lable>
                    <input type="text" value={username} onChange={this.changename}></input>
                </div>   
                <div> 
                    <label>comments</label>
                    <textarea value={comment} onChange={this.changecomment} ></textarea>
                </div>
                <select value={topic} onChange={this.changevalue}>
                    <option value="react">react</option>
                    <option value="java">java</option>
                    <option value="angular">angular</option>
                </select>

                <button type="submit">submit</button>
            </form>  
        )  
    }
}      
     
export default Form;