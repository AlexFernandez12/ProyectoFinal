import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";
import { ProductsData } from "../../Data/ProductsData";

const Productos = () => {
  /* Traemos del context la funcion para agregar un producto */
  const {addItemToCart}  = useContext(CartContext);

  return (
    <div className={styles.productsContainer}>
      {ProductsData.map((product, i) => (
          <div key={i} className={styles.product}>
            <img src={product.img} alt={product.name} />
            <div>
              <p>
                {product.name} - ${product.price}
              </p>
            </div>
            {!product.inCart ? (
              <button onClick={() => addItemToCart(product)}>
                Añadir al Carrito
              </button>
            ) : (
              <button>En el carrito</button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Productos;
