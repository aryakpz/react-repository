
import React from "react";
import Header from "../components/Header";
import Home from "./Home";
import Footer from "../components/Footer";

class Myapp extends React.Component {

    constructor(props){
        super(props)
        this.state={
            crnselect:'home'
        }
    }
  
    getpage(){
        const{
            crnselect
        }=this.state
    }
   

    menuselect(value) {
        console.log("click")
        this.setState({
            crnselect:value
        })
    }

    render() {
        return (
            <div className='app'>
                <Header onselect={this.menuselect} />
                <div className='body'>
                    <Home />
                </div>
                <Footer />
            </div>
        )
    }
}
 
export default Myapp; 


















