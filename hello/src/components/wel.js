import React from "react";
import { Component } from "react";


class Wel extends Component{
    render(){
        return<h1>class combo   {this.props.name} & {this.props.hero}</h1>
    }

}
//   functiona compnenets:== are simple fun ,absence of this keyword,solution without using state,mainly responsible for the ui, stateless/dumb/presentational

//   class:== more feature rich,maintain their own private date-state,complex ui logic,provide lifecycle hooks ,stateful,smart /container

//   jsx:== javascript xml,write xml-like code for elements and components,jsx tags have a tag name attribute,and children
           
//   props :== props get passed to the component, funtional parameter,are immutable, props- functional component, this.props =class component

//   state :== state is within the component, variables declared in the fun body, state can be changed,usestatehook-fucntitonalcomponents,this.state -class components

export default Wel;                                   