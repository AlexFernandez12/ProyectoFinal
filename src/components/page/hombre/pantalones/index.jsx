import React, {useContext} from 'react'
import { DataContextHombrePantalones } from "components/page/hombre/pantalones/context/DataProviderHombrePantalones";
import { ProductoItemHombrePantalones } from "./ProductoItemHombre";

export const HombrePantalones = () => {
	const value = useContext(DataContextHombrePantalones)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Pantalones</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemHombrePantalones 
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