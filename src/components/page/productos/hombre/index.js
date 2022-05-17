import React, {useContext} from 'react'
import { DataContext } from "context/DataProvider";
import { ProductoItemHombre } from "./ProductoItemHombre";

export const ProductosListHombre = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">PRODUCTOS</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemHombre 
									key={producto.id}
									title={producto.title}
									image={producto.image}
									category={producto.category}
									price={producto.price}
									id={producto.id}
								/>
							))
						}					
        </div>
				</>
    )
}
