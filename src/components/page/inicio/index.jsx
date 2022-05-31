import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../inicio/slidefotos/slide';
import './index.css';
import styled from 'styled-components';
import img02 from '../../../images/inicio02.jpg';
import img01 from '../../../images/mujer.jpg';
import img03 from '../../../images/inicio03.jpg';
import img04 from '../../../images/inicio04.jpg';
import headgif from '../../../images/descuento.svg';
import pago from '../../../images/pagoseguro.svg';
import devolucion from '../../../images/devolucion.svg';
import recogida from '../../../images/recogida.svg';

import { Link } from "react-router-dom";


const D = () => {
	return (

		<main>
      {/* <img src={img5} alt=""/> */}
	  <div className='headgif'>
	  		<img src={headgif} alt="" />
			  <h2 className='envio'>Envío gratis en pedidos de +70€ &nbsp;</h2>
			  
			  <h4 className='envio2'>ENVÍO 24-48H</h4>
	  </div>
	  
      <div className='slidefotos'>		  
			<Titulo>Categorías</Titulo>
			<Slideshow controles={true}>
				<Slide>
						<img src={img03} alt=""/>
					<TextoSlide>
						<p>BIENVENIDOS</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<Link to={'/productos'}>
						<img src={img02} alt=""/>
					</Link>
					<TextoSlide>
						<p>PRODUCTOS</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<Link to={'/productos'}>
						<img src={img01} alt=""/>
					</Link>
					<TextoSlide>
						<p>PRODUCTOS</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<Link to={'/login'}>
						<img src={img04} alt=""/>
					</Link>
					<TextoSlide>
						<p>REGISTRATE</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
      </div>

	  <div className='tarjeta1'>
			<div className='bodytarjeta'>
				<img className='fotopago' src={pago} alt="" />
				<h2 className='titulotarjeta'>PAGO SEGURO</h2>
				<p className='descripciontarjeta'><b>Pago contra reembolso, con tarjeta, Bizum o mediante transferencia bancaria.</b></p>
			</div>
		</div> 

		
		<div className='tarjeta2'>
			<div className='bodytarjeta2'>
				<img className='fotopago2' src={devolucion} alt="" />
				<h2 className='titulotarjeta2'>DEVOLUCIONES</h2>
				<p className='descripciontarjeta2'><b>Devoluciones gratuitas en tienda durante 30 días.</b></p>
			</div>
		</div>

		<div className='tarjeta3'>
			<div className='bodytarjeta3'>
				<img className='fotopago3' src={recogida} alt="" />
				<h2 className='titulotarjeta3'>RECOGIDA</h2>
				<p className='descripciontarjeta3'><b>Recogida gratuita en tienda.</b></p>
			</div>
		</div> 

		</main>
	);
}

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
 
export default D;