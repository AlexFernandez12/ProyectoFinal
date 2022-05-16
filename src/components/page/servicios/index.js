import React, { useRef } from 'react'
import emailjs from 'emailjs-com';

export default function Servicios() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_6z9klu3', 'template_0xvjt49', form.current, 'y--EKdEHLNw4fMDW4')
      .then((result) => {
          console.log(result.text);
          alert ("Petición enviada correctamente");
      }, (error) => {
          console.log(error.text);
          alert ("Error al enviar");
      });
  } 
    return (
        <div className="inicio">   
               <form  ref={form} class="form_contacto" onSubmit={sendEmail}>
  <h2 className='tit'>CONTACT US</h2>
  <p type="Name:"><input placeholder="Escriba su nombre" className='cuadro' name='name'></input></p>
  <p type="Email:"><input placeholder="Escriba su email" className='cuadro' name='subject'></input></p>
  <p type="Message:"><input placeholder="Cuentenos su problema" className='cuadro' name='email'></input></p>
  <input type="submit" value="Send" className='enviar_mensaje' />

  <div className='contactar'>
    <span class="fa fa-phone"></span>623 714 936
    <span class="fa fa-envelope-o"></span> medac@gmail.com
  </div>
</form>
        </div>
    )
}
