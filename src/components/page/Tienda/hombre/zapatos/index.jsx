import React, {useContext} from 'react'
import { DataContextHombreZapatos } from "components/page/Tienda/hombre/zapatos/context/DataProviderHombreZapatos";
import { ProductoItemHombreZapatos } from "./ProductoItemHombreZapatos";

export const HombreZapatos = () => {
	const value = useContext(DataContextHombreZapatos)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Zapatos</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemHombreZapatos
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