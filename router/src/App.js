
import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Home } from './component/home';

// import { About } from './component/about';
import { Navbar } from './component/nav';
import { Contact } from './component/contact';
import { Order } from './component/order';
import { Nomatch } from './component/nomatch';
import { Product } from './component/products';
import { Featured } from './component/feature';
import { Newpro } from './component/newpro';
import { User } from './component/users';
import { Details } from './component/details';
import { Admin } from './component/admin';
import React from 'react';
import { Profile } from './component/profile';
import { Authprovider } from './component/auth';
import { Login } from './component/login';
import { userAuth } from './component/auth';
const Lazy = React.lazy(() =>
  import('./component/about'))
 
function App() {
  return (

    <div className="App">
      <Authprovider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<React.Suspense fallback='Loading'><Lazy /></React.Suspense>}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='order' element={<Order />}></Route>
          <Route path='*' element={<Nomatch />} />
          <Route path='products' element={<Product />}>
            <Route index element={<Featured />}></Route>
            <Route path='feature' element={<Featured />}></Route>
            <Route path='newpro' element={<Newpro />}></Route>
          </Route>
          <Route path='users' element={<User />} >
            <Route path='admin' element={<Admin />}></Route>
            <Route path=':userId' element={<Details />}></Route>
          </Route>

          <Route path='profile' element={<Profile />}> </Route>

          <Route path='login' element={<Login/>}></Route>
        </Routes>
        {/* <button onClick={<Order/>}>order</button> */}
      </Authprovider>
    </div>
  );    
}

export default App; 