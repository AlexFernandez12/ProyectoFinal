import React, {useContext, useState} from 'react'
import { DataContext } from "context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import  Lista from "./Lista"
import  Select  from 'react-select';
export const ProductosList = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
	const Sexo = [
		{ label: 'Hombre', value: 1 },
		{ label: 'Mujer', value:'mujer' },
		{ label: 'Accesorios', value: 'accesorios' }
	]
	const [addrtype, setAddrType] = useState('Home')
    
	function handleAddrTypeChange(e) {
	  setAddrType(e.target.value);
	  console.log(addrtype)
	}
    return (
			<>
			<h1 className="produ">PRODUCTOS</h1>
			<Lista></Lista>
			<select
  defaultValue={addrtype}
  onChange={handleAddrTypeChange}
  className="browser-default custom-select">
    
  <option value="hombre">Hombre</option>
  <option value="mujer">Mujer</option>
  <option value="zapatos">Zapatos</option>
  <option value="accesorios">Accesorios</option>

</select>
        <div className="productos">
    
							{productos.map((producto) =>{
								console.log(addrtype);
								if (addrtype === producto.sexo){
									return(
								<ProductoItem 
									key={producto.id}
									title={producto.title}
									image={producto.image}
									category={producto.category}
									price={producto.price}
									id={producto.id}
								/>)
								}else if (addrtype === "Home"){
									return(
										<ProductoItem 
											key={producto.id}
											title={producto.title}
											image={producto.image}
											category={producto.category}
											price={producto.price}
											id={producto.id}
										/>)
								}
							})}					
        </div>
				</>
    )
}
