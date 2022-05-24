import React from 'react'
import { Link } from "react-router-dom";

export default function Inicio() {
    return (
        <div className="inicio">
            <div className='caja1'>
                <Link to="/productos">
                    <img src="https://i.ibb.co/bPmVXyP/black-converse.png"></img>
                    <h1>Productos</h1>
                </Link>
                <Link to="/hombre">
                    <img src='https://i.ibb.co/55z32tw/long-sleeve.png'></img>
                    <h1>Hombre</h1>
                </Link>
            </div>
            <div className='caja2'>
                <Link to="/mujer">
                    <img src='https://i.ibb.co/4W2DGKm/floral-blouse.png'></img>
                    <h1>Mujer</h1>
                </Link>
                <Link to="/ninos">
                    <img src='https://media.mayoral.com/wcsstore/mayoral/images/Attachment/ropa-bebe-nina-vestidos-color-myrl-v22-mayo.jpg'></img>
                    <h1>Niños</h1>
                </Link>
                <Link to="/accesorios">
                    <img src='https://i.ibb.co/ZYW3VTp/brown-brim.png'></img>

                    <h1>Accesorios</h1></Link>
            </div>

        </div>
    )
}
