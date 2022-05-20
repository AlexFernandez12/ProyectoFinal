import React, {useContext} from 'react'
import { DataContextNinosPantalones } from "components/page/Tienda/ninos/pantalones/context/DataProviderNinosPantalones";
import { ProductoItemNinosPantalones } from "./ProductoItemNinos";

export const NinosPantalones = () => {
	const value = useContext(DataContextNinosPantalones)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Pantalones</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemNinosPantalones 
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