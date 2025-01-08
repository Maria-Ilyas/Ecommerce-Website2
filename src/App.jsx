import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Components/Footer';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import man_banner from "../src/assets/men-banner.png";
import kid_banner from "../src/assets/kid.png";
import women_banner from "../src/assets/women.png";

import { ToastContainer } from 'react-toastify';
import { auth } from './Components/firebase';
import Proceed from './Components/Proceed';

const App = () => {
  const [user,setUser] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
       setUser(user);
    });
  })
  return (
    <>
      <HashRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={user ?  <Shop /> :<Navigate to="/login"/>  } />
              <Route path='/men' element={<ShopCategory banner={man_banner} category="men"/> } />
              <Route path='/women' element={<ShopCategory banner={women_banner}  category="women"/> } />
              <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" /> } />
              <Route path='/product' element={<Product /> } />
              <Route path='/product/:productId' element={<Product /> } />
              <Route path='/login' element={<Login /> } />
              <Route path='/signup' element={<SignUp/> } />
              <Route path='/cart' element={<Cart /> }/>
              <Route path='/profile' element={<Profile /> }/>
              <Route path='/checkout' element={<Proceed />} />

          </Routes>
          <Footer />
          <ToastContainer />
      </HashRouter>
      
    </>
  )
}

export default App