import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../style/menu.css'

function Navbar() {
    const [abrirmenu, setAbrirMenu] = useState(false);
    const toggleNavBar = () => {
         setAbrirMenu(!abrirmenu);
    }
    return (
    <div className='navbar'>
        <div className='leftSide' id={abrirmenu ? "open" : "close"}>
            <div className='menudesplegable'>
            <Link to='/'>Inicio</Link>
            <Link to='/login'>Login</Link>
            <Link to='/Tienda'>Contacto</Link>
        </div>
    </div>
        <div className='rightSide'>
            <Link to='/'>Inicio</Link>
            <Link to='/login'>Login</Link>
            <Link to='/home'>Tienda</Link>
            <button onClick={toggleNavBar}>
               
            </button>
        </div>
    </div>
  )
}

export default Navbar