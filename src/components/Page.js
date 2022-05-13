import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import  Servicios  from "./page/servicios";
import Login from "./Login/Login";
import { ProductosListHombre } from "./page/productos/hombre";
import { ProductosDetallesHombre } from "./page/productos/hombre/ProductosDetallesHombre";
import { ProductosDetallesMujer } from "./page/productos/mujer/ProductosDetallesMujer";
import { ProductosListMujer } from "./page/productos/mujer";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
        <Route path="/login" exact component={Login} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path="/productos/hombre" exact component={ProductosListHombre} />
        <Route path="/productos/hombre/:id" exact component={ProductosDetallesHombre} />
        <Route path="/productos/mujer" exact component={ProductosListMujer} />
        <Route path="/productos/mujer/:id" exact component={ProductosDetallesMujer} />
        <Route path="/servicios" exact component={Servicios} />
			</Switch>
    </section>
  );
}
