import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/Tienda";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import  Servicios  from "./page/servicios";
import Login from "./Login/Login";
import D from "./page/Tienda"
import { ProductosListHombre } from "./page/productos/hombre";
import { ProductosDetallesHombre } from "./page/productos/hombre/ProductosDetallesHombre";
import { ProductosDetallesMujer } from "./page/productos/mujer/ProductosDetallesMujer";
import { ProductosListMujer } from "./page/productos/mujer";

import Hombre from "./page/Tienda/hombre/index.jsx";
import {HombrePantalones} from "./page/Tienda/hombre/pantalones/index";
import { HombreCamisetas } from "./page/Tienda/hombre/camisetas";
import { HombreSudadera } from "./page/Tienda/hombre/sudadera";
import { HombreZapatos } from "./page/Tienda/hombre/zapatos";

import Mujer from "./page/Tienda/mujer/index.jsx";
import {MujerPantalones} from "./page/Tienda/mujer/pantalones/index";
import { MujerCamisetas } from "./page/Tienda/mujer/camisetas";
import { MujerSudadera } from "./page/Tienda/mujer/sudadera";
import { MujerZapatos } from "./page/Tienda/mujer/zapatos";

import Ninos from "./page/Tienda/ninos/index.jsx";
import {NinosPantalones} from "./page/Tienda/ninos/pantalones/index";
import { NinosCamisetas } from "./page/Tienda/ninos/camisetas";
import { NinosSudadera } from "./page/Tienda/ninos/sudadera";
import { NinosZapatos } from "./page/Tienda/ninos/zapatos";
import { Accesorios } from "./page/Tienda/accesorios";



export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={D} />
        <Route path="/login" exact component={Login} />
        <Route path="/inicio" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />

        <Route path="/hombre" exact component={Hombre} />
        <Route path="/hombre/pantalones" exact component={HombrePantalones} />
        <Route path="/hombre/camisetas" exact component={HombreCamisetas} />
        <Route path="/hombre/sudadera" exact component={HombreSudadera} />
        <Route path="/hombre/zapatos" exact component={HombreZapatos} />

        <Route path="/mujer" exact component={Mujer} />
        <Route path="/mujer/pantalones" exact component={MujerPantalones} />
        <Route path="/mujer/camisetas" exact component={MujerCamisetas} />
        <Route path="/mujer/sudadera" exact component={MujerSudadera} />
        <Route path="/mujer/zapatos" exact component={MujerZapatos} />

        <Route path="/ninos" exact component={Ninos} />
        <Route path="/ninos/pantalones" exact component={NinosPantalones} />
        <Route path="/ninos/camisetas" exact component={NinosCamisetas} />
        <Route path="/ninos/sudadera" exact component={NinosSudadera} />
        <Route path="/ninos/zapatos" exact component={NinosZapatos} />
        
        <Route path="/accesorios" exact component={Accesorios} />

        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path="/productos/hombre" exact component={ProductosListHombre} />
        <Route path="/productos/hombre/:id" exact component={ProductosDetallesHombre} />
        <Route path="/servicios" exact component={Servicios} />
			</Switch>
    </section>
  );
}
