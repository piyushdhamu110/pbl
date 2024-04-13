import React, { useState } from 'react';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BuyerSignUp from './pages/Signup/BuyerSignUp';
import SellerSignUp from './pages/Signup/SellerSignUp';
import Signup from './pages/Signup/Signup';
import CreateProduct from './pages/Seller/CreateProduct';
import PreviewProduct from './pages/Seller/PreviewProduct';
import SingleProduct from './pages/SingleProduct';

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup/buyer' element={<BuyerSignUp />} />
          <Route path='/signup/seller' element={<SellerSignUp />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/seller/create-product' element={<CreateProduct />} />
          <Route path='/seller/preview-product' element={<PreviewProduct />} />
          <Route path='/:productId' element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
