import React from 'react'
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import {DataProviderHombrePantalones} from './components/page/hombre/pantalones/context/DataProviderHombrePantalones';
import {DataProviderHombreCamisetas} from './components/page/hombre/camisetas/context/DataProviderHombreCamisetas';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";
import {Footer} from "./components/Footer";
import Login from "./components/Login/Login.js";
import { DataProviderHombreSudadera } from 'components/page/hombre/sudadera/context/DataProviderHombreSudadera';
import { DataProviderHombreZapatos } from 'components/page/hombre/zapatos/context/DataProviderHombreZapatos';

function App() {

  return (
    <DataProvider>
    <DataProviderHombrePantalones>
    <DataProviderHombreCamisetas>
    <DataProviderHombreSudadera>
    <DataProviderHombreZapatos>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Pages />
      <Footer />
      </Router>
    </div>
    </DataProviderHombreZapatos>
    </DataProviderHombreSudadera>
    </DataProviderHombreCamisetas>
    </DataProviderHombrePantalones>
    </DataProvider>
  );
}

export default App;
