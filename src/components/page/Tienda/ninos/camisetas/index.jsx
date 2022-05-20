import React, {useContext} from 'react'
import { DataContextNinosCamisetas } from "components/page/Tienda/ninos/camisetas/context/DataProviderNinosCamisetas";
import { ProductoItemNinosCamisetas } from "./ProductoItemNinos";

export const NinosCamisetas = () => {
	const value = useContext(DataContextNinosCamisetas)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Camisetas</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemNinosCamisetas 
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