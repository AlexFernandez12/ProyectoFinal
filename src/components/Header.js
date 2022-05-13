import React, { useContext, useState} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import Nike from "images/logo.jpg";
import Dropdown from "./Dropdown";
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
        <img src="data:image/png;base64,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" />
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
        <Link to="/servicios">SERVICIOS</Link>
        </li>
        <li>
        <Link to="/login">Sign up</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="shopping-bag"></box-icon>
        <span className="item__total">Carrito {carrito.length} </span>
      </div>
    </header>
  );
};
