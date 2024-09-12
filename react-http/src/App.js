import logo from './logo.svg';
import './App.css';
import Postlist from './component/list';
import Postform from './component/post';
import Classcounter from './hooks/classcounter';
import Hookcounter from './hooks/functioncounter';
import Counter from './hooks/counter';
import Hook4 from './hooks/hook4';
import Use from './hooks/useeffect';
import Mouse from './hooks/mouse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Postlist></Postlist> */}
         {/* <Postform></Postform> */}
          {/* <Classcounter></Classcounter> */}
           {/* <Hookcounter></Hookcounter> */}
          {/* <Counter/> */}
         {/* <Hook4/> */}
        {/* <Use/> */}
        <Mouse />
      </header>
    </div>
  );
}

export default App; 
