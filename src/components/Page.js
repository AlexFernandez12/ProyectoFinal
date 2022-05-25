import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/Tienda";
import  Servicios  from "./page/servicios";
import Login from "./Login/Login";
import D from "./page/inicio/index"

import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";

import { ProductosListHombre } from "./page/productos/hombre";
import { ProductosDetallesHombre } from "./page/productos/hombre/ProductosDetallesHombre";

import { ProductosDetallesMujer } from "./page/productos/mujer/ProductosDetallesMujer";
import { ProductosListMujer } from "./page/productos/mujer";

import Hombre from "./page/Tienda/hombre/index.jsx";
import {ProductosDetallesHombreCamisetas} from "./page/Tienda/hombre/camisetas/ProductosDetallesHombre";
import {ProductosDetallesHombrePantalones} from "./page/Tienda/hombre/pantalones/ProductosDetallesHombre";
import {ProductosDetallesHombreSudadera} from "./page/Tienda/hombre/sudadera/ProductosDetallesHombreSudadera";
import {ProductosDetallesHombreZapatos} from "./page/Tienda/hombre/zapatos/ProductosDetallesHombreZapatos";
import {HombrePantalones} from "./page/Tienda/hombre/pantalones/index";
import { HombreCamisetas } from "./page/Tienda/hombre/camisetas";
import { HombreSudadera } from "./page/Tienda/hombre/sudadera";
import { HombreZapatos } from "./page/Tienda/hombre/zapatos";

import Mujer from "./page/Tienda/mujer/index.jsx";
import {ProductosDetallesMujerCamisetas} from "./page/Tienda/mujer/camisetas/ProductosDetallesMujer";
import {ProductosDetallesMujerPantalones} from "./page/Tienda/mujer/pantalones/ProductosDetallesMujer";
import {ProductosDetallesMujerSudadera} from "./page/Tienda/mujer/sudadera/ProductosDetallesMujerSudadera";
import {ProductosDetallesMujerZapatos} from "./page/Tienda/mujer/zapatos/ProductosDetallesMujerZapatos";
import {MujerPantalones} from "./page/Tienda/mujer/pantalones/index";
import { MujerCamisetas } from "./page/Tienda/mujer/camisetas";
import { MujerSudadera } from "./page/Tienda/mujer/sudadera";
import { MujerZapatos } from "./page/Tienda/mujer/zapatos";

import Ninos from "./page/Tienda/ninos/index.jsx";
import {ProductosDetallesNinosCamisetas} from "./page/Tienda/ninos/camisetas/ProductosDetallesNinos";
import {ProductosDetallesNinosPantalones} from "./page/Tienda/ninos/pantalones/ProductosDetallesNinos";
import {ProductosDetallesNinosSudadera} from "./page/Tienda/ninos/sudadera/ProductosDetallesNinosSudadera";
import {ProductosDetallesNinosZapatos} from "./page/Tienda/ninos/zapatos/ProductosDetallesNinosZapatos";
import {NinosPantalones} from "./page/Tienda/ninos/pantalones/index";
import { NinosCamisetas } from "./page/Tienda/ninos/camisetas";
import { NinosSudadera } from "./page/Tienda/ninos/sudadera";
import { NinosZapatos } from "./page/Tienda/ninos/zapatos";

import { Accesorios } from "./page/Tienda/accesorios";
import { ProductosDetallesAccesorios } from "./page/Tienda/accesorios/ProductosDetallesAccesorios";

import Pago from "./page/Tienda/pasarela_pago/pago";



export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={D} />
        <Route path="/login" exact component={Login} />
        <Route path="/inicio" exact component={Inicio} />
        <Route path="/contacto" exact component={Servicios} />

				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />

        <Route path="/hombre" exact component={Hombre} />
        <Route path="/hombre/producto" exact component={Hombre} />
        <Route path="/hombre/pantalones" exact component={HombrePantalones} />
        <Route path="/hombre/camisetas" exact component={HombreCamisetas} />
        <Route path="/hombre/sudadera" exact component={HombreSudadera} />
        <Route path="/hombre/zapatos" exact component={HombreZapatos} />
        <Route path="/hombre/camisetas/:id" exact component={ProductosDetallesHombreCamisetas} />
        <Route path="/hombre/pantalones/:id" exact component={ProductosDetallesHombrePantalones} />
        <Route path="/hombre/sudadera/:id" exact component={ProductosDetallesHombreSudadera} />
        <Route path="/hombre/zapatos/:id" exact component={ProductosDetallesHombreZapatos} />

        <Route path="/mujer" exact component={Mujer} />
        <Route path="/mujer/pantalones" exact component={MujerPantalones} />
        <Route path="/mujer/camisetas" exact component={MujerCamisetas} />
        <Route path="/mujer/sudadera" exact component={MujerSudadera} />
        <Route path="/mujer/zapatos" exact component={MujerZapatos} />
        <Route path="/mujer/camisetas/:id" exact component={ProductosDetallesMujerCamisetas} />
        <Route path="/mujer/pantalones/:id" exact component={ProductosDetallesMujerPantalones} />
        <Route path="/mujer/sudadera/:id" exact component={ProductosDetallesMujerSudadera} />
        <Route path="/mujer/zapatos/:id" exact component={ProductosDetallesMujerZapatos} />


        <Route path="/ninos" exact component={Ninos} />
        <Route path="/ninos/pantalones" exact component={NinosPantalones} />
        <Route path="/ninos/camisetas" exact component={NinosCamisetas} />
        <Route path="/ninos/sudadera" exact component={NinosSudadera} />
        <Route path="/ninos/zapatos" exact component={NinosZapatos} />
        <Route path="/ninos/camisetas/:id" exact component={ProductosDetallesNinosCamisetas} />
        <Route path="/ninos/pantalones/:id" exact component={ProductosDetallesNinosPantalones} />
        <Route path="/ninos/sudadera/:id" exact component={ProductosDetallesNinosSudadera} />
        <Route path="/ninos/zapatos/:id" exact component={ProductosDetallesNinosZapatos} />
        
        <Route path="/accesorios" exact component={Accesorios} />
        <Route path="/accesorios/:id" exact component={ProductosDetallesAccesorios} />

        <Route path="/pago" exact component={Pago} />


        <Route path="/productos/hombre" exact component={ProductosListHombre} />
        <Route path="/productos/hombre/:id" exact component={ProductosDetallesHombre} />
			</Switch>
    </section>
  );
}
