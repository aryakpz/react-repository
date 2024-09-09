
import React from "react";
import Header from "../components/Header";
import Home from "./Home";
import Footer from "../components/Footer";
import Dummy from "./Dummy";
import Usage from "./Usage";

class Myapp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            crnselect: 'home'
        }
    }

    getpage() {
        const {
            crnselect
        } = this.state


        switch (crnselect) {   
            case 'home': return <Home />  
            case 'usage': return <Usage key="use" name="usage"/>   
            case 'settings': return <Dummy key="set" name="setting" />  
            case 'logout': return <Dummy key="log" name="logout" />   

            default: break;
        }
    }


    menuselect = (value) => {
        console.log(value)
        this.setState({
            crnselect: value
        })

    }

    render() {
        return (
            <div className='app'>
                <Header onselect={this.menuselect} />
                <div className='body'>
                    {/* <Home /> */}

                     {this.getpage()} 
                </div> 
                <Footer /> 
            </div> 
        )    
    } 
}  
   
export default Myapp;      