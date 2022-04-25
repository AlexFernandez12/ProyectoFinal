import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login'
 
 
export default function App(){
  return (
  <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
};

 
