import React, {useContext} from 'react'
import { DataContextMujerCamisetas } from "components/page/Tienda/mujer/camisetas/context/DataProviderMujerCamisetas";
import { ProductoItemMujerCamisetas } from "./ProductoItemMujer";

export const MujerCamisetas = () => {
	const value = useContext(DataContextMujerCamisetas)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Camisetas</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemMujerCamisetas 
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