import React from 'react';
import './App.css';
import { Greet } from './component/greet';
import { Person } from './component/person';
import { Status } from './component/status';
import { Heading } from './component/heading';
import { Oscar } from './component/oscar';
import { Button } from './component/button';
import Calclator from './component/calculator';



function App() {
  const personname = {
    first: 'brukey',
    last: 'wayne'
  }

  const namelist = [
    {
      first: 'bruce',
      last: 'wayne'
    },
    {
      first: 'clark',
      last: 'kent '
    },
    {
      first: 'prince',
      last: 'john'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet name='arya' islogg={false}/> */}
        {/* <Person name={namelist}/> */}
        {/* <Status status='success'/> */}
        {/* <Heading>
          sum
        </Heading> */}
        {/* <Oscar>
          <Heading>oscar goes to leonardo
          </Heading>
        </Oscar> */}

        {/* <Button handleclick={(event)=>{
          console.log('clicked',event)
      
        }}/> */}
        <Calclator/>
      </header>
    </div>
  );
}

export default App;
