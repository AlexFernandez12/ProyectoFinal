import React from "react";

import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://www.instagram.com/">
          <FaInstagram size="40"  color="#fff"/>
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube size="40"  color="#fff"/>
        </a>  
        <a href="https://www.twitter.com/">
          <FaTwitter size="40"  color="#fff"/>
        </a>  
        <a href="https://www.facebook.com/">
          <FaFacebook size="40"  color="#fff"/>
        </a>
      </div>
      <p className="footer__copyright">Bienvenido a nuestra web de compras. Aquí puedes observar todas nuestras redes sociales</p>
    </footer>
  );
};