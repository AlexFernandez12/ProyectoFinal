import React, { useRef } from 'react'
import emailjs from 'emailjs-com';

export default function Servicios() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_6z9klu3', 'template_0xvjt49', form.current, 'y--EKdEHLNw4fMDW4')
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
      
        <div className="inicio" style={{
          backgroundImage: 'url("https://www.zurweb.com/wp-content/uploads/2020/03/fondo-contacto.jpg")'
        }}>   
<form  ref={form} class="form_contacto" onSubmit={sendEmail}>
  <h2 className='tit'>CONTACTANOS</h2>
  <p type="Name:"><input placeholder="Nombre" className='cuadro' name='name'></input></p>
  <p type="Email:"><input type="email" placeholder="Email" className='cuadro' name='subject'></input></p>
  <p type="Message:"><textarea placeholder="Cuéntenos su problema" className='cuadro' name='email'></textarea></p>
  <input type="submit" value="Enviar" className='enviar_mensaje' />

  <div className='contactar'>
    <span class="fa fa-phone"></span>623 714 936
    <span class="fa fa-envelope-o"></span> Medac@gmail.com
  </div>
</form>
        </div>
    )
}
