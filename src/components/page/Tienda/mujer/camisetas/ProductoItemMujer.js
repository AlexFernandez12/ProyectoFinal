import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContextMujerCamisetas } from "components/page/Tienda/mujer/camisetas/context/DataProviderMujerCamisetas";

export const ProductoItemMujerCamisetas = ({title, image, category, price, id}) => {

  const value = useContext(DataContextMujerCamisetas);
  const addCarrito = value.addCarrito;



  return (
    
    <div key={id} className="producto">
      <Link to={`/mujer/camisetas/${id}`}>
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
        <Link to={`/mujer/camisetas/${id}`} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};

