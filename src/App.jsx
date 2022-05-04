import "./App.scss";
import React from "react";
import Home from "./components/Home";
import { CartProvider } from "./context/CartContext";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Menu from './components/menu'
import Inicio from './paginas/inicio';
import Tienda from './components/Home/index'

export default function App(){
  return (
  <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Inicio/> } />
        <Route path="login" element={<Login />} />
        <Route path='/home' element={<CartProvider><Home /></CartProvider>} />
      </Routes>
  </BrowserRouter>
  )
};

