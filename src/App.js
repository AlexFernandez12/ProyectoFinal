import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Inicio from './components/pages/Inicio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Hombre from './components/pages/g/inicio';
import Mujer from "./components/pages/mujer/componentes/Home/index"
import { CartProviderHombre } from "./components/pages/hombre/context/CartContext";
import { CartProviderMujer } from "./components/pages/mujer/context/CartContext";





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Inicio />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/hombre' element={<Hombre />} />
        <Route path='/consulting' element={<CartProviderMujer><Mujer /></CartProviderMujer>} />
      </Routes>
    </Router>
  );
}

export default App;
