import React, {useContext} from 'react'
import { DataContextHombreSudadera } from "components/page/hombre/sudadera/context/DataProviderHombreSudadera";
import { ProductoItemHombreSudadera } from "./ProductoItemHombreSudadera";

export const HombreSudadera = () => {
	const value = useContext(DataContextHombreSudadera)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Sudadera</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemHombreSudadera 
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