import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">
            <div className='caja1'>
                <Link to="/productos">
                    <img src='https://img.freepik.com/foto-gratis/retrato-guapo-sonriente-elegante-hipster-lumbersexual-empresario-modelo-hombre-vestido-ropa-chaqueta-jeans_158538-1741.jpg?w=2000'></img>
                    <h1>Productos</h1>
                </Link>
                <Link to="/productos/hombre">
                    <img src='https://img.freepik.com/foto-gratis/retrato-guapo-sonriente-elegante-hipster-lumbersexual-empresario-modelo-hombre-vestido-ropa-chaqueta-jeans_158538-1741.jpg?w=2000'></img>
                    <h1>Hombre</h1>
                </Link>
            </div>
            <div className='caja2'>
                <Link to="/productos/mujer">
                    <img src='https://w0.peakpx.com/wallpaper/661/398/HD-wallpaper-model-women-backless-clothing-kate-upton.jpg'></img>
                    <h1>Mujer</h1>
                </Link>
                <Link to="/productos/niños">
                    <img src='https://previews.123rf.com/images/valendina/valendina1710/valendina171000037/88146055-modelo-ni%C3%B1o-hip-hop-girl-ni%C3%B1o-calle-moda-jeans-ropa.jpg'></img>
                    <h1>Niños</h1>
                </Link>
                <Link to="/productos/mujer">
                    <img src='https://previews.123rf.com/images/porechenskaya/porechenskaya1710/porechenskaya171000853/92551777-modelo-en-accesorios-de-moda-gargantilla-y-pulseras-moda-bot%C3%ADn.jpg'></img>

                    <h1>Accesorios</h1></Link>
            </div>

        </div>
    )
}
