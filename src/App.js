import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Inicio from './components/pages/Inicio'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Hombre from './components/pages/hombre/componentes/Home/index';
import Consulting from './components/pages/Consulting';
import { CartProvider } from "./components/pages/hombre/context/CartContext";



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Inicio} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/hombre' element={<CartProvider><Hombre /></CartProvider>} />
        <Route path='/consulting' component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
