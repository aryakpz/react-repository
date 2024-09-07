
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './list/List';
// import Listitem from './list/Listitem';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <div className='app'>
    <Header />
    <div className='body'>
     <List/>
    </div>

    <Footer />
    
  </div>          
);
            
reportWebVitals();                                                                                                                       