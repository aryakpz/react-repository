import logo from './logo.svg';
import './App.css';
import { Usestate } from './components/usestate/usestate';
import { Usereducer } from './components/usereducer/usereducer';
import { Objectstate } from './components/immutable';
import { Arraystate } from './components/usestate/array';
import { Parent } from './components/parent';
import { Child } from './components/child';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Usestate/> */}
          {/* <Usereducer/> */}
        {/* <Objectstate/> */}
        {/* <Arraystate/> */}
        <Parent>
          <Child/>
        </Parent>
      </header>
    </div>
  );  
}
 
export default App;   