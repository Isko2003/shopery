import React from 'react'
import { Routes, Route, Router } from 'react-router-dom';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';

const Routing = () => {
  return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/about' element={<AboutUs />}/>
            <Route path='/contact' element={<ContactUs />}/>
        </Routes>
  )
}

export default Routing