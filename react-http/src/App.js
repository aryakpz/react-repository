
import logo from './logo.svg';
import React, { useReducer } from 'react';
import './App.css';
import Postlist from './component/list';
import Postform from './component/post';
import Classcounter from './hooks/classcounter';
import Hookcounter from './hooks/functioncounter';
import Counter from './hooks/counter';
import Hook4 from './hooks/hook4';
import Use from './hooks/useeffect';
import Mouse from './hooks/mouse';
import Increment from './hooks/increment';
import Datafetch from './hooks/fetchapi';
import Context from './hooks/contexthook';  
import { userContext } from 'react'
import Reducercount from './hooks/reducercount';
import Reducertwo from './hooks/rendertwo';
import Coma from './both/a';
import Comb from './both/b';
import Comc from './both/c';
                    
export const cont = React.createContext()
export const channel = React.createContext()
 
export const countcontext =React.createContext()
const init = 0
const reducer = (state, action) => {
  switch (action) {       
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return init;
    default: return state;
  }
}        

function App() {         
  const [count,dispatch]=useReducer(reducer,init)
  return ( 
    <countcontext.Provider value={{countstate:count,countdispatch:dispatch }}>
    <div className="App">
      <header className="App-header">

        count -{count}
          
        <Coma />    
        <Comb />         
        <Comc />

      </header>                                                     
    </div>

    </countcontext.Provider>
  );      
}   
               
export default App; 

//  {/* <Postlist></Postlist> */}
//         {/* <Postform></Postform> */}
//         {/* <Classcounter></Classcounter> */}
//         {/* <Hookcounter></Hookcounter> */}
//         {/* <Counter/> */}
//         {/* <Hook4/> */}
//         {/* <Use/> */}
//         {/* <Mouse /> */}
//         {/* <Increment/> */}
//         {/* <Datafetch/> */}

//         {/* <cont.Provider value={"arya"}>
//           <channel.Provider value={"santhosh"}>  
//              <Context />
//           </channel.Provider>
//         </cont.Provider> */}

//         {/* <Reducercount/> */}  
//         {/* <Reducertwo/>    