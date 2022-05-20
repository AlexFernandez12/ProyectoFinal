import React, {useContext} from 'react'
import { DataContextHombreCamisetas } from "components/page/Tienda/hombre/camisetas/context/DataProviderHombreCamisetas";
import { ProductoItemHombreCamisetas } from "./ProductoItemHombre";

export const HombreCamisetas = () => {
	const value = useContext(DataContextHombreCamisetas)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Camisetas</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemHombreCamisetas 
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