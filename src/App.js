import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Tienda from './Tienda'
 
 
export default function App(){
  return (
  <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="t" element={<Tienda />} />
    </Routes>
  </BrowserRouter>
  )
};

 
