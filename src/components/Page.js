import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import Login from "./Login/Login";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
        <Route path="/login" exact component={Login} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
			</Switch>
    </section>
  );
}
