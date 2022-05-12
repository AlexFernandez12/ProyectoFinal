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
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAZlBMVEUAAAD////Kysrz8/M6Ojrk5OQgICAICAj8/Pz5+fm0tLT29vawsLDw8PDT09PPz881NTXb29ssLCyqqqq6urqRkZFZWVmgoKBHR0eDg4MZGRlRUVFubm4/Pz9mZmaKiop3d3cSEhK2BRFlAAAE6klEQVR4nO1b7XKqMBQkKopFqlJrFavV93/JKxuQkI1w8PYmM3fYHx0GLKyb87E5pVE0YsSIESNGhMFtFppBFG2y0AyiaKc+Q1M4pCrLA3NYKaW+wlLIkzuHbBOUw5sq8RGSAmRQKgkZESulsQpH4bysOKhwheqtpqB2oSjM0geH5BSIw0o1WIehMFcmLkE4rFoc3kNQyJctDmofgMNbm4La+qdwSC0O6uqdw8qmoLY3zxSqTtHC0TMHOxpKTP1SyB0UlGdX92E/PsMPnxTOS5vCKfUtBEXDV/QFKv5c3dmuDek8inDgz9VRbSidNYSY+hKioIDEaYSlLzNDMmgOPziW2tvb4jXoYryxk6JqFUVcHr4JOXwsp68gjd0yKKUvXHF8lnFwfBMRkP7cMO/4wX235eFEKsRLFHQ/cHUKFecPIRKhq5tNX+GAvS01zAyiaiEQEVJ7+0UPSLZxD95zpwxHXRiK8uIFZ4RCFBmRmBXzbuApc/vXsijPHiJF6/JQ6uo+iYOsulBS/NSi4vJ+iBARCyFJKuoU8b1TmEJMhghxfEkIigbEIkRN0So2OCt1dbF9u6R/h3Cw8ylD6bzhtO6ZO6izkHG4khD91YWioTItEGKKxTwkD3kEeCcSfbHkSIoKRs/EcqVCDhfi0LdndEdDCfTMBJMQvV5SV7clEt1TBCqRzbLfjJ6JRjCdyzjsBwrBJbK5pqMLqTFH/kqHlhMi8d3xaWqYcdFcXEBUHRHa3gpHVHvasHVVF0qKVhX4Ls9UIyF0Mam9ZSGuTz9LpsPa0SAidHojVZdCezsjDs+3Sl3RUAJC6PRexM3C9GNHJJ6VWaoNsf0J1Bsd1boRSF0dcaBbV+iOhhJaCEREMUgINqhXN1k7GhwtAeZhbfA5yDjk1MNjZ3WhaHBk8QEXdMHfNnz6wa7OVWapYTqXDGmmI0KnqtDMsBCZo/H2R0OJvbGY24ZPP9jVcZmlscuTyJ001/bPVswJ8vkJfYSi4eq+1WnZaDTI1fULQTI8vfWuEeLURZZAEWE3XqkMdWroy4OEYFfX7jfUMDtujODVDVXXP6mrIzMzbZVZSW2oURgPxsJIZ3Xs6kwhZuQbuu4FwjHs9mHQrI6ESIzGK4+GEvpPCvrBWBipvWVX1/Qbapg9YQY7ucSh3t5LXR37/IcQVCJ76s7M2PkNmtVxRNRCbGy/15tteHCKiFjgl6WujsxM/ddCutDbh26GEHonKjQzJxpRaWtItUHQhvDgyleDj3RWx0JgCzw0GoC0WYFBQ0sKf3xjeacwYfjqYfaWXd1+WIlsYE5LdSMQujoeWq7Z8gpNibkCfzm0PNApJMV81oezXoH8fpgfa00lcLg6+wy+zoImOAK8bmZs4Ntwq5dA6OrmPKtrA9FQ8NhCAqkQPz33uUg+9Awv29sWdFLs1pNXsJZ2je7v6Ok1i66Q9/W6yXcHB2+v3bCZqSEtdX8PNjPeZaiGCAGjoQTbW0AwUP9FuIXwFw0leGhZwvObRzyr8y1D/ReINoQ+6PfArs63DI53C3zWhhq2hfMvw93etnu439pQ4yO4DLa99Z4UGqa9DfW+7sIQQrhr/n00ri5MNAC1EMtA0VDiGDgaAL2VCfbyNnAJL0NlZsL+ewdcXWAZ4POD//PVSTxQ+4fYBWmYbQjfahkxYsSIEf8Z/gAVFzfowwPm+QAAAABJRU5ErkJggg==" alt="Nike" width="150" />
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
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="shopping-bag"></box-icon>
        <span className="item__total">Carrito {carrito.length} </span>
      </div>
      <div className="log">
      <Link to="/login">Sign up</Link>
     </div>
    </header>
  );
};
