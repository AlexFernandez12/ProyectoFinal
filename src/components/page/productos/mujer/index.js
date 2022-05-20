import React, {useContext} from 'react'
import { DataContext } from "context/DataProvider";
import { ProductoItemMujer } from './ProductoItemMujer';

export const ProductosListMujer = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">PRODUCTOS</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemMujer 
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
