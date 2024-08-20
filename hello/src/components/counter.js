import React, { Component } from "react";

class Counter extends Component {



    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    change(){
        this.setState({
            count:this.state.count +1
            
        },()=>{
            console.log('callback value',this.state.count)
        }
    )
        console.log("clicked")    

    }


    increment(){
        this.change()
        this.change()
        this.change()
    }
    render() {
        return (
            <div>
                <div>
                    count:{this.state.count} 
                    <button onClick={()=> this.increment()}>click</button>
                </div>
            </div>
        )
    }
}
export default Counter;