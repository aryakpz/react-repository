import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import List from './list/list';
import Header from './components/header';
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='app'>
    <div className='head'>
      {/* <span className='titile' > REACT CODE</span>
      <span>Home</span>
      <span>Usage</span>
      <span>Setting</span>
      <span>Logout</span> */}
      <Header />
    </div>
    <div className='body'>
      <div className='list'>
        <div className='item'>

          <List />

          <hr />

          <List />

          <hr />

          <List />

          <hr />

          <List />

          <hr />

         

        </div>
      </div>
    </div>
    <hr />
     <Footer />
  </div>
);
