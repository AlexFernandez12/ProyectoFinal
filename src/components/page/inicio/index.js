import React from 'react'
import {Link} from "react-router-dom";
import Portada from "images/fondo2.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
            <Link to="/login">
            <h1>Registrate</h1>
            </Link>
            <Link to="/productos">
            <h1>Visita nuestro catálogo</h1>
            </Link>
            <img src={Portada} alt=""/>
        </div>
    )
}
