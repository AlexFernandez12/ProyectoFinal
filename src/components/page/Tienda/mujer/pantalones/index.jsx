import React, {useContext} from 'react'
import { DataContextMujerPantalones } from "components/page/Tienda/mujer/pantalones/context/DataProviderMujerPantalones";
import { ProductoItemMujerPantalones } from "./ProductoItemMujer";

export const MujerPantalones = () => {
	const value = useContext(DataContextMujerPantalones)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Pantalones</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemMujerPantalones 
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