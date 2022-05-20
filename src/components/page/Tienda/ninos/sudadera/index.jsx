import React, {useContext} from 'react'
import { DataContextNinosSudadera } from "components/page/Tienda/ninos/sudadera/context/DataProviderNinosSudadera";
import { ProductoItemNinosSudadera } from "./ProductoItemNinosSudadera";

export const NinosSudadera = () => {
	const value = useContext(DataContextNinosSudadera)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Sudadera</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemNinosSudadera 
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