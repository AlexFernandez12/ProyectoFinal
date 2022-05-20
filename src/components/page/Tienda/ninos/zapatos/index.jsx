import React, {useContext} from 'react'
import { DataContextNinosZapatos } from "components/page/Tienda/ninos/zapatos/context/DataProviderNinosZapatos";
import { ProductoItemNinosZapatos } from "./ProductoItemNinosZapatos";

export const NinosZapatos = () => {
	const value = useContext(DataContextNinosZapatos)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Zapatos</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemNinosZapatos
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