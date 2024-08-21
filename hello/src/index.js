import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import List from './list/list';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='app'>
    <div className='head'>
      <span className='titile'> REACT CODE</span>
      <span>Home</span>
      <span>Usage</span>
      <span>Setting</span>
      <span>Logout</span>
    </div>
    <div className='body'>
      <div className='list'>
        <div className='item'>
        
           <List />
       
          <hr />
          <div className='lt'>
            title two
          </div>
          <div className='ld'>
            <span>label 1</span>
            <span>label 2</span>
            <span>label 3</span>
          </div>
          <hr />
          <div className='lt'>
            title three
          </div>
          <div className='ld'>
            <span>label 1</span>
            <span>label 2</span>
            <span>label 3</span>
          </div>
          <hr />
          <div className='lt'>
            title four
          </div>
          <div className='ld'>
            <span>label 1</span>
            <span>label 2</span>
            <span>label 3</span>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className='footer'>
      copyright@ reactcode.in.all reversed
    </div>
  </div>
);
       