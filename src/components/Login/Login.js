import React from 'react';
import { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebase-config";
import "./login.css";
import { Link } from "react-router-dom";
import Fondo from "../../images/login.jpg";


function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef1 = useRef(null);
  const passwordRef1 = useRef(null);

  const signUp = e => {
    e.preventDefault();
    const auth = getAuth();
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("El correo registrado es: " +user.email)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
  });
}
  const signIn = e => {

    e.preventDefault();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, emailRef1.current.value, passwordRef1.current.value)
        .then((userCredential) => {
          // Signed in
          
          const user = userCredential.user;
          alert("El correo logueado es: "+user.email)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
}



  return (

    <div className='todo'>
      <div className='izq_log'>
        <img src={Fondo}></img>
      </div>
      <div className='der_log'>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true"></input>

          <div className="signup">
            <form action="">
              <div className='etiqueta'><label htmlFor="chk" aria-hidden="true">Sign up</label></div>
              <input type="email" name="email" placeholder="Ingrese email" ref={emailRef}/>
              <input type="password" name="password" placeholder="Contraseña" required="" ref={passwordRef}/>
              <button className='registro'  onClick={signUp}>Register</button>
            </form>
          </div>
          <div className="login">
            <form action="">
              <div className='etiqueta'><label htmlFor="chk" aria-hidden="true">Login</label></div>
               <input type="email" name="email" placeholder="Ingrese email" ref={emailRef1}/>
              <input type="password" name="password" placeholder="Contraseña" required="" ref={passwordRef1}/>
              <Link to='/'><button className='registro' onClick={signIn}>Login</button></Link>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
  

}
export default Login;