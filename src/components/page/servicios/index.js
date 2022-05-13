import React from 'react'
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
import Portada from "images/inicio.jpg";

export default function Servicios() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  } 
    return (
        <div className="inicio">   
               <form class="form" onSubmit={sendEmail}>
  <h2 className='tit'>CONTACT US</h2>
  <p type="Name:"><input placeholder="Escriba su nombre" className='cuadro'></input></p>
  <p type="Email:"><input placeholder="Escriba su email" className='cuadro'></input></p>
  <p type="Message:"><input placeholder="Cuentenos su problema" className='cuadro'></input></p>
  <button className='enviar_mensaje'>Enviar</button>

  <div className='contactar'>
    <span class="fa fa-phone"></span>623 714 936
    <span class="fa fa-envelope-o"></span> medac@gmail.com
  </div>
</form>
        </div>
    )
}
