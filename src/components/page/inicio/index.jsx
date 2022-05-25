import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../inicio/slidefotos/slide';
import './index.css';
import styled from 'styled-components';
import img1 from '../../../images/logo.jpg';
import img2 from '../../../images/logo.jpg';
import img3 from '../../../images/logo.jpg';
import img4 from '../../../images/logo.jpg';
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
					<a href="https://www.falconmaters.com">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>MUJER</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img3} alt=""/>
					</a>
					<TextoSlide>
						<p>NIÑOS</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img4} alt=""/>
					</a>
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