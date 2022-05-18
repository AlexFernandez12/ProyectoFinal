import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import  Servicios  from "./page/servicios";
import Hombre from "./page/hombre/index.jsx";
import {HombrePantalones} from "./page/hombre/pantalones/index";
import Login from "./Login/Login";
import { ProductosListHombre } from "./page/productos/hombre";
import { ProductosDetallesHombre } from "./page/productos/hombre/ProductosDetallesHombre";
import { ProductosDetallesMujer } from "./page/productos/mujer/ProductosDetallesMujer";
import { ProductosListMujer } from "./page/productos/mujer";
import { HombreCamisetas } from "./page/hombre/camisetas";
import { HombreSudadera } from "./page/hombre/sudadera";
import { HombreZapatos } from "./page/hombre/zapatos";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
        <Route path="/login" exact component={Login} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/hombre" exact component={Hombre} />
        <Route path="/hombre/pantalones" exact component={HombrePantalones} />
        <Route path="/hombre/camisetas" exact component={HombreCamisetas} />
        <Route path="/hombre/sudadera" exact component={HombreSudadera} />
        <Route path="/hombre/zapatos" exact component={HombreZapatos} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path="/productos/hombre" exact component={ProductosListHombre} />
        <Route path="/productos/hombre/:id" exact component={ProductosDetallesHombre} />
        <Route path="/servicios" exact component={Servicios} />
			</Switch>
    </section>
  );
}
