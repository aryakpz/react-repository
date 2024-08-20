import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Greet } from './components/Greet';
import Wel from './components/wel';  
import Hello from './components/hello';

import Message from './components/message';
import Counter from './components/counter';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Greet  name="a" hero="spiderman" />
        <p>this is children props</p>
        <Wel></Wel>
        <Greet name="b"hero="superman" />
        <button>Action</button>
        <p>i am no</p>
        <Hello></Hello>
        <Greet name="c" hero="blackman" />   
        <Wel name="zzz" hero="captian marvell"></Wel>
        <Wel name="yyy" hero="doremon"></Wel> */}

       <Counter></Counter>
        <Message></Message>
      </div>
    );
  }      
}

export default App;