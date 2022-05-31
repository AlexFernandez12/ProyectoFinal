import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import Contacto from "../../../images/contacto2.jpg"

export default function Servicios() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_b1kg8db', 'template_0xvjt49', form.current, 'y--EKdEHLNw4fMDW4')
      .then((result) => {
          console.log(result.text);
          alert ("La petición ha sido enviada con éxito");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert ("Error al enviar la petición");
      });
      
      
  } 
    return ( 
      <div className="contacto">   
        <div className='izq'>
          <img src={Contacto}></img>
        </div>
        <div className='der'>
          <form  ref={form} class="form_contacto" onSubmit={sendEmail}>
            <h2 className='tit'>CONTACTANOS</h2>
            <p type="Name:"><input placeholder="Nombre" className='cuadro' name='name'></input></p>
            <p type="Email:"><input type="email" placeholder="Email" className='cuadro' name='subject'></input></p>
            <p type="Message:"><textarea placeholder="Cuéntenos su problema" className='cuadro' name='email'></textarea></p>
            <input type="submit" value="Enviar" className='enviar_mensaje' />

            <div className='contactar'>
              <div className='informacion'><span class="fa fa-phone"></span>623 714 936</div>
              <div className='informacion'><span class="fa fa-envelope-o"></span>bellacomedac@gmail.com</div> 
            </div>
          </form>
        </div>
      </div>
    )
}
