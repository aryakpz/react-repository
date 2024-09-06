
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Listitem from './list/Listitem';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <div className='app'>
    <div className='header'>
      <span className='titile'>Code malayalam</span>
      <span>Home</span>
      <span>Usage</span>
      <span>Setting</span>
      <span>Logout</span>
    </div>
    <div className='body'>
      <div className='list'>
        <Listitem></Listitem>
        <Listitem></Listitem>      
        <Listitem></Listitem>
        <Listitem></Listitem>
      </div>
    </div>
    <div className='footer'>
      copyright @ codemalyalam.in all right reserved
    </div>
  </div>          
);
            
reportWebVitals();                                                                                                                       