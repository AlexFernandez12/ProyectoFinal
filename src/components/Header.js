import React, { useContext, useState} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import Logo from "../images/bellaco.png";
import { BiCart } from "react-icons/bi";
import "./Navbar.css"
import { Button } from "./Login/Button";

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <>
    <nav className='navbar'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img src={Logo} className="logo"></img>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className='nav-item'
        >
          <Link
            to='/productos'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Productos <i className='fas fa-caret-down' />
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/services'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Servicios
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/contacto'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Contacto
          </Link>
        </li>
        <li>
          <Link
            to='/login'
            className='nav-links-mobile'
            onClick={closeMobileMenu}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <Button />
      <div className="cart" onClick={toogleMenu}>
        <BiCart size="40"  color="#fff"/>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </nav>
  </>
  );
};
