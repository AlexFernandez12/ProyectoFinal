import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../inicio/slidefotos/slide';
import './index.css';
import styled from 'styled-components';
import img1 from '../../../images/handsome.jpg';
import img2 from '../../../images/mujer.jpg';
import img3 from '../../../images/ninos.jpg';
import img4 from '../../../images/pareja.jpg';
import img5 from '../../../images/inicio.jpg';
import { Link } from "react-router-dom";


const D = () => {
	return (
    
		<main>
      {/* <img src={img5} alt=""/> */}
      <div className='slidefotos'>
			<Titulo>Categorías</Titulo>
			<Slideshow controles={true}>
				<Slide>
					<Link to={'/hombre'}>
						<img src={img1} alt=""/>
					</Link>
					<TextoSlide>
						<p>HOMBRE</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<Link to={'/mujer'}>
						<img src={img2} alt=""/>
					</Link>
					<TextoSlide>
						<p>MUJER</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<Link to={'/ninos'}>
						<img src={img3} alt=""/>
					</Link>
					<TextoSlide>
						<p>NIÑOS</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<Link to={'/accesorios'}>
						<img src={img4} alt=""/>
					</Link>
					<TextoSlide>
						<p>ACCESORIOS</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
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