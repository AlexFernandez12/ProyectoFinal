import React, {useContext} from 'react'
import { DataContextMujerSudadera } from "components/page/Tienda/mujer/sudadera/context/DataProviderMujerSudadera";
import { ProductoItemMujerSudadera } from "./ProductoItemMujerSudadera";

export const MujerSudadera = () => {
	const value = useContext(DataContextMujerSudadera)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Sudadera</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemMujerSudadera 
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