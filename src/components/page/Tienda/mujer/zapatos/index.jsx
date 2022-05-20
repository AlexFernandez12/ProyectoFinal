import React, {useContext} from 'react'
import { DataContextMujerZapatos } from "components/page/Tienda/mujer/zapatos/context/DataProviderMujerZapatos";
import { ProductoItemMujerZapatos } from "./ProductoItemMujerZapatos";

export const MujerZapatos = () => {
	const value = useContext(DataContextMujerZapatos)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Zapatos</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemMujerZapatos
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