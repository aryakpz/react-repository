import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Data from './hooks/data1';
// import Countertwo from './usereducer/comp2';
import Parentcomp from './hooks/parent';
import Memos from './hooks/memo';
import Focus from './usereducer/focus';
import Classtimer from './usereducer/classtimer';
import Hooktimer from './usereducer/hook';
import Custom from './customhook/custom';
import Custom2 from './customhook/custome2';
import Counterone from './customhook/counter';
import Countertwo from './customhook/counter';
import Form1 from './customhook/form1';
function App() {

  return(

    <div className="App">
    <header className="App-header">

    <div>
      {/* <Data/> */}
      {/* <Countertwo/> */}
      {/* <Parentcomp/> */}
      {/* <Memos/> */}
      {/* <Focus/> */}
      {/* <Classtimer/> */}
      {/* <Hooktimer/> */}
      {/* <Custom/> */}
      {/* <Custom2/>  */}
      {/* <Counterone/> */}
      {/* <Countertwo/> */}
      <Form1/>
       
    </div>

    
    </header>
    </div>
  )

}
  
export default App;                    
    