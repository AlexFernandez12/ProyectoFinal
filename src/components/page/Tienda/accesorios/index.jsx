import React, {useContext} from 'react'
import { DataContextAccesorios } from "./context/DataProviderAccesorios";
import { ProductoItemAccesorios } from "./ProductoItemAccesorios";

export const Accesorios = () => {
	const value = useContext(DataContextAccesorios)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">Acessorios</h1>
        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItemAccesorios 
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