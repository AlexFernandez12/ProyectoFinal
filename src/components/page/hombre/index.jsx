import React from 'react'
import { Link } from "react-router-dom";
import "../../../index.css";

export default function index() {
  return (
    <div className="inicio">
        <div className='caja1'>
            <div className='categoria'>
                <Link to="/hombre/camisetas">
                    <img className='camisetas' src="https://olecool.com/wp-content/uploads/2019/02/camiseta-logo-triband-frontal.jpg"></img>
                    <h1>Camisetas</h1>
                </Link>
            </div>
            <div className='categoria'>
                <Link to="/hombre/sudadera">
                    <img src='https://www.sharkersco.com/wp-content/uploads/2018/10/Sudadera-azul-celeste-2-1.jpg'></img>
                    <h1>Sudaderas</h1>
                </Link>
            </div>
        </div>
        <div className='caja2'>
            <div className='categoria'>
                <Link to="/hombre/pantalones">
                    <img src='https://http2.mlstatic.com/D_NQ_NP_777057-CBT47947783428_102021-W.jpg'></img>
                    <h1>Pantalones</h1>
                </Link>
            </div>
            <div className='categoria'>
                <Link to="/hombre/zapatos">
                    <img src='https://i.blogs.es/0b3285/viceversaoriginal_247464730_428421981990015_7036485657960053032_n/375_375.jpeg'></img>
                    <h1>Zapatos</h1>
                </Link>
            </div>
            <div className='categoria'>
                <Link to="/productos/mujer">
                    <img src='https://i.ibb.co/ZYW3VTp/brown-brim.png'></img>
                    <h1>Accesorios</h1>
                </Link>
            </div>
        </div>

</div>
  )
}


