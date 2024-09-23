import logo from './logo.svg';
import './App.css';
import Clickcounter from './components/click';
import Hovercounter from './components/Hover';
// import Loginsign from './components/loginsignup/loginsignup';

function App() {
  return (
    <div >
     {/* <Loginsign/> */}
     <Clickcounter name="arya"/>
     <Hovercounter/>

    </div>
  );
}

export default App;
