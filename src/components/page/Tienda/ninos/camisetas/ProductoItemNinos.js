import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContextNinosCamisetas } from "components/page/Tienda/ninos/camisetas/context/DataProviderNinosCamisetas";

export const ProductoItemNinosCamisetas = ({title, image, category, price, id}) => {

  const value = useContext(DataContextNinosCamisetas);
  const addCarrito = value.addCarrito;



  return (
    
    <div key={id} className="producto">
      <Link to={`/ninos/camisetas/${id}`}>
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
        <Link to={`/ninos/camisetas/${id}`} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};

