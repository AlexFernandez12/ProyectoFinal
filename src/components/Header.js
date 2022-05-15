import React, {useContext, useState} from "react";
import {DataContext} from "context/DataProvider";
import {Link } from "react-router-dom";
// import Logo from "images/lobo.svg";
import Dropdown from "./Dropdown";
import {BiCart} from "react-icons/bi";
import "./Navbar.css"

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
      <div className="logo">
        <img src=""/>
      </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/productos'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Productos <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        <li>
        <Link to="/servicios">Contacto</Link>
        </li>
        <li>
        <Link to="/login">Iniciar sesión</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <BiCart size="40"  color="#fff"/>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
