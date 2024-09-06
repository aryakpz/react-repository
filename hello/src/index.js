import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import List from './list/list';
import Header from './components/header';
import Footer from './components/footer';
import Mainlist from './list/mainlist';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='app'>
    <div className='head'>
      <Header />
    </div>
    <div className='body'>
    
          <Mainlist />

    </div>
    <hr />
    <Footer />
  </div>
);
