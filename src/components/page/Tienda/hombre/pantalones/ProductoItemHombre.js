import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContextHombrePantalones } from "components/page/Tienda/hombre/pantalones/context/DataProviderHombrePantalones";

export const ProductoItemHombrePantalones = ({title, image, category, price, id}) => {

  const value = useContext(DataContextHombrePantalones);
  const addCarrito = value.addCarrito;



  return (
    
    <div key={id} className="producto">
      <Link to={`/hombre/${id}`}>
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">{price}€ </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
        <div>
        <Link to={`/hombre/pantalones/${id}`} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};

