import React from "react";
import { Switch, Route} from "react-router-dom";
import  Servicios  from "./page/servicios";
import Login from "./Login/Login";
import D from "./page/inicio/index";

import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";

import Pago from "./page/Tienda/pasarela_pago/pago";



export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={D} />
        <Route path="/login" exact component={Login} />
        <Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path="/contacto" exact component={Servicios} />

        <Route path="/pago" exact component={Pago} />


			</Switch>
    </section>
  );
}
