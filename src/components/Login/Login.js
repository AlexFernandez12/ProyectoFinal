import React from 'react';
import { Redirect } from 'react-router-dom';
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { Link } from "react-router-dom";
import "./login.css";
import reactDom from 'react-dom';
import Fondo from "../../images/login.jpg";
function Login() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    if(user=!"")
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };





  return (
    <div className='todo'>
      <div className='izq_log'>
        <img src={Fondo}></img>
      </div>
      <div className='der_log'>
        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true"></input>

          <div class="signup">
            <form>
              <div className='etiqueta'><label for="chk" aria-hidden="true">Sign up</label></div>
              <input type="email" name="email" placeholder="Correo electrónico" required="" onChange={(event) => { setRegisterEmail(event.target.value); }} />
              <input type="password" name="password" placeholder="Contraseña" required="" onChange={(event) => { setRegisterPassword(event.target.value); }} />
              <button onClick={register} className="registro">Registrarse</button>
            </form>
          </div>
          <div class="login">
            <form>
              <div className='etiqueta'><label for="chk" aria-hidden="true">Login</label></div>
              <input type="email" name="email" placeholder="Correo electrónico" required="" onChange={(event) => { setLoginEmail(event.target.value); }} />
              <input type="password" name="password" placeholder="Contraseña" required="" onChange={(event) => { setLoginPassword(event.target.value); }} />
              <Link to='/'><button onClick={login} className="registro">Iniciar</button></Link>

            </form>
          </div>

        </div>
      </div>
    </div>
  );


}
export default Login;