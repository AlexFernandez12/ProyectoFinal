import React from 'react';
import './services.css';
import cliente from '../../../images/cliente.svg';
import email from '.././../../images/email.svg'
import camara from '../../../images/camara.svg'
import note from '../../../images/note.svg'
import informe from '../../../images/informe.svg'
import redes from '../../../images/redes.svg'


export default function Services() {

    return ( 
      <div className="wrapper">   
        <Tarjeta
        img={cliente}
        tittle="Atención al cliente"
        description="El servicio al cliente es una parte vital de este ciclo de vida y es un aspecto de gran importancia para nuestro negocio. Sin embargo, muchas compañías no están preparadas para manejar las solicitudes de sus clientes de forma eficiente. Por ello, ofrecerle a tus clientes asesoría sobre cómo implementar una plataforma de servicio al cliente efectiva, representa una excelente oportunidad de upsell en cualquier proyecto de Ecommerce."
        />

        <Tarjeta
        img={email}
        tittle="Email transaccional"
        description="Después de los emails informativos más personales, tenemos los emails transaccionales, que son aquellos que se generan de forma automática con cada venta que realizas, siendo el email de «confirmación de la orden» el más común. Los emails transaccionales no tienen porqué ser aburridos, de hecho, cada correo que envía la tienda representa una excelente oportunidad de interactuar con el cliente y sirve como otra extensión de la marca de la compañía."
        />

        <Tarjeta
        img={camara}
        tittle="Fotografía de producto"
        description="¿Cuántas veces has entrado en una tienda online y haz hecho clic en una foto, esperando ver una imagen en alta resolución del producto, para sólo ver un thumbnail o imagen miniatura aparecer en un lightbox? Estamos seguros que no somos los únicos al que le molesta esto. Las fotos de excelente calidad de los productos son clave para ofrecer a los compradores tanta información acerca del producto como sea posible."
        />

        <Tarjeta
        img={note}
        tittle="List building"
        description="Con frecuencia leerás que el «list building», que es otra forma de llamar a la recolección de direcciones de email, es una de las mejores herramientas de marketing para los sitios web de Ecommerce. Tener un listado de suscriptores, que han otorgado permiso para ser contactados, es una gran forma de dar a conocer tus productos y servicios a tus clientes. Por ellos, otro servicio que podrías ofrecer es establecer una forma sencilla de captar direcciones de email para tu cliente."
        />

        <Tarjeta
        img={informe}
        tittle="Diseño de informes"
        description="Aunque muchos amamos los cuadros, gráficos y hojas de cálculo, ciertamente no son para todo el mundo. Por eso, ofrecemos a nuestros clientes la posibilidad de crear informes semanales o mensuales personalizados, y así añadir un servicio de calidad a tu paquete mensual.."
        />

        <Tarjeta
        img={redes}
        tittle="Integraciones sociales"
        description="Cuando hablamos de Ecommerce, no hay forma de desestimar la importancia de las redes sociales. Es muy difícil ignorar cuando lees como una tienda «estalló» gracias a un tuit de un influenciador importante. Por lo que encontrarás nuestras redes sociales en el pie de nuestra página. Gracias por seguirnos!"
        />

      </div>
    )
}

function Tarjeta(props){
  return(
    <div className="card">
      <div className="cardBody">
        <img className='cardImage' src={props.img} />
        <h2 className="cardTittle">{props.tittle}</h2>
        <p className="cardDescription ">{props.description}</p>
      </div>
    </div>
  )
}
