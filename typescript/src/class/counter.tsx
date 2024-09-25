
import { Component } from "react";

type Counterprop={
    message:string
}

type Counterstate={
    count:number
}

export class Counter2 extends Component<Counterprop,Counterstate>{
    state ={
        count :0
    }
    
    handle =()=>{
        this.setState((prestate)=>({
            count :prestate.count +1
        }))
}
    render(){
        return(
            <div>
                <button onClick={this.handle}>increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }    
}                                   