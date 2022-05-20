import React from 'react'
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";
import {Footer} from "./components/Footer";
import Login from "./components/Login/Login.js";
import {DataProviderHombrePantalones} from './components/page/Tienda/hombre/pantalones/context/DataProviderHombrePantalones';
import {DataProviderHombreCamisetas} from './components/page/Tienda/hombre/camisetas/context/DataProviderHombreCamisetas';
import { DataProviderHombreSudadera } from 'components/page/Tienda/hombre/sudadera/context/DataProviderHombreSudadera';
import { DataProviderHombreZapatos } from 'components/page/Tienda/hombre/zapatos/context/DataProviderHombreZapatos';

import {DataProviderMujerPantalones} from './components/page/Tienda/mujer/pantalones/context/DataProviderMujerPantalones';
import {DataProviderMujerCamisetas} from './components/page/Tienda/mujer/camisetas/context/DataProviderMujerCamisetas';
import { DataProviderMujerSudadera } from 'components/page/Tienda/mujer/sudadera/context/DataProviderMujerSudadera';
import { DataProviderMujerZapatos } from 'components/page/Tienda/mujer/zapatos/context/DataProviderMujerZapatos';

import {DataProviderNinosPantalones} from './components/page/Tienda/ninos/pantalones/context/DataProviderNinosPantalones';
import {DataProviderNinosCamisetas} from './components/page/Tienda/ninos/camisetas/context/DataProviderNinosCamisetas';
import { DataProviderNinosSudadera } from 'components/page/Tienda/ninos/sudadera/context/DataProviderNinosSudadera';
import { DataProviderNinosZapatos } from 'components/page/Tienda/ninos/zapatos/context/DataProviderNinosZapatos';
import {DataProviderAccesorios} from './components/page/Tienda/accesorios/context/DataProviderAccesorios';

function App() {

  return (
    <DataProvider>
    <DataProviderHombrePantalones>
    <DataProviderHombreCamisetas>
    <DataProviderHombreSudadera>
    <DataProviderHombreZapatos>
    <DataProviderMujerPantalones>
    <DataProviderMujerCamisetas>
    <DataProviderMujerSudadera>
    <DataProviderMujerZapatos>
    <DataProviderNinosPantalones>
    <DataProviderNinosCamisetas>
    <DataProviderNinosSudadera>
    <DataProviderNinosZapatos>
    <DataProviderAccesorios>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Pages />
      <Footer />
      </Router>
    </div>
    </DataProviderAccesorios>
    </DataProviderNinosZapatos>
    </DataProviderNinosSudadera>
    </DataProviderNinosCamisetas>
    </DataProviderNinosPantalones>
    </DataProviderMujerZapatos>
    </DataProviderMujerSudadera>
    </DataProviderMujerCamisetas>
    </DataProviderMujerPantalones>
    </DataProviderHombreZapatos>
    </DataProviderHombreSudadera>
    </DataProviderHombreCamisetas>
    </DataProviderHombrePantalones>
    </DataProvider>
  );
}

export default App;
